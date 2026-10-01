# F. Behavioural & Progression Design Mechanics: Evidence Review

**Scope:** goals and progress, achievements and badges, streaks and habits (including daily rewards and appointment mechanics), collection and completion, customization and ownership, session endings, replayability and procedural content, time-limited events and FOMO, and mobile session context.
**Out of scope** (covered by other workstreams): SDT, flow and juiciness theory; churn analytics and difficulty tuning; monetization and loot boxes; social systems. Social and monetization items appear here only where a streak or event study needs them.
**Prepared:** 2026-10-01 for a free-to-play mobile game monetized only through in-app purchases and subscriptions, with no ads.

**Verification legend**
- **Verified: yes** means I located the primary source and confirmed the title, authors, year, venue and DOI. The quoted findings come from the full text or the publisher abstract.
- **Verified: partial** means the metadata is confirmed but some quoted findings come from the abstract only, from a secondary summary (named in the entry), or the study-level numbers could not be reached.
- **Industry** means a company or practitioner report. These are self-reported and not peer-reviewed. The numbers are as published.

**How strong is the evidence?** Most effects below are **small to moderate**, and many come from consumer or habit psychology outside games. Randomized evidence from inside games is rare: F9 is a game A/B test, F14 reports A/B tests in a gamified app, and F40 is pre/post game log data. Where a study found a null or harmful effect, the entry says so.

---

## 1. Goals and progress

**[F1] Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation: A 35-year odyssey. *American Psychologist*, 57(9), 705–717.**
https://doi.org/10.1037/0003-066X.57.9.705
- **Verified:** yes (full text read). The authors' own update was also checked: Locke & Latham (2006), *Current Directions in Psychological Science* 15(5), 265–268, https://doi.org/10.1111/j.1467-8721.2006.00449.x.
- **Method & sample:** Synthesis of about 35 years of laboratory and field research. The 2006 update says the theory rests on about 400 studies, and that as of 1990 support covered more than 88 tasks and more than 40,000 participants.
- **Key findings:**
  - Goal difficulty relates to effort and performance in a positive, linear way. Meta-analytic d = .52–.82. Performance levels off only at the limits of ability or when commitment lapses.
  - Specific, difficult goals beat "do your best" goals (d = .42–.80).
  - Goals combined with summary progress feedback work better than goals alone.
  - Commitment, task complexity and situational constraints moderate the effect.
  - On new, complex tasks, proximal sub-goals added to a distal goal raised self-efficacy and profit compared with a distal goal alone or "do your best" (Latham & Seijts business game). Learning goals beat outcome goals when skills are still being acquired.
- **Design implication:** Show 1–3 specific, numeric, slightly-stretch goals at all times, with live progress feedback. Split season and long-term goals into daily and weekly proximal goals. For newly unlocked complex systems, use "learn/try" goals rather than outcome targets.

**[F2] Kivetz, R., Urminsky, O., & Zheng, Y. (2006). The goal-gradient hypothesis resurrected: Purchase acceleration, illusionary goal progress, and customer retention. *Journal of Marketing Research*, 43(1), 39–58.**
https://doi.org/10.1509/jmkr.43.1.39
- **Verified:** yes (full text read).
- **Method & sample:** Field data from a real café loyalty program and a song-rating reward website, field experiments, and hazard/Tobit/logit models.
- **Key findings:**
  - **Goal gradient:** inter-purchase time fell by 20% (0.7 days) from the first stamp to the last.
  - **Illusory progress:** a 12-stamp card with 2 bonus stamps was completed in 12.7 days, against 15.6 days for a plain 10-stamp card. That is about 20% faster (medians 10 vs 15 days).
  - **Post-reward resetting:** the first two inter-purchase times on the second card were 3.1 and 2.7 days, against 2.2 and 2.1 days at the end of the first card (p < .01).
  - Customers who accelerated more toward the first reward were more likely to be retained and re-engaged faster.
  - Effort tracks the *proportion* of distance remaining.
- **Design implication:** Show proportional distance-to-goal in reward tracks. Expect a slump right after each reward, so start the next goal immediately with visible progress. Early acceleration toward the first reward can serve as a leading indicator of retention.

**[F3] Nunes, J. C., & Drèze, X. (2006). The endowed progress effect: How artificial advancement increases effort. *Journal of Consumer Research*, 32(4), 504–512.**
https://doi.org/10.1086/500480
- **Verified:** partial. Metadata and abstract were confirmed at the publisher. The 19% vs 34% figures come from secondary sources that cite the paper, not from my reading of the full text.
- **Method & sample:** Car-wash loyalty field experiment plus lab studies.
- **Key findings:**
  - Turning an 8-step task into a 10-step task with 2 steps already done reframes it as "undertaken and incomplete." This raises completion and shortens completion time.
  - Reported redemption was 34% for the endowed card vs 19% for the plain card, with shorter gaps between visits.
  - The effect depends on perceived task completion, not on avoiding waste of the free progress.
  - Moderators: the reason given for the endowment, and the currency in which progress is recorded.
- **Design implication:** Open every new track (battle pass, collection book, quest chain) with a justified head start, such as "Welcome bonus: 2/10." Record progress in units that make the head start visible.

**[F4] Bonezzi, A., Brendl, C. M., & De Angelis, M. (2011). Stuck in the middle: The psychophysics of goal pursuit. *Psychological Science*, 22(5), 607–612.**
https://doi.org/10.1177/0956797611404899
- **Verified:** yes (abstract).
- **Method & sample:** Experiments testing a psychophysical model of goal progress.
- **Key findings:**
  - Motivation can be higher when people are far from or close to the goal, and lowest around halfway ("stuck in the middle").
  - The shape of the gradient depends on whether people measure progress from the starting point or from the end state.
  - This qualifies the monotonic goal gradient in F2.
- **Design implication:** In long tracks (30–100 tiers), add milestone rewards near the midpoint. Switch the framing from "done so far" to "only N left" after roughly 50%.

**[F5] Koo, M., & Fishbach, A. (2008). Dynamics of self-regulation: How (un)accomplished goal actions affect motivation. *Journal of Personality and Social Psychology*, 94(2), 183–195.**
https://doi.org/10.1037/0022-3514.94.2.183
- **Verified:** yes (PubMed abstract, PMID 18211171).
- **Method & sample:** Four studies (exam study, consumption, charity contributions).
- **Key findings:**
  - Highlighting progress made so far ("to-date") increases adherence when commitment is uncertain, for example first-time contributors.
  - Highlighting what remains ("to-go") increases adherence when commitment is certain, for example repeat contributors.
- **Design implication:** Segment progress messaging. New or uncommitted players should see what they have achieved. Committed veterans should see what remains, such as "3 cards left to complete the set."

**[F6] Ghibellini, R., & Meier, B. (2025). Interruption, recall and resumption: A meta-analysis of the Zeigarnik and Ovsiankina effects. *Humanities and Social Sciences Communications*, 12, 962.**
https://doi.org/10.1057/s41599-025-05000-w
- **Verified:** yes (full text read).
- **Method & sample:** Meta-analysis of studies using the interrupted-task paradigm.
- **Key findings:**
  - **Null result for the Zeigarnik memory effect.** Excluding Zeigarnik's original study, the ratio of interrupted to completed tasks recalled is 0.99. Interrupted tasks make up 49.16% of recalled tasks. The weighted effect is d_z = 0.15 (8 publications). The authors conclude the effect "lacks universal validity."
  - **The Ovsiankina effect is robust.** Interrupted tasks are resumed 67.0% of the time (21 publications; 66.8% excluding the original), against a 50% chance level.
  - In one included study (McGraw & Fiala, 1982), paying a monetary incentive lowered resumption.
- **Design implication:** "Open loops" work through the urge to resume, not through memory. Finish sessions with a visible, resumable unfinished task. Surface it on the next app open rather than relying on recall. Don't pay players to resume, because extrinsic incentives can crowd out the urge.

## 2. Achievements and badges

**[F7] Hamari, J. (2017). Do badges increase user activity? A field experiment on the effects of gamification. *Computers in Human Behavior*, 71, 469–478.**
https://doi.org/10.1016/j.chb.2015.03.036
Companion study: **Hamari, J. (2013). Transforming homo economicus into homo ludens: A field experiment on gamification in a utilitarian peer-to-peer trading service. *Electronic Commerce Research and Applications*, 12(4), 236–245.** https://doi.org/10.1016/j.elerap.2013.01.004
- **Verified:** yes for the 2017 paper (full text read). Partial for 2013 (metadata confirmed; findings as summarized in the 2017 paper's Table 1).
- **Method & sample:**
  - 2017: two-year between-groups field study on Sharetribe. Users who registered in the year before badges launched (n = 1,410) were compared with those who registered in the year after (n = 1,579).
  - Badges were tiered bronze/silver/gold, for example 2/6/15 actions, and covered core actions. About 90% of users were university students. The design is pre/post, not randomized.
- **Key findings (2017), pre vs post means:**

  | Activity | Before badges | After badges |
  |---|---|---|
  | Trade proposals | 0.45 | 0.84 |
  | Accepted transactions | 0.087 | 0.41 |
  | Comments | 0.094 | 0.48 |
  | Page views | 45.1 | 83.5 |

  - Effect sizes were small (r² = .010–.029).
  - In Poisson models controlling for network size and tenure, transactions rose ×4.54, comments ×1.91 and page views ×1.82. The effect on trade proposals was **no longer significant** (×1.22, p = .18).
  - Novelty was not measured.
- **Key findings (2013, N = 3,234):** Simply adding badges did **not** significantly increase activity. Only users who actively monitored their own and others' badges became more active.
- **Design implication:** Badges can raise core-loop activity, but only when they are visible in the main flow (post-match screens, profile, feed), not buried in a menu. Expect small effects and measure them with holdout groups.

**[F8] Montola, M., Nummenmaa, T., Lucero, A., Boberg, M., & Korhonen, H. (2009). Applying game achievement systems to enhance user experience in a photo sharing service. *Proc. MindTrek '09*, 94–97.**
https://doi.org/10.1145/1621841.1621859
- **Verified:** partial. Metadata confirmed via CrossRef and Semantic Scholar. Findings as summarized in Hamari (2017), Table 1. The full text was not accessible.
- **Method & sample:** Qualitative field study of achievements added to a photo-sharing and social networking service.
- **Key findings:**
  - Achievements showed some potential outside games and triggered friendly competition and comparison.
  - **Many users were not convinced.** They worried achievements would motivate undesirable usage patterns.
- **Design implication:** Never award achievements for spammy or low-value actions such as raw tap counts or pure login counts. Tie them to meaningful accomplishments players would be proud to show.

**[F9] Andersen, E., Liu, Y.-E., Snider, R., Szeto, R., Cooper, S., & Popović, Z. (2011). On the harmfulness of secondary game objectives. *Proc. FDG '11*, 30–37.**
https://doi.org/10.1145/2159365.2159370
- **Verified:** yes (full text read).
- **Method & sample:** Randomized A/B tests with more than 27,000 new players of two Flash games on Kongregate. Refraction had about 7,800–8,000 players per arm; Hello Worlds had about 950–1,000 per arm.
- **Key findings: off-path coins (optional collectibles away from the main path) vs no coins**
  - **Refraction:** median levels completed fell from 20 to 17 (the median player completed 17.6% more levels without coins). Median play time fell from 1,170 s to 1,140 s. Return rate did not change significantly (19.48% vs 19.24%).
  - **Hello Worlds:** median levels fell from 7 to 4.
  - Coins lengthened play only for the longest-playing players (the top ~10% in Refraction, ~30% in Hello Worlds). Moderate players quit earlier. In Refraction the harmed group was about **4 times** larger than the helped group.
- **Key findings: on-path coins (collectibles that reinforce the main goal)**
  - **Refraction, vs no coins:** play time 1,230 s vs 1,170 s (p = .02); return rate 20.98% vs 19.48% (p = .019).
  - **Hello Worlds, vs off-path coins:** levels rose from a median of 4 to 7; time from 360 s to 512 s; return rate from 18.37% to 23.24% (p = .008).
- **Design implication:** Optional objectives must sit on the main progression path. Hard optional challenges should be gated or targeted to expert segments. Don't assume players will ignore an optional objective they find frustrating; it can drive moderate players away.

**[F10] Anderson, A., Huttenlocher, D., Kleinberg, J., & Leskovec, J. (2013). Steering user behavior with badges. *Proc. WWW '13*, 95–106.**
https://doi.org/10.1145/2488388.2488398
- **Verified:** yes (full text read).
- **Method & sample:** A formal utility model plus observational analysis of Stack Overflow badges, using users active at least 60 days before and after earning a badge.
- **Key findings:**
  - Users increase the targeted activity as they approach a badge threshold, and accelerate when close.
  - Activity on the targeted action "almost immediately returns to near-baseline levels" after the badge is earned.
  - Badges both shift the mix of actions and raise overall participation.
  - **Design rules from the model:**
    - Placement matters a great deal.
    - It is better to keep a badge as a distant incentive than to let it be earned too early.
    - When several badges reward the same action, spread them out and give them roughly equal value.
- **Design implication:** Chain achievements so the next threshold is always visible and reachable. Space tiers out rather than front-loading them. Plan for the post-badge drop by revealing the next goal immediately (compare F2's post-reward resetting).

**[F11] Denny, P. (2013). The effect of virtual achievements on student engagement. *Proc. CHI '13*, 763–772.**
https://doi.org/10.1145/2470654.2470763
- **Verified:** partial. Metadata confirmed. Findings as summarized in Hamari (2017), Table 1, and in Semantic Scholar's auto-generated summary of the paper. The full text was not accessible.
- **Method & sample:** Large-scale controlled experiment in the PeerWise online learning tool, N = 1,031 students.
- **Key findings:** Badges had a positive effect on the quantity of contributions, did not reduce quality, and lengthened the period over which students engaged.
- **Design implication:** Non-reward "recognition" achievements can extend engagement windows without degrading behaviour quality, provided they target quality-neutral actions.

## 3. Streaks, habits, daily rewards and appointment mechanics

**[F12] Silverman, J., & Barasch, A. (2023). On or off track: How (broken) streaks affect consumer decisions. *Journal of Consumer Research*, 49(6), 1095–1117.**
https://doi.org/10.1093/jcr/ucac029
- **Verified:** yes (publisher abstract). Published online 2022. Study-level sample sizes were not accessible.
- **Method & sample:** Seven studies, including test apps that manipulated how streaks were logged.
- **Key findings:**
  - Highlighting an **intact** streak increases subsequent engagement compared with highlighting a **broken** one.
  - This holds **independent of actual past behaviour**; only the way the log represents it matters. Keeping the streak becomes a goal in itself.
  - The effect is **amplified** when people blame the break on themselves, and **attenuated** when a broken streak can be "repaired."
- **Design implication:** Streaks are a powerful re-engagement lever with a cliff-edge downside. Provide repair options, attribute breaks to external causes ("we froze your streak while you were away"), and avoid highlighting broken streaks.

**[F13] Sharif, M. A., & Shu, S. B. (2017). The benefits of emergency reserves: Greater preference and persistence for goals that have slack with a cost. *Journal of Marketing Research*, 54(3), 495–509.** https://doi.org/10.1509/jmr.15.0231
**Sharif, M. A., & Shu, S. B. (2021). Nudging persistence after failure through emergency reserves. *Organizational Behavior and Human Decision Processes*, 163, 17–29.** https://doi.org/10.1016/j.obhdp.2019.01.004
- **Verified:** yes for both abstracts (2021 first page read). The 2021 step-study numbers are partial, taken from UCLA Anderson Review's summary of the paper.
- **Method & sample:** 2017: six studies. 2021: one field study and four lab studies.
- **Key findings:**
  - People prefer goals that include an explicit "emergency reserve," meaning slack with a cost.
  - Reserves increase persistence, partly because people try to avoid using them.
  - Framing a goal with reserves increases persistence after a missed sub-goal, because it preserves the sense of progress.
  - **Month-long step challenge:**

    | Goal framing | Rebound rate after a missed day |
    |---|---|
    | Reserve-weekly: 7 days/week with 2 skips | 55% |
    | Reserve-monthly: 8 skips per month | 47% |
    | Easy: 5 days/week | 44% |
    | Hard: 7 days/week | 37% |

  - Reserve groups reached their goals up to 40% more often.
- **Design implication:** Design streak freezes as limited, earned emergency reserves (for example 1–2 equipped at a time). This beats both a strict daily streak and simply lowering the bar.

**[F14] Duolingo official experiment reports.** Industry; numbers are self-reported.
- (a) Yu, A. (2020-11-19). "Improving the streak." Duolingo Blog. https://blog.duolingo.com/improving-the-streak
- (b) Mansur, O. (2022-01-31). "How Duolingo's streak builds habit." https://blog.duolingo.com/how-duolingo-streak-builds-habit
- (c) Loh, K. H. (2017-05-10). "How streaks keep Duolingo learners committed to their language goals." https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals
- (d) Mazal, J. (2023-02-28), former CPO. "How Duolingo reignited user growth." *Lenny's Newsletter.* https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth
- (e) Salvador, R. (2024-06-13). "Understanding Duolingo's Time Spent Learning Well metric." https://blog.duolingo.com/time-spent-learning-well/
- (f) Duolingo Team (2024-08-05). "Friend Streak." https://blog.duolingo.com/friend-streak/

- **Verified:** yes (each page read).
- **Method & sample:** Large-scale A/B tests and product analytics. Effect sizes are relative and confidence intervals are not reported.
- **Key findings:**
  - **(a) Lower bar for the streak.** Letting any lesson extend the streak, instead of requiring the daily XP goal, produced +3.3% day-14 retention and +1% daily active learners. The share of daily learners on a streak rose 10.5% (19% among new learners), and learners on 7+ day streaks rose more than 40%. A year later, just over half of daily learners had a 7+ day streak, up from about a third. Correlationally, learners with a 7-day streak were 2.4× more likely to return the next day.
  - **(b) Streak Freeze and animation.** Allowing up to two equipped Streak Freezes raised daily active learners by +0.38%. A streak-extension animation raised new-learner retention by +1.7%. Correlationally, learners with a 7-day streak were 3.6× more likely to complete their course.
  - **(c) Wagers and weekend protection.** The Streak Wager raised day-7 retention by +14%. The "Weekend Amulet" made learners 4% more likely to return a week later and 5% less likely to lose their streak. Usage drops 5–10% on weekends.
  - **(d) Leagues and streak share.**
    - Weekly leagues increased learning time by +17% and **tripled** highly engaged learners (at least 1 hour a day, 5 days a week).
    - The current user retention rate (CURR) rose 21% over four years, which the author describes as a more than 40% cut in daily churn of the best users.
    - The share of daily users with a 7+ day streak roughly tripled to more than half.
    - Notification policy: "protect the channel."
  - **(e) Reward weighting changes behaviour.** Re-weighting XP toward core "path" lessons added +1.1M to +1.8M learning minutes per day. Duolingo moved away from session counts because those rewarded grinding of easy content.
  - **(f) Shared streaks.** Correlationally, learners with at least one shared streak were 22% more likely to complete their daily lesson.
- **Design implication:**
  - Keep the bar to extend a streak low (any meaningful session counts).
  - Add earned freezes, weekend protection and an opt-in wager.
  - Celebrate extensions.
  - Weight rewards toward the activities that create long-term value, not toward the easiest ones to grind.

**[F15] Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology*, 40(6), 998–1009.**
https://doi.org/10.1002/ejsp.674
- **Verified:** yes (abstract). The median of 66 days comes from multiple secondary summaries.
- **Method & sample:** 96 volunteers performed one daily behaviour for 84 days and reported automaticity daily. 82 provided enough data.
- **Key findings:**
  - Automaticity follows an asymptotic curve.
  - Time to reach 95% of the plateau ranged from 18 to 254 days (median about 66).
  - **Missing one opportunity did not materially affect habit formation.**
  - More consistent performance gave better model fit.
- **Design implication:** Plan habit loops over a 2–8 month horizon, not "21 days." Because a single miss doesn't break a real habit, the game's streak shouldn't treat it as fatal either.

**[F16] Buyalskaya, A., Ho, H., Milkman, K. L., Li, X., Duckworth, A. L., & Camerer, C. (2023). What can machine learning teach us about habit formation? Evidence from exercise and hygiene. *PNAS*, 120(17), e2216115120.**
https://doi.org/10.1073/pnas.2216115120
- **Verified:** yes (full text read).
- **Method & sample:** LASSO-based "Predicting Context Sensitivity" models on more than 12 million gym check-ins (over 30,000 gym-goers) and more than 40 million hospital hand-hygiene opportunities.
- **Key findings:**
  - Median time to habit was **122–226 days (4–7 months)** for the gym, against about **9–10 shifts (weeks)** for handwashing.
  - The strongest predictor was **time since the last visit**: for 76% of gym-goers, a longer lag lowered the chance of returning.
  - A day-of-week streak predicted attendance for 69%. Mondays and Tuesdays were positive predictors for 57%.
  - More habitual people were less responsive to an incentive intervention.
- **Design implication:**
  - Lapse length is the main hazard, so the first missed days are when re-engagement is most valuable.
  - Encourage same-time, same-day routines, for example a "your daily 5-minute run" slot.
  - Fully habituated veterans respond less to incentives, so use incentives on the forming cohort.

**[F17] Wood, W., & Rünger, D. (2016). Psychology of habit. *Annual Review of Psychology*, 67, 289–314.**
https://doi.org/10.1146/annurev-psych-122414-033417
- **Verified:** yes (full text read).
- **Method & sample:** Review.
- **Key findings:**
  - Habits are context–response associations that build up through repeated rewarded action. Once formed, they are insensitive to changes in outcome value but still respond to reward cues.
  - About 43% of daily actions are repeated almost daily in the same context (citing Wood et al., 2002).
  - Habits form most readily under **interval reward schedules**, where rewards become available after time passes, "mimic[king] natural resources that are replenished over time."
  - Deliberate planning during responding can hinder habit formation.
- **Design implication:** Time-replenishing rewards (daily chest, regenerating resources, timers) are the habit-friendly cue. Keep the daily check-in ritual simple and cue-stable, and leave deliberative depth for later in the session.

**[F18] Dai, H., Milkman, K. L., & Riis, J. (2014). The fresh start effect: Temporal landmarks motivate aspirational behavior. *Management Science*, 60(10), 2563–2582.**
https://doi.org/10.1287/mnsc.2014.1901
- **Verified:** yes (full text read).
- **Method & sample:** Three archival field studies: Google "diet" searches, daily gym visits of 11,912 undergraduates, and goal commitments on stickK.
- **Key findings:**

  | Landmark | Gym visit probability | stickK goal commitments |
  |---|---|---|
  | New week | +33.4% | +62.9% |
  | New month | +14.4% | +23.6% |
  | New year | +11.6% | +145.3% |
  | New semester | +47.1% | — |
  | After school breaks | +24.3% | — |
  | Federal holidays | — | +55.1% |
  | Birthdays | +7.5% | +2.6% |

- **Design implication:**
  - Launch seasons and events, and send comeback messages, at temporal landmarks: Monday, the first of the month, New Year, and the player's in-game anniversary or birthday.
  - Present a lapsed player's return as a fresh start, such as "New season, new streak," rather than a loss.

**[F19] Gubler, T., Larkin, I., & Pierce, L. (2016). Motivational spillovers from awards: Crowding out in a multitasking environment. *Organization Science*, 27(2), 286–303.**
https://doi.org/10.1287/orsc.2016.1047
- **Verified:** yes (abstract).
- **Method & sample:** Natural experiment: an attendance award introduced at one of five industrial laundry plants.
- **Key findings:**
  - The award helped previously tardy workers, but it led to strategic gaming of eligibility and did **not** produce lasting habits.
  - It **crowded out** motivation among workers who already had excellent attendance, who were then worse during ineligible periods.
  - Above-average workers lost 8% efficiency on non-rewarded tasks.
  - Sharif & Shu (F13) cite this as a "post-fail" backfire.
- **Design implication:** Avoid all-or-nothing "perfect attendance" rewards that become worthless after one miss. Prefer cumulative calendars, which still pay out even when days are missed, and forgiving streaks.

**[F20] Frommel, J., & Mandryk, R. L. (2022). Daily quests or daily pests? The benefits and pitfalls of engagement rewards in games. *Proc. ACM Hum.-Comput. Interact.*, 6(CHI PLAY), Art. 226, 1–23.**
https://doi.org/10.1145/3549489
- **Verified:** yes (full text read).
- **Method & sample:** Mixed-methods survey of N = 178 players, who described engagement rewards from 115 games (Candy Crush, League of Legends, Genshin Impact, Pokémon GO and others), using validated motivation and passion scales.
- **Key findings:**
  - Four themes emerged:
    - Rewards are positive (fun, a sense of accomplishment, a reason to log in).
    - They make play possible for free-to-play players.
    - Missing out is a bad experience, especially when it costs a streak.
    - They create an **obligation to play** ("a chore," "like a job"), particularly when tied to gating or energy.
  - Engaging with rewards *naturally* was associated with higher intrinsic motivation and harmonious passion.
  - Playing *in order to* get rewards was associated with external regulation, amotivation and **obsessive passion**.
  - The effects were small to medium (for example R² = .055 for harmonious passion).
- **Design implication:** The authors recommend three things:
  1. Reduce the chance of missing out: re-run events, offer other ways to obtain items, use streaks that don't reset, and let rewards accumulate in claimable slots.
  2. Make rewards **optional bonuses**, not coupled to gating or energy.
  3. Use rewards to support free players.

**[F21] Taylor, S., Ferguson, C., Peng, F., Schoeneich, M., & Picard, R. W. (2019). Use of in-game rewards to motivate daily self-report compliance: Randomized controlled trial. *Journal of Medical Internet Research*, 21(1), e11683.**
https://doi.org/10.2196/11683
- **Verified:** yes (full text, PMC).
- **Method & sample:** Three-arm RCT. 197 participants aged 6–24 were enrolled for a 35-day diary; 153 were analyzed.
- **Key findings:**
  - Mean diary completion was **86.4%** with in-game rewards for daily completion, 77.7% for a plain electronic diary (P = .09), and **70.6%** for paper (P = .002).
  - The rewarded arm had the highest share completing at least 90% of diaries (all pairwise P < .02).
  - There were no differences in usability or response content.
- **Design implication:** Small, daily, in-game rewards for showing up do raise daily return rates. This was measured in a non-game task, and the effect versus the plain electronic diary was not significant.

**[F22] Lee, H., Imteyaz, K., & Savage, S. (2025). Playing to pay: Interplay of monetization and retention strategies in Korean mobile gaming. arXiv:2504.10714.**
https://arxiv.org/abs/2504.10714
- **Verified:** yes (preprint read; not peer-reviewed).
- **Method & sample:** Gameplay observation and video analysis of the top 40 Korean mobile games.
- **Key findings:**
  - Daily login rewards appeared in 38/40 (95%), "the most popular strategy… designed to establish habitual behavior."
  - Gacha appeared in 37 (92.5%), battle passes in 31, progress boosters in 27, and conflict-driven design in 25 (62.5%).
  - The authors raise ethical concerns about transparency and competitive pressure.
- **Design implication:** Daily login rewards are table stakes. Any advantage comes from *how* they are designed (F12–F21), not from having them.

## 4. Collection and completion

**[F23] Toups, Z. O., Crenshaw, N. K., Wehbe, R. R., Tondello, G. F., & Nacke, L. E. (2016). "The collecting itself feels good": Towards collection interfaces for digital game objects. *Proc. CHI PLAY '16*, 276–290.**
https://doi.org/10.1145/2967934.2968088
- **Verified:** yes (full text read). The first author now publishes as P. O. Toups Dugas.
- **Method & sample:** Survey of N = 189 gamers with coding of their favourite collected objects.
- **Key findings:**
  - Most collected object types: gear (34.4%) and critters (21.2%).
  - Reasons for valuing objects: utility 26.5%, enjoyment 23.8%, investment 12.7%, memory 10.1%, self-expression 7.9%.
  - 15.9% of favourite objects were valued as part of a designer-defined set.
  - **65.1% had shared** an object: by using it in-game (27.0%), showing it in-game (23.8%), or public display (14.3%).
  - Design recommendations: enable curation, keep items mechanically useful, preserve the context of play (memories), and support sharing.
- **Design implication:** Collectibles should have utility, which means they do something, plus memory hooks (where and when each was obtained). Give them a curated showcase or binder that players can share. Pure "checkbox" collections underuse what motivates collectors.

**[F24] Naglé, T., Bateman, S., & Birk, M. V. (2021). Pathfinder: The behavioural and motivational effects of collectibles in gamified software training. *Proc. ACM Hum.-Comput. Interact.*, 5(CHI PLAY), 1–23.**
https://doi.org/10.1145/3474691
- **Verified:** partial (abstract only; the full text was behind a bot check).
- **Method & sample:** Between-subjects comparison of a gamified photo-editing training game with and without collectibles.
- **Key findings:**
  - Learners chose to engage more when collectibles were present.
  - Out-of-game skill on a representative challenge improved.
  - The authors describe trade-offs in motivation and experience.
- **Design implication:** Optional collectibles increase voluntary engagement when they sit on the skill path (consistent with F9).

**[F25] Hamari, J., Malik, A., Koski, J., & Johri, A. (2019). Uses and gratifications of Pokémon Go: Why do people play mobile location-based augmented reality games? *International Journal of Human–Computer Interaction*, 35(9), 804–819.**
https://doi.org/10.1080/10447318.2018.1497115
- **Verified:** yes (full abstract retrieved via the Semantic Scholar API; metadata confirmed via CrossRef). Published online 2018.
- **Method & sample:** Online survey of 1,190 players with structural modelling.
- **Key findings:**
  - Enjoyment, outdoor activity, ease of use, challenge and nostalgia were associated with **reuse intention**.
  - Outdoor activity, challenge, competition, socializing, nostalgia and reuse intention were associated with **in-app purchase intention**.
  - Privacy concerns and trendiness were not associated with either.
- **Design implication:** In a collection game, nostalgia (a familiar IP or art style) and challenge predict both continued play and purchase intention. "Trendiness" doesn't sustain play.

**[F26] Zsila, Á., Orosz, G., Bőthe, B., Tóth-Király, I., Király, O., Griffiths, M., & Demetrovics, Z. (2018). An empirical study on the motivations underlying augmented reality games: The case of Pokémon Go during and after Pokémon fever. *Personality and Individual Differences*, 133, 56–66.**
https://doi.org/10.1016/j.paid.2017.06.024
- **Verified:** yes (full-text abstract read).
- **Method & sample:** Development of the MOGQ-PG questionnaire, with confirmatory factor analysis on N = 621 players and a follow-up with N = 510.
- **Key findings:**
  - A 10-factor motive structure fit the data, adding outdoor activity, nostalgia and boredom to the standard online-gaming motives.
  - **Competition and fantasy motives predicted problematic gaming.**
  - Impulsivity was unrelated to the motives.
- **Design implication:** Collection and outdoor/recreation motives are comparatively "healthy." Lean on competitive pressure carefully, because competition motives are the ones linked to problematic play.

**[F27] Howe, K. B., Suharlim, C., Ueda, P., Howe, D., Kawachi, I., & Rimm, E. B. (2016). Gotta catch 'em all! Pokémon GO and physical activity among young adults: Difference in differences study. *BMJ*, 355, i6270.**
https://doi.org/10.1136/bmj.i6270
- **Verified:** yes (PubMed abstract).
- **Method & sample:** Difference-in-differences analysis of iPhone step data from n = 1,182 people aged 18–35, of whom 560 played.
- **Key findings:**
  - Players walked +955 more steps per day in the first week (95% CI 697–1,213).
  - The effect attenuated steadily and was back to baseline by week 6.
- **Design implication:** Launch novelty decays within about 6 weeks, even for a cultural phenomenon. Retention needs habit structures (F12–F18) and a regular content cadence, not novelty alone.

## 5. Customization and ownership

**[F28] Birk, M. V., Atkins, C., Bowey, J. T., & Mandryk, R. L. (2016). Fostering intrinsic motivation through avatar identification in digital games. *Proc. CHI '16*, 2982–2995.**
https://doi.org/10.1145/2858036.2858062
- **Verified:** yes (abstract, plus the study chapter reproduced in Birk's December 2018 University of Saskatchewan PhD thesis).
- **Method & sample:** Online experiment with N = 126. Participants either customized their avatar (appearance, personality, attributes; at least 4 minutes in the creator) or used a premade one, then played an endless runner.
- **Key findings:**
  - Customization increased identification with the avatar.
  - Similarity, embodied and wishful identification predicted autonomy, immersion, effort, enjoyment and positive affect, and **voluntary time spent in an unending runner**.
  - The effects were small (R² = .07–.22).
- **Design implication:** Put meaningful avatar or character creation in the first session, including "aspirational" options that support wishful identification. It is a cheap, evidence-backed contributor to playtime.

**[F29] Birk, M. V., & Mandryk, R. L. (2018). Combating attrition in digital self-improvement programs using avatar customization. *Proc. CHI '18*, Paper 660, 1–15.**
https://doi.org/10.1145/3173574.3174234
- **Verified:** yes (paper text as reproduced in Birk's thesis, chapter 4).
- **Method & sample:** N = 250 participants did a one-minute daily breathing exercise over 19 days with either a customized or an assigned avatar. Reminders were off in days 1–7, on in days 8–16, and off in days 17–19.
- **Key findings:**
  - Customizers logged in more: median 7 vs 5 days (mean 8 vs 6.63; U = 6752, p = .035).
  - The gaps were mainly **in phases without reminders**. Daily differences were significant on days 3–6, day 15 and day 19.
  - "It became a habit for me" was reported by 28% of customizers vs 18% of the assigned group.
  - The effect was not mediated by similarity identification.
- **Design implication:** Personalization and ownership protect retention most in exactly the periods when push notifications are absent or ignored.

**[F30] Norton, M. I., Mochon, D., & Ariely, D. (2012). The IKEA effect: When labor leads to love. *Journal of Consumer Psychology*, 22(3), 453–460.**
https://doi.org/10.1016/j.jcps.2011.08.002
- **Verified:** yes (abstract, plus the HBS working paper 11-091 text).
- **Method & sample:** Four experiments with IKEA boxes, origami and Lego.
- **Key findings:**
  - Builders bid **$0.78 vs $0.48** for the same box (about 63% more).
  - Origami makers valued their own creations at $0.23, against $0.05 from non-builders, close to the $0.27 bid for experts' origami.
  - **Labour raises value only when the task is completed:** completed builders bid $1.46 vs $0.59 for those who didn't finish.
  - The effect disappeared when creations were destroyed.
- **Design implication:** Let players build things that persist, such as bases, decks, loadouts, outfits and gardens. Make creation completable in a session and never destroy a player's creation. Show creations back to players.

## 6. Session endings and memory

**[F31] Kahneman, D., Fredrickson, B. L., Schreiber, C. A., & Redelmeier, D. A. (1993). When more pain is preferred to less: Adding a better end. *Psychological Science*, 4(6), 401–405.**
https://doi.org/10.1111/j.1467-9280.1993.tb00589.x
- **Verified:** yes (full text read).
- **Method & sample:** Within-subjects cold-pressor experiment with N = 32.
- **Key findings:**
  - 22 of 32 participants (69%) chose to repeat the *longer* trial, which had 30 extra seconds of slightly less painful water.
  - Among the 21 who felt the discomfort decrease at the end, 17 (81%) chose it.
  - Remembered evaluations were dominated by the peak and the end, with duration neglected.
- **Design implication:** How a session ends affects whether players choose to return. Never end a session on a loss or paywall screen if it can be avoided.

**[F32] Gutwin, C., Rooke, C., Cockburn, A., Mandryk, R. L., & Lafreniere, B. (2016). Peak-end effects on player experience in casual games. *Proc. CHI '16*, 5608–5619.**
https://doi.org/10.1145/2858036.2858419
- **Verified:** yes (full text read).
- **Method & sample:** Two within-subjects lab studies with **only 12 participants each**.
  - Study 1 used Match-3 and Whac-A-Germ sequences of identical total difficulty with positive, negative or neutral peak-end shapes.
  - Study 2 used a Shootout game with "too hard" or "too easy" endings.
- **Key findings:**
  - **Match-3:** positive peak and end sequences were rated significantly more fun, more interesting and less challenging, and were more often chosen to play again.
  - **Whac-A-Germ:** only perceived challenge changed.
  - **Shootout:** no differences in enjoyment or replay.
  - Recollection of *challenge* was consistently shaped by peak and end. Results for fun and replay were mixed, but never against the hypothesis.
- **Design implication:** Design the last 30–60 seconds of a session as a positive peak, for example an easier closing level, a reward reveal, or a summary of gains. Validate in your own A/B tests, because the effect on fun and replay was game-dependent and the samples were small.

**[F33] Alexandrovsky, D., Gerling, K., Opp, M. S., Hahn, C. B., Birk, M. V., & Alsheail, M. (2024). Disengagement from games: Characterizing the experience and process of exiting play sessions. *Proc. ACM Hum.-Comput. Interact.*, 8(CHI PLAY), 1–27.**
https://doi.org/10.1145/3677066
- **Verified:** partial (abstract plus a secondary summary; the full text was blocked).
- **Method & sample:** Interviews (n = 16) followed by an online survey (n = 111).
- **Key findings:**
  - Players actively plan their exits, setting goals for session length or achievements and using their knowledge of game structure.
  - External demands such as tiredness, other tasks and social life trigger exits.
  - **Positive disengagement is tied to closure, satisfaction and keeping player agency.**
  - The authors argue that exits should be designed so players can leave on their own terms.
- **Design implication:** Provide natural stopping points, such as an end-of-run summary or "daily goals complete," and let players stop on their terms. Pair this with a resumable hook (F6) instead of manipulative "one more" pressure.

## 7. Replayability, procedural content and meaningful choice

**[F34] Smith, G. (2014). Understanding procedural content generation: A design-centric analysis of the role of PCG in games. *Proc. CHI '14*, 917–926.**
https://doi.org/10.1145/2556288.2557341
- **Verified:** yes (full text read).
- **Method & sample:** Analytical framework built from case analyses of games that use procedural content generation (PCG).
- **Key findings:** "Replayability" is too broad a justification. PCG produces replay through three dynamics:
  1. Reacting in a surprising environment, typically to beat a score or get further than before.
  2. **Building generator strategies**, meaning players learn and exploit the generator itself. This is the only dynamic unique to PCG.
  3. Practicing core mechanics in varied environments.

  Dynamics 1 and 3 could also be achieved with large amounts of hand-authored content.
- **Design implication:** Use procedural generation (or modifiers) when the goal is mastery through variation, as in a roguelite. Give players knowable generator rules they can strategize around.

**[F35] Galak, J., Kruger, J., & Loewenstein, G. (2011). Is variety the spice of life? It all depends on the rate of consumption. *Judgment and Decision Making*, 6(3), 230–238.** https://doi.org/10.1017/S1930297500001431
**Redden, J. P. (2008). Reducing satiation: The role of categorization level. *Journal of Consumer Research*, 34(5), 624–634.** https://doi.org/10.1086/521898
- **Verified:** yes (both abstracts).
- **Method & sample:** Three experiments each.
- **Key findings:**
  - **Galak et al.:**
    - When consumption is continuous, people prefer variety even over repeating a better-liked option.
    - When consumption is spaced out, which reduces satiation, the preference reverses.
    - People overestimate how much variety they will want at slow consumption rates.
  - **Redden:** people satiate less when repeated experiences are categorized at a finer level ("cherry, orange" vs "jelly bean"), because subcategories draw attention to what differs.
- **Design implication:**
  - Use rotating modifiers, biomes and boss variants within long or binge sessions.
  - For once-a-day play, favourite content can repeat with less variety.
  - Name and label variants explicitly ("Frost Ruins – Hard – Mutator: Low Gravity"), which reduces felt repetition cheaply.

**[F36] Scheibehenne, B., Greifeneder, R., & Todd, P. M. (2010). Can there ever be too many options? A meta-analytic review of choice overload. *Journal of Consumer Research*, 37(3), 409–425.** https://doi.org/10.1086/651235
**Chernev, A., Böckenholt, U., & Goodman, J. (2015). Choice overload: A conceptual review and meta-analysis. *Journal of Consumer Psychology*, 25(2), 333–358.** https://doi.org/10.1016/j.jcps.2014.08.002
- **Verified:** yes (both abstracts).
- **Method & sample:** Scheibehenne et al.: 63 conditions from 50 experiments, N = 5,036. Chernev et al.: 99 observations, N = 7,202.
- **Key findings:**
  - **Scheibehenne et al.:** the mean choice-overload effect is "virtually zero," with considerable variance between studies.
  - **Chernev et al.:** overload reliably appears when choice-set complexity, decision difficulty and preference uncertainty are high, or when people have an effort-minimizing goal. Once these moderators are accounted for, the effect is significant.
- **Design implication:** Wide build diversity is not harmful in itself. It hurts when newcomers face many complex, hard-to-compare options. Scaffold build choice: unlock options progressively, offer recommended or preset builds and comparison aids, and give full freedom to experienced players.

**[F37] Schoenau-Fog, H. (2011). Hooked! Evaluating engagement as continuation desire in interactive narratives. In *Interactive Storytelling (ICIDS 2011)*, LNCS 7069, 219–230. Springer.**
https://doi.org/10.1007/978-3-642-25289-1_24
- **Verified:** partial (metadata plus descriptive summaries; full text not accessed). The paper received the ICIDS Best Student Paper award.
- **Method & sample:** In-play "Engagement Sampling Questionnaire" that interrupts play to sample engagement, demonstrated in the emergent-narrative scenario *The First Person Victim*.
- **Key findings:** Defines engagement operationally as **the user's desire to continue an activity in order to accomplish an objective while experiencing affect**, and shows a method for measuring it during play.
- **Design implication:** Treat "desire to continue" as a measurable target in playtests. Sample it at chapter and session boundaries so narrative hooks (open questions, unresolved objectives) are tested, not assumed.

## 8. Time-limited events, scarcity and FOMO

**[F38] Przybylski, A. K., Murayama, K., DeHaan, C. R., & Gladwell, V. (2013). Motivational, emotional, and behavioral correlates of fear of missing out. *Computers in Human Behavior*, 29(4), 1841–1848.**
https://doi.org/10.1016/j.chb.2013.02.014
- **Verified:** yes (full text read).
- **Method & sample:** Three studies:
  - Development of a 10-item FoMO scale (N = 1,013, international).
  - A nationally representative cohort of working-age adults in Great Britain (N = 2,079).
  - A study of first-year undergraduates (N = 87).
- **Key findings:**
  - FoMO is "a pervasive apprehension that others might be having rewarding experiences from which one is absent."
  - It is associated with lower satisfaction of basic psychological needs, lower general mood and lower life satisfaction.
  - FoMO **mediated** the link between those deficits and social media engagement.
- **Design implication:** FoMO-driven engagement is concentrated among less satisfied users. Heavy FOMO pressure can buy short-term activity at a wellbeing cost, which conflicts with long-term retention and brand trust.

**[F39] Caba-Machado, V., Díaz-López, A., Machimbarrena, J. M., & González-Cabrera, J. (2024). Fear of missing out, gaming disorder and internet gaming disorder: Systematic review. *Current Addiction Reports*, 11(6), 1006–1015.** https://doi.org/10.1007/s40429-024-00595-7
**Li, L., Griffiths, M. D., Niu, Z., & Mei, S. (2020). Fear of missing out (FoMO) and gaming disorder among Chinese university students: Impulsivity and game time as mediators. *Issues in Mental Health Nursing*, 41(12), 1104–1113.** https://doi.org/10.1080/01612840.2020.1774018
- **Verified:** partial (metadata confirmed via CrossRef; findings from abstract-level summaries).
- **Method & sample:** Caba-Machado et al.: PRISMA review of 13 manuscripts. Li et al.: cross-sectional survey.
- **Key findings:**
  - Studies consistently find a positive correlation between FoMO and internet gaming disorder or gaming disorder, a direct effect, and a mediating role for FoMO.
  - In Li et al., trait FoMO's link to gaming disorder was fully mediated by impulsivity and gaming time; state FoMO's link was partly mediated.
- **Design implication:** Time-limited mechanics that work mainly through FoMO carry a wellbeing and regulatory risk. Prefer events that are fun in themselves, with re-runs (F20).

**[F40] Kim, K. H., & Kim, H. K. (2019). Oldie is goodie: Effective user retention by in-game promotion event analysis. *CHI PLAY '19 Extended Abstracts*, 171–180.**
https://doi.org/10.1145/3341215.3354645 (preprint: arXiv:1909.10851)
- **Verified:** yes (full text read).
- **Method & sample:** Logs from AION (NCSOFT): about 54 million records for about 20,000 users over two weeks, before and after four events launched together on 3 February 2016. The design is **pre/post with no control group**.
- **Key findings:**
  - Average weekly active users rose from 7,500 to 8,860 (+18%), and cumulative users rose 19%.
  - Daily churn rates fell after events started.
  - Logins from mid-level characters (levels 31–60) rose by about 44%. Daytime and dawn players increased; night players decreased.
  - The number of buyers rose by about **150%**, driven by event gifts, but purchase frequency fell by about **10%**. Heavy buyers (10+ purchases a week) declined.
- **Design implication:**
  - Events are better at reducing churn among mid-progression players than at acquiring new ones.
  - Free event gifts can broaden the payer base but may cannibalize heavy spenders.
  - Measure event effects per segment and against holdouts.

**[F41] Lynn, M. (1991). Scarcity effects on value: A quantitative review of the commodity theory literature. *Psychology & Marketing*, 8(1), 43–57.**
https://doi.org/10.1002/mar.4220080105
- **Verified:** partial (abstract only; the effect sizes in the paper were not accessed).
- **Method & sample:** Meta-analysis of experiments testing commodity theory.
- **Key findings:** Commodity theory holds that scarcity increases the perceived value of things that can be possessed, are useful, and can be transferred. The meta-analysis tests this; I could not access its effect sizes.
- **Design implication:** Limited availability raises the perceived value of possessable, displayable items such as cosmetics and collectibles. Combine with F20 and F38–F39: use it on cosmetics, not on power or progress, and re-run items later.

## 9. Mobile session context

**[F42] Juul, J. (2010). *A Casual Revolution: Reinventing Video Games and Their Players.* Cambridge, MA: MIT Press. ISBN 978-0-262-01337-6.**
- **Verified:** partial. Metadata confirmed via a *New Media & Society* book review (https://doi.org/10.1177/14614448110130011202). Content was checked against the author's book page and a *Leonardo* review. The book text itself was not accessible.
- **Method & sample:** Player interviews and design analysis.
- **Key findings:**
  - Casual games are characterized by **flexibility**: they can be played in short or long bursts, and "successful casual games usually have enough depth for hardcore activity" (as quoted in the *Leonardo* review).
  - The *Leonardo* review also notes Juul's discussion of "juiciness" and of simple, mimetic interfaces.
  - The book's detailed list of casual design traits could not be checked at page level, so it is not cited here.
- **Design implication:** Design the core loop for interruptibility: 1–5 minute units that save state instantly, with optional depth for longer sessions.

---

### Leads checked for metadata only (findings not verified; confirm before use)
The first three entries have only a Semantic Scholar auto-generated summary as content verification. Their session-length statistics were **not** verified and are deliberately not quoted.

- Böhmer, M., Hecht, B., Schöning, J., Krüger, A., & Bauer, G. (2011). Falling asleep with Angry Birds, Facebook and Kindle: A large scale study on mobile application usage. *MobileHCI '11*, 47–56. https://doi.org/10.1145/2037373.2037383. Logged detailed app usage from more than 4,100 Android users. Communication apps are almost always the first used when a device wakes.
- Ferreira, D., Goncalves, J., Kostakos, V., Barkhuus, L., & Dey, A. K. (2014). Contextual experience sampling of mobile application micro-usage. *MobileHCI '14*, 91–100. https://doi.org/10.1145/2628363.2628367. Experience sampling with 21 participants. Identifies "application micro-usage": brief bursts of interaction.
- Alharthi, S. A., Alsaedi, O., Toups, Z. O., Tanenbaum, T. J., & Hammer, J. (2018). Playing to wait: A taxonomy of idle games. *CHI '18*. https://doi.org/10.1145/3173574.3174195. Grounded-theory taxonomy of 66 idle games covering mechanics, rewards, interactivity, progress rate and UI. Relevant to designing play that progresses while the player is away.
- Lewis, C., Wardrip-Fruin, N., & Whitehead, J. (2012). Motivational game design patterns of 'ville games. *FDG '12*, 172–179. https://doi.org/10.1145/2282338.2282373. Covers appointment-style patterns.
- Yannakakis, G. N., & Togelius, J. (2011). Experience-driven procedural content generation. *IEEE Transactions on Affective Computing*, 2(3), 147–161. https://doi.org/10.1109/T-AFFC.2011.6
- Aggarwal, P., Jun, S. Y., & Huh, J. H. (2011). Scarcity messages. *Journal of Advertising*, 40(3), 19–30. https://doi.org/10.2753/JOA0091-3367400302. Compares limited-quantity and limited-time messages.
- Levari, D. E., & Norton, M. I. (2026). Collective streaks motivate prosocial behavior. *Journal of Experimental Social Psychology*, 126, 104941. https://doi.org/10.1016/j.jesp.2026.104941. Shared or team streaks.
- Lee, J., Kang, J.-E., & Eom, S. (2025). Storytelling in mobile games: Cross-cultural analysis of narrative engagement, retention, and monetization. *Entertainment Computing*, 55, 100994. https://doi.org/10.1016/j.entcom.2025.100994

---

## Top 12 actionable mechanic-design principles

1. **Always show nested, specific goals with live progress: session, daily, weekly and season.** Use numeric stretch goals with constant feedback, and split long goals into proximal sub-goals. For new complex systems, use learning goals ("try 3 builds"). *(F1, F2, F14e)* Effort rises with goal specificity and difficulty (d = .42–.82) and with proximity to the reward (inter-purchase time −20%).

2. **Never leave a player at zero or stuck in the middle.**
   - Start each new track with a justified head start. Endowed cards completed about 20% faster (F2) and, per secondary sources, redeemed 34% vs 19% (F3).
   - Reveal the next goal at the moment of reward. Effort resets after rewards (F2), and badge-driven activity falls back to baseline after the badge is earned (F10).
   - Add mid-track milestones and switch framing at about 50% (F4).
   - Frame progress by commitment: show "achieved so far" to newcomers and "N left" to committed players (F5).

3. **Make streaks forgiving by design.**
   - Let any meaningful session count. At Duolingo this gave +3.3% day-14 retention and +40% more learners on 7+ day streaks.
   - Give limited, earned "emergency reserve" freezes: +0.38% daily active learners at Duolingo, and 55% vs 37% rebound after a miss in Sharif & Shu.
   - Add weekend protection and repair options, and attribute breaks externally.
   - Never use all-or-nothing perfect-attendance rewards.
   - *(F12, F13, F14, F15, F19)*. A break demotivates more when the player blames themselves; a single miss doesn't harm real habit formation.

4. **Build daily habits on replenishing rewards and stable cues, and plan for months, not days.**
   - Interval-schedule rewards such as daily chests or regenerating resources are the habit-friendly cue (F17).
   - Encourage the same time and day each week. Day-of-week regularity predicted attendance for 69% of gym-goers (F16).
   - Expect habit formation to take 2–8 months (F15, F16).
   - **Intervene within the first missed days.** Time since last session was the top lapse predictor for 76% of gym-goers (F16).

5. **Keep daily rewards optional bonuses, not obligations.** Players who engage with them naturally show more intrinsic motivation and harmonious passion. Players who play *in order to* get them show more obsessive passion and amotivation, and describe them as "a chore." So:
   - Don't tie daily rewards to energy or gating.
   - Let missed rewards accumulate in slots.
   - Use rewards to help free players progress.
   - *(F20, F21, F22)*. In-game daily rewards raised daily completion from 70.6% (paper) to 86.4% (F21).

6. **Schedule around temporal landmarks.** Start seasons and events and send comeback offers on Mondays, the first of the month, New Year, and player anniversaries or birthdays. Frame a return after a lapse as a fresh start. *(F18; Monday/Tuesday effect in F16)* Gym visits rose +33.4% at the start of a week, +47.1% at a new semester, and stickK goal commitments +145.3% at New Year.

7. **Put secondary objectives and collectibles on the main progression path.**
   - Off-path optional coins cut the median player's levels from 20 to 17 or 7 to 4, and harmed about 4× more players than they helped.
   - On-path coins raised return rates (for example 18.4% to 23.2%).
   - Reserve hard optional content for expert segments.
   - Weight rewards toward the activities that create long-term value, not the easiest to grind.
   - *(F9, F24, F14e)*

8. **Design achievements as visible, spaced chains that recognize meaningful play.**
   - Surface them in the core flow. Badges helped only users who looked at them (F7, 2013).
   - Space the tiers and keep the next threshold in view (F10).
   - Never reward spammy or undesirable actions (F8).
   - Expect small effects (r² ≈ .01–.03; F7) and test against holdouts.
   - *(F7, F8, F10, F11)*

9. **Make collections useful, memorable, curatable and shareable.** Value comes from utility (26.5%) and enjoyment (23.8%), then investment, memory and self-expression. 65% of collectors share their objects. So:
   - Collected items should do something.
   - Record where and when each was obtained.
   - Give players a showcase or binder.
   - Open set books with a head start.
   - Lean on nostalgia and challenge rather than trendiness (F25).
   - *(F23, F24, F25, F26, F3)*

10. **Give players identity and things they built, early and permanently.**
    - Add avatar or character creation in the first session (F28).
    - Customizers logged in on more days (median 7 vs 5), mostly when there were no reminders (F29).
    - Let players build persistent, completable creations. Builders valued their own work about 63% more, but only when completed (F30).
    - Never destroy player creations.
    - *(F28, F29, F30)*

11. **End sessions on a high note, with closure, and with a resumable hook.**
    - Make the final moments a positive peak: an easier closing level, a reward reveal, or a summary of gains. Endings dominate remembered experience (69% chose more pain with a better ending, F31), and positive peak-end Match-3 sequences were chosen more for replay (F32).
    - Provide natural stopping points that respect player agency (F33).
    - Leave one visible unfinished task to resume next time. People resume about 67% of interrupted tasks, but don't rely on them remembering it: surface it on the next open (F6).
    - *(F6, F31, F32, F33)*

12. **Build replayability from structured variety and scaffolded choice, and run events as wanted novelty rather than FOMO.**
    - Use procedural generation or modifiers where mastery through variation is the point, with rules players can strategize around (F34).
    - Label and rotate variants to reduce satiation, especially in long sessions (F35).
    - Scaffold build choice for newcomers with presets and progressive unlocks, since overload depends on complexity and uncertainty (F36).
    - Novelty fades in about 6 weeks (F27), so run a regular event cadence. Pre/post evidence suggests this reduces churn among mid-level players (+18% weekly actives, F40).
    - Keep scarcity to cosmetics (F41), re-run event items, and avoid FOMO-heavy pressure. FoMO is linked to lower need satisfaction and to gaming disorder (F38, F39, F20).
    - *(F27, F34–F41)*

### Null and negative findings to keep in mind
- **Badges:** adding badges alone produced no significant increase in activity (F7, 2013). Effects in the 2017 study were small, and trade proposals were not significant once controls were added.
- **Optional collectibles:** off-path collectibles reduced progress and play time for most players (F9).
- **Zeigarnik effect:** no memory advantage for unfinished tasks (F6).
- **Peak-end in games:** no effect on fun or replay in 2 of 3 games, with n = 12 per study (F32).
- **Attendance awards:** caused crowding-out and lost 8% efficiency on non-rewarded tasks (F19).
- **Daily rewards:** frequently experienced as obligation or FOMO (F20).
- **Novelty:** the effect fades within about 6 weeks (F27).
- **Choice overload:** the average effect is about zero (F36).
- **Events and spending:** an event raised the number of buyers but lowered heavy-buyer purchases (F40).
- **Duolingo data:** the figures are self-reported industry A/B results, and the "7-day streak = 2.4×/3.6×" figures are correlational.
