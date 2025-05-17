
import { ReactNode } from "react";

export default function Header({children}: {children: ReactNode}) {
	return (
		<header className="sm:flex block justify-between items-center px-5 py-1">
			{children}
		</header>
	);
}