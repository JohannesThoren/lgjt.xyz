import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "About",
	openGraph: {
		title: "About",
	},
};

export default function Page() {
	return (
		<Article title={"About me"}>
			<p className="text-justify">
				I Was born 2003 and grew up in a small town in Dalarna, Sweden. Very
				early on i got an interest for computers that turned in to a programming
				hobby at the age of 12. Since then i have tried a lot of different
				languages and paradigms, some i just tried once and others i still use
				regularly. I am mostly self taught and with a few exceptions, during
				upper secondary school (or gymnasiet in swedish, 15 - 18 yr.o) i studied
				some programming and web development.
			</p>

			<section>
				<h2 className="text-2xl">Education</h2>
				<p className="text-justify">
					Education wise i graduated from upper secondary 2022. After upper
					secondary i went to Karlstad University and studied one year of CS.
					During the summer 2023 i got a job offer to work as a network
					engineer, which i still do. So in short the highest level of education
					i have completed is upper Secondary.
				</p>
			</section>

			<section>
				<h2 className="text-2xl">Vision</h2>
				<p className="text-justify">
					When developing software i always try to aim for building software
					that is simple to maintain and simple to use. Another person should be
					able to look at the code and understand exactly what the code does.
					And the end user should feel like it is natural to use.
				</p>
			</section>
		</Article>
	);
}
