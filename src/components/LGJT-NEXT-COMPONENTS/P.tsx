import { ReactNode } from "react";

export default function P({
	id,
	className,
	children,
}: {
	id?: string;
	className?: string;
	children?: ReactNode;
}) {
	return <p id={id} className={`text-justify ${className}`}>{children}</p>;
}
