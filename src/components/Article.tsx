import React, { Children, ReactNode } from "react";

export default function Article(props: { title: string; children: ReactNode }) {
	return (
		<article className="px-5 min-w-[30dvw] md:max-w-[75dvw] lg:max-w-[35dvw]">
			<h2 className="text-3xl w-full border-solid border-b-2 dark:border-b-stone-100 border-b-stone-900 my-2">
				<b>{props.title}</b>
			</h2>
            <div className="">
			{props.children}
            </div>
		</article>
	);
}
