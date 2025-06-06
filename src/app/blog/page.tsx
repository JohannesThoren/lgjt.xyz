import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import P from "@/components/LGJT-NEXT-COMPONENTS/P";
import getPostData from "./getPostData";
import { readdirSync } from "fs";
import Link from "next/link";
import MailTo from "@/components/MailTo";

export default async function Page() {
	const dir = readdirSync(process.cwd() + "/public/posts/en");
	const files = dir.map((file) => file.replace(".md", ""));
	const data = await Promise.all(files.map(getPostData));

	data.sort((a, b) => {
		return (
			// TODO: kanske borde se över datum hanteringen. typ inte defaulta till 1970-01-01
			new Date(b.postEN.date ? b.postEN.date : "1970-01-01").getTime() -
			new Date(a.postEN.date ? a.postEN.date : "1970-01-01").getTime()
		);
	});

	return (
		<Article title={"Blog"}>
			<P>
				Hello! Welcome to my blog, here i will upload random posts about my life
				and intrests. So if you think that intresting feel free and read the
				posts. And if you have any questions or have anything to say about a
				post please send a mail to <MailTo mail={"blog@lgjt.xyz"} />
			</P>
			<div className="flex flex-col gap-2">
				{data.map((p) => (
					<Link key={p.postEN.filename} href={`/blog/${p.postEN.filename}/en`}>
						<div className="bg-stone-800 p-2 rounded-md flex justify-between">
							<P>{p.postEN.title}</P>
							<P>{p.postEN.date}</P>
						</div>
					</Link>
				))}
			</div>
		</Article>
	);
}
