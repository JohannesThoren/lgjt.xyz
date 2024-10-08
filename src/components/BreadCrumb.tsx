"use client";
import { usePathname } from "next/navigation";

export function BreadCrumb() {
	const path = usePathname();

	return <span className="text-4xl dark:text-stone-400 text-stone-600">{path}</span>;
}
