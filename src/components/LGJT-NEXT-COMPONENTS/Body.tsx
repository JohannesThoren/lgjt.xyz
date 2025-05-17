import localFont from "next/font/local";
import { ReactNode } from "react";

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

export default function Body({
	id,
	className,
	children,
}: {
	id?: string;
	className?: string;
	children?: ReactNode;
}) {
	return (
		<body
			id={id}
			className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100 text-stone-900 dark:text-stone-100 dark:bg-stone-900 min-h-screen flex flex-col ${className}`}
		>
			{children}
		</body>
	);
}
