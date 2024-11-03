import Link from "next/link";
import Nav from "./Nav";
import { BreadCrumb } from "./BreadCrumb";

export default function Header() {
	return (
		<header className="sm:flex block justify-between items-center px-5 py-1">
			<h1 className="text-4xl w-full"><Link href={"/"}>LGJT.XYZ</Link><BreadCrumb/></h1>
			<Nav />
		</header>
	);
}
