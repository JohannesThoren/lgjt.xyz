import { ReactNode } from "react";

export default function Nav({
    id,
    className,
    children,
}: {
    id?: string;
    className?: string;
    children?: ReactNode;
}) {
    return (
        <nav id={id} className={`flex dark:[&>a:hover]:bg-stone-800 [&>a]:py-1 [&>a]:px-2 [&>a]:block [&>a]:rounded-md gap-1 w-full sm:justify-end justify-between ${className}`}>
            {children}
        </nav>
    );
}
