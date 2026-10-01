# G — Mobile Game Genre Economics 2024–2026
*Research input for woweverstudio's IAP-only (no ads) mobile game, built by a 5–10 person team and launching globally with Korea as a key market. Prepared 2026-10-01.*

**Relation to E_market_cases.md (E).** E covers total-market structure, case studies and a first genre ranking. This note goes genre by genre. It checks E's genre figures against primary reports where possible, and it adds full-year 2025 and H1 2026 data, the IAP/ad mix, concentration and regional detail. E-ids (e.g., [E26]) point to E and are not repeated here.

**Changes to E after verification**
- **Upgraded to primary.** E4's "4X top-10 = 64%", "merge top-10 ≈ 80%" and "Gossip Harbor $550M = 33%" are now confirmed in AppMagic's own PDF [G3]. E2's strategy and puzzle growth (+20%, +14%) is confirmed in Sensor Tower's own PDF [G2]; the dollar values ($20.2B, $14.4B) still come from a digest [G4].
- **Correction.** E6's AppMagic figures cover a period ending 22 Oct 2025, not the calendar year [G8], and AppMagic's full-year figures appear to be **net** (see conventions). Its "+213% card battlers" comes from that partial-year comparison; the full-year chart shows a much smaller (unlabelled) increase [G3].

## Conventions
- **Sensor Tower (ST).** Figures are gross IAP (store cut included) from the App Store and Google Play, with China counted on iOS only. They exclude third-party Android stores, web shops (D2C) and ad revenue. ST changed its genre taxonomy in January 2026, so its 2024 and 2025 genre values are not strictly comparable.
- **AppMagic (AM).** Figures are IAP from the App Store and Google Play, China iOS only, excluding web shops [G3]. The 2026 Landscape PDF does not say whether values are gross or net. Two things suggest net:
  - Its title values are 70–72% of AppMagic's own *gross* values for the same games published by PocketGamer.biz: Honor of Kings $1.68B vs ~$2.4B; TCG Pocket $677M vs $952.6M; Coin Master $651M vs $910M [G3, G11].
  - AppMagic's H1 2026 casual report states it uses net IAP [G10], and PocketGamer.biz's coverage of the Landscape report quotes its figures as "net revenue" [G42].
  
  I therefore label these values **"AM net (inferred)"**. Never mix ST and AM figures.
- **"derived"** means my own arithmetic on published figures: sums of regional cells, share × total, or ratios. No figure in this note is my own estimate. **"not found"** means I searched and found no citable figure.
- **Verification labels:** *yes* = the data owner's own document, read in full; *secondary* = trade press or digest reporting a provider's numbers, read in full; *partial* = only part of the claim could be confirmed.

---

## 1. Summary table

| Genre | 2025 worldwide IAP revenue | YoY | Concentration | IAP/ad mix | Notable hits 2023–26 | Small-team feasibility | Sources |
|---|---|---|---|---|---|---|---|
| **Puzzle (all)** | ST $14.4B gross; AM $8.7B net | ST +14%; AM +11.1%; H1'26 ST $8.07B (≈+20%) | 2024: top-3 = 34.6% of puzzle IAP; titles >2 yrs old = 91.5% | Casual puzzle is IAP-led, yet puzzle earns 53% of all game *ad* revenue | Royal Kingdom; Gossip Harbor; Tasty Travels; Pixel Flow!; Color Block Jam | Strong incumbency; growth only in new sub-formats | G1 G2 G3 G4 G5 G7 |
| Match-3 (swap/classic) | AM ≈$4.8B net | AM +0.1% (flat); ST "Match Swap" $1.81B in Q2'26, "plateau" | Dream Games' 2 titles >30% of match-3; only 4 of 367 new 2025 match-3 games ever hit $100K/month | IAP-led; Candy Crush ads = 10–15% of revenue | Royal Kingdom (Dream Games; global launch Nov 2024; >$510M net IAP by mid-2026) | Not feasible (level treadmill + UA capital) | G3 G5 G7 G9 G10 |
| Merge-2 | AM $1.4B net; ST H1'26 $1.91B gross | AM +80%; H1'26 AM +74%, ST "nearly doubled" | AM top-10 ≈80%; Gossip Harbor $550M = 33% | IAP via LiveOps offers at $1–25 | Gossip Harbor (Microfun; $100M in Mar 2026); Tasty Travels (Century; $127M net H1'26) | Oligopoly + narrative-creative UA war | G3 G5 G9 G10 |
| Sort / block / screw | AM: sort $279M, block $213M, screw $177M (net) | Sort ×2, block ×10, screw ×2; H1'26: the three combined $600M; sort +229%, block +46% | 840 sort and 2,000+ block launches in H1'26; Color Block Jam and Pixel Flow lead | Hybrid: hybridcasual Lifestyle & Puzzle (US, JP, UK and BR combined) = 59% IAP / 41% ads; Pixel Flow ≈76% IAP (derived); Block Blast ads only | Pixel Flow! (Loom Games, ~20 staff; Aug 2025; $125M net IAP in under a year; >$1B valuation) | Buildable; IAP-only forgoes their ad share | G3 G7 G9 G10 G31 G32 |
| Puzzle-RPG | 2025 not found (2024: 2.66% of IAP ≈ $2.17B, derived) | AM −28.2% (period to Oct'25); Japan −22% | not found | IAP | none found | Declining and Japan-centric | G1 G8 G21 |
| Board/dice (coin looters) + tabletop | AM coin looters $2.4B net; tabletop $933.5M net | Coin looters −3%, H1'26 −11%; tabletop +7.4%; ST "board games" +23% in Q1'26 | Coin looters: top-3 ≈90%; none of 42 new H1'26 launches passed $100K/month | IAP + heavy D2C (>50% of US IAP for some titles) | Monopoly GO (2023, [E26]); Top Tycoon ($29.6M in 2025) | Not feasible (IP + nine-figure UA; casino-like) | G3 G6 G9 G10 |
| Word / trivia | not found | not found | not found | Ad-led: PlaySimple CY2025 ads ₹1,916.9 Cr vs IAP ₹333.6 Cr (≈85% ads, derived) | none found | Poor fit for IAP-only | G3 G35 |
| Simulation: farm / cozy / life-sim | AM simulation $4.8B net (casual farming $955M; life sim $135M) | AM +6.2% (farming −2%, life sim +1.4%); ST −$717M (derived; conflicts); H1'26 farming +15%, life sim +76% | Township >42% of farming; ST 2024 sim top-3 = 42.0% | IAP; subscriptions emerging (Goodville >12% of revenue) | Heartopia (XD; Jan 2026; >$130M IAP; $20M/month, a simulation record); My Garden Tale (>90% China) | Content-heavy; new entrants are Chinese | G2 G3 G9 G10 G38 |
| Tycoon / idle tycoon | not found (AM time-management $135M net) | Time management −12% | not found | Ad-heavy (AM hypercasual simulation IAP only $18.3M on 1.8B downloads) | Pizza Ready! (#5 by downloads in 2025) | Poor fit for IAP-only | G2 G3 G9 |
| Casual action / hybridcasual (survivors-like, Archero-like) | ST hybridcasual model 2024 $3.1B gross; 2025 $ value not stated | ST +20%; AM hypercasual incl. hybrid ≈+80% | not found | hybridcasual Action & Strategy (US, JP, UK and BR combined) = 81.9% IAP / 18.1% ads | Archero 2 (Jan 2025; $156M lifetime IAP); Capybara Go ($139M); Dicero (2026) | Feasible scope; crowded; 50.6% of downloads are paid display | G1 G2 G3 G33 G40 |
| 4X strategy | 2024 ≈$8.15B (9.98% of IAP, derived); strategy genre 2025 ST $20.2B / AM $13.3B net | 4X AM +21%; strategy ST +20%; H1'26 strategy −5%, 4X down two quarters after a $3.09B Q4'25 peak | AM top-10 = 64% (47% in 2023); $99 offers ≈30% of top titles' revenue | IAP, plus web-store currencies | Kingshot (Feb 2025; $811.9M in year 1 [E29]); Last Z (2024); Lands of Jail (small publisher) | Not feasible | G1 G2 G3 G4 G5 |
| Tower defense / co-op defense | not found | AM "Tactics" subgenre +35% (definition not given) | not found | IAP (Lucky Defense: no forced ads, VIP subscription [E35]) | Lucky Defense (111%, May 2024; ₩120B+ cumulative, 7.5M+ downloads); Clash of Critters (Farlight, May 2026; $24M IAP by Aug) | Best strategy niche for a small team; proven in Korea | G3 G36 G38 |
| Auto-battler / RTS | 2024 RTS 1.68% of IAP ≈ $1.37B (derived; #1 TFT) | AM RTS ≈ flat (chart); Clash Royale +147% | not found | IAP | Clash Royale revival ($627.5M gross in 2025) | Needs PvP liquidity + balance team | G1 G3 G11 G18 |
| Card battlers / TCG / deckbuilders | TCG Pocket alone $952.6M gross / $677M net | AM +213% (period to Oct'25, launch-base effect); Japan +305% | TCG Pocket dominant (not quantified) | IAP | TCG Pocket (Oct 2024; ≈$1.3B in first 12 months); Shadowverse: Worlds Beyond (Jun 2025); Balatro (premium, solo developer) | Systemic, but the winners are IP-led; Marvel Snap fell $99M → $26M net | G3 G8 G11 G21 G27–G30 |
| **RPG (all)** | AM $11.0B net; ST −$1.77B vs 2024's $16.8B (derived) | AM −16.6% (downloads −9.1%); H1'26 ST $6.12B, still falling | Least concentrated: 2024 top-3 = 12.0%; only 66% from titles >2 yrs | IAP (mid-core: "minimal ads") | See sub-rows | Only lean variants | G1 G2 G3 G5 |
| Squad RPG | 2024: 6.14% of IAP ≈ $5.02B (derived; #1 NIKKE) | Japan −21% | not found | IAP/gacha | Seven Knights Re:BIRTH (2025; ≈$120M May–Sep 2025) | Heavy character-art load | G1 G14 G21 |
| Idle RPG | 2024: 1.72% ≈ $1.41B (derived; #1 Legend of Mushroom) | KR idle share of RPG revenue 1.7% (2020) → 16% (2024) | not found | IAP | MapleStory: Idle RPG (Nov 2025; #1 in KR for 10+ weeks); Pixel Hero (2023; $85M) | Low content cost; low active time | G1 G17 G18 G37 G41 |
| Action RPG | 2024 beat 'em up 1.44% ≈ $1.18B (DnF Mobile) | AM "Action" −24.5% | not found | IAP | DnF Mobile ($489.8M gross in 2025); Neverness to Everness (2026) | Not feasible (AAA content) | G1 G3 G11 G40 |
| MMORPG | 2024: 5.59% ≈ $4.57B (derived; #1 Lineage M) | H1'26 decline "especially pronounced"; Japan −21% | Korean legacy titles; lost KR #1 subgenre to 4X in Jan 2026 | IAP, high-ticket | Mabinogi Mobile (Mar 2025); RF Online Next (2025); Vampir (Aug 2025) | Not feasible | G1 G5 G15 G16 G21 |
| Tactical / turn-based gacha RPG | 2024 turn-based 2.62% ≈ $2.14B (#1 Honkai: Star Rail) | AM tactical RPG +56% (period to Oct'25); KR turn-based +138% | not found | IAP/gacha | SD Gundam G Generation ETERNAL (>$100M in H2 2025, Japan) | Not feasible | G1 G8 G14 G22 |
| Shooter / battle royale | AM $3.3B net; ST +$825M vs 2024's $4.3B (derived) | AM +14.2%; ST Q1'26 +12% | 2024 top-3 = 53.9%; >2 yrs = 94.7% | IAP (cosmetics) | Delta Force (2025; $492.5M gross; 96% China); Valorant Mobile (China, Aug 2025) | Not feasible | G1 G2 G3 G6 G11 G34 |
| MOBA | 2024: 5.52% ≈ $4.51B (#1 Honor of Kings) | AM −8%; Honor of Kings $1.68B net (−3%) | Honor of Kings-dominated | Cosmetics IAP | none new found | Not feasible | G1 G3 G5 |
| Party / social / UGC | AM party games $272.7M net; Roblox store IAP $1.46B net | Party −16.2%; Roblox +30% | Roblox dominant; Eggy Party 98% China | IAP | Eggy Party ($395.7M in 2023 → $158.7M in 2025); Roblox (FY2025 revenue $4.9B) | Not feasible standalone | G3 G11 G25 G26 |
| Sports & racing | AM sports $1.7B net; racing $361.0M net | Sports −3.9%; racing −11.4%; ST −$14M / −$65M (derived) | 2024 top-3: sports 40.8%, racing 50.8%; >2 yrs 88.9% / 94.1% | IAP for licensed sims; hybridcasual Sports & Racing (US, JP, UK and BR combined) 71% IAP | none new found | Not feasible (licences) | G1 G2 G3 |
| Social casino (note only) | AM $6.9B net; ST 2024 $11.7B gross | AM −7.6%; ST −$832M (derived); H1'26 US −$648M | 2024 top-3 = 34.7%; >2 yrs = 98.4% | IAP + D2C (≈30% of US top-100 revenue in H1'26 [E8]) | — | Excluded on ethics (gambling-likeness) | G1 G2 G3 G5 |

---

## 2. Per-genre notes

### 2.0 Cross-genre frame

**Totals**

| Metric | 2024 | 2025 | H1 2026 |
|---|---|---|---|
| ST mobile game IAP (gross) | $81.7B (+3.8%) | $81.75B (+1.3%) | ~$40B (−2.0%) |
| ST downloads | — | 50.41B (−7.2%) | 24B (−11.9%) |
| AM games revenue (net, inferred) | — | +0.2% YoY | — |
| AM downloads | — | +4.6% | — |
| Newzoo mobile spend (incl. D2C, third-party Android, mini-games) | — | $113.3B (+10.7%) | 2026 forecast $121.1B (+6.8%) |

Sources: [G1, G2, G3, G4, G5, G24].

Newzoo's larger figure includes off-store spending, which store data increasingly misses.

**Genre totals: two providers.** ST 2024 values are gross. The ST 2025 change is derived as the sum of the seven regional cells in ST's "Year-over-Year Change for Mobile Games in 2025" table [G2, p.23]. The thirteen genre sums total +$1.135B, consistent with the +1.3% headline. AM values are 2024 → 2025, net (inferred) [G3, p.21].

| Genre | ST 2024 IAP (YoY; downloads YoY) | ST 2025 Δ (derived) | AM 2024 → 2025 (YoY; downloads YoY) | ST 2024 top-3 share | ST 2024 share from titles >2 yrs |
|---|---|---|---|---|---|
| Strategy | $17.5B (+16.2%; +14.5%) | **+$3.34B** | $11.4B → $13.3B (+16.1%; +15.3%) | 30.6% | 80.9% |
| RPG | $16.8B (−17.3%; −6.1%) | **−$1.77B** | $13.2B → $11.0B (−16.6%; −9.1%) | 12.0% | 66.0% |
| Puzzle | $12.2B (+14.0%; −3.0%) | **+$1.79B** | $7.8B → $8.7B (+11.1%; +6.5%) | 34.6% | 91.5% |
| Casino | $11.7B (+8.9%; −39.6%) | −$0.83B | $7.5B → $6.9B (−7.6%; +15.8%) | 34.7% | 98.4% |
| Simulation | $6.1B (+8.8%; +0.4%) | −$0.72B | $4.5B → $4.8B (+6.2%; +2.5%) | 42.0% | 88.3% |
| Shooter | $4.3B (+3.4%; +1.5%) | +$0.83B | $2.9B → $3.3B (+14.2%; +7.8%) | 53.9% | 94.7% |
| Action | $3.6B (+46.0%; −7.9%) | −$1.42B | $1.7B → $1.3B (−24.5%; −1.5%) | 45.5% | 81.0% |
| Sports | $2.7B (−6.3%; −10.6%) | −$0.01B | $1.8B → $1.7B (−3.9%; +1.9%) | 40.8% | 88.9% |
| Tabletop | not stated | +$0.15B | $869.1M → $933.5M (+7.4%; +14.1%) | 30.8% | 97.1% |
| Arcade | not stated | −$0.07B | $670.6M → $753.5M (+12.4%; +4.6%) | 27.5% | 87.4% |
| Racing | not stated | −$0.07B | $407.7M → $361.0M (−11.4%; −4.3%) | 50.8% | 94.1% |
| Geolocation | not stated | −$0.13B | $835.1M → $738.2M (−11.6%; −5.0%) | 88.5% | 86.9% |
| Party (AM only) | — | — | $325.2M → $272.7M (−16.2%; +7.9%) | — | — |

Sources: [G1 pp.12–13, 18], [G2 p.23], [G3 p.21].

The providers agree on direction for strategy, RPG, puzzle, casino, shooter and action, but disagree on downloads and simulation (2.4, 2.17).

**Revenue versus playtime (ST 2024 subgenre shares)** [G1 pp.15–16]. "Rev/time" is the derived ratio of IAP share to time share.

| Subgenre (#1 title) | Share of IAP | Share of time | Rev/time |
|---|---|---|---|
| 4X (Last War) | 9.98% | 2.18% | 4.6× |
| Squad RPG (NIKKE / Hero Clash) | 6.14% | 1.38% | 4.4× |
| Match Swap (Royal Match / Candy Crush) | 8.67% | 3.96% | 2.2× |
| Tycoon/Crafting (Township / Hay Day) | 2.86% | 1.79% | 1.6× |
| Geolocation (Pokémon GO) | 1.48% | 1.34% | 1.1× |
| FPS/3PS (CoD Mobile) | 1.76% | 1.82% | 1.0× |
| RTS (TFT / Clash Royale) | 1.68% | 2.11% | 0.8× |
| MOBA (Honor of Kings / Brawl Stars) | 5.52% | 10.61% | 0.5× |
| Realistic Sports (eFootball / EA FC) | 2.17% | 5.73% | 0.4× |
| Sandbox (Roblox) | 2.34% | 8.16% | 0.3× |
| Battle Royale (Game for Peace / Free Fire) | 3.05% | 12.69% | 0.2× |

In H1 2026, hours were led by Simulation (44.14B), Puzzle (39.33B), Strategy (33.37B) and Shooter (32.69B) [G5]. The formats that dominate *time* (battle royale, MOBA, sandbox) monetize far below their time share. 4X and squad RPG are the reverse.

**Product models**

| Model | ST 2024 IAP (YoY) | ST 2025 | Ad revenue Feb–Apr 2026 (ST) | Downloads from paid display (ST 2025) | Organic search + browse (derived) |
|---|---|---|---|---|---|
| Mid-core | $45.9B (+0.2%) | "essentially flat" | $190M | 28.8% | 63.6% |
| Casual | $32.4B (+6.4%) | "essentially flat" | $2.01B | 35.9% | 46.3% |
| Hybridcasual | $3.1B (+37%) | +20% | $827M | 50.6% | 39.8% |
| Hypercasual | $316M (+73.6%) | — | $2.02B | 41.7% | 50.7% |

Sources: [G1 p.8], [G2 pp.22, 44], [G5]. Paid-display and organic shares are averages of the top 25 games per model. AM puts 2025 casual at ≈$21B and mid-core at $33–34B (net) [G3].

**IAP versus ads by market.** In the US, Canada, South Korea and Japan, "IAP accounts for 77–90% of all revenue". In India, Indonesia and Brazil, ads deliver ≈55–70% [G7]. Puzzle takes 53% of all mobile game ad revenue and arcade 13%. By subgenre: block 10%; match pair, sort and match swap ≈7% each [G7].

**Concentration and incumbency.** In every ST genre except lifestyle and RPG, titles older than two years took over 80% of 2024 IAP [G1 p.18]. RPG is the least concentrated (top-3 = 12.0%; 58.4% of revenue outside the top 20), so new RPGs keep appearing even as the genre shrinks.

**2025 breakouts.** All five overall breakouts were Action & Strategy titles: Kingshot, SD Gundam G Generation ETERNAL, Vampir, MapleStory: Idle RPG, Valorant Mobile. Breakouts from publishers with under $100M all-time revenue include Lands of Jail (4X), Pixel Flow!, My Garden Life, Top Tycoon, Match Villains and KAIJU NO. 8 THE GAME [G2 p.27].

### 2.1 Puzzle — match-3, merge, sort/block/screw

**Size and growth**
- Puzzle was ST's strongest-growing large genre in 2025 ($14.4B, +14%) [G2, G4], and grew ≈20% in H1 2026 to $8.07B [G5].
- In Q1 2026 ST had puzzle at +21% and "board games" at +23% [G6].
- The 2025 growth by region (derived) was Europe +$706M, North America +$604M and Asia +$321M [G2].

**Subgenres (AM casual, net)** [G9]
- **Match-3: $4.8B (+0.1%).** Downloads 811M (−8%). In H1 2026, $2.5B (−0.4%) [G10].
- **Merge-2: $1.4B (+80%).** Downloads 507M (+9%). In H1 2026, $1.3B (+74%) [G10].
- **Match-2 Blast:** $466M (+0.8%).
- **Hybrid formats:** sort $279M and screw $177M (both doubled); block $213M (×10).
- **Share of puzzle revenue:** merge rose from 14% to 20% (2024 → 2025) [G3]. Match-3 is still 51% of puzzle (H1 2026) [G10].
- **ST view (H1 2026):** Match Merge 2 "nearly doubled – to $1.91 billion"; Match Swap "on a plateau ($1.81 billion in Q2'26)" [G5].

**Concentration**
- Dream Games' Royal Match plus Royal Kingdom take more than 30% of match-3 revenue [G9].
- Only 4 of 367 match-3 games launched in 2025 ever passed $100K in a month [G9].
- Merge: top-10 ≈80%; Gossip Harbor $550M = 33% [G3].

**Monetization**
- Match/merge are IAP-led: top merge games earn mostly from recurring LiveOps specials priced $1–25 [G3]. Candy Crush's ads are only 10–15% of its revenue [G7].
- Hybrid puzzles (sort, block, screw) mix IAP and ads. In top hypercasual puzzle games the top 3 offers bring ≈40% of revenue, built on "fail offers" and $2–8 currency bundles [G3]. ST's split for hybridcasual Lifestyle & Puzzle across the US, Japan, the UK and Brazil is 59.0% IAP / 41.0% ads [G2 p.26].

**Hits**
- **Royal Kingdom** (global launch Nov 2024): >$510M net IAP by mid-2026, versus Royal Match's $465M over the same post-launch period [G10].
- **Gossip Harbor** (Microfun): leader since Oct 2024; $100M in a single month (Mar 2026) [G10].
- **Tasty Travels** (Century Games): $127M in H1 2026, ×13 YoY [G10].
- **Pixel Flow!** (Loom Games, Istanbul, ~20 staff; launched Aug 2025)
  - $125M net IAP in under a year [G10].
  - $34M per month (≈$26M IAP + $7–8M ads) [G7].
  - Players average 52.5 minutes a day over 9.4 sessions [G7].
  - Scopely bought a majority stake at a >$1B valuation (19 Feb 2026) [G31].
- **Block Blast** is the counter-example: 368M downloads in 2025, 70M DAU [G3, G13], monetized "entirely" by ads, with a studio that grew to "nearly a thousand employees" by end-2025 [G32].

**Regions**
- **US:** $3.5B of H1 2025 puzzle revenue (51% of global) [G12]. Lifestyle & Puzzle is 41.3% of US IAP but 56.2% of US ad spend, the most crowded category for UA [G2 p.42].
- **Japan:** puzzle is 33.2% of downloads but only 9.2% of revenue [G21].
- **Korea:** Royal Match ranked #9 in H2 2025 [G16]; two puzzle games were in the Google Play top 10 in Sept 2026 [G19]; merge revenue +89% in 2025 [G14].
- **China:** China-specific puzzle revenue not found; the new merge leaders come from China-based publishers (Microfun, Century Games) [E7, G2].

**Puzzle-RPG**
- 2.66% of 2024 IAP, led by Monster Strike, and among the biggest decliners [G1].
- AM: −28.2% in the period to Oct 2025 [G8]. Japan: −22% (Aug 2024–Jul 2025) [G21].
- No 2023–26 hit found.

**Read for us.** Biggest audience and 2026 momentum, but IAP sits in a match-3 duopoly and a merge oligopoly, and the growing hybrids depend on ads and huge launch volumes. Only a fresh systemic mechanic with a strong IAP meta makes puzzle attractive.

### 2.2 Casual board/dice (coin looters) and tabletop

**Size**
- **Coin looters (AM, net):** $2.4B in 2025 (−3%) on 186M downloads; $1.0B in H1 2026 (−11%) [G9, G10].
- **Tabletop** (Ludo King-type board games): $933.5M (+7.4%) [G3].
- ST tracked coin looters at 5.14% of 2024 IAP (≈$4.20B gross, derived) [G1].

**Concentration**
- Top-3 ≈90%: Monopoly GO $1.3B, Coin Master $650M, Dice Dreams $134M [G9].
- None of the 42 coin-looter launches in H1 2026 passed $100K a month [G10].

**Mix.** Coin looters are IAP plus heavy D2C. Dice Dreams earns "more than half" of its US IAP via D2C [G10], and Monopoly GO about one-third [E8]. LiveOps borrow casino mechanics: 50% of top casual games' LiveOps used them in 2025 [G9].

**Hits.** Monopoly GO (Scopely, 2023) is covered in [E26]. Top Tycoon (BeheFun) made $29.6M from 11.7M installs in 2025 [G9].

**Regions.** A regional split for coin looters was not found. ST's casino genre, which includes coin looters, fell $860M in North America in 2025 while Europe grew $140M [G2].

**Read for us.** IP- and UA-capital-driven, casino-like. Avoid.

### 2.3 Word / trivia

- No 2025 worldwide IAP figure found for word or trivia.
- Word Puzzle appears among the ten largest casual puzzle subgenres in AppMagic's 2025 chart, roughly flat to slightly down (bars unlabelled) [G3].
- The genre is ad-led. PlaySimple, a leading word-game publisher, earned ₹1,916.9 Cr from advertising and ₹333.6 Cr from IAP in CY2025, so IAP was ≈15% (derived) [G35].

**Read for us.** Structurally ad-funded, so a poor fit for IAP-only.

### 2.4 Simulation — farm / cozy / life-sim

**Size**
- AM simulation (all segments): $4.8B net (+6.2%) [G3].
- Casual simulation $1.9B (−4.8%): farming $955M (−2%), time management $135M (−12%), life sim $135M (+1.4%) [G9].
- H1 2026 rebound: farming $576M (+15%), life sim $118M (+76%) [G10].
- **Conflict:** ST's derived 2025 simulation change is −$717M, including −$641M in North America [G2]. That is the opposite of AM's direction and is not explained in the report; ST's January 2026 re-classification may be a factor. Treat the simulation trend as uncertain.

**Concentration.** Township made more than $400M in 2025, over 42% of farming IAP [G9]. ST 2024 simulation top-3 = 42.0%, with 88.3% from titles older than two years [G1].

**Mix.** IAP-led. Goodville earns more than 12% of revenue from subscriptions [G9].

**Hits**
- **Heartopia** (XD; global launch 7 Jan 2026; multiplayer cozy life-sim): $67M in H1 2026 [G10], then $20M per month by Aug 2026 and more than $130M IAP from ~37M downloads [G38]. AppMagic calls $20M a month a simulation-genre record, beating Aobi Island's $7.7M [G38].
- **My Garden Tale:** third in farming by IAP in H1 2026, with more than 90% of lifetime revenue from China [G10].
- **Hay Day** (14 years old) crossed $1M in daily revenue on 1 May 2026 [G10] and set a monthly record in April 2026 [G40].
- **Life/dress-up adjacent:** Love and Deepspace made $411M in its first year on mobile; Infinity Nikki made $69.9M in about a year (AppMagic) [G39].

**Regions.** Two of the three new farming top-10 entrants in 2025 earned all their revenue in China, while established farm titles remain US-reliant [G9]. 55 farming games launched in H1 2026 [G10].

**Read for us.** Cozy demand is rising and decoration/creation is a top Korean play motive [E13], but winners are content- and art-heavy and the new entrants are large Chinese studios.

### 2.5 Tycoon / idle tycoon

- No idle-tycoon IAP total found. Proxies: AM casual time management $135M (−12%) [G9]; AM *hypercasual* simulation only $18.3M IAP on 1.8B downloads [G3].
- ST's "Simulation | Idler" was 2.11% of 2024 downloads (#1 My Perfect Hotel) but not a top-20 revenue subgenre [G1]. Pizza Ready! was #5 by downloads in 2025 [G2].

**Read for us.** Volume without IAP; ad-funded (inference from the above).

### 2.6 Casual action / hybridcasual (survivors-like, Archero-like)

**Size**
- ST hybridcasual model: $3.1B in 2024 (+37%) [G1]; +20% in 2025, the only model with meaningful IAP growth [G2, G4].
- AM's hypercasual segment, which absorbs hybrid titles: revenue up ≈80% in 2025 and 4–5× over three years; arcade hybrids $296M (+39%) [G3].

**Mix.** For hybridcasual across the US, Japan, the UK and Brazil, Action & Strategy is **81.9% IAP / 18.1% ads**, versus 59% IAP for Lifestyle & Puzzle [G2 p.26]. The ST ad-monetization digest reports that top IAP-focused hybridcasual games earn substantially more than ad-dominated ones [G7].

**Hits (AppMagic lifetime IAP, Feb 2026)** [G33]
- Survivor.io $476M; Archero $265M; Archero 2 $156M; Capybara Go $139M; SOULS $56M.
- Habby passed $2B in user spending overall.
- Dicero (Habby, 2026; dice roguelite) reached the top 150 grossing [G40].

**UA dependence.** Hybridcasual gets 50.6% of downloads from paid display and only 39.8% organically (derived) [G2 p.44].

**Regions.** Korea was Archero 2's #1 market (23%) [E30]. Korean hybridcasual revenue grew 37% in 2025 [G14].

**Note on "Action".** ST's Action genre (−$1.42B derived) and AM's Action (−24.5%) most likely reflect beat 'em up/ARPG titles, not survivors-likes. This is an inference: Dungeon & Fighter Mobile drove Action's 2024 jump [G1, G11].

**Read for us.** IAP-only costs least here (IAP share already ~82%), but the format is UA-hungry and crowded.

### 2.7 Strategy — 4X, tower defense, auto-battler, co-op defense

**4X**
- About $8.15B in 2024 (9.98% of IAP, derived) [G1].
- AM: +21% revenue and +31% downloads in 2025 [G3].
- ST: peaked at $3.09B in Q4 2025, then fell for two straight quarters; strategy overall −5% in H1 2026 ($9.27B) [G5].
- Concentration: AM top-10 64% (47% in 2023). $99 offers bring ≈30% of top titles' revenue, and $44–49 offers are the next tier [G3].
- **Hits**
  - Kingshot (Century Games): +461% to $700M in H1 2026 [G5]; $811.9M in its first year [E29].
  - Last Z: +328% to $359M in H1 2026 [G5].
  - Lands of Jail: a small-publisher breakout [G2].
- **Regions**
  - **Korea:** 4X passed MMORPG as Korea's #1 subgenre in January 2026, at more than $70M per month [G15]. Korea is 15.8% of Last War's lifetime revenue (US 36.3%) and 14.5% of Whiteout Survival's [G15].
  - **Japan:** 4X +35% (Aug 2024–Jul 2025) [G21]. Last War topped Japan in H2 2025, the first foreign #1 in three years [G22].
  - **China:** among the top 100 Chinese games abroad, "nearly half (49.97%) are strategy and SLG titles" (share basis not stated) [G23].
- Not feasible for a small team; see [E28].

**Tower defense and co-op defense**
- No worldwide total found. AM's "Tactics" strategy subgenre grew 35% in revenue and 41% in downloads in 2025, but AM does not define it [G3].
- **Lucky Defense** (111%, Korea, launched 23 May 2024)
  - $47M IAP in five months [E11].
  - ₩120B+ cumulative revenue and 7.5M+ global downloads by April 2025 [G36].
  - 111%'s 2024 revenue was ₩105.8B (+229%); the company has about 110 staff [G36].
  - Team size for the game itself: not verified.
  - 111%'s CEO says "good games can be completed within 6 months" [G36].
- **Clash of Critters** (Farlight/Lilith; tower defense + monster catching + pinball; 21 May 2026): $24M IAP by Aug 2026 [G38].

**Auto-battler / RTS**
- RTS was 1.68% of 2024 IAP (#1 TFT) and 2.11% of time (#1 Clash Royale) [G1].
- Clash Royale earned $627.5M gross in 2025 (+147%) [G11].
- In Korea, TFT had 1.20M MAU in May 2026 (#4) [G18].

### 2.8 Card battlers, TCG and deckbuilders

**Size.** No genre total found. AM's "+213%" compares Jan–Oct 2025 with a prior year that contained almost no Pokémon TCG Pocket revenue (launched 30 Oct 2024) [G8]. AM's full-year chart shows a much smaller increase (inference from [G3] p.48). In Japan, card battlers grew 305% [G21].

**Hits**
- **Pokémon TCG Pocket**
  - $952.6M gross in 2025 [G11] ($677M net, +141% [G3]).
  - ≈$1.3B in its first 12 months, with 150M+ downloads [G27].
  - Japan's #1 revenue title in H1 2025 [G21].
- **Shadowverse: Worlds Beyond** (Cygames, 17 Jun 2025): more than $30M on mobile in the first month; 90% Japan, 2% Korea [G28].
- **Marvel Snap** (AppMagic net, secondary source): $99M in 2023 → $60M in 2024 → $26M in 2025 [G29].
- **Balatro** (solo developer; premium): over $9.3M net on mobile by Jan 2025, 49% from the US [G30].

**Read for us.** The systemic core suits a small team, but F2P winners are IP-led and the deckbuilder hit (Balatro) was premium.

### 2.9 RPG — squad, idle, action, MMORPG, tactical/gacha

**Size**
- RPG lost about $1.77B in 2025 by ST's regional table (derived), including −$1.53B in Asia [G2].
- AM: $11.0B net (−16.6%), downloads −9.1% [G3].
- H1 2026: $6.12B, with the MMORPG decline "especially pronounced". Korea lost $297M of RPG revenue and Japan $229M [G5].

**Subgenres**
- **Squad RPG:** 6.14% of 2024 IAP (#1 NIKKE) [G1]; Japan −21% [G21]. Seven Knights Re:BIRTH (Netmarble, 2025) made ≈$120M from May to Sep 2025 [G14].
- **Idle RPG:** 1.72% of IAP (#1 Legend of Mushroom) [G1].
  - Korean idle RPG players average 50.42 minutes a day, versus 135 minutes for MMORPGs [G17].
  - MapleStory: Idle RPG (Nexon, global launch 6 Nov 2025) was #1 in Korea for more than 10 weeks [G37]. An error in a paid item's stated value led Nexon to offer full refunds, cutting its Q4 2025 revenue by about ¥9B [G37].
  - It was #2 in Korea in May 2026 at ₩28.5B [G18].
  - Pixel Hero (Ujoy, 2023): $85M; Korea 29.4% of revenue. Players cited "the absence of aggressive monetization" [G41].
- **Action RPG:** beat 'em up 1.44% (DnF Mobile) [G1]. DnF Mobile made $489.8M gross in 2025 [G11]. Genshin's decline is covered in [E32]. 2026 launches include Neverness to Everness and Honor of Kings: World [G40].
- **MMORPG:** 5.59% of 2024 IAP (#1 Lineage M) [G1]; Japan −21% [G21].
  - In Korea it still held 30% of revenue in Q1–Q3 2025 [G14].
  - New Korean MMORPGs: Mabinogi Mobile (Mar 2025; Korea Game of the Year), RF Online Next (2025), Vampir (Aug 2025) [G16, G37].
  - MMORPGs held ranks 1–3 and 6 of the Korean Google Play top 10 in Sept 2026, helped by new launches [G19].
- **Tactical / turn-based gacha:** turn-based RPG 2.62% (#1 Honkai: Star Rail) [G1]; AM tactical RPG +56% (period to Oct 2025) [G8]; Korean turn-based +138% [G14]. Korea's anime-style games earned ≈$1.4B (Oct 2024–Sep 2025) [G14]. SD Gundam G Generation ETERNAL earned more than $100M in H2 2025 [G22].

**Concentration.** RPG is the least concentrated genre and the most open to new titles [G1].

**Regions**
- **Japan:** RPG = 37.4% of revenue [G21].
- **Korea:** 48% [G14].
- **China:** RPG = 15.1% of domestic revenue ("top genres in China by revenue", CADPA) [G23].

### 2.10 Shooter / battle royale

**Size**
- 2024: $4.3B (+3.4%) [G1].
- 2025 (derived): +$825M, of which Asia +$584M [G2].
- AM: $3.3B net (+14.2%) [G3]. Q1 2026: +12% [G6].

**Concentration.** Top-3 = 53.9%; titles older than two years = 94.7% [G1].

**Playtime.** Battle royale: 12.69% of 2024 playtime [G1].

**Hits**
- **Delta Force** (Tencent): $492.5M gross in 2025 [G11]; $144M in Q1 2026 and $556M lifetime [G34]. Since Q3 2025, only PUBG Mobile has out-earned it among shooters in any quarter [G34].
- **Valorant Mobile:** China launch 19 Aug 2025; the biggest Chinese launch of 2025 by first-month DAU and receipts [G34].

**Regions.** China: shooters = 18.3% of domestic revenue (CADPA) [G23]. Korea: 24.4% of Korean gamers play shooters (42.8% of teens) [E13].

**Read for us.** Not feasible for a small team.

### 2.11 MOBA

- 5.52% of 2024 IAP (#1 Honor of Kings) and 10.61% of time (#1 Brawl Stars) [G1].
- AM: −8% revenue in 2025 [G3].
- Honor of Kings: $1.68B net in 2025 (−3%) [G3]; $1.078B gross in H1 2026, "a 2% YoY decline" [G5].
- ST: Asian players "shifted time away from MOBAs" in 2025 [G2].
- China: MOBA = 19.5% of domestic revenue (CADPA) [G23].

**Read for us.** Not feasible.

### 2.12 Party / social / UGC

**Size**
- AM party games: $272.7M net (−16.2%) despite downloads +7.9% [G3].
- **Roblox (company figures):** FY2025 revenue $4.9B (+36%) and bookings $6.8B (+55%) on 127M average DAU. 29% of revenue came via the Apple App Store and 15% via Google Play [G25].
- **Roblox store IAP (AppMagic):** $1.46B net (+30%) [G3]; ~$2.0B gross [G11].

**Hits.** Eggy Party (NetEase): $395.7M in 2023 → $183M in 2024 → $158.7M in 2025 (gross; 98% China) [G26].

**Korea.** Roblox was #1 by MAU in May 2026 (2.26M) [G18].

**Read for us.** Out of scope; standalone party games are shrinking.

### 2.13 Sports and racing

- **2024 (ST):** sports $2.7B (−6.3%), downloads −10.6% [G1].
- **2025:** ST derived change sports −$14M, racing −$65M [G2]. AM: sports $1.7B (−3.9%), racing $361.0M (−11.4%) [G3].
- **Concentration:** top-3 sports 40.8%, racing 50.8%; titles older than two years: sports 88.9%, racing 94.1% [G1].
- **Playtime:** realistic sports was 5.73% of time [G1].
- **Mix:** hybridcasual Sports & Racing (US, JP, UK and BR combined) is 71.0% IAP [G2].
- No 2023–26 breakout found. Regional sports detail for Korea and Japan: not found.

### 2.14 Social casino (note only)

- 2024: $11.7B (+8.9%), downloads −39.6% [G1].
- 2025: −$832M (derived), including North America −$860M [G2]. AM: $6.9B (−7.6%); slots $2.7B (−14%) [G3, G9].
- H1 2026: −$648M in the US [G5]. In the US, casino earned ≈30% of top-100 revenue via D2C in H1 2026 [E8].
- Excluded from consideration on ethical grounds.

### 2.15 Regional genre structure

**US**
- 2025 share of US IAP by class: Lifestyle & Puzzle 41.3%, Action & Strategy 34.8%, Casino 21.6%, Sports & Racing 2.3%.
- 2025 share of US ad spend by class: 56.2%, 30.7%, 10.4% and 2.8% respectively [G2 p.42].
- H1 2026 US IAP: $12.1B (−7%) [G5].

**Japan**
- $11B over Aug 2024–Jul 2025 (−2.2%). Revenue shares: RPG 37.4%, strategy 21.8%, puzzle 9.2%. Japanese publishers take 68–69% of IAP [G21].
- H1 2026: $4.94B (−10%) [G5].

**China**
- Domestic market ¥350.79B (+7.68%), of which mobile is 73.29% (≈¥257.1B, derived) [G23].
- "Top genres in China by revenue" (CADPA, as summarized; base not stated): MOBA 19.5%, shooter 18.3%, RPG 15.1% [G23].
- Chinese games abroad earned $20.455B (+10.23%): US 32.31%, Japan 16.35%, Korea 9.15% [G23].
- China iOS H1 2026: $6.46B [G5].

### 2.16 Korea — top genres and recent changes

**Size**
- ST 2025: H1 $2.4B + H2 $2.8B [G16]; ST's full-year forecast was $5.3B, with Google Play 75% [G14].
- AM: −12% in 2025 [G3].
- H1 2026: $2.32B (−10%) [G5].
- Airbridge's 2024 $6.77B uses another method; not comparable [G20].

**Genre shares**
- RPG was 57.5% of Korean revenue in Jan–Aug 2023 [E10] and 52% in Jan–Oct 2024 [E11]. It first dipped below 50% in May 2024 [G17] and was 48% in Q1–Q3 2025, with MMORPG at 30% and mid-core overall at 79% [G14].
- Within RPG (2020 → 2024): MMORPG 78.8% → 56.2%; idle RPG 1.7% → 16%; squad 11–15%; turn-based 4.7% [G17].

**Revenue per download (Airbridge, 2024)** [G20]
- RPG $23.79; strategy $10.18; casual $1.68.

**2025 growth by subgenre** [G14]
- 4X +25%; turn-based RPG +138%; merge +89%; hybridcasual +37%; casual +8%.

**The big shift.** 4X became Korea's #1 subgenre in January 2026, ending MMORPG's nine-year lead. 4X takes about 19% of Korean game ad exposure [G15].

**Top-grossing games, May 2026 (Mobile Index)** [G18]
- Whiteout Survival ₩33.1B; MapleStory: Idle RPG ₩28.5B; Kingshot ₩27.1B; Lineage M ₩22.3B; Last War ₩22.2B.
- Three of the top five are Chinese 4X titles.

**Counter-trend.** MMORPGs held four Google Play top-10 slots (ranks 1–3 and 6) in Sept 2026, helped by new launches [G19].

**MAU leaders (May 2026):** Roblox, Block Blast, Brawl Stars, TFT, Pokémon GO [G18].

**Korea as a lead market.** Korea often supplies a quarter to a third of revenue for formats a small team can build: Archero 2 23% [E30], Pixel Hero 29.4% [G41], Legend of Mushroom 31% [E11]. Lucky Defense was a domestic hit [G36].

**Risk.** The MapleStory: Idle RPG item-value error ended in full refunds [G37]. Combined with Korea's loot-box law [E17], audited item values and odds are mandatory.

### 2.17 Data conflicts and caveats
- **Downloads.** ST: −7.2%, only strategy grew; AM: +4.6%, most genres grew [G2, G3]. Use these sources for revenue direction, not download trends.
- **Simulation.** The two providers disagree on 2025 (2.4).
- **Taxonomy.** ST's January 2026 taxonomy separated "Swap" (Royal Match) from "Classic Match 3" (Candy Crush) [G2]. Year-on-year subgenre comparisons across ST reports are unsafe.
- **D2C.** Store-only data understates Monopoly GO, coin looters, casino, miHoYo and Roblox [E8, G10, G25].
- **Unused.** The H1'26 digest's "Roblox (−29%, $403 million…)" has unclear scope [G5].
- **Digests.** G4–G10 summarize paywalled reports; their figures match the primary PDFs wherever both exist.

---

## 3. Source list

| Id | Source (publisher, author, date) | Measure / scope | URL | Verified |
|---|---|---|---|---|
| G1 | Sensor Tower, *State of Mobile Gaming 2025* (2024 data), PDF (=E1) | Gross IAP; iOS + GP; China iOS only | https://investgame.net/wp-content/uploads/2025/11/sensor_tower__state_of_mobile_gaming_2025__en.pdf | yes (text + page images pp.8, 12–20) |
| G2 | Sensor Tower, *State of Gaming 2026* (2025 data), PDF dated 2026-02-25 | As G1; Jan 2026 taxonomy | https://investgame.net/wp-content/uploads/2026/02/2026-02-26-sensor_tower__state_of_gaming_2026__en_wp.pdf | yes (text + images pp.13, 21–27, 32, 42, 44) |
| G3 | AppMagic, *Mobile Market Landscape 2026*, PDF (data recorded 2026-01-15) | As G1 but net (inferred) | https://appmagic.rocks/files/view/upload/Reports/EN_MobileMarkeLandscape2026.pdf | yes (text + images pp.39, 48) |
| G4 | GameDev Reports, D. Byshonkov, 2026-03-19, digest of ST *State of Gaming 2026* | ST gross ($20.2B strategy, $14.4B puzzle) | https://gamedevreports.substack.com/p/sensor-tower-state-of-gaming-2026 | secondary |
| G5 | GameDev Reports, 2026-08-17, *Sensor Tower: The Gaming Market in H1'26* | ST gross, H1 2026 | https://gamedevreports.substack.com/p/sensor-tower-the-gaming-market-in | secondary |
| G6 | GameDev Reports, 2026-05-27, *Sensor Tower: Mobile Market in Q1 2026* | ST gross, Q1 2026 | https://gamedevreports.substack.com/p/sensor-tower-mobile-market-in-q1 | secondary |
| G7 | GameDev Reports, 2026-07-23, *Sensor Tower: Mobile Game Ad Monetization in 2026*; ST blog, B. Isagholian, June 2026 | Ad metrics Jan 2025–May 2026, 19 countries | https://gamedevreports.substack.com/p/sensor-tower-mobile-game-ad-monetization ; https://sensortower.com/blog/gaming-deep-dive-ad-monetization-report | secondary; ST blog partial |
| G8 | GameDev Reports, 2025-12-04, *AppMagic: Mobile Games Monetization Report 2025* | AM, period through 2025-10-22 | https://gamedevreports.substack.com/p/appmagic-mobile-games-monetization | secondary |
| G9 | Mobidictum, 2026-02-24, *AppMagic casual games report 2025: Summary* | AM casual IAP (net per G10's method note) | https://mobidictum.com/appmagic-casual-games-report-2025-summary/ | secondary |
| G10 | GameDev Reports, 2026-08-06, *AppMagic: Mobile Casual Games in H1 2026* | AM net IAP (stated) | https://gamedevreports.substack.com/p/appmagic-mobile-casual-games-in-h1 | secondary |
| G11 | PocketGamer.biz, C. Chapple, 2025-12-22, *The top grossing mobile games of 2025* (=E7) | AM gross, 1 Jan–21 Dec 2025 | https://www.pocketgamer.biz/the-top-grossing-mobile-games-of-2025/ | secondary |
| G12 | PocketGamer.biz, A. Astle, 2025-07-24, H1 2025 genre analysis (=E5) | AM gross, H1 2025 | https://www.pocketgamer.biz/strategy-games-surge-as-rpg-revenue-tumbles-h1-2025s-top-genres-revealed/ | secondary |
| G13 | mobilegamer.biz, T. Ivan, 2026-01-14, data digest (2025 genres; Block Blast 70M DAU) | AM IAP | https://mobilegamer.biz/data-digest-2025s-top-earning-genres-appsflyer-for-sale-block-blast-hits-70m-dau-app-store-earnings-more/ | secondary |
| G14 | Sensor Tower Korea, Rui Ma, 2025-11, 「2025년 한국 게임 시장 인사이트」 | ST, Korea, Q1–Q3 2025 | https://sensortower.com/ko/blog/state-of-gaming-in-korea-2025-report-KR | yes |
| G15 | Sensor Tower Korea, Yena You, 2026-02, 「4X 전략, MMORPG 제치고 처음으로…」; DigitalToday, 이호정, 2026-02-04; Byline Network, 윤정환, 2026-03-18 | ST, Korea, Jan 2026 | https://sensortower.com/ko/blog/4X-strategy-emerges-as-the-top-grossing-mobile-game-genre-for-the-first-time ; https://www.digitaltoday.co.kr/news/articleView.html?idxno=626697 ; https://byline.network/2026/03/18-552/ | yes |
| G16 | Sensor Tower Korea, Yena You, 2025-07 and 2026-01, H1/H2 2025 Korea recaps (updates E12) | ST, Korea | https://sensortower.com/ko/blog/1H2025-mobile-games-recap-in-Korea ; https://sensortower.com/ko/blog/2H2025-mobile-games-recap-in-Korea | yes |
| G17 | GameDev Reports, 2024-09-05, *Sensor Tower: RPG Revenue Declines in South Korea* | ST, Korea 2020–2024 | https://gamedevreports.substack.com/p/sensor-tower-rpg-revenue-declines | secondary |
| G18 | IGAWorks Mobile Index blog, 2026-06-05, 「26년 6월 인기 모바일 게임 순위」 (May 2026 data) | Mobile Index, Korea | https://www.igaworksblog.com/post/mobilegame-chart-2606 | yes |
| G19 | The Games Daily, 강인석, 2026-09-17, 「MMORPG 장르 모바일 시장서 대세 위상 '회복'」 | Google Play KR top 10 | https://www.tgdaily.co.kr/news/articleView.html?idxno=407012 | yes |
| G20 | Gametoc, 장동준, 2024-12-18 (Airbridge *Korean Mobile Gamers 2025*) | Airbridge, Korea 2024 | https://www.gametoc.co.kr/news/articleView.html?idxno=87284 | secondary |
| G21 | Sensor Tower, D. Kristianto, 2025-09, *Japan Game Market Insights 2025*; GameDev Reports digest, 2025-10-08 | ST, Japan, Aug 2024–Jul 2025 | https://sensortower.com/blog/state-of-japan-gaming-2025 ; https://gamedevreports.substack.com/p/sensor-tower-japan-gaming-market | yes / secondary (subgenre % from digest) |
| G22 | Sensor Tower Japan, H. Tsuji, 2026-01, H2 2025 Japan recap | ST, Japan | https://sensortower.com/ja/blog/state-of-mobile-games-2025h2-JP | yes |
| G23 | GameDev Reports, 2026-03-05, *Meridian Play: China Gaming Industry in 2025* (CADPA data) | CADPA, China 2025 | https://gamedevreports.substack.com/p/exclusive-meridian-play-china-gaming | secondary |
| G24 | GameDev Reports, 2026-06-26 (Newzoo); GamesBeat, R. Kaser, 2026-06-18 | Newzoo, incl. D2C | https://gamedevreports.substack.com/p/newzoo-gaming-market-surpassed-200 ; https://gamesbeat.com/global-games-revenue-breached-200b-in-2025-newzoo/ | secondary |
| G25 | Roblox Corp., FY2025 Annual Report to Stockholders (SEC) | Company GAAP revenue / bookings | https://www.sec.gov/Archives/edgar/data/1315098/000110465926044380/rblx-20251231xars.pdf | yes |
| G26 | PocketGamer.biz, A. Astle, 2026-01-06, *Eggy Party cracks $750m* | AM gross | https://www.pocketgamer.biz/eggy-party-cracks-750m-in-mobile-player-spending/ | secondary |
| G27 | Insider Gaming, M. Straw, 2025-10-30, TCG Pocket first-year revenue | AM | https://insider-gaming.com/pokemon-tcg-pocket-first-year-revenue-estimates-hit-1-3-billion/ | secondary |
| G28 | App2Top, E. Bespyatova, 2025-09-02, Shadowverse: Worlds Beyond | ST | https://app2top.com/news/sensor-tower-the-mobile-version-of-shadowverse-worlds-beyond-earned-over-30-million-in-its-debut-month-283726.html | secondary |
| G29 | Udonis blog, A. Knezovic, 2026-07-13, *Marvel Snap Stats* | AM net ("reduced by platform fees") | https://www.blog.udonis.co/statistics/marvel-snap | secondary (blog) |
| G30 | Game World Observer, E. Obedkov, 2025-01-21, Balatro 5M units | AM net (mobile) | https://gameworldobserver.com/2025/01/21/balatro-another-1-5-million-copies-total-5m-units | secondary |
| G31 | PocketGamer.biz, C. Chapple, 2026-02-19, Scopely–Loom Games | Company | https://www.pocketgamer.biz/scopely-acquires-majority-stake-in-istanbuls-pixel-flow-developer-loom-games/ | secondary |
| G32 | 36Kr (Rongzhong Finance, Wang Tao), 2026-03-03, Block Blast / Hungry Studio | Press | https://eu.36kr.com/en/p/3706617203732616 | secondary |
| G33 | mobilegamer.biz, T. Ivan, 2026-02-18, data digest (Habby passes $2bn) | AM lifetime IAP | https://mobilegamer.biz/data-digest-savvys-moonton-swoop-liftoff-kills-ipo-habby-hits-2bn-fallout-shelter-more/ | secondary |
| G34 | mobilegamer.biz, T. Ivan, 2026-04-29 (Delta Force); PocketGamer.biz, A. Astle, 2025-12-01 (Valorant Mobile) | AM; Tencent statements | https://mobilegamer.biz/data-digest-skillz-gets-420m-playsimples-355m-ipo-us-and-india-market-stats-delta-force-more/ ; https://www.pocketgamer.biz/valorant-mobile-is-chinas-most-successful-mobile-launch-of-2025/ | secondary |
| G35 | Inc42, A. Pushkarna, 2026-04-24, PlaySimple DRHP | Filing via press | https://inc42.com/buzz/game-developer-playsimple-files-drhp-for-%E2%82%B93150-cr-ofs-only-ipo/ | secondary |
| G36 | Yonhap via Daum, 김주환, 2025-04-14; GameY, 정지우, 2025-04-15; Byline Network, 이대호, 2025-04-15; Global Economic interview, 2025-02-21 (111% / Lucky Defense) | Company | https://v.daum.net/v/20250414171632765 ; http://www.gamey.kr/news/articleView.html?idxno=3012277 ; https://byline.network/2025/04/15-443/ ; https://www.g-enews.com/article/ICT/2025/02/202502211643061580c5fa75ef86_1 | yes |
| G37 | Nexon, Q4/FY2025 earnings release, Feb 2026 | Company | https://finance.yahoo.com/news/nexon-releases-earnings-fourth-quarter-170000857.html | yes |
| G38 | mobilegamer.biz, V. Blake, 2026-09-16, data digest (Heartopia, Clash of Critters); games.gg on Clash of Critters' genre | AM IAP | https://mobilegamer.biz/data-digest-roblox-shares-jump-11-augusts-top-publishers-heartopia-clash-of-critters-newzoo-stats-more/ ; https://games.gg/clash-of-critters/ | secondary / partial (genre description) |
| G39 | PocketGamer.biz, A. Astle, 2025-11-27, Infinity Nikki $70m (AppMagic; also Love and Deepspace year-one figure) | AM | https://www.pocketgamer.biz/infinity-nikkis-version-20-update-arrives-as-title-hits-70m-on-mobile-ahead-of-its-first-anniversary/ | secondary |
| G40 | GameRefinery, *Analyst Bulletin: Mobile game market review April 2026*, 2026-05-13 | Qualitative | https://www.gamerefinery.com/mobile-game-market-review-april-2026/ | yes |
| G41 | GameDev Reports, 2023-10-27, *Sensor Tower: Pixel Hero is the leader in the Korean mobile market by downloads* | ST | https://gamedevreports.substack.com/p/sensor-tower-pixel-hero-is-the-leader | secondary |
| G42 | PocketGamer.biz, I. Muhammad, 2026-02-06, AppMagic 2025 landscape ("$4.8 billion in net revenue") | AM net | https://www.pocketgamer.biz/games-revenue-growth-stalls-in-2025-as-strategy-emerges-as-the-fastest-growing-genre/ | secondary |

---

## 4. Implications for an IAP-only, small-team new game

1. **IAP-only is viable in our target markets, but genre decides how much we give up.**
   - In the US, Canada, Korea and Japan, IAP is already 77–90% of game revenue [G7].
   - What IAP-only costs varies by genre:
     - **Small loss:** mid-core and Action & Strategy hybrids (81.9% IAP) [G2].
     - **Large loss:** Lifestyle & Puzzle hybrids (59% IAP) and word, block or idle-tycoon games, which are ad-funded [G2, G32, G35].

2. **Rule out the oligopolies.** These formats are locked by incumbents and UA capital:
   - **4X:** top-10 = 64%; $99 offers ≈30% of revenue [G3].
   - **Merge:** top-10 ≈80% [G3].
   - **Coin looters:** top-3 ≈90%, and no new 2026 entrant has passed $100K a month [G9, G10].
   - **Match-3:** 4 of 367 new launches ever reached $100K a month [G9].
   - **Shooter and MOBA:** titles older than two years hold 94.7% of shooter IAP; MOBA is Honor of Kings-dominated [G1, G3].

3. **Growth exists in 2026, but mostly where ads or capital dominate.**
   - Puzzle grew ≈20% in H1 2026 [G5], but through merge (an oligopoly) and sort/block/screw (thousands of launches, ad-heavy) [G10].
   - Pockets with an IAP-led profile and room for newcomers: tactics (+35%) [G3], turn-based/tactical RPG in Korea (+138%) [G14], and life-sim (+76% in H1 2026, with Heartopia at a record $20M a month) [G10, G38].

4. **Optimize for revenue per hour, not just hours.** Measured as IAP share ÷ playtime share (derived) [G1]:
   - 4X and squad RPG earn about 4.5× their playtime share; match-swap 2.2×.
   - MOBA, sandbox and battle royale earn under 0.5×.

   Our target is therefore a format with a daily multi-session habit and a deep meta. Pixel Flow shows a hybrid can reach 52.5 minutes a day over 9.4 sessions [G7].

5. **Korea is a strong lead and validation market, not our whole addressable market.**
   - The market is shrinking: −12% in 2025 and −10% in H1 2026 [G3, G5].
   - Its revenue is dominated by MMORPG, Chinese 4X and IP idle RPGs [G14, G15, G18].
   - Yet many global titles, including lighter formats, earn 15–30% of their revenue in Korea: Archero 2 23% [E30], Pixel Hero 29.4% [G41], Last War 15.8% [G15].
   - So: validate in Korea, monetize globally.

6. **Small-team precedents cluster in systemic formats.**
   - Pixel Flow (~20 staff; $125M net IAP in under a year) [G10, G31].
   - Lucky Defense (from a ~110-person company; ₩120B+) [G36].
   - Pixel Hero ($85M; "absence of aggressive monetization") [G41].
   - Balatro (solo; premium) [G30].
   
   Content- or UA-heavy hits come from large organizations: Kingshot, Royal Kingdom, Delta Force, MapleStory: Idle RPG and Heartopia (Century Games, Dream Games, Tencent, Nexon, XD) [G5, G10, G34, G37, G38].

7. **Budget for paid UA anyway.** Hybridcasual gets 50.6% of its downloads from paid display; mid-core earns more organic installs (63.6%) [G2]. Lifestyle & Puzzle is the most crowded US ad category: 56.2% of ad spend for 41.3% of IAP [G2]. So a strategy/RPG-flavoured hybrid likely faces less ad competition per dollar of IAP (inference from these US shares).

8. **Copy the proven offer architecture of the genre we pick, minus extraction.**
   - **4X:** high-ticket bundles [G3].
   - **Merge:** recurring LiveOps specials at $1–25 [G3].
   - **Hybrid puzzle:** fail offers plus $2–8 bundles [G3].
   - **Farm:** subscriptions above 12% of revenue [G9].
   - **Korean evidence:** fair monetization is a selling point [G41], and item-value errors can force mass refunds (about ¥9B for MapleStory: Idle RPG) [G37].

9. **Plan for D2C, but do not count on it at launch.**
   - Store-tracked "declines" for casino, coin looters, Roblox and miHoYo partly reflect a channel shift to web shops [E8, G10, G25].
   - AppMagic finds D2C still mostly a top-title tool and "likely unprofitable for smaller projects" [G3].
   - Add a web shop later, mainly for the US.

10. **Genre shortlist this evidence supports (ranked)**
    1. A co-op/async "luck + strategy" defense or tactics game with roguelite runs. It is Korea-proven, IAP-led and generates its own content [G3, G36, E35].
    2. A hybrid action-roguelite with a deep meta and several progression vectors. It has the highest IAP share among hybrids, and Korea is a top market for it [G2, E30].
    3. A fair-BM idle/squad RPG aimed at Korea and Asia. Korean demand is strong, but RPG fell 16.6% globally in 2025 [G3, G14, G17].
    
    Avoid 4X, MMORPG, MOBA/shooter, match-3/merge, coin looters/casino and word games. Main gaps: I found no 2025 worldwide revenue totals for tower defense, auto-battler, word/trivia, idle tycoon or idle/squad RPG. Decide on those using title-level comparables, not genre totals.
