"use client";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

interface Props {
	children: ReactNode;
}
export default function QueryProvider({ children }: Props) {
	const client = new QueryClient();
	return (
	<QueryClientProvider client={client}>
		<Toaster />
		{children}
	</QueryClientProvider>)
}
