# E — Market Structure, Genre Economics & Case Studies
*Research input for the woweverstudio IAP-only (no ads) F2P mobile game design document. Prepared 2026-10-01.*

**Scope.** Which genres and formats deliver high retention, long playtime and high IAP revenue; why long-lived mobile games last; why well-funded ones failed; what is realistic for a small Korean team launching in Korea and then globally. D1/D7/D30 benchmark tables are covered by another researcher and are left out here.

**Method and verification.** I opened every source listed below in this session: web pages through fetch, PDFs downloaded and text-extracted, and academic metadata/abstracts through PubMed, Crossref or Semantic Scholar.
- *Verified: yes* means I read the primary page or document myself.
- *Verified: partial* means I read only a secondary summary (for example a gamedevreports.substack digest of a paywalled Sensor Tower or AppMagic report), or the primary page was JS-rendered or blocked and only part of it could be read.
- Market-intelligence figures (Sensor Tower, AppMagic, Appfigures) are third-party estimates of App Store and Google Play spending. They exclude web-shop (D2C) and ad revenue unless stated otherwise.
- "[desc]" marks generic gameplay descriptions of well-known games that are not taken from a cited source.

---

## Executive summary (10 findings)

1. **The market is mature and flat; retention is now the growth lever.** Mobile game IAP was $81.75B in 2025 (+1.3% YoY), downloads fell 7.2%, and H1 2026 IAP was about $40B (−2.0%) [E2, E3]. Sensor Tower's own conclusion is that growth comes from "retaining, engaging, and monetizing existing players… through live ops, events, and IP collaborations" [E2]. 84% of 2024 IAP went to games with live ops [E1].
2. **Strategy (4X) and puzzle carried 2024–25; RPG is shrinking.**
   - Strategy: $17.5B in 2024 (+16.2%) and $20.2B in 2025 [E1, E2].
   - Puzzle: $14.4B in 2025, and +19.6% in H1 2026 [E2, E3].
   - RPG: −17.3% in 2024 and −15% to −17% in 2025 [E1, E4, E6].
   - 4X peaked in Q4 2025. It is now an oligopoly: the top 10 titles hold 64% of genre revenue [E3, E4].
3. **Incumbents take almost all the revenue.** Games older than two years earned roughly 91.5% of puzzle IAP, 80.9% of strategy and 66% of RPG in 2024 [E1]. New hits come from fresh formats (Pokémon TCG Pocket, Kingshot, Gossip Harbor), from extreme UA spend, or both [E1, E26, E29, E33].
4. **Hybrid structures are the one clear growth pocket.** A casual-readable core with a deep midcore meta is the only model with meaningful IAP growth (+20% Sensor Tower; +88% to $733M AppMagic). Its top titles now beat casual games on D7 retention [E2, E6]. Habby's roguelites monetize mainly through IAP, and South Korea was Archero 2's #1 market at 23% of lifetime revenue [E30].
5. **Longevity is operated, not innate.**
   - Brawl Stars grew revenue 8.8× in eight months, five years after launch [E21].
   - Clash Royale grew +147% in 2025, nine years after launch, after simplifying progression [E7, E20].
   - Clash of Clans set record revenue seven years in, after adding a pass [E23].
   - Gossip Harbor broke out three years after launch on LiveOps intensity [E33].
6. **Failures share four causes.** Unclear audience (too simple for midcore, too complex for casual), too few progression vectors, retention validated on too small a sample, and marketing before validation. Examples: Squad Busters, Clash Quest, Clash Mini [E20, E22, E36].
7. **Korea: big but shrinking, and changing shape.**
   - KR mobile IAP was $2.4B in H1 2025 and $2.8B in H2 2025, then $2.32B in H1 2026 (−10% YoY) [E3, E12].
   - Chinese 4X titles now sit at #1–4 [E12].
   - RPG's share is falling (57.5% in 2023, 52% in Jan–Oct 2024), and within RPG, MMORPG is giving way to squad and idle formats [E10, E11].
   - Domestic game participation fell to 50.2% in 2025 [E13].
8. **Korean players want play immersion and stress relief, and resent coercive monetization.**
   - The #1 reason for their main mobile game is "play immersion" (59.6%); stress relief is the #1 reason to game (54.2%) [E13].
   - Buyers judge purchases mainly on price (36.7%) and gameplay impact (35.9% first-rank, 67.9% multi) [E13].
   - FGI participants, spenders included, show strong aversion to "blatant BM" and to guild-war spending coercion [E13].
   - Loot-box odds disclosure has been law since 2024-03-22, with treble damages since 2025-08-01 [E17].
9. **Quantitative studies point to two levers a small team controls: update cadence and difficulty personalization.**
   - Continuous feature updates raise top-grossing survival up to 3× [E37].
   - Easier, personalized difficulty raises long-run spending; personalization alone was modelled at +71% revenue [E39, E40].
   - In Korea, IP and publisher-name advantages fade after month one [E38].
10. **What a small team can realistically do.** Avoid content-treadmill genres (level-based puzzle, gacha RPG) and UA-war genres (4X, coin-looters). Favor systemic, replayable formats (roguelite runs, co-op or async competition, procedurally tuned puzzles) with lean, tool-driven LiveOps. Space Ape ran weekly events with four people [E45], and Korea's 111% reached $47M IAP in five months with a luck-based co-op defense game [E11, E35].

---

## Part 1 — Source register (45 sources)

### A. Global market structure & genre economics

**[E1] Sensor Tower (2025). *State of Mobile Gaming 2025 — The definitive mobile gaming industry report* (2024 data).** https://investgame.net/wp-content/uploads/2025/11/sensor_tower__state_of_mobile_gaming_2025__en.pdf (Sensor Tower-branded PDF on a third-party mirror; official landing page: https://sensortower.com/blog/state-of-mobile-gaming-2025). **Verified: yes** (full PDF text extracted and read).

Key data (2024, iOS + Google Play, China iOS only, gross):
- **Totals:** IAP $81.7B (+3.8%), downloads 49.3B (−6.6%), hours 390B (+7.9%), sessions 3.5T (+12%). "84% of mobile gaming IAP revenue went to games with live ops."
- **By product model:** mid-core $45.9B (+0.2%), casual $32.4B (+6.4%), hybridcasual $3.1B (+37%), hypercasual $316M.
- **By genre:** Strategy $17.5B (+16.2%; 21.4% of IAP from only 4% of downloads); RPG $16.8B (−17.3%; 20.5%); Puzzle $12.2B (+14.0%; 14.9%); Casino $11.7B (+8.9%; 14.3%); Action +46%.
- **Subgenre share of IAP:** 4X just under 10% (Last War), Match-Swap 8.67% (Royal Match), Squad RPG 6.14%, MMORPG 5.59%, MOBA 5.52%, Coin Looters 5.14% (Monopoly GO), Idle RPG 1.72%, Merge-2 1.50%, Geolocation 1.48%.
- **Subgenre share of time spent:** Battle Royale 12.69%, MOBA 10.61% (Brawl Stars #1), Sandbox 8.16%, Match-Swap 3.96% (Candy Crush), 4X 2.18%, RTS 2.11% (Clash Royale), Build & Battle 1.88% (Clash of Clans).
- **Incumbency:** share of 2024 genre IAP from titles more than 2 years old (read from chart) ≈ casino 98.4%, tabletop 97.1%, shooter 94.7%, puzzle 91.5%, strategy 80.9%, RPG 66.0%, lifestyle 65.3%. 2024 launches added $2.92B gross growth.
- **Feature tags (top 1,000 grossing):** games with a daily bonus averaged 12× the IAP of games without one. This is correlational; Sensor Tower calls daily bonus "a marker for games with some degree of live operations."
- **Biggest 2024 YoY growth:** Last War +$1.56B, Monopoly GO +$1.24B, Whiteout Survival +$970M, Brawl Stars +$860M ("overhaul to their live ops" plus collaborations such as SpongeBob and Godzilla), Royal Match +$650M.
- **Launch of the year:** Pokémon TCG Pocket ($5.32M/day). Sensor Tower: it "gives players permission to log in once or twice per day for free packs, then log right back out."
- South Korea was the #4 market by IAP in both 2023 and 2024.

Implication: revenue pools sit with long-running, LiveOps-heavy titles. A newcomer needs a format where incumbency is weaker and LiveOps capacity from day one. TCG Pocket shows revenue does not require maximising session time.

**[E2] Sensor Tower (2026). *State of Gaming 2026* (press release, 2026-02-26) and *State of Mobile 2026* (digests).** https://sensortower.com/press/press-release-sensor-tower-state-of-gaming-gaming-drove-52-billion-downloads-82b-iap-revenue-on-mobile-and-12b-premium-revenue-on-steam ; digests: https://gamedevreports.substack.com/p/sensor-tower-state-of-gaming-2026 (D. Byshonkov, 2026-03-19) and https://gamedevreports.substack.com/p/sensor-tower-the-state-of-the-mobile (2026-01-30). **Verified: yes** (press release); **partial** (genre dollar figures come from the digests).

Key data (2025):
- IAP $81.75B (+1.3%); downloads 50.41B (−7.2%); time spent +0.9%.
- "Strategy is the only genre to make gains in revenue, downloads, and time spent." Last War is #1 and Whiteout Survival #2 by revenue. Strategy reached $20.2B and puzzle $14.4B (strongest growth); RPG declined.
- Hybridcasual was the only product model with meaningful IAP growth (+20%). Top hybridcasual titles' D7 now exceeds casual, and casual D7 has declined since early 2022.
- Non-game apps out-earned games for the first time ($85.6B vs $81.8B).
- The top 1% of all apps took 92.2% of IAP, but games' share outside the top 1% grew to 7.5%.
- Century Games rose to #3 publisher; Kingshot reached #7.

Implication: a maturing market rewards hybrid structures and retention. Concentration is extreme, but the long tail in games is slowly widening.

**[E3] Sensor Tower (2026). *The Gaming Market in H1 2026* (digest by D. Byshonkov, 2026-08-17).** https://gamedevreports.substack.com/p/sensor-tower-the-gaming-market-in. **Verified: partial** (secondary summary).

Key data (H1 2026):
- **Totals:** IAP ~$40B (−2.0%); downloads 24B (−11.9%); playtime 221B hours (flat).
- **Genres:** strategy $9.27B (−5%); puzzle $8.07B (+19.6%); RPG $6.12B (declining, with MMORPG especially weak).
- **Subgenres:** Merge-2 nearly doubled to $1.91B (Gossip Harbor +135%). 4X declined for two straight quarters from its Q4 2025 peak of $3.09B. Monopoly GO's store revenue fell 18%, attributed to a D2C shift.
- **Breakouts:** Kingshot +461% to $700M; Last Z: Survival Shooter +328% to $359M.
- **Top titles:** Honor of Kings $1.078B, Last War $977M, Whiteout Survival $918M.
- **South Korea:** IAP $2.32B (−10% YoY), with RPG down $297M.
- About 57% of miHoYo's US revenue is estimated to go through D2C.

Implication: 2026 momentum is in casual puzzle and merge driven by narrative and LiveOps; 4X is saturating; Korea is contracting.

**[E4] AppMagic (2026). *Mobile Market Landscape 2026*.** Digest: https://gamedevreports.substack.com/p/appmagic-mobile-market-landscape (2026-02-06) and PocketGamer.biz (Isa Muhammad, 2026-02-06): https://www.pocketgamer.biz/games-revenue-growth-stalls-in-2025-as-strategy-emerges-as-the-fastest-growing-genre/. **Verified: partial / yes.**

Key data (2025):
- Games revenue +0.2% (2024: +3%); downloads +4.6%.
- By genre: strategy +16.1%, shooter +14.2%, RPG −16.6%, action −24.5%.
- **Concentration:** 4X top-10 share of genre revenue rose to 64% (47% in 2023). The merge top-10 holds 80%; Gossip Harbor alone made $550M, 33% of the genre.
- Mid-core retention declined at every stage (D365 −12%). LiveOps intensity was +16% (Dec 2025 vs Dec 2024). US D2C revenue grew 26%. South Korea revenue fell 12.2%.
- More than 1.4M apps were released, 72% of them games; "only around 10%" drew meaningful user attention.

Implication: do not attack oligopolised subgenres head-on. Rising LiveOps intensity raises the operational bar.

**[E5] PocketGamer.biz — Aaron Astle (2025-07-24). *H1 2025 genre analysis: Mobile strategy games surge to $10.6bn as RPG revenue tumbles* (AppMagic data).** https://www.pocketgamer.biz/strategy-games-surge-as-rpg-revenue-tumbles-h1-2025s-top-genres-revealed/. **Verified: yes.**

Key data (H1 2025):
- Strategy $10.6B (+26%; 24% of all player spending; overtook RPG). RPG $9.3B (−11%). Puzzle $6.9B (+16%).
- Leading titles: Honor of Kings $1.5B, Last War $1.2B, Whiteout Survival ~$1.2B, Royal Match $974.8M, Candy Crush $776.9M.
- The US accounts for $3.5B of puzzle revenue (51% of global puzzle).

Implication: puzzle IAP is US-centric; strategy and RPG IAP is Asia-centric. This affects the Korea → global sequence.

**[E6] AppMagic (2025). *Mobile Games Monetization Report 2025* (digest, D. Byshonkov, 2025-12-04).** https://gamedevreports.substack.com/p/appmagic-mobile-games-monetization. **Verified: partial.**

Key data:
- Strategy +25.6% to $13.5B. Card battlers grew +213%, and $99 offers are frequent in top titles.
- RPG −15.4% to $11.6B. Some mid-core RPGs are testing $0.99–4.99 offers.
- Puzzle +14.7% to $8.8B. "In merge and Match-3 games, most revenue comes from special offers tied to LiveOps."
- Hybridcasual IAP +88% to $733M. The share of hybridcasual payers spending more than $100 by D90 rose to 32%.
- D2C grew 46% in the US top 100.

Implication: in casual IAP, LiveOps-tied offers are the revenue engine, and hybrid structures now monetize deep payers without needing ads.

**[E7] PocketGamer.biz — Craig Chapple (2025-12-22). *The top grossing mobile games of 2025* (AppMagic, 1 Jan–21 Dec 2025).** https://www.pocketgamer.biz/the-top-grossing-mobile-games-of-2025/. **Verified: yes.**

Key data:
- Top titles: Honor of Kings ~$2.4B (−2.9%), Last War ~$2.2B (+42.5%), Roblox ~$2.0B (+30.2%), Whiteout Survival ~$1.9B, Royal Match ~$1.9B, PUBG Mobile ~$1.6B, Monopoly GO ~$1.0B+, Candy Crush ~$1.0B+, Pokémon TCG Pocket ~$952.6M, Coin Master ~$910M.
- **Clash Royale made $627.5M, +147% YoY, nine years after launch.**
- Breakouts from Chinese developers: Kingshot, Gossip Harbor, Delta Force.

Implication: veteran games can double revenue after an overhaul, so longevity is an operating discipline.

**[E8] PocketGamer.biz — Craig Chapple (2026-08-25). *Sensor Tower reveals the hidden impact of D2C revenue in mobile games*.** https://www.pocketgamer.biz/sensor-tower-reveals-the-hidden-impact-of-d2c-revenue-in-mobile-games/. **Verified: yes.**

Key data:
- Monopoly GO's web-store sales are about one-third of its revenue.
- In H1 2026 (US), casino earned ~30% of top-100 revenue through D2C and RPG was close behind; strategy and puzzle have low D2C adoption.
- D2C market estimates start at $17B.

Implication: a web shop is a later margin lever for an IAP-only game. Store-only "declines" partly reflect channel shift.

**[E9] PocketGamer.biz — Aaron Astle (2022-06-10). *GameRefinery: creative battle pass implementation found in 60% of the top grossing mobile games*.** https://www.pocketgamer.biz/gamerefinery-battle-pass-implementation-in-top-grossing-mobile-games/. **Verified: yes** (2022 data, older than the target window).

Key data:
- 60% of US top-20%-grossing games had a battle pass. 75% (US) and 93% (Japan) of top-20% games had gacha. Nearly all used time-limited offers.
- Royal Match gives team members gifts when someone buys a premium pass (social monetization). CoD Mobile offers auto-renew and subscription passes.

Implication: passes, offers and randomized rewards are the baseline IAP toolkit. Social gifting tied to purchases supports team retention.

### B. Korea — market, players, regulation, backlash

**[E10] Sensor Tower Korea — Yena You (2023-10). 「한국 모바일 게임 매출에서 RPG 비중은 약 60%로 주요 국가 중 1위… 스쿼드 및 방치형 RPG 비중 증가」.** https://sensortower.com/ko/blog/Korea-stands-out-as-the-leading-country-with-RPG-revenue-constituting-approximately-60-percent-of-total-mobile-game-revenue. **Verified: yes.**

Key data (Jan–Aug 2023):
- RPG = 57.5% of KR mobile game revenue (Japan 47.8%, China iOS 27%, US 11.3%).
- Within KR RPG, MMORPG fell from 77% (2019) to 69.5% (2023); squad RPG rose from 12.7% to 17.7%; idle RPG from 1.7% to 4.4%.
- Korean-made *Legend of Slime: Idle RPG* earned ~$10M in KR and ~$77M globally.

Implication: Korean spending is RPG-centric but migrating to lighter formats where small studios compete.

**[E11] Sensor Tower — Rui Ma (2024-12). *2024 South Korean Mobile Gaming Market Insights*.** https://sensortower.com/blog/state-of-mobile-games-in-korea-2024. **Verified: yes.**

Key data:
- KR IAP was $3.7B in Q1–Q3 2024; Google Play is 75% of revenue.
- RPG made $2.1B in Jan–Oct 2024 (52%). Strategy made $840M in 2024 (+69% YoY).
- Last War's KR revenue grew 33-fold YoY to $250M.
- **Lucky Defense (111%) reached ~4.6M downloads and $47M IAP within five months (by Oct 2024).**
- Legend of Mushroom made $140M in KR, 31% of its global revenue.

Implication: Korea adopts new formats quickly, and a Korean studio with a fresh systemic loop can reach the top.

**[E12] Sensor Tower Korea — Yena You (2025-07 and 2026-01). 「2025년 상반기/하반기 국내 모바일 게임 결산」, plus EBN — Kim Chae-rin (2026-07-29). 「'안방' 파고든 중국 게임…국내 모바일 매출 상위권 장악」.** https://sensortower.com/ko/blog/1H2025-mobile-games-recap-in-Korea ; https://sensortower.com/ko/blog/2H2025-mobile-games-recap-in-Korea ; https://www.ebn.co.kr/news/articleView.html?idxno=1718173. **Verified: yes.**

Key data:
- **H1 2025:** $2.4B (slight YoY decline; iOS share 24.1% → 26.4%). For the first time since 2014, three new Korean titles entered the top ranks: Seven Knights Re:BIRTH #4, Mabinogi Mobile #5, RF Online Next #6.
- **H2 2025:** $2.8B (+8.3% vs H1; −1.1% YoY). Lineage M #1; Whiteout Survival #2 (record ~$43M in Aug 2025); Vampir #4; MapleStory Idle RPG #5–6. Nexon was #1 publisher for the first time, Century Games #2. Idle RPG and strategy dominate revenue while casual games dominate downloads. Downloads fell 21% YoY to ~210M.
- **June 2026:** Whiteout Survival #1 and Kingshot #4 in Korea, so Century Games held 2 of the top 4. Chinese studios test diverse genres while Korean firms repeat Lineage-style MMORPG and IP formulas.

Implication: Korean top-grossing = legacy MMORPGs + Chinese 4X + IP idle RPGs. Casual wins installs but not revenue unless it has a deep meta.

**[E13] KOCCA 한국콘텐츠진흥원 (2025-12-18). 『2025 게임이용자 실태조사』 (KOCCA25-40).** https://www.kocca.kr/kocca/bbs/view/B0000147/2010445.do?menuNo=204153 (PDF downloaded). **Verified: yes** (full report read). Method: n = 10,000 Koreans aged 10–69; fieldwork 2025-07-14 to 08-29; Gallup Korea online panel plus tablet interviews for ages 10–14; ±1.0%p.

**Usage**
- Game participation was 50.2% (2024: 59.9%; 2022: 74.4%), the lowest since the survey began.
- Mobile is used by 89.1% of gamers (2024: 91.7%).
- Mobile daily play time: 90.9 min on weekdays (2024: 95.4) and 116.4 min on weekends (2024: 124.9).
- Players used an average of 3.4 mobile games in the year (median 2).

**Why people play**
- Platform choice: "familiar/convenient/comfortable environment" is the #1 reason for mobile (72.0%, first-rank).
- Main mobile game, first-rank reason: **play immersion 59.6%**, character immersion 21.7%, world immersion 11.2% (multi-answer: 83.3 / 47.9 / 23.0%).
- Gaming overall: stress relief 54.2% first-rank (69.1% multi). Among multi-answers, creation/decoration immersion 37.4% and achievement 35.3%.

**How long they stay and how they found it**
- Main mobile game tenure averages 25.6 months; 30.8% have played it for 3 years or more, 18.0% for less than 3 months.
- Discovery: ads/marketing/web 45.7%, friends and family 42.3% (teens 67.3%), influencers 8.7%.

**Genres played** (multi-answer)
- Puzzle & quiz 36.8%, collectible/character-growth RPG 27.0%, shooter 24.4%, action/MMORPG 23.3%, strategy-sim 18.7%.
- Women: puzzle 53.9%. People in their 20s/30s: collectible RPG 37.6% / 38.3%. Teens: shooter 42.8%. People in their 50s/60s: puzzle 49–51%.

**Spending** (mobile, past 12 months, among spenders)
- About 51.9% of mobile gamers spent anything (derived from n = 2,324 of 4,477). Their mean was ₩90,000 and median ₩20,000; 31.5% spent ₩50,000 or more.
- In-game payers were about 42.5% (derived from n = 1,903). Their mean was ₩93,000 and median ₩19,000. People in their 30s had the highest mean, ₩151,000.
- Why they buy items (first-rank / multi): faster level-up 46.0 / 66.3%; competitive advantage 32.3 / 65.3%; cosmetics 15.3 / 29.7%.
- New products (all platforms, among payers): 37.8% bought new releases. Season passes were 29.8% of those purchases.
- Purchase criteria (first-rank): price 36.7%, gameplay impact 35.9% (67.9% multi).
- Preferred release cadence for new products: monthly or more 23.6%, quarterly 23.1%, "doesn't matter" 20.5%.

**Ads**
- 62.3% had played ad-funded free games, and 16.3% of those paid to remove ads.
- 71.9% of mobile gamers would pay nothing to remove ads.

**Auto-play**
- 29.9% used it (people in their 30s: 40.6%). Reasons: skip boring parts 44.8%, grow faster 44.7%, no time 37.9%.

**Lapsed players**
- Reasons: no time 44.0%; lost interest or satisfied by watching streams 36.0%; found alternative leisure 34.9% (of whom 86.3% turned to OTT/video); lack of motivation or no one to play with 33.1%; cost 16.0%.

**Complaints**
- 13.9% had a conflict with a publisher. The most common causes were content bugs 37.2%, install/connection 36.3% and payment 24.7%.

**Focus-group findings (FGI)**
- Even spenders voiced "strong aversion to games that show blatant BM."
- Guild "city/server wars" led to coerced purchases ("the guild forces us to buy"), which in turn led to quitting.
- Lapsed players avoid returning because they must "study" accumulated updates. KOCCA recommends easier access, faster content consumption and lower return burden, and notes spending fell year on year on most platforms.

Implication: design for immersive core play and stress relief. Price clearly and keep gameplay advantage modest. Build comeback paths. Make social play cooperative, not coercive.

**[E14] 문화체육관광부·KOCCA (2026-03-25). 『2025 대한민국 게임백서』 (2024 data), as reported by ZDNet Korea (Jung Jin-sung).** https://zdnet.co.kr/view/?no=20260325142500. **Verified: partial** (press coverage; white paper not opened).

Key data (2024):
- Korean game industry revenue ₩23.85T (+3.9%). Mobile ₩14.07T (59.0%, +3.4%); PC 25.2%; console 5.0% (+4.8%).
- Exports $8.50B (+1.3%): China 29.7%, Southeast Asia 20.6%, North America 19.5%, Japan 8.3%.
- Korea holds 7.2% of the world market (#4).

Implication: mobile is the domestic core, and North America/Southeast Asia are realistic export targets.

**[E15] KOCCA (2024-12-20). 『글로벌 게임산업 트렌드』 2024 11+12월호 — 「[BM] 확률형 아이템 규제 이후 모바일 게임의 BM 변화」.** https://www.kocca.kr/global/2024_11+12/sub02_05.html. **Verified: yes.**

Key data:
- Probability disclosure has been mandatory since 2024-03-22.
- Brawl Stars removed loot boxes in Dec 2022, saw a ~14% monthly revenue decline, and then added Starr Drops.
- KOCCA recommends hybrid monetization (IAP + passes/subscriptions + optional ads) and a "return to game fundamentals."

Implication: pass- and subscription-centred BM is the regulatory-safe direction in Korea.

**[E16] Korean 2021 "truck protests": The Korea Herald — Kim Byung-wook (2021-02-21), *[News Focus] Call for transparency as gamers take issue with real odds of 'random' items*; and Park, S., Denoo, M., Grosemans, E., Petrovskaya, E., Jin, Y., & Xiao, L. Y. (2023), *Learnings From The Case of Maple Refugees: A Story of Loot Boxes, Probability Disclosures, and Gamer Consumer Activism*, Mindtrek '23 (ACM), DOI 10.1145/3616961.3616963.** https://www.koreaherald.com/article/2562759 ; https://dl.acm.org/doi/10.1145/3616961.3616963. **Verified: yes** (article read; paper verified through Crossref metadata and abstract).

Key data:
- Nexon admitted MapleStory "Rebirth Flame" options had unequal, preset odds. NCSoft's Lineage 2M hid final-craft odds behind nested probabilities. The industry association called odds "trade secrets."
- In spring 2021, tens of thousands of MapleStory players and players of other F2P games mobilised. From 2021-02-19 they ran crowdfunded "truck protests" against loot-box monetization and self-regulated disclosure.

Implication: in Korea, opaque randomness is a reputational and legal risk.

**[E17] Korean loot-box law enforcement: Xiao, L. Y., & Park, S. (2025). *Better than industry self-regulation: Compliance of mobile games with newly adopted and actively enforced loot box probability disclosure law in South Korea*. Acta Psychologica, DOI 10.1016/j.actpsy.2025.105490; plus Game World Observer — Evgeny Obedkov (2024-07-08) and ZDNet Korea — Jung Jin-sung (2025-08-01).** https://pubmed.ncbi.nlm.nih.gov/40945152/ ; https://gameworldobserver.com/2024/07/08/266-games-violated-loot-box-rules-south-korea ; https://zdnet.co.kr/view/?no=20250801144527. **Verified: yes.**

Key data:
- 90 of the 100 highest-grossing iPhone games in Korea contained paid loot boxes, and 84.4% of those disclosed probabilities. Regulators monitor actively and have fined firms for false odds.
- GRAC flagged 266 violations among 1,255 monitored cases by July 2024 (≈60% foreign). Penalties go up to ₩20M or 2 years in prison.
- From 2025-08-01, damages can reach 3× and the burden of proof shifts to companies.

Implication: if any paid randomness exists, disclose it accurately, audit it, and log it.

**[E18] Fortune — Chris Morris (2022-10-11). *Korean gamers take to streets in horse and buggies to protest their treatment in popular title*.** https://fortune.com/2022/10/11/korean-gamers-horse-and-buggy-protest. **Verified: yes.**

Key data: Korean Uma Musume players (publisher Kakao Games) protested worse treatment than Japanese players — poor event notice and fewer gacha benefits. A class action ended in a refund of about $142 per plaintiff.

Implication: Korean players benchmark against other regions, so global LiveOps need parity and clear communication.

### C. Case studies — long-lived and breakout games

**[E19] Supercell — Ilkka Paananen (2025-02-11). Annual CEO post on 2024 ("forever game").** https://supercell.com/en/news/forever-game/. **Verified: yes.**

Key data:
- 2024 revenue €2.8B (+77%); EBITDA €876M (+78%); 300M+ MAU.
- Brawl Stars "doubled, tripled, quadrupled (and more)" its metrics five years after launch. Per its general manager, the drivers were:
  - the team grew to about 60–80 people;
  - "90:10" low-risk improvements were mixed with 50:50 big bets;
  - lower pressure on the team;
  - listening more to players.
- Squad Busters made $100M+ in seven months, but it "tried appealing to everyone." A longer global soft launch "would have given us indication of the true audience."
- Philosophy: "the best games never get 'old' if you keep them fresh"; Supercell greenlights teams, not games.

Implication: longevity comes from steady, low-risk improvement plus occasional bets.

**[E20] Supercell — Ilkka Paananen (2026-02-10). *The best games haven't been made yet* (2025 post).** https://supercell.com/en/news/the-best-games-havent-been-made-yet/. **Verified: yes.**

Key data:
- 2025 revenue $3.01B (€2.65B); EBITDA $1.06B.
- **Clash Royale:** progression simplified, extraneous systems removed, desirable content added → re-engaged players doubled and new players grew ~500%.
- **Squad Busters:** 75M downloads and $100M+ spent, but retention did not match closed-beta results. "Even large beta samples don't predict global behavior" (beta had 100k+ players). Lessons: run a longer beta for long-term retention and avoid massive marketing before validation.
- Clash of Clans and Hay Day are both 14 years old. New-game investment doubled in 2025 and will double again in 2026.

Implication: simplify progression for new and returning players, and validate long-term retention before scaling.

**[E21] Brawl Stars turnaround: mobilegamer.biz — Neil Long (2024-03-26), *Supercell explains Brawl Stars' big comeback, from an all-time low to 8.8x revenue*; PocketGamer.biz — Craig Chapple (2025-02-11), *How Brawl Stars became a mega hit and why Squad Busters didn't*; GDC Vault — Frank Keienburg & Frank Yan (GDC 2024), *'Brawl Stars': Learnings from the Removal of Loot Boxes*.** https://mobilegamer.biz/supercell-explains-brawl-stars-big-comeback-from-an-all-time-low-to-8-8x-revenue/ ; https://www.pocketgamer.biz/how-brawl-stars-became-a-mega-hit-and-why-squad-busters-didnt/ ; https://gdcvault.com/play/1034604/-Brawl-Stars-Learnings-from. **Verified: yes.**

Key data:
- June 2023 → Feb 2024: revenue 8.8×, MAU 2.4×, DAU 3.9×.
- Sequence of changes:
  - Dec 2022: loot boxes removed (replaced by linear Starr Road);
  - Jun 2023: earned random rewards re-introduced (Starr Drops);
  - Sep 2023: Hypercharges;
  - Oct 2023: Mega Pig;
  - Nov 2023: Brawl Pass overhaul (shorter seasons, more XP).
- Quotes: "We did not understand what our players wanted… echo chamber"; "Random rewards are exciting for our players! Doh!"
- The loot-box removal initially reduced engagement. Decisions now combine "community sentiment, data, and designer intuition."
- Squad Busters launched after a closed beta of only ~120k players. "Trying to make a game for everyone ended up it not being perfect for anyone."

Implication: earned, transparent randomness drives engagement, and removing it hurt. Decide with sentiment, data and intuition together.

**[E22] Deconstructor of Fun analyses of Supercell: Jared Gibbons (ed. M. Katkoff) (2024-09-30), *4 x Reasons Why Squad Busters Suffers While Brawl Stars Soars*; Michail Katkoff (2025-02-17), *Supercell's Record Year: Crushing It, But At What Cost?*.** https://www.deconstructoroffun.com/blog/2024/9/30/4-x-reasons-why-squad-busters-suffers-while-brawl-stars-soars ; https://www.deconstructoroffun.com/blog/2025/2/17/supercells-record-year-crushing-it-but-at-what-cost. **Verified: yes.**

Key data:
- Squad Busters' DAU was below 7% of Brawl Stars' at ~140 days after launch.
- Four reasons:
  1. low gameplay diversity;
  2. simplicity without mastery;
  3. few progression vectors;
  4. insufficient soft launch (Brawl Stars had 18 months and three core/meta iterations).
- Counterpoint on the Brawl Stars recovery: earlier product updates did not reverse the decline until marketing was "turned on to 11" in late 2023. Growth tracked bigger LiveOps teams and UA and brand spend.

Implication: product depth is necessary, and recovery also needs re-acquisition and reactivation spend.

**[E23] GDC Vault — Supercell talks: Jonas Collaros (GDC 2015), *Clash of Clans: Designing Games That People Will Play For Years*; Stefan Engblom (GDC 2017), *Quest for the Healthy Metagame: Balancing Cards in 'Clash Royale'*; Eino Joas (GDC 2020), *'Clash of Clans': Bigger, Better, Battle Pass*.** https://gdcvault.com/play/1021858/Clash-of-Clans-Designing-Games ; https://gdcvault.com/play/1024272/Quest-for-the-Healthy-Metagame ; https://gdcvault.com/play/1026741/-Clash-of-Clans-Bigger. **Verified: yes** (session pages; full talks are members-only).

Key data:
- Clash of Clans prioritised "what matters most" in each of three eras rather than following a fixed roadmap.
- Clash Royale treats ongoing card/gameplay balancing for a multi-year multiplayer game as a core LiveOps discipline.
- More than 2B installs. The Gold Pass journey (2017–2019) coincided with record revenue more than 7 years after launch.

Implication: a well-designed pass can re-energise a mature economy. In competitive or card formats, plan permanent balance-team capacity. Prioritise essentials over feature lists.

**[E24] Candy Crush (King): Game World Observer — Evgeny Obedkov (2023-09-27), *Candy Crush Saga hits $20 billion in lifetime revenue, King says "the bar is very high" to launch new game*; PocketGamer.biz — Aaron Astle (2025-11-20), *Candy Crush Soda Saga: 11 years, 18,000 levels…*.** https://gameworldobserver.com/2023/09/27/candy-crush-saga-revenue-20-billion-king ; https://www.pocketgamer.biz/candy-crush-soda-saga-11-years-18000-levels-and-a-turning-point-for-the-candy-crush-franchise/. **Verified: yes.**

Key data:
- The franchise has made $20B lifetime since April 2012.
- King's president: "possible to reignite games that are years old"; "the bar is very high … to launch a new game nowadays"; "Candy Crush took us a few months to build but we added 10 years of development after that."
- Soda Saga now has more than 18,000 levels (launched with 150); **2,355 were added in 2025**. It has 1B+ installs, and dedicated "puzzle setters" tune levels with player data.

Implication: level-based puzzle means a permanent level-production treadmill.

**[E25] Royal Match (Dream Games): TechCrunch — Ingrid Lunden (2021-02-28); mobilegamer.biz — Neil Long (2024-09-09); PocketGamer.biz — Lewis Rees (2023-03-20, CEO interview); PocketGamer.biz — Isa Muhammad (2025-05-01, CVC deal).** https://techcrunch.com/2021/02/28/istanbuls-dream-games-snaps-up-50m-and-launches-its-first-game-the-puzzle-based-royal-match ; https://mobilegamer.biz/dream-games-royal-match-has-passed-3bn-says-appfigures/ ; https://www.pocketgamer.biz/interview/81102/dream-games-ceo-soner-aydemir-on-the-companys-expansion-into-new-markets/ ; https://www.pocketgamer.biz/dream-games-secures-strategic-investment-from-cvc-as-sole-equity-partner/. **Verified: yes.**

Key data:
- Five ex-Peak Games founders. Soft launch in the UK and Canada in July 2020 reached 1M downloads and 200k DAU.
- Pixar-inspired quality bar combined with "high-quality user acquisition."
- Lifetime revenue: $1B by April 2023 → $2B by January 2024 → $3B by about July 2024 (300M installs; Appfigures).
- By August 2024, monthly downloads were 58% below their February 2024 peak.
- Headcount was planned to reach 250 by end-2023. A 2025 CVC deal valued the company at about $5B.

Implication: a small expert team can beat the biggest incumbent, but through extreme polish and heavy UA capital — not a cheap path.

**[E26] Monopoly GO (Scopely): Sensor Tower — Bryan Isagholian (2026-01), *MONOPOLY GO! Hits $6B in IAP Faster Than Any Game in Mobile History*; Kotaku — Zack Zwiezen (2024-03-19); Naavik — Miikka Ahonen (2024-03-19), *Has Monopoly Go Peaked? KPIs Uncovered*.** https://sensortower.com/blog/monopoly-go-app-revenue-milestone ; https://kotaku.com/monopoly-go-ad-budget-bigger-than-spider-man-last-of-us-1851350182 ; https://naavik.co/digest/monopoly-go-kpis/. **Verified: yes.**

Key data:
- $6B lifetime IAP in 2025, the fastest of any mobile game; about $200M per month.
- Sensor Tower's growth drivers: fast reward loops, social multiplayer events and gifting, event-driven LiveOps, IP, broad demographics, and culturalised (not just localised) adaptation.
- Marketing/UA spend was "around (but less than) $500 million," per a Scopely SVP quoted via Game File.
- Naavik: 10M+ DAU, ARPDAU ~$0.50, eCPI ~$3.30, and a "soft ceiling" in 2024.

Implication: casual social-event design monetizes very well, but the path assumes IP plus nine-figure UA.

**[E27] Pokémon GO: Scopely (2025-03-12), *Scopely to acquire Niantic's games business…*; Nintendo Life — Liam Doolan (2023-03-31), Remote Raid Pass changes.** https://www.scopely.com/en/news/scopely-to-acquire-niantic-games-business-which-includes-pokemon-go-one-of-the-most-successful-mobile-games-of-all-time ; https://www.nintendolife.com/news/2023/03/pokemon-go-increasing-remote-raid-pass-prices-and-limiting-daily-participation. **Verified: yes.**

Key data:
- 2024: 100M+ unique players and 20M+ weekly actives. About half of players return weekly, averaging ~40 minutes of play a day. GO Fest sold 2M tickets in 2024.
- Niantic's games business earned more than $1B in 2024 and sold for $3.5B (closed 2025-05-29).
- In April 2023, Remote Raid Passes rose to 195 coins (525 for three) with a 5-per-day limit, explicitly to push in-person play. Players threatened a boycott.

Implication: real-world and community events build decade-long retention. Removing a paid convenience causes backlash.

**[E28] Naavik — Oindrila Mandal (2025-01-22). *Why Last War Is Winning the 4X Game*.** https://naavik.co/digest/how-last-war-is-winning-the-4x-game/. **Verified: yes** (full text).

Key data:
- Last War earned more than $1.1B in 2024, rising from $30M per month (Jan 2024) to $138M (Dec 2024). Revenue mix: US ~30%, KR ~20%, JP ~17%. Whiteout Survival's mix: US 30%, KR ~14%, CN ~12%, JP ~9%.
- iOS US comparison:

| Metric | Last War | Whiteout Survival |
|---|---|---|
| ARPDAU | $2.47 | $1.08 |
| D1 / D7 / D30 retention | 34% / 11% / 4% | 42% / 17% / 8% |
| RPD at D365 | ~$16 | ~$16 |

- A math-runner minigame concept makes up more than 50% of Last War's UA impressions, and more than 60% of the first 4–5 minutes of play is that minigame.
- Weekly Alliance Duel VS creates "co-opetition." Seasons in May and September 2024 lifted revenue.

Implication: 4X success is a UA machine plus whale LiveOps on thin retention. It is not a small-team format.

**[E29] games.gg — Eliza Crichton-Stuart (2026-06-09). *Kingshot first-year revenue tops $811M amid player backlash* (AppMagic).** https://games.gg/news/kingshot-first-year-revenue-tops-811m-amid-player-backlash/. **Verified: yes.**

Key data:
- $811.9M in the first year (launched Feb 2025), with 11 straight months of growth to $102.2M in January 2026, then −9% in February 2026.
- Revenue mix: US 43%, KR 8%, JP 7%.
- Community concerns about bot farming and "whales stepping back."

Implication: even 2025's strongest breakout shows how fragile whale dependence is.

**[E30] HABBY / Archero: Deconstructor of Fun — Michail Katkoff with Sam Aune (Sensor Tower) (2025-07-31), *HABBY's Hybridcasual Empire: The Template That Built a Powerhouse*; PocketGamer.biz — Aaron Astle (2025-02-06), *Archero 2 makes $32.8m in first 30 days*.** https://www.deconstructoroffun.com/blog/2025/7/31/habbys-hybridcasual-empire-the-template-that-built-a-powerhouse ; https://www.pocketgamer.biz/archero-2-makes-328m-in-first-30-days-from-player-spending/. **Verified: yes.**

Key data:
- Template: fast, intuitive core plus persistent progression.
- Archero: about $4 lifetime revenue per download; 30% of lifetime revenue came in its first 10 months.
- Monthly revenue: Capybara Go ~$19M, Archero 2 ~$27M. Misses: PunBall and SSSnaker below $1.5M/month, SOULS $3.2M/month.
- Habby works as a "hit factory" with external partner studios; the advantage of being early is eroding.
- Archero 2 (global launch 2025-01-07): $32.8M in its first 30 days and $65.3M lifetime including soft launch. **Top market: South Korea $14.7M (23%)**, then Taiwan 16% and US 15%.

Implication: roguelite hybrid monetizes through IAP, and Korea is a lead market for it. Even specialists have a low hit rate.

**[E31] Marvel Snap: PocketGamer.biz — Aaron Astle (2024-10-22), *Marvel Snap surpasses $275 million…*; GameMakers — Joseph Kim & Ted Park (2025-05-27), *Why Marvel Snap Players Hated Their Most Profitable Event*; PocketGamer.com — Iwan Morris (2025-01-29), publisher change.** https://www.pocketgamer.biz/marvel-snap-surpasses-275-million-as-it-celebrates-second-anniversary/ ; https://www.gamemakers.com/p/why-marvel-snap-players-hated-their ; https://www.pocketgamer.com/marvel-snap/second-dinner-new-publisher/. **Verified: yes.**

Key data:
- Lifetime $276.5M (mobile, AppMagic). Year 1 $173M → year 2 $102.9M (−40%). Peak ~$20M per month in December 2022. Movie tie-ins cause spikes (Deadpool & Wolverine +300%).
- Two events compared:

| Event | Revenue vs baseline | Player reception |
|---|---|---|
| Sanctum Showdown | +92% | Hated — ticket gating, ~8-hour waits |
| High Voltage | +52% | Loved |

- In January 2025 the game was pulled during the US TikTok ban (publisher Nuverse is ByteDance), and the studio moved to Skystone Games / self-publishing.

Implication: an elegant core is not a sustainable economy. Extraction-heavy events erode goodwill, and publisher or platform dependency is a real risk.

**[E32] PocketGamer.biz — Aaron Astle (2024-09-27). *Genshin Impact hits $6.3 billion in time for fourth anniversary, but is it running on fumes?* (AppMagic).** https://www.pocketgamer.biz/genshin-impact-hits-63-billion-in-time-for-fourth-anniversary-but-is-it-running-on-fumes/. **Verified: yes.**

Key data:
- Mobile revenue by year: Y1 $1.9B, Y2 $1.8B, Y3 $1.6B, Y4 $931.4M (to date).
- The launch of Honkai: Star Rail caused a 38.6% month-on-month drop. After Zenless Zone Zero launched, Genshin made only $116M in about three months.
- (E3 adds that ~57% of miHoYo's US revenue now goes through D2C.)

Implication: content-heavy gacha needs AAA content throughput and cannibalises itself — not a small-team format.

**[E33] Gossip Harbor (Microfun): Gamigion — George Tsomaev (2026-02), *Match 3 is Over, Merge Won? Gossip Harbor Makes $34M a Month*; AppMagic research page *Gossip Harbor's LiveOps Journey: From 20 to 100 Events a Month*.** https://www.gamigion.com/match-3-is-over-merge-won-gossip-harbor-makes-34m-a-month/ ; https://appmagic.rocks/research/gossip-harbor-liveops. **Verified: partial** (trade blog; the AppMagic page is JS-rendered, so only its title was readable).

Key data:
- Launched mid-2022; about $550M in 2025, ≈33% of the merge genre (consistent with E4), and +135% in H1 2026 (E3).
- Merge core plus drama narrative. Bundles and LiveOps offers are priced $1–25.
- About 9,000 ads per week from ~2,800 unique creatives. LiveOps grew from ~20 to ~100 events per month.

Implication: late-life breakouts are possible through LiveOps intensity plus narrative UA.

**[E34] Deconstructor of Fun — Jared Gibbons with Dylan Tredrea (2025-02-10). *How Drama and Fake Ads Convert To Real Profits*.** https://www.deconstructoroffun.com/blog/2025/2/10/the-soap-operas-driving-success-across-mobile-games-post-att. **Verified: yes.**

Key data: after ATT, narrative and drama-driven casual titles grow revenue while gameplay-innovation titles lag. Narrative is "virtually unconstrained" as a source of UA creative.

Implication: plan a character and story layer partly so marketing has creative to work with.

**[E35] Gamigion — Aylin Yazici (2025). *Lucky Defense Analysis: 111%'s Risky Bet That Won Big*.** https://www.gamigion.com/lucky/. **Verified: partial** (trade blog; the core revenue figure is corroborated by E11).

Key data:
- Launched in Korea on 2024-05-23. Co-op tower defense with random summons and merges, plus roulette buffs.
- Monetization: gacha (0.01% legendary), **VIP subscription**, bundles, **no forced ads**.
- About $11M in the first two months. Kakao Biz Board campaign returned ~95% day-0 ROAS.

Implication: a Korean studio's systemic, luck-plus-strategy co-op loop with subscription monetization reached the Korean top ranks.

### D. Failures and shutdowns

**[E36] Supercell shutdowns: PocketGamer.biz — Isa Muhammad (2025-10-31), *Supercell CEO Ilkka Paananen on the "bold" decision to close Squad Busters*; Supercell (2022-08-17), *Clash Quest Ending Development*; Game World Observer — Evgeny Obedkov (2024-03-14), Clash Mini shutdown; Deconstructor of Fun — Laura Taranto, Javier Barnés, Anette Staloy (2022-09-19), *Clash Quest, the Unofficial Postmortem*.** https://www.pocketgamer.biz/supercell-ceo-ilkka-paananen-thanks-players-as-squad-busters-prepares-to-shut-down-in-2026/ ; https://supercell.com/en/news/clash-quest-ending-development/7675/ ; https://gameworldobserver.com/2024/03/15/clash-mini-shutdown-supercell-no-new-games-in-five-years ; https://www.deconstructoroffun.com/blog/2022/9/17/clash-quest-the-unofficial-postmortem. **Verified: yes.**

Key data:
- **Squad Busters:** Supercell's first globally launched game to be closed ($100M+ lifetime; launched May 2024; final update December 2025). Paananen: "It was a bold decision to launch the game, but… this decision was even bolder."
- **Clash Quest:** ended after 16 months of soft launch; it "didn't reach the bar." Per DoF, retention over a set period is "one of the most important" business objectives. The game was too casual for mid-core players and too complex for casual ones, and its LTV was low against puzzle-genre CPIs.
- **Clash Mini:** killed after more than two years in beta — "a good game but not the game that would ultimately fulfill our dream."
- **Others killed:** Hay Day Pop, Everdale, Flood Rush.
- New-game teams run on fixed budgets and are killed if the money runs out before product-market fit.

Implication: adopt explicit, retention-led kill criteria and fixed budgets per phase.

### E. Academic and quantitative studies

**[E37] Lee, G., & Raghu, T. S. (2014). *Determinants of Mobile Apps' Success: Evidence from the App Store Market*. Journal of Management Information Systems, 31(2), 133–170. DOI 10.2753/MIS0742-1222310206.** https://asu.elsevierpure.com/en/publications/determinants-of-mobile-apps-success-evidence-from-the-app-store-m/. **Verified: yes** (abstract).

Key data: survival analysis of apps in Apple's top-grossing 300:
- free apps survive up to 2× longer than paid apps;
- continuous quality/feature updates improve survival up to 3×;
- each cross-category diversification adds ~15% to top-chart presence;
- high initial rank, review volume and score, and less-competitive categories also help.

Implication: update cadence is a measurable survival driver; pick less crowded categories.

**[E38] Nam, K., & Kim, H.-j. (2020). *The determinants of mobile game success in South Korea*. Telecommunications Policy, article 101855. DOI 10.1016/j.telpol.2019.101855.** https://doi.org/10.1016/j.telpol.2019.101855. **Verified: yes** (abstract via Semantic Scholar).

Key data: Korean Google Play games, first-week vs first-four-week downloads and revenue:
- TV ads and the number of online videos strongly affect both periods;
- pre-registration is effective in the short term;
- user-uploaded videos help sustain long-term revenue;
- IP awareness and publisher name matter only short term — "there could be an opportunity for small- and medium-sized companies."

Implication: pre-registration plus creator/video strategy are affordable levers for a small studio, and IP is not decisive after month one.

**[E39] Ascarza, E., Netzer, O., & Runge, J. (accepted Dec 2024; 2025). *Personalized Game Design for Improved User Retention and Monetization in Freemium Games*. International Journal of Research in Marketing (author PDF; SSRN 4653319).** https://evaascarza.com/papers/Ascarza_Netzer_Runge_IJRM25.pdf. **Verified: yes** (author PDF read).

Key data: a large randomized controlled trial in a popular F2P mobile game.
- An easier game lowers purchases in the round being played.
- But it raises immediate engagement and long-term retention, so it **"result[s] in a significant increase in customer spending both in the short and long run."**
- Effects are strongest for progress-prone players, and in long-term monetization for prior spenders.

Implication: ease difficulty for churn-risk players. Friction-as-monetization is net negative.

**[E40] Pape, L.-D., Helmers, C., Iaria, A., Wagner, S., & Runge, J. (2025). *Personalized content, engagement, and monetization in a mobile puzzle game*. International Journal of Industrial Organization, 98. DOI 10.1016/j.ijindorg.2024.103128.** https://ideas.repec.org/a/eee/indorg/v98y2025ics0167718724000833.html. **Verified: yes** (abstract).

Key data: a structural model on player-level puzzle-game data. The developer's average difficulty is already revenue-optimal, but **personalised difficulty could raise revenue by 71%** through more engagement. The biggest relative gains come from small spenders and the biggest absolute gains from large spenders.

Implication: build difficulty personalisation into level or run generation from launch.

**[E41] Petrovskaya, E., Deterding, S., & Zendle, D. (2022). *Prevalence and Salience of Problematic Microtransactions in Top-Grossing Mobile and PC Games: A Content Analysis of User Reviews*. CHI '22. DOI 10.1145/3491102.3502056.** https://dl.acm.org/doi/10.1145/3491102.3502056. **Verified: yes** (abstract).

Key data: from 801 negative reviews, mobile games show more frequent and more varied problematic microtransactions than PC. Players object to unfairness, lack of transparency, degraded UX, and "monetisation-driven design as such."

Implication: monetisation must not interrupt or degrade core play.

**[E42] Roma, P., & Ragaglia, D. (2016). *Revenue models, in-app purchase, and the app performance: Evidence from Apple's App Store and Google Play*. Electronic Commerce Research and Applications, 17, 173–190. DOI 10.1016/j.elerap.2016.04.007.** https://iris.unipa.it/bitstream/10447/192226/1/Roma%20and%20Ragaglia%202016.pdf. **Verified: yes** (full text).

Key data (mid-2010s top-grossing sample):
- On the App Store, paid and freemium models outperform free/ad-supported apps in revenue rank, and IAP improves rank.
- On Google Play the IAP effect reverses, and freemium is less effective than free.
- Effects vary by category.

Implication: IAP-only economics depend on platform mix. Korea's iOS share is only ~26% (E12), so expect lower payer conversion on Android. The data is dated.

### F. Small-team viability, UA and production

**[E43] Liftoff (2025-03). *2025 Casual Gaming Apps Report* (data Feb 2024–Feb 2025).** https://liftoff.ai/2025-casual-gaming-apps-report/. **Verified: partial** (landing-page figures; full PDF blocked).

Key data:
- Casual CPI is $1.41 on iOS vs $0.14 on Android; casino iOS CPI is $21.03.
- D30 ROAS: casual 47% (iOS) / 15% (Android); strategy 60% (iOS); RPG 39% (Android).
- Strategy, RPG and tabletop carry higher CPIs, and live-event adoption is rising.

Implication: UA economics vary sharply by genre and platform. Mid-core needs more patient capital.

**[E44] Deconstructor of Fun — Jared Gibbons (2016-09). *Managing and Avoiding Content Treadmills*.** https://www.deconstructoroffun.com/blog//2016/09/managing-and-avoiding-content-treadmills.html. **Verified: yes** (older, but the principle is stable).

Key data:
- Level-based games need perpetual new content.
- Mitigations: completion/mastery mechanics, dynamic tuning, energy, and a strong metagame plus social play (Clash Royale cards reshape strategy instead of needing new levels).
- "Unless your studio is geared to create content driven games, you should avoid making one."

Implication: prefer systemic content over handcrafted content.

**[E45] GDC Vault — Joe Raeburn (Space Ape Games), GDC 2017 Mobile Summit. *Lean Live Ops: Free Your Devs!*.** https://gdcvault.com/play/1024649/Lean-Live-Ops-Free-Your. **Verified: yes** (session page).

Key data: weekly events in Samurai Siege were run by four team members, and the talk shows tricks for "$2 ARPU days." Its answer to "Can smaller studios do both at once [run live games and build new ones]?" is "YES."

Implication: config-driven event tooling makes a weekly LiveOps cadence feasible for a small team.

---

## Part 2 — Synthesis

### 2.1 Market structure in one view (2024 → H1 2026)

| Segment | Latest size and trend | Structure | Read for a small IAP-only team |
|---|---|---|---|
| Strategy / 4X | $17.5B (2024, +16%); $20.2B (2025); H1 2026 $9.27B (−5%) [E1–E3] | Oligopoly: top-10 = 64% of 4X [E4]. Retention-light, UA-heavy [E28] | Avoid head-on competition |
| Puzzle (match-3, merge, block, sort) | $12.2B (2024, +14%); $14.4B (2025); H1 2026 +19.6% [E1–E3] | Incumbents earn ~91.5% of puzzle IAP [E1]. Merge top-10 = 80% [E4]. Level treadmill [E24] | Only with a fresh core plus procedural/personalised levels [E40] |
| RPG (MMO, squad, idle, gacha) | $16.8B (2024, −17%); −15% to −17% in 2025 [E1, E4, E6] | Highest share of new-title revenue (≈34% from titles under 2 years, derived from 66.0% older) [E1]; content-heavy [E32] | Only lean variants (idle or roguelite-RPG) |
| Hybrid structure (simple core + deep meta) | IAP +20% (Sensor Tower) / +88% (AppMagic) in 2025 [E2, E6] | Habby, Rollic and Chinese studios lead; low hit rate [E30] | **Best fit**, monetised through IAP |
| Casino / coin looters | $11.7B (2024); −7.6% in 2025 [E1, E6] | IP plus ~$500M UA (Monopoly GO) [E26]; ~30% D2C [E8] | Avoid (capital and regulation) |
| MOBA / shooter / battle royale | Top for time spent (BR 12.7%, MOBA 10.6%) [E1] | Needs liquidity, netcode and big UA | Avoid real-time 3v3/5v5; consider async or co-op |

### 2.2 Korea snapshot — what the data says

- **Size and trend.** About $2.4–2.8B per half-year in 2025, then $2.32B in H1 2026 (−10% YoY) [E3, E12]. AppMagic puts 2025 at −12.2% [E4]. Mobile is 59% of a ₩23.85T industry [E14].
- **Revenue mix.** RPG is 52–57.5%, but within it MMORPG is giving way to squad and idle formats [E10, E11]. Strategy grew to $840M in 2024 (+69%) [E11]. Chinese 4X titles hold #1–4 [E12].
- **Korea is often a lead market for formats that suit a small team.** Archero 2's top market was Korea (23%) [E30]. Lucky Defense made more than $47M in its first five months [E11]. Legend of Mushroom earned 31% of its global revenue in Korea [E11].
- **Player needs** [E13]:
  - **Why they play:** stress relief; play immersion first, character immersion second.
  - **Time:** limited (≈91 weekday minutes/day across about 3.4 games), and lack of time is the #1 reason lapsed players quit.
  - **Spending:** median annual mobile spend among spenders is only ~₩20,000, but the mean is ₩90,000 — a heavy-tailed distribution.
  - **What drives purchases:** progression speed and competitiveness.
- **Expectations after the 2021–2022 backlash.**
  - Accurate, audited odds — it is the law, with treble damages since 2025-08-01 [E16, E17].
  - No blatant or coercive BM, and no guild-war purchase pressure [E13].
  - Cross-region parity in events and benefits [E18].
  - Stable service: bugs and connection problems are the top publisher-conflict causes [E13].
  - Pass- and subscription-centred BM is the industry's own recommended direction [E15].

### 2.3 Case-study matrix

| Game (launch) | Core loop / meta | Social systems | Monetization mix | LiveOps cadence | Evidence for longevity or breakout |
|---|---|---|---|---|---|
| Clash of Clans (2012) | Base-building + async raids; Town Hall tiers [desc] | Clans, clan wars [desc] | Gems, offers, Gold Pass [E23] | Monthly pass seasons + events [desc] | 14 years old [E20]. Record revenue 7+ years in after Gold Pass [E23]. 1.88% of global time spent (2024) [E1] |
| Clash Royale (2016) | 3-min 1v1 card battles; card levels, ladder [desc] | Clans, 2v2, donations [desc] | Pass, offers, evolutions [desc] | Seasons + continuous balance changes [E23, E44] | 2025 overhaul (simpler progression, systems removed) → re-engaged ×2, new +~500% [E20]; $627.5M, +147% [E7] |
| Brawl Stars (2018) | Short 3v3 modes; many brawlers, multiple progression vectors [E22] | Clubs, friends [desc] | IAP-only Brawl Pass, earned random Starr Drops, skins, collabs [E1, E21] | Seasons + big collabs (SpongeBob, Godzilla) [E1] | 8.8× revenue in 8 months [E21]; +$860M in 2024 [E1]; bigger team + small bets + marketing [E19, E22] |
| Candy Crush franchise (2012) | Match-3 levels, lives [desc] | Leaderboards, events [desc] | Boosters, moves, lives, passes [desc] | Continuous level drops (Soda: 2,355 levels in 2025) [E24] | $20B lifetime; "few months to build… 10 years of development" [E24] |
| Royal Match (2021) | Polished, fast match-3 + renovation meta [desc] | Teams; gifts when a teammate buys a pass [E9] | Coins/boosters, pass, offers [E9, desc] | Overlapping competitive and co-op events [desc] | $1B → $3B in ~15 months [E25]; ~$1.9B in 2025 [E7]; heavy UA [E25] |
| Monopoly GO (2023) | Dice board ("coin looter") [E1] + collections [desc] | Social events, gifting [E26] | Dice/currency offers; ~⅓ via web store [E8] | Event-driven limited-time competitions [E26] | $6B fastest ever [E26]; <$500M UA [E26]; store revenue −18% in H1 2026 [E3] |
| Pokémon GO (2016) | Geo-catching, collection, raids [desc] | In-person raids, GO Fest (2M tickets) [E27] | Raid passes, tickets, items [E27] | Continuous global events [E27] | 100M+ players in 2024; ~40 min/day; top-10 every year [E27] |
| Whiteout Survival / Last War (2023) / Kingshot (2025) | Runner minigame onboarding → 4X base and march [E28] | Alliances, server wars, weekly Alliance Duel [E28] | VIP, packs, time-limited currencies [E28] | Weekly alliance events + seasons [E28] | ARPDAU $1.08–2.47; D30 4–8% [E28]; Kingshot $811.9M in year 1 [E29]; 4X oligopoly [E4] |
| Archero / Archero 2 / Survivor.io / Capybara Go (Habby) | Short roguelite runs with random skill picks + persistent gear/talent meta [E30, desc] | Light (co-op in some) [desc] | Gear chests, passes, monthly cards [desc] | Chapters, events, collabs [desc] | Archero ~$4 LTV per download; Archero 2 ~$27M/month; Korea 23% [E30] |
| Marvel Snap (2022) | 3-min card battler with location randomness [desc] | Friendly battles [desc] | Season pass, bundles, event tickets [E31] | Monthly seasons; movie tie-ins [E31] | −40% in year 2; extraction-event backlash; delisting risk [E31] |
| Honor of Kings (2015) | 5v5 MOBA; heroes and skins [desc] | Friends/teams, esports [desc] | Cosmetics-led [desc] | Seasons, anniversaries [desc] | #1 in 2025 (~$1.7–2.4B depending on scope) [E4, E7]; $1.078B in H1 2026 [E3] |
| Genshin Impact (2020) | Open-world action RPG + character gacha [E32] | Minimal | Banners, pass, premium currency [E32] | ~6-week versions [desc] | Year 1 $1.9B → year 4 $931M; cannibalised by its own successors [E32] |
| Gossip Harbor (2022) | Merge-2 + drama narrative [E33] | — | Bundles and LiveOps offers $1–25 [E33] | ~20 → ~100 events/month [E33] | ~$550M in 2025; +135% in H1 2026 [E3, E4] |
| Lucky Defense (2024) | Co-op TD, random summon/merge [E35] | Co-op matchmaking [E35] | Gacha, **VIP subscription**, bundles, no forced ads [E35] | — | $47M IAP in 5 months [E11] |
| Pokémon TCG Pocket (2024) | Daily free packs + collection [E1] | Trading/battles [desc] | Pack currency, pass [desc] | — | $5.32M/day launch; ~$952.6M in 2025 [E1, E7] |

### 2.4 Failure, shutdown and backlash cases

| Case | What happened | Evidence-based causes | Lesson |
|---|---|---|---|
| Squad Busters (Supercell, 2024–26) | 75M downloads, $100M+, closed [E20, E36] | Audience mismatch ("for everyone… perfect for anyone" [E21]); little variety or mastery; few progression vectors [E22]; 120k beta; retention diverged from beta; heavy pre-validation marketing [E20] | Long-horizon retention gates; depth plus variety; no big marketing before validation |
| Clash Quest (2021–22), Clash Mini (2021–24), Everdale, Hay Day Pop, Flood Rush | Killed in soft launch [E36] | Retention and LTV below the bar; Clash Quest stuck between casual and mid-core; low LTV vs CPI [E36] | Kill fast with explicit thresholds and fixed budgets |
| Marvel Snap (Y2 −40%) | Revenue decline and event backlash; delisting [E31] | Extraction-heavy events; publisher/platform dependency [E31] | Players accept spending on fun, not on gating |
| Brawl Stars loot-box removal (Dec 2022) | Engagement and revenue dropped (~14% monthly per KOCCA) [E15, E21] | Removed exciting earned randomness | Keep earned, transparent randomness |
| Pokémon GO Remote Raid repricing (2023) | Boycott threats [E27] | Took away a paid convenience players relied on | Change economy levers gradually, with a rationale and compensation |
| MapleStory odds (2021); Uma Musume KR (2022) | Truck and carriage protests; refunds [E16, E18] | Hidden or misleading odds; unfair regional treatment | Transparency and parity are non-negotiable in Korea |
| Last War retention gap | D30 4% vs Whiteout Survival 8% [E28] | Mismatch between ads and the actual game | Keep UA creatives honest to the core loop |

---

## Part 3 — What long-lived IAP games have in common (evidence-based)

1. **A replayable core that generates its own content.** PvP or co-op matches (Brawl Stars, Clash Royale, Honor of Kings), card-meta shifts, or skill-tuned levels make every session different without new handcrafted assets. MOBA, battle royale, RTS and Build & Battle titles dominate global time spent [E1]. Content-treadmill games must keep producing: Candy Crush Soda added 2,355 levels in 2025 [E24, E44].
2. **Accessible entry, depth exposed over time.**
   - Brawl Stars reveals depth gradually through gadgets, star powers and Hypercharges; Squad Busters failed by being "too simple, lacking depth" for mid-core and too battle-heavy for casual [E19, E21, E22].
   - Clash Quest died in the same gap between casual and mid-core [E36].
   - Whiteout Survival and Last War grew by simplifying the 4X first-time experience [E1, E28].
3. **Several parallel progression vectors and collection.** Brawlers, gear and pass tracks keep a goal in reach every session [E22]. Purchases in Korea are driven by progression speed and competitiveness [E13].
4. **Social structures that create obligation through belonging.** Clans, teams, alliances, partner events and real-world events [E9, E26, E27, E28]. Korean FGI evidence shows that coercive guild-war purchase pressure backfires [E13].
5. **Relentless, measured LiveOps.**
   - 84% of IAP goes to LiveOps games [E1]. Games with a daily bonus out-earn others 12× (correlational) [E1].
   - LiveOps intensity rose 16% YoY [E4]. Gossip Harbor scaled from ~20 to ~100 events per month [E33].
   - Feature updates are linked to up to 3× top-grossing survival [E37].
6. **Willingness to overhaul and simplify, even years in.** Brawl Stars (2023–24), Clash Royale (2025), the Clash of Clans Gold Pass (2019) and King's "reignite" philosophy [E19–E21, E23, E24]. Supercell credits many small "90:10" improvements alongside a few big bets [E19].
7. **Broad but fair monetization.** Passes, offers and cosmetics, plus *earned* randomized rewards [E9, E21]. Players punish unfair, opaque or experience-degrading monetization [E31, E41]. Korea has legislated this [E17].
8. **Sustained capital for UA and reactivation.** Monopoly GO (~$500M), Last War (UA-driven, >50% of impressions on one concept), and Brawl Stars' revival alongside marketing "turned on to 11" [E22, E26, E28]. Longevity is partly bought, so small teams need capital-efficient discovery (pre-registration, video, word of mouth) [E38, E13].
9. **IP helps but is not required.** Original IPs — Clash, Brawl Stars, Royal Match, Archero, Lucky Defense — reached the top. In Korea, IP and publisher effects fade after month one [E38].

---

## Part 4 — Genre options ranked for a small team under our success definition

Scoring is my synthesis of the evidence. "Fit" weighs retention, playtime, IAP-only revenue (no ads), small-team feasibility, UA/competition, and Korea-to-global fit.

| Rank | Format | Pros (evidence) | Cons (evidence) | Fit |
|---|---|---|---|---|
| **1** | **Roguelite action/tactics with a persistent meta ("hybrid mid-core"; Archero, Survivor.io, Capybara Go-like), ideally with co-op** | Systemic replayability (runs randomise content) [E44]; fastest-growing IAP segment (+20% / +88%) with D7 above casual [E2, E6]; deep payers (32% spend >$100 by D90) [E6]; Korea is the #1 market for Archero 2 [E30]; small-team scope (2D/3D top-down) | Crowded, with Habby, Rollic and Chinese competitors; low hit rate (PunBall/SSSnaker below $1.5M/month) [E30]; power creep; Sensor Tower defines the hybridcasual model as roughly 50/50 ads/IAP [E1], so IAP-only needs strong passes/subscriptions | ★★★★☆ |
| **2** | **Co-op / async-competitive "luck + strategy" defense or auto-battler (Lucky Defense, Random Dice-like)** | Proven Korean success: Lucky Defense made $47M in 5 months with VIP subscription and no forced ads [E11, E35]; co-op and competition generate content (Clash Royale card-meta logic) [E44]; social retention without guild coercion | Needs matchmaking liquidity (mitigate with bots/async); balance labour [E23 Clash Royale talk]; randomness must be disclosed [E17] | ★★★★☆ |
| 3 | Puzzle with a novel core + decoration or narrative meta (sort, merge, puzzle-RPG) | Biggest Korean audience (puzzle 36.8%; women 53.9%) [E13]; 2026 momentum (+19.6%) [E3]; personalised difficulty modelled at +71% revenue [E40]; narrative feeds UA [E34] | Incumbents earn ~91.5% of puzzle IAP [E1]; merge is an oligopoly [E4]; UA- and level-intensive [E24, E25]; US-centric [E5] | ★★★☆☆ |
| 4 | Idle RPG with a fair BM (passes and monthly cards) | Korea adopts it fast (idle RPG 1.7% → 4.4% of KR RPG revenue, Legend of Mushroom $140M in KR, MapleStory Idle top 5–6) [E10–E12]; matches auto-play habits of people in their 20s/30s [E13]; low content cost | Competes with big-IP idle games (Nexon) [E12]; low active playtime; genre often uses rewarded ads; risk of a "pay to progress" perception | ★★★☆☆ |
| 5 | Card battler / roguelite deckbuilder (systemic) | Card battlers +213% in 2025 [E6]; systemic metagame [E44] | Recent winners are IP-driven (Pokémon, Marvel); Snap's −40% in year 2 [E31]; balance labour | ★★☆☆☆ |
| 6 | Cozy simulation / decoration + social | Creation/decoration immersion is a top play motive in Korea (37.4%) [E13]; long-lived exemplars (Hay Day, 14 years) [E20] | Production of decor and content; UA competition | ★★☆☆☆ |
| ✕ | 4X strategy | Largest revenue pool [E2] | Top-10 = 64% [E4]; UA machine; D30 4–8% [E28]; coercive alliance spending (KR FGI) [E13] | Not feasible |
| ✕ | MMORPG / subculture gacha RPG | High Korean ARPPU [E10] | AAA content throughput; RPG down 15–17% [E4, E6]; cannibalisation [E32]; odds liability [E17] | Not feasible |
| ✕ | Coin-looter / casino-like | Huge revenue [E26] | IP + ~$500M UA [E26]; gambling-likeness risk | Not feasible |
| ✕ | Real-time 3v3/5v5 PvP (MOBA/shooter) | Top time spent [E1] | Liquidity, netcode, anti-cheat, large UA | Not feasible |

---

## Part 5 — Top 10 market-informed strategic recommendations

1. **Choose a systemic core and avoid a handcrafted-content treadmill.** Runs, co-op or async competition, and procedurally tuned levels make content from systems. A small team cannot match King's 2,355 levels a year or Supercell's 60–80-person live teams [E19, E24, E44]. Time spent concentrates in replayable competitive or co-op formats [E1].
2. **Use the "hybrid" structure, but monetize only through IAP.** Pair a casual-readable 3–5-minute core with a mid-core meta that has several progression vectors. This is the only structure growing IAP, and its top titles beat casual on D7 [E2, E6, E22]. Korea is a proven lead market for roguelite hybrids [E30].
3. **Build LiveOps capability before launch.** Use config-driven events and offers, a weekly event rhythm, monthly seasons and a daily reward loop.
   - 84% of IAP goes to LiveOps games; daily-bonus games out-earn others 12× [E1]; LiveOps intensity is rising [E4].
   - Space Ape ran weekly events with four people [E45]. Feature updates are linked to up to 3× survival [E37].
   - Korean payers prefer new content monthly to quarterly [E13].
4. **Monetize "fair but deep" for Korea's post-2021 expectations.** Core stack: season pass, monthly subscription or VIP card, progression bundles, cosmetics, and earned or fully disclosed randomized rewards with pity.
   - Reasons: Brawl Stars proved randomness drives engagement [E21]; Lucky Defense used a VIP subscription [E35]; the pass/subscription direction is regulator-safe [E15, E17].
   - Korean buyers weigh price and gameplay impact first [E13]. Avoid extraction-gated events [E31] and UX-degrading pop-ups [E41].
   - Plan low-price entry offers to lift conversion, since there is no ad revenue [E6, E13].
5. **Make social systems cooperative, not coercive.** Use co-op runs, team goals with gifting, and friendly leaderboards [E9, E26, E27]. Avoid mandatory guild wars that pressure purchases — Korean players cite this as a reason to quit [E13]. Last War shows that "co-opetition" lifts ARPDAU but sits on weak retention [E28].
6. **Personalize difficulty and rescue churn-risk players.** Easier difficulty for at-risk players raised long-run spending in a randomized trial [E39]. Personalised difficulty was modelled at +71% revenue [E40]. Build dynamic difficulty into run and level generation from day one.
7. **Gate development on long-horizon retention with explicit kill criteria.**
   - Run a multi-month soft launch with iterations, as Brawl Stars did (18 months) [E22].
   - Do not scale on beta data; Squad Busters' 100k+ beta did not predict global retention [E20].
   - Use fixed budgets per phase and retention-led kill rules [E36]. Exact D1/D7/D30 thresholds come from the benchmark researcher's section.
8. **Go Korea first with capital-efficient discovery, then culturalise for global.**
   - Korea: pre-registration, creator/gameplay videos, and referral/word-of-mouth loops (42.3% of Korean players found their main game through friends; teens 67.3%) [E13, E38]; Kakao channels (Lucky Defense ~95% D0 ROAS) [E35]; narrative/character hooks for creatives [E34].
   - Budget realistically for iOS CPIs and global UA [E43, E26, E28]. Then go global with region parity and culturalisation [E18, E26].
9. **Design for time-poor and returning players.**
   - Keep sessions short and satisfying; a TCG Pocket-style "log in, get value, leave" loop is fine [E1]. Mobile time is ~91 weekday minutes split across about 3.4 games, and "no time" is the top reason to quit [E13].
   - Add comeback catch-up and keep progression simple — Clash Royale's simplification doubled re-engaged players [E20].
   - Offer optional auto/skip only for genuinely tedious parts [E13].
10. **Operate it as a "forever game" from the start.**
    - Plan for years of compounding: start small, improve continuously, add a pass and collaborations as the game scales [E19, E23, E24].
    - Prioritise stability — bugs and connection issues are Korea's top publisher-conflict causes [E13].
    - Keep an accurate, audited odds pipeline [E17].
    - Add a web shop (D2C) once revenue justifies it [E8].
    - Expect incumbency to dominate (>80% of revenue in most genres goes to games older than 2 years [E1]), so judge success by compounding retention and revenue per user, not launch spikes.

---

## Part 6 — Data caveats and conflicts

- **Providers differ.**
  - Sensor Tower puts 2025 mobile game IAP at $81.75B [E2]. AppMagic articles cite about $76.7B [E7], and other AppMagic digests give different totals depending on scope and gross vs net [E4, E6].
  - Honor of Kings' 2025 revenue is about $2.4B in one AppMagic article [E7] and $1.68B in another digest [E4].
  - Use these sources for direction and rank, not exact sizing.
- **D2C undercounting.** Store-tracked "declines" for Monopoly GO (~⅓ of revenue via web) and miHoYo (~57% of US revenue via D2C) are partly channel shift [E3, E8].
- **Hybridcasual growth** is +20% (Sensor Tower) vs +88% (AppMagic) because the two classify games differently [E2, E6].
- **KOCCA 2025 data** is a self-report survey. Some time series changed question wording (e.g., number of games played) [E13]. The spend shares of ~52% and ~42.5% are my derivations from the bases reported.
- **Secondary digests.** E2 (genre dollar figures), E3, E4, E6 and E14 rest on digests of paywalled reports and are labelled partial. E33 and E35 are trade-blog analyses, and E43 shows landing-page figures only.
- **Correlational evidence.** Feature-tag revenue multiples (e.g., daily bonus 12×) and the top-grossing survival studies are correlational [E1, E37]. Only E39 is a randomized experiment.
