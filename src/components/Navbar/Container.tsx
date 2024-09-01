import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
export function Container({ children }: Props) {
	return (
		<nav className="h-14 border-b flex justify-between px-3 items-center">
			{children}
		</nav>
	);
}
