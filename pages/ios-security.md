---
layout: page
title: Basic iOS Security 
permalink: /projects/ios-security/
---
iOS is the most secure consumer mobile operating system out of the box. However, regardless the OS, we will always be the weakest link in any security process. Here are my tips for further securing your instance of iOS. 

**Note:** This guide is currently designed for the Settings.app layout in iOS 10. However, most of what follows should be very similar to iOS 9. 

## Glossary

2FA: Two-Factor Authentication. In addition to your password, some services allow you require a time-sensitive code at login, which will be texted to you. 


## Step 1: General Privacy Awareness 


### Settings > Privacy

There are a multitude of things here that you should be aware of. Here are a few of the key rows:

**Location Services** — There are three levels of location permissions that an app can request: Always, While Using, or Never. For most apps, While Using should be all you need to allow. The only apps that should always be allowed to access your location, at any time they want, are those that need to send you geo-based notifications. E.g. a weather app that tells you before it's about to rain, or a fitness tracking app. 

**Photos** — Be aware that any app with Photos access have full photo access. Additionally, most, if not all, of your photos will contain metadata that reveal location, date and time of the shot. 

`Diagnostics & Usage`

`Advertising`

## Step 2: Lock down the lock screen

The lock screen is the most important part of your security strategy on iOS, and you can think about it as the locked front door of your device. Understanding the different ways data and interactions are exposed can help you stay safe. 

### Settings > Touch ID & Passcode

Touch ID and Passcodes are your first line of defense. Turn them on. For numeric passcodes, be sure to use six digits, not four. Set up at least two fingerprints for Touch ID. 

`Require Passcode: Immediately` — Having any sort of time delay introduces the possibility of someone accessing your phone in between when you "lock" it and when it's actually locked. 

Services under the **Allow Access When Locked** section are important, as they can be accessed by anyone from the lock screen without authentication. Some of the services, like `Today View` and `Notifications View` are relatively benign. However, I recommend setting both `Siri` and `Reply to Message` to `Off`. When `Reply to Message` is enabled, it allows anyone to reply to message notifications from the lock screen. When `Siri` is enabled, anyone could issue nefarious commands like, "Text my wife, what was your mother's maiden name?" 

I should note that disabling Siri may be for the extra cautious, as disabling the service will also render it useless from earbud microphones or while driving. If you'd like to keep Siri enabled for those reasons, you absolutely must disable Message previews, which are explained next. 

### Settings > Notifications > Messages

Go to Notifications, and then open up the settings for Messages. Scroll down to the bottom, and turn `Show Previews` to Off. This prevents anyone from reading your text messages, including those 2FA codes that your bank, email, or other service might send you. 

Additionally, hiding message previews drastically reduces the risk of someone impersonating you via Siri from the lock screen. 

### Health.app > Medical ID

Inside the Health app, there’s a section called Medical ID. This lets you set up some basic health information that can be displayed on the lock screen. The idea being that should ever be unresponsive, someone could grab your phone and get some quick information about your basic medical profile. 

It’s also a bad idea. Someone could [use your Medical ID to initiate a phishing attack](https://news.ycombinator.com/item?id=12222135). Considering the odds of you losing your iPhone are higher than actually needing Medical ID from the lock screen, let’s turn it off. 

Enter Health app, edit your Medical ID, and then turn Show When Locked to Off. 

## Step 3: Enable Apple ID Two-Factor Authentication 

