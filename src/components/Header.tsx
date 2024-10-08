import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
	return (
		<header className="flex justify-between items-center px-5 py-1">
			<h1 className="text-4xl"><Link href={"/"}>LGJT.XYZ</Link></h1>
			<Nav />
		</header>
	);
}
