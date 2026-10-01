# T2: Backend, live-ops and data stack for 「도깨비 방범대」

Research date: 2026-10-01. Labels: **V** = verified (official/primary page read), **S** = secondary (trade press/blog), **U** = unverified (could not confirm), **A** = my assessment (not a sourced fact). The `[Rn]` tags point to the source list at the end, which gives each URL with its page date or "accessed 2026-10-01".

## 0. Recommendation summary

**Pick:** Nakama + Hiro on Heroic Cloud in Seoul as the authoritative game server. Add Satori for live ops and experiments when soft-launch testing starts. Use the Firebase client SDKs (Analytics, Crashlytics, FCM) feeding BigQuery, Data Studio and Python for data, and start attribution on one MMP free tier (Singular or AppsFlyer).

Why this fits the constraints:
- **Coverage of the list.** Most of the server list is native in Nakama and Hiro:
  - Nakama: device, Apple and Google login; IAP and subscription validation with store server notifications; friends; groups with chat; leaderboards and tournaments; matchmaker; realtime multiplayer [R4,R6,R7] V.
  - Hiro: wallet, inventory, store, weighted/gacha rewards, energies, achievements, a reward mailbox, Teams with chat, and event leaderboards with a configurable cohort size (set it to 30), tiers and promotion/demotion zones [R8–R13] V.
  - Live config: Hiro "personalizers" change configs without a deploy [R11] V. Satori adds audiences, experiments with holdouts, live events, push/email and BigQuery export [R14,R15] V.
- **Low lock-in at the core.** The Nakama server is Apache-2.0 [R4] V, so you can leave Heroic Cloud and self-host. Hiro and Satori are proprietary [R8] V.
- **Korea.** Heroic Cloud runs in GCP asia-northeast3, which is Seoul [R2] V. Nakama documents custom-auth hooks for unlisted providers [R6] V, and v3.41.0 (2026-09-18) added named auth providers in the Go runtime [R3] V. Either can host a Kakao OIDC token check (A); Kakao Login offers OIDC as an opt-in [R36] V.
- **Small-team cost floor.** The pricing-page calculator is $400 per Nakama CPU plus $200 per DB CPU each month. High availability starts at 2 Nakama CPUs, so an HA production setup costs $1,000/mo and a single node costs $600/mo [R1] V. Satori starts at $600/mo [R1] V. Hiro is an annual per-developer license with no public price [R8] U, so ask for a quote.
- **The alternatives got weaker in 2026:**
  - UGS: Economy stopped taking new projects on 2026-09-08 [R27] V; existing projects use it free from 2026-08-25 [R28] V. Unity's own Multiplay hosting was deprecated on 2026-04-01 [R29] V.
  - PlayFab: the free Foundation Mode requires shipping on Xbox [R19] V. Economy v2 has no drop tables or recharge rates [R20] V.
  - Firebase: no matchmaking, guilds or leagues (A).

**Stays custom (A):**
- League re-simulation worker: a deterministic sim built from the client's sim code (e.g., .NET on Cloud Run Seoul [R48] V if the client is C#).
- Guild-raid logic: shared HP and the guild-median damage cap (Hiro Teams has no raid primitive [R10] V).
- Bot-fill AI.
- Kakao token verification hook.
- Spend limits.
- Server-to-BigQuery event writer.
- Probability tables with an audit log (Korean disclosure duty since 2024-03-22 [R47] V).
- CS/admin tools.

**Budget fallback (A):** self-host Nakama OSS on GCP Seoul plus Hiro. Clustering/HA is a Nakama Enterprise feature [R5] V, so OSS means one node. Defer Satori and do experiments by hashing assignments in Nakama.

## 1. Game backend platforms

### 1a. Coverage (● native, ◐ partial/primitives, ○ build yourself)

| Need | Nakama + Hiro (+Satori) | Azure PlayFab | Unity UGS | Firebase |
|---|---|---|---|---|
| Guest/Apple/Google login | ● [R6] | ● [R23] | ● [R33] | ● [R36] |
| Kakao | ◐ custom-auth hook [R6] | ◐ OIDC [R23] | ◐ OIDC (SDK 2.2+) [R33] | ◐ OIDC: 50 MAU free, then $0.015/MAU [R36] |
| Wallets, levels, shards | ● Hiro [R8] | ● Economy v2 [R20] | ◐ Economy closed to new projects; use Cloud Code + Save [R27] | ○ |
| Reward boxes with odds | ● weighted/gacha [R13] | ◐ no drop tables in v2; Azure Functions [R20] | ◐ (A) | ○ |
| IAP + subscriptions validation | ● Apple/Google (+S2S), Huawei, FB Instant [R7]; Samsung (v3.40) [R3] | ● Apple/Google/others [R20] | U | ○ |
| Friends | ● [R4] | ● [R19b] | ● 50K MAU free [R26] | ○ |
| Guild + chat | ● groups/chat, Hiro Teams [R4,R10] | ◐ "guilds, chat" listed [R19b] | ◐ no guild service; Vivox text [R26] | ○ |
| Weekly league (cohorts, tiers, promo/relegation) | ● event leaderboards [R9] | ◐ versioned leaderboards [R21] | ◐ buckets + tiers [R32] | ○ |
| Re-sim verification, guild raid | ○ | ○ | ○ | ○ |
| 2P realtime + matchmaking | ● matchmaker, authoritative matches [R4] | ◐ Matchmaking/Lobby + Party/MPS [R17] | ◐ Matchmaker/Relay/Lobby; Unity Multiplay ended [R26,R29] | ○ |
| Mail/inbox | ● Reward Mailbox [R12] | U | ○ | ○ |
| Push | ● Satori push/email [R14] | ● [R19b] | U | ● FCM [R35] |
| Server-driven config | ● personalizers / Satori flags [R11] | ● title data/content [R17] | ● Remote Config [R26] | ● Remote Config [R35] |
| A/B + holdouts | ● Satori (holdouts in release notes) [R15] | ◐ holdouts U | ◐ holdouts U | ◐ no holdouts documented [R38] |
| Telemetry → warehouse | ● Satori → BigQuery/Snowflake/S3… [R14] | ● Blob/ADX/Fabric/S3-preview [R24] | ◐ Snowflake share, GCP EU-W4/US-C1 only [R34] | ● BigQuery [R49] |

All labels in this matrix are V, except the cells marked U or (A).

### 1b. Platform facts

| | Custom logic | Hosting | Pricing (2026) | Lock-in / data | Korea/Asia | Notable games |
|---|---|---|---|---|---|---|
| **Nakama / Heroic Cloud** | Go, Lua or TypeScript runtime [R4] V | Self-host (OSS) or managed; clustering only in Enterprise [R5] V | Calculator: $400 per Nakama CPU + $200 per DB CPU per month; HA from 2 CPUs; no DAU/MAU/CCU limits; billed on the day's peak CPU [R1,R2] V. Dev tier price not shown (U). Support $2,000 / $6,000 (period not stated) [R1] V | Apache-2.0 core; Hiro and Satori proprietary [R4,R8] V | GCP Seoul [R2] V | Merge Dragons (Gram), Wordscapes (People Fun), Kwalee, Halfbrick, Remedy, Highguard (2026) [R16] V |
| **Satori** | Config + SDKs | Managed | From $600/mo, "event-based ingestion"; v2.2.1 2026-09-01 [R1,R15] V | Raw-event export [R14] V | Heroic Cloud regions (A) | Wargaming testimonial [R14] V |
| **Azure PlayFab** | CloudScript on Azure Functions (C#, JS…); needs your own Azure subscription [R22] V | Managed SaaS | PAYG $0 base; Standard $99 (incl. $400 meters); Premium $1,999 (incl. $8,000); Enterprise from $10k. Sample meters: profile writes $7.15/M, PlayStream $6.60/M, Economy v2 first 150K requests free then $7/M, inventory writes $40/M [R17] V. Dev Mode: 1,000 users/title, being replaced by Xbox-only Foundation Mode since 2026-03-11 [R18,R19] V. Page also shows "$0/month before your title passes 100K players" [R17] V (terms unclear) | Proprietary; event export via Data Connections [R24] V | Party in Japan/East Asia/SE Asia [R25] V; core-data region not documented (U) | Minecraft, Sea of Thieves, Flight Simulator use the Economy v2 architecture [R20] V |
| **Unity UGS** | Cloud Code in C# modules or JS [R26b] V | Managed SaaS | Auth free. Cloud Save: 1M reads + 1M writes + 5 GiB/mo free. Cloud Code: 1M invocations + 20 compute-h free, then $1.50/M. Leaderboards "free for a limited time." Analytics 50K MAU free, then $0.0036/MAU. Remote Config and A/B free. Relay 50 avg CCU free [R26] V | Going over a free tier blocks *all* UGS until you add payment [R31] V | Asia bandwidth $0.16/GiB [R26] V | U |
| **Firebase** | Cloud Functions (Blaze: 2M invocations/mo free, then $0.40/M) [R35] V | Google Cloud | Auth 50K MAU free, then $0.0055/MAU. Firestore free tier: 50K reads + 20K writes/day. Seoul: $0.038/100K reads, $0.115/100K writes [R36,R37] V. Remote Config: **paid since 2026-09-01** beyond 100K fetches/day ($0.06 per 10K) [R35] V. A/B, Analytics, FCM, Crashlytics free [R35] V | Your GCP project (A) | Firestore and Cloud Run in Seoul [R37,R48] V | U |

PlayFab status notes:
- Economy v2 is GA. v1 is "bugfix-only" but not deprecated [R20] V.
- Statistics v2 went GA on 2025-03-03 [R21] V.
- Leaderboard reads cost $0.10/M [R17] V.

### 1c. Other platforms

| Platform | Offer | Pricing |
|---|---|---|
| AccelByte AGS | Accounts, commerce, matchmaking/sessions, chat, cloud save; "Extend" for custom code [R40b] V | Per peak CCU per day: Foundations $0.0124, Online $0.0248, Complete $0.1100 (first 5K tier). Free up to 30 CCU. Private cloud $1,500–3,500/mo per environment [R40] V |
| Beamable | C# microservices, LiveOps portal [R41] V | 90-day free trial; Developer $125/mo (1K MAU); Studio $595 (30K MAU); Pro $1,895 (200K MAU) [R41] V. Skillz bought the tech assets on 2026-02-04 [R41b] S |
| brainCloud | JS cloud code, groups, chat, tournaments, lobbies, push, private licensing [R42] V | Dev free (100 DAU); Lite $15; Standard $30; Business $99/mo (10M API calls, then $10.25/M) [R42] V |
| NHN Cloud Gamebase | Guest login and IdPs incl. NAVER, LINE, PAYCO, Apple, Google, plus a KAKAOGAME adapter. IAP for App Store, Google Play, ONE store, Galaxy Store. Maintenance, notices, bans, coupons, push, leaderboard [R43] V. KAKAOGAME prerequisites: U | 2019: free up to 300K cumulative monthly DAU; previously ₩18/DAU [R44] S. 2026 calculator not readable (U) |

### 1d. Custom backend (Go/.NET + PostgreSQL/Redis on GCP/AWS): what you must build (A)

1. Auth and account linking (guest, Apple, Google, Kakao OIDC).
2. Receipt validation:
   - Apple: use the App Store Server API and Notifications v2; `verifyReceipt` is deprecated [R45] V.
   - Google: use the Play Developer API and RTDN; Billing Library 8+ is required for app updates from 2026-08-31 [R46] V.
3. Idempotent currency ledger, inventory, and gacha tables with an audit log.
4. Friends, guilds, WebSocket chat and moderation.
5. Raid, league cohorts and re-sim queue.
6. Matchmaker, realtime relay and bot fill.
7. Leaderboards, mail, push fan-out and spend limits.
8. Config service with experiment assignment.
9. Event pipeline and admin console.
10. Backups and on-call.

This is realistic only from about 5 engineers onward. Reference cost: managed Postgres starts around $9.37/mo [R35] V.

### 1e. Plan by team size (A)

- **3 people (prototype):**
  - Heroic Cloud dev tier, or Nakama OSS in Docker.
  - Hiro systems.
  - Firebase Analytics, Crashlytics and FCM.
- **5 people (soft launch, Korea + one English-speaking market):**
  - Heroic Cloud HA in Seoul (about $1,000/mo).
  - Satori (from $600/mo) for experiments and holdouts.
  - Re-sim worker on Cloud Run Seoul.
  - One MMP.
- **7–10 people (global):** scale CPUs; consider a Heroic support plan.

## 2. Data and experimentation stack

**Analytics and event pipelines:**

| Tool | Free tier | Paid / notes |
|---|---|---|
| Firebase/GA4 → BigQuery | Analytics free [R35] V | Daily export capped at 1M events/day (standard property). Streaming has no volume limit and costs $0.05/GB [R49] V |
| Satori | — | From $600/mo; dashboards and funnels added Jul 2026 [R1,R14] V |
| UGS Analytics | 50K MAU | $0.0036/MAU after that; raw data via Snowflake share [R26,R34] V |
| GameAnalytics | Free, no MAU limits | PipelineIQ (warehouse/export) from $499/mo + $6.25/TiB [R53] V |
| Amplitude | 2M events/mo | Plus up to 70M events [R54] V |
| Mixpanel | 1M events/mo | Growth per-event rate only via calculator [R55] V |
| PostHog | 1M events, 1M flag requests | $0.00005/event; experiments billed as flag requests at $0.0001 each [R56] V |

**Warehouse and BI:**
- BigQuery on-demand: first 1 TiB/mo free, then $6.25/TiB (Iowa) or **$7.50/TiB (Seoul)** [R50] V.
- BigQuery storage: active logical $0.023/GiB-mo, long-term $0.016, first 10 GiB free [R50] V.
- BigQuery Storage Write API: first 2 TiB/mo free [R50] V.
- **Data Studio**: Looker Studio was renamed on 2026-04-16 [R51b] V. It is free; Pro costs $9/user/project/mo [R51] V.
- **Metabase**: OSS self-host is free; Cloud Starter $100/mo for 5 users; Pro $575/mo [R52] V.

**Experiments:**
- Firebase A/B: free; 300 experiments and 24 running; no holdouts documented [R38] V.
- Satori: phased experiments with goal metrics [R59] V and holdouts [R15] V.
- GrowthBook: OSS free; Cloud Pro $40/seat; **holdouts are Enterprise-only** [R57] V.
- Statsig: Developer tier free (2M events); Pro $150/mo [R58] V.
  - Ownership: OpenAI agreed to acquire it on 2025-09-02.
  - On 2026-05-05, Amplitude took over Statsig's brand, platform and customers; the original team stayed at OpenAI [R58] V. Treat this as vendor-continuity risk.

**Survival analysis:** lifelines 0.30.3 (2026-03-05) and scikit-survival 0.28.0 (2026-07-05) [R60] V.

**Pipeline suggestion (A):**
- The client sends Firebase events through the streaming export.
- Nakama writes authoritative economy, purchase and league events to BigQuery Seoul through the Storage Write API.
- Join the two on a user id.
- Run experiments in Satori. A free alternative is hashing in Nakama plus analysis in BigQuery and Python.

## 3. Attribution (MMP)

**MMP free tiers:**

| MMP | Free tier | Paid |
|---|---|---|
| AppsFlyer | Zero/Growth welcome package: 12K conversions in the first year, SKAN included; organic installs free [R61] V | Growth $0.07/conversion [R61] V |
| Singular | 15,000 paid conversions (period not stated) [R62] V | Growth $0.05/conversion [R62] V |
| Adjust | "Base": 1,500 attributions/mo for 12 months [R63] S (official page blocked, HTTP 429) | Quote-based [R63] S |

**Platform attribution status:**
- **Apple AdAttributionKit** is "fully interoperable with SKAdNetwork" [R64] V.
- WWDC25 / iOS 18.4 added AdAttributionKit features [R64] V:
  - overlapping re-engagement windows;
  - configurable attribution windows and cooldowns;
  - country code in postbacks;
  - development postbacks.
- WWDC26 brought no meaningful AdAttributionKit or ATT changes [R65] S.
- No SKAdNetwork end date was found (U).
- **Android Privacy Sandbox** is being retired:
  - Retirement of Attribution Reporting, Topics, Protected Audience and SDK Runtime on Chrome and Android was announced on 2025-10-17 [R66] V.
  - The status page shows the Android APIs as "Scheduled for phaseout" (page updated 2026-08-14) [R66] V.
  - The announcement does not mention GAID [R66] V.
- Firebase Dynamic Links shut down on 2025-08-25, so deep links must come from the MMP [R69] V.

## 4. Push and in-game messaging

- **FCM** is free [R35] V. Quotas [R67] V:
  - 600K messages/min per project;
  - 240 messages/min and 5,000/hour per Android device;
  - 4,096-byte payload.
- **APNs** comes with the Apple Developer Program at $99/yr [R68] V. Apple lists no per-message price (A).
- In-game messaging options:
  - Nakama in-app notifications [R4] V;
  - Hiro Reward Mailbox for compensation and payouts [R12] V;
  - Satori scheduled push and email [R14] V.
- **Korea:** ad pushes need explicit opt-in, separate consent for 21:00–08:00, a "(광고)" label, and consent re-confirmation every 2 years (Network Act Art. 50) [R70] S.

## Sources (accessed 2026-10-01 unless a date is given)

- R1 https://heroiclabs.com/pricing/ (calculator formula read from the page script)
- R2 https://heroiclabs.com/docs/heroic-cloud/concepts/titles/nakama-deployments/index.html
- R3 https://heroiclabs.com/docs/nakama/getting-started/release-notes/ (v3.41.0 2026-09-18; v3.40.0 2026-07-13)
- R4 https://github.com/heroiclabs/nakama
- R5 https://heroiclabs.com/enterprise/
- R6 https://heroiclabs.com/docs/nakama/concepts/authentication/
- R7 https://heroiclabs.com/docs/nakama/concepts/iap-validation/
- R8 https://heroiclabs.com/hiro/
- R9 https://heroiclabs.com/docs/hiro/concepts/event-leaderboards/
- R10 https://heroiclabs.com/docs/hiro/concepts/teams/
- R11 https://heroiclabs.com/docs/hiro/concepts/personalizers/
- R12 https://heroiclabs.com/docs/hiro/concepts/mailbox/
- R13 https://heroiclabs.com/docs/hiro/concepts/economy/rewards/
- R14 https://heroiclabs.com/satori/ ; https://heroiclabs.com/blog/jul-2026-newsletter/index.html
- R15 https://heroiclabs.com/docs/satori/concepts/introduction/release-notes/ (v2.2.1 2026-09-01)
- R16 https://heroiclabs.com/customers/ ; https://heroiclabs.com/blog/feb-2026-newsletter/index.html
- R17 https://developer.microsoft.com/en-us/games/products/playfab/pricing
- R18 https://learn.microsoft.com/en-us/gaming/playfab/pricing/development-mode (updated 2026-03-11)
- R19 https://learn.microsoft.com/en-us/gaming/playfab/get-started/foundation-onboarding (updated 2026-04-29)
- R19b https://developer.microsoft.com/en-us/games/articles/2026/03/gdc-2026-introducing-foundation-mode-for-playfab/ (2026-03-11)
- R20 https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/overview (updated 2026-04-15)
- R21 https://developer.microsoft.com/en-us/games/articles/2025/03/new-playfab-statistics-general-availability/ (2025-03-03)
- R22 https://learn.microsoft.com/en-us/xbox/playfab/live-service-management/service-gateway/automation/cloudscript-af/ (updated 2025-05-01)
- R23 https://learn.microsoft.com/en-us/rest/api/playfab/client/authentication/login-with-openid-connect (updated 2026-09-29)
- R24 https://learn.microsoft.com/en-us/xbox/playfab/data-analytics/export-data/data-connection-overview (updated 2026-03-24)
- R25 https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/networking/supported-azure-regions
- R26 https://unity.com/products/gaming-services/pricing ; R26b https://docs.unity.com/en-us/cloud-code/modules/reference/cost
- R27 https://docs.unity.com/en-us/economy
- R28 https://discussions.unity.com/t/clarification-on-long-term-support-and-sunset-notice-for-existing-unity-economy-projects/1734744 (Unity staff: usage free from 2026-08-25, ≥6 months notice before any shutdown)
- R29 https://status.unity.com/info_notices/362941 (2026-03-31)
- R31 https://docs.unity.com/en-us/services/pricing-and-billing
- R32 https://docs.unity.com/en-us/leaderboards/concepts/buckets
- R33 https://docs.unity.com/en-us/authentication/openid-connect ; https://docs.unity.com/ugs/manual/authentication/manual/approaches-to-authentication
- R34 https://docs.unity.com/ugs/manual/analytics/manual/data-access
- R35 https://firebase.google.com/pricing
- R36 https://cloud.google.com/identity-platform/pricing ; Kakao OIDC: http://developers.kakao.com/docs/en/kakaologin/common
- R37 https://cloud.google.com/firestore/pricing (Seoul values parsed from the page's region table)
- R38 https://firebase.google.com/docs/ab-testing/abtest-config
- R40 https://accelbyte.io/ags-pricing ; R40b https://accelbyte.io/gaming-services
- R41 https://beamable.com/pricing ; R41b https://www.pocketgamer.biz/skillz-acquires-beamables-backend-tech/ (2026-02-04)
- R42 https://getbraincloud.com/pricing ; https://getbraincloud.com/
- R43 https://docs.nhncloud.com/ko/Game/Gamebase/ko/Overview/ ; https://docs.nhncloud.com/ko/Game/Gamebase/ko/aos-authentication/
- R44 https://www.asiatoday.co.kr/kn/view.php?key=20190905010003667 (2019-09-05)
- R45 https://developer.apple.com/forums/thread/731550 (Apple staff reply)
- R46 https://developer.android.com/google/play/billing/deprecation-faq (updated 2026-09-09)
- R47 https://www.korea.kr/news/policyNewsView.do?newsId=148924297 (2024-01-02)
- R48 https://cloud.google.com/run/docs/locations
- R49 https://support.google.com/analytics/answer/9358801
- R50 https://cloud.google.com/bigquery/pricing (Seoul values parsed from the page's region table)
- R51 https://cloud.google.com/data-studio ; R51b https://docs.cloud.google.com/data-studio/release-notes (2026-04-16)
- R52 https://www.metabase.com/pricing/
- R53 https://www.gameanalytics.com/pricing
- R54 https://amplitude.com/pricing
- R55 https://mixpanel.com/pricing/
- R56 https://posthog.com/product-analytics/pricing ; https://posthog.com/experiments/pricing
- R57 https://www.growthbook.io/pricing ; https://docs.growthbook.io/app/holdouts
- R58 https://www.statsig.com/pricing ; https://www.statsig.com/blog/openai-acquisition (2025-09-02, with Amplitude note) ; https://amplitude.com/blog/amplitude-and-statsig-partnership (2026-05-05)
- R59 https://heroiclabs.com/docs/satori/concepts/experiments/
- R60 https://pypi.org/project/lifelines/ ; https://pypi.org/project/scikit-survival/
- R61 https://www.appsflyer.com/pricing/
- R62 https://www.singular.net/pricing/
- R63 https://splitmetrics.com/blog/best-mobile-measurement-partners-mmps/ (2026-08-03)
- R64 https://developer.apple.com/videos/play/wwdc2025/221/ ; https://developer.apple.com/videos/play/wwdc2024/10060/
- R65 https://www.kochava.com/ko/blog/your-ios-attribution-strategy-2026-reality-check/ (2026-06-26)
- R66 https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies (2025-10-17) ; https://privacysandbox.google.com/overview/status (updated 2026-08-14)
- R67 https://firebase.google.com/docs/cloud-messaging ; https://firebase.google.com/docs/cloud-messaging/throttling-and-quotas
- R68 https://developer.apple.com/programs/whats-included/
- R69 https://firebase.google.com/support/dynamic-links-faq
- R70 https://developers.fingerpush.com/app-push/guide/ads
