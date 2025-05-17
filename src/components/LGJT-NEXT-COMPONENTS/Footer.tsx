import { ReactNode } from "react";

export default function Footer({ children }: { children: ReactNode }) {
        return <footer className="px-2 py-1">{children}</footer>;
}
