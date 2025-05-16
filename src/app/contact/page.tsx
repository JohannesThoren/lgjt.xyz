import Article from "@/components/LGJT-NEXT-COMPONENTS/Article";
import P from "@/components/LGJT-NEXT-COMPONENTS/P";
import MailTo from "@/components/MailTo";
import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Contact",
	openGraph: {
		title: "Contact",
	},
};

export default function Page() {
	return (
		<Article title={"Contact"}>
			<P className="text-justify">
				The only &quot;official&quot; way to contact me is via email. For
				business-related inquiries, please use{" "}
				<MailTo mail={"business@lgjt.xyz"} />. For any other contact, please use{" "}
				<MailTo mail={"johannes@lgjt.xyz"} />.
			</P>
		</Article>
	);
}
