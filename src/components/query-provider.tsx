"use client";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
	children: ReactNode;
}
export default function QueryProvider({ children }: Props) {
	const client = new QueryClient();
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
