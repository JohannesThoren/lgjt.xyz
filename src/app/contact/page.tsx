import Article from "@/components/Article";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Contact",
};

export default function Page() {
	return (
		<div>
			<Article title={"Contact"}>
				<p className="text-justify">
					The only "official" way to contact me is via email. For
					business-related inquiries, please use{" "}
					<Link className="text-sky-300" href={"mailto:business@lgjt.xyz"}>
						business@lgjt.xyz
					</Link>
					. For any other contact, please use{" "}
					<Link className="text-sky-300" href={"mailto:johannes@lgjt.xyz"}>
						johannes@lgjt.xyz
					</Link>
					. Below, you will find the public PGP keys for secure and private
					email communication.{" "}
				</p>
			</Article>
		</div>
	);
}
