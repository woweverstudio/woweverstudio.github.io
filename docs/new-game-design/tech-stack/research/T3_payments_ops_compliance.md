# T3 — Payments, dev-ops tooling & compliance for 「도깨비 방범대」 (as of 2026-10-01)

**Labels.** V# = verified (official or primary page read). S# = secondary (trade press, law firm or competitor blog). U = unverified. Every tag maps to a URL and date in the source list at the end; all pages were accessed 2026-10-01.

## 0. Recommendation summary

1. **Client: Unity IAP 5.4.x.** It uses StoreKit 2 by default and Play Billing Library (PBL) 9.0.0 [V12, V13]. That meets Google's PBL 8+ rule (2026-08-31, extension to 2026-11-01) [V1]. It also avoids StoreKit 1, deprecated since iOS 18 [V11, V14].
2. **Server-authoritative entitlements on your own backend.** You need one anyway for re-simulation, spend caps and refunds without account locks.
   - Build on Apple's free App Store Server Library plus Notifications V2, and Google's Play Developer API plus real-time notifications (RTDN) [V3, V5–V10].
   - Use RevenueCat only if you have no backend capacity. It is free up to $2.5k of monthly tracked revenue (MTR), then 1%, and MTR includes one-time purchases [V15].
3. **Korea: store billing only at launch.**
   - Google alternative billing saves 4% now, and the 5% billing fee from 2026-12-31, minus your payment processor's fee. It adds PCI-DSS, 24-hour reporting and invoicing [V20–V23].
   - Apple's Korea entitlement costs 26% and needs a Korea-only binary; the Small Business rate is 15% [V24, V25].
   - Make Korea the Apple base storefront, and plan to file Korean VAT yourself [V26, V27].
4. **Web shop: defer to the global phase.** The trigger is meaningful US iOS spend: link-outs pay 0% to Apple today, but the case is still in court [V30–V32, S3]. Then use Unity IAP D2C or Unity Webshops plus a merchant of record [V36, V37].
5. **Minors.**
   - Build one age-signal layer over Apple's Declared Age Range and Google's Age Signals.
   - Default minors to restricted chat and a spend cap that is on. Handle consent revocation.
   - Texas law is in force; Utah, Louisiana, Alabama and California follow in 2027 [V41–V48, V50–V52, S6].
   - Korea: store self-rating, guardian consent for under-14s, and minors' purchases can be rescinded [V53–V58].
6. **Integrity:** server re-simulation stays the authority. Use Play Integrity and App Attest as risk signals [V63–V67].
7. **Tooling (estimate: about $0–150/month at soft launch):** GameCI on GitHub Actions plus fastlane; Crashlytics; Localazy or Crowdin; Zendesk; a Korean keyword filter with Hive for escalation [V68–V88].

## 1. Store billing

**Google Play**
- **PBL deadline:** PBL 7 is accepted for new apps and updates only until 2026-08-31 (extension to 2026-11-01). PBL 8's own deadline is 2027-08-31 [V1].
- **Library versions:** latest 9.1.0 (2026-06-18). 9.0.0 added price-increase prompts; 8.0 added offers on one-time products and removed `queryPurchaseHistory`; 8.1 added suspended subscriptions [V2].
- **Subscriptions:** one subscription holds several base plans and offers (introductory, upgrade, installment). The server API is `purchases.subscriptionsv2.get` [V3]; one-time products use `purchases.productsv2` [V5].
- **Acknowledgement:** acknowledge every purchase within 3 days, or Google refunds it [V4].
- **Refund notifications:** RTDN sends `voidedPurchaseNotification`, including partial refunds. The new `pendingRefundReviewNotification` covers chargebacks; answer it through the ReviewRefund API within 24 hours [V5].
- **Target API:** new apps and updates must target API 36 from 2026-08-31 [V18].

**Apple**
- **Receipts and server API:** `verifyReceipt` is deprecated [V9]. The App Store Server API provides Get Transaction Info/History, Get All Subscription Statuses, Get Refund History and Get Notification History (180 days) [V6].
- **Notification types (V2):** `ONE_TIME_CHARGE` for consumables, plus `REFUND`, `REFUND_DECLINED`, `REFUND_REVERSED` and `REVOKE` [V8]. `RESCIND_CONSENT` means a parent revoked consent [V40].
- **Consumption requests:**
  - Apple sends `CONSUMPTION_REQUEST` for every product type.
  - Answer within 12 hours via `PUT /inApps/v2/transactions/consumption/{transactionId}`, and only with the customer's consent.
  - The answer carries `consumptionPercentage`, `deliveryStatus` and `refundPreference` (GRANT_FULL, GRANT_PRORATED or DECLINE) [V7].
- **App Store Server Library:** Apple's official library (Swift, Java, Python, Node) verifies the signed JWS data from StoreKit 2 and notifications [V10].
- **Build requirement:** since 2026-04-28, builds must use Xcode 26 and the iOS 26 SDK [V19].

**Unity IAP**
- Latest is 5.4.3 (2026-09-04) [V12].
- StoreKit 2 since 5.0.0-pre.3 (2024-12-16). 5.0.0 went GA on 2025-08-07. 5.1.0 falls back to StoreKit 1 below iOS 15 [V13].
- 5.4.0 (2026-06-29) brings PBL 9.0.0, D2C payment providers and Unity Webshops, and needs Editor 2022.3 or later [V13].

**RevenueCat**
- A backend plus wrapper over StoreKit and Play Billing; it does not process payments [V15].
- $0 up to $2.5k MTR, then 1% of gross revenue (before the store's cut) [V15].
- Unity SDK 9.12.0 via OpenUPM (2026-10-01) [V17]. Version 8+ coexists with Unity IAP 5 [V16].

**Recommended server flow**
1. The client sends the StoreKit 2 JWS or Play purchase token; the server verifies it [V10, V3].
2. The server writes an idempotent ledger row keyed by transaction ID, grants the item, then acknowledges or consumes it.
3. On a refund, claw back unspent units and expire the entitlement, but never ban. Answer consumption requests and chargeback reviews.
4. Spend display and caps read the same ledger (later shared with any web shop); check the cap before opening a purchase sheet.

## 2. Korea-specific payments

**Google Play today**
- Korea is still on the old schedule [V20]:
  - 15% on the first $1M if you are enrolled in the 15% tier, 30% above that.
  - Subscriptions: 15%.
- Alternative billing: the fee is "reduced by 4%" [V20, V22].
- It requires Google's alternative-billing APIs, PCI-DSS compliance and reporting each transaction within 24 hours. Prices may differ per system; outlinks must open in an embedded webview [V22].

**Google Play from 2026-12-31** (Korea rollout of the model announced 2026-03-04)
- 10% service fee on the first $1M and on auto-renewing subscriptions, whatever the billing method.
- Above $1M: 20% for new installs; 25% for existing installs (20% via web links).
- A 5% billing fee applies only when you use Play billing [V21, V23].

**Apple**
- Korea entitlement: 26% of the price including VAT [V24].
- Requirements: a separate Korea-only binary on a bundle ID that has never been published, one payment provider, a monthly report, and payment within 45 days [V24].
- Small Business Program: 15% [V25].

**Regulator**
- 방미통위 (the communications regulator) heard Google and Apple in August 2026. Fines are still pending [S1].

**Is alternative billing worth it?**
- No, not now. The gain is at most 4–5 points minus your payment processor's fee.
- Korean card processing rates are unverified (U). For reference, Stripe US is 2.9% + 30¢ [V37].
- On iOS, the alternative costs more than store billing.

**VAT and pricing**
- **Google:** Korea-based developers charge and remit VAT themselves. Google adds 10% VAT to its fee if you have not filed a business registration number (BRN). Prices are tax-inclusive [V26].
- **Apple:** collects Korean tax only for non-resident developers. It levies VAT on its own commission, and a BRN is mandatory [V27].
- **Apple price points:** 800, plus 100 on request. Apple never reprices the base storefront [V28].
- **Trials and offers:** Korea requires renewed consent within 30 days when a trial or offer converts to full price. Apple runs the consent sheet [V29].
- **Hidden renewals:** the amended e-commerce act (in force 2025-02-14) bans hidden renewals and blocking cancellation [S2]. Your one-tap cancel via the store's management screen fits.

## 3. Web shop / D2C

**Apple in the US**
- US-storefront apps may link to outside payment without an entitlement [V30].
- **Court status:**
  - The Supreme Court granted review on 2026-06-30, limited to Question 1: contempt based on the "spirit" of an injunction.
  - Justice Kagan denied Apple's stay application on 2026-08-13.
  - Epic's brief is due 2026-11-13 [V31, V32].
  - The Ninth Circuit ruled on 2025-12-11, and rehearing was denied on 2026-03-30 [V31].
- **What the Ninth Circuit decided:** it upheld the contempt finding and told the district court to consider allowing "some commission, though not the full 27% fee" [S13].
- **Current terms:** Apple charges 0% on link-outs. In August 2026 it proposed 15%, 10% for partner programs, and 5% for small businesses [S3, S4].

**Google in the US**
- Google announced its new model on 2026-03-04 and settled its disputes with Epic worldwide [V33].
- **Fees since 2026-06-30:** 10% on the first $1M, for both Play billing (plus the 5% billing fee) and web links; 20% above that for new installs [V21, V34].
- US enrollment goes through Google's existing alternative-billing and external-content-links programs [V35].
- **Requirements:** a user choice screen, PCI-DSS, refunds, an order-history link, and parental controls via the APIs [V35].

**Providers**
- **Unity Webshops:** no Unity fee; Stripe or Coda processing fees apply [V36].
- **Stripe:** 2.9% + 30¢; its merchant-of-record service (Managed Payments) adds 3.5% [V37].
- **Stash:** its calculator assumes a 5% flat fee and about 10% all-in [V38].
- **Xsolla:** about 5% [S5].
- **Appcharge and Aghanim:** pricing by quote only (U).

**When to add a web shop**
- Not for the Korea soft launch.
- At global launch, once US iOS payers matter: 0% instead of 15%, minus about 6.4% + 30¢ for a merchant of record, nets about 7 points on a $19.99 item but only about 3 on $4.99 (own calculation).
- Keep store purchases as the default for minors.
- Apply the $19.99 cap and spend caps across both channels.

## 4. Age assurance & minors

**Apple Declared Age Range (iOS 26+)**
- You pass up to 3 age gates; it returns an age range at least 2 years wide.
- It also returns how the age was declared and whether parental controls are on.
- It flags users in regulated regions.
- Available worldwide [V39, V40].
- **Texas:** categories are <13, 13–15, 16–17 and 18+ [V41]. They apply to new Apple accounts from 2026-06-04 [V42].
- **Utah and Louisiana:** Apple announced 2026 dates in February 2026 [V43], but both laws have since been pushed to 2027 [V50, V51].

**Google Play Age Signals (beta, library 0.0.4)**
- Returns a sharing status (SHARED, NOT_SHARED or VERIFICATION_REQUIRED), an age range (`ageLower`/`ageUpper`), its source, and the approval date for significant app changes [V44–V46].
- **Where it works:** Brazil since 2026-03-17, and Texas accounts created after 2026-05-28 [V44].
- **Restrictions:** the data may not be used for ads or analytics [V44].
- **SKU ratings:** in-app products can carry their own age ratings [V47].

**US state laws**

| Law | Status |
|---|---|
| Texas SB 2420 | Injunction 2025-12-23 → stayed by the Fifth Circuit → Supreme Court refused to lift the stay 2026-07-06; in force [V48, S7] |
| Utah HB 498 | Duties and private suits ($1,000 per violation) from 2027-05-06; safe harbor if you rely on store age data [V50] |
| Louisiana Act 185 | Effective 2027-07-01; fines up to $10,000 [V51] |
| Alabama HB 161 | Effective 2027-01-01 [S6] |
| California AB 1043 | Effective 2027-01-01; request the age signal at launch; $2,500–$7,500 per child [V52] |

**Korea**
- **Rating:**
  - Store games are rated under the self-rating system of the Game Industry Promotion Act (Arts. 21-2 and 21-3), which excludes adults-only titles [V53]. Google uses IARC [V54].
  - Apple's Korean ratings are All/12+/15+/19+; chat on its own stays "All" [V55].
  - From October 2026, infrequent profanity moves to 12+, and a GRAC rating number can override Apple's rating [V56].
- **Children's data:** PIPA Art. 22-2 requires legal-guardian consent for under-14s [V57].
- **Minors' purchases:** they can be rescinded without guardian consent (Civil Act Art. 5; KFTC standard terms) [V58, V59].
- **Spend caps:** no statutory cap for mobile games; the ₩70,000 limit applies to PC games [S8].
- **Random rewards:**
  - Odds disclosure covers items paid for directly or indirectly. Fully free items are exempt [V60], so keep reward boxes out of paid packs and passes.
  - Since 2025-08-01, wilful violations carry up to 3× damages [S9].

**EU**
- **Consumer-protection principles:** show real-money prices, don't urge children to buy, and default parental controls to block spending [V61].
- **GDPR Art. 8:** consent age is 16; member states may lower it to 13 [S10].
- **EU KIDS Act proposal (2026-09-17), Art. 15:** no "loss of benefits" for skipping play, under-13 access only via guardian tools, and safeguards against off-platform contact [V62]. Review login streaks before an EU launch.

## 5. App integrity

**Play Integrity**
- Confirms a genuine, Play-installed app running on a certified device [V63].
- Optional verdicts: patch level, risky overlay or screen-capture apps, Play Protect status, request volume, and device recall (beta) [V63].
- **Quota:** 10,000 token requests and 10,000 decryptions per day by default. Increases require linking a Google Cloud project. No price is listed [V64].

**App Attest**
- Uses a Secure Enclave key certified by Apple, plus a signed assertion on each request [V65].
- Its risk metric counts the keys attested per device over 30 days [V67].
- Keep key attestation under 100 calls per second [V66].
- No fee is documented.

**How they fit with re-simulation**
- Re-simulation catches impossible results; attestation raises the cost of scripted clients and replayed requests.
- Attest at session start and on reward claims. Exclude unverified devices from leaderboards and rare drops rather than blocking play.
- Size the Play quota: 50k daily players × 5 runs ≈ 250k decryptions per day.

## 6. Dev-ops tooling (2026)

| Tool | Price / notes |
|---|---|
| GitHub Actions + GameCI | 2,000 free minutes/month (Free plan, private repos); then $0.006/min Linux, $0.062/min macOS; self-hosted runners free. Works with a Unity Personal licence; iOS signing via fastlane on macOS [V68–V70] |
| Unity Build Automation | Free 200 Windows / 100 Mac / 100 Linux minutes per month; then $0.02/min Windows, $0.07/min Mac [V71] |
| Codemagic | 500 free M2 minutes, then $0.095/min. **Needs Unity Plus or Pro.** Unity Personal is capped at $200K revenue and funding; Pro is $2,310 per seat per year [V72–V74] |
| fastlane | 2.240.1, MIT licence [V75] |
| Crashlytics | Free [V76] |
| Sentry | $0 for 1 user; Team $26/month [V77] |
| Backtrace | Free for 1 developer; Mobile $600 per user per year [V78] |
| Crowdin | Free; Pro $50; Team $150 (list prices) [V79] |
| Lokalise | From $149/month [V80] |
| Localazy | Free up to 200 keys; 1,000 keys $41/month [V81] |
| Helpshift | Custom quote [V82] |
| Zendesk | $19 / $55 / $115 per agent per month, billed annually [V83] |
| Hive text moderation | $0.50 per 1,000 requests; self-serve limited to 100 requests/day; Korean supported [V84] |
| GGWP | $12,000/year for chat moderation [V85] |
| Community Sift | 22 languages including Korean; quote only [V86]. Reported to be shutting down in 2026 [S12] |
| Utopia | Trains a custom model on your own data; price not public (U) [V87] |
| Korean keyword filters | KISO KSS: free (2023 terms) [S11]. korcen 1.0.3 [V88] |

**Moderation pattern:** run a Korean and English blocklist on every message. Send only flagged or reported messages to the ML service.

## Sources (all accessed 2026-10-01; page or update dates shown where available)

V1 developer.android.com/google/play/billing/deprecation-faq (2026-09-09) · V2 …/billing/release-notes (2026-09-01) · V3 …/billing/subscriptions (2026-09-08) · V4 …/billing/integrate (2026-09-22) · V5 …/billing/rtdn-reference (2026-09-01) · V6 developer.apple.com/documentation/appstoreserverapi · V7 …/appstoreserverapi/send-consumption-information · V8 …/appstoreservernotifications/notificationtype · V9 …/documentation/appstorereceipts · V10 …/appstoreserverapi/simplifying-your-implementation-by-using-the-app-store-server-library · V11 …/storekit/skpaymentqueue · V12 packages.unity.com/com.unity.purchasing · V13 docs.unity3d.com/Packages/com.unity.purchasing@5.4/changelog/CHANGELOG.html · V14 …@4.15/changelog/CHANGELOG.html · V15 revenuecat.com/pricing · V16 revenuecat.com/docs/getting-started/installation/unity · V17 package.openupm.com/com.revenuecat.purchases-unity · V18 developer.android.com/google/play/requirements/target-sdk (2026-09-16) · V19 developer.apple.com/news/upcoming-requirements

V20 support.google.com/googleplay/android-developer/answer/112622 · V21 …/answer/16954621 · V22 …/answer/11222040 · V23 blog.google/intl/ko-kr/products/android-play-hardware/play-developer-update-2026-kr (2026-08-11) · V24 developer.apple.com/support/storekit-external-entitlement-kr · V25 developer.apple.com/app-store/small-business-program · V26 support.google.com/googleplay/android-developer/answer/138000 · V27 developer.apple.com/support/downloads/terms/exhibits/Exhibits-to-Schedule-2-and-3-English.pdf (2026-08-27) · V28 developer.apple.com/help/app-store-connect/manage-app-pricing/set-a-price · V29 developer.apple.com/news/?id=bo1b122z (2025-02-14)

V30 developer.apple.com/app-store/review/guidelines (2026-06-08) · V31 supremecourt.gov/search.aspx?filename=/docket/docketfiles/html/public/25-1311.html · V32 supremecourt.gov/qp/25-01311qp.pdf · V33 android-developers.googleblog.com/2026/03/a-new-era-for-choice-and-openness.html (2026-03-04) · V34 …/2026/06/play-expanded-billing.html (2026-06-24) · V35 support.google.com/googleplay/android-developer/answer/17161464 · V36 unity.com/blog/unity-iap-d2c-launch-blog (2026-06-30) · V37 stripe.com/pricing · V38 stash.gg/legacy/fee-calculator

V39 developer.apple.com/documentation/declaredagerange/requesting-people-share-their-age-range-with-your-app · V40 developer.apple.com/support/age-assurance · V41 developer.apple.com/news/?id=2ezb6jhj (2025-11-04) · V42 …/news/?id=sg176nne (2026-06-03) · V43 …/news/?id=f5zj08ey (2026-02-24) · V44 developer.android.com/google/play/age-signals/overview and …/use-age-signals-api (2026-07-20) · V45 …/age-signals/request-age-signals (2026-09-22) · V46 …/age-signals/release-notes (2026-09-16) · V47 support.google.com/googleplay/android-developer/answer/16569691 · V48 supremecourt.gov/orders/courtorders/070626zr1_dc8f.pdf (2026-07-06) · V50 le.utah.gov/Session/2026/bills/enrolled/HB0498.pdf · V51 legis.la.gov/legis/BillInfo.aspx?s=26RS&b=HB977 (digest ViewDocument.aspx?d=1486866) · V52 leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1043 · V53 grac.or.kr/Institution/AutonomicGradePlan.aspx · V54 grac.or.kr/Institution/IARC.aspx · V55 developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions · V56 developer.apple.com/news/?id=oj3r9pvw (2026-08-12) · V57 law.go.kr/LSW/lsInfoP.do?lsiSeq=270351 (PIPA, in force 2025-10-02) · V58 law.go.kr/lsLinkProc.do?lsNm=민법&joNo=000500 (Civil Act, in force 2026-03-17) · V59 korea.kr/briefing/policyBriefingView.do?newsId=156235799 (2017-10-27) · V60 korea.kr/multi/visualNewsView.do?newsId=148926167 (2024-02-22) · V61 commission.europa.eu/document/download/8af13e88-6540-436c-b137-9853e7fe866a_en (2025-03-21) · V62 ec.europa.eu/newsroom/repository/document/2026-38/Proposal_for_EU_KIDS_Act…_132530.pdf (2026-09-17)

V63 developer.android.com/google/play/integrity/overview (2026-04-20) · V64 …/integrity/setup (2026-09-16) · V65 developer.apple.com/documentation/devicecheck/establishing-your-app-s-integrity · V66 …/devicecheck/preparing-to-use-the-app-attest-service · V67 …/devicecheck/assessing-fraud-risk

V68 docs.github.com/en/billing/concepts/product-billing/github-actions · V69 game.ci/docs/github/activation · V70 game.ci/docs/github/deployment/ios · V71 support.unity.com/hc/en-us/articles/34748492914964 · V72 unity.com/products/pricing-updates · V73 codemagic.io/pricing · V74 docs.codemagic.io/yaml-quick-start/building-a-unity-app · V75 rubygems.org/api/v1/gems/fastlane.json · V76 firebase.google.com/pricing · V77 sentry.io/pricing · V78 backtrace.io/pricing · V79 crowdin.com/pricing · V80 lokalise.com/pricing · V81 localazy.com/pricing · V82 helpshift.com/pricing · V83 zendesk.com/pricing · V84 thehive.ai/pricing; docs.thehive.ai/docs/classification-text · V85 aws.amazon.com/marketplace/pp/prodview-3cm2k5sugyrt6 · V86 developer.microsoft.com/en-us/games/products/community-sift · V87 utopiaanalytics.com/ai-content-moderation-for-online-gaming-and-chat-services · V88 pypi.org/project/korcen

S1 zdnet.co.kr/view/?no=20260812192259 (2026-08-12) · S2 kimchang.com/ko/insights/detail.kc?idx=32247 (2025-02-14) · S3 appleinsider.com/articles/26/09/14/apple-standing-its-ground-in-epics-app-store-fee-suit (2026-09-14) · S4 tokenpost.kr/news/policy/391090 (2026-08-15) · S5 metaplay.io/blog/picking-the-right-web-shop-for-your-mobile-game (2026-01-24) · S6 hunton.com/privacy-and-cybersecurity-law-blog/alabama-enacts-app-store-accountability-act-requiring-age-verification · S7 ccianet.org/litigation/ccia-v-paxton-w-d-tex · S8 kimchang.com/ko/insights/detail.kc?idx=19895 (2019-07-01) · S9 lawtimes.co.kr/news/articleView.html?idxno=210245 (2025-08-05) · S10 gdpr-info.eu/art-8-gdpr · S11 etnews.com/20230619000202 (2023-06-19) · S12 lassomoderation.com/blog/what-is-community-sift (2026-02-16) · S13 techcrunch.com/2025/12/18/apple-becomes-a-debt-collector-with-its-new-developer-agreement (2025-12-18)
