---
author: Johannes Thorén
title: First Post
date: 2025/05/16
---

# English

## The first post

Hi! I just got the blog page working, so it looks like I need to create a blog post. Maybe I should introduce myself.
My name is Johannes Thorén and I’m a hobby developer currently working as a network engineer at a telecom company in Sweden. My hobbies are a mix of food, gaming, tech, and photography — and I’ll probably write about all of them here.

So, this won’t be strictly a tech or dev-focused blog, but of course I’ll be talking about that too.

## The First Problem to Rant About

When developing this blog, I used Next.js — just like on the rest of the site. I also statically export the site so I can host it on Cloudflare Pages. That means I can't use dynamic server-side routes — everything needs to be pre-rendered at build time.

But as you can see, this blog *does* use dynamic-looking routes for individual posts. To make that work with static export, I need to pre-generate all the post paths using `getStaticPaths`.

For some reason, though, Next.js didn’t handle spaces in URLs the way I expected. I thought `/blog/First Post` would automatically be encoded to `/blog/First%20Post`, but that wasn't the case. That small issue ended up taking me five hours to debug — with help from both friends and ChatGPT.

And after all that, I decided to throw that work out and just replace spaces with hyphens in the URLs 🙂.

So thank you, friend and ChatGPT ❤️

Thats my small introduction and rant about making a blog. This is a short post but fear not there will be more and longer posts in the future.

Bye for now!

# Swedish

## Det första inlägget

Hej! Jag har precis fått blogsidan att fungera, så det verkar som att jag behöver skriva ett blogginlägg. Kanske borde jag börja med att presentera mig själv.
Jag heter Johannes Thorén och är en hobbyutvecklare som för närvarande jobbar som nätverkstekniker på ett telekombolag i Sverige. Mina hobbys är en blandning av mat, gaming, teknik och fotografi — och jag kommer troligen att skriva om allt det här.

Så det här kommer inte vara en renodlad tech- eller dev-blogg, men självklart kommer jag skriva om det också.

## Det första problemet att gnälla över

När jag utvecklade den här bloggen använde jag Next.js — precis som på resten av sidan. Jag exporterar även sidan statiskt så att jag kan hosta den på Cloudflare Pages. Det innebär att jag inte kan använda dynamiska server-side routes — allt måste vara förgenererat vid build time.

Men som du ser använder den här bloggen *dynamiskt utseende* routes för individuella inlägg. För att få det att fungera med statisk export behöver jag förgenerera alla post paths med hjälp av `getStaticPaths`.

Av någon anledning hanterade dock inte Next.js mellanslag i URL:er som jag förväntade mig. Jag trodde att `/blog/First Post` automatiskt skulle bli till `/blog/First%20Post`, men så var det inte. Det lilla problemet tog mig fem timmar att felsöka — med hjälp från både vänner och ChatGPT.

Och efter allt det bestämde jag mig för att slänga hela lösningen och helt enkelt ersätta mellanslag med bindestreck i URL:erna 🙂.

Så tack, vän och ChatGPT ❤️

Det här var min lilla introduktion och rant om att bygga en blogg. Det är ett kort inlägg, men frukta inte — det kommer fler och längre inlägg framöver.

Hej så länge!
