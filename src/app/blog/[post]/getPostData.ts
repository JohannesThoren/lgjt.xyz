"use server";

import { readFileSync } from "fs";
import { POST_DIR } from "../../consts";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function getPostData(filename: string) {
	const fileContent = readFileSync(
		`${process.cwd() + POST_DIR + "/" + filename}.md`,
		"utf-8",
	);

	const matterResult = matter(fileContent);
	console.log(matterResult);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();

	return {
		contentHtml,
		...matterResult.data,
	};
}
