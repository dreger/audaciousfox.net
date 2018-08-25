---
title: Using Taps, Swipes, and Other Sensor Data to Verify You're You
title: Behavioral Biometrics Are a Cookie You Can’t Clear
date: 2018-08-24T20:42:23-04:00
link: https://www.nytimes.com/2018/08/13/business/behavioral-biometrics-banks-security.html
draft: true
---

[Stacy Cowley][sc], the *New York Times*, on how banks and retailers are using your taps, swipes, and other device sensor data to verify you're you: 

[sc]: https://www.nytimes.com/2018/08/13/business/behavioral-biometrics-banks-security.html

> The way you press, scroll and type on a phone screen or keyboard can be as unique as your fingerprints or facial features. To fight fraud, a growing number of banks and merchants are tracking visitors’ physical movements as they use websites and apps.

> Some use the technology only to weed out automated attacks and suspicious transactions, but others are going significantly further, amassing tens of millions of profiles that can identify customers by how they touch, hold and tap their devices.

> The data collection is invisible to those being watched. Using sensors in your phone or code on websites, companies can gather thousands of data points, known as “behavioral biometrics,” to help prove whether a digital user is actually the person she claims to be.

Right now, companies like [BioCatch][] (the main company from the article) are selling their software to financial institutions and online stores to help prevent fraud. Browsing through [BioCatch’s white papers][biocatch white papers], their approach appears relatively successful: how I scroll, tap, and hold my phone is apart of their “continuous” authentication strategy, and any deviations from my specific patterns could indicate a bad actor is using my account. BioCatch says their technology is already used to monitor billions of bank transactions per month, so I guess it’s working. 

[biocatch]: https://www.biocatch.com
[biocatch white papers]: https://www.biocatch.com/resources/white-paper

But the privacy implications are troubling. I bet a majority of people don’t give a second thought to the angle at which they hold their phone or the micro-movements of their thumb as they scroll a webpage. And why would they? In her piece, Ms. Cowley also points out how biometric systems have been used to [identify medical conditions][medical] and “if a customer with a once-steady hand develops a tremor, her automobile insurance company might get worried”.

[medical]: (https://www.americanbar.org/content/dam/aba/administrative/labor_law/meetings/2011/eeo/014.authcheckdam.pdf)

Behavioral biometrics may be helping prevent fraud, but what it really sounds like is a new generation of ad tracking techniques. Advertisers are already in an arms race with the ad blockers, and some browsers have built-in protections like Safari does with its [Intelligent Tracking Prevention][safari itp]. But while trackers have traditionally relied on a combination of JavaScript, querying what fonts you have installed, or existing cookies from other sites, behavioral biometrics and device data might make the user themselves the ultimate cookie.

[safari itp]: https://techcrunch.com/2018/06/05/apple-got-even-tougher-on-ad-trackers-at-wwdc/ "Intelligent Tracking Prevention"

That is, unless the browser vendors step in. Generally speaking, I might have little conscious control over the unique way I scroll a webpage, but I should have control over any non-interactive sensor data my phone provides to a third party. At the very least, I should be prompted whenever a website tries to detect things like [device orientation][], [ambient lighting conditions][], or [battery levels][]. Granted, some of these JavaScript APIs are only partially supported across today’s browsers, and others may never be fully implemented. For example, the only major browser to still provide the Battery Status API [is Google Chrome][chrome battery]; whereas both [Firefox][ff battery] and [Safari][safari battery] removed the feature, with Mozilla citing privacy concerns as one of the reasons for removal. 

[device orientation]: https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
[ambient lighting conditions]: https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events
[battery levels]: https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
[chrome battery]: https://caniuse.com/#search=battery
[ff battery]: https://bugzilla.mozilla.org/show_bug.cgi?id=1313580
[safari battery]: https://webkit.org/status/#specification-battery-status-api

It should be said that allowing websites to read device data isn’t inherently bad, and as web applications become more powerful we may *want* them to have access to certain hardware information. But this sort of visibility into my device shouldn’t be available without my consent. Browser vendors already force any website requesting location data to (a) be served over HTTPS and (b) get explicit permission from the user, and this should be the model going forward. Any less and I see it as an intentional leaking of private user information.