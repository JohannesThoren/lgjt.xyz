import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import P from "@/components/LGJT-NEXT-COMPONENTS/P";
import getPostData from "./getPostData";
import { readdirSync } from "fs";
import Link from "next/link";

export default async function Page() {
	const dir = readdirSync(process.cwd() + "/public/posts");
	const files = dir.map((file) => file.replace(".md", ""));
	const data = await Promise.all(files.map(getPostData));

	data.sort((a, b) => {
		return (
			new Date(b.date ? b.date : "1970-01-01").getTime() -
			new Date(a.date ? a.date : "1970-01-01").getTime()
		);
	});

	return (
		<Article title={"Blog"}>
			<P>
				Hello! Welcome to my blog, here i will upload random posts about my life
				and intrests. So if you think that intresting feel free and read the
				posts.
			</P>
			<div className="flex flex-col gap-2">
				{data.map((p) => (
					<Link key={p.filename} href={`/blog/${p.filename}`}>
						<div className="bg-stone-800 p-2 rounded-md flex justify-between">
							<P>{p.title}</P>
							<P>{p.date}</P>
						</div>
					</Link>
				))}
			</div>
		</Article>
	);
}
