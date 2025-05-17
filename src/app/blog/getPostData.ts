import { readFileSync } from "fs";
import { POST_DIR } from "../consts";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface IPost {
	filename: string;
	contentHtml: string;
	title?: string;
	date?: string;
	author?: string;
}

export default async function getPostData(filename: string): Promise<IPost> {
	const fn = decodeURI(filename);
	console.log(fn);

	const fileContent = readFileSync(
		`${process.cwd() + POST_DIR + "/" + fn}.md`,
		"utf-8",
	);

	const matterResult = matter(fileContent);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();

	return {
		filename: filename,
		contentHtml,
		...matterResult.data,
	};
}
