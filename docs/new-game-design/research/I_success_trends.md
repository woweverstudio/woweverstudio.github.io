# I — What Long-Lived Mobile Games Share, and 2025–2026 Market Trends
*Research input for the woweverstudio design document: a new IAP-only (no ads) mobile game from a 5–10-person studio, launching globally with Korea as a key market, targeting high retention, long daily playtime and high IAP revenue. Prepared 2026-10-01.*

**Scope.** (1) Academic evidence on mobile/F2P success and longevity; (2) evergreen games, recent failures and what separated them; (3) 2025–2026 trends. New sources only; overlaps with notes A–F are cited by their existing ids (E1, E37, B12…).

**Verification legend.**
- **Verified: yes** — I opened the primary page, document or full report and read the cited passage in this session.
- **partial** — I read only an abstract, metadata or an auto-generated summary.
- **secondary** — the number comes from a news or digest page reporting someone else's (often paywalled) data; I opened that page, not the report.
- Sensor Tower and AppMagic figures are App Store + Google Play estimates and exclude web-shop (D2C) and ad revenue unless stated. Providers' methods differ.
- "[inference]" marks my own reasoning.

---

## Executive summary — the 10 most decision-relevant findings

1. **Base rates are brutal, and incumbency compounds.**
   - Only 22 of ~53,000 games launched since 2020 (0.04%) grossed $1B+; just 2 were Western [E20, re-read].
   - About 1 in 4 young top-200 entrants becomes a 5-year incumbent; 5+-year-old games earn ~57% of top-200 revenue [I16]. 2015–2020 releases earn nearly half of top-grossing revenue, 2023–25 releases 22% [I15].
   - H1 2026 launches above $100K/month IAP: match-3 1 of 120; coin looters 0 of 42; farming 8 of 55 [I18].
2. **Longevity is operated, and it can be lost.** Clash Royale's monthly revenue rose from $20.9M to $51.4M (Mar–Jun 2025) after Supercell removed chest timers, simplified progression and added an auto-battler mode from the cancelled Clash Mini [I32, I34]. Brawl Stars lost 57% of store sales in 2025 after balance and pricing misfires [I35, I36].
3. **Trust is a longevity asset.** A surprise removal backfired at Clash Royale although the share of players earning wild cards rose (59.8% → 67.4%): "Players will base their assumptions on our track record" [I33].
4. **Social features need scale.** In 9,700 Steam freemium games, many social features raised superstar odds by 49 pp on a large installed base but cut them by 26 pp on a small one [I1]. Clans and friend play raise playtime and spending [I5]; co-op events grew fastest in mid-core (+36%) [I15]. So: async, small-group co-op.
5. **Update quality beats update count.** Major, infrequent updates lifted engagement 11–49%; minor, frequent ones −4.7% to +5.9% [I8]; on iOS an update raises download growth 26% [I7].
6. **LiveOps density keeps rising.** Events per game went from 73 to 89 per month in 2025; collections appear in ~80% of games [I15]. Interlocking systems (event menu, multi-tier passes, expeditions, albums) give the most consistent revenue lifts [I14].
7. **For IAP-only, hybrid action/strategy fits better than hybrid puzzle.** Hybridcasual Action & Strategy earns 81.9% of revenue from IAP vs 59.0% for Lifestyle & Puzzle; US puzzle UA is crowded (56.2% of ad spend for 41.3% of IAP) [I14]. Sort puzzles still boom (+229%) [I18], and a ~20-person studio built Pixel Flow [I38].
8. **Payments are opening but unsettled, and Korea lags.** US iOS link-outs have been commission-free since April 2025, but the Supreme Court will review the case [I55, I56]. Google's proposed 20%/10% fees plus 5% billing reach Korea by end-2026 if approved [I57, I59]. Korea's regulator again delayed its ruling on the 26% third-party fee [I60].
9. **Paid randomness is being age-gated worldwide** — Brazil under 18 [I63, I64], Australia M rating [I65], FTC parental consent under 16 [I62], Korea's odds law [E17] — even as LiveOps shifts toward gacha and multi-pass mechanics [I14, I22]. Make randomness earned, disclosed and region-switchable.
10. **Run-based modes are being bolted onto incumbents** [I22, I32], but collection-gacha hype decays: Pokémon TCG Pocket fell from $235.3M to $31.4M a month in 17 months [I42]. AI is used mostly behind the scenes, and 52% of developers see generative AI as harmful [I66, I67].

---

## (a) 15 characteristics of long-lived mobile games

Each item lists the evidence, then the implication for this project.

**1. A systemic core that makes its own variety, refreshed by occasional big "sparks."**
- Long-lived games run on PvP/co-op matches, card metas, runs or generated levels rather than handcrafted content [E1, E44].
- They are periodically re-energised by a big new mode:
  - Clash Royale's Merge Tactics, a four-player auto-battler mode, launched globally on 2025-07-04; daily revenue hit $3.8M four days later [I32].
  - Clash Royale's GM: "In these forever games, there are many 'sparks' in the form of new content and features" [I34].
  - Brawl Stars' GM warns that mode experiments "stabilize engagement but don't sustain it long-term" [I36].
- Handcrafted content is costly: Genshin reportedly costs upwards of $200M a year to maintain [I27].
- *Implication:* the core loop must generate variety by itself; plan 1–2 major mode or system "sparks" a year on top of routine events.

**2. Survival past year two is the real gate, because revenue compounds with age.**
- Games 5+ years old earn about 57% of top-200 revenue; about 1 in 4 young entrants becomes such an incumbent [I16].
- Nearly half of top-grossing revenue comes from 2015–2020 releases [I15]; incumbency exceeds 80% in most genres [E1].
- Historical contrast: in 2012–13, 69% (iOS) and 82% (Android) of top-50 grossing apps left the list within a year [I13]. In 2014–17, 64% of entrants to the US top 50 stayed five days or less [I17].
- Korea: early chart entrants survive longer [I3]; genre and publisher capability predict grossing rank, and store featuring helps both ranks [I4].
- *Implication:* judge success by year-two cohort retention and compounding revenue per user, not the launch spike. Budget for at least two years of LiveOps.

**3. Dense, interlocking LiveOps, not one-off events.**
- Event menus were followed by a revenue lift in 83.4% of tracked cases; expeditions, multi-tier passes, single passes and albums were the next most consistent [I14].
- Events per game rose from 73 to 89 per month in 2025 [I15]. 84% of IAP goes to LiveOps games [E1].
- Gossip Harbor scaled from ~20 to ~100 events a month [E33].
- *Implication:* build a config-driven event framework with a persistent event hub before launch [E45].

**4. Willingness to simplify and remove friction, even a decade in.**
- Clash Royale's 2025-04-07 overhaul removed chest queues, timers and keys to "eliminate every barrier" to collecting rewards [I32]; re-engaged players ×2, new players +~500% [I34, E20], 2025 revenue +147% [E7].
- *Implication:* plan periodic "simplification passes" on progression, and avoid timer-gated reward queues in the core.

**5. Trust-preserving change management and pricing.**
- Clash Royale's Season Shop removal (Mar 2025) and Level 16/Heroes (Nov 2025) backfired despite good intentions: "Trust will take a while to build up and it's really easy to break" [I33].
- Brawl Stars: an overpowered Buzz Lightyear disrupted matchmaking, and the "$50 USD" Kaze price was unacceptable [I36].
- Players punish unfair or opaque monetization [E31, E41, C38]. Korean players have protested and sued [E16, E18].
- *Implication:* announce economy changes ahead of time, turn removals into farewell events, involve creators early [I33], and keep price ceilings culturally acceptable.

**6. Several progression vectors plus collections.**
- Collection mechanics appear in about 80% of games; album events grew +92% and login calendars +93% in mid-core [I15].
- Albums rank #7 for consistent revenue lift [I14].
- Squad Busters failed partly on too few progression vectors [E22].
- *Implication:* 3–4 parallel vectors (e.g., hero mastery, gear, account level, collection album) so every session advances something.

**7. Social structures that create belonging — sized to the player base.**
- About 70% of US top-grossing games had guilds, and more than 50% of the US top 100 had non-competitive co-op tasks (2021) [I28].
- Guild adoption among the top-20% grossing in 2021 was 54% in the US and 84% in China [I29].
- Clan membership and playing with friends raise next-week playtime and purchases (100,000 players, 3 years) [I5]. Simple social features improve lifetime-value prediction [B12].
- But social features only pay off with a large installed base [I1], and co-op PvE mo.co stayed "niche" ($6.7M from 9M downloads) [I50].
- *Implication:* async and small-group (2–4) co-op, guild goals that still work with bots or few players, and no mandatory guild-war spending (Korean focus groups [E13]).

**8. Big, meaningful updates rather than constant tinkering.**
- Major, infrequent updates raised engagement 11–49%; minor frequent ones ranged from −4.7% to +5.9% [I8].
- Updates raise iOS download growth by 26% [I7]. Feature updates raise top-grossing survival up to 3× [E37].
- For games, "no updating" correlated with becoming a top-grossing killer app in the early iPhone era [I2]. [Inference: polish matters more than patch volume.]
- *Implication:* a seasonal cadence (e.g., a 4–6-week season with one headline feature) plus weekly config-only events; avoid a noisy stream of micro-patches.

**9. Deep play immersion.**
- In a longitudinal study of Pokémon GO users, immersion raised the app's survival probability by 12% [I6].
- Korean players' #1 reason for their main game is "play immersion" (59.6%) [E13].
- *Implication:* invest in game feel and flow in the core loop before investing in meta.

**10. Deep but segmented monetization.**
- $99.99 is the standard top offer; only a few games break it (Total Battle $249.99, some casino titles at $299.99) [I14].
- Gossip Harbor shows lower price points to non-payers and higher offer density to whales [I14].
- "Paid access to accumulated rewards" events (mini-passes without a free track): 50% success rate, +18% average revenue impact [I14].
- Multi-tier passes rank #3 for consistent revenue lift [I14]. A free entry point grows paid demand rather than cannibalising it (+8.9% for paid versions of game apps) [I11].
- *Implication:* passes, a subscription/VIP card and progression bundles, segmented by spend tier, with transparent pricing for Korea [E13].

**11. Brand, organic discovery and selective IP collaborations.**
- Roblox's branded-search traffic rivals "google"; top games rank on competitors' brand keywords [I14].
- Collaborations produce spikes: Brawl Stars × SpongeBob "300%+" US iOS revenue [I26]; PUBG Mobile × Attack on Titan daily iOS revenue "more than 300%" in 48 hours [I24].
- Scopely on collabs: "Less is more" [I40].
- In Korea, the effect of IP is short-lived [E38]. A 2016 US model put the IP effect at 10.9% for strong brands and 3.1% for weak ones [I30]. Outside Japan, IP games are a minority: 27% of the sustained US top 200 excluding game IPs [I31].
- Discovery also depends on developer network ties [I12] and on rating volume, which matters more in high uncertainty-avoidance markets such as Korea [I9; inference].
- *Implication:* an original IP built for UA creative; selective collabs (webtoon, indie or K-culture IPs) once the game is live.

**12. A growing team and tools in step with the game.**
- Brawl Stars' team grew by 20+ in 2025 toward 100 staff and prioritises "live operability" and developer tools [I36]. Supercell headcount rose 30% in 2025 [I35].
- Small-team counterexamples: Space Ape's four-person weekly events [E45]; Dead Cells' six years of indie live content [I45]; Loom Games (~20 staff) and Pixel Flow [I38].
- *Implication:* tooling (event editor, remote config, segmentation) is the substitute for headcount.

**13. Channel and platform expansion over time.**
- Supercell's store is the #1 pure-mobile web store by visits [I14]; Monopoly GO earns about a third of revenue via web [E8].
- Roblox has a large web and PC footprint, though most of its audience is on mobile [I14].
- *Implication:* design account linking and server-authoritative inventory from day one so a web shop and a PC build can follow.

**14. Control of IP, platform and publisher dependencies.**
- Licence and publisher risks: Final Fantasy XIV Mobile ended when its licence was terminated [I52]; Marvel Snap was delisted in the TikTok ban [E31]; by my count, 22 of 32 titles on one 2025 closure list are licensed or franchise games [I53].
- When Nintendo ended Pocket Camp's service, it replaced the game with a flat-fee paid app [I46]. The game had made $250M+ lifetime IAP, 67% of it from Japan [I47].
- *Implication:* original IP, self-publishing, and a pre-written "graceful sunset" plan.

**15. Retention-led kill/iterate discipline before scaling.**
- Hay Day Pop's team "lacked a deep connection to the genre, leading to over-reliance on metrics"; on Clash Mini, "years of incremental iteration delayed hard decisions" [I49].
- Squad Busters failed after a short beta and heavy marketing [E20, E22].
- Warcraft Rumble ($74M lifetime) "struggled to find its footing relative to our ambition" and lost its team [I48].
- *Implication:* fixed-budget phases, a team that loves the genre, and explicit long-horizon retention gates.

### Winners vs. losers, 2024–2026 (synthesis)

| Pattern | Winners (evidence) | Losers (evidence) |
|---|---|---|
| Core | New mechanic or fresh twist: Pixel Flow "a new casual mechanic" [I38]; Merge Tactics [I32]; Lands of Jail's "fresh spin" on 4X [I14] | Familiar loops in crowded genres: Marvel Mystic Mayhem closed in <1 year [I51]; anime gacha closures [I53] |
| Change | Simplification and removing friction [I32, I34] | Surprise removals and power creep [I33, I36] |
| Scale | Validate, then scale (Royal Kingdom earned 42% of its $766M in year two's H1 2026) [I37] | Marketing before validation [E20]; mo.co "not yet ready to scale" [I50] |
| Social | Belonging, low coercion [I5, I40] | Social features needing liquidity that never comes [I1, I50] |

---

## (b) Trends for 2025–2026 and what they mean for a small IAP-only team

**T1. A flat, value-per-user market.**
- *Evidence:*
  - 2025 mobile game IAP was $82B (+1.4%) while downloads fell 7%; IAP per download was $1.62 [I14].
  - H1 2026: revenue −2%, downloads −12% [I16]. DoF predicted 2–4% growth and −8% downloads for 2026 [I21].
  - Average D1 retention across gaming apps was 27% in 2025 (Adjust) [I20].
  - Casual D7 has declined since 2022, and hybridcasual D7 is now above casual (Tasty Travels: 22%) [I14].
- *Implication:* UA will be expensive; design for retention and lifetime value first (dense meta, re-engagement, comeback paths).

**T2. Incumbents and Eastern publishers keep gaining share.**
- *Evidence:*
  - Asia-headquartered publishers +$2.58B vs North America −$1.78B in 2025; Century Games peaked at #2 [I14].
  - All five top 2025 breakouts were Action & Strategy (Kingshot, SD Gundam G Generation ETERNAL, Vampyr, MapleStory: Idle RPG, Valorant Mobile). Vampyr and MapleStory Idle "gained traction in Korea" [I14].
  - Seven casualized 4X titles scaled at once in Jul–Aug 2026 [I22]; Chinese studios are entering merge-2 and match-3 [I23]; Last War fell to $71M in June 2026 [I19].
- *Implication:* avoid 4X and merge head-on. Korea adopts new action/RPG-lite formats fast [I14; E11, E30].

**T3. Hybridcasual puzzles: sort, screw, block and arrow.**
- *Evidence:*
  - Sort, screw and block puzzles together made about $600M IAP in H1 2026; sort +229% YoY; 2,000+ block-puzzle launches [I18].
  - Pixel Flow: RPD $4.33, 51.4 minutes/day, 9.4 sessions/day, 1.9M DAU [I39]. It was the only casual game in 12 months to break the US top-20 grossing [I38].
  - Followers: Loop Sort #161, Colony Flow #47, Jelly Busters #26 by Aug 2026 [I22]. Arrow puzzles: no verified revenue data found.
  - But hybridcasual Lifestyle & Puzzle gets 41% of revenue from ads [I14]; puzzle ad exposure grew ~40%; Turkish puzzle studios face "$25+ CPIs" to compete with Dream [I21]. More launches cut per-app downloads (congestion) [I10].
- *Implication:* a sort-style core drives session count, but without ads it must monetize through lives, boosters and passes alone [inference]; action/strategy hybrids fit IAP-only better.

**T4. Narrative, decoration and merge meta; life-sim revival.**
- *Evidence:*
  - Merge-2 +74% in H1 2026; Gossip Harbor $100M+/month [I18].
  - Life-sim +76% (Heartopia $67M since a January 2026 launch); Hay Day peaked at $1M daily revenue at age 14 [I18].
  - Episode: Reality Stars reached #79 grossing through meta progression [I23].
  - Merge events inside match-swap games: 75% success rate, 14-day duration [I14].
  - Narrative supplies UA creative [E34].
- *Implication:* a light character/story and decoration layer serves retention and gives UA creative [E34]; keep production systemic.

**T5. LiveOps arms race and new event formats.**
- *Evidence:* event density up 15–19% within segments [I15].
- Spreading mechanics [I14, I15, I22]: milestone-reward mini-passes, expeditions/digging, Lava Quest (+114% in hybridcasual) and win streaks, albums, energy-based exploration minigames, battle-pass–gacha hybrids.
- About 70% of casual events target payers and hardcore players [I15].
- *Implication:* reuse proven templates (streaks, races, albums, mini-passes) via config; spend novelty on the core, not on event types.

**T6. Co-op and friend-group play.**
- *Evidence:*
  - In 2025, cooperative event use grew 17% and competitive 24%; in mid-core, cooperative +36% vs Dec 2024 [I15].
  - Co-op squads appeared even in casino and puzzle games (Piggy Squads; Toy Blast) [I24, I25].
  - On PC, "chaotic co-op hits" (R.E.P.O., PEAK) outsold AAA [I14].
  - Cautions: mo.co's co-op PvE loop "gets stale" [I50]; social features need liquidity [I1].
- *Implication:* 2–4-player co-op objectives with async contribution and bot fill. Lucky Defense shows a Korean co-op format can monetize without forced ads [E35].

**T7. Roguelite, deckbuilder and run-based modes.**
- *Evidence:*
  - Balatro sold 5M+ units by 2025-01-21 [I44].
  - Pokémon TCG Pocket: $1.6B in 18 months, but monthly revenue fell 87% from its Nov 2024 peak (−51%, then −32%, per half-year) [I42]. It is the top-grossing card battler ever at $1.49B [I43].
  - Incumbents add run-based PvP modes: Marvel SNAP Draft (roguelike augments), Brawl Stars "Topple the Tower" [I22], Clash Royale Merge Tactics [I32]. Card battlers grew +213% in 2025 [E6].
- *Implication:* run-based structure is a proven content generator for a small team. Pair it with persistent meta, not pack-opening hype alone.

**T8. D2C web shops and payment rules after Epic v. Apple and Google.**
- *Evidence:*
  - **Apple:** the Ninth Circuit (2025-12-11) affirmed contempt but reversed the zero-commission sanction [I54]. The Supreme Court granted certiorari on 2026-06-30 [I55]. Apple has collected nothing on US link-outs since April 2025 and proposed 15% / 10% / 5% on remand [I56].
  - **Google:** US alternative billing and external links since 2025-12-09; fee reporting starts 2026-10-01 [I58]. Proposed new structure: 20% IAP service fee (15% for new installs in programs), 10% subscriptions, 5% billing fee. Rollout targets: EEA/UK/US by mid-2026, Korea/Japan by 2026-12-31, global by 2027-09-30 [I57] — still awaiting court approval as of mid-2026 [I59].
  - **Korea:** sanctions over the 26% third-party fee were deferred again on 2026-08-13 [I60].
  - **Adoption:** D2C is about $17B (~15% of IAP). Median uplift 15%, leading adopters 35%. 52% of publishers made no significant change after the April 2025 ruling [I61]. Web-store promo events: 55% success rate, +22% impact [I14].
- *Implication:* launch store-only; build account IDs and server-side entitlements now; add a web shop after product-market fit, starting with US iOS link-outs. Korean savings stay uncertain.

**T9. IP collaborations as both content and UA creative.**
- *Evidence:*
  - Sensor Tower: "IP Collaborations Are Now a Core Creative Strategy" [I14]. Video-game IP dominates mobile IP revenue, and Monopoly is the #1 IP [I14].
  - Spikes of 2–4× in daily revenue [I24, I26]. Monopoly GO ran Harry Potter as its seasonal event [I23].
- *Implication:* affordable collabs (webtoon, indie, anime-adjacent) can be revenue events; avoid building the game *on* a licence (characteristic 14).

**T10. UGC platforms as competitors for teen time.**
- *Evidence:*
  - Roblox Q2 2026: 123M DAU (+10%), 29B hours, bookings +8%. Engagement shifted from "2025-vintage viral games" to evergreen titles. Its recommendation algorithm now optimises "long-term player retention" [I41].
  - GameRefinery calls UGC a top 2026 trend [I23]; DoF predicts a $100M+ Roblox-studio acquisition [I21].
- *Implication:* compete on depth, polish and fair progression. Light player-made content (shareable runs or challenge seeds) borrows UGC's engine [inference].

**T11. Cross-platform PC + mobile.**
- *Evidence:*
  - Sensor Tower: "Cross-platform trends are the norm in 2026" [I14].
  - Where Winds Meet: ~250K concurrent users on PC versus a "shark-fin" decline on mobile [I23].
  - 74% of small teams target new platforms [I67]. Among Korean gamers, 58.1% also play PC games [E13 base report, re-read].
- *Implication:* a PC build (Steam or Google Play Games on PC) with shared accounts is a mid-term extension, especially in Korea.

**T12. AI in production.**
- *Evidence:*
  - GDC 2026 survey (n≈2,300): 36% use generative AI, mostly research/brainstorming (81%); 19% use it for asset generation, 5% for player-facing features. 52% see it as harmful, up from 18% in 2024 [I66].
  - Unity 2026: coding assistance 62%, writing 44% [I67].
  - About 20% of 2025 Steam releases disclose generative AI [I68].
  - King cut about 200 staff; per sources, internal AI tools took over level-design and copywriting work [I69]. DoF predicts an AI "bubble" reset [I21].
- *Implication:* use AI for code, tooling, level generation/validation, localisation drafts and analytics; be cautious with player-facing generated art [inference].

**T13. Loot-box regulation and its genre effects.**
- *Evidence:*
  - FTC–HoYoverse: $20M; parental consent for loot-box sales under 16; odds and exchange-rate disclosure; a direct real-money option [I62].
  - Brazil: under-18 ban from March 2026, with fines up to 10% of Brazilian turnover [I63]. Supercell: "paid randomized rewards will be removed or replaced" in Brazil [I64].
  - Australia: paid loot boxes rated M minimum; simulated gambling R18+ [I65]. Korea: odds law with treble damages [E17].
  - Yet gacha and multi-pass mechanics are growing inside LiveOps [I14, I22].
- *Genre impact:* gacha-RPG economics are the most exposed and pass/subscription-led games the least [inference from I62–I65, E15]. Licensed gacha RPGs are prominent among 2025 closures [I53], but no closure was attributed to regulation.
- *Implication:* paid randomness off by default; earned randomness with pity and published odds; per-region monetization flags.

---

## (c) Source list

### A. Academic / quantitative (new)

**I1. Rietveld, J., & Ploog, J. N. (2022). *On top of the game? The double-edged sword of incorporating social features into freemium products.* Strategic Management Journal 43(6), 1182–1207. DOI 10.1002/smj.3362.**
- Sample/method: 9,700 Steam PC games; the platform's installed base at release moderates the effect.
- Key results: many social features → +49 pp likelihood of superstar status on a large installed base, −26 pp on a small one; not so for paid products.
- Verified: **partial** — Crossref abstract plus the author's own summary for effect sizes (platformpapers.substack.com/p/when-freemium-succeeds, 2022-09-15); full text paywalled.

**I2. Yin, P.-L., Davis, J. P., & Muzyrya, Y. (2014). *Entrepreneurial Innovation: Killer Apps in the iPhone Ecosystem.* American Economic Review 104(5), 255–259. DOI 10.1257/aer.104.5.255.**
- Sample/method: iPhone ecosystem data; likelihood of an app reaching top grossing.
- Key result: "previous app experience and no updating increase the likelihood of becoming a killer game app"; more updates help non-game apps. Magnitudes not found.
- Verified: **partial** (Crossref abstract).

**I3. Jung, E.-Y., Baek, C., & Lee, J.-D. (2012). *Product survival analysis for the App Store.* Marketing Letters 23(4), 929–941. DOI 10.1007/s11002-012-9207-0.**
- Sample/method: Korea App Store top-100 Free and Grossing charts; Weibull survival model.
- Key results: ranking, ratings and content size affect survival differently for free vs paid apps; early-entrant advantage, stronger on the Free chart. Magnitudes not found.
- Verified: **partial** (RePEc abstract).

**I4. Lee, Youseok (이유석) (2019). 「프리미엄 모바일 게임의 성과지표별 결정요인 차이에 대한 탐색적 연구」. 소비자학연구 30(4), 195–216. DOI 10.35736/JCS.30.4.9.**
- Sample/method: Korean freemium games; SUR model of download rank vs grossing rank.
- Key results: genre, publisher capability and release year determine *grossing* rank only; Korean developer and featuring frequency help both ranks. Sample size not stated.
- Verified: **partial** (KCI abstract).

**I5. Jiao, Y., Tang, C. S., & Wang, J. (2022). *An empirical study of play duration and in-app purchase behavior in mobile games.* Production and Operations Management 31(9), 3435–3456. DOI 10.1111/poms.13772.**
- Sample/method: weekly data on 100,000 players over 3 years; regressions.
- Key results: performance has an inverted-U effect; new virtual items and clan membership/play with friends raise next-week playtime and purchases. Magnitudes not found.
- Verified: **partial** (Crossref abstract).

**I6. Balapour, A., Sabherwal, R., & Grover, V. (2023). *The relationship between immersive experience and shelf life of mobile apps: an empirical study of a gaming application.* J. of Systems and Information Technology 25(4), 364–394. DOI 10.1108/jsit-03-2023-0056.**
- Sample/method: longitudinal survey of Pokémon GO users; survival analysis and SEM.
- Key result: immersion raises the app's survival probability by 12%.
- Verified: **partial** (abstract).

**I7. Comino, S., Manenti, F. M., & Mariuzzo, F. (2019). *Updates management in mobile applications: iTunes versus Google Play.* J. of Economics & Management Strategy 28(3), 392–419. DOI 10.1111/jems.12288.**
- Sample/method: panel of top-1,000 apps in 5 European countries.
- Key results: on iTunes an update brings a 26% increase in download growth; the effect is weaker on Google Play; developers update after performance drops.
- Verified: **partial** (abstract).

**I8. Zhong, X., & Xu, J. (2022). *Measuring the effect of game updates on player engagement: A cue from DOTA2.* Entertainment Computing 43, 100506. DOI 10.1016/j.entcom.2022.100506.**
- Key results: major, infrequent updates +11% to +49% engagement; minor, frequent updates −4.7% to +5.9%; irrelevant updates no effect; updating during big events dilutes the effect.
- Verified: **partial** (Semantic Scholar abstract).

**I9. Kübler, R., Pauwels, K., Yildirim, G., & Fandrich, T. (2018). *App Popularity: Where in the World are Consumers Most Sensitive to Price and User Ratings?* Journal of Marketing 82(5), 20–44. DOI 10.1509/jm.16.0140.**
- Sample/method: dynamic panel across 60 countries.
- Key results: price sensitivity is higher where masculinity and uncertainty avoidance are high; rating-volume sensitivity is higher where power distance and uncertainty avoidance are high.
- [Inference: Korea scores uncertainty avoidance 85 and power distance 60 (The Culture Factor country tool, read 2026-10-01), so rating volume likely matters.]
- Verified: **partial** (abstract).

**I10. Ershov, D. (2024). *Variety-Based Congestion in Online Markets: Evidence from Mobile Apps.* AEJ: Microeconomics 16(2), 180–203. DOI 10.1257/mic.20200347.**
- Sample/method: natural experiment from a Google Play redesign.
- Key results: more apps reduce downloads per app; 40% of variety welfare gains are lost to congestion.
- Verified: **partial** (abstract).

**I11. Deng, Y., Lambrecht, A., & Liu, Y. (2023). *Spillover Effects and Freemium Strategy in the Mobile App Market.* Management Science 69(9), 5018–5041. DOI 10.1287/mnsc.2022.4619.**
- Sample/method: App Store game apps; difference-in-differences.
- Key result: launching a free version raises the paid version's daily ratings by 8.9% (sampling and discovery effects).
- Verified: **partial** (abstract).

**I12. Jozani, M., Liu, C. Z., Zhu, H., Liu, L., & Choo, K.-K. R. (2025). *A Network Analysis of Mobile App Top Chart Appearance and Survival.* Information Systems Frontiers 27(6), 2359–2381. DOI 10.1007/s10796-025-10627-w.**
- Key result: ties to top apps and network centrality raise top-chart appearance; excessive proximity dilutes visibility.
- Verified: **partial** (Crossref metadata and Semantic Scholar TLDR only; abstract not found).

**I13. Bresnahan, T., Davis, J. P., & Yin, P.-L. (2014). *Economic Value Creation in Mobile Applications.* NBER chapter c13044.** https://www.nber.org/system/files/chapters/c13044/revisions/c13044.rev0.pdf
- Data: App Annie daily ranks, 2012-01 to 2013-06.
- Key result: average distinct apps in the top-50 grossing list at a 360-day lag was 84.38 (iOS) and 91.08 (Android), i.e., ~69% and ~82% turnover; "Within the broad established games category, products have short lives."
- Verified: **yes** (full PDF).

*Overlapping academic sources cited briefly:* E37 Lee & Raghu 2014; E38 Nam & Kim 2020; E39 Ascarza et al. 2025; E40 Pape et al. 2025; E42 Roma & Ragaglia 2016; B12/D16 Drachen et al. 2018; F40 Kim & Kim 2019.

*Gap:* peer-reviewed causal studies of live events or battle passes on mobile revenue beyond F40/C29 — **not found**.

### B. Industry market structure and longevity

**I14. Sensor Tower (2026-02-26). *State of Gaming 2026* (full report PDF, mirror).** https://investgame.net/wp-content/uploads/2026/02/2026-02-26-sensor_tower__state_of_gaming_2026__en_wp.pdf
- Market: IAP $82B (+1.4%); downloads −7%; $1.62 IAP per download; 96% of downloads free-to-play.
- Hybridcasual IAP share by class (top 1,000 by downloads; US, JP, UK, BR): Action & Strategy 81.9%, Sports & Racing 71.0%, Lifestyle & Puzzle 59.0%. Hybridcasual D7 now above casual. Pixel Flow #20 in US IAP (Jan 2026).
- LiveOps: event menus 83.4% revenue-lift rate; paid accumulated-reward events 50% success / +18%; web-store promos 55% / +22%; merge events in match-swap 75% / +15%; top offers $99.99 (outliers $249.99–$299.99).
- UA: US ad-spend vs IAP share — Lifestyle & Puzzle 56.2% vs 41.3%; Action & Strategy 30.7% vs 34.8%; Casino 10.4% vs 21.6%.
- Supercell is the #1 pure-mobile web store; "IP Collaborations Are Now a Core Creative Strategy."
- Verified: **yes** (full text; upgrades E2's digest).

**I15. AppMagic (data recorded 2025-12-25; mirror file dated 2026-01-15). *LiveOps Report 2025* (PDF).** https://investgame.net/wp-content/uploads/2026/01/2026-01-15-LiveOps_Report_2025_EN.pdf
- Scope: AppMagic data 2022–2025; events tracked on non-paying US Android accounts.
- Key data: IAP $55.5B (+0.7%, AppMagic method); 2015–2020 releases ≈ half of top-grossing revenue vs 22% for 2023–25 releases; events 73 → 89 per game per month; collections in ~80% of games; competitive events +24%, cooperative +17% (mid-core co-op +36% vs Dec 2024); ~70% of casual events target payers; hybridcasual revenue +82% then +75% (puzzle +136%); Gossip Harbor "$770M+".
- Verified: **yes**.

**I16. Karvande, H., & Kumar, A. (Naavik) (2026-07-30). *H1 2026: Mobile Gaming's Stability Illusion.*** https://naavik.substack.com/p/h1-2026-mobile-gamings-stability
- Data: Sensor Tower (excludes D2C, China Android, ads).
- Key data: 5+-year-old games earn ~57% of top-200 revenue; <2-year games added ~$2.3B YoY, replacing 99% of the ~$2.4B lost by 5+-year games; "roughly one in four" young entrants becomes a 5-year incumbent (window unspecified); Merge-2 +$640M, Sort +$303M, MMORPG −$455M.
- Verified: **yes**.

**I17. Chernobai, B. (Game Developer, 2019-01-31). *Behind the lifecycle of the mobile game* (Apptopia data, 2014–2017).** https://www.gamedeveloper.com/business/behind-the-lifecycle-of-the-mobile-game
- Key data: 64% of US top-50 grossing entrants stayed ≤5 days; average stay 27.75 days; casino and puzzle lasted longest.
- Verified: **secondary**.

**I18. Byshonkov, D. (2026-08-06). *AppMagic: Mobile Casual Games in H1 2026* (digest).** https://gamedevreports.substack.com/p/appmagic-mobile-casual-games-in-h1
- Key data: casual ~$11B (flat); match-3 $2.5B; merge-2 $1.3B (+74%); sort/screw/block ~$600M (sort +229%); launches above $100K/month: match-3 1/120, coin looter 0/42, farming 8/55; life-sim +76%; Hay Day $1M peak day (2026-05-01); Pixel Flow $125M+ in under a year.
- Verified: **secondary**.

**I19. Long, N. (mobilegamer.biz, 2026-07-28). *2026's top 10 grossing mobile games (so far)* (AppMagic).** https://mobilegamer.biz/2026s-top-10-grossing-mobile-games-so-far-honor-of-kings-whiteout-survival-lastwar-royal-match-pubg-mobile-more/
- Key data: Whiteout ~$110M/month; Last War $71M in June (lowest since launch); Monopoly GO ~$85M, "shifted toward webshops."
- Verified: **yes**.

**I20. Muhammad, I. (PocketGamer.biz, 2026-03-10). *Mobile accounts for 55% of total games revenue in 2025…* (Adjust data).** https://www.pocketgamer.biz/mobile-accounts-for-55-of-total-games-revenue-in-2025-as-studios-shift-towards-retention/
- Key data: D1 retention 27% (2025); paid-to-organic ratio +61%; strategy sessions +57%.
- Verified: **secondary**.

**I21. Gibbons, J. (Deconstructor of Fun, 2026-01-01). *12 Gaming Predictions for 2026.*** https://www.deconstructoroffun.com/blog/2025/12/31/12-gaming-predictions-for-2026
- Key claims: mobile growth 2–4%; downloads −8%; Turkish puzzle studios face "$25+ CPIs to compete with Dream"; an AI "bubble" reset; a $100M+ Roblox-studio acquisition.
- Verified: **yes** (predictions, not data).

### C. GameRefinery (Liftoff) feature and trend analyses

**I22. GameRefinery (2026-09-15). *Market review July & August 2026.*** https://www.gamerefinery.com/mobile-game-market-review-july-august-2026/
- Key items: Loop Sort #161, Colony Flow #47, Jelly Busters #26; Gossip Harbor's battle-pass–gacha wheel; Marvel SNAP Draft and Brawl Stars Topple the Tower; seven casualized 4X titles scaling at once.
- Verified: **yes**.

**I23. GameRefinery (2026-01-15). *Market review December 2025* (with 2026 predictions).** https://www.gamerefinery.com/mobile-game-market-review-december-2025/
- Key items: Roblox 100M+ DAU; UEFN; Color Block Jam, Pixel Flow and Magic Sort in the top 50 grossing; Chinese publishers entering merge-2 and match-3; Where Winds Meet ~250K PC concurrent users; Episode: Reality Stars #79.
- Verified: **yes**.

**I24. GameRefinery (2025-06-12). *Market review May 2025.*** https://www.gamerefinery.com/mobile-game-market-review-may-2025/
- Key items: PUBG × Attack on Titan daily iOS revenue "more than 300%" within 48 hours; CoD × Seven Deadly Sins doubled; co-op events in Toy Blast and Bingo Voyage.
- Verified: **yes**.

**I25. GameRefinery (2025-05-08). *Market review April 2025.*** https://www.gamerefinery.com/mobile-game-market-review-april-2025/
- Key item: co-op "Piggy Squads" (up to 4 players, shared progress bar).
- Verified: **yes**.

**I26. GameRefinery (2025-04-24). *What to Expect From the Mobile Gaming Industry in 2025.*** https://www.gamerefinery.com/what-to-expect-from-the-mobile-gaming-industry-in-2025/
- Key item: Brawl Stars × SpongeBob "300%+ increase in revenue on the US iOS market."
- Verified: **yes**.

**I27. GameRefinery (2024-09-06). *Breaking Down the Biggest Trends…*** — Genshin "costing upwards of $200 million each year to maintain"; Wuthering Waves update +300% US daily revenue. Verified: **yes** (as GameRefinery reports them). https://www.gamerefinery.com/breaking-down-the-biggest-trends-shaping-the-mobile-gaming-landscape/

**I28. GameRefinery (2021-09-28). *Social Features That the Top-Performing Mobile Games Have Incorporated.*** https://www.gamerefinery.com/social-features-that-the-top-performing-mobile-games-have-incorporated-market-trend-analysis/
- Key data: US top-grossing guilds ~70%; non-competitive co-op tasks >50% of US top 100 (~40% in Japan).
- Verified: **yes**.

**I29. Obedkov, E. (Game World Observer, 2021-04-19), on GameRefinery's revenue drivers.** https://gameworldobserver.com/2021/04/19/gachas-guilds-cosmetics-and-other-revenue-drivers-for-mobile-games-according-to-gamesrefinery
- Key data: top-20% grossing feature shares —

| Market | Gacha | Cosmetics | Guilds | Battle pass |
|---|---|---|---|---|
| US | 69% | 44% | 54% | 57% |
| China | 50% | 50% | 84% | 86% |

- Verified: **secondary**.

**I30. Julkunen, V.-P. (GameRefinery, 2016-08-07). *Measuring the Effect of an IP on a Mobile Game's Success.*** https://www.gamerefinery.com/licensed-ip-mobile-game-effect/
- Method: model of the US iOS top-grossing list controlling for 150+ features.
- Key result: modelled IP "effect" on commercial success 3.1% (brand index <1) vs 10.9% (>1); the metric is not defined further.
- Verified: **yes** (old).

**I31. GameRefinery (2021-10-14). *Licensed IPs… market differences.*** https://www.gamerefinery.com/licenced-ips-in-mobile-games-and-their-market-differences/
- Key data: IP share of the sustained top-grossing 200 — US 43% (27% excluding game IPs); Japan 66%.
- Verified: **yes**.

### D. Long-lived-game cases (new)

**I32. Astle, A. (PocketGamer.biz, 2025-07-09). *Clash Royale hits post-pandemic record of $3.8m daily revenue…* (AppMagic).** https://www.pocketgamer.biz/clash-royale-hits-post-pandemic-record-of-38m-daily-revenue-with-new-mode-merge-tactics/
- Key data: monthly revenue Mar $20.9M → Jun $51.4M; the 2025-04-07 overhaul removed chest queues, timers and keys; Merge Tactics launched 2025-07-04.
- Verified: **yes**.

**I33. Chapple, C. (PocketGamer.biz, 2026-08-24). *"We killed Clash Royale!": What Supercell learned from failed updates* (Gamescom Dev 2026: J. Back, E. Russell).** https://www.pocketgamer.biz/we-killed-clash-royale-what-supercell-learned-from-failed-updates/
- Key data: Season Shop removal backlash despite wild-card earners rising from 59.8% to 67.4%; Level 16/Heroes backlash; trust lessons.
- Verified: **yes**.

**I34. Long, N. (mobilegamer.biz, 2026-02-10). *Supercell boss laments "coasting" mobile industry…*; plus E20 re-read this session.** https://mobilegamer.biz/supercell-boss-laments-coasting-mobile-industry-as-clash-royale-stars-in-2025-results/ ; https://supercell.com/en/news/the-best-games-havent-been-made-yet/
- Key items: Clash Royale re-engaged players ×2, new players +~500%; Merge Tactics came from the cancelled Clash Mini; "22 (about .04%!)" of ~53,000 launches since 2020 grossed $1B+, with only 2 Western.
- Verified: **yes**.

**I35. Chapple, C. (PocketGamer.biz, 2026-02-10). *Supercell revenue declines 4% to €2.65bn in 2025.*** https://www.pocketgamer.biz/supercell-revenue-declines-4-to-265bn-in-2025/
- Key data: Brawl Stars store sales −57% (AppMagic); 290M MAU; headcount +30% to 890.
- Verified: **yes**.

**I36. Frank (Brawl Stars GM) (Supercell, 2026-03-07). *2025 in Review.*** https://supercell.com/en/games/brawlstars/blog/community/2025-in-review-franks-blog-post/
- Key items: revenue and MAU −~20% Dec 2024→Feb 2025; Update 63 (Sept 2025) stabilised the game; Buzz Lightyear balance misfire; "$50 USD" Kaze price unacceptable; Ranked 3.0 missed its goals; "2025 was the second best year ever" in MAU and revenue (conflicts with AppMagic's store-only −57%).
- Verified: **yes**.

**I37. Astle, A. (PocketGamer.biz, 2026-07-14). *Royal Kingdom surpasses $750m…* (AppMagic).** https://www.pocketgamer.biz/royal-kingdom-surpasses-750m-with-42-of-all-revenue-made-in-h1-2026/
- Key data: $766.1M lifetime; $324.8M (42%) in H1 2026; January 2026 $58.9M (+421%); US 61%.
- Verified: **yes**.

**I38. Chapple, C. (PocketGamer.biz, 2026-02-19). *Scopely acquires majority stake in Pixel Flow developer Loom Games.*** https://www.pocketgamer.biz/scopely-acquires-majority-stake-in-istanbuls-pixel-flow-developer-loom-games/
- Key data: $1B+ valuation; ~20 staff; "a new casual mechanic in a category that often advances through iteration rather than innovation."
- Verified: **yes**.

**I39. Fomina, O. (PocketGamer.biz, 2026-05-14). *How Magic Sort, Knit Out, and Pixel Flow are redefining sort puzzle monetisation* (Sensor Tower, Apr 2025–Apr 2026).** https://www.pocketgamer.biz/one-genre-three-strategies-how-magic-sort-knit-out-and-pixel-flow-are-redefining-sort-puzzle-monetisation/
- Key data: RPD — Pixel Flow $4.33, Knit Out $3.41, Magic Sort $1.7; Pixel Flow 51.4 min/day, 9.4 sessions/day, 1.9M DAU; Knit Out uses a battle pass.
- Verified: **yes**.

**I40. Jagneaux, D. (GamesBeat, 2025-12-19). *Building a 'forever franchise' with… Monopoly Go* (Scopely SVP Eric Wood).** https://gamesbeat.com/building-a-forever-franchise-with-the-magic-of-monopoly-go-gamesbeat-insider-series/
- Key quotes: "Less is more" on IP; "the majority of our players are coming back seven days a week."
- Verified: **yes**.

**I41. Roblox Corp. (2026). *Q2 2026 Shareholder Letter* (SEC 8-K, ex. 99.1).** https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051059/ex991-robloxq22026earnin.htm
- Key data: DAU 123M (+10%); hours 29B (+5%); bookings +8%; revenue $1.5B (+36%); DevEx $363M; shift from viral to evergreen games; recommendation algorithm tuned for long-term retention.
- Verified: **yes**.

**I42. Astle, A. (PocketGamer.biz, 2026-04-30). *Pokémon TCG Pocket makes $1.6bn in 1.5 years* (AppMagic).** https://www.pocketgamer.biz/pokemon-tcg-pocket-makes-16bn-in-15-years/
- Key data: $235.3M peak (Nov 2024) → $31.4M (Apr 2026); −51% and then −32% by half-year.
- Verified: **yes**.

**I43. Ivan, T. (mobilegamer.biz, 2026-04-15). *Data digest: Q1's top performers…* (Sensor Tower).** https://mobilegamer.biz/data-digest-q1s-top-performers-milestones-for-pokemon-tcg-pocket-heartopia-efootball-and-plenty-more/
- Key data: TCG Pocket $1.49B lifetime, top-grossing card battler ever; $0.99B in 2025.
- Verified: **yes**.

**I44. Playstack (2025-01-21). *Balatro… 5 million copies sold.*** https://www.playstack.com/news/balatro-5-million-copies-sold/
- Key data: "over 5 million units sold" (all platforms; premium). Verified: **yes**.

**I45. Dcamp, A. (Evil Empire), GDC 2024. *Keeping the Flame Burning for 'Dead Cells'.*** gdcvault.com/play/1034255 — six years of "early access"-style content cadence for an indie live game. Verified: **yes** (session page).

### E. Failures and shutdowns (new)

**I46. Nintendo Support. *Important Announcement… Animal Crossing: Pocket Camp.*** https://en-americas-support.nintendo.com/app/answers/detail/a_id/66115/
- Key data: service ended 2024-11-28; *Pocket Camp Complete*, "a flat fee paid app," released 2024-12-02; no reason given.
- Verified: **yes**.

**I47. Chapple, C. (Sensor Tower, Nov 2021). *Pocket Camp crosses $250 million.*** https://sensortower.com/blog/animal-crossing-pocket-camp-250-million-revenue
- Key data: Japan 67.3%; US ~21%; South Korea 1.8%; peak month $8.4M (May 2020).
- Verified: **yes**.

**I48. Chapple, C. (PocketGamer.biz, 2025-07-03). *Blizzard ends Warcraft Rumble development…*** https://www.pocketgamer.biz/blizzard-ends-warcraft-rumble-development-as-company-reportedly-hit-by-up-to-100-job-losses/
- Key data: ~$74M lifetime (AppMagic); launched 2023; "struggled to find its footing relative to our ambition."
- Verified: **yes**.

**I49. Muhammad, I. (PocketGamer.biz, 2026-01-16). *Supercell opens up on cancelled projects…*** https://www.pocketgamer.biz/supercell-opens-up-on-cancelled-projects-and-the-role-of-failure-in-creativity/
- Key quotes: Hay Day Pop — over-reliance on metrics; Clash Mini — "years of incremental iteration delayed hard decisions."
- Verified: **yes**.

**I50. Long, N. (mobilegamer.biz, 2026-08-13). *Mo Co is underperforming and will be rebooted (again).*** https://mobilegamer.biz/supercell-says-mo-co-is-underperforming-and-will-be-rebooted-again-but-killing-it-is-an-unlikely-scenario/
- Key data: $6.7M from 9M downloads; "gameplay loop quickly gets stale"; "working quite well for a niche."
- Verified: **yes**.

**I51. Oaks, A. K. (ComicBook.com, 2025-12-24). *NetEase ending service for Marvel Mystic Mayhem.*** https://comicbook.com/gaming/news/netease-is-ending-service-for-its-newest-marvel-game-after-less-than-a-year/
- Key data: launched 2025-06-25; end of service 2026-04-01.
- Verified: **yes**.

**I52. Bright, J. (TechTimes, 2026-07-18). *Final Fantasy XIV Mobile ends before global launch.*** https://www.techtimes.com/articles/320911/20260718/final-fantasy-xiv-mobile-ends-before-global-launch-character-data-deleted-september.htm
- Key data: China launch 2025-06-19; end of service 2026-09-30; licence terminated over "changes in the market environment"; global launch cancelled.
- Verified: **secondary**.

**I53. Shetty, S. (GamingOnPhone, 2026-01-21). *The Biggest Mobile Gaming Disappointments of 2025.*** https://gamingonphone.com/editorial/the-biggest-mobile-gaming-disappointments-of-2025/
- Content: an editorial list of 32 shutdowns and delistings (my count: 22 licensed or franchise titles, 9 anime/manga/webtoon IP), including Warzone Mobile and Tarisland.
- Verified: **secondary**.

### F. Payments, D2C and regulation

**I54. Pettersson, E. (Courthouse News, 2025-12-11). *Ninth Circuit confirms contempt finding against Apple.*** https://www.courthousenews.com/ninth-circuit-confirms-contempt-finding-against-apple-in-epic-games-battle/
- Key result: contempt affirmed; zero-commission order reversed as punitive; remanded.
- Verified: **yes**.

**I55. Christoffel, R. (9to5Mac, 2026-06-30). *Supreme Court agrees to hear Apple appeal.*** https://9to5mac.com/2026/06/30/supreme-court-agrees-to-hear-apple-appeal-over-epic-games-ruling/
- Key data: certiorari granted 2026-06-30 on whether Apple's link-out fees violated the 2021 injunction. Verified: **yes**.

**I56. Clover, J. (MacRumors, 2026-08-13). *Apple wants to charge up to 15 percent for linking outside the App Store.*** https://www.macrumors.com/2026/08/13/app-store-fees-apple-link-outs/
- Key data: Apple "has collected no money" on link-outs since April 2025; proposed 15% / 10% / 5%.
- Verified: **yes**.

**I57. Samat, S. (Android Developers Blog, 2026-03-04). *A new era for choice and openness.*** https://android-developers.googleblog.com/2026/03/a-new-era-for-choice-and-openness.html
- Key data: 20% IAP service fee (15% on new installs for program participants); 10% subscriptions; 5% billing fee (EEA/UK/US); Korea and Japan by 2026-12-31; global by 2027-09-30.
- Verified: **yes**.

**I58. Google Play Console Help. *US policy update* (read 2026-10-01).** https://support.google.com/googleplay/android-developer/answer/15582165
- Key data: alternative billing and external links programs launched 2025-12-09; fee reporting from 2026-10-01.
- Verified: **yes**.

**I59. Stash (2026-04-10). *Epic v. Google settlement update.*** https://www.stash.gg/blog/blog-epic-v-google-settlement-update-april-2026
- Key data: settlement not yet approved; summer "final act" hearing; the October 2024 injunction remains in force.
- Verified: **yes**. Final ruling after July 2026: **not found**.

**I60. Jie, Y. (Korea Herald, 2026-08-13). *Korea again delays Google, Apple app payment ruling.*** https://www.koreaherald.com/article/10840244
- Key data: proposed fines ₩47.5B (Google) and ₩20.5B (Apple); 26% third-party billing fee; Google's new fees "do not currently apply to Korea."
- Verified: **yes**.

**I61. Muhammad, I. (PocketGamer.biz, 2026-06-24). *Mobile game D2C revenues reach $17bn* (Appcharge × GDC survey, n = 1,200).** https://www.pocketgamer.biz/report-mobile-game-d2c-revenues-reach-17bn-as-publishers-push-beyond-app-stores/
- Key data: ~15% of IAP; median uplift 15%, leaders 35%; 92% expect growth; 52% made no strategic change.
- Verified: **secondary**.

**I62. U.S. FTC (2025-01-17). *Genshin Impact developer… $20 million.*** https://www.ftc.gov/news-events/news/press-releases/2025/01/genshin-impact-game-developer-will-be-banned-selling-lootboxes-teens-under-16-without-parental
- Key data: $20M; no loot-box sales to under-16s without parental consent; disclose odds and currency exchange rates; offer direct real-money purchase. Verified: **yes**.

**I63. Astle, A. (PocketGamer.biz, 2025-09-29). *Brazil bans loot boxes for under-18s* (Lei 15.211/2025).** https://www.pocketgamer.biz/brazil-bans-loot-boxes-for-under-18s-in-online-child-safety-measure/
- Key data: loot-box sales to under-18s banned from March 2026; adult-rated games exempt; fines up to 10% of Brazilian turnover. Verified: **yes**.

**I64. Supercell (2026-03-17). *Update for Players in Brazil.*** https://supercell.com/en/news/brazil-update/
- Key data: "paid randomized rewards will be removed or replaced" in Brazil; age checks may follow. Verified: **yes**.

**I65. Crider, M. (PCWorld, 2024-09-20). *Australia: loot boxes rated M, simulated gambling R18+* (effective 2024-09-22).** https://www.pcworld.com/article/2464538/all-games-with-loot-boxes-will-be-rated-m-or-higher-in-australia.html
- Key data: paid loot boxes → minimum M; simulated gambling → R18+; earlier classifications grandfathered. Verified: **yes** (government page returned HTTP 503).

### G. AI in production

**I66. Argüello, D. (Game Developer, 2026-02-03). *One third of game workers use generative AI…* (GDC 2026 State of the Industry, n = 2,300+).** https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry
- Key data: 36% use genAI (research 81%, assets 19%, player-facing 5%); 52% negative (30% in 2025, 18% in 2024); 7% positive. Verified: **yes**.

**I67. Unity (2026-03-09). *2026 Unity Game Development Report* (blog; survey of 300 developers plus telemetry).** https://unity.com/blog/2026-unity-game-development-report-trends
- Key data: AI for coding 62%, writing 44%; 67% prototype in ≤3 months; 74% of small teams target new platforms. Verified: **yes**.

**I68. Lambe, I. (Totally Human, 2025-07-13). *The new surprising number of GenAI games on Steam.*** https://www.totallyhuman.io/blog/the-surprising-new-number-of-genai-games-on-steam
- Key data: 7,818 titles (7% of the Steam library) disclose GenAI; ~20% of 2025 releases.
- Verified: **yes**.

**I69. Long, N. (mobilegamer.biz, 2025-07-14). *Laid off King staff set to be replaced by the AI tools they helped build.*** https://mobilegamer.biz/laid-off-king-staff-set-to-be-replaced-by-the-ai-tools-they-helped-build-say-sources/
- Key data: ~200 layoffs; "Most of level design has been wiped"; copywriting replaced by internal AI tools. Verified: **yes** (anonymous sources; no King comment).

### Data gaps and conflicts
- **Conflicts:** Brawl Stars 2025 — AppMagic's −57% is store-only, while the GM calls it the "second best year" [I35, I36]; web-store revenue is the likely, unconfirmed gap. Market totals differ by provider ($55.5B AppMagic vs $82B Sensor Tower) [I14, I15].
- **Not found:**
  - a Liftoff 2026 gaming report (see E43 for 2025);
  - GameRefinery guild and battle-pass adoption shares after 2023;
  - a readable source for Riot's Brazil age-gating (not used);
  - AppMagic fail-offer revenue shares (JS page).
