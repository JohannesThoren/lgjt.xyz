import Article from "@/components/Article";
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
		<div>
			<Article title={"Contact"}>
				<p className="text-justify">
					The only &quot;official&quot; way to contact me is via email. For
					business-related inquiries, please use{" "}
					<MailTo mail={"business@lgjt.xyz"} />. For any other contact, please
					use <MailTo mail={"johannes@lgjt.xyz"} />. Below, you will find the
					public PGP keys for secure and private email communication.
				</p>
				<section>
					<h3 className="text-2xl">PGP Keys</h3>
					<table className="w-full">
						<tbody className=" divide-dotted divide-y-2 divide-stone-900 dark:divide-stone-100">
							<tr className="">
								<th className="text-left">Johannes@lgjt.xyz</th>
								<td className="text-right">
									<a href="/johannes@lgjt.txt">View</a>
								</td>
								<td className="text-right">
									<a href="/johannes@lgjt.acs">Download</a>
								</td>
							</tr>
							<tr className="">
								<th className="text-left">Business@lgjt.xyz</th>
								<td className="text-right">
									<a href="/business@lgjt.txt">View</a>
								</td>
								<td className="text-right">
									<a href="/business@lgjt.acs">Download</a>
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</Article>
		</div>
	);
}
