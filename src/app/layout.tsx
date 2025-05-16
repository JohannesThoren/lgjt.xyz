import type { Metadata } from "next";
import "./globals.css";
import Body from "@/components/LGJT-NEXT-COMPONENTS/Body";
import Main from "@/components/LGJT-NEXT-COMPONENTS/Main";
import Header from "@/components/LGJT-NEXT-COMPONENTS/Header";
import Link from "next/link";
import { BreadCrumb } from "@/components/BreadCrumb";
import Footer from "@/components/LGJT-NEXT-COMPONENTS/Footer";
import Nav from "@/components/LGJT-NEXT-COMPONENTS/Nav";
import H1 from "@/components/LGJT-NEXT-COMPONENTS/H1";

export const metadata: Metadata = {
	title: {
		template: "%s | LGJT.XYZ",
		default: "LGJT.XYZ",
	},
	description:
		"Johannes Thorén's personal web page and portfolio. Here you will find a list of Johannes's web and software development project.",
	authors: [
		{ name: "Johannes Thorén", url: "https://github.com/JohannesThoren" },
	],
	keywords: [
		"JS",
		"HTML",
		"CSS",
		"React",
		"Next.js",
		"Next",
		"Rust",
		"C",
		"Developer",
		"Hobby",
		"Portfolio",
		"Contact",
		"Johannes",
		"Thorén",
		"Johanens Thorén",
		"Thoren",
		"Johannes Thoren",
	],
	openGraph: {
		title: {
			template: "%s | LGJT.XYZ",
			default: "LGJT.XYZ",
		},
		description:
			"Johannes Thorén's personal web page and portfolio. Here you will find a list of Johannes's web and software development project.",
	},
	robots: "index, follow",
	twitter: {
		title: {
			template: "%s | LGJT.XYZ",
			default: "LGJT.XYZ",
		},
		description:
			"Johannes Thorén's personal web page and portfolio. Here you will find a list of Johannes's web and software development project.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Body>
				<Header>
					<H1>
						<Link href={"/"}>LGJT.XYZ</Link>
						<BreadCrumb />
					</H1>
					<Nav>
						<Link href={"/contact"}>Contact</Link>
						<Link href={"/about"}>About</Link>
						<Link href={"/blog"}>Blog</Link>
						<Link href={"/links"}>Links</Link>
					</Nav>
				</Header>
				<Main>{children}</Main>
				<Footer>copyright &copy; 2025 Johannes Thorén</Footer>
			</Body>
		</html>
	);
}
