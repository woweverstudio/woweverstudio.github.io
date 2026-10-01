# B. Data-driven research on retention, churn, difficulty and onboarding

*Research brief for a new free-to-play mobile game that earns money only from in-app purchases and subscriptions (no ads). Compiled 2026-10-01.*

## How the sources were checked

- **Search channels.** I used web search until its session budget ran out. After that I used the Crossref API, the Semantic Scholar API and website, arXiv PDFs, HAL (the French open archive), Europe PMC, AAAI OJS, and author or repository PDFs.
- **Bibliographic check.** For every source, I checked the title, authors, year, venue and DOI against Crossref or the publisher's record.
- **Verification labels used below:**
  - **yes-FT**: I read the full text, and numbers come from the paper itself.
  - **yes-AB**: I checked the bibliographic record and the official abstract, but the full text was paywalled.
  - **partial**: some details come from a working-paper version or a secondary summary. Each partial entry says which details.
- **Study design.** Most telemetry studies here are correlational. Causal claims are marked only where the study was a randomized experiment (A/B test, RCT or field experiment). Several entries report null results on purpose.

---

## 1. Interest decay, churn prediction and retention analytics

**[B1] Bauckhage, C., Kersting, K., Sifa, R., Thurau, C., Drachen, A., & Canossa, A. (2012). How players lose interest in playing a game: An empirical study based on distributions of total playing times. IEEE Conference on Computational Intelligence and Games (CIG), 139–146.**
DOI: 10.1109/CIG.2012.6374148
- **Verified:** yes-AB. The sample size is also confirmed by Sifa et al. 2014 (B2).
- **Data and method:** Total-playtime telemetry for more than 250,000 players of five commercial action-adventure and shooter games. Lifetime and random-process analysis.
- **Key findings:**
  - In all five games, the Weibull distribution describes total playing time well.
  - An average player's interest therefore evolves like a non-homogeneous Poisson process.
  - Given a player's early playtime, it becomes possible to predict when they will stop.
- **Implication:** Interest decay is regular and predictable. Model each cohort's expected lifetime from early data, and assume that most players' total engagement will be short unless the design actively extends it.

**[B2] Sifa, R., Bauckhage, C., & Drachen, A. (2014). The Playtime Principle: Large-scale cross-games interest modeling. IEEE CIG 2014, 1–8.**
DOI: 10.1109/CIG.2014.6932906
- **Verified:** yes-FT.
- **Data and method:** Steam playtime for more than 6 million players across more than 3,000 PC and console games (3,007 modeled), over 5 billion hours in total. Weibull fits plus kernel archetypal clustering.
- **Key findings:**
  - The same Weibull model fits playtime across thousands of games. The authors call this the "Playtime Principle".
  - Four archetypes of playtime curve emerged. In one (Z2), interest rises until about 4 hours and then falls quickly.
  - "The vast majority of games are played for less than 10 hours, and very few players spend more than 30–35 hours on any specific game."
  - **Caveat:** the data are mostly premium PC titles, not free-to-play mobile games.
- **Implication:** Long playtime is the exception. Reaching hundreds of hours requires deliberate systems such as social play, renewing goals and live content, rather than a single strong core loop.

**[B3] Hadiji, F., Sifa, R., Drachen, A., Thurau, C., Kersting, K., & Bauckhage, C. (2014). Predicting player churn in the wild. IEEE CIG 2014, 1–8.**
DOI: 10.1109/CIG.2014.6932876
- **Verified:** yes-FT.
- **Data and method:** Five commercial free-to-play games across mobile and web social platforms, with several hundred thousand players and millions of sessions. Game-agnostic features. Decision trees performed best overall.
- **Key findings:**
  - The most decisive features were number of sessions and number of days since install (the root split of every tree).
  - In the sliding-window setup, average time between sessions was the most important feature and appeared in every tree. Current absence time was always in the top five.
  - Where most players churn after one or two sessions (the paper's "game 4"), churn prediction "seems to become a random process". The earliest churn cannot be fixed with CRM (targeted messages and offers); it has to be fixed in the design.
- **Implication:** Instrument the gap between sessions and the current absence as primary early-warning signals. Fix first-session churn through design, not through messages.

**[B4] Runge, J., Gao, P., Garcin, F., & Faltings, B. (2014). Churn prediction for high-value players in casual social games. IEEE CIG 2014, 1–8.**
DOI: 10.1109/CIG.2014.6932875
- **Verified:** partial. Bibliographic record and abstract checked. The A/B percentages come from a secondary summary of the paper (N. Lim, *Game Developer*, 14 Oct 2014).
- **Data and method:**
  - Wooga's *Diamond Dash* and *Monster World*, each with millions of players.
  - Target group: the top 10% of spenders over the last 30 days who had been active in the last 14 days. Churn meant no login for 14 days.
  - Four classifiers plus a hidden Markov model (HMM); a neural network performed best (AUC 0.76–0.93 per the summary).
  - A/B test on one game, offering free in-game currency through Facebook, email and in-game notices:
    - A (40%): win-back offer after 14 days of inactivity.
    - B (40%): offer sent shortly before the predicted churn.
    - C (20%): control.
- **Key findings:**
  - **Null result:** "Giving out free in-game currency does not significantly impact the churn rate or monetization of players."
  - Churn rose in every group:

    | Group | Churn before | Churn after |
    |---|---|---|
    | A (win-back) | 7.8% | 11.06% |
    | B (predictive) | 8.4% | 11.39% |
    | C (control) | 6.77% | 10.29% |

    The differences from control were not significant (A vs C p = 0.57; B vs C p = 0.41).
  - Contacting players before predicted churn greatly raised response. Email click rate was 10.95% vs 2.16%, and Facebook click rate 17.86% vs 4.06%.
  - The authors conclude that players "can only be retained by remarkably changing their gameplay experience ahead of the churn event".
- **Implication:** Do not rely on currency gifts to retain at-risk players, including payers. Spend the effort on gameplay-level changes, and time any contact before the player has disengaged.

**[B5] Periáñez, Á., Saas, A., Guitart, A., & Magne, C. (2016). Churn prediction in mobile social games: Towards a complete assessment using survival ensembles. IEEE International Conference on Data Science and Advanced Analytics (DSAA), 564–573.**
DOI: 10.1109/DSAA.2016.84 (arXiv:1710.02264)
- **Verified:** yes-FT.
- **Data and method:**
  - Silicon Studio's *Age of Ishtaria*, a Japanese free-to-play mobile RPG with several million players.
  - Churn meant 10 consecutive days without connecting.
  - Kaplan-Meier survival curves on 1.5 million players. Survival ensembles of 1,000 conditional-inference trees, trained on 2,500 "whales" (top spenders), compared with Cox regression.
- **Key findings:**
  - Non-paying players survive far worse than payers. The authors write that about 80% of non-paying players "have churned the first day they connected to the game", versus a 20% churn rate for whales after 100 days.
  - Whales who returned after 10 or more days of inactivity generated only 1.4% of whale revenue afterwards.
  - The top risk splits were the last level reached and days since the last purchase.
  - The survival ensembles were more accurate and robust than Cox regression.
  - Citing industry figures, the authors note whales are about 0.15% of players (about 10% of payers) and produce about 50% of in-app purchase revenue.
- **Implication:** For payers, act before about 10 days of inactivity. Stalled progression and time since last purchase are risk signals, and once a valuable player lapses, little revenue comes back.

**[B6] Drachen, A., Lundquist, E. T., Kung, Y., Rao, P., Sifa, R., Runge, J., & Klabjan, D. (2016). Rapid prediction of player retention in free-to-play mobile games. Proceedings of AAAI AIIDE, 12(1), 23–29.**
DOI: 10.1609/aiide.v12i1.12856 (arXiv:1607.03202)
- **Verified:** yes-FT.
- **Data and method:**
  - Wooga's *Jelly Splash* on iOS: 137,397 installs from a one-week cohort in 2014, about 112,000 analyzed, more than 15 million sessions.
  - "Retained" meant at least one round played on days 7–14.
  - Simple decision-tree heuristics compared with logistic regression, SVM and random forest.
- **Key findings:**
  - Only 40.5% of players were retained, so the naive baseline accuracy is 59.5%.

    | Data used | Accuracy |
    |---|---|
    | First session only | 0.613 (little predictive power) |
    | First day | 0.686 |
    | First week | 0.786 |

  - Simple trees with 3–4 rules came within 0.3–1.2 percentage points of the machine-learning models.
  - The key day-1 variables were rounds played, current absence time and maximum level reached. An absence of more than 20 hours after install reliably signalled churn.
- **Implication:** Design so that players return within about 20 hours of install, and make visible level progress on day 1. Simple rules running on the device can trigger help immediately.

**[B7] Viljanen, M., Airola, A., Heikkonen, J., & Pahikkala, T. (2018). Playtime measurement with survival analysis. IEEE Transactions on Games, 10(2), 128–138.**
DOI: 10.1109/TCIAIG.2017.2727642 (arXiv:1701.02359)
- **Verified:** yes-FT.
- **Data and method:** Tribeflame's *Hipster Sheep*, a free-to-play puzzle game with an energy mechanic and in-app purchases. 3,753 paid-acquisition players across three builds. Kaplan-Meier curves, hazard estimates and log-rank tests.
- **Key findings:**
  - Median total playtime rose from 0.60 hours (v1.11) to 0.77 hours (v1.15 and v1.18).
  - Mean playtime rose from 1.55 to 2.21 to 2.41 hours. The difference between v1.11 and the later builds was significant.
  - The churn hazard started at about 0.6 churns per hour, halved to about 0.3 within the first 4 hours, and settled near 0.2 per hour after 10 hours.
  - The authors argue that good level design shows roughly uniform churn. Unexpected spikes point to flaws.
- **Implication:** Report retention as survival and hazard curves by playtime and by level, and compare builds with log-rank tests. Hunt for local spikes in the hazard.

**[B8] Tamassia, M., Raffe, W., Sifa, R., Drachen, A., Zambetta, F., & Hitchens, M. (2016). Predicting player churn in Destiny: A hidden Markov models approach to predicting player departure in a major online game. IEEE CIG 2016, 1–8.**
DOI: 10.1109/CIG.2016.7860431
- **Verified:** yes-FT.
- **Data and method:** *Destiny*: more than 10,000 players (24,118 characters) over 17 months, 1.8 million hours in total and 158 hours per player on average. Weekly feature sequences modeled with an HMM.
- **Key findings:**
  - The best features were mean lifespan (seconds played per death), kill-death ratio, ratio of activities completed, current absence, current absence relative to mean absence, and share of weeks present.
  - Median HMM AUC was 0.80 (range 0.69–0.86), with high precision and low recall.
  - The authors note the right balance depends on the incentive: if it is costly, favour precision; if it is cheap, favour recall.
- **Implication:** Failure-related frustration (dying, abandoning activities) and changes in absence pattern signal churn. Match the cost of an intervention to the classifier's error profile.

**[B9] Debeauvais, T., Nardi, B., Schiano, D. J., Ducheneaut, N., & Yee, N. (2011). If you build it they might stay: Retention mechanisms in World of Warcraft. Proceedings of FDG 2011, 180–187.**
DOI: 10.1145/2159365.2159390
- **Verified:** yes-FT.
- **Data and method:** Online survey of 2,865 *World of Warcraft* players in North America, Europe, Taiwan and Hong Kong. Self-reported, correlational.
- **Key findings:**
  - 77% had stopped playing at some point.
  - Stop rate fell as guild responsibility rose:

    | Guild position | Stopped at some point | Hours per week |
    |---|---|---|
    | Not in a guild | 88% | 19 |
    | Guild member | 79% | 22 |
    | Officer or guild master | 71% | 24 |

  - Playing with real-life friends or family did not significantly change retention metrics overall.
  - Socially motivated players played more hours and more years, but were also more likely to stop.
- **Implication:** Give players roles and responsibility inside groups (officer-like duties), not just membership. That investment correlates with commitment.

**[B10] Park, K., Cha, M., Kwak, H., & Chen, K.-T. (2017). Achievement and friends: Key factors of player retention vary across player levels in online multiplayer games. WWW '17 Companion, 445–453.**
DOI: 10.1145/3041021.3054176 (arXiv:1702.08005)
- **Verified:** yes-FT.
- **Data and method:** In-game logs from the MMORPG *Fairyland Online*: 51,104 players and about 60 million activities.
- **Key findings:**
  - Achievement features (rare items, virtual money) predict retention from the start through the advanced phase.
  - At maximum level, social features become the most predictive.
  - Number of friends is a significant retention indicator at every phase.
- **Implication:** Lead with progression and achievement early. Deliberately move players into social systems before they reach the content cap.

**[B11] Sifa, R., Hadiji, F., Runge, J., Drachen, A., Kersting, K., & Bauckhage, C. (2015). Predicting purchase decisions in mobile free-to-play games. Proceedings of AAAI AIIDE, 11(1), 79–85.**
DOI: 10.1609/aiide.v11i1.12788
- **Verified:** yes-FT.
- **Data and method:** A Wooga free-to-play mobile puzzle game: more than 100,000 new installs from one week, followed for 30 days. Random forests with SMOTE oversampling.
- **Key findings:**
  - Future paying players were under 2% of the cohort.
  - The strongest predictor of purchasing was a prior purchase.
  - Social interactions, move counts, world reached, device and playtime were also important.
  - Time-related features matter for purchasing, as they do for churn.
- **Implication:** Under in-app-purchase-only monetization, revenue sits on top of retention and engagement. The first purchase is the key transition, so make an early, high-value first purchase easy.

**[B12] Drachen, A., Pastor, M., Liu, A., Fontaine, D. J., Chang, Y., Runge, J., Sifa, R., & Klabjan, D. (2018). To be or not to be... social: Incorporating simple social features in mobile game customer lifetime value predictions. Proceedings of ACSW 2018, 1–10.**
DOI: 10.1145/3167918.3167925
- **Verified:** yes-AB.
- **Data and method:** A casual free-to-play mobile game with more than 200,000 players. Classifiers and regressions on simple social-interaction features.
- **Key findings:**
  - **Null result:** "Social activity does not correlate with the tendency to become a premium user."
  - Social activity increases over time within a cohort.
- **Implication:** Justify social features by retention and playtime (see B10 and B40), not by direct conversion.

**[B13] Xiong, Y., Wu, R., Zhao, S., Tao, J., Shen, X., Lyu, T., Fan, C., & Cui, P. (2023). A data-driven decision support framework for player churn analysis in online games. Proceedings of ACM KDD 2023, 5303–5314.**
DOI: 10.1145/3580305.3599759
- **Verified:** yes-AB.
- **Data and method:** NetEase (with Tsinghua University). Applied to the large-scale online game *Justice* (PC). Explainable-AI churn prediction combined with analysis of likely churn causes.
- **Key findings:**
  - Publishers struggle to act on accurate churn predictions without knowing why players leave and what to do next.
  - The framework produces causes that feed revision or intervention decisions, and the game's product and operations teams reviewed it positively.
  - The abstract reports no intervention effect sizes.
- **Implication:** Build the churn pipeline to output causes (for example, stuck at a specific level or socially isolated) that go to the design team, not just risk scores.

---

## 2. Difficulty, dynamic difficulty adjustment (DDA) and matchmaking

**[B14] Xue, S., Wu, M., Kolen, J., Aghdaie, N., & Zaman, K. A. (2017). Dynamic difficulty adjustment for maximized engagement in digital games. WWW '17 Companion, 465–471.**
DOI: 10.1145/3041021.3054170
- **Verified:** yes-AB. The full text was blocked.
- **Data and method:** Electronic Arts (EA). Player progression in level-based games is modeled as a probabilistic graph that includes a churn state. Difficulty is set to maximize the player's expected time in the graph. Deployed in several EA games.
- **Key findings:** "Up to 9% improvement in player engagement with a neutral impact on monetization." The abstract does not define the engagement metric or the per-game effect sizes.
- **Implication:** Adjusting difficulty to optimize expected future play, especially after repeated failure, can raise engagement without lowering revenue.

**[B15] Chen, Z., Xue, S., Kolen, J., Aghdaie, N., Zaman, K. A., Sun, Y., & Seif El-Nasr, M. (2017). EOMM: An engagement optimized matchmaking framework. Proceedings of WWW 2017, 1143–1150.**
DOI: 10.1145/3038912.3052559 (arXiv:1702.06820)
- **Verified:** yes-FT.
- **Data and method:** 36.9 million one-on-one matches by 1.68 million players of an EA game (first half of 2016). Churn model, plus a simulation comparing matchmaking policies. This was not a live A/B test.
- **Key findings:**
  - Churn risk within 7 days, by the last three match outcomes:

    | Last three outcomes | 7-day churn risk |
    |---|---|
    | Safest mixed states (e.g. DLW, LLW, LDW, DDD) | 2.6–2.7% |
    | Three wins (WWW) | 3.7% |
    | Mixed losses (DLL, LWL, LDL) | 4.6–4.7% |
    | Two wins then a loss (WWL) | 4.9% |
    | Three losses (LLL) | 5.1% |

  - Pure skill matching did not consistently beat random matching.
  - In simulation, engagement-optimized matching retained 0.3–1.1% more players per round than skill matching (0.7% on average). The authors extrapolate this compounds over many rounds.
- **Implication:** Losing streaks roughly double short-term churn risk, and win streaks are not the safest state either. Mixed outcomes ending in a win are best. Use loss-streak protection, but avoid hidden outcome manipulation that players may perceive as unfair.

**[B16] Wang, K., Liu, H., Hu, Z., Feng, X., Zhao, M., Zhao, S., Wu, R., Shen, X., Lv, T., & Fan, C. (2024). EnMatch: Matchmaking for better player engagement via neural combinatorial optimization. Proceedings of AAAI, 38(8), 9098–9106.**
DOI: 10.1609/aaai.v38i8.28760
- **Verified:** yes-FT.
- **Data and method:** NetEase Fuxi AI Lab. Data from two team PvP games (3-vs-3 and 15-vs-15), followed by a two-week online A/B test.
- **Key findings:**
  - After three straight losses, churn was 8.4% for players in main roles versus 6.2% for support roles. After three straight wins, it was 4.9% versus 5.9%.
  - Mixed-skill teams had more positive social behaviour than equal-skill teams. After wins they had 19.2% more chat and 15.8% more upvotes, plus 12.3% fewer downvotes.
  - Online, engagement-aware matching increased total matches played by 1.64% in one game and 7.19% in the other, compared with the best baseline.
- **Implication:** Match quality affects retention beyond fairness. Role and team composition matter most after losses, and engagement-aware matchmaking produced measurable gains in live tests.

**[B17] Chen, M., Elmachtoub, A. N., & Lei, X. (2026). Matchmaking strategies for maximizing player engagement in video games. Management Science.**
DOI: 10.1287/mnsc.2023.02957. Published online 6 February 2026 as an "article in advance".
- **Verified:** yes-AB.
- **Data and method:** A dynamic model with players of different skill levels who dislike losing and churn after a losing streak. Calibrated with data from an online chess platform.
- **Key findings:**
  - The best matchmaking policy balances short-term match outcomes against the long-run skill mix of the player population.
  - In the model, pay-to-win can raise engagement when most players are low-skilled. This is a model result, not an experiment.
  - Optimizing matchmaking reduces the number of AI bots needed.
  - In the chess case study, the optimal policy raised engagement by 4–6%, or cut the share of bots by 3%, compared with skill-based matching.
- **Implication:** Losing-streak aversion is a sound modeling basis for matchmaking. Expect gains in the single-digit percent range, and treat pay-to-win findings as theory, not evidence.

**[B18] Allart, T., Levieux, G., Pierfitte, M., Guilloux, A., & Natkin, S. (2017). Difficulty influence on motivation over time in video games using survival analysis. Proceedings of FDG '17.**
DOI: 10.1145/3102071.3102085
- **Companion paper:** Allart et al. (2016), "Design influence on player retention: A method based on time varying survival analysis", IEEE CIG, DOI 10.1109/CIG.2016.7860421. It uses *Far Cry 4* weapon-usage data (verified yes-AB).
- **Verified:** yes-FT.
- **Data and method:** Ubisoft telemetry from *Rayman Legends* and *Tom Clancy's The Division*. Difficulty was estimated as the probability of failure with a mixed-effects logistic model (AUC 0.80 and 0.81). Time-varying Cox survival models. Correlational; sample size not reported.
- **Key findings:**
  - Overall, harder content was associated with less quitting:
    - In *Rayman*, at hour 12, a 20-point higher difficulty meant about 15% higher odds of staying.
    - In *The Division*, a player facing 30% difficulty had 21% higher odds of continuing than one facing 10%, rising to 27% after 8 hours.
  - Estimated difficulty was mostly 15–30% failure, well below a 50% "balanced" level.
  - In *Rayman*, sharp increases in difficulty during the first hours were associated with worse retention.
  - In *The Division*, difficulty changes had no effect. The authors attribute this to failure being blamed on avatar power, which players can quickly improve, rather than on personal skill.
- **Implication:** Keep the early difficulty curve smooth and forgiving, then let challenge rise. Give players controllable remedies for failure, such as upgrades, preparation and alternative routes, so failure is not felt as a pure lack of skill.

**[B19] Lomas, D., Patel, K., Forlizzi, J. L., & Koedinger, K. R. (2013). Optimizing challenge in an educational game using large-scale design experiments. Proceedings of CHI 2013, 89–98.**
DOI: 10.1145/2470654.2470668
- **Verified:** yes-AB.
- **Data and method:** Two randomized online experiments in the maths game *Battleship Numberline*: about 10,000 players (2×3 design) and about 70,000 players (2×9×8×4×25 design). The test was of the "inverted-U" hypothesis that moderate challenge maximizes engagement.
- **Key findings:**
  - "In almost all cases, subjects were more engaged and played longer when the game was easier," which contradicts the generality of the inverted-U hypothesis.
  - The most engaging conditions produced the slowest learning.
- **Implication:** When difficulty is imposed rather than chosen, easier usually keeps people playing longer. Challenge has to be chosen or framed, not forced.

**[B20] Lomas, J. D., Koedinger, K., Patel, N., Shodhan, S., Poonwala, N., & Forlizzi, J. L. (2017). Is difficulty overrated? The effects of choice, novelty and suspense on intrinsic motivation in educational games. Proceedings of CHI 2017, 1028–1039.**
DOI: 10.1145/3025453.3025638
- **Verified:** yes-AB.
- **Data and method:** Three randomized experiments with more than 20,000 play sessions in total.
- **Key findings:**
  - Experiment 1 (n = 10,472): moderately difficult levels were most motivating when players chose them, but the easiest levels were most motivating when difficulty was assigned.
  - Experiment 2 (n = 5,065): moderate novelty was best; too much or too little novelty reduced motivation.
  - Experiment 3 (n = 6,511): suspense in close games helped.
  - The authors' conclusion is to make games "not too hard, not too boring".
- **Implication:** Offer opt-in harder challenges (side modes, hard variants with better rewards). Keep the default path easy, and sustain motivation with novelty and close outcomes rather than raw difficulty.

**[B21] Constant, T., & Levieux, G. (2019). Dynamic difficulty adjustment impact on players' confidence. Proceedings of CHI 2019, 1–12.**
DOI: 10.1145/3290605.3300693 (HAL: hal-02141897)
- **Verified:** yes-FT.
- **Data and method:** Lab and online experiment with 138 participants (median age 15) across three games testing logical, motor and sensory skills. Balanced DDA, converging to about 50% failure, was compared with random difficulty. Confidence was measured with in-game bets.
- **Key findings:**
  - DDA produced stronger overconfidence. In the motor game, at a 78% objective failure rate, players estimated 37% failure under DDA versus 72% under random difficulty.
  - In the logical game, at 84% objective failure, the estimates were 38% versus 63%.
  - There was no significant difference in the sensory game.
  - Retention was not measured.
- **Implication:** Adaptive difficulty can keep players feeling capable even when objective failure is high. That helps motivation, but use it transparently and ethically, especially next to paid boosts.

**[B22] Linehan, C., Bellord, G., Kirman, B., Morford, Z. H., & Roche, B. (2014). Learning curves: Analysing pace and challenge in four successful puzzle games. Proceedings of CHI PLAY 2014, 181–190.**
DOI: 10.1145/2658537.2658695
- **Verified:** yes-AB.
- **Data and method:** Play-through videos of *Portal*, *Portal 2* co-op, *Braid* and *Lemmings*, analysed with behavioural-psychology problem-solving metrics. Descriptive; no player data.
- **Key findings:** All four games follow the same pattern:
  1. Each main skill is introduced separately.
  2. It appears first in simple puzzles that need only that skill.
  3. Players then practise it and combine it with earlier skills.
  4. Complexity rises until the next new skill appears.
- **Implication:** Pace content in that cycle: introduce one mechanic, practise it, combine it with others, raise the difficulty, then introduce the next. The same cycle suits both onboarding and live-ops content drops.

**[B23] Roohi, S., Relas, A., Takatalo, J., Heiskanen, H., & Hämäläinen, P. (2020). Predicting game difficulty and churn without players. Proceedings of CHI PLAY 2020, 585–593.**
DOI: 10.1145/3410404.3414235 (arXiv:2008.12937)
- **Companion paper:** Roohi, Guckelsberger, Relas, Heiskanen, Takatalo & Hämäläinen (2021), "Predicting game difficulty and engagement using AI players", Proc. ACM HCI 5(CHI PLAY), Article 231, DOI 10.1145/3474658.
- **Verified:** yes-FT for 2020; yes-AB for 2021.
- **Data and method:** Rovio's *Angry Birds Dream Blast*: 168 levels and 95,266 players. A level counted as a churn point if the player did not play for 7 days after trying it. Deep reinforcement-learning AI players plus a simulation of a population with varying skill, persistence and boredom. The 2021 paper adds Monte Carlo tree search and features from the agents' best runs.
- **Key findings:**
  - Across all churn, the correlation between level pass rate and churn was small (Spearman r = −0.144).
  - For players who churned without completing a level, it was large (r = −0.586).
  - In later levels, low pass rates caused less churn because the less persistent players had already left (a survivor effect).
  - AI playtesting plus a population simulation predicted per-level pass and churn rates before release.
- **Implication:** Early hard levels remove less persistent players, so tune difficulty spikes by player tenure. Use AI playtesting to flag levels likely to cause churn before shipping.

**[B24] Gudmundsson, S. F., Eisen, P., Poromaa, E., Nodet, A., Purmonen, S., Kozakowski, B., Meurling, R., & Cao, L. (2018). Human-like playtesting with deep learning. IEEE CIG 2018, 1–8.**
DOI: 10.1109/CIG.2018.8490442
- **Verified:** yes-AB.
- **Data and method:** King. A convolutional neural network trained on real player moves in *Candy Crush Saga* and *Candy Crush Soda Saga*, which together have thousands of levels.
- **Key findings:** The network predicts the most "human" move and level difficulty. It correlates better with average level difficulty than Monte Carlo tree search, at a fraction of the computing cost.
- **Implication:** For a level-based game with a continuous content pipeline, train a human-like agent to estimate difficulty before release.
- **Note:** I found no public, peer-reviewed King paper that reports difficulty-churn relationships directly.

**[B25] Li, J., Lu, H., Wang, C., Ma, W., Zhang, M., Zhao, X., Qi, W., Liu, Y., & Ma, S. (2021). A difficulty-aware framework for churn prediction and intervention in games. Proceedings of ACM KDD 2021, 943–952.**
DOI: 10.1145/3447548.3467277
- **Verified:** yes-AB. The full text was not accessible, so no effect sizes.
- **Data and method:** A real-world puzzle game. The framework builds a per-player "difficulty flow" and personalized perceived difficulty, models churn with a survival model, and runs an online difficulty-adjustment intervention.
- **Key findings:**
  - Difficulty features significantly improved churn prediction.
  - In an online A/B test, the difficulty intervention "enhances user retention and engagement significantly". The abstract gives no magnitudes.
- **Implication:** Perceived difficulty for each player, based on their own recent failures, is a churn driver you can act on through personalized difficulty.

**[B26] Ascarza, E., Netzer, O., & Runge, J. (2025). Personalized game design for improved user retention and monetization in freemium games. International Journal of Research in Marketing, 42(4), 975–995.**
DOI: 10.1016/j.ijresmar.2025.01.006
- **Verified:** partial. The published record was checked on Crossref. The content comes from the authors' SSRN working-paper abstracts (2021: 10.2139/ssrn.3725224; 2024: 10.2139/ssrn.4653319). The published full text was paywalled.
- **Data and method:** A large-scale randomized field experiment in a popular free-to-play mobile game. Difficulty was lowered at random for players at risk of churning. Heterogeneous-effects analysis.
- **Key findings:**
  - An easier game significantly reduced purchases in the round being played.
  - It also increased immediate play and long-term retention.
  - As a result, spending increased significantly in both the short and long run.
  - Players more likely to make progress responded more strongly. Prior spenders showed the strongest long-term effect on in-app purchases.
  - **Caveat:** the game also earned ad revenue, but the spending effect concerns premium purchases.
- **Implication:** This is the strongest causal evidence that making the game harder to force purchases reduces lifetime revenue, at least among at-risk players. Ease difficulty for at-risk players instead, especially past spenders.

---

## 3. Onboarding, tutorials and the first-time user experience (FTUE)

**[B27] Andersen, E., O'Rourke, E., Liu, Y.-E., Snider, R., Lowdermilk, J., Truong, D., Cooper, S., & Popović, Z. (2012). The impact of tutorials on games of varying complexity. Proceedings of CHI 2012, 59–68.**
DOI: 10.1145/2207676.2207687
- **Verified:** yes-FT.
- **Data and method:** A multivariate online experiment testing eight tutorial designs in *Refraction*, *Hello Worlds* and *Foldit*, with more than 45,000 players.
- **Key findings:**
  - Tutorials increased play time by up to 29% and progress by up to 75%, but only in the most complex and unconventional game (*Foldit*).
  - **Null result:** tutorials had a negligible effect in the two simpler, genre-typical games.
  - Instructions given in context, just when needed, raised play time by 16% and progress by 40% in *Foldit*, with no effect elsewhere.
  - There was no evidence that restricting player freedom during the tutorial helps.
  - On-demand help improved engagement in *Foldit*, had no effect in *Hello Worlds*, and had negative effects in *Refraction*.
- **Implication:** Scale tutorial investment to how novel the mechanics are. Teach just in time and in context, let players experiment, and avoid front-loaded text.

**[B28] Cheung, G. K., Zimmermann, T., & Nagappan, N. (2014). The first hour experience: How the initial play can engage (or lose) new players. Proceedings of CHI PLAY 2014, 57–66.**
DOI: 10.1145/2658537.2658540
- **Verified:** yes-FT.
- **Data and method:** Microsoft Research. Qualitative analysis of 247 reviews (212 Amazon reviews across 30 genres and 35 long-form critic reviews), plus interviews with industry professionals.
- **Key findings:**
  - "Deal-breakers", such as too many unskippable cut-scenes, override otherwise good play.
  - Players skip tutorials and crafting to "get to the action".
  - "Holdouts", meaning anticipated future elements, keep players going despite annoyance.
  - "Intrigue trumps enjoyment." Showing unaffordable items or an early taste of power fixes an anticipated goal in the player's mind.
- **Implication:** Remove forced waits and unskippable sequences, reach the core action fast, and show the depth and power ahead in the first session.

**[B29] Petersen, F. W., Thomsen, L. E., Mirza-Babaei, P., & Drachen, A. (2017). Evaluating the onboarding phase of free-to-play mobile games: A mixed-methods approach. Proceedings of CHI PLAY 2017, 377–388.**
DOI: 10.1145/3116595.3125499
- **Verified:** yes-FT.
- **Data and method:** Lab study with 28 participants playing the onboarding (about 7 minutes) of *Candy Crush Jelly Saga* (King), *WinterForts* and *Pogo Chick*. Measures: skin conductance and heart-rate variability, experience graphs, stimulated-recall interviews, and flow and post-game questionnaires.
- **Key findings:**
  - Poorly designed onboarding was identified as a main reason for high free-to-play churn.
  - Negative elements:
    - 19 of 28 participants were annoyed at being forced to wait while battles resolved automatically.
    - 24 of 28 were frustrated after repeated deaths.
    - Players also disliked waits during end-of-level animations and a lack of autonomy.
  - Participants said music added to the experience (79% for *WinterForts*), but many said they usually play with the sound off.
  - **Caveat:** small sample, lab setting.
- **Implication:** In the first minutes, avoid waiting, avoid repeated early failure, and give real choices. Do not rely on audio to carry onboarding.

**[B30] O'Rourke, E., Haimovitz, K., Ballweber, C., Dweck, C., & Popović, Z. (2014). Brain points: A growth mindset incentive structure boosts persistence in an educational game. Proceedings of CHI 2014, 3339–3348.**
DOI: 10.1145/2556288.2557157
- **Verified:** yes-FT.
- **Data and method:** Randomized experiment with 15,491 children playing *Refraction* on BrainPOP, 7,500 per condition analysed. "Brain points" rewarded effort, strategy and incremental progress; the control rewarded level completion.
- **Key findings:**
  - Median active play time was 118 seconds versus 89 seconds.
  - Players completed 6.7 versus 5.5 unique levels on average.
  - More low-performing players persisted, and players showed more strategy use and perseverance after a challenge.
  - Effects were statistically significant but small (r = 0.07).
- **Implication:** Reward effort, attempts and partial progress, not only wins. This keeps struggling players playing at almost no cost.

---

## 4. Skill learning and play patterns

**[B31] Stafford, T., & Dewar, M. (2014). Tracing the trajectory of skill learning with a very large sample of online game players. Psychological Science, 25(2), 511–518.**
DOI: 10.1177/0956797613511466
- **Verified:** yes-FT (author postprint).
- **Data and method:** 854,064 players of *Axon*, a browser game by Preloaded for the Wellcome Trust.
- **Key findings:**
  - Practice amount and spacing both relate lawfully to later performance.
  - Players who spread their first 10 plays over more than 24 hours scored higher on plays 11–15 (mean best 47,264 vs 44,050). The effect was small (d = 0.11).
  - Higher score variability in the first five plays (exploration) went with higher later performance (r = 0.59 at percentile-group level).
- **Implication:** Encourage play spaced across days and early experimentation. Both support mastery, which keeps play satisfying over time.

**[B32] Huang, J., Zimmermann, T., Nagappan, N., Harrison, C., & Phillips, B. C. (2013). Mastering the art of war: How patterns of gameplay influence skill in Halo. Proceedings of CHI 2013, 695–704.**
DOI: 10.1145/2470654.2470753
- **Verified:** yes-FT.
- **Data and method:** Microsoft Research and Microsoft Games Studios. Seven months of *Halo: Reach* TrueSkill data for more than 3 million players, plus a 70-person survey.
- **Key findings:**
  - Players who played 4–8 games a week gained the most skill per game. Those who played more than 8 a week gained more in total over time.
  - Breaks tended to follow losses, which suggests frustration.
  - After a 30-day break, it took about 10 matches (about 3 hours) to regain the earlier skill level.
  - Games played per week in the first 100 games was the strongest predictor of total games played.
  - *Halo: Reach* replaced a visible skill rating with an experience score that only goes up. Survey respondents disliked seeing their skill rating drop.
  - 78% of survey respondents welcomed improvement tips.
- **Implication:** Early play frequency forecasts lifetime engagement, and losses trigger breaks. Show progress metrics that only go up, and offer tips to players who are not improving.

**[B33] Huang, J., Yan, E., Cheung, G., Nagappan, N., & Zimmermann, T. (2017). Master maker: Understanding gaming skill through practice and habit from gameplay behavior. Topics in Cognitive Science, 9(2), 437–466.**
DOI: 10.1111/tops.12251
- **Verified:** yes-AB.
- **Data and method:** Cohort analyses of *Halo: Reach* (7 months) and *StarCraft 2*.
- **Key findings:**
  - Players who played moderately often without long breaks gained skill most efficiently.
  - Top performers improved faster and without dips.
  - Experts had warm-up routines.
- **Implication:** Reward regular, moderate play rather than binges, for example with daily goals capped at sustainable amounts.

**[B34] Vardal, O., Bonometti, V., Drachen, A., Wade, A., & Stafford, T. (2022). Mind the gap: Distributed practice enhances performance in a MOBA game. PLOS ONE, 17(10), e0275843.**
DOI: 10.1371/journal.pone.0275843
- **Verified:** yes-AB.
- **Data and method:** 162,417 *League of Legends* players. Observational, using data slicing and machine learning.
- **Key findings:**
  - Players who crammed their games into short periods ended at lower performance than those who spaced them out.
  - What mattered was the overall amount of spacing, not when the intensive periods happened.
- **Implication:** This reinforces B31: design daily rhythms that spread play out, rather than binge incentives.

**[B35] Sapienza, A., Zeng, Y., Bessi, A., Lerman, K., & Ferrara, E. (2018). Individual performance in team-based online games. Royal Society Open Science, 5(6), 180329.**
DOI: 10.1098/rsos.180329
- **Verified:** yes-AB.
- **Data and method:** Analysis of successive matches within sessions in *League of Legends*.
- **Key findings:**
  - Performance declines over the course of a session, less so for experienced players.
  - Most players showed no significant long-term improvement.
  - Short-term performance dynamics predicted when players continue or end a session.
- **Implication:** Long sessions erode performance and enjoyment. Natural stopping points and session-aware tuning, such as easing after a run of fatigue-driven losses, can protect the next session.

---

## 5. Re-engagement, incentives and personalised offers

**[B36] Milošević, M., Živić, N., & Andjelković, I. (2017). Early churn prediction with personalized targeting in mobile social games. Expert Systems with Applications, 83, 326–332.**
DOI: 10.1016/j.eswa.2017.04.056
- **Verified:** yes-AB. The full text was paywalled, so the control design and effect definition were not checked.
- **Data and method:**
  - *Top Eleven*, Nordeus's football-manager mobile game, with 2 million players.
  - Churn was predicted one day after registration.
  - Push notifications were personalized to the game features each user had shown interest in. The system ran in production.
- **Key findings:** Personalized notifications reduced churn by "up to 28%".
- **Implication:** Push notifications that point to content the player already showed interest in can reduce early churn. Validate with holdout groups.

**[B37] Ascarza, E. (2018). Retention futility: Targeting high-risk customers might be ineffective. Journal of Marketing Research, 55(1), 80–98.**
DOI: 10.1509/jmr.16.0163
- **Verified:** yes-AB (via the SSRN version).
- **Data and method:** Two field experiments combined with machine learning. These are customer-retention settings, not games; the abstract does not name the sectors.
- **Key findings:**
  - The customers at highest churn risk are not necessarily the best targets.
  - Targeting by individual sensitivity to the intervention ("uplift") was significantly more effective than targeting the highest-risk customers.
- **Implication:** Run randomized re-engagement campaigns and target future campaigns by predicted uplift, not by churn score.

**[B38] Runge, J., Levav, J., & Nair, H. S. (2022). Price promotions and "freemium" app monetization. Quantitative Marketing and Economics, 20(2), 101–139.**
DOI: 10.1007/s11129-022-09248-3
- **Verified:** partial. The published record was checked. The content comes from the working-paper abstract, "Price Promotions in 'Freemium' Settings", SSRN 2019, DOI 10.2139/ssrn.3357275.
- **Data and method:** Entering cohorts of a free-to-play game were randomized to have in-game purchase promotions switched on or off, with six months of observation.
- **Key findings:**
  - Conversion and revenue improved in the treatment group.
  - **Null result on harm:** no evidence of harmful shifting of purchases over time, or of players inferring lower quality.
- **Implication:** Well-designed sales can raise conversion in an in-app-purchase-only game without training players to wait for discounts. Verify this with long-horizon holdouts in your own game.

**[B39] Runge, J., Drachen, A., & Grosso, W. (2024). Exploratory bandit experiments with "starter packs" in a free-to-play mobile game. IEEE Conference on Games (CoG) 2024, 1–8.**
DOI: 10.1109/CoG60054.2024.10645582
- **Verified:** yes-AB.
- **Data and method:** Online bandit assignment of starter packs to new players by country and device segment. Offline evaluation plus two online experiments.
- **Key findings:**
  - Personalization by segment was not achieved.
  - A bandit rewarded on conversion lowered the average effective starter-pack price.
  - Compared with a holdout using a naive policy, it showed an "indicative lift" in revenue per user, repeat purchasing and retention.
- **Implication:** Early, attractively priced starter offers may help both conversion and retention. Test the price points adaptively, and keep holdouts.

---

## 6. Toxicity and new-player retention

**[B40] Shores, K. B., He, Y., Swanenburg, K. L., Kraut, R., & Riedl, J. (2014). The identification of deviance and its impact on retention in a multiplayer game. Proceedings of CSCW 2014, 1356–1365.**
DOI: 10.1145/2531602.2531724
- **Verified:** yes-FT.
- **Data and method:**
  - *League of Legends* data from a third-party add-on on a Chinese server: 2.5 million players and 18.25 million matches over 3 months.
  - A "toxicity index" was built from peer thumbs-down and thumbs-up votes.
  - Retention was modeled with logistic regressions on 341,295 sampled players.
- **Key findings:**
  - For players below the level cap (30), toxic teammates predicted leaving the game (β = −0.351, p < .049). At the cap, players were resilient to toxic teammates.
  - Playing with friends predicted continued play at all levels. At the cap it was the only significant predictor of long-term retention (β = 0.397).
  - Longer matches reduced both continuing the session and long-term retention.
  - Winning predicted continuing the session for players below the cap.
  - Ranked (competitive) players were more toxic: mean index 0.41 versus 0.32 for unranked.
- **Implication:** Shield newcomers from hostile strangers with limited chat, new-player matching and fast reporting. Promote play with friends, and keep match length short on mobile.

---

## Supplementary verified sources (brief)

- **[S1] Kawale, J., Pal, A., & Srivastava, J. (2009). Churn prediction in MMORPGs: A social influence based approach. IEEE CSE 2009, 423–428.** DOI 10.1109/CSE.2009.80 — yes-AB.
  - Data: *EverQuest II*.
  - Finding: Combining positive and negative social influence spreading through a player's network with their personal engagement significantly improved churn prediction over either alone. In other words, churn spreads through social networks.
- **[S2] Demediuk, S., Murrin, A., Bulger, D., Hitchens, M., Drachen, A., Raffe, W. L., & Tamassia, M. (2018). Player retention in League of Legends: A study using survival analysis. ACSW 2018, 1–9.** DOI 10.1145/3167918.3167937 — yes-AB.
  - Method: Mixed-effects Cox regression.
  - Finding: The time between matches is a strong churn indicator, which corroborates B3.
- **[S3] Wu, Z., Yao, P., Zhong, H., Hou, X., Lai, F., & Lian, S. (2026). TEUM: Team effect-aware uplift modeling for online games. ACM KDD 2026.** DOI 10.1145/3770855.3817649 — yes-AB.
  - Context: Uplift modeling is used in industry to evaluate engagement incentives, such as equipment or daily rewards, for retention. Team effects bias estimates in multiplayer games.
  - Finding: Deployed in a large online shooter's incentive system with a "notable improvement". The abstract gives no figures.

---

## Top 12 actionable retention principles

1. **Win the first session and the first day; that is where most players are lost.**
   - Churn hazard is highest at the start and then falls: about 0.6 churns per hour, halving within 4 hours [B7]. Interest decays along a predictable curve [B1, B2].
   - Most churners leave after one or two sessions, too early to save with messages [B3]. Most non-payers leave within about a day [B5].
   - Not returning within about 20 hours of install is a strong churn signal [B6].
   - In practice: put players into the core loop within seconds, show progress on day 1, and give a concrete reason to come back tomorrow [B6, B28].

2. **Teach through play, just in time; spend on tutorials only where mechanics are new.**
   - Tutorials helped only the complex, unconventional game. Contextual hints beat up-front text, restricting freedom did not help, and on-demand help even hurt in one game [B27].
   - Players skip tutorials to reach the action, and unskippable sequences are deal-breakers [B28].
   - Forced waiting and lack of autonomy irritate players during onboarding [B29].
   - Introduce one mechanic at a time: practise it, combine it with others, raise the difficulty [B22].

3. **Start easy, ramp smoothly, and let challenge rise later.**
   - When difficulty is assigned rather than chosen, easier games are played longer [B19, B20].
   - Sharp early increases in difficulty are associated with lower retention, while higher difficulty later is associated with better retention [B18].
   - Players who quit without completing a level tend to quit at hard levels (r = −0.586), and early hard levels filter out less persistent players [B23].
   - Personalized easing of difficulty improved retention in online A/B tests [B25, B26].

4. **Do not monetize frustration; in an in-app-purchase-only game, revenue follows retention.**
   - In a randomized experiment with at-risk players, an easier game reduced purchases in that round but raised retention and both short- and long-run spending, most of all among past spenders [B26].
   - Only about 2% of players ever pay, and a prior purchase is the best predictor of the next one [B11]. Lapsed whales return little revenue [B5].
   - Use paid items to accelerate and enrich play, not to remove pain the design created on purpose.

5. **Adapt difficulty quietly, against an engagement objective, and add opt-in challenge.**
   - Optimizing difficulty for expected future play gave up to 9% more engagement with neutral revenue [B14].
   - Adaptive difficulty keeps players confident even under high objective failure [B21].
   - Moderate difficulty motivates when players choose it [B20], so offer optional hard modes with better rewards.
   - Let players fix failure through progression they control (upgrades, preparation), which buffers its demotivating effect [B18].

6. **Detect and break losing streaks.**
   - Three straight losses roughly double 7-day churn risk: 5.1% versus 2.6–2.7% [B15]. For main-role players the figure was 8.4% [B16].
   - Players take breaks after losses [B32].
   - Engagement-aware matchmaking raised play by 1.6–7.2% in live tests [B16] and engagement by 4–6% in a model calibrated on chess data [B17].
   - For player-versus-environment content, use streak breakers such as hints, boosts after repeated failure, or easier variants. Be transparent; avoid covertly rigging outcomes [B15].

7. **Sustain motivation with novelty, intrigue and close finishes, not difficulty alone.**
   - Moderate novelty and suspense increased intrinsic motivation [B20].
   - Intrigue and visible future depth keep players going through rough patches [B28].
   - A steady cadence of new mechanics follows the learning-curve pattern of successful puzzle games [B22]. Interest otherwise decays predictably [B2].

8. **Invest in social bonds; they are the most consistent long-term retention correlate.**
   - Playing with friends predicted retention at every level and was the only long-term predictor at the level cap [B40].
   - Friends matter throughout, and social features dominate at endgame [B10].
   - Group responsibility (guild officers) goes with lower quitting [B9], and churn spreads through social networks [S1].
   - Expect retention value, not direct conversion, from social features [B12].
   - Mixed-skill teams produced more positive social interaction [B16].

9. **Protect newcomers and keep sessions short.**
   - Toxic teammates drove away players below the level cap, while players at the cap were resilient [B40].
   - Longer matches reduced both session continuation and long-term retention [B40].
   - Performance declines within a session, and that decline predicts when players quit [B35].
   - Use new-player matching or bots, limited or positive-only communication early on, short session units, and natural stopping points.

10. **Encourage regular, spaced, moderate play, and reward effort.**
    - Spaced play produces better skill growth than binges [B31, B33, B34].
    - Moderate play each week is the most efficient [B32].
    - Early play frequency forecasts total engagement [B32], and gaps between sessions are the top churn predictor [B3, S2].
    - Rewarding effort and partial progress increased persistence among struggling players [B30].
    - Prefer daily goals capped at sustainable amounts over unlimited grind.

11. **Instrument retention as survival and hazard curves, and predict difficulty before release.**
    - Track hazard by minute and by level, and compare builds with log-rank tests [B7]. Survival ensembles beat Cox regression for payers [B5].
    - Simple day-1 rules (rounds played, absence, maximum level) nearly match machine learning [B6].
    - Monitor session gaps, current absence and failure-related signals [B3, B8].
    - Produce explainable churn causes for the design team [B13].
    - Use human-like or reinforcement-learning AI playtesting to estimate level difficulty and churn before shipping [B23, B24].

12. **Re-engage by changing the experience and targeting by uplift; always keep holdouts.**
    - Free currency gifts to at-risk high spenders did not reduce churn or change monetization, though contacting players before churn raised response four- to five-fold [B4].
    - Personalized, content-relevant push notifications cut early churn by up to 28% [B36].
    - Target by sensitivity to the intervention, not by churn risk [B37, S3].
    - Gameplay-level changes such as easier difficulty work for at-risk players [B26].
    - Promotions and adaptively priced starter packs lifted conversion with no sign of long-term harm [B38, B39].

---

## Evidence quality notes and gaps

- **Causal evidence.**
  - Randomized or controlled experiments: B4, B16 (online A/B test), B19, B20, B21 (lab), B25 (online A/B test, abstract-level only), B26, B27, B30, B37, B38 and B39 (holdout comparison).
  - B14 and B36 are deployed industrial systems whose evaluation designs I could not inspect beyond the abstract.
  - Everything else is observational or correlational, or model- or simulation-based (B15, B17).
- **Transfer to a mobile in-app-purchase game.** Several studies come from PC/console, MMO or educational settings (B2, B9, B18, B19, B20, B27, B30–B35, B40). The mechanisms are plausible for mobile, but effect sizes may not transfer.
- **Null and small results to respect:**
  - Free currency gifts did not reduce churn [B4].
  - Tutorials did not help simple games, and on-demand help hurt one game [B27].
  - Social activity did not predict conversion [B12].
  - Playing with real-life friends had no overall effect on retention metrics in the World of Warcraft survey [B9].
  - Spacing and growth-mindset effects are statistically robust but small (d = 0.11, r = 0.07) [B31, B30].
- **Gaps:**
  - I found no peer-reviewed controlled study of comeback or login rewards or daily bonuses in games.
  - Push-notification evidence in games rests mainly on one industrial study [B36].
  - No public peer-reviewed King, Supercell or Unity study directly quantifies difficulty-churn effects (King's B24 covers difficulty prediction).
  - Activision's skill-based matchmaking white papers are not peer-reviewed and were not reviewed here.
- **Search limitation.** The web-search budget ran out partway through. Later discovery used Crossref, Semantic Scholar, arXiv, HAL and Europe PMC, so relevant work only indexed elsewhere may be missing.
