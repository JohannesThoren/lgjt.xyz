---
author: Johannes Thorén
title: First Post
date: 2025/05/16
---

# The First Post

Hi! I just got the blog page working, so it looks like I need to create a blog post. Maybe I should introduce myself.
My name is Johannes Thorén and I’m a hobby developer currently working as a network engineer at a telecom company in Sweden. My hobbies are a mix of food, gaming, tech, and photography — and I’ll probably write about all of them here.

So, this won’t be strictly a tech or dev-focused blog, but of course I’ll be talking about that too.

## The First Problem to Rant About

When developing this blog, I used Next.js — just like on the rest of the site. I also statically export the site so I can host it on Cloudflare Pages. That means I can't use dynamic server-side routes — everything needs to be pre-rendered at build time.

But as you can see, this blog *does* use dynamic-looking routes for individual posts. To make that work with static export, I need to pre-generate all the post paths using `getStaticPaths`.

For some reason, though, Next.js didn’t handle spaces in URLs the way I expected. I thought `/blog/First Post` would automatically be encoded to `/blog/First%20Post`, but that wasn't the case. That small issue ended up taking me five hours to debug — with help from both friends and ChatGPT.

And after all that, I decided to throw that work out and just replace spaces with hyphens in the URLs 🙂.

So thank you, friend and ChatGPT ❤️
