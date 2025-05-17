import { ReactNode } from "react";

export default function Main({
	id,
	className,
	children,
}: {
	id?: string;
	className?: string;
	children?: ReactNode;
}) {
	return (
		<main id={id} className={`flex-grow flex justify-center items-center ${className}`}>
			{children}
		</main>
	);
}
