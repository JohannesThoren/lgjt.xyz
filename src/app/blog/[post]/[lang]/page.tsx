import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import getPostData from "../../getPostData";
import { readdirSync } from "fs";
import "./style.css";
import P from "@/components/LGJT-NEXT-COMPONENTS/P";
import Link from "next/link";

export default async function Page({
	params,
}: {
	params: Promise<{ lang: string; post: string }>;
}) {
	const { post, lang } = await params;
	console.log("x", post, lang);

	const postCollection = await getPostData(post);
	let postData = postCollection.postEN;
	if (lang == "sv") {
		postData = postCollection.postSV;
	}

	return (
		<Article title={postData.title ? postData.title : "NA"}>
			{lang == "en" && (
				<Link href={`/blog/${postData.filename}/sv`}>Swedish</Link>
			)}
			{lang == "sv" && (
				<Link href={`/blog/${postData.filename}/en`}>Enlgish</Link>
			)}
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
	const dirEN = readdirSync(process.cwd() + "/public/posts/en/");
	const dirSV = readdirSync(process.cwd() + "/public/posts/sv/");

	const filesEN = dirEN.map((file) => file.replace(".md", ""));
	const filesSV = dirSV.map((file) => file.replace(".md", ""));

	const paramsEN = filesEN.map((file) => ({ post: file, lang: "en" }));
	const paramsSV = filesSV.map((file) => ({ post: file, lang: "sv" }));

	const returnValue = Array.prototype.concat(paramsEN, paramsSV);

	console.log(returnValue);
	return returnValue;
}
