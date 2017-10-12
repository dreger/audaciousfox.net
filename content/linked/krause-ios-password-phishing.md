---
title: "Fake iTunes Password Dialogs Look Exactly Like the Real Thing"
date: 2017-10-11T20:44:37-04:00
link: https://krausefx.com/blog/ios-privacy-stealpassword-easily-get-the-users-apple-id-password-just-by-asking
---

Everyone's seen the "Sign In to iTunes Store" dialog, where we're asked to enter our passwords to confirm purchases or view certain iCloud settings. The problem, as [pointed out by Felix Krause][felix], is that the system popup style is available to all app developers, and a malicious app could present a fake password prompt, which we're conditioned to quickly fill out and submit.

Unfortunately, there's no way to visually distinguish an official dialog from a phishing dialog; they look identical. However, Mr. Krause points out that by hitting the home button, a phishing dialog will close along with its app, but a system dialog will remain visible until canceled.

[felix]: https://krausefx.com/blog/ios-privacy-stealpassword-easily-get-the-users-apple-id-password-just-by-asking