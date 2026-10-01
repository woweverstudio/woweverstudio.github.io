# T1 — Client engine & netcode stack for 「도깨비 방범대」

Research date 2026-10-01. **[V n]** = verified on the official/primary page; **[S n]** = secondary (press, blog, third-party data); **[U]** = unverified. `n` = source list at the end (URL + page date, or "acc." = accessed 2026-10-01). Untagged sentences are our analysis.

## Recommendation summary

1. **Engine: Unity 6.3 LTS** (6000.3, supported until Dec 2027 [V3]).
   - It compiles C# 9 against .NET Standard 2.1 [V6], so one deterministic C# core builds into the IL2CPP client and a headless .NET server (league re-sim, replays, bot farms).
   - Hiring: Saramin lists 239 "Unity" postings (all industries) vs 1 for "Godot" [V10].
   - Store plumbing is current: Unity IAP 5.4.3 (2026-09-03) with Play Billing 9.0.0 and StoreKit 2 [V9]; 16 KB pages [V8]; API 36 targeting [V7]. Godot's mobile C# is still "experimental" [V14].
   - Cost: Personal is free until revenue **and funding** pass $200K; then Pro is $2,310/seat/yr [V1] (≈$16.2K/yr for 7 seats).
2. **Simulation: our own pure-C# core** (int64 fixed point, integer RNG, fixed tick, no UnityEngine references), not Photon Quantum. A merge TD needs no physics or rollback, and the server uses need the sim as a plain .NET library. Keep Quantum as the fallback if the 4-player raid becomes action-heavy; decide by about week 24.
3. **Transport: a thin custom C# relay in Seoul** that assigns inputs to ticks, keeps the canonical input log, and can run the same core as referee and bot-takeover host. Next best: Photon Quantum or Realtime (Seoul region). Avoid Unity Relay (no Korean region) and Nakama authoritative matches (no C# runtime).
4. **UI and 2D:** uGUI (Unity's documented runtime recommendation [V40]) plus SpriteRenderer. Use Spine only if the art direction needs it; Unity 2D Animation is free.
5. **Budgets:** initial download ≤200 MB (Play warns mobile-data users above that [V44]); foreground memory well below 2.25 GB on 4 GB phones (Play games threshold; visibility impact from Feb 2027) [V48]; crash <1.09%, ANR <0.47% [V48].

## 1. Engine choice

### Unity 6

**Versions**
- Unity 6.3 LTS was released 2025-12-04 [V4] and is supported until Dec 2027. Unity 6.0 LTS support runs only through Oct 2026 [V3].
- Latest builds: 6000.3.25f1 and the 6.6 update release 6000.6.3f1 (both 2026-09-24) [S5].

**Pricing and policy**
- Personal is free up to $200K in revenue *and funding*. Pro costs $2,310/yr or $210/mo per seat. Enterprise is required above $25M [V1][V2].
- 2025–26 changes:
  - The Personal $200K threshold applies since Unity 6 (2024-10-17). The Pro and Enterprise thresholds apply since 2025-01-01 [V1].
  - Pro and Enterprise rose 5% on 2026-01-12 (announced 2025-11-10) [V1].
  - Havok is no longer included in Pro from 6.3 [V1].
  - The splash screen is optional on Personal [V1].
- **Runtime Fee:** cancelled 2024-09-12. Unity says it "will not apply to any games made with Unity 6 or any other version" [V1].

**Mobile**
- Minimum Android 7.1 (API 25). Graphics: Vulkan or GLES 3.0–3.2; GLES 2 is not supported [V7].

**Korea**
- Unity Korea claimed 56% of the 50 top-grossing Korean Google Play games "in the third quarter" (article 2020-07-16; year of the quarter not stated) [S11], and 60% of the top 100 in 2017 [S12].
- No 2025–26 share figure was found [U].

### Godot 4.x

- **Versions:** 4.7 (2026-06-18); latest 4.7.2 (2026-08-18) [V13].
- **C#:**
  - Docs: "Android support is currently experimental"; "iOS support is currently experimental and has a few limitations"; no web export [V14].
  - 16 KB pages are supported since 4.5, but C# projects need .NET 9+ for that [V15].
- **IAP:**
  - The Godot Foundation now maintains the Google Play Billing, Play Games Services and StoreKit 2 plugins [V16].
  - The Billing plugin 3.3.0 uses Play Billing 9.1.0 (Jul 2026) [V17].
  - The StoreKit 2 plugin README says the "API isn't stable and there might be bugs" [V17].
- **Maturity:**
  - Two shipped games' crash rates fell from ~4% to <1% after the 4.5.2/4.6 GPU fixes. Shipped mobile titles named: Kamaeru, Rift Riff, Spin Hero [V16].
  - Third-party review "Ready for Premium, Not Live Service": major analytics/attribution SDKs lack Godot bindings [S18].

### Cocos Creator and Defold

- **Cocos Creator:** 3.8.8 (2025-12-16) is newest on the download page [V19]; a "3.8.9" appears only in search snippets [U]. COCOS 4 went open source (MIT) on 2026-01-04; JS/TS remain primary [V19], so no C# core sharing.
- **Defold:** 1.13.2 (2026-09-29), scripted in Lua, free under the Apache-2.0-derived Defold License with no royalties [V20].

**Fit:** Unity wins on C# sharing, Korean hiring and first-party store SDKs. Godot's experimental mobile C# is a risk for a C#-core live-service game.

## 2. Deterministic simulation

### (a) Our own core (Unity client plus headless .NET server)

**Fixed-point libraries**
- FixedMathSharp 7.1.0 (2026-08-23): MIT, Q32.32, targets netstandard2.1 and net8.0, has Unity packages [V21].
- FixPointCS: MIT, Q32.32 and Q16.16, bit-identical across C#, Java and C++. Last commit 2026-06-23 [V22].
- FixedMath.Net: Apache-2.0, **archived 2021-04-23** [V23]. Avoid.

**Float pitfalls**
- .NET `Math.Sin` and similar "call into the underlying C runtime… may differ between different operating systems or architectures" [V25].
- IL2CPP: we found no Unity document guaranteeing float determinism across ARM and x86. Community answers say it is not guaranteed [S26].
- Burst `FloatMode.Deterministic`:
  - Supported since Burst 1.8.25 (2025-09-16); latest Burst is 1.8.30 (2026-07-06).
  - 64-bit only, and "only applies to Burst-compiled code". Intrinsics can break it, and NaN bit patterns may differ [V24].
  - So it does not help a plain .NET server.
- Converting floats to fixed point at runtime desyncs. Photon's docs say doing it inside the sim "will cause desyncs 100% of the time" [V30]. Bake content into raw integers at build time.

**Non-float pitfalls**
- `Array.Sort` is unstable, `Dictionary` enumeration order is "undefined", and `string.GetHashCode` can differ across .NET implementations and platforms [V25].
- The Unity client (IL2CPP) and the .NET server use different class-library implementations. Use stable sorts with tie-breakers, ordered containers and our own hashes.

**Guard rails:** set `noEngineReferences` on the core's assembly definition [V6b] so it cannot touch UnityEngine; compute per-tick checksums; in CI, replay golden input logs on an ARM64 phone and an x86-64 server and compare.

### (b) Photon Quantum

**Version**
- 3.0.13 stable (2026-08-05) [V27].
- 3.1 is in preview (Plugin SDK 3.1.0, 2026-08-04). It adds table components, multiple commands per frame and a new physics solver [V29][V29d].

**What it gives**
- Deterministic sparse-set ECS with predict/rollback, "up to 128 players", plus deterministic math, 2D/3D physics, navigation and bots. Game code is pointer-based C# with Qtn DSL code generation; "Commands" carry occasional actions [V28].
- Fixed point is Q48.16 with lookup tables [V30]. The typical mobile tick is 30 Hz [V32].

**Server-side simulation and replays**
- Replays stream to your own backend through ReplayStart/ReplayChunk webhooks [V29b] and can be re-simulated with a "non-Unity session runner" [V29].
- Running the sim on Photon's servers needs a custom plugin on Photon Enterprise Cloud ("additional costs") [V29].
- A replacement-bot pattern (disconnects, room fill) is documented [V29c].

**Pricing**

| Tier | Price |
|---|---|
| Development | 20 CCU free |
| Launch | 100 CCU free (one app), or $95 per 12 months |
| 500 CCU | $125/mo (1.5 TB traffic) |
| 1,000 CCU | $250/mo |
| 2,000 CCU | $500/mo |
| Premium | $0.50/CCU, minimum $1,000/mo |

Traffic above the plan costs $0.10/GB in South Korea and Asia [V31]. CCU above the plan costs $0.75–1.00 each [V31].

**Mobile titles:** the Quantum product page quotes Kitka Games' *Stumble Guys*: "32 players… bots on mobiles", on "low-end phones" [V32].

**Open questions**
- Whether Quantum's licence covers large offline bot or balance simulations on our own servers [U].
- How many Korean developers have Quantum experience [U].

### (c) Other frameworks

- **Klotho:** Apache-2.0; 32.32 fixed point, ECS, rollback, lockstep and replays. The README says "Experimental… Production use is not recommended" [V34].
- **Backdash:** MIT, GGPO-style rollback for .NET 8. Pre-release 0.7.8 (Jul 2026); determinism is left to the user [V34b].

**Recommended path for 3–7 people: our own core.** The game is grid and integer logic with rare inputs, so Quantum's physics, navigation and rollback would mostly go unused. Our core runs anywhere as plain .NET (league re-sim, replays, CI, balance sims), with no per-CCU fees, no Enterprise Cloud cost for server-side simulation, and no DSL lock-in.

## 3. Relay and real-time transport

| Option | Model | Pricing basics | Korea/Asia | Fit for input lockstep + server re-sim |
|---|---|---|---|---|
| **Custom C# relay** (ASP.NET Core, UDP or WebSocket) | Our authoritative tick-stamper | Compute only. GCP Seoul `asia-northeast3` exists [V39]. Edgegap Edge Cloud: $0.00115/vCPU-min [V38] | Seoul | **Best.** Logs inputs, referees in real time, injects bot takeover |
| Photon Quantum | Deterministic input server | See §2 | Seoul `kr` region [V33] | Good. Re-sim via webhooks plus the .NET runner |
| Photon Realtime | Generic room relay | 20 CCU dev free; 100 CCU $95/12 mo; $95/$185/$370 per mo for 500/1,000/2,000 CCU [V35] | Seoul [V33] | Usable as transport. Server logic needs Photon plugins (Gaming Circle / Enterprise Cloud) [V35c] |
| Photon Fusion | "State synchronization" library [V35b] | As Quantum | Seoul | Wrong model |
| Unity Relay | Connects players "without dedicated game servers" [V36b] | First 50 average CCU free, then $0.16 per extra CCU; Asia egress $0.16/GiB [V36] | Singapore, Tokyo, Mumbai, Sydney. **No Seoul** [V36] | Weak |
| Nakama (relayed match) | Blind forwarding; "no cheat detection" [V37] | Apache-2.0 open source; Heroic Cloud priced by CPU and database, no CCU limits [V37] | Self-host in Seoul | Transport only. Authoritative matches run Go/Lua/TypeScript, not C# [V37] |
| Edgegap distributed relays | Peer-to-peer relays, "not authoritative game servers" | Free trial ≤50 CCU; 100 CCU $8/mo; $115/$225/$450 for 500/1,000/2,000 CCU [V38] | 615+ locations; Seoul not confirmed [U] | Transport only |

**Design notes (our analysis):** 20 Hz tick with 2–3 ticks of input delay (100–150 ms), invisible in a TD. Reconnect = server snapshot plus fast-forward through the input log. Bot fill/takeover = the relay issues an "AI controls slot N from tick T" input, and the deterministic bot runs inside the sim on every peer. The same design covers the 4-player raid, with more regions for the global launch.

## 4. 2D rendering, UI, animation and asset delivery

**UI**
- Unity 6.3 and 6.6 docs list uGUI as the runtime "Recommendation" and UI Toolkit as the "Alternative" [V40].
- UI Toolkit lacks Animation Clip/Timeline integration and in-scene authoring, but adds data binding, transitions, a dynamic atlas, SVG, anti-aliasing and RTL/emoji [V40].
- Use uGUI everywhere at first. Revisit UI Toolkit for data-heavy meta menus.

**Spine**

| Edition | Price | Notes |
|---|---|---|
| Essential | $69 (list $99) | Per named user |
| Professional | $379 (list $449) | Per named user |
| Enterprise | $2,499 base + $379/user, per year | Required at ≥$500K revenue **including investment or VC** |

[V41]

- Runtime use is tied to Spine Editor licences (runtimes licence updated 2025-04-05) [V41b].

**Unity 2D Animation**
- Version 13.x matches Unity 6000.3 [V42].
- 6.3 LTS adds multithreaded and cached deformed sprites [V4].

**Asset delivery**
- Addressables 4.1.0 works with both AssetBundles and the new content directories [V42b].
- Android (Play Asset Delivery): Unity's own page still says the Play limit is "200MB" [V43]. Google Play's current limits [V44]:
  - Base module: 500 MB.
  - Each asset pack: 1.5 GB.
  - All modules plus install-time packs: 4 GB.
  - On-demand plus fast-follow packs: 30 GB.
  - Apps over 200 MB show a mobile-data dialog.
- iOS: On-Demand Resources is deprecated as of iOS 27 in favour of Background Assets [V45]. Apple hosts up to 200 GB of asset packs per app and ships Unity plug-ins for Background Assets and StoreKit (Unity 2022 LTS+, WWDC26) [V46]. Uncompressed app limit 4 GB [V45b]; cellular default "Ask If Over 200 MB" [S47].
- **Budget:** initial install under ~150 MB; bosses, seasonal skins and audio via Addressables/CDN or PAD fast-follow / Background Assets packs.

## 5. Low-end Android performance

**Android vitals thresholds** (page updated 2026-09-21) [V48]

| Metric | Overall | Per phone model |
|---|---|---|
| User-perceived crash rate | 1.09% | 8% |
| User-perceived ANR rate | 0.47% | 8% |
| Excessive partial wake locks | 5% | – |

Exceeding them "may reduce the visibility" of the app, and Play may show a warning on the store listing.

**New memory vitals for games** [V48]
- Foreground memory (anonymous RSS + swap) thresholds by device RAM:

| Device RAM tier | Foreground threshold |
|---|---|
| 4 GB (3.2–4.8 GB) | 2.25 GB |
| 6 GB | 2.75 GB |
| 8 GB | 3.50 GB |
| Below 3.2 GB | None listed |

- Store-visibility impact for the memory, bitmap and code-optimization metrics starts Feb 2027.
- Google suggests logging `ActivityManager.MemoryInfo.totalMem` in your own analytics.

**Platform deadlines**
- Since 2026-08-31, new apps and updates must target API 36 [V49]. Unity 6.3 can target 35 and 36 [V7].
- 16 KB page support is required for apps targeting Android 15+. From 2027-02-01, updates without it cannot be released [V50]. Unity 6 is compliant [V8].

**Device market**
- SEA (Omdia, 2026-05-19): >60% of smartphones priced below $200; memory-cost inflation pushed some models to ship with less RAM. 2Q26 shipments fell 23% as the average price rose to $342 (2026-08-27) [V51].
- Korea (StatCounter, Sep 2026, web traffic): Samsung 57.05%, Apple 37.81%; Android 62.18%, iOS 37.82% [S52].
- No current public RAM- or GPU-tier distribution for Korea or SEA was found [U].

**Implication:** minimum spec = a 4 GB-RAM, GLES 3.0-class phone; target under ~1.5 GB foreground memory (our margin). The fixed-point sim is cheap; spend the budget on ASTC sprite atlases, a 30 fps option and pooled VFX.

## Sources

1. https://unity.com/products/pricing-updates — "Announced November 10, 2025"; acc.
2. https://unity.com/products — acc.
3. https://unity.com/releases/unity-6/support — acc.
4. https://unity.com/blog/unity-6-3-lts-is-now-available — 2025-12-04
5. https://endoflife.date/unity — acc. (secondary)
6. https://docs.unity3d.com/6000.3/Documentation/Manual/csharp-compiler.html ; …/dotnet-profile-support.html — acc. 6b. …/6000.3/Documentation/Manual/assembly-definition-file-format.html — acc.
7. https://docs.unity3d.com/6000.3/Documentation/Manual/android-requirements-and-compatibility.html — acc.
8. https://developer.android.com/games/engines/unity/unity-on-android — updated 2026-02-26
9. https://docs.unity3d.com/Packages/com.unity.purchasing@5.4/changelog/CHANGELOG.html — 5.4.3 = 2026-09-03
10. https://www.saramin.co.kr/zf_user/search/recruit?searchword=Unity (and `=Godot`) — acc.
11. https://www.koreaherald.com/article/2366637 — 2020-07-16
12. https://www.gamemeca.com/view.php?gid=1343763 — 2017-05-16
13. https://godotengine.org/blog/release/ — acc.
14. https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/index.html — 4.7 docs, acc.
15. https://godotengine.org/releases/4.5/ — acc.
16. https://godotengine.org/article/godot-mobile-update-apr-2026/ — 2026-04-11
17. https://github.com/godot-sdk-integrations/godot-google-play-billing/releases ; https://github.com/godot-sdk-integrations/godot-storekit2 — acc.
18. https://ziva.sh/blogs/godot-mobile — 2026-04-09
19. https://www.cocos.com/en/creator-download — acc.; https://www.prnewswire.com/news-releases/cocos-4-is-here-fully-open-source-302652264.html — 2026-01-04
20. https://defold.com/2026/09/29/Defold-1-13-2/ — 2026-09-29; https://defold.com/license/ — acc.
21. https://www.nuget.org/packages/FixedMathSharp ; https://github.com/mrdav30/FixedMathSharp — acc.
22. https://github.com/XMunkki/FixPointCS (+ /commits/master) — acc.
23. https://github.com/asik/FixedMath.Net — acc.
24. https://docs.unity3d.com/Packages/com.unity.burst@1.8/manual/compilation-burstcompile.html ; …/changelog/CHANGELOG.html — acc.
25. https://learn.microsoft.com/en-us/dotnet/api/system.math.sin (updated 2026-07-01); …/system.array.sort ; …/system.collections.generic.dictionary-2 ; …/system.string.gethashcode — acc.
26. https://discussions.unity.com/t/are-floats-cross-architecture-deterministic-il2cpp-unity-2020-lts/850114 — 2021-07-28
27. https://doc.photonengine.com/quantum/v3/getting-started/release-notes — 3.0.13 = 2026-08-05
28. https://doc.photonengine.com/quantum/v3/quantum-intro — acc.
29. https://doc.photonengine.com/quantum/v3/manual/cheat-protection (updated 2026-07-21); …/addons/plugin-sdk/overview — acc. 29b. …/manual/replay — acc. 29c. …/manual/player/player-replacement — acc. 29d. …/getting-started/preview-3-1/whats-new — acc.
30. https://doc.photonengine.com/quantum/v3/manual/quantum-ecs/fixed-point — acc. (page flagged "not upgraded to Quantum 3.0")
31. https://www.photonengine.com/quantum/pricing ; https://doc.photonengine.com/quantum/v3/getting-started/faq — acc.
32. https://www.photonengine.com/quantum/showcase (serves the Quantum product page) — acc.
33. https://doc.photonengine.com/quantum/v3/reference/regions-quantum3 — acc.
34. https://github.com/xpTURN/Klotho — acc. 34b. https://github.com/lucasteles/Backdash (+ /releases) — acc.
35. https://www.photonengine.com/realtime/pricing — acc. 35b. https://doc.photonengine.com/fusion/current/fusion-intro — acc. 35c. https://www.photonengine.com/gaming (Gaming Circle / Enterprise Cloud) — acc.
36. https://unity.com/products/gaming-services/pricing ; https://docs.unity.com/en-us/relay/locations-and-regions — acc. 36b. https://docs.unity.com/en-us/relay — acc.
37. https://heroiclabs.com/docs/nakama/concepts/multiplayer/relayed/ ; …/authoritative/ ; https://heroiclabs.com/pricing/ ; https://github.com/heroiclabs/nakama — acc.
38. https://edgegap.com/resources/pricing — acc.
39. https://cloud.google.com/compute/docs/regions-zones — updated 2026-09-28
40. https://docs.unity3d.com/6000.3/Documentation/Manual/UI-system-compare.html (and /6000.6/) — acc.
41. https://esotericsoftware.com/spine-purchase — acc. 41b. https://esotericsoftware.com/spine-runtimes-license — updated 2025-04-05
42. https://docs.unity3d.com/Packages/com.unity.2d.animation@17.0/manual/index.html — acc. 42b. https://docs.unity3d.com/Packages/com.unity.addressables@4.1/manual/index.html — acc.
43. https://docs.unity3d.com/6000.3/Documentation/Manual/play-asset-delivery.html — acc.
44. https://support.google.com/googleplay/android-developer/answer/9859372 — acc.
45. https://developer.apple.com/help/app-store-connect/reference/on-demand-resources-size-limits/ — acc. 45b. …/reference/maximum-build-file-sizes/ — acc.
46. https://developer.apple.com/videos/play/wwdc2026/378/ — WWDC26 (Jun 2026)
47. https://9to5mac.com/2019/06/03/ios-13-removes-200-mb-file-size-limit-for-app-downloads-over-cellular/ — 2019-06-03
48. https://developer.android.com/topic/performance/vitals ; https://developer.android.com/google/play/vitals/crash — both updated 2026-09-21
49. https://support.google.com/googleplay/android-developer/answer/11926878 — acc.
50. https://developer.android.com/guide/practices/page-sizes — updated 2026-09-16
51. https://omdia.tech.informa.com/pr/2026/may/southeast-asia-smartphone-market-shipments-decline-9percent-in-1q26-as-vendors-prioritize-profitability-over-share — 2026-05-19; https://omdia.tech.informa.com/pr/2026/aug/southeast-asia-smartphone-shipments-fall-23percent-in-2q26-to-lowest-level-since-2014 — 2026-08-27
52. https://gs.statcounter.com/vendor-market-share/mobile/south-korea ; https://gs.statcounter.com/os-market-share/mobile/south-korea — Sep 2026 data
