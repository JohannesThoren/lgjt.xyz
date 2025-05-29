---
author: Johannes Thorén
title: First Post
date: 2025/05/16
update: 2025/05/18
---

# Det första inlägget

Hej! Jag har precis fått blogsidan att fungera, så det verkar som att jag behöver skriva ett blogginlägg. Kanske borde jag börja med att presentera mig själv.
Jag heter Johannes Thorén och är en hobbyutvecklare som för närvarande jobbar som nätverkstekniker på ett telekombolag i Sverige. Mina hobbys är en blandning av mat, gaming, teknik och fotografi — och jag kommer troligen att skriva om allt det här.

Så det här kommer inte vara en renodlad tech- eller dev-blogg, men självklart kommer jag skriva om det också.

## Det första problemet att gnälla över

När jag utvecklade den här bloggen använde jag Next.js — precis som på resten av sidan. Jag exporterar även sidan statiskt så att jag kan hosta den på Cloudflare Pages. Det innebär att jag inte kan använda dynamiska server-side routes — allt måste vara förgenererat vid build time.

Men som du ser använder den här bloggen *dynamiska* routes för individuella inlägg. För att få det att fungera med statisk export behöver jag förgenerera alla post paths med hjälp av `getStaticPaths`.

Av någon anledning hanterade dock inte Next.js mellanslag i URL:er som jag förväntade mig. Jag trodde att `/blog/First Post` automatiskt skulle bli till `/blog/First%20Post`, men så var det inte. Det lilla problemet tog mig fem timmar att felsöka — med hjälp från både vänner och ChatGPT.

Och efter allt det bestämde jag mig för att slänga hela lösningen och helt enkelt ersätta mellanslag med bindestreck i URL:erna 🙂.

Så tack, vän och ChatGPT ❤️

Det här var min lilla introduktion och rant om att bygga en blogg. Det är ett kort inlägg, men frukta inte — det kommer fler och längre inlägg framöver.

Hej så länge!

(Text translated and touched up with AI)
