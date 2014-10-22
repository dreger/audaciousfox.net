---
title: Designing from the Bottom Up
date: 2014-10-21 19:30
---
I like the iPhone 6. I like that it's big. I like iOS. But I don't like Reachability, Apple's mechanism that allows you to double-tap the home button and slide the entire interface down.  I think Reachability fails in an area where Apple is particularly skilled: using software design to make hardware tradeoffs feel less so. 

Here Android wins out. It may not seem aparent when we were all using smaller phones, but now that thumb reachability has become an issue worth considering, things are different. Android mitigates this in two ways: letting users put homescreen icons wherever they want and the persistant back button on the bottom of the screen. I don't have 

Apple even has a section of its iPhone 6 webpage, titled "Everything within reach," that is dedicated to [Reachability](https://www.apple.com/iphone-6/design/)

> With new features like Reachability you can interact with the larger screen in different ways, too. Simply double touch the Home button and the entire screen shifts down closer to your thumb. [...] With the new continuous surface of iPhone, all your gestures now feel smoother than ever.

Let's put aside that I think a soft double tap on the home button should launch the multi-tasking window. 

Hardware design is all about tradeoffs. Better camera? The iPhone has to be a certain thickness to allow for a bigger image sensor. Bigger screen? Users' thumbs won't magically grow to meet the new display size. Better battery? More thickness and size. Tradeoffs. However, tradeoffs are typically worth it, and, eventually, users' will stop complaining that [the camera lens protrudes from the back of their new iPhone 6](https://brooksreview.net/2014/09/the-bump/). 

Reachability is different. But to understand reachability, you have to understand the mechanism behind your home screen: the Springboard. 

Back in October 2012, when Apple released their "big" iPhone 5, Dustin Curtis [wrote about the new size](http://dcurt.is/4-inches): 

> After using the iPhone 5 for more than a week, I stand by my original thoughts: four inches is too big for my thumb to comfortably reach to all areas of the screen while holding the phone one-handed. In my left hand, it’s just a little bit too uncomfortable to reach the far upper right corner of the screen, especially in situations where I need to touch the “cancel” or “add new item” button. 

Tradeoff. However, the iPhone 5 _felt_ lighter and easier to hold than the iPhone 4s due to the reduction in thickness and weight (4.9 ounces, .37 inches thick to 3.95 ounces, .3 inches thick). 

First David Smith [wrote about it](http://david-smith.org): 

> Since getting my iPhone 6 a few weeks ago I’ve been continuously trying to optimize the configuration of my home screen. The larger screen means that I now have an extra row of icons to fit onto the screen, but the physical size of device means that I can’t actually comfortably reach them.

> Since you can’t arbitrarily place icons on your home screen this means the situation is actually worse. I now have to fill in the top row of icons with ‘stuff’ just so that I can easily reach my main icons without stretching.

Then Ben Brooks [commented](https://brooksreview.net/2014/10/invisible-ios-home-screen-icons/): 

> Pretty clever move. I reserve my top row on the iPhone 6 for things that I rarely use. Smith has a clever solution too, but it looks too off-putting to me.

Brooks is right. Although Mr. Smith's approach is interesting, what's the point of having a big screen, if you have to use #000 as the wallpaper? 

This is an area that I think Android does well. Look at and Android 5.0 home screen: 

![lolipop](http://cdn2.vox-cdn.com/entry_photo_images/12887594/DSCF9613_verge_super_wide.jpg)

Apple's pin-it-to-the-top mentality makes it difficult, especially with the bigger screens. 

Android lets you icons be placed anywhere, allowing you to stack them at the bottom. And, if we're talking about one handed use, isn't h

Is reachability a better implementation? I don't think so. This would change one of the most fundamental things about the Springboard, but I think it makes it better. 

The other option is even simpler: don't get a big iPhone, if you don't want to have to reach. 