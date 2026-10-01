# D. Social play, cooperation, competition, leaderboards/leagues and toxicity: evidence review

*For a new free-to-play mobile game monetized only through IAP/subscriptions (no ads). Goals: retention, playtime, revenue. Compiled 2026-10-01.*

**How sources were verified.** I checked every bibliographic record (authors, title, venue, year, pages, DOI) against Crossref. I then checked the findings against the full text or the official abstract.
- **Verified: yes** means I read the numbers in the primary source (full text, the official abstract, or a first-party post).
- **Verified: partial** means the record is confirmed but the findings come from an abstract fragment, a Semantic Scholar summary, slides, or a secondary report, usually because the full text is paywalled.
- Industry and NGO sources are flagged as **non-peer-reviewed**.
- Effect sizes are quoted exactly as reported. Null and negative results are listed with the positive ones.

---

## A. Social structure of online play and social retention

**[D1] Ducheneaut, N., Yee, N., Nickell, E., & Moore, R. J. (2006). "Alone together?" Exploring the social dynamics of massively multiplayer online games. *Proceedings of CHI 2006*, 407–416.**
- **Link:** DOI 10.1145/1124772.1124834
- **Verified:** yes (full text).
- **Method and sample:** An automated census of 129,372 unique *World of Warcraft* characters on 5 servers, logged continuously from June 2005, plus ethnographic play.
- **Key findings:**
  - Average play was 10.2 h/week per character.
  - Share of time spent in a group:
    - about 30% up to level 40;
    - rising roughly linearly to about 40%;
    - above 50% only from level 59, the endgame.
  - Characters that never grouped levelled about 2× faster than characters that grouped.
  - The most solo-friendly classes were the most popular. The three most-played classes spent less than 32% of their time grouped.
  - 66% of characters were in a guild (90% at level 43 and above).
  - Guild members played more per week (F(1,120505)=552.87). At levels 41–60 they grouped about 43% more often than non-members, after controlling for playtime.
  - Guilds were sparse networks:
    - players knew at most about 1 in 4 guildmates and played with about 1 in 10;
    - median guild size was 6 (mean 14.5);
    - core members played together 154 min per 30 days, against 22.8 min for an average pair of members.
  - 21% of guilds seen in June were gone in July (13% excluding one-person guilds).
  - Other players mattered mainly as **"an audience, a sense of social presence, and a spectacle"**, even for people who played alone.
- **Design implication:** Let players progress solo while surrounded by others: visible players, showcase spaces and activity feeds. Reserve group-required content for the late game. A visible audience is what gives status cosmetics (and so cosmetic IAP) their value.

**[D2] Williams, D., Ducheneaut, N., Xiong, L., Zhang, Y., Yee, N., & Nickell, E. (2006). From tree house to barracks: The social life of guilds in *World of Warcraft*. *Games and Culture*, 1(4), 338–361.**
- **Link:** DOI 10.1177/1555412006292616
- **Verified:** yes (full text).
- **Method and sample:**
  - A stratified sampling frame built from census data (guild size, how central the player was in the guild, server type, faction).
  - 48 in-game interviews (24.5% response rate).
  - The researchers' own play, ranging from 15 to 1,351 hours over 16 months.
- **Key findings:**
  - About 60% of interviewees were in "social" guilds and about 35% in raiding guilds.
  - About 70% chatted regularly with guildmates, about both the game and real life.
  - Small guilds (under 10 members) had the strongest bonds. About 75% had a founding core of real-life friends or family.
  - Large guilds needed formal rules, recruitment and probation periods, and strong leaders.
  - Guilds were fragile. Most respondents were not in their first guild. Reasons for leaving:
    - the player's goals and the guild's goals didn't match;
    - elitism;
    - poor leadership ("poor leadership is the death of a group");
    - no players at a similar level;
    - the guild was too serious, or not serious enough.
  - About 20% were in a guild type that didn't match their preferences. Half of them couldn't join a suitable guild; the other half didn't know one existed.
- **Design implication:** Add clan "type" tags and good discovery and matching. Give leaders tools: roles, rules, applications and probation. Support both small friend groups and large organized clans.

**[D3] Debeauvais, T., Nardi, B., Schiano, D. J., Ducheneaut, N., & Yee, N. (2011). If you build it they might stay: Retention mechanisms in *World of Warcraft*. *Proceedings of FDG 2011*, 180–187.**
- **Link:** DOI 10.1145/2159365.2159390
- **Verified:** yes (full text).
- **Method and sample:** Online survey of N=2,865 players in North America, Europe, Taiwan and Hong Kong. Measures: weekly hours; "stop rate" (ever quit for at least a month); years played.
- **Key findings:**
  - The overall stop rate was 77%.
  - The stop rate fell as guild responsibility rose (χ²(2, 2852)=9.27):

    | Guild status | Stop rate | Hours per week |
    |---|---|---|
    | Not in a guild | 88% | 19 |
    | Member | 79% | 22 |
    | Officer or guild master | 71% | 24 |

  - **Null/negative findings:**
    - Strongly social players played more hours and more years, but were also more likely to have stopped at some point. The authors suggest friends moving to other games, or raid content running out.
    - 54% had made real-life friends in the game. They played more (24 vs 21 h/week), but their stop rate was no different.
    - Meeting a partner in the game (13% of respondents) did not lower the stop rate.
  - Playing with an existing partner went with a lower stop rate: 71%, against 75–81% for other groups.
- **Design implication:** Give many clan members a role (officer, recruiter, quartermaster). Socially driven players also leave in groups, so watch and protect whole friend clusters.

**[D4] Kawale, J., Pal, A., & Srivastava, J. (2009). Churn prediction in MMORPGs: A social influence based approach. *Proceedings of IEEE CSE 2009*, 423–428.**
- **Link:** DOI 10.1109/CSE.2009.80
- **Verified:** yes (full text, GroupLens PDF).
- **Method and sample:**
  - *EverQuest II* session and group-play logs from August 2006.
  - Churners: 334 in August, 308 in September, 380 in October.
  - A social graph built from group play: 153,983 edges, average 24.78 connections per player.
  - A "modified diffusion model" that combines positive and negative social influence with engagement (session-length trends).
- **Key findings:**
  - The more of a player's connections had churned, the more likely that player was to churn.
  - Churners' sessions got shorter before they left.
  - Prediction results on a test set of 2,187 players (688 churners):

    | Model | Precision | Recall |
    |---|---|---|
    | Simple diffusion | 17.9% | 11.2% |
    | Network + engagement features | ~43–47% | 11–19% |
    | Combined model, AdaBoost | 50.1% | 29.8% |
    | Combined model, ADTree | 46.5% | 41.3% |

- **Design implication:** Treat churn as contagious. When a player's clanmates or friends leave, step in: suggest an active group, offer a clan merge, or re-engage them. Social-graph features belong in churn models.

**[D5] Park, K., Cha, M., Kwak, H., & Chen, K.-T. (2017). Achievement and friends: Key factors of player retention vary across player levels in online multiplayer games. *WWW '17 Companion*, 445–453.**
- **Link:** DOI 10.1145/3041021.3054176 (arXiv:1702.08005)
- **Verified:** yes (full text).
- **Method and sample:** Complete action logs (achievement, economy, chat) of 51,104 players of the MMORPG *Fairyland Online*. Separate logistic models for each level phase, with variables selected by Lasso.
- **Key findings:**
  - Achievement features (rare items, money, performance) predicted progress from the early to the advanced phases.
  - At the level cap, social features became the strongest predictors of how long players stayed.
  - The number of friends was a positive predictor in every phase (standardized estimates about +0.53 to +0.61).
  - **Negative finding:** the number of weak-tie contacts who weren't friends was a *negative* predictor (about −0.28 to −0.33).
- **Design implication:** The early game should run on progression. Mid and late game should turn acquaintances into a few strong ties (duos, squads, friend content) rather than chase large numbers of loose contacts.

---

## B. Cooperation, interdependence and social closeness

**[D6] Depping, A. E., & Mandryk, R. L. (2017). Cooperation and interdependence: How multiplayer games increase social closeness. *CHI PLAY '17*, 449–461.**
- **Link:** DOI 10.1145/3116595.3116639
- **Verified:** partial. The record is confirmed. Findings come from the Semantic Scholar summary and a 2020 follow-up paper by the same lab (arXiv:2003.03438); the full text is paywalled.
- **Method and sample:** An online experiment pairing strangers. Four versions of a cooperative maze game crossed *cooperation* with *interdependence* (tightly coupled, complementary roles: one player collects, the other moves walls). Players talked by voice chat.
- **Key findings:**
  - Cooperation and interdependence are distinct mechanics, and both improved play experience and social bonds.
  - Interdependent play built trust and closeness. The effect was explained by **more conversational turns** during interdependent play.
- **Design implication:** Co-op content should need complementary roles and real coordination (quick-chat, pings), not just a shared score bar.

**[D7] Depping, A. E., Mandryk, R. L., Johanson, C., Bowey, J. T., & Thomson, S. C. (2016). Trust me: Social games are better than social icebreakers at building trust. *CHI PLAY '16*, 116–129.**
- **Link:** DOI 10.1145/2967934.2968097
- **Verified:** partial (record plus summary-level findings).
- **Method and sample:** An online experiment comparing a social game with a standard icebreaker task for pairs of strangers.
- **Key findings:** The social game built more interpersonal trust than the icebreaker. The authors argue games can simulate risk and interdependence, so they create genuine bonds rather than weaker substitutes.
- **Design implication:** Start new clan membership with a short joint mission, not a "say hi" chat prompt.

**[D8] Depping, A. E., Johanson, C., & Mandryk, R. L. (2018). Designing for friendship: Modeling properties of play, in-game social capital, and psychological well-being. *CHI PLAY '18*, 87–100.**
- **Link:** DOI 10.1145/3242671.3242702
- **Verified:** yes (abstract).
- **Method and sample:** Online survey, N=234.
- **Key findings:**
  - The two strongest predictors of in-game social capital (the value of a player's in-game relationships) were **interdependence** (positive) and **toxicity** (negative).
  - Cooperation itself was "less crucial than common wisdom suggests."
  - In-game social capital went with lower loneliness and higher satisfaction of the need for relatedness.
- **Design implication:** Design for interdependence and low toxicity, not just for co-op modes. Players' in-game relationships are what keeps them.

**[D9] Vella, K., Johnson, D., & Hides, L. (2015). Playing alone, playing with others: Differences in player experience and indicators of wellbeing. *CHI PLAY '15*, 3–12.**
- **Link:** DOI 10.1145/2793107.2793118
- **Verified:** partial. The record is confirmed; abstract details come from index summaries and the Semantic Scholar summary.
- **Method and sample:** Online survey, N=446.
- **Key findings:**
  - Social and solo players differed in autonomy, presence and relatedness.
  - For solo players, wellbeing went with in-game autonomy.
  - For social players, wellbeing was higher when they played **with strangers** and gained wider, looser social connections.
  - **Negative finding:** for everyone, wellbeing rose with age and **fell with more hours of play.**
- **Design implication:** Support both rich solo loops and stranger-friendly social loops (open matchmaking, public events). Don't push raw hours at the cost of wellbeing.

**[D10] Peng, W., & Hsieh, G. (2012). The influence of competition, cooperation, and player relationship in a motor performance centered computer game. *Computers in Human Behavior*, 28(6), 2100–2106.**
- **Link:** DOI 10.1016/j.chb.2012.06.014
- **Verified:** yes (full text).
- **Method and sample:** Lab experiment with N=158 (143 analysed). A balloon-popping game crossed cooperation vs competition with playing alongside a friend vs a stranger.
- **Key findings:**
  - Cooperation produced more effort and motivation than competition (M=6.08 vs 5.57; F(1,137)=8.43, p=.004, η²=.06).
  - Friends increased commitment to the game's goals **only when cooperating** (interaction F(1,137)=4.77, p<.05).
  - **Null findings:** friend vs stranger had no main effect, and there was no difference in actual performance.
- **Design implication:** Co-op with friends gives the most commitment. Favour friend co-op (duos, friend quests) over friend PvP.

**[D11] Hirsch, L., Müller, F., Chiossi, F., Benga, T., & Butz, A. (2023). My heart will go on: Implicitly increasing social connectedness by visualizing asynchronous players' heartbeats in VR games. *Proc. ACM HCI*, 7(CHI PLAY), 976–1001.**
- **Link:** DOI 10.1145/3611057
- **Verified:** yes (abstract).
- **Method and sample:** Within-subject lab study, N=34. A single-player VR escape room showing recorded heartbeat traces of earlier players, against a no-visualization baseline.
- **Key findings:** All but one of four visualizations significantly increased feelings of social connectedness. Heart icons gave the strongest connectedness, understanding and perceived support.
- **Design implication:** Cheap asynchronous traces of other players (ghosts, footprints, others' choices, live counters) create social presence in solo content. This is useful when concurrency is low or uneven.

**[D12] Bhattacharya, A., Windleharth, T. W., Ishii, R. A., Acevedo, I. M., Aragon, C. R., Kientz, J. A., Yip, J. C., & Lee, J. H. (2019). Group interactions in location-based gaming: A case study of raiding in *Pokémon GO*. *CHI '19*, 1–12.**
- **Link:** DOI 10.1145/3290605.3300817
- **Verified:** yes (abstract).
- **Method and sample:** More than a year of participant observation, a survey of 510 raiders, and 25 interviews.
- **Key findings:**
  - Raids form ad-hoc groups of friends and strangers.
  - The game's rules, local conditions and context all both help and hinder group formation.
  - The authors recommend designing for transparency, coordination features, and links between the global and local levels, for more inclusive communities.
- **Design implication:** Time-limited co-op raids need built-in group finding (lobbies, invites, ready-checks) and clear entry requirements. Otherwise they shut out players with few connections.

---

## C. Social features, spending and retention

**[D13] Wei, P.-S., & Lu, H.-P. (2014). Why do people play mobile social games? An examination of network externalities and of uses and gratifications. *Internet Research*, 24(3), 313–331.**
- **Link:** DOI 10.1108/IntR-04-2013-0082
- **Verified:** yes (abstract).
- **Method and sample:** Online questionnaire, N=237; structural equation modelling.
- **Key findings:**
  - Two things significantly drove intention to play mobile social games:
    - **network externalities** – the perceived number of users and of peers playing;
    - individual gratifications such as enjoyment and achievement.
  - Mobile time flexibility mattered relatively little.
- **Design implication:** Make the size and activity of a player's circle visible ("12 friends play", "clan active now"). Perceived network size drives intention to play.

**[D14] Bapna, R., & Umyarov, A. (2015). Do your online friends make you pay? A randomized field experiment on peer influence in online social networks. *Management Science*, 61(8), 1902–1920.**
- **Link:** DOI 10.1287/mnsc.2014.2081
- **Verified:** yes (abstract via RePEc and the INFORMS press release).
- **Method and sample:** A randomized field experiment on the freemium Last.fm network (largest connected group of about 3.8M users). Premium subscriptions were gifted to randomly chosen users, and their friends' adoption was compared with controls.
- **Key findings:**
  - Peer influence caused a **>60% increase in the odds of buying premium** when a friend adopted.
  - The relative effect was larger for users with **fewer** friends.
  - The result held across nonparametric resampling, random-effects, logistic and survival models.
- **Design implication:** Paying spreads causally through friendships. Add "gift a subscription to a friend or clanmate" and opt-in subscriber badges, and aim gifting at players with few connections.

**[D15] Alsén, A., Runge, J., Drachen, A., & Klapper, D. (2016). Play with me? Understanding and measuring the social aspect of casual gaming. *Proceedings of AIIDE*, 12(2), 115–121.**
- **Link:** DOI 10.1609/aiide.v12i2.12904
- **Verified:** yes (full text).
- **Method and sample:**
  - A randomized live A/B test in Wooga's *Diamond Dash* on iOS and Facebook.
  - About 50% of players got "Team Battles": players form teams, cooperate within the team and compete against other teams.
  - Several million players, a 26-day test, and no other changes.
- **Key findings:**

  | Platform | Revenue | Daily active users | Sessions per player per day |
  |---|---|---|---|
  | Mobile (iOS) | +85.9% | +5% | +10.4% |
  | Facebook | +77.7% | +9.5% | +12.7% |

  - All effects p<0.01.
  - The effect held through the test, and was the largest uplift of any feature the studio had added.
- **Design implication:** This is the strongest *causal* evidence in this review. Real team-vs-team social gameplay raised IAP revenue far more than it raised engagement. Put a team-competition event system on the early roadmap.

**[D16] Drachen, A., Pastor, M., Liu, A., Fontaine, D. J., Chang, Y., Runge, J., Sifa, R., & Klabjan, D. (2018). To be or not to be... social: Incorporating simple social features in mobile game customer lifetime value predictions. *ACSW 2018*, 1–10.**
- **Link:** DOI 10.1145/3167918.3167925
- **Verified:** yes (author PDF, White Rose eprints).
- **Method and sample:** More than 219,000 players of a Candy Crush-like casual F2P puzzle game. Models predicted paying status and customer lifetime value (CLTV), using features from players' network of social requests.
- **Key findings (null):**
  - Only 11% of players ever sent a social request, and 2.5% ever made a purchase.
  - Social players and paying players rarely overlapped.
  - Social features added almost nothing to predicting paying or CLTV.
  - Requests and purchases **substituted for each other**, because both unlocked the same progress gates.
  - The authors conclude that thin social layers (account linking, requests) don't change behaviour, unlike deeper social games such as *Clash of Clans*.
- **Design implication:** "Ask friends for lives" is not a social strategy. Never make a social request a free substitute for the same IAP unlock.

**[D17] Hamari, J., Alha, K., Järvelä, S., Kivikangas, J. M., Koivisto, J., & Paavilainen, J. (2017). Why do players buy in-game content? An empirical study on concrete purchase motivations. *Computers in Human Behavior*, 68, 538–546.**
- **Link:** DOI 10.1016/j.chb.2016.11.045
- **Verified:** yes (abstract).
- **Method and sample:** 19 purchase reasons drawn from top-grossing F2P games, the literature and experts; survey N=519.
- **Key findings:**
  - The reasons grouped into six dimensions:
    - unobstructed play;
    - social interaction;
    - competition;
    - economic rationale;
    - indulging children;
    - unlocking content.
  - Spending was positively associated with **unobstructed play, social interaction and economic rationale**.
  - **Null finding:** competition was *not* among the significant predictors of spending.
- **Design implication:** Purchases with a social purpose (gifts, team items, cosmetics others can see) are a validated driver of spend. Selling competitive advantage is not supported here, and it carries toxicity and ethics risks (see D42).

**[D18] Gong, M., Wagner, C., & Ali, A. (2024; online 2023). The impact of social network embeddedness on mobile massively multiplayer online games play. *Information Systems Journal*, 34(2), 327–363.**
- **Link:** DOI 10.1111/isj.12479
- **Verified:** yes (abstract).
- **Method and sample:** A longitudinal field study with survey and objective data from players of the mobile game *Game for Peace* (Tencent).
- **Key findings:**
  - The game brought players' existing friends in from social networks, and showed who they were and what they were doing.
  - That visibility went with more social interaction, social support, shared vision, and **social pressure**.
  - Together, these significantly increased **play frequency**.
  - Social interaction and shared vision also improved play performance.
- **Design implication:** Offer friend import from contacts and platforms, with privacy controls. Showing friends' activity raises play frequency, partly through social pressure.

**[D19] Pecorella, A. (Kongregate) (2013). Building games for the long term: Pragmatic F2P guild design. GDC Europe 2013 (slides).**
- **Link:** http://www.slideshare.net/Kongregate/building-games-for-the-long-term-pragmatic-f2p-guild-design-gdc-europe-2013
- **Verified:** partial (slide text via SlideShare). Industry, non-peer-reviewed, correlational.
- **Method and sample:** Publisher analytics across Kongregate's F2P portfolio.
- **Key findings:**
  - *Dawn of the Dragons*: buyer rate was **23% for guild members vs 3.2% for non-members**. 49% of players who reached level 10 joined a guild.
  - *Tyrant*: average revenue per paying user was **$91.60 for guild members vs $36.59 for non-members**.
  - "Every one of our top 10 games has some type of guild construct."
- **Design implication:** Guild membership marks high-value players, but self-selection inflates these gaps. A/B-test guild features (as in D15), and make joining a good guild easy within the first sessions.

---

## D. Competition, leaderboards, leagues and ranked systems

**[D20] Duolingo's own data on Leagues and friend features**
- **Sources:**
  - Duolingo (2023, May 3), "How do Duolingo Leaderboards work?"
  - Duolingo (2022, Sep 9), "Friends Quests are Duolingo's newest social feature."
  - Duolingo (2024, Aug 5), "Friend Streak."
  - Mazal, J. (2023, Feb 28), "How Duolingo reignited user growth," *Lenny's Newsletter*. The author was Duolingo's Chief Product Officer.
- **Links:**
  - https://blog.duolingo.com/duolingo-leagues-leaderboards/
  - https://blog.duolingo.com/friends-quests/
  - https://blog.duolingo.com/friend-streak/
  - https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth
- **Verified:** yes (first-party, non-peer-reviewed).
- **Method and sample:** Company A/B tests and observational analytics; details are not public.
- **Key findings:**
  - **League design:**
    - First tested in 2018.
    - Weekly leagues; players are matched with others of **similar engagement the previous week** and a similar time zone.
    - Top finishers are promoted.
    - Started with 5 tiers; now 10.
    - Players can opt out.
  - **Matching by engagement, not friendship:** Mazal says the design deliberately did this because Zynga's tests on *FarmVille 2* showed engagement-matched competition beat friend leaderboards, especially once friends had gone inactive. Entry was automatic, with no extra tasks.
  - **Results after launch:**
    - overall learning time **+17%**;
    - "highly engaged" learners (1+ hour a day, 5 days a week) **tripled**;
    - day-1 and day-7 retention improved, with statistical significance.
  - **Friend features (correlational):**
    - learners who follow friends are **5.6× more likely to finish a course**;
    - learners with at least one Friend Streak are **22% more likely to complete their daily lesson**, rising with more friend streaks.
- **Design implication:** This is the best-documented league template for a mobile app: weekly small groups matched on recent activity, tiered promotion, and automatic entry. Layer friend co-op commitments (shared streaks and quests) on top.

**[D21] Butler, C. (2013). The effect of leaderboard ranking on players' perception of gaming fun. In *Online Communities and Social Computing* (HCII 2013), LNCS 8029, 129–136.**
- **Link:** DOI 10.1007/978-3-642-39371-6_15
- **Verified:** partial. The record is confirmed; the finding is as summarized by Jia et al. 2017 [D24]; the full text is paywalled.
- **Method and sample:** A player study relating leaderboard position to perceived fun and replay.
- **Key findings:** Players were more likely to replay when they reached the **top or the bottom** of the leaderboard. Middle positions motivated less.
- **Design implication:** Small leagues with promotion and demotion zones put most players near an edge, instead of stuck in the anonymous middle of a global list.

**[D22] Mekler, E. D., Brühlmann, F., Tuch, A. N., & Opwis, K. (2017). Towards understanding the effects of individual gamification elements on intrinsic motivation and performance. *Computers in Human Behavior*, 71, 525–534.**
- **Link:** DOI 10.1016/j.chb.2015.08.048
- **Verified:** yes (abstract).
- **Method and sample:** A 2×4 online experiment (points, levels or leaderboard vs control, crossed with personality orientation) in an image-tagging task.
- **Key findings:**
  - Points, and especially levels and the leaderboard, significantly increased the **number** of tags compared with control.
  - **Null findings:**
    - no effect on tag **quality**;
    - no effect on feelings of competence or on intrinsic motivation.
  - The authors conclude these elements worked as extrinsic incentives that raise output quantity.
- **Design implication:** Leaderboards reliably raise activity volume but don't create enjoyment by themselves. Pair them with a core loop players find satisfying in its own right.

**[D23] Landers, R. N., Bauer, K. N., & Callan, R. C. (2017). Gamification of task performance with leaderboards: A goal setting experiment. *Computers in Human Behavior*, 71, 508–515.**
- **Link:** DOI 10.1016/j.chb.2015.08.008
- **Verified:** yes (abstract via the University of Minnesota record, plus the author's blog).
- **Method and sample:** Lab experiment with a brainstorming task (listing alternative uses for an object). Conditions: "do your best," easy goal, difficult goal, near-impossible goal, and a leaderboard.
- **Key findings:**
  - The leaderboard produced performance similar to the difficult and near-impossible goals, and better than "do your best" or easy goals.
  - Participants silently set themselves goals at or near the top of the board.
  - The effect depended on goal commitment: people who valued the leaderboard performed best.
- **Design implication:** A leaderboard works as a goal-setting tool. Show the next reachable target ("beat #7 to promote") and make it worth reaching.

**[D24] Jia, Y., Liu, Y., Yu, X., & Voida, S. (2017). Designing leaderboards for gamification: Perceived differences based on user ranking, application domain, and personality traits. *CHI '17*, 1949–1960.**
- **Link:** DOI 10.1145/3025453.3025826
- **Verified:** yes (full text).
- **Method and sample:** Online survey with mock-ups, N=286. Three positions (top, middle, bottom) × three domains, plus a Big-Five personality measure.
- **Key findings:**
  - Ratings were consistently higher at the top than in the middle, and higher in the middle than at the bottom.
  - Bottom-ranked users disliked leaderboards in social and productivity settings.
  - Respondents preferred seeing friends or colleagues on the board rather than strangers.
  - Extraverts rated leaderboards more positively.
  - Whether the ranked metric felt fair mattered.
  - **Contrast with D20:** this survey shows a *stated* preference for friend boards, whereas Duolingo's and Zynga's *tests* favoured engagement-matched strangers.
- **Design implication:** Don't leave anyone permanently at the bottom. Use fair, matched groups, add a friends view, and highlight movement ("+3 places") over absolute rank.

**[D25] Hanus, M. D., & Fox, J. (2015). Assessing the effects of gamification in the classroom: A longitudinal study on intrinsic motivation, social comparison, satisfaction, effort, and academic performance. *Computers & Education*, 80, 152–161.**
- **Link:** DOI 10.1016/j.compedu.2014.08.019
- **Verified:** partial (record plus summary-level findings; full text paywalled).
- **Method and sample:** A semester-long quasi-experiment comparing a gamified course (leaderboard and badges) with a non-gamified course.
- **Key findings (negative):** Students in the gamified course showed **less motivation, satisfaction and sense of empowerment over time** than the non-gamified class. Social comparison was implicated.
- **Design implication:** Rankings that stay public for months can wear down motivation. Use seasons and resets, keep comparisons local, and allow hiding or opting out.

**[D26] Sailer, M., & Homner, L. (2020; online 2019). The gamification of learning: A meta-analysis. *Educational Psychology Review*, 32(1), 77–112.**
- **Link:** DOI 10.1007/s10648-019-09498-w
- **Verified:** yes (abstract).
- **Method and sample:** Random-effects meta-analysis.
- **Key findings:**
  - Small positive effects (Hedges' g) on three kinds of outcome:

    | Outcome | g | Studies (k) | Participants (N) |
    |---|---|---|---|
    | Cognitive | 0.49 | 19 | 1,686 |
    | Motivational | 0.36 | 16 | 2,246 |
    | Behavioural | 0.25 | 9 | 951 |

  - The motivational and behavioural effects were less stable in the more rigorous studies.
  - Game fiction and social interaction moderated the behavioural effects. **Combining competition with collaboration** was particularly effective.
- **Design implication:** Prefer competition wrapped in collaboration (team leagues, clan vs clan) over purely individual ladders.

**[D27] Bai, S., Hew, K. F., & Huang, B. (2020). Does gamification improve student learning outcome? Evidence from a meta-analysis and synthesis of qualitative data in educational contexts. *Educational Research Review*, 30, 100322.**
- **Link:** DOI 10.1016/j.edurev.2020.100322
- **Verified:** yes (abstract).
- **Method and sample:** Meta-analysis of 30 interventions (3,202 participants) from 24 studies, plus a qualitative synthesis.
- **Key findings:** A medium overall effect in favour of gamification: Hedges' g=0.504 (95% CI 0.284–0.723).
- **Design implication:** On average, gamified comparison helps. But the effects vary a lot and come from education, not entertainment, so treat them as directional and A/B-test in the game.

**[D28] Marsh, H. W., & Hau, K.-T. (2003). Big-fish–little-pond effect on academic self-concept: A cross-cultural (26-country) test of the negative effects of academically selective schools. *American Psychologist*, 58(5), 364–376.**
- **Link:** DOI 10.1037/0003-066X.58.5.364
- **Verified:** partial (record plus summary-level findings).
- **Method and sample:** Nationally representative samples of about 4,000 15-year-olds in each of 26 countries (PISA).
- **Key findings:** At the same individual ability, students in stronger (selective) schools rated their own ability lower. The local comparison group shapes self-evaluation, and the effect held across cultures.
- **Design implication:** Felt competence depends on the comparison group, not absolute skill. Place players in leagues where they can be a "big fish," and promote them before they become a small fish in a strong pond.

**[D29] Chen, Z., Xue, S., Kolen, J., Aghdaie, N., Zaman, K. A., Sun, Y., & Seif El-Nasr, M. (2017). EOMM: An engagement optimized matchmaking framework. *WWW '17*, 1143–1150.**
- **Link:** DOI 10.1145/3038912.3052559
- **Verified:** yes (full text).
- **Method and sample:** Data from an Electronic Arts one-on-one PvP game: 36.9M matches by 1.68M players in the first half of 2016. A churn model combined with graph matching, tested in simulation.
- **Key findings:**
  - Seven-day churn risk depended on a player's last three results (W = win, L = loss, D = draw):

    | Last three results | 7-day churn risk |
    |---|---|
    | "Safe" states (e.g., DLW, LLW, LDW, DDD) | 2.6–2.7% |
    | WWW | 3.7% |
    | DLL, LWL, LDL | 4.6–4.7% |
    | WWL | 4.9% |
    | LLL | 5.1% |

  - **Note:** even a three-win streak (WWW) carried higher churn than the safe states.
  - In simulation, engagement-optimized matching retained about 0.7% more players per matchmaking round than skill-based matching (0.3–1.1% depending on pool size). Projected over 20 rounds, that compounds to about **15%** more players retained.
- **Design implication:**
  - Recent loss sequences signal churn, so build in loss-streak protection.
  - **Caution:** secretly steering match outcomes to maximize engagement, especially if linked to spending, risks player trust and regulation. Prefer transparent mechanisms.

**[D30] Kang, H., Suh, C., & Kim, H. (2024). Match experiences affect interest: Impacts of matchmaking and performance on churn in a competitive game. *Heliyon*, 10(3), e24891.**
- **Link:** DOI 10.1016/j.heliyon.2024.e24891 (open access, PMC10839887)
- **Verified:** yes (full text).
- **Method and sample:** Two-way fixed-effects logit on 42 days of server logs: about 6M matches by more than 262k players of the Korean casual mobile board game *Everybody's Marble*.
- **Key findings:**
  - Being matched against **stronger** opponents increased churn.
  - Being matched against **weaker** opponents reduced churn *more* than even matches.
  - Bigger skill gaps increased churn. A 50-point rise in the average skill gap raised churn probability by about 10% in relative terms (for example 17% → 18.7%).
  - A higher win rate reduced churn by 0.31% per percentage point; a higher winning-streak rate reduced it by 0.86% per percentage point.
  - **Null findings:**
    - the overall losing-streak rate was not significant (p=.773), though effects varied by player level;
    - amount paid did not predict churn (p=.853).
  - See also Kou, Li, Gui & Suzuki-Gill (2018), *CHI '18* (DOI 10.1145/3173574.3174152), a qualitative study of how players perceive and react to winning and losing streaks in *League of Legends*.
- **Design implication:** In casual mobile PvP, protect win rates and avoid lopsided matches, especially for newer players. A strict 50/50 "fair match" target is not necessarily best for retention.

---

## E. Toxicity and how to reduce it

**[D31] Shores, K. B., He, Y., Swanenburg, K. L., Kraut, R. E., & Riedl, J. (2014). The identification of deviance and its impact on retention in a multiplayer game. *CSCW '14*, 1356–1365.**
- **Link:** DOI 10.1145/2531602.2531724
- **Verified:** yes (full text).
- **Method and sample:**
  - *League of Legends* data from Duowan's player-reputation add-on on a Chinese server: 2.5M players, 18.25M matches over three months.
  - A "toxicity index" built from players' thumbs-up/thumbs-down ratings of each other.
  - Logistic regressions of short-term retention (continuing the session) and long-term retention (no break of a week or more) for 341,295 players.
- **Key findings:**
  - Ranked (competitive) players were more toxic than unranked players (mean index 0.41 vs 0.32).
  - For players **below the level cap**, toxic teammates predicted leaving the game long-term (β=−0.351, p<.05).
  - **Null finding:** for capped (level-30) players, toxicity had no significant long-term effect. Experienced players were more resilient (level × teammate toxicity β=+0.618).
  - **Playing with friends** predicted retention in every model, and was the *only* significant long-term predictor at the cap (β≈0.40, p<.001).
- **Design implication:** Toxicity hits new players hardest. Shield newcomers with separate pools and limited chat, and get them into friend or clan play early.

**[D32] Kwak, H., Blackburn, J., & Han, S. (2015). Exploring cyberbullying and other toxic behavior in team competition online games. *CHI '15*, 3739–3748.**
- **Link:** DOI 10.1145/2702123.2702529 (arXiv:1504.02305)
- **Verified:** yes (full text).
- **Method and sample:** More than 10M player reports on 1.46M accused players, with the crowd verdicts from Riot's "Tribunal" review system (*League of Legends*; North America, EU West and Korea servers).
- **Key findings:**
  - Few players report bad behaviour (a bystander effect).
  - When a teammate typed "report" in all-team chat, the odds that **opponents** reported were **16.37× higher**.
  - Toxicity is tied to **losing**. Players reported for "intentional feeding" or "assisting the enemy" won fewer than 15% of those matches.
  - Offensive language and verbal abuse were the most reported behaviours, mostly reported by teammates.
  - 80–86% of reviewed cases ended in punishment.
  - What counts as toxic varies by culture (for example Korea vs North America and EU West).
- **Design implication:** Expect toxicity after losses, so place cool-down and positive prompts there. Prompt bystanders to report, and review reports with crowd or automated systems.

**[D33] Riot Games player-behaviour team (Jeffrey Lin)**
- **Sources:**
  - Lin, J. (2015, Apr 20), "The first online player behavior experiment at Riot Games," LinkedIn.
  - Nutt, C. (2015, Mar 20), "More carrot, less stick: Jeffrey Lin on tweaking *League of Legends* player behavior," *Game Developer*.
  - Cummings, J. (2013), "GDC: Riot experimentally investigates online toxicity," *Game Developer*.
- **Links:**
  - https://www.linkedin.com/pulse/first-online-player-behavior-experiment-riot-games-jeffrey-lin
  - https://www.gamedeveloper.com/business/more-carrot-less-stick-jeffrey-lin-on-tweaking-i-league-of-legends-i-player-behavior
  - https://www.gamedeveloper.com/design/gdc-riot-experimentally-investigates-online-toxicity
- **Verified:** yes (first-party post and trade press; non-peer-reviewed).
- **Method and sample:** Live experiments in *League of Legends*, using language analysis to measure the tone of chat before and after.
- **Key findings:**
  - **Chat to opponents off by default:** for 2 weeks, chat with the other team ("all chat") was switched off unless players opted in. Results:
    - negative chat **−32.7%**;
    - neutral chat −1.9%;
    - positive chat **+34.5%**;
    - over the following months, fewer reports for offensive language, verbal abuse and negative attitude.
  - This happened **even though 79% of players opted back in**, and games with cross-team chat fell only from 54% to 53%. Toxicity did not move to other channels.
  - **Who is toxic:** only about 1% of players were consistently toxic, and they produced about 5% of all toxicity. Most toxicity came from otherwise neutral or positive players having an occasional bad game.
  - Messages on the loading screen changed toxic behaviour; whether it went up or down depended on the message's framing and colour.
- **Design implication:** Defaults and context are cheap, powerful levers. Launch with limited or opt-in channels. Because most toxicity is situational, invest in in-the-moment nudges and fast feedback, not just bans.

**[D34] ADL Center for Technology & Society (2024, Jan 30). *Hate is no game: Hate and harassment in online games 2023*.**
- **Link:** https://www.adl.org/resources/report/hate-no-game-hate-and-harassment-online-games-2023
- **Verified:** yes (NGO survey; non-peer-reviewed).
- **Method and sample:** A Newzoo panel of 1,971 respondents, representative of US gamers aged 10–45, surveyed August 4–17, 2023.
- **Key findings:**
  - 76% of adult players experienced harassment in online multiplayer games (86% in 2022).
  - **20% of players (adults and teens) said they spend less money in online games because of hate and harassment.**
  - The 2022 edition found 67% of 10–17-year-olds experienced harassment.
- **Design implication:** For an IAP-only game, harassment is a direct revenue leak: one player in five reports spending less. Safety features are monetization features.

**[D35] Vella, K., Klarkowski, M., Turkay, S., & Johnson, D. (2020; online 2019). Making friends in online games: Gender differences and designing for greater social connectedness. *Behaviour & Information Technology*, 39(8), 917–934.**
- **Link:** DOI 10.1080/0144929X.2019.1625442
- **Verified:** yes (abstract).
- **Method and sample:** Interviews (n=22) and focus groups (n=14).
- **Key findings:**
  - Toxicity and pressure to perform kept all players from making new connections.
  - Women players also faced misogynistic targeting and stereotype threat. Many hid their gender, which limited voice-chat connection and made them more distrustful of strangers.
  - Recommendations: mentoring opportunities, profiles that show more than skill or rank, and control over one's online identity.
- **Design implication:** Build mentor ("veteran helps newcomer") systems, richer profiles (interests, playstyle) and identity controls. Don't make voice chat the only route to friendship.

**[D36] Romhanyi, A., Wells, G., & Steinkuehler, C. (2026). Leave, mute, or retaliate? How young adults handle toxicity in multiplayer online games. *Games: Research and Practice* (ACM).**
- **Link:** DOI 10.1145/3830080
- **Verified:** yes (abstract).
- **Method and sample:** Cross-sectional survey of 602 young adults; structural equation modelling.
- **Key findings:**
  - Being a target of toxicity went with active coping (both escalating and confronting constructively). It also went with more **withdrawal from socializing and from the game**.
  - More game experience reduced withdrawal.
  - **Null finding:** exposure to toxicity didn't change how effective players thought moderation tools were. Which tools players endorsed reflected their personal coping style.
- **Design implication:** Offer a range of tools (mute, block, report, leave without penalty, support), because players cope differently. New players who have been targeted are a churn-risk group.

**[D37] Reid, E., Mandryk, R. L., Beres, N. A., Klarkowski, M., & Frommel, J. (2022). Feeling good and in control: In-game tools to support targets of toxicity. *Proc. ACM HCI*, 6(CHI PLAY), 1–27.**
- **Link:** DOI 10.1145/3549498
- **Verified:** yes (abstract).
- **Method and sample:** Iterative design and evaluation of in-game tools for players targeted by toxicity.
- **Key findings:**
  - Players preferred tools that deal with toxicity directly and give them more control.
  - Tools offering only social or emotional support also reduced stress, increased feelings of control and improved mood.
- **Design implication:** Go beyond mute and report. Add supportive responses: acknowledge reports, let teammates send "support" reactions, and follow up on what happened.

**[D38] Leavitt, A., Keegan, B. C., & Clark, J. (2016). Ping to win? Non-verbal communication and team performance in competitive online multiplayer games. *CHI '16*, 4337–4350.**
- **Link:** DOI 10.1145/2858036.2858132
- **Verified:** yes (full text).
- **Method and sample:** Observational analysis of 84,489 *League of Legends* players across 10,293 matches (102,930 player-sessions).
- **Key findings:**
  - How much players use pings (one-tap map alerts) depends on their role and what they're doing.
  - Pings improve performance, but with diminishing returns: past a point, more pinging stops helping.
- **Design implication:** Context-aware pings and quick commands are an effective, low-toxicity way for mobile teams to coordinate. Rate-limit spam.

**[D39] Zheng, K., Healy, P., Wang, S., & Farzan, R. (2026). Toxic pings: An interview study on hostile nonverbal communication among teammates in DotA 2 and League of Legends. *FDG '26*, 1–11.**
- **Link:** DOI 10.1145/3815598.3815656
- **Verified:** yes (abstract).
- **Method and sample:** Semi-structured interviews with 10 players of MOBAs (team-battle games such as *DotA 2* and *League of Legends*).
- **Key findings:**
  - Pings are players' main nonverbal channel. They're mostly strategic, but are often used to harass.
  - Players see toxic pings as different in form and intensity from verbal abuse.
  - The authors discuss the trade-offs of limiting communication to nonverbal channels only.
- **Design implication:** Emote- or ping-only communication reduces toxicity but doesn't remove it. Add per-player mute, cooldowns, and abuse detection for nonverbal spam too.

**[D40] Clash Royale's emote-only communication (Supercell)**
- **Sources:**
  - TouchArcade (2016, Jun 14), "Supercell doubles down on never muting emotes in 'Clash Royale'."
  - TouchArcade (2016, Sep 19), "'Clash Royale' update adds emote mute, new tournaments…"
- **Links:**
  - https://toucharcade.com/2016/06/14/supercell-doubles-down-on-never-muting-emotes-in-clash-royale/
  - https://toucharcade.com/2016/09/19/clash-royale-update-adds-emote-mutenew-tournaments-cards-and-more/
- **Verified:** yes (press reports of developer statements). **No outcome data.**
- **Method and sample:** Industry case.
- **Key findings:**
  - Communication with opponents during a match was limited to **ten emote buttons**, with no free text.
  - Players still used emotes to taunt. A mute option was "one of the most consistently asked for features."
  - Supercell first refused, calling strong emotions "integral to the core" of the game. It then shipped muting of opponents' emotes in September 2016.
  - No public data exist on effects on retention or revenue.
- **Design implication:** Preset communication is a sensible default for PvP, but ship mute on day one and design emotes to be expressive rather than mocking. No rigorous evidence quantifies the effect.

**[D41] Blizzard's *Overwatch* endorsement system**
- **Source:** Chalk, A. (2019, Mar 22), "Overwatch's endorsement system has cut disruptive behavior by 40 percent," *PC Gamer*. It reports a GDC 2019 talk by Blizzard's Natasha Miller and 2018 figures from game director Jeff Kaplan.
- **Link:** https://www.pcgamer.com/overwatchs-endorsement-system-has-cut-disruptive-behavior-by-40-percent/
- **Verified:** partial. This is a press report of the company's own data, comparing before and after with no control group. It also launched at the same time as a "looking for group" feature.
- **Method and sample:** Industry case.
- **Key findings:**
  - Weeks after launch (Kaplan, 2018):
    - abusive chat in competitive matches fell 26.4% in the Americas and 16.4% in Korea;
    - the share of daily players behaving abusively fell 28.8% and 21.6%.
  - By GDC 2019:
    - matches with disruptive behaviour were down 40%;
    - 50–70% of players were giving endorsements.
- **Design implication:** Reward good behaviour (post-match kudos and endorsement levels with cosmetic rewards) alongside punishment.

---

## F. Social obligation and ethics

**[D42] Zagal, J. P., Björk, S., & Lewis, C. (2013). Dark patterns in the design of games. *Proceedings of FDG 2013* (Foundations of Digital Games), Chania, Crete.**
- **Link:** http://www.fdg2013.org/program/papers/paper06_zagal_etal.pdf
- **Verified:** yes (full text).
- **Method and sample:** Conceptual analysis and typology.
- **Key findings:** The paper names three families of "dark patterns":
  - **Time:** grinding; "playing by appointment" (for example crops that wither if not harvested in time).
  - **Money:** pay to skip; content already shipped but locked; "monetized rivalries," i.e., pay to win.
  - **Social:** "social pyramid schemes," where progress requires recruiting friends; impersonation.
  - It warns against designs where players feel they must play "primarily because of a sense of social obligation."
- **Design implication:** Use social obligation lightly: flexible windows, no punishing decay, no forced recruiting. Don't sell leaderboard advantage. Both risk backlash, regulation and churn.

---

## Null, negative and conflicting findings

- **Light social features didn't predict paying or lifetime value** in a casual puzzle game, and social requests substituted for purchases [D16]. Real team gameplay raised revenue by 78–86% [D15]. *How deep the social layer goes matters.*
- **Competition motives did not predict spending**; social interaction motives did [D17].
- **Leaderboards raised output but not intrinsic motivation or quality** [D22]. A gamified course *reduced* motivation over a semester [D25]. In the gamification meta-analyses, motivational and behavioural effects are less stable in rigorous studies [D26].
- **Friend vs stranger had no main effect** on effort or performance; friends mattered only in co-op [D10].
- **Strongly social WoW players were more likely to have quit at some point.** Making real-life friends or meeting a partner in the game did not lower the stop rate [D3].
- **Weak ties predicted *worse* progression**; strong friendships predicted better [D5].
- **Streaks:** the overall losing-streak rate was not significant in one mobile game (p=.773), though effects varied by level [D30]. In another game, three losses (LLL) carried 5.1% churn risk against 2.6–2.7% in safe states [D29]. On win streaks, one game showed lower churn [D30], while in the other a WWW streak carried higher churn (3.7%) than the safe states [D29].
- **Toxicity had no long-term retention effect for capped players.** This is likely survivorship: the vulnerable newcomers had already left [D31].
- **Stated vs tested:** survey respondents prefer friend leaderboards [D24], but A/B testing at Zynga and Duolingo favoured leagues matched by engagement level [D20].
- **Defaults beat choice:** 79% of players re-enabled cross-team chat, yet negative chat still fell 32.7% [D33].

---

## Top 12 social-design principles

**1. Solo first, social soon: "alone together" before group-required play.**
- **What:** Early progression must be soloable and fast. Never require strangers in the first sessions. Surround the solo loop with social presence:
  - visible players and showcases;
  - asynchronous traces such as ghosts, others' choices and live counters;
  - clan activity feeds.
- **When:** Introduce interdependent group content in the mid and late game, where social ties become the main retention driver.
- **Evidence:** D1, D5, D9, D11, D31. *Confidence: medium–high (large observational MMO datasets; limited mobile-specific causal data).*

**2. Make small, persistent teams the core retention unit.**
- **What:**
  - Clans of roughly 20–50 players, with sub-squads of 4–8 (matching the 6–9-person cores observed in guilds).
  - Clan "types" and good matchmaking.
  - Leader tools.
  - Meaningful roles for many members.
- **Why:** Guild members play and group more, and players with clan responsibilities quit less. The one randomized test of a team feature raised revenue by 78–86%.
- **Evidence:** D1, D2, D3, D15, D19. *Confidence: medium (strong correlations plus one large randomized test).*

**3. Design co-op around interdependence, not parallel play.**
- **What:** Complementary roles, shared goals that need different contributions, and lightweight coordination tools (pings, quick-chat, ready-checks).
- **Why:** Interdependence and the conversation it triggers build trust and in-game relationships more than co-op alone. Co-op beats PvP for effort and commitment.
- **Evidence:** D6, D7, D8, D10, D12, D38. *Confidence: medium (lab and survey studies).*

**4. Grow a few strong ties and treat the social graph as a churn system.**
- **What:**
  - Friend invites and imports.
  - Duo streaks and friend quests.
  - "Rescue" flows when friends or clanmates go inactive: re-home the player into an active clan, merge dying clans.
  - Social-graph features in churn models.
- **Why:**
  - Churn spreads through social ties.
  - Friends are the most stable retention predictor, and weak ties alone don't help.
  - Shared streaks raise daily completion by 22%.
- **Evidence:** D3, D4, D5, D14, D18, D20, D31. *Confidence: medium–high.*

**5. Ship real social gameplay, not "send lives" social layers.**
- **What:** Put budget into team-vs-team events and co-op content.
- **Why:** Request-only social features neither predicted paying nor survived as a strategy, and they cannibalize the IAP that unlocks the same gate.
- **Evidence:** D15, D16, D17, D26. *Confidence: medium–high (one randomized test plus a matching null result).*

**6. Use weekly, tiered, small-group leagues matched on recent engagement.**
- **What:**
  - Groups of about 20–50 players, reset weekly.
  - Promotion and demotion zones, so most players sit near an edge.
  - Show the next reachable target.
  - Automatic entry with opt-out.
  - A friends overlay on top.
- **Why:** Players compete best as big fish in a small, fair pond.
- **Evidence:** D20, D21, D22, D23, D24, D28. *Confidence: medium (first-party A/B tests plus lab and survey studies).*

**7. Keep competition humane: protect streaks, avoid mismatches, use seasons.**
- **What:**
  - Loss-streak protection, such as no demotion on the first loss and gentler matchmaking after repeated losses.
  - Tight skill-gap limits, especially for newer players.
  - Seasonal resets, and the option to hide rank.
- **Why:** Lopsided matches and loss sequences raise churn; long-running public rankings can wear down motivation; ranked modes are more toxic.
- **Caution:** Engagement-optimized matchmaking should be transparent and never tied to spending.
- **Evidence:** D25, D29, D30, D31, D24. *Confidence: medium.*

**8. Wrap competition in collaboration.**
- **What:** Clan vs clan, team leagues, and shared clan goals with inter-clan rankings.
- **Why:** This beats individual ladders for effort and behaviour, and it produced the largest revenue effect in this review.
- **Evidence:** D10, D15, D26, D17. *Confidence: medium.*

**9. Restrict communication by default and shield newcomers.**
- **What:**
  - No open global chat at launch.
  - Preset emotes and phrases with one-tap mute.
  - Filtered clan chat.
  - Chat with opponents opt-in only.
  - Separate pools for new players.
- **Why:**
  - Toxic teammates drive new players away.
  - Toxicity is the strongest negative predictor of in-game relationships.
  - Opt-in cross-team chat cut negative chat by 32.7% even with 79% opt-in.
  - 20% of players say harassment makes them spend less.
- **Evidence:** D8, D31, D33, D34, D35, D36, D40. *Confidence: medium–high.*

**10. Complete the safety toolkit and reward good behaviour.**
- **What:**
  - Mute, block and report on every channel, emotes and pings included, with cooldowns on spam.
  - Report prompts for bystanders.
  - Calming nudges after losses.
  - Supportive responses for targets.
  - Post-match endorsements or kudos with cosmetic rewards.
- **Why:** Constrained channels still get abused, and most toxicity comes from ordinary players having a bad game.
- **Evidence:** D32, D33, D36, D37, D38, D39, D40, D41. *Confidence: medium (mostly industry pre/post data and observational studies).*

**11. Monetize social expression, status display and gifting, not competitive power.**
- **What:**
  - Cosmetics that clanmates and opponents can see.
  - Clan-wide purchases ("buy a pack, everyone in the clan gets a chest").
  - Gifting subscriptions to friends or clanmates.
  - Opt-in subscriber badges.
  - No paid advantage in ranked play.
- **Why:**
  - Social purchase motives predict spending; competition motives don't.
  - Friends' adoption causally raises the odds of paying by more than 60%.
  - Guild members convert far more often.
  - "Monetized rivalries" are a recognized dark pattern.
- **Evidence:** D1, D13, D14, D17, D19, D34, D42. *Confidence: medium.*

**12. Use social obligation sparingly, flexibly and visibly to the player.**
- **What:**
  - Asynchronous contributions with generous windows.
  - Streak freezes and repair.
  - No punishing decay for missing clan events.
  - Leader delegation tools.
  - Clan health monitoring and merges.
  - Never require recruiting friends to progress.
- **Why:** Social pressure raises play frequency and stabilizes playtime, but socially driven players also burn out and leave in waves.
- **Evidence:** D1, D2, D3, D4, D18, D20, D42. *Confidence: low–medium (observational and conceptual).*

---

## Evidence quality and gaps

- **Causal evidence is scarce and valuable:**
  - randomized: D14 (Last.fm field experiment) and D15 (*Diamond Dash* A/B test);
  - quasi-experimental: D33 (Riot chat test);
  - lab experiments: D10, D22, D23, D6/D7.
- **Most guild and clan revenue figures are correlational** and inflated by self-selection [D19]. Industry figures are not peer-reviewed [D20, D33, D40, D41].
- **The gamification meta-analyses [D26, D27] come from education.** Their transfer to entertainment games is plausible but unproven.
- **Mobile-specific academic evidence is thin** for asynchronous multiplayer, clan events and emote-only chat. The emote-only approach has no published outcome data [D40].
- **Leads I could not verify** (worth fetching with institutional access):
  - Hwang & Han (2023), "Impacts of two social systems on user retention: The case of guild system and friend system in MMORPG," SSRN, DOI 10.2139/ssrn.4606486. The record exists; no abstract was available.
  - Bai, Hew, Sailer & Jia (2021), "From top to bottom: How positions on different types of leaderboard may affect fully online student learning performance, intrinsic motivation, and course engagement," *Computers & Education*, 173, 104297. The record is verified; the open-access copy failed to download.
  - Maher (2016), "Can a video game company tame toxic behaviour?" *Nature*, 531, 568–571, DOI 10.1038/531568a. The metadata is verified; the article body is paywalled.
