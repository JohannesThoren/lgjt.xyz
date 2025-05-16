import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex dark:[&>a:hover]:bg-stone-800 [&>a]:py-1 [&>a]:px-2 [&>a]:block [&>a]:rounded-md gap-1 w-full sm:justify-end justify-between">
			<Link href={"/contact"}>Contact</Link>
			<Link href={"/about"}>About</Link>
			<Link href={"/blog"}>Blog</Link>
			<Link href={"/links"}>Links</Link>
		</nav>
	);
}
