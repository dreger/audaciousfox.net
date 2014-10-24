---
title: Designing from the Bottom Up
date: 2014-10-21 19:30
---
I want to sidestep the praise that the bigger iPhones and iOS 8 are getting to focus on Reachability (Apple's mechanism that allows you to double-tap the home button and slide the entire interface down) and the iOS home screen. I think that both of these interfaces fail in an area where Apple is particularly skilled: using design to make software and hardware tradeoffs feel less so.

Design is about tradeoffs. Better camera? The iPhone has to be thick enough to allow for a larger image sensor. Faster OS? A more powerful processor, which consumes more battery. Bigger, better screen? Users' thumbs won't magically grow to meet the new display size. Tradeoffs.

Take background multitasking, for example. Although true background multitasking didn't come until iOS 7, Apple implemented the service in a way that didn't completely devour your battery. Even though it took longer, Apple waited until the software could mitigate the limitations of the hardware.

The home screen and Reachability are different.

Think about the iOS home screen. Since its inception, and aside from small cosmetic tweaks, the iOS Springboard has remained largely unchanged: apps arrange themselves in a top-left-to-bottom-right configuration. But should they still? 

For most users, apps in the top two rows now take three taps to open; two for Reachability, one for the app itself. Users are noticing. David Smith wrote about how he [gets around the extra space](http://david-smith.org/blog/2014/10/15/blank-icon-slots/):

> Since getting my iPhone 6 a few weeks ago I’ve been continuously trying to optimize the configuration of my home screen. The larger screen means that I now have an extra row of icons to fit onto the screen, but the physical size of device means that I can’t actually comfortably reach them.

> Since you can’t arbitrarily place icons on your home screen this means the situation is actually worse. I now have to fill in the top row of icons with ‘stuff’ just so that I can easily reach my main icons without stretching.

Smith's 'stuff' is really just Safari bookmarks, cleverly given a black icon and no title. So long as you have a completely black background, it appears like your apps have been moved down a row. Interesting, but it's a hacky thing to do, and you can bet most typical users won't go to the same lengths. 

However, what if iOS, instead of forcing the top-down layout, allowed you to arrange your icons anywhere, but restricted to an invisible grid:

![iphone apps](http://cl.ly/image/0A0q1I0h3715/iphone-6.png)
{: .small-image}

_Would this be so bad? ([iOS 8 UI kit](https://github.com/rafaelconde/ios8-ui-kit))_
{: .caption}

That image may seem weird at first &mdash; or you, like my wife, might not even notice the icons are bottom-aligned &mdash; but it makes a lot of sense with the bigger screens. Android has been doing this for years, and it was one of my favorite things about their OS: 

![lolipop](http://cdn2.vox-cdn.com/entry_photo_images/12887594/DSCF9613_verge_super_wide.jpg)

_Android 5.0 "Lolipop." Image credit: [The Verge](http://www.theverge.com/2014/10/21/7025853/google-nexus-6-hands-on-photos-video-android-phablet)._
{: .caption}

### Tradeoffs 

Back in October 2012, when Apple released their first "big" iPhone (the iPhone 5), Dustin Curtis [wrote about his experience with the bigger size](http://dcurt.is/4-inches):

> After using the iPhone 5 for more than a week, I stand by my original thoughts: four inches is too big for my thumb to comfortably reach to all areas of the screen while holding the phone one-handed. In my left hand, it’s just a little bit too uncomfortable to reach the far upper right corner of the screen, especially in situations where I need to touch the “cancel” or “add new item” button.

The iPhone 5 was big, but it was also lighter and felt easier to hold, due to the reduction in thickness (4.9 to 3.95 ounces) and weight (.37 to .3 inches), from the iPhone 4s. 

The iPhones 6 are just big. And despite (remarkably) being thinner and lighter than the iPhone 5s, these new 4.7' and 5.5' screens can't be mitigated with reductions in weight and thickness. 

_Note: It's worth pointing out that pushing quality software year after year is hard. Episode 97 of "The Talk Show" with John Gruber and guest Guy English talked about this very thing, and I found it really informative. You can [jump right into that point in the conversation here](https://overcast.fm/podcasts/episode/120650842508113#t=2040)._

Usually, Apple is able to use design to make their tradeoffs feel less so, but I don't think Reachability is a .... not sold that the iOS home screen on an iPhone 6 is worse for the users than the same on an iPhone 5s. 



