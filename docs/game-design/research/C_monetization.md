# C. Monetization research: why players pay, what earns sustainably, and where the ethical and regulatory lines are

**Scope:** a new free-to-play mobile game that earns only from in-app purchases (IAP) and subscriptions, with no ads. The studio is Korean, Korea is the home market, and a global launch is likely.
**Research date:** 2026-10-01.

**What "Verified" means:**
- **yes:** I located the exact bibliographic record (Crossref, Semantic Scholar, PubMed, publisher page or an official site), and I took the findings from the abstract or full text myself.
- **partial:** the bibliographic record is verified, but some findings come from a secondary source or only from the abstract/TLDR because the full text was paywalled.
- **WP / preprint / industry:** the source is not peer-reviewed. Treat these numbers as directional.

**Tools used:** Crossref, Semantic Scholar and PubMed APIs; publisher, regulator and official-gazette pages (EU Commission, GOV.UK, FTC, Apple, Google, the Brazilian Planalto, Japan's CAA, Korean law-firm newsletters); full-text PDFs where open access.

---

## Executive summary

1. **Paying is rare and concentrated.**
   - Fewer than 2% of new players of a Wooga F2P game became paying players during their 30-day observation window [C19].
   - More than 99% of new users of a puzzle game spent nothing in their first 28 days [C17].
   - In one gacha puzzle game, 1.5% of players produced 90% of revenue [C25].
   - Across $4.7B of transactions in 2,873 mobile games, "hyper-Pareto" games earned about 38% of revenue from the top 1% of spenders [C22].
   - The heaviest spenders are over-represented among problem gamblers, and their spending is not explained by higher income [C23, C24, C26].
2. **Retention drives revenue.**
   - A large randomized trial found that making the game easier for players at risk of churning reduced purchases in the round played. It still raised engagement by about 20% and raised 30-day revenue, roughly 80% of it from IAP [C17].
   - Personalizing difficulty could raise revenue by about 71% in a structural counterfactual [C18].
   - Continuous quality updates gave up to 3× better survival in the top-grossing charts [C14].
   - Offering IAP *increases* app demand; in-app ads *reduce* it [C13]. This supports an IAP-only model.
3. **The main purchase drivers are designable:**
   - unobstructed play (convenience and time-saving);
   - social interaction;
   - "economical rationale" (value deals) [C3];
   - self-expression, exclusivity and collecting [C1, C5, C6];
   - loyalty and perceived value [C7, C8, C11].
4. **Pay-to-win has social costs.**
   - Players who buy functional advantages lose status and respect in their peers' eyes [C9].
   - Players see pay-to-win as unfair [C37, C38, C45].
   - On PC, exposure to pay-to-win stalled at about 17% while cosmetics reached about 86% [C44].
5. **Season/battle passes are now standard:**
   - about 21% of US top-100 grossing games had one in Dec 2019, and about 66% of the top 20% of mobile games by 2023 [C31];
   - after pass launches, 3-month average revenue rose about 46% (Hay Day) to 95% (Lords Mobile), and monthly revenue rose 58–62% (Clash of Clans, Hay Day). These figures are correlational [C30];
   - no causal peer-reviewed evidence on battle-pass effects exists yet [C29].
6. **Subscriptions** ("monthly card", VIP, pass subscriptions) are growing, but the evidence is mostly industry case data [C33] plus one Management Science model [C32]. This is an evidence gap.
7. **Virtual currencies raise willingness to pay.**
   - A 2025 randomized trial (N=753) found willingness to pay about 4% higher when prices were shown in virtual currency rather than real money [C52].
   - Regulators now treat currency obfuscation as an unfair practice:
     - the EU CPC Key Principles (21 Mar 2025) and the 30 Sep 2026 coordinated actions against 10 major publishers [R7];
     - the US FTC's HoYoverse/Genshin settlement of $20M (Jan 2025) [R12].
8. **Loot boxes and gacha** are consistently linked to problem gambling, with small-to-moderate correlations of r ≈ 0.26–0.27 [C40, C42].
   - Korea has mandated probability disclosure since 22 Mar 2024 [R1].
   - Since 1 Aug 2025, Korea also allows **up to 3× damages** for intentional misrepresentation, and the operator carries the burden of proof [R2].
   - Brazil bans loot boxes in games likely to be accessed by minors from 17 Mar 2026 [R11].
9. **Enforcement in Korea is real.**
   - Regulators issued 266 corrective requests in the law's first 100 days [C48].
   - Nexon was fined ₩11.6bn in 2024 for misleading MapleStory probabilities [C48].
   - Gravity and Wemade were sanctioned in Apr 2025 [R4].
10. **Design direction:** build an engaging, fair, transparent game. Sell convenience, expression and status, plus season passes and subscriptions. Keep randomized purchases optional and "fair gacha" (disclosed, with pity/ceiling). Protect minors and very high spenders. This combination fits the evidence on revenue and retention, and the regulatory direction in Korea, the EU, the UK, Brazil, Australia and the US.

---

## Annotated sources

### 1. Why players buy virtual items

**[C1] Lehdonvirta, V. (2009). Virtual item sales as a revenue model: identifying attributes that drive purchase decisions. *Electronic Commerce Research*, 9, 97–113.**
https://doi.org/10.1007/s10660-009-9028-2
- **Verified:** partial. The record is verified; the findings come from the Semantic Scholar summary because the full text is paywalled.
- **Method & sample:** a sociology-of-consumption analysis of 14 virtual-asset platforms.
- **Key findings:** purchase decisions are driven by three groups of item attributes:
  - *functional* (performance, functionality);
  - *hedonic* (aesthetics, fiction);
  - *social* (status, rarity, identity).
- **Design implication:** design every sellable item to give an explicit functional, hedonic or social reason to buy. For a fair game, lean on hedonic and social attributes.

**[C2] Hamari, J., & Lehdonvirta, V. (2010). Game design as marketing: How game mechanics create demand for virtual goods. *International Journal of Business Science & Applied Management*, 5(1), 14–29.**
https://doi.org/10.69864/ijbsam.5-1.48
- **Verified:** partial. Record and abstract verified; the full text could not be retrieved.
- **Method & sample:** a conceptual review of MMO design patterns, mapped to techniques from marketing science.
- **Key findings:** common game mechanics act as marketing techniques that create demand for virtual goods. Designing the game *is* marketing the goods.
- **Design implication:** progression, scarcity and status systems determine demand. Review them at design time with the same ethical scrutiny as advertising (see C35–C39).

**[C3] Hamari, J., Alha, K., Järvelä, S., Kivikangas, J. M., Koivisto, J., & Paavilainen, J. (2017). Why do players buy in-game content? An empirical study on concrete purchase motivations. *Computers in Human Behavior*, 68, 538–546.**
https://doi.org/10.1016/j.chb.2016.11.045
- **Verified:** yes.
- **Method & sample:**
  - 19 concrete purchase reasons, triangulated from top-grossing F2P games, the literature and expert input;
  - a survey with N=519;
  - factor analysis followed by regression on spending.
- **Key findings:** the reasons formed six dimensions: unobstructed play, social interaction, competition, economical rationale, indulging children and unlocking content. Only three were positively associated with how much players spend:
  - **unobstructed play**;
  - **social interaction**;
  - **economical rationale**.
- **Design implication:** the strongest levers are:
  - convenience and time-saving purchases;
  - social and gifting value;
  - visibly good-value bundles.
  
  Competitive advantage was *not* among the spending predictors.

**[C4] Hamari, J., & Keronen, L. (2017). Why do people buy virtual goods: A meta-analysis. *Computers in Human Behavior*, 71, 59–69.**
https://doi.org/10.1016/j.chb.2017.01.042
- **Verified:** yes.
- **Method & sample:** a random-effects meta-analysis of 24 quantitative studies.
- **Key findings:**
  - The value of virtual goods is bound to the platform where they are sold.
  - Significant predictors of purchase: attitude, flow, network size, self-presentation, subjective norms, social presence, perceived value, enjoyment, intention to keep using the platform, and ease of use.
  - Enjoyment and prolonged use predicted purchases more strongly in virtual worlds than in games.
- **Design implication:** item value comes from the game world itself: flow, a social network and a stage for self-presentation. Invest there before investing in the shop.

**[C5] Marder, B., Gattig, D., Collins, E., Pitt, L., Kietzmann, J., & Erz, A. (2019). The Avatar's new clothes: Understanding why players purchase non-functional items in free-to-play games. *Computers in Human Behavior*, 91, 72–83.**
https://doi.org/10.1016/j.chb.2018.09.006
- **Verified:** yes.
- **Method & sample:** qualitative interviews with 32 *League of Legends* players.
- **Key findings:**
  - Players buy purely cosmetic items for hedonic, social and utilitarian reasons.
  - New finding: some purchases are made mainly *to support the developer*. The value lies in the act of paying, not only in the item.
- **Design implication:** a cosmetic-only economy can carry a top-grossing game. Make support visible, for example creator or "supporter" cosmetics and transparent roadmaps.

**[C6] Cleghorn, J., & Griffiths, M. D. (2015). Why do gamers buy "virtual assets"? An insight in to the psychology behind purchase behaviour. *Digital Education Review*, 27, 85–104.**
https://eric.ed.gov/?id=EJ1065003
- **Verified:** yes (ERIC record and abstract).
- **Method & sample:** interpretative phenomenological analysis of interviews with 6 regular buyers.
- **Key findings:**
  - Purchase motives: item exclusivity, function, social appeal and collectability.
  - Participants reported self-expression, satisfaction and friendships. Psychological outcomes were mostly positive.
- **Design implication:** collections, limited-but-fair exclusivity and social display are healthy motives to design for. The sample is very small, so treat this as hypothesis-generating.

**[C7] Hsiao, K.-L., & Chen, C.-C. (2016). What drives in-app purchase intention for mobile games? An examination of perceived values and loyalty. *Electronic Commerce Research and Applications*, 16, 18–29.**
https://doi.org/10.1016/j.elerap.2016.01.001
- **Verified:** partial. The record is verified; the findings come from Semantic Scholar's TLDR and secondary summaries because the abstract is paywalled. The exact N was not verified.
- **Method & sample:** a player survey analysed with SEM, comparing a male-dominated and a female-dominated mobile game.
- **Key findings:**
  - Perceived playfulness, connectedness, good price and reward predict *loyalty*.
  - Loyalty significantly drives IAP intention.
  - Paying and non-paying users differ.
- **Design implication:** loyalty, built through fun, social connection, fair prices and rewarding play, comes before conversion. Do not try to convert players before they are loyal.

**[C8] Balakrishnan, J., & Griffiths, M. D. (2018). Loyalty towards online games, gaming addiction, and purchase intention towards online mobile in-game features. *Computers in Human Behavior*, 87, 238–246.**
https://doi.org/10.1016/j.chb.2018.06.002
- **Verified:** yes.
- **Method & sample:** a 28-item survey of 430 students at two Indian universities.
- **Key findings:**
  - Addiction is positively related to loyalty.
  - Both addiction and loyalty are positively related to purchase intention.
  - The authors flag the ethical problem if engagement strategies work by fostering addiction.
- **Design implication:** do not measure success by engagement intensity alone. Track signs of problematic use alongside revenue (see principle 9).

**[C9] Evers, E. R. K., van de Ven, N., & Weeda, D. (2015). The hidden cost of microtransactions: Buying in-game advantages in online games decreases a player's status. *International Journal of Internet Science*, 10(1), 20–36.**
https://research.tilburguniversity.edu/en/publications/the-hidden-cost-of-microtransactions-buying-in-game-advantages-in/
- **Verified:** yes (Tilburg portal record and abstract).
- **Method & sample:** one survey and two experimental scenario studies, 532 active gamers in total.
- **Key findings:**
  - Players who buy *functional* advantages are judged to have lower skill and status, and are respected less, whether they are opponents or teammates.
  - Buying ornamental items carries much less of this penalty.
- **Design implication:** selling power hurts the buyer's social standing and the community climate. Status sold as cosmetics does not carry that cost.

**[C10] Alha, K., Koskinen, E., Paavilainen, J., Hamari, J., & Kinnunen, J. (2014). Free-to-play games: Professionals' perspectives. *Proceedings of Nordic DiGRA 2014*.**
https://doi.org/10.26503/dl.v2014i2.702
- **Verified:** yes.
- **Method & sample:** 14 interviews with game professionals, analysed thematically.
- **Key findings:**
  - Developers view F2P favourably and see public discourse as hostile.
  - Few saw ethical problems with the model as a whole.
  - The combination of *children and F2P* was seen as problematic.
- **Design implication:** even industry insiders draw the line at minors. Protecting minors is the consensus ethical floor.

**[C11] Hamari, J., Hanner, N., & Koivisto, J. (2020). "Why pay premium in freemium services?" A study on perceived value, continued use and purchase intentions in free-to-play games. *International Journal of Information Management*, 51, 102040.**
https://doi.org/10.1016/j.ijinfomgt.2019.102040
Companion study: Hamari, Hanner & Koivisto (2017), *IJIM*, 37(1), 1449–1459, https://doi.org/10.1016/j.ijinfomgt.2016.09.004
- **Verified:** yes for the 2020 abstract; partial for the 2017 paper (TLDR only).
- **Method & sample:** online survey of F2P players, N=869.
- **Key findings:**
  - Support for a "Demand Through Inconvenience" effect: higher enjoyment means *lower* premium purchase intention but *higher* continued use.
  - Social value raises both use and purchases.
  - Service quality relates to use but not directly to purchases.
  - Economic value raises use, and through use raises purchases.
  - The 2017 study likewise found that quality affects premium purchases only through use.
- **Design implication:** the classic F2P temptation is to sell relief from deliberately created friction. That trades retention for short-term conversion. Monetize social value and economic value instead (see C17 for the causal counter-evidence).

**[C12] Lee, J., Suh, E., Park, H., & Lee, S. (2018). Determinants of users' intention to purchase probability-based items in mobile social network games: A case of South Korea. *IEEE Access*, 6, 12425–12437.**
https://doi.org/10.1109/ACCESS.2018.2806078
- **Verified:** yes (abstract). The sample size was not verified.
- **Method & sample:** a survey of Korean mobile social network game users, using an extended technology-acceptance model with a gender-split analysis.
- **Key findings:**
  - Intention to buy probability-based items (gacha) is driven by perceived enjoyment, perceived usefulness, perceived number of users and of friends, and **desire for a jackpot**.
  - Men and women respond differently on some factors.
- **Design implication:** in Korea, gacha demand rests partly on jackpot-seeking, a gambling-adjacent motive. That is a reason to cap and soften randomness with pity/ceiling and to protect minors (see principle 7).

### 2. App economics and causal (field) evidence on freemium

**[C13] Ghose, A., & Han, S. P. (2014). Estimating demand for mobile applications in the new economy. *Management Science*, 60(6), 1470–1488.**
https://doi.org/10.1287/mnsc.2014.1945
- **Verified:** yes (full abstract via RePEc).
- **Method & sample:** a structural econometric demand model of competing apps on Apple iOS and Google Play.
- **Key findings:**
  - App demand **increases** with an in-app purchase option and **decreases** with in-app ads.
  - The effects on revenue are equivalent to a **28% price discount** for offering IAP and an **8% price increase** for carrying ads.
  - Revenue was maximized with a roughly 50% discount on paid apps.
- **Design implication:** a no-ads, IAP-only model is consistent with higher demand, because the absence of ads is itself a feature.

**[C14] Lee, G., & Raghu, T. S. (2014). Determinants of mobile apps' success: Evidence from the App Store market. *Journal of Management Information Systems*, 31(2), 133–170.**
https://doi.org/10.2753/MIS0742-1222310206
- **Verified:** yes (full abstract via the ASU research portal).
- **Method & sample:** apps tracked in Apple's top-grossing 300 chart; hierarchical, hazard and count models.
- **Key findings:**
  - Free offers, high initial rank, less-competitive categories, **continuous quality updates** and high review volume and scores all improve survival in the chart.
  - Survival rates of free apps are up to **2×** those of paid apps.
  - Quality (feature) updates give up to a **3-fold** improvement in survival.
- **Design implication:** budget for a sustained content and quality-update cadence. Longevity in the top-grossing chart depends on it.

**[C15] Appel, G., Libai, B., Muller, E., & Shachar, R. (2020). On the monetization of mobile apps. *International Journal of Research in Marketing*, 37, 93–107.**
https://doi.org/10.1016/j.ijresmar.2019.07.007
- **Verified:** yes.
- **Method & sample:** an analytical framework built on two empirical regularities:
  - sampling uncertainty (users don't know their exact utility until they use the app);
  - satiation (utility declines over time).
- **Key findings:**
  - Satiation plus uncertainty explains how to balance free and paid segments.
  - Depending on parameters, revenue is driven either by ads or by the paid tier.
- **Design implication:** satiation is the enemy of IAP revenue. Plan novelty (seasons, new content and modes) to counter it, rather than adding ads.

**[C16] Runge, J., Levav, J., & Nair, H. S. (2022). Price promotions and "freemium" app monetization. *Quantitative Marketing and Economics*, 20, 101–139.**
https://doi.org/10.1007/s11129-022-09248-3
- **Verified:** yes for the record; the findings come from the SSRN working-paper abstract (DOI 10.2139/ssrn.3357275). The promotion schedule detail is partial.
- **Method & sample:**
  - a field experiment in which entering cohorts of a F2P game were randomized to promotions on or off;
  - complete behaviour, including purchases and consumption, observed for about 6 months.
- **Key findings:**
  - Promotions raised conversion **and** revenue.
  - There was **no evidence** that players delayed purchases to wait for sales, or that sales made them think the product was lower quality.
- **Design implication:** regular, honest sales and bundle promotions are profitable in freemium. You do not need fake urgency to make them work.

**[C17] Ascarza, E., Netzer, O., & Runge, J. (2025). Personalized game design for improved user retention and monetization in freemium games. *International Journal of Research in Marketing*, 42(4), 975–995.**
https://doi.org/10.1016/j.ijresmar.2025.01.006
- **Verified:** yes (accepted-manuscript full text).
- **Method & sample:**
  - a large randomized controlled trial in a popular F2P mobile puzzle game;
  - qualifying players had passed level 20 and played fewer than 20 rounds in the past week;
  - 41.8% of them were assigned to dynamically eased difficulty over 50 days.
- **Key findings:**
  - Descriptives: day-1 retention 47.5% and day-28 retention 9.0%; more than 99% of new users spent nothing in the first 28 days.
  - Easier difficulty **decreased** purchases in the round played.
  - It **increased** engagement (about 20%) and long-term retention, which raised spending in both the short and the long run.
  - Net revenue rose by about $0.07–0.08 per user within 30 days, with about 79–82% of the increase coming from IAP rather than ads.
- **Design implication:** this is the causal counterweight to selling relief from frustration. Easing friction for players about to churn earns more. Use dynamic difficulty adjustment (DDA) for retention, not for purchase pressure.

**[C18] Pape, L.-D., Helmers, C., Iaria, A., Wagner, S., & Runge, J. (2025). Personalized content, engagement, and monetization in a mobile puzzle game. *International Journal of Industrial Organization*, 98, 103128.**
https://doi.org/10.1016/j.ijindorg.2024.103128
- **Verified:** yes (abstract via RePEc).
- **Method & sample:** player-level data from a mobile puzzle game and a structural model of player behaviour.
- **Key findings:**
  - Average difficulty was already set at the revenue-maximizing level.
  - **Personalizing** difficulty could raise revenue by about **71%** (counterfactual), through higher engagement.
  - The smallest spenders show the largest relative gain; the largest spenders give most of the absolute gain.
- **Design implication:** personalizing *content and difficulty* is a large lever. Keep it player-serving, and do not personalize prices or odds (see C36).

### 3. Spending concentration, payer prediction and lifetime value (LTV)

**[C19] Sifa, R., Hadiji, F., Runge, J., Drachen, A., Kersting, K., & Bauckhage, C. (2015). Predicting purchase decisions in mobile free-to-play games. *Proceedings of AIIDE*, 11(1), 79–85.**
https://doi.org/10.1609/aiide.v11i1.12788
- **Verified:** yes (full text).
- **Method & sample:** more than 100,000 new players of a Wooga F2P puzzle game, followed for 30 days. The only item for sale was in-game currency. Classification and Poisson-regression trees.
- **Key findings:**
  - Future paying ("premium") players were **below 2%**.
  - Random forests with SMOTE-NC oversampling predicted payers best.
  - Prediction improves with longer observation windows of 1, 3 and 7 days.
- **Design implication:** expect a payer rate of about 2% or lower. Monetization design must create value for the 98% too, through retention, social proof and content.

**[C20] Drachen, A., Pastor, M., Liu, A., Fontaine, D. J., Chang, Y., Runge, J., Sifa, R., & Klabjan, D. (2018). To be or not to be... social: Incorporating simple social features in mobile game customer lifetime value predictions. *Proceedings of ACSW 2018*, 1–10.**
https://doi.org/10.1145/3167918.3167925
- **Verified:** yes (abstract).
- **Method & sample:** a case study of more than 200,000 players of a casual freemium mobile game; classifiers and regression for premium status and customer lifetime value (CLV).
- **Key findings:**
  - Simple social activity did **not** correlate with the tendency to become a paying user.
  - Social activity increased over time within a cohort.
- **Design implication:** social features build retention and community but are not a direct conversion lever in casual games. Do not force social actions to monetize (see C39).

**[C21] Chen, P. P., Guitart, A., Fernández del Río, A., & Periáñez, Á. (2018). Customer lifetime value in video games using deep learning and parametric models. *2018 IEEE International Conference on Big Data*, 2134–2140.**
https://doi.org/10.1109/BigData.2018.8622151
- **Verified:** yes (arXiv full text: 1811.12799).
- **Method & sample:** paying users of *Age of Ishtaria* (Silicon Studio), a gacha-monetized mobile RPG; deep neural networks and CNNs compared with Pareto/NBD models.
- **Key findings:**
  - Whales, about 2% of players, may provide up to 50% of revenue.
  - CNNs on raw sequences predicted lifetime value best and flagged whales early.
- **Design implication:** whales can be predicted early. Use that capability for *service and care* (spend summaries, limits, VIP support), not targeted pressure (see C36, R7).

**[C22] Zendle, D., Flick, C., Deterding, S., Cutting, J., Gordon-Petrovskaya, E., & Drachen, A. (2023). The many faces of monetisation: Understanding the diversity and extremity of player spending in mobile games via massive-scale transactional analysis. *Games: Research and Practice*, 1(1), 1–28.**
https://doi.org/10.1145/3582927
- **Verified:** yes (abstract).
- **Method & sample:** $4.7B in transactions from 69,144,363 players of 2,873 mobile games over 624 days.
- **Key findings:**
  - Revenue distributions are diverse, from "uniform" games to "hyper-Pareto" games where about **38% of revenue comes from the top 1% of spenders**.
  - The more a game relies on its top 1%, the more those individuals spend. Social casino games are the most extreme.
  - In the most extreme game, the top 1% averaged **$66,285 each** over 624 days.
- **Design implication:** whether a game is broad-based or hyper-Pareto is a *design choice*. A broad base of moderate spenders is less risky ethically and in revenue terms.

**[C23] Close, J., Spicer, S. G., Nicklin, L. L., Uther, M., Lloyd, J., & Lloyd, H. (2021). Secondary analysis of loot box data: Are high-spending "whales" wealthy gamers or problem gamblers? *Addictive Behaviors*, 117, 106851.**
https://doi.org/10.1016/j.addbeh.2021.106851
- **Verified:** yes (PubMed abstract).
- **Method & sample:** six aggregated open datasets, 7,767 loot-box purchasers (5,933 with self-reported earnings).
- **Key findings:**
  - The top **5%** of spenders (more than $100 a month) produced **half** of loot-box revenue.
  - Spending correlated with problem gambling (ρ = 0.34) but **not** with earnings (ρ = 0.02).
- **Design implication:** revenue from heavy randomized spending comes disproportionately from at-risk players, not rich ones. Spending limits and care for high spenders are risk management, not lost revenue.

**[C24] Close, J., & Lloyd, J. (2021). *Lifting the lid on loot-boxes: Chance-based purchases in video games and the convergence of gaming and gambling*. GambleAware (University of Plymouth / University of Wolverhampton).**
https://www.gambleaware.org/media/egljnu4x/gaming_and_gambling_report_final_0.pdf
- **Verified:** yes (full report).
- **Method & sample:** mixed methods: secondary analysis (7,771 purchasers), interviews with regular buyers, and a pre-screen survey of 13,000 UK gamers.
- **Key findings:**
  - About 5% of buyers produce about half of loot-box revenue, and the top 2% about a third.
  - **Almost one third** of the top 5% are classed as "problem gamblers".
  - Motives: social, game-related, and **fear of missing out** (social, promotional, limited-time).
  - Nudges identified:
    - endowment (free boxes, paid opening);
    - price anchoring;
    - limited-time offers;
    - cost obfuscation through currencies.
- **Design implication:** this is a list of tactics to *avoid* or neutralize. Recommendations include disclosure, spending limits and stronger consumer protection.

**[C25] Amano, T., & Simonov, A. (2023). *A welfare analysis of gambling in video games* (earlier title: "What makes players pay? An empirical investigation of in-game lotteries"). SSRN working paper.**
https://doi.org/10.2139/ssrn.4355019
- **Verified:** yes (abstract); WP, not peer-reviewed.
- **Method & sample:** structural estimation on data from a mobile puzzle game with loot boxes.
- **Key findings:**
  - "Whales" (**1.5% of players**) produce **90% of revenue**.
  - For whales, only 3% of the value they get from loot boxes comes from helping gameplay; for everyone else it is about 90%.
  - A *blanket* ban hurts consumers by removing that gameplay value.
  - The evidence favours **spending caps**.
- **Design implication:** randomized rewards can be valuable gameplay. The policy and design lever is caps and limits on spending, not just presence or absence of loot boxes.

**[C26] Dreier, M., Wölfling, K., Duven, E., Giralt, S., Beutel, M. E., & Müller, K. W. (2017). Free-to-play: About addicted Whales, at risk Dolphins and healthy Minnows. Monetarization design and Internet Gaming Disorder. *Addictive Behaviors*, 64, 328–333.**
https://doi.org/10.1016/j.addbeh.2016.03.008
- **Verified:** yes (PubMed abstract).
- **Method & sample:** a representative German school study, N=3,967, aged 12–18, among F2P browser-game players.
- **Key findings:**
  - Internet gaming disorder (IGD) prevalence was 5.2% among F2P gamers.
  - Average revenue per user was significantly higher among adolescents with IGD.
  - Whales share characteristics with addicted gamers; "dolphins" are at-risk consumers.
- **Design implication:** among minors, the highest-paying players include addicted ones. Use age-appropriate defaults and caps.

### 4. Battle passes and season passes

**[C27] Joseph, D. (2021). Battle pass capitalism. *Journal of Consumer Culture*, 21, 68–83.**
https://doi.org/10.1177/1469540521993930
- **Verified:** yes (abstract).
- **Method & sample:** a political-economy analysis and "app walk-through" of *Apex Legends*.
- **Key findings:**
  - The battle pass is a new commodity that structures play over time, alongside skins and loot boxes.
  - What players actually consume is highly abstracted, so the true cost is hard to see.
- **Design implication:** state clearly what the pass contains, how long it lasts, and how much play it needs. Make value legible.

**[C28] Zanescu, A., French, M., & Lajeunesse, M. (2021; online 2020). Betting on DOTA 2's Battle Pass: Gamblification and productivity in play. *New Media & Society*, 23(10), 2882–2901.**
https://doi.org/10.1177/1461444820941381
- **Verified:** yes (abstract).
- **Method & sample:** a cataloguing analysis of the yearly *Dota 2* Battle Pass systems.
- **Key findings:** the pass was "brimming with gambling systems" (gamblification) designed to habituate a form of consumption.
- **Design implication:** keep randomized or betting mechanics *out* of the pass. Otherwise the pass inherits loot-box regulation, including Korea's probability-item rules [R1].

**[C29] Petrovskaya, E., & Zendle, D. (2020; v2 2025). The Battle Pass: A mixed-methods investigation into a growing type of video game monetisation. OSF Preprints.**
https://doi.org/10.31219/osf.io/vnmeq
- **Verified:** yes (OSF metadata and abstract); preprint, not peer-reviewed.
- **Method & sample:** quantitative player-uptake data plus qualitative analysis of player attitudes, on the *Dota 2* Battle Pass.
- **Key findings:**
  - Despite the pass's profitability, its presence had **minimal effect on player uptake**.
  - Players were broadly positive, but worried about elitism and about how hard it is to reach rewards without paying.
- **Design implication:** passes monetize existing players. They do not by themselves grow the player base. Make free-track rewards reachable through normal play.

**[C30] Sensor Tower (industry):**
- Chapple, C. (2021, April). *Battle pass success stories.* https://sensortower.com/blog/battle-pass-success-stories-2021
- Rabolini, F. (2022, March). *State of mobile game monetization 2022.* https://sensortower.com/blog/state-of-mobile-game-monetization-2022
- **Verified:** yes (pages read); industry estimates.
- **Key findings:**
  - Revenue around pass launches:
    - *Clash of Clans* rose 58% month on month to $66.8M in April 2019, after its Gold Pass launched;
    - *Hay Day* rose 62% month on month to about $14M after its Farm Pass (Dec 2020); Dec–Feb averaged $14.2M against $9.7M before;
    - *Lords Mobile* roughly doubled to $90.3M in January 2021;
    - *Township* rose 22% month on month to $29.8M in November 2019.
  - **Half of the top-grossing titles globally in 2021** used a season pass.
- **Design implication:** a pass is the industry-default recurring product. The revenue lifts are correlational and coincide with other content.

**[C31] GameRefinery (industry; now part of Liftoff):**
- Kiiski, E. (2019, 17 Dec). *Battle pass trend in mobile games.* https://www.gamerefinery.com/battle-pass-trend-mobile-games/
- Voutilainen, W., & Jokela, J. (2023, 26 Oct; first published Mar 2022). *12 ways to take battle passes to the next level in mobile games.* https://www.gamerefinery.com/12-ways-to-take-battle-passes-to-the-next-level-in-mobile-games/
- **Verified:** yes (pages read); industry data.
- **Key findings:**
  - Prevalence:
    - in US iOS, from "a couple percent" of the top-grossing 100 at the start of 2019 to **21%** by December 2019;
    - **about 66% of mobile games in the top 20%** had a battle pass by 2023.
  - Variants in use:
    - subscription battle passes that renew automatically each month;
    - several passes per game;
    - multi-tier passes;
    - co-op or guild passes;
    - "piggy-bank" passes;
    - a shop for rewards from previous passes.
- **Design implication:** a subscription-style pass and a co-op guild pass fit an IAP-only game. A shop for past-season items reduces FOMO.

### 5. Subscriptions (monthly cards, VIP, pass subscriptions)

**[C32] Mai, Y., & Hu, B. (2023). Optimizing free-to-play multiplayer games with premium subscription. *Management Science*, 69(6), 3437–3456.**
https://doi.org/10.1287/mnsc.2022.4510
- **Verified:** yes (abstract).
- **Method & sample:** an optimal-control model combining Bass diffusion with replicator dynamics, including social comparison between free and premium players.
- **Key findings:**
  - Prioritize early growth and **postpone** introducing the premium subscription.
  - The optimal subscription price may start high and decline.
  - Strengthening social comparison raises profit.
  - In the model, payment-based matchmaking is an effective monetization driver.
  - Results hold with item purchases or partial subscriptions.
- **Design implication:**
  - Launch with a strong free game and add the subscription once there is a community.
  - Satisfy social comparison through *cosmetic* status.
  - Do **not** use payment-based matchmaking. It is a pay-to-win, dark-pattern-adjacent practice (C36, C37, C45).

**[C33] Matthew, B. (2022, 4 Aug). *VIP subscriptions & the recurring revenue revolution.* Naavik.**
https://naavik.co/f2p-mobile/vip-subscriptions-recurring-revenue-revolution/
- **Verified:** yes (page read); industry article with unaudited figures.
- **Key findings:**
  - Example: the *Rise of Kingdoms* gem subscription gives 19,500 gems for $9.99 per 30 days, against 12,000 gems for a one-off $49.99 purchase. Subscriptions anchor value for low and mid spenders.
  - Claimed heuristics, not verified: about a 13% chance of converting a new customer against 60–70% repeat purchase once converted.
  - A Scopely observation: subscribers' revenue per user rises more steeply than non-subscribers'.
- **Design implication:** a monthly card or subscription with daily login delivery is a high-value, low-pressure first purchase that also supports retention. Measure its retention effect yourself; peer-reviewed evidence is lacking.

**[C34] Gibbons, J., & Barnes, J. (2022, June). *Battle passes analysis.* Deconstructor of Fun.**
https://www.deconstructoroffun.com/blog/2022/6/4/battle-passes-analysis
- **Verified:** yes (page read); industry article.
- **Key findings:**
  - Most mobile passes cost **$5–15** for the basic tier.
  - Rewards are worth about **10–20×** the price.
  - Seasons typically last about **one month**.
  - Most pass revenue comes from the upfront purchase.
  - "Most games in the top-grossing already have Passes."
- **Design implication:** benchmarks for pass pricing and perceived value. Pass quests also encourage players to explore content.

### 6. Predatory monetization, dark patterns and loot-box harms

**[C35] King, D. L., & Delfabbro, P. H. (2018). Predatory monetization schemes in video games (e.g. 'loot boxes') and internet gaming disorder. *Addiction*, 113(11), 1967–1969.**
https://doi.org/10.1111/add.14286
- **Verified:** partial. Record verified via PubMed; it is an editorial with no abstract. The definition is quoted from secondary sources.
- **Key findings:** defines predatory monetization as in-game purchasing systems that "disguise or withhold the true long-term cost of the activity until players are psychologically or financially committed."
- **Design implication:** a simple test for every offer: does the player know the total cost to reach the goal *before* committing? If not, redesign.

**[C36] King, D. L., Delfabbro, P. H., Gainsbury, S. M., Dreier, M., Greer, N., & Billieux, J. (2019). Unfair play? Video games as exploitative monetized services: An examination of game patents from a consumer protection perspective. *Computers in Human Behavior*, 101, 131–143.**
https://doi.org/10.1016/j.chb.2019.07.017
- **Verified:** yes (abstract).
- **Method & sample:** analysis of 13 in-game purchasing patents against the patent holders' terms of use.
- **Key findings:**
  - Some patented systems use information advantages (behavioural tracking) and data manipulation (price manipulation) to optimize offers for continuous spending.
  - They give limited guarantees, such as refunds.
  - They have the potential to exploit adolescents and problem gamers.
- **Design implication:**
  - Do not personalize prices, odds or offer timing based on vulnerability signals.
  - Publish a non-personalization statement.
  - Offer clear refunds.

**[C37] Petrovskaya, E., & Zendle, D. (2022; online 2021). Predatory monetisation? A categorisation of unfair, misleading and aggressive monetisation techniques in digital games from the player perspective. *Journal of Business Ethics*, 181(4), 1065–1081.**
https://doi.org/10.1007/s10551-021-04970-6
- **Verified:** yes (abstract).
- **Method & sample:** 1,104 players described transactions they saw as misleading, aggressive or unfair.
- **Key findings:** 35 techniques in 8 domains:
  - game dynamics designed to drive spending;
  - product not meeting expectations;
  - monetization of basic quality of life;
  - predatory advertising;
  - in-game currency;
  - **pay-to-win**;
  - the general presence of microtransactions;
  - other.
  
  Several of these seem not to be covered by UK consumer law.
- **Design implication:** use this taxonomy as a pre-launch "red-team" checklist for the shop and the economy.

**[C38] Petrovskaya, E., Deterding, S., & Zendle, D. (2022). Prevalence and salience of problematic microtransactions in top-grossing mobile and PC games: A content analysis of user reviews. *Proceedings of CHI '22*, 1–12.**
https://doi.org/10.1145/3491102.3502056
- **Verified:** yes (abstract).
- **Method & sample:** content analysis of 801 negative reviews of top-grossing mobile and PC games.
- **Key findings:**
  - Mobile games show *more frequent and more varied* problematic techniques than PC games.
  - Players objected to unfairness, lack of transparency and degraded experience, and to monetization-driven design as such.
- **Design implication:** monetization complaints feed app-store ratings and so affect acquisition. Fairness and transparency also protect the store-listing funnel.

**[C39] Zagal, J. P., Björk, S., & Lewis, C. (2013). Dark patterns in the design of games. *Proceedings of Foundations of Digital Games (FDG 2013)*.**
https://www.semanticscholar.org/paper/19a241378b06d868eb5f6b76027172c3aaca86f4 (dblp: conf/fdg/ZagalB013)
- **Verified:** yes (abstract); the example patterns are partial (from secondary summaries).
- **Method & sample:** a conceptual design-pattern analysis.
- **Key findings:**
  - Defines "dark game design patterns": elements that work against players' interests.
  - Examples in temporal, monetary and social-capital categories, such as grinding, playing by appointment, pay-to-skip and social pyramid schemes.
  - Offers questions for identifying new dark patterns.
- **Design implication:** run a dark-pattern audit of energy timers, appointment mechanics and invite-gated rewards.

**[C40] Zendle, D., & Cairns, P. (2018). Video game loot boxes are linked to problem gambling: Results of a large-scale survey. *PLOS ONE*, 13(11), e0206767.**
https://doi.org/10.1371/journal.pone.0206767
- **Verified:** yes.
- **Method & sample:** survey of 7,422 gamers.
- **Key findings:**
  - Loot-box spending was linked to problem-gambling severity (η² = 0.054).
  - The link for other in-game purchases was much weaker (η² = 0.004).
  - This points to the randomized feature specifically.
- **Design implication:** randomization, not spending as such, carries the extra risk. Prefer direct-purchase shops and keep randomness optional and capped.

**[C41] Drummond, A., & Sauer, J. D. (2018). Video game loot boxes are psychologically akin to gambling. *Nature Human Behaviour*, 2(8), 530–532.**
https://doi.org/10.1038/s41562-018-0360-1
- **Verified:** partial. The record is verified; the counts come from secondary sources (Massey University; written evidence to the UK Parliament).
- **Method & sample:** 22 console and PC games released in 2016–2017 with loot boxes, assessed against Griffiths' five psychological criteria for gambling.
- **Key findings:**
  - **10 of 22** met all five criteria.
  - In 4 of those 10, rewards could be cashed out.
- **Design implication:** never allow trading or cash-out of randomized items. That moves a game toward legal gambling in many places, such as the Netherlands under its 2018 position and the UK Gambling Commission's view.

**[C42] Garea, S. S., Drummond, A., Sauer, J. D., Hall, L. C., & Williams, M. N. (2021). Meta-analysis of the relationship between problem gambling, excessive gaming and loot box spending. *International Gambling Studies*, 21, 460–479.**
https://doi.org/10.1080/14459795.2021.1914705
Corroborated by: Spicer, S. G., Nicklin, L. L., Uther, M., Lloyd, J., Lloyd, H., & Close, J. (2022). Loot boxes, problem gambling and problem video gaming: A systematic review and meta-synthesis. *New Media & Society*, 24, 1001–1022. https://doi.org/10.1177/14614448211027175
- **Verified:** yes (both abstracts).
- **Key findings:**
  - Loot-box spending and problem gambling: **r = 0.26** across 15 studies (0.37 after trim-and-fill correction).
  - Loot-box spending and excessive gaming: r = 0.25 across 7 studies.
  - Spicer et al.: 12 of 13 publications found a positive link with problem gambling (mean r = .27); the link with problem gaming was r = .40 (6 surveys).
- **Design implication:** the gambling association is small but replicated. Treat randomized monetization as a regulated, higher-risk feature.

**[C43] Zendle, D., Meyer, R., Cairns, P., Waters, S., & Ballou, N. (2020). The prevalence of loot boxes in mobile and desktop games. *Addiction*, 115(9), 1768–1772.**
https://doi.org/10.1111/add.14973
- **Verified:** yes (PubMed abstract).
- **Method & sample:** the top-100 grossing games on Google Play and iPhone, and the top 50 on Steam.
- **Key findings:**
  - Loot boxes appeared in 58.0% of top Google Play games, 59.0% of top iPhone games and 36.0% of top Steam games.
  - **93.1% and 94.9%** of the mobile games with loot boxes were rated suitable for ages 12+.
- **Design implication:** mobile loot boxes routinely reach children. Treat age assurance and default settings for minors as a core requirement.

**[C44] Zendle, D., Meyer, R., & Ballou, N. (2020). The changing face of desktop video game monetisation: An exploration of exposure to loot boxes, pay to win, and cosmetic microtransactions in the most-played Steam games of 2010–2019. *PLOS ONE*, 15, e0232780.**
https://doi.org/10.1371/journal.pone.0232780
- **Verified:** yes (abstract).
- **Method & sample:** play histories of the 463 most-played Steam games, 2010–2019.
- **Key findings:**
  - By April 2019, 71.2% of play was in games with loot boxes and **85.89%** in games with cosmetic microtransactions.
  - Pay-to-win exposure reached only **17.3%** by November 2015, then stopped growing.
- **Design implication:** the market selected cosmetics and randomized cosmetics over pay-to-win on PC. This is a strategic signal for a fair mobile design aimed at global audiences.

**[C45] Freeman, G., Wu, K., Nower, N., & Wohn, D. Y. (2022). Pay to win or pay to cheat: How players of competitive online games perceive fairness of in-game purchases. *Proceedings of the ACM on Human-Computer Interaction*, 6 (CHI PLAY), 1–24.**
https://doi.org/10.1145/3549510
- **Verified:** yes (abstract).
- **Method & sample:** 2,685 Reddit posts from five subreddits for competitive sports and card games.
- **Key findings:**
  - Players' ethical judgments of purchases are diverse.
  - There is tension between payers and non-payers over fairness, and paying for competitive advantage can be framed as "cheating".
- **Design implication:** in PvP modes, any purchasable advantage is likely to be perceived as unfair. Keep ranked play purchase-neutral.

### 7. Regulation-compliance research (probability disclosure, labels, pity)

**[C46] Xiao, L. Y., Henderson, L. L., Yang, Y., & Newall, P. W. S. (2024; online 2021). Gaming the system: Suboptimal compliance with loot box probability disclosure regulations in China. *Behavioural Public Policy*, 8(3), 590–616.**
https://doi.org/10.1017/bpp.2021.23
- **Verified:** yes (full text).
- **Method & sample:** the 100 highest-grossing iPhone games in mainland China.
- **Key findings:**
  - **91/100** contained loot boxes, including 90.5% of games rated 12+.
  - 4.4% did not disclose probabilities at all.
  - Only **5.5%** used the most prominent format: probabilities shown automatically on the purchase page.
  - Legal context:
    - China's legal disclosure requirement has applied since May 2017 under the 2016 Ministry of Culture notice;
    - Apple has required odds disclosure since Dec 2017 but enforces it weakly.
- **Design implication:** being *technically* compliant is not enough. Show odds prominently on the purchase screen by default.

**[C47] Xiao, L. Y. (2023). Breaking ban: Belgium's ineffective gambling law regulation of video game loot boxes. *Collabra: Psychology*, 9(1), 57641.**
https://doi.org/10.1525/collabra.57641
- **Verified:** yes (abstract; preregistered Stage 2 report).
- **Method & sample:** the 100 highest-grossing iPhone games in Belgium in 2022.
- **Key findings:**
  - **82.0%** still monetized through randomized purchases despite the 2018 "ban", including 80.2% of games rated 12+.
  - The ban is not enforced, and technical geo-blocks were easy to get around.
- **Design implication:** legal risk in Belgium remains: criminal law theoretically applies. A responsible operator should disable paid randomized purchases there.

**[C48] Xiao, L. Y., & Park, S. (2025). Better than industry self-regulation: Compliance of mobile games with newly adopted and actively enforced loot box probability disclosure law in South Korea. *Acta Psychologica*, 260, 105490.**
https://doi.org/10.1016/j.actpsy.2025.105490
- **Verified:** yes (full text via PMC12583229).
- **Method & sample:** the 100 highest-grossing iPhone games in Korea, coded right after the law took effect.
- **Key findings:**
  - **90%** had paid "capsule-type" probability items.
  - **84.4%** disclosed probabilities, against 64.0% in the UK, 34.9% in the Netherlands and about 96% in China.
  - Compliance with specific requirements:
    - only 71.1% of disclosures gave item-level probabilities;
    - 47.8% said whether the item was permanent or time-limited;
    - only 25.5% of ceiling ("pity") disclosures met the detail required by the official guidance;
    - only 40.8% were reasonably prominent.
  - Enforcement in the first 100 days:
    - the Game Rating and Administration Committee (GRAC) monitored 1,255 cases and requested 266 corrections (about 60% for overseas games);
    - complaints were 49% alleged manipulation, 37% non-disclosure and 14% other, such as not disclosing loot boxes in ads.
  - The KFTC fined Nexon **₩11.6bn** (Jan 2024) for misleading MapleStory probabilities.
- **Design implication:** this is the compliance spec for the home market (see R1–R4). Disclose item-level odds, ceiling rules, permanence and ad disclosure. Make all of it prominent.

**[C49] Xiao, L. Y., Henderson, L. L., & Newall, P. W. S. (2023). What are the odds? Poor compliance with UK loot box probability disclosure industry self-regulation. *PLOS ONE*, 18, e0286681.**
https://doi.org/10.1371/journal.pone.0286681
- **Verified:** yes (abstract).
- **Method & sample:** the top-100 grossing UK iPhone games in mid-2021.
- **Key findings:**
  - Loot-box prevalence was 77%.
  - Disclosure compliance was **64.0%**, against 95.6% under Chinese law.
  - Only 1 of 75 games (1.3%) showed probabilities automatically on the purchase page.
  - 21.3% disclosed on their website, against 72.5% in China.
- **Design implication:** Apple and Google odds rules are under-enforced. Do not benchmark against market practice; benchmark against Korean law, which is stricter.

**[C50] Xiao, L. Y. (2023). Beneath the label: Unsatisfactory compliance with ESRB, PEGI and IARC industry self-regulation requiring loot box presence warning labels by video game companies. *Royal Society Open Science*, 10, 230270.**
https://doi.org/10.1098/rsos.230270
- **Verified:** yes (abstract).
- **Key findings:**
  - **71.0%** of popular Google Play games with loot boxes lacked the IARC label "In-Game Purchases (Includes Random Items)".
  - IARC only requires the label for games rated after February 2022.
  - The Apple App Store does not allow loot-box presence to be declared.
- **Design implication:** label loot boxes voluntarily on every storefront and in ads. Korea requires disclosure in advertising [R1].

**[C51] Xiao, L. Y., Fraser, T. C., & Newall, P. W. S. (2023; online 2022). Opening Pandora's loot box: Weak links between gambling and loot box expenditure in China, and player opinions on probability disclosures and pity-timers. *Journal of Gambling Studies*, 39, 645–668.**
https://doi.org/10.1007/s10899-022-10148-0
- **Verified:** yes (abstract).
- **Method & sample:** a preregistered survey of 879 players in mainland China.
- **Key findings:**
  - Correlations were weak, and the Western link with problem gambling did not replicate.
  - 84.6% of loot-box buyers had seen probability disclosures, but only **19.3%** of them spent less as a result.
  - **86.9%** considered pity-timers appropriate.
- **Design implication:**
  - Disclosure alone barely changes spending, so add **structural** protections: hard pity/ceiling, duplicate protection and caps.
  - Players welcome pity systems, so they are fair *and* popular.

### 8. Pricing psychology and loot-box economics

**[C52] Toccafondi, N., Di Paolo, R., & Di Guida, S. (2025). Virtual currencies in online gaming increase the willingness to pay for loot boxes: An experimental analysis. *Experimental Economics*, 28(6), 1262–1280.**
https://doi.org/10.1017/eec.2026.10049
- **Verified:** yes (full text). It is cited by the EU CPC Joint Statement [R7].
- **Method & sample:** an incentivized randomized trial with N=753 UK participants, measuring willingness to pay (WTP) for loot boxes framed as risky or ambiguous lotteries.
- **Key findings:**
  - With a 1:1 virtual currency, WTP was about **4% higher** than when prices were in GBP.
  - Money illusion: a high-nominal currency (100:1) lowered WTP by about 4% compared with 1:1.
  - Non-intuitive exchange rates had no additional effect.
- **Design implication:** virtual currency measurably distorts spending. Show real-money prices next to every currency price [R7, R12].

**[C53] Hsee, C. K., Yu, F., Zhang, J., & Zhang, Y. (2003). Medium maximization. *Journal of Consumer Research*, 30(1), 1–14.**
https://doi.org/10.1086/374702
- **Verified:** yes (abstract).
- **Key findings:** an intermediate token (points or money) changes choices. It creates illusions of advantage, of certainty, and of a linear return on effort.
- **Design implication:** premium currencies, shards and "points to the next pull" are media in this sense. Keep conversions simple and make the final outcome explicit.

**[C54] Ariely, D., Loewenstein, G., & Prelec, D. (2003). "Coherent arbitrariness": Stable demand curves without stable preferences. *Quarterly Journal of Economics*, 118(1), 73–106.**
https://doi.org/10.1162/00335530360535153
- **Verified:** yes (abstract via RePEc).
- **Key findings:** across six experiments, arbitrary anchors (such as the digits of a social-security number) strongly shaped valuations. The effect did not fade with experience or market forces.
- **Design implication:**
  - Price anchors such as "was ₩99,000" strongly shape willingness to pay.
  - Use them only with *genuine* reference prices. Fake reference prices are misleading under consumer law.

**[C55] Huber, J., Payne, J. W., & Puto, C. (1982). Adding asymmetrically dominated alternatives: Violations of regularity and the similarity hypothesis. *Journal of Consumer Research*, 9(1), 90–98.**
https://doi.org/10.1086/208899
- **Verified:** partial (bibliographic record only; findings are the canonical result stated in the title).
- **Key findings:** adding a "decoy" option that is clearly worse than a target option can *increase* the target's choice share (the attraction or decoy effect).
- **Design implication:**
  - Tiered bundle ladders (small, medium, "best value") exploit this effect.
  - Make each tier honestly valuable, and avoid deliberately dominated "dummy" packs.
  - Avoid mismatched currency bundles that leave leftover currency [R7, Principle 3].

**[C56] Chen, N., Elmachtoub, A. N., Hamilton, M. L., & Lei, X. (2021). Loot box pricing and design. *Management Science*, 67(8), 4809–4825.**
https://doi.org/10.1287/mnsc.2020.3748
- **Verified:** yes (author final version).
- **Method & sample:** analytical revenue optimization.
- **Key findings:**
  - A "unique" box, which never gives duplicates, is asymptotically revenue-optimal. A traditional box that allows duplicates earns only **36.7%** of optimal revenue.
  - The unique box leaves almost zero consumer surplus.
  - Allocating items uniformly is near-optimal.
  - **Misrepresenting probabilities can raise revenue significantly**, so strict regulation is needed.
  - Letting players salvage unwanted items raises consumer surplus by at most 1.4%.
- **Design implication:** duplicate protection is good for revenue. Misrepresenting odds is both profitable and illegal in Korea (3× damages [R2]). Audit RNG and odds.

---

## Regulatory checklist (Korea + global, 2026)

### Primary regulatory sources (R-IDs)

| ID | Jurisdiction / instrument | Effective | What it requires | Source (verified) |
|---|---|---|---|---|
| **R1** | **Korea:** Game Industry Promotion Act (게임산업진흥에 관한 법률), Art. 33(2), amended 21 Mar 2023. Enforcement Decree Art. 19-2 and Annex 3-2 (Presidential Decree No. 34114, 9 Jan 2024). MCST Explanatory Note (확률형 아이템 확률 정보공개 관련 해설서; 19 Feb 2024, English 15 Mar 2024) | **22 Mar 2024** | See checklist A below | Xiao & Park 2025 [C48], full text |
| **R2** | **Korea:** GIPA Art. 33-2 (damages for violating probability-disclosure duties). Promulgated 31 Jan 2025 | **1 Aug 2025** | See checklist A below | Lawtimes / 화우 newsletter: https://www.lawtimes.co.kr/news/articleView.html?idxno=210245 ; ETNews 6 Aug 2025: https://www.etnews.com/20250806000278 |
| **R3** | **Korea:** GIPA Art. 31-2 and Enforcement Decree Art. 18-3 (domestic agent for foreign game companies) | **23 Oct 2025** | Applies to foreign firms with ≥₩1 trillion prior-year revenue, or a game averaging ≥100,000 domestic users a month over the prior 3 months, or designated by MCST. The agent carries ratings, probability-disclosure and user-protection duties. Fine up to ₩20M | 화우 newsletter (8 May 2025): https://www.hwawoo.com/kor/insights/newsletter/12888 |
| **R4** | **Korea:** Fair Trade Commission enforcement under the E-Commerce (Consumer Protection) Act | Ongoing | See checklist A below | Nexon: [C48]. Gravity/Wemade: ETNews 21 Apr 2025, https://www.etnews.com/20250421000458 |
| **R5** | **Japan:** Consumer Affairs Agency guidance on kompu gacha (「コンプガチャ」と景品表示法の景品規制について, 18 May 2012; revised 1 Apr 2016), plus the revised operational standard on lottery premiums (懸賞景品 運用基準, 28 Jun 2012) | **1 Jul 2012** | "Card-matching" (カード合わせ) premiums are banned under the Act against Unjustifiable Premiums and Misleading Representations. Paid gacha that rewards completing a set ("complete gacha") is illegal | https://www.caa.go.jp/policies/policy/representation/fair_labeling/guideline/pdf/120518premiums_1.pdf ; https://www.caa.go.jp/policies/policy/representation/fair_labeling/guideline/pdf/120702premiums_1.pdf |
| **R6** | **China:** Ministry of Culture Notice 文市发〔2016〕32号. NPPA Notice on preventing juvenile online-gaming addiction (published 25 Oct 2019) | **1 May 2017** (disclosure); **1 Nov 2019** (juvenile notice) | Publish the draw probabilities of randomized items, with discretion over the format. The 2019 notice adds real-name and minors' play and spending limits; the exact limits were not verified here | [C46] full text and bibliography (partial for the 2019 details) |
| **R7** | **EU/EEA:** CPC Network *Key Principles on In-game Virtual Currencies* (21 Mar 2025). CPC *Joint Statement on Stronger Consumer Protection in Video Games* (30 Sep 2026), launching 11 coordinated actions against 10 companies over Diablo Immortal, Call of Duty Mobile, Hunt: Showdown 1896, Forge of Empires, Candy Crush Saga, Minecraft, Mech Arena, Gardenscapes, Valorant, Clash of Clans and For Honor | Principles: 21 Mar 2025. Actions: 30 Sep 2026 | See checklist C below | https://commission.europa.eu/document/download/8af13e88-6540-436c-b137-9853e7fe866a_en?filename=Key%20principles%20on%20in-game%20virtual%20currencies.pdf ; Joint Statement: https://commission.europa.eu/document/download/75ff33d4-77a6-4f14-916a-766a8c6c281c_en ; overview: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en |
| **R8** | **UK:** DCMS response to the loot-box call for evidence (Jul 2022). DCMS "update on improvements to industry-led protections" and the Ukie industry guidance on paid loot boxes | **18 Jul 2023** (guidance) | Non-statutory. Use technical controls so under-18s cannot acquire paid loot boxes without a parent's consent or knowledge. Give all players spending controls and transparent information (including probability disclosure). Improve research access | https://www.gov.uk/guidance/loot-boxes-in-video-games-update-on-improvements-to-industry-led-protections |
| **R9** | **Belgium:** Gaming Commission opinion (2018) that paid loot boxes are gambling under the Gaming Act of 7 May 1999 | Since Apr 2018 | Paid loot boxes without a gambling licence carry criminal-law exposure. In practice, enforcement is negligible (82% non-compliance) | [C47] |
| **R10** | **Netherlands:** Council of State (Raad van State), *EA v Kansspelautoriteit*, March 2022 | Mar 2022 | FIFA Ultimate Team packs were *not* gambling, because the whole game must be assessed. Gambling law is now unlikely to apply. Consumer law (the CPC [R7]) still applies | Xiao & Declerck (2022), OSF, https://doi.org/10.31219/osf.io/pz24d |
| **R11** | **Brazil:** Lei nº 15.211, 17 Sep 2025 ("ECA Digital"), Art. 20. Art. 2(IV) defines a "caixa de recompensa" | **17 Mar 2026** (Art. 41-A, as set by Lei 15.352/2026) | "São vedadas as caixas de recompensa (loot boxes) oferecidas em jogos eletrônicos direcionados a crianças e a adolescentes ou de acesso provável por eles" (loot boxes are banned in games directed at, or likely to be accessed by, children and adolescents), judged by the age rating. Art. 21 requires safeguards for chat in such games | https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm |
| **R12** | **US:** FTC v. Epic Games and FTC/DOJ v. Cognosphere (HoYoverse, *Genshin Impact*) | **19 Dec 2022**; **17 Jan 2025** | See checklist C below | https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations ; https://www.ftc.gov/news-events/news/press-releases/2025/01/genshin-impact-game-developer-will-be-banned-selling-lootboxes-teens-under-16-without-parental |
| **R13** | **Apple App Review Guidelines 3.1.1 / 3.1.2** | Current; odds rule since Dec 2017 per [C46] | 3.1.1: apps with loot boxes or randomized items "must disclose the odds of receiving each type of item to customers prior to purchase". Credits and in-game currencies bought by IAP "may not expire". 3.1.2: an auto-renewing subscription must give ongoing value, last at least 7 days, and work across the user's devices | https://developer.apple.com/app-store/review/guidelines/ |
| **R14** | **Google Play Payments policy** | Current | Randomized items must "clearly disclose the odds of receiving those items in advance of, and in close and timely proximity to, that purchase". Pricing and terms, including subscriptions, must be clear and accurate. Virtual currency may only be used in the game it was bought for | https://support.google.com/googleplay/android-developer/answer/9858738 |
| **R15** | **Australia:** Guidelines for the Classification of Computer Games 2023 | **Sep 2024** | In-game purchases linked to elements of chance (including paid loot boxes) mean a minimum **M** rating. Simulated gambling means a minimum **R18+** | Worland & Tranter (2025), *Griffith J. Law & Human Dignity* 12(2), https://doi.org/10.69970/gjlhd.v12i2.1275 (full text) |
| **R16** | Global overview: Xiao, L. Y. (2024). Loot box state of play 2023: Law, regulation, policy, and enforcement around the world. *Gaming Law Review*, 28(10), 450–483 | — | Covers: disclosure laws (Taiwan, Korea, China); gambling-law enforcement (Belgium, Austria, Finland, Netherlands, France, UK, Australia); EU consumer law (Italy, Netherlands, UK); ratings (Germany, Australia, US); Spain's draft regime; US and Canadian class actions | https://doi.org/10.1089/glr2.2024.0006 (abstract) |

### A. South Korea (home market): must-do list

- [ ] **Scope inventory.** List every paid random mechanic, including those paid *indirectly* with premium currency [R1, C48]:
  - capsule-type items (gacha);
  - **enhancement-type** items (강화);
  - **combination-type** items (합성).
  
  Grey zones to track:
  - GRAC has said monster drops need no disclosure;
  - paid dungeon tickets with random rewards are contested.
- [ ] **Item-level probabilities** for every capsule item, shown on the **purchase screen**. A web page is allowed only if linked from the purchase screen, and web pages must be **text-searchable**, not images [R1, C48].
- [ ] **Ceiling/pity disclosure:** state that a ceiling exists, its conditions, and the full list of items and odds it can award [R1, C48].
- [ ] **Permanence:** state whether each item is permanent or limited by time or quantity [R1].
- [ ] **Advertising:** ads and promotional materials must indicate that the game contains probability items [R1, C48].
- [ ] **Accuracy and audit trail.**
  - Since 1 Aug 2025 [R2]:
    - operators are liable for damages unless they prove they had no intent or negligence;
    - **intentional** violations carry up to **3× damages**.
  - Keep immutable RNG and odds logs and change logs.
  - Never change odds silently. The KFTC sanctioned Gravity partly for undisclosed probability reductions [R4].
- [ ] **Deceptive representation** under the E-Commerce Act [R4]. Past enforcement:
  - Nexon was fined ₩11.6bn (Jan 2024, MapleStory) [C48];
  - Gravity and Wemade received corrective orders and fines (21 Apr 2025):
    - Gravity (*Ragnarok Online*) overstated probabilities by up to about 8× between 2017 and 2024;
    - Wemade (*Night Crows*) overstated them by up to 3× between Dec 2023 and Mar 2024;
    - sanctions were reduced because both companies refunded and compensated players.
- [ ] **Enforcement exposure.**
  - GRAC monitors the top-100 games on each platform plus player complaints [C48].
  - Ignoring a ministerial corrective order is punishable by up to 2 years' imprisonment or a ₩20M fine (Art. 45(11)) [C48].
  - A government damage-relief center now takes complaints and provides legal and litigation support [R2].
- [ ] **Exemption:** companies with average annual revenue under ₩100M are exempt from the loot-box rules [C48]. A launched title will quickly exceed this.
- [ ] **If publishing through a foreign entity:** appoint a domestic agent if the R3 thresholds are met [R3].
- [ ] **Context:**
  - Korea repealed its adult monthly spending cap for PC/online games in 2019 (MCST press release cited in [C46]). No statutory adult cap is assumed here; confirm with counsel.
  - Treat self-imposed caps as a voluntary best practice [C25].
- [ ] Minors' purchases, refunds and withdrawal rights under Korean civil and e-commerce law: **not verified in this review. Obtain Korean counsel sign-off.**

### B. Platforms (all markets)

- [ ] **Odds disclosure** before purchase and close to it [R13, R14]. In-game currency bought by IAP must **not expire** (Apple) [R13].
- [ ] **Subscriptions:**
  - Apple: at least 7-day periods, ongoing value, available across devices [R13].
  - Clear terms and pricing on both stores [R14].
  - **Easy cancellation.** Obscuring cancellation was one of the FTC's Epic findings [R12].
- [ ] **Loot-box presence labels:** declare "In-Game Purchases (Includes Random Items)" via IARC/PEGI/ESRB even where it is not yet required [C50].

### C. Global launch

- [ ] **EU/EEA** [R7]:
  - Under Principles 1–3:
    - show the **real-money price** of every item;
    - do not use **multiple premium currencies or multi-step exchanges**;
    - do not sell **currency bundles that don't match item prices**;
    - let players choose exact amounts.
  - Give pre-contract information (Principle 4).
  - Respect the **14-day withdrawal right**, including for *unused* virtual currency (Principle 5).
  - Use fair terms: no unilateral devaluation of currency, and no account bans without a way to contest them (Principle 6).
  - Protect vulnerable consumers (Principle 7):
    - no direct exhortation of children to buy;
    - parental controls that, **by default, disable real-money spending** in games not limited to adults;
    - avoid business models built on "whales". Regulators say these will be judged by a stricter standard.
  - **Current enforcement:** the CPC is acting against 10 publishers, and its 30 Sep 2026 statement specifically targets:
    - variable reward systems (loot boxes);
    - dark patterns;
    - misleading countdown timers and unfounded scarcity claims.
- [ ] **UK** [R8]: under-18s may buy paid loot boxes only with parental consent (technical controls). Spending controls and transparency.
- [ ] **Brazil** [R11]: from **17 Mar 2026**, no loot boxes in games directed at, or likely to be accessed by, under-18s. A game with a teen or child rating needs a gacha-free Brazilian configuration, or an adult-only rating and audience.
- [ ] **Belgium** [R9, C47]: disable paid randomized purchases. Criminal exposure exists in theory.
- [ ] **Netherlands** [R10]: gambling law is unlikely to apply after 2022, but EU consumer law does [R7].
- [ ] **Japan** [R5]: never use **kompu gacha**, where completing a set of gacha items unlocks a reward.
- [ ] **China** [R6]: disclose probabilities (since 2017), and observe minors' limits if you operate there (licensing is not covered here).
- [ ] **Australia** [R15]: chance-based paid items mean an **M** rating; simulated gambling means **R18+**.
- [ ] **US** [R12]:
  - **Epic, $245M refunds for dark patterns:**
    - confusing purchase buttons;
    - charges triggered by a single press;
    - hidden cancel and refund options;
    - **locking the accounts** of players who disputed charges.
  - **Cognosphere/Genshin, $20M:** deception about the odds of "five-star" prizes and the real cost of loot boxes, through multi-tier currency exchanges at unusual rates. The order requires:
    - banning loot-box sales to **under-16s without parental consent**;
    - disclosing odds and **currency exchange rates**;
    - offering **direct real-money purchase** options.
- [ ] **Never allow cash-out or trading** of randomized items. That moves the product toward gambling law in many places [C41, R9].

---

## Top 12 ethical, high-revenue monetization principles

1. **Retention first: sell progress, not relief from friction you built.**
   - The causal evidence:
     - easing difficulty for players at risk of churning raised engagement by about 20% and raised revenue, about 80% of it IAP [C17];
     - personalized difficulty could raise revenue by about 71% [C18];
     - quality updates bring up to 3× better survival in the top-grossing chart [C14].
   - The tempting "demand through inconvenience" lever lowers enjoyment and retention [C11].
   - Track D1, D7 and D30 retention with the same weight as ARPDAU. Treat any monetization change that lowers retention as a defect.

2. **Monetize convenience, expression and status, not victory.**
   - The spending drivers are unobstructed play, social interaction and value deals [C3], plus self-expression, exclusivity and collecting [C1, C5, C6, C4].
   - Buying functional advantages costs buyers their peers' respect [C9], and players read pay-to-win as unfair or as cheating [C37, C38, C45].
   - PC markets shifted to cosmetics, with pay-to-win stalling at about 17% [C44].
   - Keep ranked PvP purchase-neutral. Make any power item reachable through normal play.

3. **Make a season/battle pass the core recurring product, designed against FOMO.**
   - Benchmarks [C30, C31, C34]:
     - about two-thirds of top games run a pass;
     - basic tier $5–15, offering about 10–20× value;
     - seasons of about one month.
   - Players like passes but resent rewards that cannot be reached without paying [C29].
   - Keep randomness and betting out of the pass [C28]. If any remains, it falls under Korean disclosure rules [R1].
   - Use generous free tracks and catch-up mechanics.
   - No fake countdowns or scarcity [R7]. Bring past-season items back through a shop [C31].

4. **Add a transparent subscription (monthly card/membership) as the value anchor for low and mid spenders.**
   - Industry cases show strong value-per-dollar and repeat-purchase dynamics [C33].
   - Theory says to introduce it after early growth and satisfy social comparison with cosmetic status [C32].
   - Follow Apple's rules (at least 7 days, ongoing value) [R13].
   - Cancellation in one tap with renewal reminders, as obscured cancellation is an FTC dark pattern [R12].
   - Benefits should be QoL and cosmetic, never stacked PvP power.

5. **Price in real money, with at most one currency, sold in exact amounts.**
   - Virtual currency raises willingness to pay by about 4% [C52], and media tokens distort choices [C53].
   - The EU and FTC now treat multi-tier currencies, mismatched bundles and hidden exchange rates as unfair or deceptive [R7, R12].
   - Show the ₩ or $ price next to every currency price. Leave no leftover currency.

6. **Use honest promotions and price architecture.**
   - Randomized promotions raised conversion and revenue with no harmful side-effects [C16].
   - Anchors and decoys are powerful [C54, C55]. Use only genuine reference prices and give every bundle tier real value.
   - No resetting countdowns or false "last chance" claims [R7, C24].

7. **If you use gacha, make it "fair gacha".**
   - Item-level odds on the purchase screen.
   - **Hard pity/ceiling** with full disclosure.
   - Duplicate protection: unique boxes are also revenue-optimal [C56].
   - State whether items are permanent or limited.
   - **No kompu gacha** [R5].
   - Audited RNG and odds logs.
   - Rationale:
     - disclosure alone changes little (only 19.3% of players who saw odds spent less) [C51];
     - misrepresentation pays, which is why regulators punish it [C56, R2, R4];
     - Korea's 3× damages and reversed burden of proof make sloppy odds an existential risk [R1, R2, C48].

8. **Protect minors by default.**
   - About 93–95% of top-grossing mobile games with loot boxes are rated 12+ [C43].
   - Adolescents with gaming disorder pay more [C26]. Even developers see children and F2P as the problem area [C10].
   - Rules to meet:
     - UK: parental consent for under-18s [R8];
     - US (Genshin order): under-16 consent [R12];
     - EU: spending disabled by default in non-adult games [R7];
     - Brazil: loot-box ban where minors are likely, from 17 Mar 2026 [R11];
     - Australia: M rating [R15].
   - Implement age assurance, parental controls, and no randomized purchases for minors.

9. **Care for the heaviest spenders, and design for a broad base rather than a hyper-Pareto economy.**
   - Revenue is highly concentrated:
     - the top 1% give about 38% of revenue in hyper-Pareto games, and up to about $66k per head [C22];
     - the top 5% give 50% of loot-box revenue, linked to problem gambling rather than income [C23];
     - almost a third of them are problem gamblers [C24];
     - 1.5% of players give 90% of revenue in one gacha game [C25].
   - The EU will judge whale-reliant business models by a stricter standard [R7].
   - Provide:
     - spend dashboards;
     - self-set and default monthly caps (Amano & Simonov's welfare evidence favours caps) [C25];
     - cooling-off periods;
     - human outreach.
   - Use lifetime-value prediction [C19, C21] for *care*, not targeting.

10. **Personalize the experience, never the price or the odds.**
    - Personalizing difficulty and content increases engagement and revenue [C17, C18].
    - Patents that use behavioural tracking and price manipulation are flagged as exploitative [C36].
    - Payment-based matchmaking is profitable in theory [C32] but is pay-to-win in practice [C45].
    - Publish a "no personalized prices or odds" commitment.

11. **Let social value multiply spending without social coercion.**
    - Social interaction and social value predict spending [C3, C11, C4]. In Korea, the perceived number of friends and users drives gacha purchase intention [C12].
    - Raw social activity alone does not convert players [C20].
    - Use guild and co-op cosmetics, capped gifting and visible-but-optional status.
    - Do not gate progress behind invites or social obligations (a "social pyramid" dark pattern) [C39].

12. **Build transparency and compliance into the design, and use it as a competitive advantage.**
    - Players punish unfairness and opacity in reviews [C38, C37].
    - Korea's regulator actively monitors and acts on complaints [C48], and the EU is now enforcing [R7].
    - Practical steps:
      - set up a monetization ethics review using the C37 taxonomy and the C39 dark-pattern audit;
      - publish odds and price change logs;
      - provide refund and withdrawal flows (EU 14-day withdrawal for unused currency [R7]);
      - never lock the accounts of players who dispute charges [R12];
      - keep a continuous live-ops cadence [C14].

---

## Evidence gaps and caveats

- **Subscriptions:** I found no peer-reviewed causal study of how monthly cards, VIP or subscriptions affect retention or LTV in mobile games. The evidence is industry case data [C33] plus theory [C32]. Run your own A/B tests, with long holdouts.
- **Battle passes:** the only empirical player study is a preprint [C29]. Revenue lifts are correlational [C30, C31].
- **Pay-to-win and non-payer retention:** the evidence is perceptual (status, fairness) [C9, C37, C38, C45] and from market trends [C44]. I found no peer-reviewed causal estimate of how much pay-to-win reduces non-payers' retention.
- **Korean behavioural evidence** is thin. [C12] is a survey and [C48] is compliance research. Korea-specific player-spending studies with telemetry are needed.
- **Non-peer-reviewed sources** (WP, preprint, industry) are labelled. Amano & Simonov [C25] is a working paper. The GambleAware figures [C24] are corroborated by the peer-reviewed [C23].
- **Regulation is moving.** Re-check the EU CPC actions (opened 30 Sep 2026), Brazil's implementing rules, and Korea's enforcement decrees before launch. Official Korean statute text (law.go.kr) was not machine-readable here; the Korean provisions were verified through [C48] and Korean law-firm and news sources.
