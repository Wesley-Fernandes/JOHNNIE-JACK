"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReturnBack() {
	const { back } = useRouter();

	const turnBack = () => {
		back();
	};
	return (
		<div className="max-w-[90vw] sm:max-w-sm md:max-w-md lg:max-w-lg flex w-full pt-6">
			<Button onClick={turnBack} variant="outline">
				<ArrowLeft strokeWidth={1} /> Voltar
			</Button>
		</div>
	);
}
