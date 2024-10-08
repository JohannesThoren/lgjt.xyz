import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex dark:[&>a:hover]:bg-stone-800 [&>a]:py-1 [&>a]:px-2 [&>a]:block [&>a]:rounded-md gap-1">
			<Link href={"/Contact"}>Contact</Link>
			<Link href={"/About"}>About</Link>
		</nav>
	);
}
