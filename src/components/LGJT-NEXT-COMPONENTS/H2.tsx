import { ReactNode } from "react";

export default function H2({
	id,
	className,
	children,
}: {
	id?: string;
	className?: string;
	children?: ReactNode;
}) {
	return (
		<h2 id={id} className={`text-2xl ${className}`}>
			{children}
		</h2>
	);
}
