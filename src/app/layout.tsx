import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/LGJT-NEXT-COMPONENTS/Body";

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
				<Header />
				<main className="flex-grow flex justify-center items-center">
					{children}
				</main>
				<Footer />
			</Body>
		</html>
	);
}
