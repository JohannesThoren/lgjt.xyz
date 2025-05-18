import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import getPostData from "../getPostData";
import { readdirSync } from "fs";
import "./style.css";
import P from "@/components/LGJT-NEXT-COMPONENTS/P";

export default async function Page({
	params,
}: {
	params: Promise<{ post: string }>;
}) {
	const { post } = await params;
	const postData = await getPostData(post);

	return (
		<Article title={postData.title ? postData.title : "NA"}>
			<div
				className="post"
				dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
			></div>
			<P className="text-xs">
				Author: {postData.author}, Written: {postData.date}, Last Update:{" "}
				{postData.update}
			</P>
		</Article>
	);
}

export function generateStaticParams() {
	const dir = readdirSync(process.cwd() + "/public/posts");

	const files = dir.map((file) => file.replace(".md", ""));
	return files.map((file) => ({ post: file }));
	// return [{ post: "/blog/First%20Post" }];
}
