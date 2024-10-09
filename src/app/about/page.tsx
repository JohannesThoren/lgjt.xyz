import Article from "@/components/Article";
import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "About",
	openGraph: {
		title: "About",
	},
};

export default function Page() {
	return <Article title={"Work in progress"}>
		<p>This page is under construction</p>
	</Article>;
}
