import React, { ReactNode } from "react";

export default function Article(props: { title: string; children: ReactNode }) {
	return (
		<article className="px-5 sm:min-w-[75dvw] md:min-w-[30dvw]">
			<h2 className="text-3xl w-full border-solid border-b-2 dark:border-b-stone-100 border-b-stone-900 my-2">
				<b>{props.title}</b>
			</h2>
			<div className="[&>*]:my-4">{props.children}</div>
		</article>
	);
}
