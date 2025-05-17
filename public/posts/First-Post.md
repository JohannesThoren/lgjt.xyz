---
author: Johannes Thorén
title: First Post
date: 2025/05/16
---

# The First Post

Hi! I just got the blog page working, so it looks like I need to create a blog post. Maybe I should introduce myself.
My name is Johannes Thorén and I’m a hobby developer currently working as a network engineer at a telecom company in Sweden. My hobbies are a mix of food, gaming, tech, and photography — and I’ll probably write about all of them here.

So, this is not strictly a tech or dev-focused blog, but of course I’ll be talking about that too.

## The First Problem to Rant About

When developing this blog, I used Next.js — just like on the rest of the site. I also statically export the page so I can host it on Cloudflare Pages. Because of that, I’m unable to use dynamic routes at runtime.

But as you can see, this blog *does* have dynamic routes for the posts. To make that work, I need to pre-generate the params/routes for each post.

For some reason, though, Next.js couldn’t understand that `/blog/First Post` should really be `/blog/First%20Post`. That tiny issue ended up taking me five hours to fix — with help from both friends and ChatGPT.

So thank you, friend and ChatGPT ❤️
