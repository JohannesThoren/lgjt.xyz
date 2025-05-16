import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import P from "@/components/LGJT-NEXT-COMPONENTS/P";
import getPostData from "./[post]/getPostData";
import { readdirSync } from "fs";
import Link from "next/link";

export default async function Page() {
	const dir = readdirSync(process.cwd() + "/public/posts");
	const files = dir.map((file) => file.replace(".md", ""));
	const data = await Promise.all(files.map(getPostData));

	return (
		<Article title={"Blog"}>
			<div className="flex flex-col gap-2">
				{data.map((p) => (
					<Link
						className="bg-stone-800 p-2 rounded-md"
						key={p.filename}
						href={`/blog/${p.filename}`}
					>
						{p.title || "Post"} - {p.date || "0000/00/00"}
					</Link>
				))}
			</div>
		</Article>
	);
}
