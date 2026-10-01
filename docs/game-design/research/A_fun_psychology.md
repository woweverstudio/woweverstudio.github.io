# A. Psychology of Fun, Enjoyment and Excitement in Games: an evidence review for a mobile F2P game monetized only through IAP and subscriptions

Prepared 2026-10-01. Research area A of the design document: what makes games intrinsically motivating and exciting, and how that relates to healthy long-term play.

---

## 0. Method, verification standard and corrections to the brief

**How sources were verified.** Every citation below was located in at least one authoritative index: Crossref and OpenAlex DOI records, Semantic Scholar, PubMed or Europe PMC. Bibliographic details come from those records. Findings come from the abstract or the full text, and the entry says which.
- **Verified: yes** means the bibliographic record matches and the findings reported here were checked against the abstract or the full text.
- **Verified: partial** means the source exists and its bibliographic details are correct, but some details (sample size, specific numbers or study design) come from secondary sources or could not be checked. The entry names the gap.

Web search, ACM DL, Springer, Wiley, ScienceDirect and Quantic Foundry pages were often blocked. In those cases I used open-access PDFs (author or institutional repositories, PMC, OSF) or abstracts from the indexes.

**Corrections and clarifications to the citations in the brief**
- Przybylski et al. (2009): the exact title is "**Having *to* versus Wanting to Play**: Background and Consequences of Harmonious versus Obsessive Engagement in Video Games".
- Keller & Bless: *PSPB* 34(2), **2008**. It appeared online in Dec 2007.
- Abuhamdeh et al.: *Motivation and Emotion* 39(1), **2015**. It appeared online in Sept 2014.
- Power et al.: *IJHCI* 35(12), **2019**. It appeared online in 2018. The scale is called PUGS (Player Uncertainty in Games Scale).
- Oliver et al.: *Psychology of Popular Media Culture* 5(4), **2016**. It appeared online in 2015.
- Ballou & Deterding's BANG model: online 2024, *Interacting with Computers* 38(3) print issue 2026.
- Juul & Begy (2016) is a **poster** at the 1st joint FDG/DiGRA conference and has no DOI.
- Costikyan (2013) is a **book** (MIT Press), not a peer-reviewed study.
- Quantic Foundry's Gamer Motivation Model is mainly **industry data**. Its peer-reviewed outputs are a CHI PLAY 2016 keynote abstract and a 2018 book chapter.
- **Important correction on the "dopamine" finding.** The striatal dopamine result of Koepp et al. (1998) was **substantially weakened when the same group re-analysed it in 2009** ([A21]). Do not use it to justify "dopamine-driven design".

---

## 1. Executive summary: what the evidence says about "fun that lasts"

1. **Need satisfaction is the most consistent driver of enjoyment, intention to keep playing, and healthy play.** The needs are competence, autonomy and relatedness. Across lab experiments, multilevel studies, large surveys and industry telemetry, they predict enjoyment and future play ([A1]–[A6]).
   - In an MMO sample (n = 730), autonomy, competence and relatedness together explained **45% of enjoyment variance** ([A1]).
   - Need frustration is linked to obsessive, compulsive play ([A5], [A6]).
2. **Playtime itself is not the harm. The quality of motivation is.** In 38,935 players with publisher telemetry, the effect of time spent playing on well-being was negligible. Intrinsic motivation predicted better well-being, and extrinsic or compelled play predicted worse well-being ([A40], [A41]). "Long playtime" is therefore a legitimate goal only if it comes from volitional play.
3. **Challenge has to be tuned carefully.** Classic flow theory says moderate challenge is best ([A7], [A8]). Large field experiments with 10,000–70,000 players found that easier versions held players longer when difficulty was *assigned*. Moderate difficulty was best only when players *chose* it ([A11], [A12]).
4. **Excitement comes from uncertainty, suspense and curiosity.** Close games are enjoyed more than blowouts even though blowouts feel more "competent" ([A16], [A17]). In a preregistered experiment (n = 1,699), curiosity was the strongest predictor of enjoyment and the only predictor of voluntary playtime ([A20]).
5. **Juice (feedback effects) follows an inverted U, and it must be tied to success.** None and Extreme juice both reduced playtime and enjoyment relative to Medium and High juice in a study of n = 3,018 ([A30]). Amplified feedback that hides the link between action and outcome reduced competence ([A20]).
6. **Rewards help when they inform and hurt when they control.** Expected, contingent tangible rewards undermine intrinsic motivation, with d between −0.28 and −0.40 ([A27]). Positive feedback enhances it (d ≈ +0.33). Points, levels and leaderboards raised output quantity but not intrinsic motivation ([A28]).
7. **Variable or uncertain rewards are powerful, and the evidence draws a clear ethical line.**
   - Uncertainty within gameplay increases enjoyment ([A16], [A17], [A22]).
   - Paid randomized rewards are associated with problem gambling ([A25], [A26]).
   - Engineered "near-misses" increase the urge to keep playing ([A24]).
   - In pooled survey data, half of loot-box revenue came from the top 5% of spenders. Spending correlated with problem gambling, not with income ([A26]).

---

## 2. Annotated sources

### 2.1 Self-Determination Theory (SDT): need satisfaction as the engine of enjoyment

**[A1] Ryan, R. M., Rigby, C. S., & Przybylski, A. K. (2006). The motivational pull of video games: A self-determination theory approach. *Motivation and Emotion*, 30(4), 344–360.** https://doi.org/10.1007/s11031-006-9051-8

- **Verified:** yes (full text read).
- **Method & sample:** Four studies. These studies introduced the **PENS** (Player Experience of Need Satisfaction).
  - Study 1: n = 89 undergraduates, 20 min of *Super Mario 64*.
  - Study 2: n = 50, *Zelda: Ocarina of Time* vs. *A Bug's Life*.
  - Study 3: n = 58 players, 4 games, multilevel (HLM) model.
  - Study 4: n = 730 members of an MMO community (16–44 years).
- **Key findings:**
  - In-game autonomy and competence predicted enjoyment and preference for future play. Study 1 betas were .34–.49.
  - In Study 1, competence predicted free-choice continued play (β = .41).
  - Intuitive controls predicted autonomy and competence. The effect of controls on enjoyment and future play ran fully through these needs.
  - Players who freely chose to keep playing had more positive pre-to-post changes in mood, vitality and self-esteem than those who switched games.
  - Study 3: need satisfaction explained differences both *between* people and *within* a person across games.
  - Study 4: autonomy (β = .49), competence (β = .24) and relatedness (β = .12) together explained **R² = .45 of enjoyment**. They also predicted intended future play (R² = .10).
  - Hours per week were predicted by relatedness (β = .18), Yee's achievement motive (β = .19) and competence (β = .09).
  - The achievement motive *negatively* predicted post-play mood (β = −.21).
- **Design implication:** Treat competence, autonomy and relatedness as primary KPIs for the core loop. Controls must be learnable at once (this is the "price of admission"). Achievement pressure can raise hours while lowering mood, which signals a risk to retention quality.
- **Related (PENS validation):** Johnson, D., Gardner, M. J., & Perry, R. (2018). Validation of two game experience scales: PENS and GEQ. *International Journal of Human-Computer Studies*, 118, 38–46. https://doi.org/10.1016/j.ijhcs.2018.05.003. Verified: yes (accepted manuscript read).
  - n = 571 players.
  - The PENS factor structure was largely supported, with a minor revision. The GEQ was only partly supported.
  - Implication: PENS is a reasonable instrument for playtests.

**[A2] Przybylski, A. K., Rigby, C. S., & Ryan, R. M. (2010). A motivational model of video game engagement. *Review of General Psychology*, 14(2), 154–166.** https://doi.org/10.1037/a0019440

- **Verified:** yes (abstract).
- **Method:** Theoretical review of the empirical SDT games literature.
- **Key findings:** Both the appeal of games and their effects on well-being depend on whether play satisfies the needs for competence, autonomy and relatedness. The review covers:
  - short-term well-being;
  - the appeal of violent content;
  - post-play aggression;
  - disordered engagement;
  - immersion.
- **Design implication:** One framework explains both "why it's fun" and "when it becomes unhealthy". Use it as the conceptual backbone of the design document.
- **Related:** Tyack, A., & Mekler, E. D. (2020). Self-determination theory in HCI games research: Current uses and open questions. *CHI '20*, 1–22. https://doi.org/10.1145/3313831.3376723. Verified: yes (abstract).
  - Review of 110 CHI and CHI PLAY papers.
  - SDT is widely used, mostly through need satisfaction and intrinsic motivation measures. Its core mini-theories are rarely engaged with.
  - Caution: much of the "SDT evidence" is descriptive.

**[A3] Tamborini, R., Bowman, N. D., Eden, A., Grizzard, M., & Organ, A. (2010). Defining media enjoyment as the satisfaction of intrinsic needs. *Journal of Communication*, 60(4), 758–777.** https://doi.org/10.1111/j.1460-2466.2010.01513.x

- **Verified:** yes (abstract). The exact manipulations were not verified.
- **Method:** Experiment that manipulated video-game characteristics tied to autonomy, competence and relatedness.
- **Key findings:** The need-satisfaction model **explained 51% of the variance in enjoyment**, without including hedonic "pleasure-seeking" needs.
- **Design implication:** "Fun" can largely be designed by supporting needs. It is not mainly a matter of spectacle.
- **Related:** Mekler, E. D., Bopp, J. A., Tuch, A. N., & Opwis, K. (2014). A systematic review of quantitative studies on the enjoyment of digital entertainment games. *CHI '14*, 927–936. https://doi.org/10.1145/2556288.2557078. Verified: yes (abstract).
  - Review of 87 quantitative studies.
  - Enjoyment is the positive appraisal (valence) of the play experience. It is partly associated with support for player needs and values.
  - Enjoyment is distinct from flow and **can occur without high challenge**.

**[A4] Peng, W., Lin, J.-H., Pfeiffer, K. A., & Winn, B. (2012). Need satisfaction supportive game features as motivational determinants: An experimental study of a self-determination theory guided exergame. *Media Psychology*, 15(2), 175–196.** https://doi.org/10.1080/15213269.2012.673850

- **Verified:** yes (abstract). The feature descriptions come from Mekler et al. (2017) [A28]. Sample size not verified.
- **Method:** 2 × 2 experiment that switched autonomy-supportive features on or off and competence-supportive features on or off.
  - Autonomy-supportive features included avatar customization and choice.
  - Competence-supportive features included dynamic difficulty adjustment and performance indicators.
- **Key findings:**
  - Each feature set raised the corresponding need satisfaction.
  - Both had main effects on enjoyment, motivation for future play, effort, game rating and likelihood of recommending the game.
  - The effects were **mediated** by satisfaction of the autonomy and competence needs.
- **Design implication:** This is causal evidence that specific features (customization and choice; adaptive difficulty and clear feedback) produce enjoyment and intention to replay by satisfying needs. Build these in from the start.

**[A5] Ballou, N., Denisova, A., Ryan, R. M., Rigby, C. S., & Deterding, S. (2024). The Basic Needs in Games Scale (BANGS): A new tool for investigating positive and negative video game experiences. *International Journal of Human-Computer Studies*, 188, 103289.** https://doi.org/10.1016/j.ijhcs.2024.103289

- **Verified:** yes (abstract).
- **Method:** Five validation studies with N = 1,246 unique participants.
- **Key findings:**
  - Six subscales measure *satisfaction* and *frustration* of autonomy, competence and relatedness in games.
  - The scale showed good structure, validity and measurement invariance across contexts and over time.
  - Limitations: the autonomy-frustration subscale had lower reliability, and relatedness satisfaction and frustration were unexpectedly uncorrelated.
- **Design implication:** In playtests and live surveys, measure need *frustration* (feeling pressured, incompetent or lonely), not only satisfaction. Frustration is the signal linked to unhealthy engagement (see [A6]).
- **Related:** Ballou, N., & Deterding, S. (2024 online; 2026 print). The Basic Needs in Games Model of video game play and mental health. *Interacting with Computers*, 38(3), 469–486. https://doi.org/10.1093/iwc/iwae042. Verified: yes (abstract).
  - Theory paper.
  - Mental-health outcomes of gaming are largely mediated by the motivational quality of play and by need satisfaction or frustration. Playtime is not the mediator.
- **Related:** Allen, J. J., & Anderson, C. A. (2018). Satisfaction and frustration of basic psychological needs in the real world and in video games predict internet gaming disorder scores and well-being. *Computers in Human Behavior*, 84, 220–229. https://doi.org/10.1016/j.chb.2018.02.034. Verified: yes (abstract; N not checked).
  - Gaming-disorder scores were highest when needs were satisfied *in games but not in real life* (the "need-density" hypothesis).
  - Need frustration in either domain was associated with higher gaming-disorder scores.
  - Real-world need satisfaction mattered more for well-being.

**[A6] Przybylski, A. K., Weinstein, N., Ryan, R. M., & Rigby, C. S. (2009). Having to versus wanting to play: Background and consequences of harmonious versus obsessive engagement in video games. *CyberPsychology & Behavior*, 12(5), 485–492.** https://doi.org/10.1089/cpb.2009.0083

- **Verified:** partial.
  - The abstract (PubMed) was verified.
  - N ≈ 1,324 online players and the specific correlations come from a secondary summary only. Examples: obsessive passion with weekly hours, r ≈ .38; harmonious passion with enjoyment, r ≈ .30.
- **Key findings:**
  - Low need satisfaction was associated with obsessive passion, **more hours of play**, more tension after play and *lower* enjoyment.
  - High need satisfaction **did not predict hours**. It predicted harmonious passion, enjoyment and energy after play.
  - High playtime related negatively to well-being only for obsessively passionate players.
- **Design implication:** Hours can be inflated by compulsion that players do not enjoy. Optimize for "want-to" engagement, because "have-to" engagement predicts tension and low enjoyment.
- **Related:** Lafrenière, M.-A. K., Vallerand, R. J., Donahue, E. G., & Lavigne, G. L. (2009). On the costs and benefits of gaming: The role of passion. *CyberPsychology & Behavior*, 12(3), 285–290. https://doi.org/10.1089/cpb.2008.0234. Verified: yes (abstract).
  - n = 222 MMO players.
  - Both passion types were associated with positive affect during play.
  - *Only obsessive* passion was associated with negative affect, problem behaviours, time spent playing and physical symptoms.
  - Harmonious passion was associated with psychological well-being.
- **Related:** Mills, D. J., Milyavskaya, M., Mettler, J., Heath, N. L., & Derevensky, J. L. (2018). How do passion for video games and needs frustration explain time spent gaming? *British Journal of Social Psychology*, 57(2), 461–481. https://doi.org/10.1111/bjso.12239. Verified: yes (abstract).
  - Daily need frustration and obsessive passion reinforce each other (a vicious cycle).

### 2.2 Flow, optimal challenge and difficulty

**[A7] Sweetser, P., & Wyeth, P. (2005). GameFlow: A model for evaluating player enjoyment in games. *Computers in Entertainment*, 3(3), Article 3.** https://doi.org/10.1145/1077246.1077253

- **Verified:** yes (abstract).
- **Method:** The model was built by mapping the game-heuristics literature onto flow. Initial validation was an expert review of one high-rated and one low-rated real-time strategy game.
- **Key findings:**
  - Eight elements: concentration, challenge, player skills, control, clear goals, feedback, immersion and social interaction.
  - The criteria distinguished the high-rated game from the low-rated one.
  - Caution: this is a heuristic evaluation tool, not an experimental test.
- **Design implication:** Use GameFlow as a design-review checklist (for example, clear goals and feedback at every moment), not as proof of effect.
- **Related:** Sweetser, P. (2020). GameFlow 2020: 15 years of a model of player enjoyment. *OzCHI '20*, 705–711. https://doi.org/10.1145/3441000.3441048. Verified: yes (abstract). Surveys more than 200 applications of the model.

**[A8] Keller, J., & Bless, H. (2008). Flow and regulatory compatibility: An experimental approach to the flow model of intrinsic motivation. *Personality and Social Psychology Bulletin*, 34(2), 196–209.** https://doi.org/10.1177/0146167207310026

- **Verified:** partial.
  - The abstract was verified.
  - The design details come from secondary descriptions; the full text was not accessible. Per those descriptions, it was a Tetris-type game with three conditions: *boredom* (very slow), *adaptive* (speed adjusted to performance) and *overload* (fast).
- **Key findings:** Two experiments showed that fit between skills and demands *causally* produces flow-like involvement and intrinsic reward. The adaptive condition gave higher perceived fit, according to secondary sources. Experiment 2: people with a strong habitual action orientation were most sensitive to the fit manipulation.
- **Design implication:** Adaptive pacing that matches demands to skill is a causal lever for flow. Individual differences mean one tuning will not fit all players.

**[A9] Cox, A., Cairns, P., Shah, P., & Carroll, M. (2012). Not doing but thinking: The role of challenge in the gaming experience. *CHI '12*, 79–88.** https://doi.org/10.1145/2207676.2207689

- **Verified:** yes (abstract, plus a summary by the same authors in their immersion review). Sample sizes were not checked.
- **Method:** Three experiments.
- **Key findings:**
  - Raising *physical* demand (more required inputs) did **not** increase immersion.
  - Adding **time pressure**, which raises cognitive challenge, **did** increase immersion.
  - Experienced challenge depends on the interaction between expertise and cognitive challenge.
- **Design implication:** Make challenge cognitive (decisions under mild time pressure), not "more taps". Mobile designers should avoid busywork that is mistaken for engagement.

**[A10] Denisova, A., Cairns, P., Guckelsberger, C., & Zendle, D. (2020). Measuring perceived challenge in digital games: Development & validation of the Challenge Originating from Recent Gameplay Interaction Scale (CORGIS). *International Journal of Human-Computer Studies*, 137, 102383.** https://doi.org/10.1016/j.ijhcs.2019.102383

- **Verified:** yes (accepted manuscript read).
- **Method:** Literature review, then interviews, then exploratory factor analysis (N = 394, of whom 332 were men), then validation with N = 987 players.
- **Key findings:** Perceived challenge has **four components**: performative, emotional, cognitive and decision-making.
- **Design implication:** Treat "challenge" as a four-part design and telemetry target, not a single difficulty number. Emotional and decision-making challenge can create depth without making the game harder to execute.

**[A11] Lomas, D., Patel, K., Forlizzi, J. L., & Koedinger, K. R. (2013). Optimizing challenge in an educational game using large-scale design experiments. *CHI '13*, 89–98.** https://doi.org/10.1145/2470654.2470668

- **Verified:** yes (abstract).
- **Method:** Two large randomized online experiments in a math game: about 10,000 players (2 × 3 design) and about 70,000 players (2 × 9 × 8 × 4 × 25 design).
- **Key findings:**
  - "In almost all cases, subjects were more engaged and **played longer when the game was easier**". This contradicts the general form of the inverted-U hypothesis.
  - The most engaging conditions produced the slowest learning.
- **Design implication:** For retention, err on the easy side by default and raise challenge only through player choice (see [A12]). Validate with A/B tests, not designer intuition.
- **Related:** Schmierbach, M., Chung, M.-Y., Wu, M., & Kim, K. (2014). No one likes to lose: The effect of game difficulty on competency, flow, and enjoyment. *Journal of Media Psychology*, 26(3), 105–110. https://doi.org/10.1027/1864-1105/a000120. Verified: yes (abstract).
  - N = 121 students playing a casual tower-defense game.
  - The **easier** mode increased competence, which helped players reach a challenge–skill balance, which increased enjoyment.

**[A12] Lomas, J. D., Koedinger, K., Patel, N., Shodhan, S., Poonwala, N., & Forlizzi, J. L. (2017). Is difficulty overrated? The effects of choice, novelty and suspense on intrinsic motivation in educational games. *CHI '17*, 1028–1039.** https://doi.org/10.1145/3025453.3025638

- **Verified:** yes (full abstract via Semantic Scholar).
- **Method:** Three online experiments with more than 20,000 play sessions.
- **Key findings:**
  - Experiment 1 (n = 10,472): **moderately difficult levels were the most motivating when players selected them themselves**. When difficulty was assigned blindly, the easiest games were the most motivating.
  - Experiment 2 (n = 5,065): **moderate novelty** was optimal. Too much or too little novelty reduced intrinsic motivation.
  - Experiment 3 (n = 6,511): **suspense in "close games"** was beneficial.
- **Design implication:** Make games "not too hard, not too boring". Let players opt into harder content (difficulty selection, optional challenge levels), pace new content at moderate novelty, and engineer close outcomes.

**[A13] Denisova, A., & Cairns, P. (2015). The placebo effect in digital games: Phantom perception of adaptive artificial intelligence. *CHI PLAY '15*, 23–33.** https://doi.org/10.1145/2793107.2793109

- **Verified:** yes (abstract).
- **Method:** Two studies that told players the game had adaptive AI when it did not.
- **Key findings:** Expecting an "adaptive AI" alone produced **higher perceived immersion**.
- **Design implication:** Expectations and framing shape experienced fun, and they bias playtests. Blind A/B conditions are essential.
- **Related:** Ang, D., & Mitchell, A. (2017). Comparing effects of dynamic difficulty adjustment systems on video game experience. *CHI PLAY '17*, 317–327. https://doi.org/10.1145/3116595.3116623. Verified: yes (abstract).
  - Dynamic difficulty adjustment (DDA) produced better overall experience than no DDA.
  - System-driven ramping gave more time distortion but less sense of control than player-oriented DDA.
- **Related:** Constant, T., & Levieux, G. (2019). Dynamic difficulty adjustment impact on players' confidence. *CHI '19*, 1–12. https://doi.org/10.1145/3290605.3300693. Verified: yes (abstract). DDA led players to **overconfidence** in their chances of success. This may be part of why DDA feels good, but it also raises a transparency question.

### 2.3 Competence, mastery and meaningful failure

**[A14] Trepte, S., & Reinecke, L. (2011). The pleasures of success: Game-related efficacy experiences as a mediator between player performance and game enjoyment. *Cyberpsychology, Behavior, and Social Networking*, 14(9), 555–557.** https://doi.org/10.1089/cyber.2010.0358

- **Verified:** yes (abstract).
- **Method:** Lab study, N = 213, jump-and-run game, performance logged.
- **Key findings:** Performance predicted enjoyment, and this effect was **mediated by game-related self-efficacy**: the felt experience of "I can do this".
- **Design implication:** Make success *felt and attributable* through clear cause-and-effect feedback and visible skill growth. Raw outcomes are not enough.
- **Related:** Klimmt, C., Hartmann, T., & Frey, A. (2007). Effectance and control as determinants of video game enjoyment. *CyberPsychology & Behavior*, 10(6), 845–848. https://doi.org/10.1089/cpb.2007.9942. Verified: yes (abstract).
  - Online experiment, N = 500.
  - Reducing perceived **effectance** (the sense of influencing the game world) reduced enjoyment.
  - The role of "control" was more complex.

**[A15] Petralito, S., Brühlmann, F., Iten, G., Mekler, E. D., & Opwis, K. (2017). A good reason to die: How avatar death and high challenges enable positive experiences. *CHI '17*, 5087–5097.** https://doi.org/10.1145/3025453.3026047

- **Verified:** yes (abstract).
- **Method:** Survey of 95 *Dark Souls III* players with open answers and player-experience measures.
- **Key findings:** Players enjoyed hard sessions. Achievement and *learning moments* drove positive experiences, and these were **enabled by** failure and avatar death.
- **Design implication:** Failure is not the enemy of fun; *meaningless* failure is. Each failure should teach something and lead to a felt, hard-earned achievement. This fits a small optional "hard mode" segment, not the default (see [A11] and [A12]).

### 2.4 Uncertainty, suspense and curiosity (the "excitement" engine)

**[A16] Abuhamdeh, S., Csikszentmihalyi, M., & Jalal, B. (2015). Enjoying the possibility of defeat: Outcome uncertainty, suspense, and intrinsic motivation. *Motivation and Emotion*, 39(1), 1–10.** https://doi.org/10.1007/s11031-014-9425-2

- **Verified:** partial. Bibliographic record verified. The study details come from the publisher-linked ScienceDaily release and citing papers, because the abstract is withheld from the indexes.
- **Method:** Study 1 had 72 undergraduates play *Speed Slice* (Wii) against weak or tough opponents.
- **Key findings:**
  - Greater outcome uncertainty increased enjoyment, and **suspense mediated** this effect.
  - Winning by a wide margin maximized perceived competence but was *less enjoyable* than close wins.
  - **69%** of participants chose to replay the narrowly won game.
- **Design implication:** Matchmaking, enemy scaling and level tuning should aim for close outcomes. Visible stakes such as "one move left" or a comeback chance create suspense.
- **Related:** Abuhamdeh, S., & Csikszentmihalyi, M. (2012). The importance of challenge for the enjoyment of intrinsically motivated, goal-directed activities. *PSPB*, 38(3), 317–330. https://doi.org/10.1177/0146167211427147. Verified: yes (abstract).
  - In internet chess, perceived challenge strongly predicted enjoyment.
  - Games against superior opponents and close games were more enjoyable than blowouts.
- **Related (theory):** Deterding, S., Andersen, M. M., Kiverstein, J., & Miller, M. (2022). Mastering uncertainty: A predictive processing account of enjoying uncertain success in video game play. *Frontiers in Psychology*, 13, 924953. https://doi.org/10.3389/fpsyg.2022.924953. Verified: yes (full text, OA). A theoretical, non-empirical paper.
  - Fun arises from reducing uncertainty *faster than expected*: "doing better than expected", which tracks learning progress.
  - This explains balanced, idle and Soulslike games alike.

**[A17] Klimmt, C., Rizzo, A., Vorderer, P., Koch, J., & Fischer, T. (2009). Experimental evidence for suspense as determinant of video game enjoyment. *CyberPsychology & Behavior*, 12(1), 29–31.** https://doi.org/10.1089/cpb.2008.0060

- **Verified:** yes (abstract).
- **Method:** Experiment, N = 63, first-person shooter manipulated to give low or high suspense.
- **Key findings:** Higher suspense led to higher enjoyment.
- **Design implication:** Suspense, meaning a threatening possible outcome together with hope and agency, is a directly designable lever. Examples: timers, escalating threats, "last chance" moments inside gameplay.

**[A18] Power, C., Cairns, P., Denisova, A., Papaioannou, T., & Gultom, R. (2019). Lost at the edge of uncertainty: Measuring player uncertainty in digital games. *International Journal of Human–Computer Interaction*, 35(12), 1033–1045.** https://doi.org/10.1080/10447318.2018.1507161

- **Verified:** yes (accepted manuscript read).
- **Method:** Survey of 708 players (674 valid; 600 men), bi-factor analysis, and an experiment with the puzzle game *Contraption Maker* (3 vs. 5 minutes of play).
- **Key findings:**
  - Five factors: uncertainty in decision-making, in problem-solving and in taking action (these three form a general *internal* uncertainty factor), **exploration**, and external uncertainty.
  - Playing longer reduced uncertainty in problem-solving and decision-making (effect size A′ ≈ .71–.72).
  - The item pool was based on Costikyan's sources of uncertainty.
- **Design implication:** Uncertainty can be *designed* and *measured*. Track whether players feel productive uncertainty (decisions, exploration) or confusing uncertainty (not knowing what to do).
- **Related:** Costikyan, G. (2013). *Uncertainty in Games*. MIT Press. A book. Verified: partial (existence and taxonomy verified via a review, doi:10.1111/jpcu.12119, and via Power et al.).
  - Eleven sources of uncertainty, including performative, solver's, player unpredictability, randomness, analytic complexity, hidden information, narrative anticipation, perception, semiotic, development anticipation and schedule.

**[A19] To, A., Ali, S., Kaufman, G., & Hammer, J. (2016). Integrating curiosity and uncertainty in game design. *Proceedings of DiGRA/FDG 2016*.** https://doi.org/10.26503/dl.v2016i1.793

- **Verified:** yes (abstract).
- **Method:** Conceptual analysis with game examples.
- **Key findings:**
  - Five curiosity types: perceptual, manipulatory, complexity or ambiguity, conceptual, and adjustive-reactive.
  - Designers can induce curiosity by creating or making salient **information gaps**, mapped onto Costikyan's uncertainty sources.
- **Design implication:** Seed every session with an open question. Examples: a locked door seen early, an unidentified item, a partially revealed map, a hint of a new mechanic.
- **Related (foundations):** Loewenstein, G. (1994). The psychology of curiosity: A review and reinterpretation. *Psychological Bulletin*, 116(1), 75–98. https://doi.org/10.1037/0033-2909.116.1.75. Verified: yes (abstract). Curiosity is cognitively induced deprivation that arises from a perceived gap in knowledge. It is intense, transient, linked with impulsivity, and **often disappointing once satisfied**.
- **Related (foundations):** Kang, M. J., et al. (2009). The wick in the candle of learning: Epistemic curiosity activates reward circuitry and enhances memory. *Psychological Science*, 20(8), 963–973. https://doi.org/10.1111/j.1467-9280.2009.02402.x. Verified: yes (abstract).
  - Curiosity correlated with activity in the caudate, a reward-anticipation region.
  - People spent scarce tokens or waiting time to resolve their curiosity.
  - Higher curiosity improved memory for surprising answers 1–2 weeks later.

**[A20] Kao, D., Ballou, N., Gerling, K., Breitsohl, H., & Deterding, S. (2024). How does juicy game feedback motivate? Testing curiosity, competence, and effectance. *CHI '24*, 1–16.** https://doi.org/10.1145/3613904.3642656

- **Verified:** yes (full text of the OSF preprint version).
- **Method:** Preregistered online experiment, n = 1,699, with a custom action RPG. Design was 2 × 2 plus control, varying:
  - amplification of feedback;
  - success-dependence (feedback triggered only on success);
  - variability.

  Measures were self-reports and free-choice playtime after 10 minutes of mandatory play.
- **Key findings:**
  - **Curiosity was the strongest predictor of enjoyment and the only predictor of voluntary playtime.**
    - Each 1-point increase in curiosity was associated with +0.75 enjoyment and **+0.88 minutes** of play.
    - That is about **+10.8%** of the 7.9-minute average.
  - Enjoyment itself did *not* predict playtime.
  - **Success-dependent** feedback raised curiosity, effectance and competence.
  - **Amplified feedback reduced** effectance and competence, probably by visually hiding the link between action and outcome.
  - Randomly *varied* feedback did **not** increase curiosity.
- **Design implication:** Players stay because of curiosity about *their own success*: will this attack, combo or move work? Random cosmetic variety does not do this. Tie feedback to graded success and keep the outcome of each action readable.

### 2.5 Reward neuroscience, excitement, and the ethical line

**[A21] Koepp, M. J., Gunn, R. N., Lawrence, A. D., Cunningham, V. J., Dagher, A., Jones, T., Brooks, D. J., Bench, C. J., & Grasby, P. M. (1998). Evidence for striatal dopamine release during a video game. *Nature*, 393(6682), 266–268.** https://doi.org/10.1038/30498

- **Verified:** yes (PubMed abstract), plus the re-analysis by the same group.
- **Method:** [¹¹C]raclopride PET scans, 8 healthy volunteers, a tank game with monetary incentive vs. rest.
- **Key findings:**
  - Raclopride binding in the striatum was lower during play, which is consistent with dopamine release. The reduction was greatest in the ventral striatum: −13.9% right and −11.8% left.
  - The reduction correlated with performance.
- **Important caveat (re-analysis):** Egerton, A., et al. (2009). The dopaminergic basis of human behaviors: A review of molecular imaging studies. *Neuroscience & Biobehavioral Reviews*, 33(7), 1109–1132. https://doi.org/10.1016/j.neubiorev.2009.05.005. Verified: yes (PMC full text).
  - With anatomically defined regions, the reduction was only −7.3% in the right ventral striatum.
  - After also correcting for head movement, **no individual striatal region changed significantly**.
  - **No correlation with performance remained.**
- **Design implication:** Do not base design claims on "games release dopamine". The behavioural evidence on need satisfaction, uncertainty and curiosity is far stronger than this single small PET study.

**[A22] Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science*, 275(5306), 1593–1599.** https://doi.org/10.1126/science.275.5306.1593

- **Verified:** yes (abstract).
- **Method:** Review and model linking primate dopamine-neuron recordings to temporal-difference learning.
- **Key findings:** Phasic dopamine signals **reward prediction errors**: changes or errors in predicting future rewarding events. They do not signal reward as such.
- **Design implication:** Fully predictable rewards lose motivational punch. Surprise and "better than expected" outcomes carry the learning signal. This supports unexpected rewards ([A27]) and graded success.
- **Related:** Fiorillo, C. D., Tobler, P. N., & Schultz, W. (2003). Discrete coding of reward probability and uncertainty by dopamine neurons. *Science*, 299(5614), 1898–1902. https://doi.org/10.1126/science.1077349. Verified: yes (abstract).
  - A separate, sustained dopamine response tracked **reward uncertainty**, which is maximal at p = 0.5.
  - This is the biological backdrop to why variable rewards are compelling, and why they need ethical limits.

**[A23] Ravaja, N., Saari, T., Salminen, M., Laarni, J., & Kallinen, K. (2006). Phasic emotional reactions to video game events: A psychophysiological investigation. *Media Psychology*, 8(4), 343–367.** https://doi.org/10.1207/s1532785xmep0804_2

- **Verified:** yes (abstract).
- **Method:** 36 young adults played *Super Monkey Ball 2* while facial EMG, skin conductance and heart rate were recorded.
- **Key findings:**
  - Instantaneous game events produced reliable valence and arousal responses.
  - There was a **largely linear dose–response between rewards obtained and phasic arousal**.
  - Some nominally negative events produced *positively valenced* arousal.
  - Valence depended on the player's active participation.
- **Design implication:** Moment-to-moment excitement can be tuned with event design: reward magnitude, near-escapes and active coping. Arousal that the player causes feels better than arousal that is passively received.

**[A24] Larche, C. J., Musielak, N., & Dixon, M. J. (2017). The Candy Crush sweet tooth: How "near-misses" in Candy Crush increase frustration, and the urge to continue gameplay. *Journal of Gambling Studies*, 33(2), 599–615.** https://doi.org/10.1007/s10899-016-9633-7

- **Verified:** yes (abstract).
- **Method:** 60 avid players, 30 minutes of play, heart rate, skin conductance and self-report recorded across three outcomes: win, loss and near-miss (failing a level by one or two moves).
- **Key findings:**
  - Near-misses were more arousing than losses (higher heart rate and subjective arousal).
  - Near-misses were the **most frustrating** outcome and triggered the **strongest urge to continue**.
  - The authors suggest this may help explain players "playing longer than intended".
- **Design implication:** Close outcomes are exciting (see [A16]). But a near-miss that is *engineered* and immediately paired with a paid "+5 moves" offer uses frustration, not enjoyment. That is on the wrong side of the ethical line (see Principle 12).

**[A25] Zendle, D., & Cairns, P. (2018). Video game loot boxes are linked to problem gambling: Results of a large-scale survey. *PLOS ONE*, 13(11), e0206767.** https://doi.org/10.1371/journal.pone.0206767

- **Verified:** yes (abstract).
- **Method:** Survey, n = 7,422 gamers.
- **Key findings:**
  - Loot-box spending was associated with problem-gambling severity (η² = 0.054).
  - This link was much stronger than the link between problem gambling and other in-game purchases (η² = 0.004).
  - The direction of causality is unknown.
- **Design implication:** Selling randomized rewards for money is the specific risk; ordinary in-game purchases carry little of it. Prefer deterministic purchases: direct-buy items, battle passes with visible reward tracks, subscriptions.

**[A26] Close, J., Spicer, S. G., Nicklin, L. L., Uther, M., Lloyd, J., & Lloyd, H. (2021). Secondary analysis of loot box data: Are high-spending "whales" wealthy gamers or problem gamblers? *Addictive Behaviors*, 117, 106851.** https://doi.org/10.1016/j.addbeh.2021.106851

- **Verified:** yes (PubMed abstract).
- **Method:** Pooled open-access survey datasets: 7,767 loot-box purchasers, 5,933 of whom reported their earnings.
- **Key findings:**
  - The **top 5% of spenders (> $100 per month) generated about half of loot-box revenue**.
  - Spending correlated with problem gambling (ρ = .34) but **not with earnings** (ρ = .02, not significant).
- **Design implication:** A revenue model concentrated on a few heavy spenders of random rewards is likely drawing on vulnerable players, not rich ones. Monitor spending concentration and add spend-awareness tools.
- **Related:** King, D. L., & Delfabbro, P. H. (2018). Predatory monetization schemes in video games (e.g. "loot boxes") and internet gaming disorder. *Addiction*, 113(11), 1967–1969. https://doi.org/10.1111/add.14286. Verified: yes (abstract). Defines **predatory monetization** as purchasing systems that **disguise or withhold the long-term cost** until players are financially and psychologically committed.

### 2.6 Rewards versus intrinsic motivation

**[A27] Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin*, 125(6), 627–668.** https://doi.org/10.1037/0033-2909.125.6.627

- **Verified:** yes (abstract and full-text pages read).
- **Method:** Meta-analysis of 128 experiments.
- **Key findings:**
  - Engagement-contingent (d = −0.40), completion-contingent (d = −0.36) and performance-contingent (d = −0.28) tangible rewards **undermined free-choice intrinsic motivation**. Expected tangible rewards also undermined it.
  - **Positive feedback enhanced** free-choice behaviour (d = +0.33) and self-reported interest (d = +0.31).
  - Tangible rewards were more harmful for children.
  - **Unexpected and task-noncontingent rewards had no undermining effect.**
  - Rewards given in an *informational* rather than controlling style were less harmful.
- **Design implication:**
  - Do not pay players for doing the fun thing. Daily "play X matches to get Y" chores are engagement-contingent rewards.
  - Use surprise rewards and informational feedback about competence.
- **Related:** Cerasoli, C. P., Nicklin, J. M., & Ford, M. T. (2014). Intrinsic motivation and extrinsic incentives jointly predict performance: A 40-year meta-analysis. *Psychological Bulletin*, 140(4), 980–1008. https://doi.org/10.1037/a0035661. Verified: yes (abstract).
  - k = 183 studies, N = 212,468.
  - Intrinsic motivation predicted the **quality** of performance (ρ = .21–.45).
  - Incentives better predicted **quantity**.
  - The two are not necessarily antagonistic.

**[A28] Mekler, E. D., Brühlmann, F., Tuch, A. N., & Opwis, K. (2017). Towards understanding the effects of individual gamification elements on intrinsic motivation and performance. *Computers in Human Behavior*, 71, 525–534.** https://doi.org/10.1016/j.chb.2015.08.048

- **Verified:** yes (full text read).
- **Method:** Online experiment, N = 273, image-tagging task, four conditions: control vs. points vs. levels vs. leaderboard.
- **Key findings:**
  - Game elements increased **output quantity** (η²p = .103).
    - Points vs. control: d = .44.
    - Leaderboard and levels vs. points: d = .39 and .35.
  - They had **no effect on intrinsic motivation or on competence or autonomy satisfaction**, and no effect on quality.
- **Design implication:** Meta-layers (points, levels, leaderboards) move behaviour metrics but do not create fun. If the core loop is not intrinsically enjoyable, these layers raise short-term activity without building lasting motivation.

### 2.7 Game feel and "juiciness"

**[A29] Hicks, K., Gerling, K., Dickinson, P., & Vanden Abeele, V. (2019). Juicy game design: Understanding the impact of visual embellishments on player experience. *CHI PLAY '19*, 185–197.** https://doi.org/10.1145/3311350.3347171

- **Verified:** yes (abstract).
- **Method:** Study 1 (n = 40): a Frogger clone and an FPS. Study 2 (n = 32): *Quake 3 Arena*.
- **Key findings:** Visual embellishments **improved visual appeal in all games**. They affected competence or other experience measures only under specific circumstances.
- **Design implication:** Juice reliably buys attractiveness, which matters for store conversion and first impressions. It is not a substitute for core-loop competence.
- **Related:** Meiners, A.-L., Reich, D., Hicks, K., Alexandrovsky, D., & Gerling, K. (2025). Lushness in game design: The role of non-interactive visual embellishments in player experience. *FDG '25*, 1–11. https://doi.org/10.1145/3723498.3723720. Verified: yes (abstract).
  - N = 31.
  - Decorative "lushness" raised audiovisual appeal and attractiveness but not competence or cognitive load.
- **Related:** Pichlmair, M., & Johansen, M. (2022). Designing game feel: A survey. *IEEE Transactions on Games*, 14(2), 138–152. https://doi.org/10.1109/TG.2021.3072241. Verified: yes (abstract).
  - Review of more than 200 sources.
  - Game feel has three parts: physicality (achieved by *tuning*), amplification (*juicing*) and support (*streamlining*).

**[A30] Kao, D. (2020). The effects of juiciness in an action RPG. *Entertainment Computing*, 34, 100359.** https://doi.org/10.1016/j.entcom.2020.100359

- **Verified:** yes (abstract).
- **Method:** N = 3,018, four otherwise-identical versions with None, Medium, High or Extreme juiciness.
- **Key findings:** **None and Extreme** juice both caused significantly **less playtime**, worse player experience, lower intrinsic motivation and worse performance than Medium and High.
- **Design implication:** Juice has an inverted-U effect. Tune it to medium–high and test for the "extreme" failure mode, which matters on small mobile screens with heavy VFX.

**[A31] Juul, J., & Begy, J. S. (2016). Good feedback for bad players? A preliminary study of "juicy" interface feedback. Poster, *1st Joint International Conference of DiGRA and FDG*, Dundee.** https://jesperjuul.net/text/juiciness.pdf

- **Verified:** yes (full text read).
- **Method:** N = 46 students, 6 minutes of play, a tile-matching game (match-3-like) in a basic version and a juicy version.
- **Key findings:** **No hypothesis was confirmed.**
  - Rated quality was 3.74 (juicy) vs. 3.26 (basic), p = .20.
  - Scores were *lower* in the juicy version (40,340 vs. 49,682, p = .12).
  - Ease of use did not improve.
  - The authors suggest redundant feedback may raise cognitive load.
- **Design implication:** In tile-matching genres especially, test whether effects obscure the board state.

### 2.8 Player motivation typologies (with data)

**[A32] Yee, N. (2006). Motivations for play in online games. *CyberPsychology & Behavior*, 9(6), 772–775.** https://doi.org/10.1089/cpb.2006.9.772

- **Verified:** yes (full text read).
- **Method:** Factor analysis of survey data from about 3,000 MMORPG players.
- **Key findings:**
  - Ten subcomponents grouped into **achievement** (advancement, mechanics, competition), **social** (socializing, relationship, teamwork) and **immersion** (discovery, role-playing, customization, escapism).
  - The three main components were only weakly correlated (r < .10). Players are not mutually exclusive "types".
  - Men scored higher on achievement components and women higher on relationship.
  - **Age explained more variance in achievement than gender** (β = .32 vs. .16).
  - Problematic usage was best predicted by **escapism** (β = .31), hours per week (β = .30) and **advancement** (β = .17); R² = .34.
- **Design implication:** Design for overlapping motives, not exclusive types. Escapism and pure advancement-grinding are the motive profiles most tied to problematic use. Avoid making them the only reason to log in.

**[A33] Yee, N. (2016). The Gamer Motivation Profile: What we learned from 250,000 gamers. *CHI PLAY '16* (keynote abstract), p. 2.** https://doi.org/10.1145/2967934.2967937

- **Verified:** partial.
  - The CHI PLAY abstract and the model structure were verified, the structure from the official Quantic Foundry reference PDF: https://quanticfoundry.com/wp-content/uploads/2019/04/Gamer-Motivation-Model-Reference.pdf.
  - Age, gender and trend findings come from Quantic Foundry blog posts that were seen only through search-engine summaries. They are **industry data, not peer-reviewed**.
- **Model:** **12 motivations in 6 clusters**:
  - Action: destruction, excitement
  - Social: competition, community
  - Mastery: challenge, strategy
  - Achievement: completion, power
  - Immersion: fantasy, story
  - Creativity: design, discovery

  These group into three higher-order families: Action-Social, Mastery-Achievement and Immersion-Creativity. The model was built by factor analysis of more than 250,000 respondents at the time; the reference PDF says more than 1.25 million.
- **Reported findings (QF blog, partial):**
  - **Competition declines most with age**, faster for men. Strategy is the most age-stable motivation.
  - Gender differences are real but **smaller than age differences**.
  - Women's most common primary motivations are Completion and Fantasy; men's are Competition and Destruction.
  - Average Strategy scores fell to roughly the 33rd percentile of the 2015 norm by April 2024.
- **Sample caveat:** A 2026 interview with Yee states that the sample is more than 70% male and only about 35% mobile gamers (secondary source: PlayerDriven, 2026).
- **Related:** Yee, N., & Ducheneaut, N. (2018). Gamer motivation profiling: Uses and applications. In *Games User Research* (Oxford University Press). https://doi.org/10.1093/oso/9780198794844.003.0028. Verified: yes (abstract). Links motivation segments to engagement and retention outcomes.
- **Design implication:** A practical way to segment a mobile audience is by motivation clusters (for example Completion, Fantasy and Design for many casual players). Treat the specific numbers as directional, given the self-selected, male-skewed, PC/console-heavy sample.

**[A34] Vahlo, J., Kaakinen, J. K., Holm, S. K., & Koponen, A. (2017). Digital game dynamics preferences and player types. *Journal of Computer-Mediated Communication*, 22(2), 88–103.** https://doi.org/10.1111/jcc4.12181

- **Verified:** yes (abstract). The names of the seven types were not checked.
- **Method:** Game dynamics coded for 700 games; preference survey of N = 1,717 players.
- **Key findings:**
  - Five dynamics-preference factors: **assault, manage, journey, care, coordinate**.
  - Seven player types.
  - Identifying player types required **both preferred and *disliked* dynamics**.
- **Design implication:** Segment by what players avoid as well as what they like. One disliked dynamic (for example forced PvP "assault") can push an otherwise well-matched player away.

**[A35] Hamari, J., & Tuunanen, J. (2014). Player types: A meta-synthesis. *Transactions of the Digital Games Research Association*, 1(2).** https://doi.org/10.26503/todigra.v1i2.13

- **Verified:** yes (abstract).
- **Method:** Meta-synthesis of earlier player typologies.
- **Key findings:** Seven recurring dimensions: **intensity, achievement, exploration, sociability, domination, immersion, in-game demographics**.
- **Design implication:** A checklist to make sure the design serves several of these dimensions, including low-intensity players, who are central on mobile.

**[A36] Tondello, G. F., Wehbe, R. R., Diamond, L., Busch, M., Marczewski, A., & Nacke, L. E. (2016). The Gamification User Types Hexad Scale. *CHI PLAY '16*, 229–243.** https://doi.org/10.1145/2967934.2968082

- **Verified:** yes (abstract).
- **Method:** Development of a 24-item scale for six user types: Philanthropist, Socialiser, Free Spirit, Achiever, Player and Disruptor.
- **Key findings:** Reliable. Associated with Big Five personality traits and with preferences for particular design elements.
- **Caution:** Built for *gamification*, not entertainment games.
- **Related:** Tondello, G. F., Mora, A., Marczewski, A., & Nacke, L. E. (2019). Empirical validation of the Gamification User Types Hexad scale in English and Spanish. *IJHCS*, 127, 95–111. https://doi.org/10.1016/j.ijhcs.2018.10.002. Verified: yes (abstract). Structure supported; some types more common; gender and age correlate with types.
- **Related:** Tondello, G. F., Valtchanov, D., Reetz, A., Wehbe, R. R., Orji, R., & Nacke, L. E. (2018). Towards a trait model of video game preferences. *IJHCI*, 34(8), 732–748. https://doi.org/10.1080/10447318.2018.1461765. Verified: yes (abstract). More than 50,000 BrainHex respondents yielded three traits: **action, aesthetic, goal orientation**.
- **Design implication:** Trait (continuous) models are better supported than discrete "types". Use them for personalising offers and content mix.

### 2.9 Autonomy, identity, meaningful choice and eudaimonic experiences

**[A37] Birk, M. V., Atkins, C., Bowey, J. T., & Mandryk, R. L. (2016). Fostering intrinsic motivation through avatar identification in digital games. *CHI '16*, 2982–2995.** https://doi.org/10.1145/2858036.2858062

- **Verified:** yes (abstract).
- **Method:** N = 126 players of a custom endless runner.
- **Key findings:**
  - Similarity, embodied and wishful identification with the avatar increased autonomy, immersion, effort, enjoyment and positive affect.
  - **Greater identification predicted more time played** in an unending version of the game.
- **Design implication:** Avatar or character identification and customization is an evidence-based driver of intrinsic motivation and persistence. It is also a natural, non-predatory IAP surface (cosmetics, personalisation).
- **Related:** Birk, M. V., & Mandryk, R. L. (2018). Combating attrition in digital self-improvement programs using avatar customization. *CHI '18*, 1–15. https://doi.org/10.1145/3173574.3174234. Verified: yes (abstract).
  - N = 250, a daily task over 3 weeks.
  - Players who **customized** their avatar showed **significantly less attrition** and more logins than those given a generic avatar.

**[A38] Iten, G. H., Steinemann, S. T., & Opwis, K. (2018). Choosing to help monsters: A mixed-method examination of meaningful choices in narrative-rich games and interactive narratives. *CHI '18*, 1–13.** https://doi.org/10.1145/3173574.3173915

- **Verified:** yes (abstract).
- **Method:** A qualitative study followed by an experiment.
- **Key findings:** Choices are experienced as meaningful when they have **moral, social and consequential** characteristics. Meaningful choices increased **appreciation**.
- **Design implication:** "Choice" only supports autonomy when the consequences are visible and matter socially or morally. Cosmetic branching does not.
- **Related:** Deterding, S. (2016). Contextual autonomy support in video game play: A grounded theory. *CHI '16*, 3931–3943. https://doi.org/10.1145/2858036.2858395. Verified: yes (abstract).
  - Interview study.
  - Leisure play supports autonomy through freedom to disengage and configure, and through a lack of real-world consequences.
  - Autonomy is thwarted when socially demanded play mismatches spontaneous interest.
  - Implication: obligations such as guild duties, streak pressure or expiring timers can thwart autonomy even inside a leisure game.

**[A39] Oliver, M. B., Bowman, N. D., Woolley, J. K., Rogers, R., Sherrick, B. I., & Chung, M.-Y. (2016). Video games as meaningful entertainment experiences. *Psychology of Popular Media Culture*, 5(4), 390–405.** https://doi.org/10.1037/ppm0000066

- **Verified:** yes (abstract).
- **Method:** Experiment, N = 512. Participants recalled either a fun game or a meaningful game.
- **Key findings:**
  - Enjoyment was high in both groups. Appreciation was higher for meaningful games.
  - Enjoyment was tied to **gameplay plus competence and autonomy**.
  - Appreciation was tied to **story plus insight and relatedness**.
- **Design implication:** Long-lasting attachment benefits from a second track besides fun mechanics: meaning delivered through story, characters and relationships.
- **Related:** Bopp, J. A., Mekler, E. D., & Opwis, K. (2016). Negative emotion, positive experience? Emotionally moving moments in digital games. *CHI '16*, 2996–3006. https://doi.org/10.1145/2858036.2858227. Verified: yes (abstract). Accounts from 121 players: most enjoyed and appreciated experiencing **negative emotions such as sadness**, for example in-game loss and attachment to characters.
- **Related:** Daneels, R., Bowman, N. D., Possler, D., & Mekler, E. D. (2021). The "eudaimonic experience": A scoping review of the concept in digital games research. *Media and Communication*, 9(2), 178–190. https://doi.org/10.17645/mac.v9i2.3824. Verified: yes (abstract). Review of 82 publications. Covers appreciation, emotionally moving experiences, self-reflection and **social connectedness** as forms of eudaimonic experience.

### 2.10 Well-being and playtime: designing "long playtime" responsibly

**[A40] Johannes, N., Vuorre, M., & Przybylski, A. K. (2021). Video game play is positively correlated with well-being. *Royal Society Open Science*, 8(2), 202049.** https://doi.org/10.1098/rsos.202049

- **Verified:** yes (PMC full text).
- **Method:** Survey linked to publisher telemetry for two games.
  - *Plants vs. Zombies: Battle for Neighborville*: n = 518, 471 with telemetry.
  - *Animal Crossing: New Horizons*: n = 6,011, 2,756 with telemetry.
- **Key findings:**
  - Objective playtime had a **small positive** association with affective well-being: β = 0.10 (PvZ) and 0.06 (AC:NH) per 10 hours; R² ≈ .01.
  - Autonomy and relatedness consistently predicted well-being *positively*. Extrinsic ("pressured") motivation predicted it *negatively*.
  - Motivations did not moderate the playtime–well-being link.
- **Design implication:** The motivational quality of play predicts well-being far more than hours do.

**[A41] Vuorre, M., Johannes, N., Magnusson, K., & Przybylski, A. K. (2022). Time spent playing video games is unlikely to impact well-being. *Royal Society Open Science*, 9(7), 220411.** https://doi.org/10.1098/rsos.220411

- **Verified:** yes (PMC full text).
- **Method:** Three-wave, six-week panel of 38,935 players across 7 games from 7 publishers (including *Animal Crossing*, *Apex Legends*, *Gran Turismo Sport* and *EVE Online*), with telemetry.
- **Key findings:**
  - One extra hour per day was associated with a change of about 0.03 units in well-being. A player would need about **10 more hours per day** for the change to be noticeable.
  - There was a 99% probability that the effect of one hour per day is subjectively unnoticeable.
  - Intrinsic motivation predicted later life satisfaction (+0.18, 95% CI [0.08, 0.32]) and affect (+0.10, CI [−0.01, 0.18]).
  - Extrinsic motivation pointed negative (affect −0.09, CI [−0.21, 0.04]; life satisfaction −0.11, CI [−0.28, 0.05]). These intervals include zero, so the evidence is directional.
  - The authors say volitional play is linked to better later well-being and compelled play to worse.
  - Limitation: self-selection and attrition.
- **Design implication:** Long playtime is not inherently harmful. **Compulsion** is the risk. Build for volition, for example through rest-friendly progression and no punishment for absence.
- **Related:** Przybylski, A. K. (2014). Electronic gaming and psychosocial adjustment. *Pediatrics*, 134(3), e716–e722. https://doi.org/10.1542/peds.2013-4021. Verified: yes (abstract).
  - Representative sample of 10–15-year-olds.
  - Less than 1 hour per day was associated with slightly *better* adjustment; more than 3 hours per day with slightly worse.
  - Effects were tiny (< 1.6% of variance).
- **Related (preprint, not yet peer-reviewed as of this check):** Ballou, N., Vuorre, M., Hakman, T., Magnusson, K., & Przybylski, A. K. (2025). Perceived value of video games, but not hours played, predicts mental well-being in adult Nintendo players. *PsyArXiv*. https://doi.org/10.31234/osf.io/3srcw_v2. Verified: yes (abstract).
  - 703 US adults; more than 140,000 hours of play across 150 Switch games.
  - Playtime did not predict well-being.
  - **"Gaming life fit"**, players' sense that their game time is valuable and fits their life, did predict well-being.

**[A42] Vuorre, M., Ballou, N., Hakman, T., Magnusson, K., & Przybylski, A. K. (2024). Affective uplift during video game play: A naturalistic case study. *ACM Games: Research and Practice*, 2(3), 1–14.** https://doi.org/10.1145/3659464

- **Verified:** yes (abstract).
- **Method:** 162,325 in-game mood reports from 67,328 sessions of 8,695 *PowerWash Simulator* players.
- **Key findings:**
  - Mood during play was higher than at the start of the session by about +0.034 on a 0–1 scale.
  - About **72%** of players are predicted to experience this uplift.
  - **Most of the uplift happens in the first 15 minutes.**
  - The design is not causal.
- **Design implication:** Short, satisfying mobile sessions of about 10–15 minutes may capture most of the mood benefit of play. Designing natural stopping points after the "uplift window" fits player well-being and does not have to cost retention.

### 2.11 Mobile-specific enjoyment and continuance

**[A43] Merikivi, J., Tuunainen, V., & Nguyen, D. (2017). What makes continued mobile gaming enjoyable? *Computers in Human Behavior*, 68, 411–421.** https://doi.org/10.1016/j.chb.2016.11.070

- **Verified:** partial.
  - Bibliographic record verified.
  - The conclusions come from the Semantic Scholar TLDR; the abstract and sample are not accessible.
- **Key findings (TLDR):** Continued mobile game use is **strongly driven by enjoyment**. Enjoyment is mainly driven by the game's capacity for **"regeneration"** (ongoing novelty and variety) and by a **visually attractive, easy-to-use interface**.
- **Related (verified precursor):** Merikivi, J., Nguyen, D., & Tuunainen, V. K. (2016). Understanding perceived enjoyment in mobile game context. *HICSS-49*, 3801–3810. https://doi.org/10.1109/HICSS.2016.473. Verified: yes (abstract).
  - Structural equation model, N = 207 mobile gamers.
  - **Design aesthetics, perceived ease of use and novelty** predicted enjoyment, and enjoyment predicted intention to continue.
  - The abstract reports support for these three out of six antecedents tested; the other three were variety, interactivity and challenge.
- **Related (partial):** Su, Y.-S., Chiang, W.-L., Lee, C.-T. J., & Chang, H.-C. (2016). The effect of flow experience on player loyalty in mobile game application. *Computers in Human Behavior*, 63, 240–248. https://doi.org/10.1016/j.chb.2016.05.049. Only the TLDR was accessible: challenge and social interaction raise loyalty via flow.
- **Related:** Alha, K., Koskinen, E., Paavilainen, J., & Hamari, J. (2019). Why do people play location-based augmented reality games: A study on Pokémon GO. *Computers in Human Behavior*, 93, 114–122. https://doi.org/10.1016/j.chb.2018.12.008. Verified: yes (abstract).
  - n = 2,612.
  - **Progressing in the game was the most common reason to continue playing.**
  - Players quit mostly because of their life situation and playability problems.
- **Design implication:** On mobile, three things carry most of the weight:
  - polish and ease of use from the first screen;
  - a steady stream of fresh but moderate novelty (compare [A12]);
  - visible progression.

**[A44] Hamari, J., & Keronen, L. (2017). Why do people play games? A meta-analysis. *International Journal of Information Management*, 37(3), 125–141.** https://doi.org/10.1016/j.ijinfomgt.2017.01.006

- **Verified:** yes (author manuscript read).
- **Method:** Meta-analysis of 48 quantitative studies of game-use intentions.
- **Key findings:**
  - Correlations with intention to play:
    - **Enjoyment: r = .586** (k = 22, N = 13,116)
    - Attitude: .689
    - Usefulness: .572
    - Ease of use: .438
    - Flow: .373
    - Gender: no relation
  - For **hedonic** games the path from enjoyment to intention was .292, against .052 for utilitarian games.
- **Design implication:** For entertainment games, perceived enjoyment is among the strongest known predictors of intention to keep playing. Measure it routinely.

**[A45] Gutwin, C., Rooke, C., Cockburn, A., Mandryk, R. L., & Lafreniere, B. (2016). Peak-end effects on player experience in casual games. *CHI '16*, 5608–5619.** https://doi.org/10.1145/2858036.2858419

- **Verified:** yes (abstract). Sample sizes were not checked.
- **Method:** Two experiments that manipulated the *sequence* of difficulty in otherwise identical casual games: a Bejeweled-like match game, a reaction game and a shootout game.
- **Key findings:**
  - **Remembered challenge** was strongly shaped by peak and end moments.
  - Effects on fun, enjoyment and wish to replay were mixed: sometimes significant, never against the hypothesis.
- **Design implication:** End sessions and levels on a high, for example with an easier finishing sequence or a celebratory end, because memory of the session drives the decision to return. The evidence for enjoyment specifically is moderate.

**[A46] Hamari, J., Alha, K., Järvelä, S., Kivikangas, J. M., Koivisto, J., & Paavilainen, J. (2017). Why do players buy in-game content? An empirical study on concrete purchase motivations. *Computers in Human Behavior*, 68, 538–546.** https://doi.org/10.1016/j.chb.2016.11.045

- **Verified:** yes (abstract).
- **Method:** Survey, N = 519. Nineteen purchase reasons were drawn from top-grossing F2P games, the literature and experts.
- **Key findings:**
  - The reasons formed six dimensions: unobstructed play, social interaction, competition, economical rationale, indulging the children, and unlocking content.
  - **Unobstructed play, social interaction and economical rationale** predicted spending.
- **Design implication:** This is the clearest bridge between fun and revenue, and it holds a tension.
  - Selling "unobstructed play" works, but manufacturing obstacles in order to sell their removal frustrates autonomy and competence ([A5], [A6]) and moves toward predatory design ([A26]).
  - Prefer selling **more of what players enjoy**: content, cosmetics, convenience players actually *want*, and social features. Avoid selling relief from pain you designed in.

---

## 3. Where the evidence conflicts, is null, or is weaker than often claimed

- **Optimal challenge vs. "easier holds players longer".** Lab and flow studies favour a challenge–skill fit ([A7], [A8], [A9], [A16]). Field A/B experiments with tens of thousands of players found easier assigned difficulty kept players longer ([A11]). They also found moderate difficulty works best when players **choose** it ([A12]).
  - A reconciliation: put uncertainty and close outcomes into an easy-to-succeed baseline, and offer optional challenge.
- **Juiciness.** The effects are inconsistent:
  - one null study ([A31]);
  - mostly an aesthetic benefit ([A29]);
  - an inverted U ([A30]);
  - amplification *reduced* competence ([A20]).

  Do not assume "more juice = more fun".
- **Gamification layers.** Points, levels and leaderboards raise activity but not intrinsic motivation ([A28]).
- **Dopamine.** The single PET study usually cited (n = 8) did not survive the authors' own re-analysis ([A21]). The prediction-error and uncertainty findings from animal electrophysiology ([A22]) are robust but indirect for game design.
- **Playtime and well-being.** Effects are near zero ([A41]) or slightly positive ([A40]); a cross-sectional "Goldilocks" curve appears in adolescents. The effects of motivation quality are more consistent but also small, and most studies are correlational.
- **Typologies.** Discrete "types" are poorly supported: motives co-occur ([A32]). Industry datasets are self-selected and skew male and PC/console ([A33]).
- **Peak-end.** The effect is robust for remembered challenge but mixed for enjoyment ([A45]).
- **Expectation effects.** Framing alone can raise perceived immersion ([A13]). Playtests must be blinded.

---

## 4. Top 12 actionable design principles (synthesized from the evidence)

Evidence strength: **Strong** means several experiments or large telemetry studies agree. **Moderate** means a few studies or mixed results. **Emerging** means recent or single studies.

1. **Make need satisfaction the master metric of the core loop.** (Strong)
   - Every loop should give players clear, attributable success (competence), real choice and self-expression (autonomy), and meaningful connection (relatedness).
   - Track these, and *need frustration*, with PENS or BANGS in playtests and periodic in-game pulses.
   - Need satisfaction predicts enjoyment (45–51% of variance), intention to play again, and healthy rather than obsessive engagement.
   - Evidence: [A1], [A2], [A3], [A4], [A5], [A6], [A40], [A41].

2. **Win the first 15 minutes with intuitive control and polish, not tutorials.** (Strong / Emerging)
   - Intuitive controls feed competence and autonomy, which drive enjoyment and voluntary continuation.
   - On mobile, aesthetics, ease of use and novelty drive enjoyment, and enjoyment drives continuance.
   - Most of the mood uplift of a session arrives in its first 15 minutes.
   - Evidence: [A1], [A43], [A44], [A42], [A29].

3. **Default to "easy but interesting", and let players opt into harder content.** (Strong)
   - Assigned difficulty should lean easy, which kept tens of thousands of players longer.
   - Offer *self-selected* moderate or hard challenges (optional levels, hard modes, difficulty choice), where challenge is most motivating.
   - Use invisible DDA to keep players in the fit zone.
   - Make challenge **cognitive** (decisions, mild time pressure), not physical busywork.
   - Evidence: [A11], [A12], [A8], [A9], [A10], [A13].

4. **Engineer uncertainty and close outcomes inside gameplay.** (Strong)
   - Tune matchmaking, AI and level outcomes toward close finishes, comebacks and suspense.
   - Narrow wins are enjoyed more than blowouts; 69% of players chose to replay the close game.
   - Suspense causally raises enjoyment, and close games raised motivation in a field experiment with about 6,500 players.
   - Near-escapes and rewards the player actively earns produce positively valenced arousal, with a dose–response between rewards and arousal.
   - Evidence: [A16], [A17], [A12], [A18], [A22], [A23].

5. **Build curiosity with information gaps and paced novelty.** (Strong / Emerging)
   - Give every session an open question: hidden areas, unidentified items, teased mechanics, mysteries about characters.
   - Introduce new mechanics at moderate novelty, one skill at a time.
   - Curiosity was the strongest predictor of enjoyment and the only predictor of voluntary playtime in a preregistered experiment with n = 1,699.
   - The curiosity that matters most is about one's *own success*, not random cosmetic variety.
   - Evidence: [A20], [A19], [A18], [A12], [A43].

6. **Juice in moderation, and only on success.** (Moderate)
   - Feedback effects should be medium to high, triggered by success, graded by quality of play ("good" vs. "perfect"), and never obscure the board or the link between action and outcome.
   - None and Extreme juice both cut playtime.
   - Amplification that hides causality lowers competence.
   - Lean on juice for first impressions and appeal.
   - Evidence: [A30], [A20], [A29], [A31].

7. **Make rewards informational and surprising, not controlling.** (Strong)
   - Prefer positive competence feedback (d ≈ +0.33) and unexpected rewards, which do not undermine intrinsic motivation.
   - Avoid expected, contingent rewards for doing the fun activity (d −0.28 to −0.40), such as "play 5 matches for coins".
   - Do not rely on points or leaderboards to create fun; they raise activity, not intrinsic motivation.
   - Use surprise rewards that are deterministic in value, not paid gambles.
   - Evidence: [A27], [A28], [A22], [A6].

8. **Give players identity and real choice, and monetize self-expression.** (Strong / Moderate)
   - Avatar or character identification and customization raise autonomy, enjoyment and persistence, and reduce attrition in a 3-week daily-use experiment.
   - Choices should have visible social, moral or strategic consequences.
   - Cosmetics, personalization and expressive content are well-supported, non-predatory IAP surfaces.
   - Evidence: [A37], [A4], [A38], [A1], [A39].

9. **Make mastery visible and failure meaningful, and add a meaning track.** (Moderate)
   - Show skill growth and progression, since self-efficacy carries the effect of performance on enjoyment and progression is the top reason to continue.
   - Make each failure teach something.
   - Add story, characters and relationships for appreciation and long-term attachment, including bittersweet moments.
   - Evidence: [A14], [A15], [A43], [A39].

10. **Segment by motivation, not demographics, and respect what players dislike.** (Moderate)
    - Motives co-occur, so design for two or three target motivation clusters.
    - Include disliked dynamics in segmentation.
    - Expect Competition to appeal less as the audience ages.
    - Avoid making escapism or pure advancement grind the only reason to log in; those motives best predicted problematic use.
    - Evidence: [A32], [A33], [A34], [A35], [A36].

11. **Design the session arc: a strong peak, a satisfying end, natural stopping points.** (Moderate / Emerging)
    - End levels and sessions on a high, because remembered experience drives return.
    - Use short session units (about 10–15 minutes) that capture the mood uplift.
    - Offer clean "save and stop" moments rather than cliffhanger pressure.
    - Evidence: [A45], [A42], [A41].

12. **Hold the ethical line: grow playtime and revenue from volition, not compulsion.** (Strong for the risk signals)
    - Long playtime is fine; compelled playtime is not. Obsessive or extrinsic engagement predicts tension, lower enjoyment and lower well-being.
    - **Do not:**
      - sell randomized rewards (spending is linked to problem gambling, η² = .054 vs. .004 for other purchases);
      - pair engineered near-misses with paid continues;
      - hide long-term costs;
      - manufacture obstacles in order to sell their removal.
    - **Do:**
      - sell deterministic content, cosmetics and convenience players want;
      - offer subscriptions with transparent value;
      - add spend and time-awareness tools;
      - monitor revenue concentration. When the top 5% of spenders provide about half of randomized-reward revenue, that tracks problem gambling, not wealth.
    - Evidence: [A6], [A5], [A40], [A41], [A24], [A25], [A26], [A46], [A27].

---

## 5. Recommended measurement kit for playtests and live operations (from the sources above)

- **Need satisfaction and frustration:** PENS ([A1]; validated in Johnson et al. 2018) and BANGS ([A5]).
- **Challenge profile:** CORGIS, covering performative, cognitive, emotional and decision-making challenge ([A10]).
- **Uncertainty profile:** PUGS ([A18]).
- **Behavioural intrinsic motivation:** *free-choice* playtime after a fixed mandatory period ([A1], [A20]) and voluntary return rate. Prefer these over raw session length, which compulsion can inflate ([A6]).
- **Well-being guardrails:** brief in-game mood check-ins ([A42]), an item on gaming life fit ([A41], related preprint), and extrinsic or "pressured" motivation items ([A40], [A41]).
- **Method guardrail:** blind A/B tests, because framing shifts perceived experience ([A13]).
