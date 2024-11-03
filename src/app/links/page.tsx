import Article from "@/components/Article";
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
			<p>
				Here is a list links to my social media accounts and other links
				relevant to me.
			</p>
			<section>
				<h2 className="text-2xl">Web Precense</h2>
				<ul className="dark:[&>li]:bg-stone-800 [&>li]:bg-stone-200 hover:[&>li]:bg-stone-300 dark:hover:[&>li]:bg-stone-700 text-center [&>li>a]:block [&>li]:rounded-md [&>li>a]:py-2 [&>li>a]:px-2 [&>li]:my-2 [&>li]:transition-colors" >
					<li>
						<a href="https://github.com/JohannesThoren">Github</a>
					</li>
					<li>
						<a href="https://www.instagram.com/johannes.thoren/">Instagram</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/johannes-thor%C3%A9n-6a3b301a3/">
							Linkedin
						</a>
					</li>
					<li>
						<a href="https://discord.com/users/220112438249521156">Discord</a>
					</li>
				</ul>
			</section>
			<section>
				<h2 className="text-2xl">Projects</h2>
				<ul className="dark:[&>li]:bg-stone-800 [&>li]:bg-stone-200 hover:[&>li]:bg-stone-300 dark:hover:[&>li]:bg-stone-700 text-center [&>li>a]:block [&>li]:rounded-md [&>li>a]:py-2 [&>li>a]:px-2 [&>li]:my-2 [&>li]:transition-colors">
					<li>
						<a href="https://url.lgjt.xyz">URLShortener (In Development)</a>
					</li>
				</ul>
			</section>
		</Article>
	);
}
