import Image from "next/image";

export default function Home() {
	return (
		<div className="flex-grow flex justify-center items-center">
			<article className="px-5">
				<h2 className="text-3xl min-w-[30dvw] w-full border-solid border-b-2 dark:border-b-stone-100 border-b-stone-900 my-2">
					<b>Johannes Thorén</b>
				</h2>
				<p>
					<b>Hobby web and software developer</b>
				</p>
			</article>
		</div>
	);
}
