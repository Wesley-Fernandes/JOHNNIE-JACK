import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
	href: string;
	children: ReactNode;
}

export function Jumper({ children, href }: Props) {
	return (
		<li className="hover:text-red-500">
			<Link href={href}>{children}</Link>
		</li>
	);
}
