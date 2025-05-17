import React, { ReactNode } from "react";

export default function Article(props: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <article className="px-5 w-full lg:max-w-[45dvw] md:max-w-[80dvw] space-y-4">
      <h2 className="text-3xl border-b-2 dark:border-stone-100 border-stone-900 pb-1">
        <b>{props.title}</b>
      </h2>
      <div className="space-y-4">{props.children}</div>
    </article>
  );
}
