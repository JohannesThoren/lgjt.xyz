import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import getPostData from "./getPostData";
import { readdirSync } from "fs";
import "./style.css";

export default async function Page({
	params,
}: {
	params: Promise<{ post: string }>;
}) {
	const { post } = await params;
	const postData = await getPostData(post);

	return (
		<Article title={postData.title}>
			<div
				className="post"
				dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
			></div>
		</Article>
	);
}

export function generateStaticParams() {
	const dir = readdirSync(process.cwd() + "/public/posts");

	const files = dir.map((file) => file.replace(".md", ""));
	const ret = files.map((file) => ({ post: file }));
	return ret;
}
