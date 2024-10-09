import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100 text-stone-900 dark:text-stone-100 dark:bg-stone-900 min-h-screen flex flex-col`}
			>
				<Header />
				<main className="flex-grow flex justify-center items-center">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
