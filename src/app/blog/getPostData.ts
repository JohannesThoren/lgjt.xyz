import { readFileSync } from "fs";
import { POST_DIR_EN, POST_DIR_SV } from "../consts";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface IPostCollection {
	postSV: IPost;
	postEN: IPost;
}

interface IPost {
	filename: string;
	contentHtml: string;
	title?: string;
	date?: string;
	author?: string;
	update?: string;
}

export default async function getPostCollection(
	filename: string,
): Promise<IPostCollection> {
	const postSV = await getPostData(filename, POST_DIR_SV);
	const postEN = await getPostData(filename, POST_DIR_EN);
	const collection: IPostCollection = {
		postSV: postSV,
		postEN: postEN,
	};
	return collection;
}

async function getPostData(filename: string, post_dir: string): Promise<IPost> {
	console.log(post_dir);
	const fn = decodeURI(filename);
	console.log(fn);

	const fileContent = readFileSync(
		`${process.cwd() + post_dir + "/" + fn}.md`,
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
