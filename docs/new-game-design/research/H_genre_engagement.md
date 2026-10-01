# H. Genre-level player behaviour and business benchmarks for mobile games (2024–2026)

*Research input for woweverstudio's genre decision. The target is a new IAP-only (no ads) mobile game from a 5–10 person studio, launched globally with Korea as a key market. Success = high retention, high daily playtime and high IAP revenue. Prepared 2026-10-01.*

**Scope.** Genre-level retention, engagement, monetization, UA cost, production/live-ops load, small-team precedents and player motivation. Market size, top-grossing case studies and Korean regulation are already in `E_market_cases.md` (E1–E45) and `C_monetization.md`; I cite those by ID instead of repeating them.

**How to read the numbers**
- *Verified: yes* = I opened the primary document or page in this session. *Partial* = primary page only partly readable, or figures come from a digest. *Secondary* = press report of someone else's data.
- *Chart-read* = value taken from a chart.
  - GameAnalytics 2025 genre tables are heat maps with printed values; I transcribed all 16 genres × 12 months × 6 metrics and averaged them (transcription and script: [`tools/ga25_genre.py`](tools/ga25_genre.py)).
  - Adjust charts carry no value labels. I extracted bar lengths from the PDF's vector geometry; they land on whole percentages or cents and match every value the report also states in its text, so I treat them as exact.
  - Sensor Tower line-chart values were read the same way and are approximate (±0.2 pp).
- *Derived* = my own arithmetic on published figures; the method is stated each time.
- *[desc]* = my generic description, not taken from a source. The "content treadmill" ratings (low / medium / high) in the summary table are my synthesis of the evidence cited in the same row.
- **Provider definitions differ. Compare genres within one provider, not across providers.**
  - **GameAnalytics (GA):** median (P50) game in its SDK base, which is dominated by small and mid-size titles. Session length around 3–6 min.
  - **Adjust:** mix of its top 5,000 apps and its full dataset. Its "session length" averages about 30 min and is not defined in the report.
  - **Sensor Tower:** top titles only, so retention is far above GA medians.
  - **KOCCA:** self-reported survey.

---

## 1. Summary table

Legend:
- GA = GameAnalytics 2024 genre medians (H1).
- Adj = Adjust 2025 (H4); Adj session lengths marked * are not comparable with GA.
- LO = Liftoff/Singular, Feb 2024–Feb 2025, Android / iOS (H8).
- AF = AppsFlyer D90 (H9).
- RPD = IAP revenue ÷ downloads, 2024, derived from Sensor Tower (H7). This is not cohort LTV.
- n/f = not found.

| Genre | D1 | D7 | D28 / D30 | Session length | Sessions/day | Playtime/day | Conversion / ARPU / ARPPU / RPD | CPI Android / iOS | Content treadmill | Small-team examples | Sources |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Puzzle** (match, merge, sort, block) | GA 20.2%; Adj 20% | GA 4.54% | GA D28 1.19% | GA 5.6 min; Adj 25.5* | GA 4.78 | GA 30.2 min | RPD $1.26; casual-class D90 IAP ARPU $1.34, ARPPU $7.26 (AF) | LO $0.64 / $2.80; Adj blended $0.75 | **High** if level-based (Royal Match: new levels every 2 weeks; CC Soda +2,355 levels in 2025). Low if endless/procedural | Royal Match (30 staff at launch, heavy UA); Pixel Flow! (~20 staff, ads+IAP); Monument Valley (core team 8, premium) | H1 H4 H7 H8 H9 H18 H20 H28 E24 |
| **Word / Trivia** | GA 18.4% / 16.3%; Adj 21% / 16% | 4.18% / 3.28% | 1.12% / 0.82% | 5.1 / 3.7 min; Adj 23.2 / 15.1* | 4.32 / 3.84 | 23.8 / 13.9 min | Small IAP pools (word puzzle $265M, trivia $49M, Oct 24–Sep 25); lowest ARPDAU/ARPPU in GA 2019 | Adj $1.20 / $0.45 (blended); LO n/f | Medium (content can be generated) | n/f | H1 H3 H4 H12 |
| **Board & Card** (classic, tabletop; deckbuilders) | GA 19.1% / 18.8%; Adj 21% / 22% | **5.83% / 6.72%** | **2.17% / 3.00%** (best) | 7.3 / 8.3 min; Adj 27.0 / 24.1* | **5.09 / 4.86** | **41.1 / 48.5 min** (top) | Tabletop RPD $0.57; tabletop D30 ROAS 7% / 19% (LO, lowest); card-battler IAP $437M → $1.4B (AppMagic) | LO tabletop $1.79 / $5.42; Adj board $1.29, card $1.47 | Low for rules-based classics. Medium–high for competitive card battlers (new cards, balance) | Balatro (solo; $9.99 premium mobile ≈ $4.4M in ~2 months); Slay the Spire (premium mobile) | H1 H4 H7 H8 H12 H21 H23 |
| **Casino / slots** | GA 19.4%; Adj 17% | 5.50% | 1.92% | 7.3 min; Adj 22.8* | 4.27 | 35.4 min | AF D90 IAP ARPU $2.43, ARPPU $11.40; 4.95% of installs buy within 30 days (3.01% repeat); RPD ≈ $9.5–15.8 | LO **$4.10 / $21.03**; Adj casino $1.59, slots $4.47 | Medium (new machines/themes) plus compliance; 64% of IAP from paid users | none found | H1 H4 H7 H8 H9 |
| **Casual, hyper- & hybrid-casual** | GA casual 20.7%; Adj casual 17%, hybrid 27%, hyper 27% | GA 3.32%; top-25 D7 (ST): hybrid ≈15.2% > casual ≈14.9% > hyper ≈12.8% | GA 0.71%; Adj 2024: hybrid & hyper D30 2% vs 5% all games | GA 3.7 min; Adj 25.9 / 22.8 / 21.6* | GA 4.00 | GA 13.6 min | AF casual D90 IAP ARPU $1.34, ARPPU $7.26, IAA ARPU $0.55; hyper IAA $0.22. Hybrid: 32% of US App Store payers >$100 by D90 (top 10). ST: hybrid ≈50/50 IAP/ads, but action & strategy hybrid is 81.9% IAP (US) | LO casual $0.14 / $1.41; Adj casual $0.43, hybrid $0.87, hyper $0.25 | Medium; season pass now standard (hybrid) | Archero (~12 Habby staff, 2019); Survivor.io (team n/f); Block Blast (ads-only; ~1,000 staff by end-2025) | H1 H4 H5 H6 H8 H9 H12 H26 H27 |
| **Arcade** | GA **22.2%** (best D1); Adj 20% | 4.17% | 0.98% | 3.3 min (shortest); Adj 19.3* | 3.99 | 12.8 min (lowest) | RPD $0.17 (lowest) | Adj $0.16; LO n/f | Low–medium | n/f | H1 H4 H7 |
| **Action** (incl. survivor-like roguelites) **& Adventure** | GA 18.4% / 16.1%; Adj 19% / 19% | 2.91% / 2.28% | 0.63% / 0.48% | 3.9 / 4.6 min; Adj **43.8** / 22.3* | 3.56 / 3.70 | 14.1 / 16.4 min | RPD action $1.50; Survivor.io $2.09 lifetime RPD after ~2 months; Archero ≈ $4 lifetime RPD (E30) | LO action $0.15 / $1.50; Adj $0.24 / $0.49 | Low–medium (systemic runs; new chapters, heroes, skills) | Vampire Survivors (solo; F2P with optional ads); Archero; Survivor.io | H1 H4 H7 H8 H22 H26 E30 |
| **RPG** (gacha, idle, roguelike) | GA 15.1%; Adj RPG 19%, idle 20% | 2.07% | **0.43%** (lowest) | 4.4 min; Adj 37.1 / idle 30.9* | 4.02 | 15.6 min | RPD ≈ $9.7–13.6; midcore D90 IAP ARPU $2.13, ARPPU $9.80 (AF); US App Store first purchase $17.9 (AppMagic) | LO **$4.29 / $8.29**; Adj RPG $0.84, idle $3.19 | **Very high** for gacha (Genshin ≈300–700 staff, ~$100M). Medium for idle; low–medium for roguelike | Legend of Slime (6 → 20+ staff; $115M in 17 months, then company revenue −88%); Capybara Go! ($910K/day at launch, then decline) | H1 H4 H7 H8 H9 H12 H25 H29 |
| **Strategy** (4X, TD, auto-battler, card battler, MOBA) | GA 19.9%; Adj 18%; Last War / Whiteout 34% / 42% | GA 3.37%; Last War 11%, Whiteout 17% | GA 0.71%; D30 Last War 4%, Whiteout 8% | GA 5.5 min; Adj 37.5 (+18% YoY)* | 4.30 | 23.5 min | RPD **$8.33**; US strategy payers spend 2× casino payers by D90; App Store ARPPU up to 8× Google Play; ARPDAU Last War $2.47 / Whiteout $1.08 (E28) | LO $1.67 / $4.16; Adj $1.03 | **High** for 4X (weekly alliance events, seasons, $159.99 offers). Medium for TD/auto-battler (units, balance) | Lucky Defense (111%; ₩120B+ cumulative by Apr 2025; team n/f). Kingshot is not a small-team case (Century Games) | H1 H4 H7 H8 H12 H24 E28 E29 E35 |
| **Simulation** | GA 17.0%; Adj 19% | 2.39% | 0.50% | 4.1 min; Adj 22.8* | 3.68 | 14.7 min | RPD $0.62 | LO $0.37 / $4.72; Adj $0.32 | Medium–high (decor, content) | n/f | H1 H4 H7 H8 |
| **Sports / Racing** | GA 19.3% / 18.1%; Adj 21% / 17% | 3.58% / 3.01% | 0.82% / 0.65% | 4.3 / 3.8 min; Adj 28.4 / 16.3* | 3.81 / 3.94 | 15.7 / 14.1 min | Sports RPD ≈ $1.2–1.6; sports D30 ROAS iOS 80% (highest, LO) | LO sports $0.48 / $2.21; racing $0.08 / $0.88 | Medium (licences, seasons) | n/f | H1 H4 H7 H8 |
| **Multiplayer / party** (GA category) | GA **11.5%** (lowest) | **1.67%** (lowest) | 0.47% | **9.4 min** (longest) | **2.32** (fewest) | 24.2 min | n/f | n/f | Little content needed, but needs player liquidity, servers and balance | Stumble Guys (5–6 staff at launch; $80M+ lifetime by Jan 2023, influencer-led) | H1 H19 |

*\*Adjust session lengths are 6–10× GA's medians. Use them only to compare genres within Adjust.*

---

## 2. Per-topic notes

### 2.1 Retention by genre

**GameAnalytics 2024 genre medians [H1, pp.17–20].** Values are annual means of the monthly medians (Jan–Dec 2024 cohorts). The monthly range was narrow in every genre; for example, card D28 ranged 2.85–3.24%.

| Genre | D1 | D7 | D28 | D28/D1 | Session (min) | Sessions/day | Playtime (min/day) |
|---|---|---|---|---|---|---|---|
| Card | 18.84% | 6.72% | 3.00% | 16% | 8.3 | 4.86 | 48.5 |
| Board | 19.10% | 5.83% | 2.17% | 11% | 7.3 | 5.09 | 41.1 |
| Casino | 19.38% | 5.50% | 1.92% | 10% | 7.3 | 4.27 | 35.4 |
| Puzzle | 20.21% | 4.54% | 1.19% | 6% | 5.6 | 4.78 | 30.2 |
| Word | 18.40% | 4.18% | 1.12% | 6% | 5.1 | 4.32 | 23.8 |
| Arcade | 22.24% | 4.17% | 0.98% | 4% | 3.3 | 3.99 | 12.8 |
| Sports | 19.26% | 3.58% | 0.82% | 4% | 4.3 | 3.81 | 15.7 |
| Trivia | 16.34% | 3.28% | 0.82% | 5% | 3.7 | 3.84 | 13.9 |
| Strategy | 19.90% | 3.37% | 0.71% | 4% | 5.5 | 4.30 | 23.5 |
| Casual | 20.65% | 3.32% | 0.71% | 3% | 3.7 | 4.00 | 13.6 |
| Racing | 18.10% | 3.01% | 0.65% | 4% | 3.8 | 3.94 | 14.1 |
| Action | 18.35% | 2.91% | 0.63% | 3% | 3.9 | 3.56 | 14.1 |
| Simulation | 17.04% | 2.39% | 0.50% | 3% | 4.1 | 3.68 | 14.7 |
| Adventure | 16.05% | 2.28% | 0.48% | 3% | 4.6 | 3.70 | 16.4 |
| Multiplayer | 11.46% | 1.67% | 0.47% | 4% | 9.4 | 2.32 | 24.2 |
| Role Playing | 15.07% | 2.07% | 0.43% | 3% | 4.4 | 4.02 | 15.6 |

What the table shows:
- **Genre barely moves D1 but strongly moves D28.** D1 sits within 15–22% for every genre except multiplayer, while D28 spreads about 7× (0.43% → 3.00%). GA itself reads D1 as onboarding, D7 as core-gameplay appeal and D28 as content pacing [H1 p.9].
- **"Classic" genres lead on retention and engagement.** Card, board, casino, puzzle and word have the best D7 and D28, the most sessions and the longest playtime. GA attributes this to "quick and rewarding progression loops" [H1 p.17].
- **Arcade has the best D1 but weak long-term retention. Multiplayer has the longest sessions but the lowest retention** [H1 p.17].
- **The RPG, adventure and simulation medians are low partly because GA's base contains many small titles.** Top-grossing mid-core games retain best of all product models (Sensor Tower below).
- **GA contradicts itself on mid-core sessions.** Its text says mid-core median games get "6 and 7 sessions per day" [H1 p.12], but its genre table shows RPG at 4.02 and strategy at 4.30. I use the table.

**GameAnalytics 2025 data by region [H2, pp.15–20].** There is no genre chapter in 2026, and GA has no Korea split. Asia has the lowest median D7 and D30 of all eight regions.

| 2025, P50 / P90 / P99 | Asia | North America | Europe |
|---|---|---|---|
| D1 | 17.50 / 32.77 / 45.58% | 23.28 / 36.90 / 50.89% | 22.20 / 36.36 / 50.40% |
| D7 | 2.68 / 8.65 / 20.08% | 4.97 / 12.58 / 24.78% | 4.06 / 11.31 / 25.98% |
| D30 | 0.53 / 2.59 / 10.05% | 1.18 / 4.78 / 13.26% | 0.92 / 4.05 / 16.18% |
| Playtime (min/day) | 11.79 / 40.72 / 92.07 | 14.45 / 45.84 / 89.43 | 12.78 / 43.14 / 94.78 |
| Session (min) | 3.12 / 7.15 / 17.69 | 3.64 / 8.50 / 20.22 | 3.34 / 8.95 / 26.26 |
| Sessions/day | 4.19 / 7.79 / 13.32 | 4.23 / 7.59 / 12.85 | 4.22 / 7.48 / 11.56 |

**Adjust D1 by genre, 2024 → 2025 [H4 p.22; chart values from vector geometry].**
- All games: 27 → 27%.
- Hybrid casual 28 → 27%; hyper casual 27 → 27%.
- Family 18 → 23%; swap 24 → 22%; card 22 → 22%; board 22 → 21%; sports 21 → 21%; word 21 → 21%.
- Puzzle 20 → 20%; idle RPG 20 → 20%; music 22 → 20%; arcade 19 → 20%; adventure 20 → 19%; RPG 20 → 19%; action 18 → 19%; simulation 19 → 19%.
- Strategy 18 → 18%; casino 19 → 17%; slots 19 → 17%; casual 18 → 17%; racing 17 → 17%; trivia 16 → 16%.

Other Adjust retention figures:
- The 2025 edition notes that hybrid and hyper casual led D1 (28% and 27%) but "by day 30, both dropped to just 2% (vs. the overall games average of 5%)" [H5 p.24].
- **Korea D1:** 20% → 18% (2023 → 2024, 2025 edition) [H5 p.24], and 19% → 20% (2024 → 2025, 2026 edition) [H4 p.23]. Japan reached 25% in 2025, the highest in APAC.

**Sensor Tower, top-25 games by 2025 IAP revenue per product model (top 25 by downloads for hypercasual) [H6 p.24].** D7 values are read from the chart, early 2022 → late 2025:

| Product model | Early 2022 | Late 2025 |
|---|---|---|
| Mid-core | ≈22.9% | ≈20.9% |
| Casual | ≈18.5% | ≈14.9% |
| Hybridcasual | ≈17.4% | ≈15.2% |
| Hypercasual | ≈13.8% | ≈12.8% |

- Sensor Tower's text: casual D7 "steadily decline[d]"; hybridcasual "now sits above casual on D7"; Century Games' Tasty Travels has "D7 retention at 22% today."
- Title anchors: Last War has D1/D7/D30 of 34/11/4% and Whiteout Survival 42/17/8% (US iOS) [E28].
- Legend of Slime's soft-launch tests targeted D1 above 50% [H25].

**AppsFlyer and Liftoff retention: not found.** Neither provider published 2024–2026 genre retention in any primary page I could open. Widely copied genre tables (for example "match 32.65% D1") could not be traced to an openable 2024–26 source, so I do not use them.

### 2.2 Session length, sessions per day, playtime and time spent

**GameAnalytics (table above) [H1].**
- Daily playtime is highest for card (48.5 min = 8.3 min × 4.86 sessions), board (41.1), casino (35.4) and puzzle (30.2). Multiplayer, word and strategy fall between 23 and 25 min; every other genre is 12.8–16.4 min.
- In the same report, GA's 2024 global median playtime was "around 22 minutes" [H1 p.10]. Card, board, casino and puzzle medians (30–49 min) sit well above it; arcade, casual, action, RPG and simulation (13–16 min) sit below it. (The 2025 global median fell to about 12 min [H2 p.12].)

**Adjust session lengths by genre, 2024 → 2025, in minutes [H4 p.18].**

| Group | Genres (2024 → 2025) |
|---|---|
| Longest | action 44.8 → 43.8; strategy 31.8 → 37.5 (text: 31.72 → 37.51); RPG 39.7 → 37.1; idle RPG 31.8 → 30.9; all games 30.4 → 30.0 |
| Middle | swap 28.9 → 29.1; sports 26.6 → 28.4; board 26.6 → 27.0; slots 27.5 → 26.1; casual 22.6 → 25.9; puzzle 24.5 → 25.5; card 26.6 → 24.1; word 22.1 → 23.2 |
| Lower | hybrid casual 21.7 → 22.8; casino 23.4 → 22.8; simulation 24.1 → 22.8; adventure 31.6 → 22.3; hyper casual 19.0 → 21.6; arcade 20.5 → 19.3 |
| Shortest | music 16.0 → 17.3; racing 13.9 → 16.3; trivia 14.4 → 15.1; family 16.7 → 14.6 |

- **South Korea:** 34.8 → 36.0 min, above APAC (33.1) and the global average (30.0) [H4 p.19].
- **Install day:** sessions per user were 1.65 in 2025, and every genre fell between 1.50 (trivia) and 1.76 (family, idle RPG) [H4 p.20]. Install-day behaviour hardly differs by genre, so the first session must carry the hook.

**Share of installs vs share of sessions, 2025 [H4 pp.13–14].**

| Genre | Share of installs | Share of sessions |
|---|---|---|
| Action | 8% | 17.1% |
| Puzzle | 10% | 12.9% |
| Sports | 3% | 6.8% |
| Hyper casual | 29.1% | 15% (up from 11%) |
| Casual | just over 10% | 7% |
| Hybrid casual | just over 10% | 8.5% |
| Simulation | 8.5% | 5% |

Session growth in 2025: strategy +57%, casual +37%, hyper casual +31%, simulation +18%, card +15%, puzzle +15%, racing +14%, sports +8%.

**Sensor Tower time spent.**
- Time-share by subgenre for 2024 is in E1 [H7 p.16]: battle royale 12.69%, MOBA 10.61%, sandbox 8.16%, match-swap 3.96%, 4X 2.18%, RTS 2.11%, board 2.07%.
- For 2025, the report contradicts itself. One page says downloads and total time spent fell; the next says time spent "rose slightly" [H6 pp.20–21]. Strategy hours rose in Europe and North America (Clash Royale) but fell in Asia, and hypercasual time spent "surged" [H6 pp.22–23].

**Korea, self-reported (KOCCA) [H13, Tables 3-42 to 3-45].**
- Mobile play per day: 90.9 min on weekdays and 116.4 min at weekends (E13).
- Per sitting (1회 평균): weekday mean 57.3 min (median 40); weekend mean 73.2 min (median 60). Teens to 30s report 62–66 weekday minutes; people in their 50s–60s report 44–45.
- Self-reports run far above telemetry, so use them only to compare groups.

### 2.3 Monetization by genre

**AppsFlyer, State of App Monetization 2026 [H9].** Data: $900M verified IAP, $7.2B IAA, Jan 2025–Mar 2026, store revenue only.

| Category | D90 IAP ARPU | D90 IAP ARPPU | D90 IAA ARPU | Buyers within 30 days (one-time / repeat) | Monetization model (share of apps) | Share of IAP revenue from paid installs |
|---|---|---|---|---|---|---|
| Casino | $2.43 | $11.40 | $0.47 | 4.95% / 3.01% (ratio 1.65×) | 83% IAP | 64% |
| Midcore | $2.13 | $9.80 | $0.40 | ratio 1.76× (absolute rate not in text) | **90% IAP-only** | **49%** |
| Casual | $1.34 | $7.26 | $0.55 | ratio 1.89× | 47% IAP / 28% IAA / 21% hybrid | 61% |
| Hypercasual | — | — | $0.22 | — | 79% IAA-only | 79% |

- North America and Europe ARPU runs 20–25% above global, but ARPPU only 5–10% above. The regional gap is driven by conversion, not spend depth. North America converts 11.14% of installs to buyers vs 6.51% in LATAM (all apps).
- Revenue timing: IAP reaches 60% of its D60 value by D7. Casino IAP is the slowest, at 23% on D1 (all apps 38%). Gaming subscriptions earn only 21% on D1, which AppsFlyer reads as "requiring meaningful play experience before users are willing to commit."

**AppsFlyer ROAS by monetization model, Q3 2024, high-income markets [H10].**
- Android mid-core: hybrid 146% D90 ROAS vs **IAP-only 93%** vs IAA-only 58%.
- iOS mid-core: **IAP models 215%** vs hybrid 73%.
- 73% of casual and hypercasual revenue comes from paid UA; "Mid-Core games rely more on organic traffic."

**Sensor Tower on ads vs IAP.**
- Product-model definitions [H7 p.8]:
  - mid-core: "minimal ads";
  - casual: "primarily through in-app purchases, but also incorporate ads";
  - hybridcasual: "around 50/50 ad and in-app purchases revenue";
  - hypercasual: "almost 100% through ads".
- Hybridcasual split across the US, Japan, the UK and Brazil, 2025, top 1,000 by downloads per genre and country [H6 p.26]:

| Hybridcasual class (US, JP, UK, BR; 2025) | IAP share | Ad share |
|---|---|---|
| Action & Strategy | **81.9%** | 18.1% |
| Sports & Racing | 71.0% | 29.0% |
| Lifestyle & Puzzle | 59.0% | 41.0% |

  Action & Strategy hybridcasual also had "significantly higher store revenue per download."

**Derived IAP revenue per download, 2024 [H7 pp.12–13].** Method: genre IAP ÷ genre downloads in the same year. This is not cohort LTV, because older games' revenue inflates mid-core.

| Genre | RPD | Note |
|---|---|---|
| Strategy | $8.33 | |
| RPG | ≈ $11.4 | range $9.7–13.6, because the download share is published only as a rounded 3% |
| Casino | ≈ $11.9 | range $9.5–15.8, rounded 2% download share |
| Shooter | $1.79 | |
| Action | $1.50 | |
| Sports | ≈ $1.37 | |
| Puzzle | $1.26 | |
| Simulation | $0.62 | |
| Tabletop | $0.57 | |
| Lifestyle | $0.51 | |
| Arcade | $0.17 | |

**AppMagic, Monetization Report 2025 [H12].** Market data is App Store + Google Play IAP; payment behaviour is from the top-10 grossing Tier-1 West titles per genre, US only.
- **Strategy** [pp.14, 18]:
  - by D90, US strategy payers spend "twice as much as players in … Casino";
  - App Store ARPPU is up to 8× Google Play;
  - Google Play transactions are "typically not exceeding $7", while on the App Store "even the first purchase often exceeds $15";
  - the most common offer is $4.99, and top offers rose from $99 to $159.99 (Whiteout Survival, Last War).
- **RPG** [pp.21–23]:
  - revenue fell 13–16% per platform, and Google Play D90 ARPPU fell 42%;
  - the App Store first-payment check rose to $17.9;
  - only tactical RPG (+55.8%) and roguelike (+26.2%, "primarily due to Archero 2 and Mech Assemble: Zombie Swarm") grew;
  - Capybara Go! "failed to sustain its initial momentum."
- **Hybridcasual** [pp.51–55]:
  - IAP grew 84% on the App Store and 93% on Google Play;
  - App Store payers with ARPPU over $100 by D90 rose from 22% to 32%;
  - the median offer is $4.99, and most revenue comes from "low-priced currency packs and failure-triggered offers";
  - no-ads deals "lag behind ad-skip tickets", and a Season Pass is now standard.
- **Concentration** [p.6]: more than 40% of each genre's revenue comes from the five largest offers in the ten biggest projects.
- **Subgenre IAP, Oct 2024–Sep 2025 vs the prior 12 months** [pp.15, 23, 29]:

| Class | Subgenre IAP (prior 12 months → Oct 2024–Sep 2025) |
|---|---|
| Strategy | 4X $5.4B → $6.9B; card battler $437M → $1.4B; tactics $774M → $981M; RTS $1.0B → $1.2B; MOBA $2.2B → $2.1B |
| RPG | team battler $3.9B → $3.3B; MMORPG $3.3B → $2.6B; idle RPG $1.8B → $1.5B; roguelike $295M → $372M; tactical RPG $270M → $420M |
| Puzzle | match-3 $4.4B → $4.6B; merge $898M → $1.5B; match-2 blast flat at $440M; match 3D $344M → $310M; word $258M → $265M; sort $93M → $231M; block $15M → $156M |

**GameAnalytics H1 2019 (older; Jul 2018–Jun 2019) [H3 pp.18–23].** GA has published no genre monetization for 2024–26, so use these figures for direction only.
- Median daily conversion was "just under 0.3%", and RPG converted "3–4x better" than other top genres.
- RPG and strategy ARPDAU were "5–7x better than most other genres" (median ARPDAU $0.02). Trivia and word were lowest on both ARPDAU and ARPPU.

**Title-level anchors.**
- ARPDAU: Monopoly GO ≈ $0.50 [E26]; Last War $2.47 and Whiteout Survival $1.08, with RPD about $16 at D365 [E28].
- Lifetime RPD: Archero ≈ $4 [E30]; Survivor.io $2.09 after 2 months [H26].
- Legend of Slime: Tier-1 IAP:IAA was 7:3, with 50% of purchases on day one and 70% in week one [H25].

**Korean payers by age (KOCCA) [H13, Tables 3-60 and 3-69].** Payer share is derived from the payer base ÷ mobile-gamer base. Mean spend is annual in-game spend among payers.

| Group | In-game payers (% of mobile gamers) | Mean spend among payers |
|---|---|---|
| Teens | 29% | ₩58k |
| 20s | 42% | ₩101k |
| 30s | **51%** | **₩151k** |
| 40s | 47% | ₩99k |
| 50s | 47% | ₩44k |
| 60s | 36% | ₩29k |
| Men | 47% | — |
| Women | 37% | — |

The overall median among payers is ₩19k. The highest-spending age band, the 30s, is also the band most into collectible RPGs (38.3%; see 2.6).

### 2.4 UA cost, ROAS and organic share

**Liftoff & Singular 2025 Casual Gaming Apps Report [H8].** Singular data, Feb 2024–Feb 2025: 2.4B installs, $11.9B spend; genres use Sensor Tower's taxonomy; "casual" includes hypercasual.

| Genre | CPI Android | CPI iOS | IPM Android | IPM iOS | D30 ROAS Android | D30 ROAS iOS |
|---|---|---|---|---|---|---|
| Puzzle | $0.64 | $2.80 | 2.6 | 1.2 | 18% | 42% |
| Simulation | $0.37 | $4.72 | 6.0 | 1.4 | 25% | 57% |
| Action | $0.15 | $1.50 | 4.5 | 2.5 | 35% | 16% |
| Casual | $0.14 | $1.41 | 7.1 | 3.5 | 15% | 47% |
| Kids | $0.24 | $1.10 | 6.1 | 4.3 | 8% | 68% |
| Strategy | $1.67 | $4.16 | 1.6 | 0.3 | 27% | 60% |
| Racing | $0.08 | $0.88 | n/f | n/f | 23% | 48% |
| Sports | $0.48 | $2.21 | 3.5 | 1.2 | 21% | 80% |
| Casino | $4.10 | $21.03 | 1.6 | 0.2 | 11% | 41% |
| RPG | $4.29 | $8.29 | 0.8 | 0.3 | 39% | 55% |
| Tabletop | $1.79 | $5.42 | 3.4 | 0.2 | 7% | 19% |

- No genre recovers its CPI within 30 days.
- RPG has the best Android D30 ROAS despite the highest Android CPI; sports, kids and strategy lead on iOS.
- This supersedes the partial landing-page reading in E43.

**Adjust CPI, global blended median, 2024 → 2025 [H4 pp.28–29].**

| Tier | Genres (2024 → 2025) |
|---|---|
| All games | $0.43 → $0.56 (+30%) |
| Above $1 | slots $3.68 → $4.47; idle RPG $2.81 → $3.19; casino $2.05 → $1.59; family $1.79 → $1.53; card $1.13 → $1.47; board $1.17 → $1.29; word $0.74 → $1.20; swap $1.24 → $1.19; strategy $0.42 → $1.03 |
| $0.40–$1.00 | hybrid casual $0.72 → $0.87; RPG $0.76 → $0.84; puzzle $0.53 → $0.75; sports $0.48 → $0.55; adventure $0.41 → $0.49; trivia $0.37 → $0.45; casual $0.36 → $0.43 |
| Below $0.40 | simulation $0.29 → $0.32; hyper casual $0.19 → $0.25; action $0.19 → $0.24; arcade $0.12 → $0.16; racing $0.15 → $0.15; music $0.12 → $0.09 |
| Countries | **South Korea $1.22 → $1.50**; Japan $1.32 → $1.65; US $1.31 → $1.71; Singapore $1.37 → $2.49; APAC $0.21 → $0.27 |

The 2025 edition put the 2024 global median at $0.36 [H5 p.28], so the dataset has been revised.

**Paid vs organic.**
- **Adjust paid-to-organic install ratio, median, 2024 → 2025 [H4 pp.16–17]:**
  - all games 2.07 → 3.33;
  - lowest ratios: RPG 0.96 → 1.52; idle RPG 1.05 → 1.35; adventure 1.26 → 1.49; board 1.67 → 2.02; card 1.51 → 2.14; simulation 1.84 → 2.34; hybrid casual 2.12 → 2.32;
  - higher ratios: action 2.34 → 2.77; puzzle 3.13 → 3.96; arcade 3.27 → 3.67; hyper casual 3.39 → 4.57; casino 3.43 → 11.05;
  - countries: **South Korea 3.45 → 3.96**; Japan 2.52 → 3.00; US 2.79 → 3.53.
  - Not reported: in this chart the PDF has 23 bars but only 22 labels (no "slots"), and the text's "slots and casual … 139% and 446%" contradicts the bar order. I therefore leave out casual, slots, sports, strategy, swap, trivia and word.
- **AppsFlyer [H9]:** paid installs generate 59% of gaming IAP revenue. By category: midcore 49%, casual 61%, casino 64%, hypercasual 79%. The body text calls these global figures; the key-findings box attributes them to NA+Europe. In LATAM, casual falls to 37% and midcore to 43%.
- **AppsFlyer gaming marketing report, 2025 data [H11, digest]:**
  - paid share of installs: hypercasual 81% on Android and 67% on iOS; casual 54% on Android; midcore 22% on iOS (+32% YoY);
  - all games: 57% of Android and 44% of iOS installs are paid;
  - total gaming UA spend was about $25B (+3.8%).
- **Sensor Tower download channels, 2025, top 25 games per product model [H6 p.44]:**

| Product model | Organic (search + browse) | Paid display |
|---|---|---|
| Mid-core | 63.6% | 28.8% |
| Hypercasual | 50.7% | 41.7% |
| Casual | 46.3% (plus 11.2% web browser) | 35.9% |
| Hybridcasual | 39.8% | 50.6% |

- **Sensor Tower ad spend vs IAP share, US 2025 [H6 p.42]:**

| Game class | Share of ad spend | Share of IAP revenue |
|---|---|---|
| Lifestyle & Puzzle | 56.2% | 41.3% |
| Action & Strategy | 30.7% | 34.8% |
| Casino | 10.4% | 21.6% |
| Sports & Racing | 2.8% | 2.3% |

  In Japan, Action & Strategy takes most of the IAP revenue but a smaller share of ad spend. Puzzle is the most crowded UA market per IAP dollar.

**Korea-specific UA anchors.**
- Lucky Defense's Kakao Biz Board campaign returned about 95% day-0 ROAS [E35].
- Legend of Slime gated scale-up on D1 above 50% and CPI around $0.50 in Facebook US/Singapore tests [H25].

**Not found:** CPA or cost per purchase by genre for 2024–26; a Liftoff 2026 casual report or any 2025/26 Liftoff mid-core report (the latest listed is the 2025 casual report); Unity genre CPI.

### 2.5 Production and live-ops profile, and small-team successes

**Content consumption by genre.**
- **Level-based puzzle:**
  - Royal Match's store listing promises "New levels are coming in every two weeks!" and the game had over 7,300 levels by Feb 2024 [H18].
  - Candy Crush Soda added 2,355 levels in 2025 [E24].
  - Merge leader Gossip Harbor scaled from about 20 to about 100 events a month [E33].
- **Gacha RPG:** Genshin had about 300 developers by Feb 2021 (one estimate puts about 700 people on the game) and a ~$100M development and marketing budget [H29], plus ~6-week version updates [E32].
- **4X:** weekly alliance events, seasons and offers up to $159.99 [E28, H12].
- **Hybridcasual and roguelite:** season passes became standard by mid-2025 [H12]. Run content is recombined from systems (skills, enemies, stages) [desc].
- **TD and auto-battlers:** need new units plus permanent balancing (E23, Clash Royale).
- **Premium roguelite deckbuilders:** content is a card or joker pool expanded in occasional large updates [desc].
- **Event mechanics that pay** (Sensor Tower Playliner) [H6 pp.35–36]:
  - an events menu was "the most consistent feature associated with revenue lift: 83.4% of events" carried a lift;
  - next came expeditions, multi-tier passes, single passes and collection albums;
  - "paid access to accumulated rewards" events had a 50% revenue success rate, an 18% average release revenue impact, a 7-day average duration, and 34 new instances in 2025.

**Team sizes.**

| Game | Format | Team | Source |
|---|---|---|---|
| Balatro | roguelike deckbuilder | 1 (solo) | H21 |
| Vampire Survivors | survivor roguelite | 1 at start; now "little teams of people – five, 10, 15" per project | H22 |
| Monument Valley (2014) | premium puzzle | core team 8; $852k; 55 weeks | H20 |
| Stumble Guys | party royale | 5–6 at launch (Oct 2020); 7–8 at sale (Sep 2022); 11 (2024) | H19 |
| Legend of Slime | idle RPG | 6 at start → 20+ | H25 |
| Archero (2019) | roguelite action | ~12 Habby staff (LinkedIn, per DoF) | H26 (partial) |
| Pixel Flow! | sort puzzle | ~20 (2026) | H28 |
| Royal Match | match-3 | 30 at global launch (Mar 2021) → 75 planned by end-2021 | H18, E25 |
| Brawl Stars (live) | PvP | 60–80 | E19 |
| Genshin Impact | gacha ARPG | ~300 (Feb 2021) | H29 |
| Block Blast | block puzzle (ads-only) | ~1,000 company staff by end-2025 | H27 |
| Lucky Defense, Survivor.io, Capybara Go!, Kingshot, Slay the Spire | — | not found | — |

**Small-team and indie successes, 2019–2026.**

| Game (developer) | Model | Result | Source |
|---|---|---|---|
| Lucky Defense / 운빨존많겜 (111%, May 2024) | Gacha + VIP subscription, no forced ads (E35) | #1 grossing on both Korean stores at launch; 7.5M+ downloads and ₩120B+ cumulative revenue by Apr 2025; 111% revenue ₩105.8B in 2024 (3×+); 11M+ downloads by Apr 2026. CEO principle (G-Enews headline): "좋은 게임은 6개월 안에" ("good games within six months"); internal test by 50–100 staff (score 3.8/5) | H24, E11 |
| Legend of Slime (LoadComplete / MegaMacaron) | IAP:IAA 7:3 (Tier-1) | $115M in 17 months, 24M downloads; revenue mix US 30%, JP 20%, KR 15%, EU 10%. Company revenue fell 88% in 2024 (₩117.0B → ₩13.8B) as advertising spend was cut and the publisher (AppQuantum) contract was terminated (negotiated Sep 2024, final Mar 2025); etnews links the user decline to the marketing cut | H25 |
| Stumble Guys (Kitka Games) | F2P | $40M+ lifetime IAP and 225M downloads by Aug 2022; $80M+ and 270M by Jan 2023; peak 25M DAU. Grew through creators: "We never really paid anyone to make any videos"; a paid UA test in Brazil showed no meaningful difference vs organic | H19 |
| Survivor.io (Habby, Aug 2022) | F2P: IAP plus ad-supported rewards | $75M IAP and 37M downloads in ~2 months; Korea #2 market ($18.2M) | H26 |
| Archero (Habby, 2019) | Hybrid | ~$35M+ IAP in ~3 months | H26 |
| Capybara Go! (Habby, 2024) | IAP | $910K IAP/day at launch, 80% from Asia [H7 p.29]; then declined [H12] | H7, H12 |
| Pixel Flow! (Loom Games, Istanbul, 2025) | Ads + IAP | 10M+ players; "the only casual game released in the last 12 months to break into the monthly top 20 grossing rankings in the US"; Scopely majority stake at a >$1B valuation | H28 |
| Balatro (LocalThunk) | $9.99 premium, no IAP | ~$937.5K in the first 7 days on mobile (AppMagic); ~$4.4M by late Nov 2024; 5M+ copies on all platforms by Jan 2025 | H21 |
| Vampire Survivors (poncle) | F2P, optional ads ("designed to never interrupt your game") | Mobile launched Dec 8, 2022; 3M+ downloads in ~5 weeks; 27M players overall | H22 |
| Slay the Spire (Mega Crit) | $9.99 premium on iOS (2020) and Android (Feb 2021) | Sequel sold 3M+ copies in its first early-access week on Steam (Noisy Pixel, 2026-03-13; GosuGamers cites 3.3M from Mega Crit's Steam post) | H23 |
| Monument Valley (ustwo) | Premium | $5.86M from 2.44M paid sales by Jan 2015 (pre-window) | H20 |
| Royal Match (Dream Games) | IAP | 30 people at launch, but a $50M Series A and heavy UA capital | H18, E25 |
| Block Blast (Hungry Studio) | Ads-only | >300M MAU; daily ad revenue up to $584K (2024); 50,000 ad placements in three months (2025). Not a template for IAP-only | H27 |
| Kingshot (Century Games) | IAP | 2025 breakout of the year, #7 by IAP by Dec 2025 [H6 p.27]; $811.9M in year one [E29]. Not a small team | H6, E29 |

Sensor Tower's top 2025 breakouts from small publishers (all-time revenue under $100M) were led by Lands of Jail ("a fresh spin on the Eastern 4X strategy wave") and Staff & Sword Legend, followed by the sort puzzle Pixel Flow! [H6 p.27].

**Lessons for a small team (from the cases above).**
1. Solo-to-~20-person hits come from **systemic cores** — deckbuilder, survivor-roguelite, party royale, luck-and-strategy co-op defense, sort puzzle — not from handcrafted level or character treadmills.
2. **IAP-scale outcomes needed UA money or a creator flywheel.** Legend of Slime's revenue fell 88% after its marketing was cut; Stumble Guys grew on creators; Royal Match had $50M behind it. Retention, not ROAS alone, decides whether a game survives the end of paid UA.
3. **Premium works for deep single-player roguelites but caps revenue**, and Balatro and Slay the Spire have no recurring IAP. F2P IAP needs a persistent meta (Habby's template, E30).
4. **Iterate fast with explicit gates.** 111% works to a "good games within six months" principle and scores every project in a company-wide internal test; Legend of Slime gated on D1 50%+ and CPI ≈ $0.50 before scaling.

### 2.6 Player motivations by genre

**Quantic Foundry (QF).** The Gamer Motivation Model has 12 motivations in 6 pairs, built from 2M+ gamers [H16]:
- Action: Destruction / Excitement;
- Social: Competition / Community;
- Mastery: Challenge / Strategy;
- Achievement: Completion / Power;
- Immersion: Fantasy / Story;
- Creativity: Design / Discovery.

QF's reference sheet uses these mobile anchors:
- Summoners War = high Power (progression, "start weak and grind");
- Candy Crush Saga = low Fantasy (abstract setting);
- Disney Emoji Blitz and Covet Fashion = low Strategy (low cognitive load, short horizons);
- Mahjong = low Discovery.

Trend: QF reported that "67% of gamers today care less about strategic thinking and planning when playing games than the average gamer back in June 2015". The change came from 1.5M+ gamers over nine years and was more than twice the size of the next-largest change [H17, secondary]. QF's genre and mobile audience pages returned HTTP 403, so **mobile genre motivation profiles are not verified**.

**Korea, KOCCA 2025 [H13].** Mobile genres played in the past year (multi-answer, mobile gamers n=4,477, Table 3-60):

| % | All | Men | Women | Teens | 20s | 30s | 40s | 50s | 60s |
|---|---|---|---|---|---|---|---|---|---|
| Puzzle & quiz | 36.8 | 22.9 | **53.9** | 19.3 | 29.7 | 37.0 | 45.3 | 49.1 | 51.2 |
| Collectible / character-growth RPG | 27.0 | 31.4 | 21.6 | 20.4 | **37.6** | **38.3** | 25.2 | 15.1 | 13.8 |
| Shooter | 24.4 | 28.7 | 19.1 | **42.8** | 21.4 | 18.0 | 22.9 | 21.1 | 15.0 |
| Action / MMORPG | 23.3 | 29.4 | 15.9 | 15.5 | 23.6 | 29.5 | 27.1 | 22.6 | 17.8 |
| Strategy sim | 18.7 | 23.0 | 13.5 | 20.1 | 17.0 | 20.8 | 22.1 | 16.7 | 10.2 |
| Sports / racing | 17.1 | 24.4 | 8.1 | 13.8 | 17.6 | 15.8 | 19.0 | 18.0 | 20.6 |
| Hypercasual | 12.2 | 10.0 | 14.8 | 21.5 | 11.5 | 10.7 | 13.1 | 6.4 | 3.9 |
| Board / tabletop | 11.9 | 8.8 | 15.7 | 11.2 | 14.4 | 11.2 | 12.5 | 9.1 | 12.0 |
| Casino | 11.1 | 11.7 | 10.3 | 1.8 | 7.5 | 6.5 | 12.0 | 19.3 | 34.6 |
| TCG / auto-battler | 8.9 | 11.2 | 6.2 | 8.4 | 13.5 | 10.3 | 8.8 | 5.2 | 3.2 |
| MOBA | 8.5 | 10.5 | 5.9 | 9.3 | 11.2 | 9.3 | 6.6 | 6.5 | 5.9 |
| Rhythm | 7.2 | 5.1 | 9.8 | 11.1 | 10.6 | 7.7 | 4.7 | 3.0 | 2.2 |
| Party / co-op / social deduction | 7.0 | 4.7 | 9.8 | 12.7 | 8.9 | 5.8 | 5.4 | 3.3 | 2.9 |

- **Classification caveat (questionnaire C9).** KOCCA's "hypercasual" examples are 무한의 계단, 탕탕특공대 (Survivor.io), Last War, Geometry Dash, Helix Jump and The Tower, so survivor-likes count as "hypercasual" in this survey. Last War is listed under both hypercasual and strategy sim, and Clash Royale under both strategy sim and TCG/auto-battler.
- **Main-game reasons (Tables 3-58 / 3-59).** Play immersion is the first-rank reason (59.6%; 71.4% for people in their 60s). Character immersion is strongest among the young (first-rank: teens 26.6%, 30s 23.3%, 60s 14.9%; multi-answer: teens 55.1%, men 52.2% vs women 42.6%). World immersion is higher for men (26.7%) than women (18.6%).
- **Purchase reasons (Tables 3-72 / 3-73, payers n=1,903).**
  - Faster level-up is first-rank for 46.0% (teens 58.2%, 50s 52.9%).
  - Competitive advantage is first-rank for 32.3% (30s 36.0%, 40s 36.1%).
  - Cosmetics are first-rank for 15.3% (20s 19.3%, 60s 19.8%).
  - Multi-answer: men cite competitiveness more (69.7% vs 58.5%); women cite cosmetics more (33.3% vs 27.4%).
- **Indie games (Tables 3-110 to 3-113).**
  - 23.3% of PC, mobile and console gamers played an indie game in the past year (20s 32.7%, 30s 30.5%).
  - Discovery: marketing, ads and web 64.2%; influencers 36.7%; friends 35.0% (teens 47.8%).
  - Reasons (top 2): "fresh subject matter" 55.7%, indie art styles 33.6%, simple controls 32.2%, low price 22.1%.

**US, ESA 2026 [H14].** YouGov survey of 13,545 people (9,932 gamers), Feb 11–25 2026; genres played regularly on any platform, players aged 8+.

| Genre | All players | Notable splits |
|---|---|---|
| Puzzle | 59% | women 71%, men 49%; Boomers/Silent 74% |
| Arcade & other | 46% | |
| Action | 43% | |
| Shooter | 37% | |
| Skill & chance | 35% | |
| Role playing | 34% | Gen Z 47%, Millennials 44%; men 42%, women 24% |
| Racing | 32% | |
| Simulation | 32% | |
| Strategy | 31% | Gen Z 42%; men 39%, women 22% |
| Sports | 26% | |
| Fighting | 25% | |

- Households play on mobile 73%, PC 52%, console 44%.
- Adults play to "pass the time or relax" (66%), to "have fun" (66%) and to keep their "mind sharp" (32%).
- Top new-game attributes: price 52%, quality of gameplay 47%, story or premise 41%, genre 41%; online multiplayer only 15%.

Sensor Tower audience data (US Android, top 25 apps per genre by MAU) [H6 pp.30–31]: lifestyle, puzzle and tabletop skew female; sports, strategy and shooter skew male; RPG, action and simulation skew younger; tabletop, puzzle and casino skew older.

**Japan, Cross Marketing 2026 [H15].** Survey of 1,200 people aged 15–69 who play smartphone games at least monthly, June 24–28 2026.
- Genres (classified from 100 titles): puzzle 21%, action RPG 10%, command RPG 9%, location-based 9%, sports 8%, strategy 7%, simulation RPG 7%. Puzzle ranks #1 in every age band.
- 68% play every day (30s: 77%); 27% play longer than a year ago (ages 15–19: 46%).
- Reasons: "kill time" and "easy to play" are cited by 30–40%; stress relief, free variety and "like games" by about 15%.
- Of those who spent in the last month, 63% bought items or gacha and 26% bought a premium app.

---

## 3. Sources

| ID | Source | What it measures | Verified |
|---|---|---|---|
| H1 | GameAnalytics, *2025 Mobile Gaming Benchmarks* (PDF, Feb 2025). https://files.gameindustrylibrary.com/documents/mobile-gaming-benchmarks-2025.pdf (landing: gameanalytics.com/reports/2025-mobile-gaming-benchmarks) | 11,600 games, 9 regions, 16 genres, 1.48B avg MAU, Jan–Dec 2024. Genre chapter = per-genre median, monthly cohorts (pp.17–20) | Yes. PDF matches local `bench/ga2025.txt`; heat-map values transcribed from the embedded chart images |
| H2 | GameAnalytics, *2026 Mobile & PC Gaming Benchmarks* (local `bench/ga2026.txt`; gameanalytics.com/reports/2026-mobile-pc-gaming-benchmarks) | 16,262 live games (≥1k MAU), 2025; global and regional P50/P90/P99; no genre chapter | Yes |
| H3 | GameAnalytics, *Mobile Gaming Benchmarks Report: H1 2019*. https://investgame.net/wp-content/uploads/2023/06/H1-2019-Mobile-Benchmarks-Report-GameAnalytics.pdf | ~100K games, Jul 2018–Jun 2019; ARPPU, ARPDAU and conversion by genre (pp.18–23) | Yes (older than window) |
| H4 | Adjust, *The gaming app insights report: 2026 edition* (Mar 2026). https://investgame.net/wp-content/uploads/2026/03/2026-03-26-gaming-app-insights-report-2026_wp.pdf | Adjust top 5,000 + full dataset, Jan 2024–Jan 2026; D1, session length, day-0 sessions, CPI, paid/organic by 23 verticals and 24 countries | Yes. Vector-extracted values match the text |
| H5 | Adjust, *The gaming app insights report: 2025 edition* (Mar 2025). https://investgame.net/wp-content/uploads/2025/05/gamingreport2025_ebook_en.pdf | 2023–2024; D1 by genre and country, D30 statement (p.24) | Yes |
| H6 | Sensor Tower, *State of Gaming 2026* (2026-02-26). https://investgame.net/wp-content/uploads/2026/02/2026-02-26-sensor_tower__state_of_gaming_2026__en_wp.pdf | 2025 data; App Store + Google Play (China iOS only), gross. Product-model retention (p.24), hybridcasual IAP/IAA (p.26), breakouts (p.27), demographics (pp.30–31), live ops (pp.34–36), ad spend (p.42), download channels (p.44) | Yes (Sensor Tower-branded PDF on a mirror) |
| H7 | Sensor Tower, *State of Mobile Gaming 2025* (= E1). Local `research/src/st_smg2025.pdf` | 2024 data; definitions (p.8), genre downloads and IAP (pp.12–13), time share (p.16), launches (p.29) | Yes |
| H8 | Liftoff & Singular, *2025 Casual Gaming Apps Report* (2025-04-29). https://liftoff.ai/2025-casual-gaming-apps-report/ (chart images Singular-Graph-1/3/4 on that page); release: prnewswire.com/…302441607.html | Singular data Feb 2024–Feb 2025 (2.4B installs, $11.9B spend); CPI, IPM and D30 ROAS by genre × platform | Yes |
| H9 | AppsFlyer, *The State of App Monetization – 2026 Edition*. https://www.appsflyer.com/resources/reports/app-marketing-monetization-report/ | $900M IAP, $800M IAS, $7.2B IAA, Jan 2025–Mar 2026; D90 ARPU/ARPPU, conversion, paid share, model mix | Yes (page text; some chart values not in text) |
| H10 | AppsFlyer press release, *2024 State of App Monetization Report* (2024-12-03). https://www.appsflyer.com/company/newsroom/pr/app-monetization-report/ | $130M IAP, $40M subscription, $900M IAA, high-income markets, Q3 2024; ROAS by model | Yes |
| H11 | AppsFlyer, *State of Gaming for Marketers 2026* — press release (2026-01-14) https://www.appsflyer.com/company/newsroom/pr/gaming-marketing/ ; digest https://gamedevreports.substack.com/p/appsflyer-the-state-of-the-mobile (2026-01-20) | 9,600 games, 24.8B installs, 2025; paid-install shares by genre | Partial (genre splits only in digest) |
| H12 | AppMagic, *Mobile Games Monetization Report 2025* (data to 2025-10-22). https://appmagic.rocks/files/img-blog/EN_Monetization_Report_2025.pdf | IAP market 2023–25; payment behaviour of top-10 Tier-1 West titles per genre (US) | Yes (pp.4, 6, 14–18, 21–23, 29, 48, 51–55) |
| H13 | KOCCA, *2025 게임이용자 실태조사* (2025-12-18). Local `research/src/kocca2025.txt` (= E13) | n=10,000 aged 10–69; mobile n=4,477; fieldwork Jul 14–Aug 29 2025. Tables 3-42–45, 3-58–60, 3-68–73, 3-110–113; questionnaire C9 | Yes (new tables beyond E13) |
| H14 | ESA / YouGov, *2026 Essential Facts About the U.S. Video Game Industry*. https://www.theesa.com/wp-content/uploads/2026/06/2026-Essential-Facts-Booklet-05-27-26.pdf | n=13,545, Feb 11–25 2026, weighted to the US population; genres, motivations, attributes | Yes |
| H15 | Cross Marketing, *ゲームに関する調査（2026年）スマホゲーム編* (2026-07-22). https://www.cross-m.co.jp/hubfs/Report/release_files/news_release_20260722.pdf | Japan, n=1,200, June 24–28 2026; genres, frequency, reasons, spend | Yes |
| H16 | Quantic Foundry, *Gamer Motivation Model Reference v3* (Sep 2026). https://quanticfoundry.com/wp-content/uploads/2026/09/Gamer-Motivation-Model-Reference-v3.pdf | 12-motivation model, 2M+ gamers, example titles | Yes |
| H17 | Quantic Foundry (2024-05-21), as reported by Push Square (Khayl Adam, 2024-05-23). https://www.pushsquare.com/news/2024/05/bombshell-report-finds-players-becoming-less-interested-in-deep-strategy-games | Decline in Strategy motivation, 1.5M+ gamers, 2015–2024 | Secondary (QF page 403) |
| H18 | Royal Match: Balderton (2021-03-01) https://www.balderton.com/news/dream-games-secures-50m-series-a-and-launches-its-first-game-royal-match/ ; App Store listing https://apps.apple.com/us/app/royal-match/id1482155847 (accessed 2026-10-01); GameRevolution (2024-02-13) https://www.gamerevolution.com/guides/965308-royal-match-how-many-levels-can-you-beat-finish-complete | Team 30 → 75; biweekly levels; 7,300+ levels | Yes / Yes / Secondary |
| H19 | mobilegamer.biz (Neil Long): 2022-09-08 https://mobilegamer.biz/scopely-has-acquired-stumble-guys-from-kitka-games/ ; 2024-05-28 https://mobilegamer.biz/how-stumble-guys-beat-fall-guys-at-its-own-game/ | Stumble Guys team, downloads, revenue, growth | Yes |
| H20 | TechCrunch (2015-01-15) https://techcrunch.com/2015/01/15/monument-valley-team-reveals-the-cost-and-reward-of-making-a-hit-ios-game ; 80.lv (2015-01-16) https://80.lv/articles/monument-valley-revenue | Monument Valley cost, revenue, team | Yes (pre-window) |
| H21 | PocketGamer.biz (2024-10-03) https://www.pocketgamer.biz/balatro-approaches-1-million-in-seven-days-on-mobile/ ; GamingBolt (2024-11-27) https://gamingbolt.com/balatro-has-reportedly-earned-4-4-million-on-mobile-devices ; PocketGamer.com (2025-01-22) https://www.pocketgamer.com/balatro/five-million-sales/ | Balatro mobile revenue (AppMagic), total sales | Yes / Secondary / Yes |
| H22 | Game World Observer (2023-01-17) https://gameworldobserver.com/2023/01/17/vampire-survivors-mobile-3-million-downloads-appmagic ; VGC (2026-04-22) https://www.videogameschronicle.com/news/vampire-survivors-developer-is-working-on-over-15-games-including-working-with-famous-franchises/ | Vampire Survivors mobile model, downloads, team structure | Yes |
| H23 | TouchArcade (2021-02-03) https://toucharcade.com/2021/02/03/slay-the-spire-android-download-available-now-google-play-price/ ; Noisy Pixel (2026-03-13) https://noisypixel.net/slay-the-spire-2-three-million-sales-first-week/ ; GosuGamers (Mar 2026) https://www.gosugamers.net/entertainment/news/78130-slay-the-spire-ii-sells-3-3-million-copies-as-players-attempt-25-million-runs-in-first-week | Slay the Spire premium price; sequel sales | Yes / Secondary / Secondary |
| H24 | GameToc (2025-04-16) https://www.gametoc.co.kr/news/articleView.html?idxno=91267 ; G-Enews (2025-02-24) https://www.g-enews.com/article/ICT/2025/02/202502211643061580c5fa75ef86_1 ; NewsWay via Daum (2026-04-28) https://v.daum.net/v/20260428070902472 | Lucky Defense and 111% revenue, downloads, process | Yes |
| H25 | Inven, GDC24 report (2024-03-20) https://m.inven.co.kr/webzine/wznews.php?idx=294142 ; etnews (2025-04-16) https://www.etnews.com/20250416000271 | Legend of Slime team, revenue, gates, decline | Yes |
| H26 | mobilegamer.biz (2022-10-21) https://mobilegamer.biz/two-months-in-survivor-io-passes-75m-from-37m-downloads/ ; Deconstructor of Fun (2019-08) https://www.deconstructoroffun.com/blog/2019/8/9/why-archero-banked-25m-but-leaves-25m-hanging-hlx9n | Survivor.io (AppMagic) and Archero/Habby | Yes / Partial (headcount via LinkedIn) |
| H27 | 36Kr, republished from Rongzhong Finance (2026-03-03). https://eu.36kr.com/en/p/3706617203732616 | Block Blast MAU, ad revenue, staff | Secondary |
| H28 | PocketGamer.biz (2026-02-19). https://www.pocketgamer.biz/scopely-acquires-majority-stake-in-istanbuls-pixel-flow-developer-loom-games/ | Pixel Flow! team, valuation, rank | Yes |
| H29 | Wikipedia, *Genshin Impact*, Development section (citing PASH! 2021), accessed 2026-10-01. https://en.wikipedia.org/wiki/Genshin_Impact | Team size, budget | Secondary |

Cross-referenced (verified in other notes): E1, E11, E13, E19, E23–E26, E28–E30, E32, E33, E35, E40, E43 (now superseded by H8).

**Not found or not used**
- 2024–26 genre retention from AppsFlyer or Liftoff, and any Korea-only genre retention.
- 2024–26 GameAnalytics genre monetization; GA 2026 has no genre chapter.
- CPA by genre; Unity genre CPI; a Liftoff 2026 casual report or 2025/26 mid-core report.
- data.ai genre time spent (data.ai is now part of Sensor Tower).
- Quantic Foundry mobile genre profiles (site returned 403).
- Team sizes for Lucky Defense, Survivor.io, Capybara Go!, Kingshot and Slay the Spire.
- Poncle's revenue: Companies House figures were not opened.

---

## 4. Ten implications for an IAP-only, 5–10 person new game

1. **Pick the genre for its D7–D30 curve, not its D1.**
   - Medians differ little at D1 (15–22%) but about 7× at D28 (RPG 0.43% vs card 3.00%) [H1].
   - Game-specific D1 work (first 5–15 minutes) is needed in every genre.
   - Install-day sessions are about 1.65 everywhere [H4], so the first session must carry the hook.

2. **No genre gives retention, playtime and IAP all at once; combine two.**
   - Card, board, puzzle and word have the best median D28 (1.1–3.0%) and the most playtime (24–49 min/day).
   - But they monetize weakly per download: puzzle RPD $1.26, tabletop $0.57, tabletop D30 ROAS 7%/19% [H1, H7, H8].
   - RPG and strategy earn about 7–9× more per download than puzzle, but RPG has the worst median retention and strategy's D28 is below 1% [H7, H1].
   - The evidence-backed hybrid is a readable, replayable "classic-style" core with a collection/progression meta. Sensor Tower's top hybridcasual titles now beat casual on D7, and AppMagic shows roguelike, tactical RPG and card battler as the growing niches [H6, H12].

3. **IAP-only fits mid-core economics, not casual.**
   - 90% of midcore apps are IAP-only, and iOS mid-core IAP models returned 215% D90 ROAS vs 73% for hybrid [H9, H10].
   - On Android, hybrid beat IAP-only (146% vs 93%) [H10]. Korea's store revenue is about 75% Google Play [E11].
   - So an IAP-only design must replace ad-funded free currency with passes, subscriptions and daily rewards that convert non-payers' time into value. Lucky Defense's VIP subscription with no forced ads is the local proof [E35].

4. **In Korea, build for the 20s–30s collector and expect weak baseline retention.**
   - People in their 30s are the most likely to pay (≈51%) and spend the most (₩151k mean), and 20s–30s over-index on collectible RPGs (37.6–38.3%) [H13].
   - Purchases are driven by faster progression (46.0%) and competitiveness (32.3%) [H13].
   - Baselines are low: Asia's median D7 is 2.68% and D30 0.53% [H2]; Korean D1 is about 20% (Adjust) [H4].

5. **Budget for real Korean CPIs and long payback.**
   - Korea's blended gaming CPI is $1.50 (2025, +23%) and paid installs outnumber organic about 4:1 [H4].
   - Genre CPIs: RPG $4.29 / $8.29 and strategy $1.67 / $4.16 (Android/iOS) vs casual $0.14 / $1.41 [H8].
   - No genre pays back within 30 days (D30 ROAS 7–80%) [H8], so plan a 90–365-day LTV horizon or an organic engine.

6. **Prefer formats with organic pull.**
   - Mid-core earns the most organic revenue: 51% of IAP revenue (AppsFlyer) and 63.6% organic downloads among top titles (Sensor Tower). Hybridcasual is the most paid-display-dependent (50.6%) [H9, H6].
   - Small-team breakouts grew through creators and word of mouth (Stumble Guys) [H19].
   - Korean indie players discover games through influencers (36.7%) and value fresh subject matter (55.7%) [H13].

7. **Avoid handcrafted content treadmills; generate content from systems.**
   - Level-based puzzle needs new levels every two weeks [H18, E24]; gacha RPG needs hundreds of staff [H29].
   - Roguelite runs, deckbuilders, co-op defense and auto-battlers let 1–20 people ship (Balatro, Vampire Survivors, Legend of Slime, Pixel Flow!) [H21, H22, H25, H28].

8. **Ship a lean but proven live-ops kit at launch.**
   - Use an events menu (83.4% revenue-lift consistency), expeditions, a multi-tier season pass, collection albums and a subscription [H6].
   - The season pass is now standard in hybridcasual, and the median offer is $4.99 [H12].
   - Price ladders should differ by platform: in strategy, App Store ARPPU is up to 8× Google Play, and RPG first purchases on the App Store average $17.9 [H12].

9. **Gate scale-up on retention, not on launch spikes.**
   - Use GA's top-decile marks as "go" signals: D7 11–12% and D30 above 4% (West) or about 2.6% (Asia P90) [H2].
   - Treat a D7 near the median (under 4%) as "rework or kill."
   - Copy the cadence of the Korean successes: 111% works to a "good games within six months" principle with company-wide internal playtests [H24]; Legend of Slime required D1 50%+ in tests [H25].
   - Do not rely on paid UA to carry the game. Legend of Slime's revenue fell 88% in the year its ad spend was cut [H25].

10. **Shortlist** (evidence-weighted; consistent with E-notes Part 4).
    - **(a) A roguelite or auto-battler** with a card- or board-like readable core and a collection meta. It draws on classic-genre retention and playtime, the growing roguelike, tactical and card-battler pools, and Action & Strategy hybrid's 81.9% IAP share [H1, H12, H6].
    - **(b) Co-op or async luck-and-strategy defense** (Lucky Defense: ₩120B+ in about a year) [H24].
    - **(c) A puzzle game only with a novel, procedurally generated core.** Puzzle UA is the most crowded per IAP dollar (56.2% of US ad spend vs 41.3% of IAP), and level treadmills are costly [H6, H18].
    - **Avoid** 4X, gacha RPG, casino and real-time PvP: CPI, content load, regulation and liquidity all work against a 5–10 person team [H8, H29, E28].
