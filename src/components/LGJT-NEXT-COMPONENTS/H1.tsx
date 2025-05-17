import { ReactNode } from "react";

export default function H1({
	id,
	className,
	children,
}: {
	id?: string;
	className?: string;
	children?: ReactNode;
}) {
	return (
		<h1 id={id} className={`text-4xl w-full ${className}`}>
			{children}
		</h1>
	);
}
