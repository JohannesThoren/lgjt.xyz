import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import H2 from "@/components/LGJT-NEXT-COMPONENTS/H2";
import P from "@/components/LGJT-NEXT-COMPONENTS/P";
import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Links",
	openGraph: {
		title: "Links",
	},
};

export default function Page() {
	return (
		<Article title={"Links"}>
			<P>
				Here is a list links to my social media accounts and other links
				relevant to me.
			</P>
			<section>
				<H2>Web Precense</H2>
				<ul className="dark:[&>li]:bg-stone-800 [&>li]:bg-stone-200 hover:[&>li]:bg-stone-300 dark:hover:[&>li]:bg-stone-700 text-center [&>li>a]:block [&>li]:rounded-md [&>li>a]:py-2 [&>li>a]:px-2 [&>li]:my-2 [&>li]:transition-colors">
					<li>
						<a
							rel="noopener noreferrer nofollow"
							href="https://github.com/JohannesThoren"
						>
							Github
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer nofollow"
							href="https://www.instagram.com/johannes.thoren/"
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer nofollow"
							href="https://www.linkedin.com/in/johannes-thor%C3%A9n-6a3b301a3/"
						>
							Linkedin
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer nofollow"
							href="https://discord.com/users/220112438249521156"
						>
							Discord
						</a>
					</li>
				</ul>
			</section>
			<section>
				<H2>Projects</H2>
				<ul className="dark:[&>li]:bg-stone-800 [&>li]:bg-stone-200 hover:[&>li]:bg-stone-300 dark:hover:[&>li]:bg-stone-700 text-center [&>li>a]:block [&>li]:rounded-md [&>li>a]:py-2 [&>li>a]:px-2 [&>li]:my-2 [&>li]:transition-colors">
					<li>
						<a rel="noopener noreferrer nofollow" href="https://url.lgjt.xyz">
							URLShortener (WIP)
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer nofollow"
							href="https://securenote.lgjt.xyz"
						>
							Secure Note (WIP)
						</a>
					</li>
				</ul>
			</section>
		</Article>
	);
}
