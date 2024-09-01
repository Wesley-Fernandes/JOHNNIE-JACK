import Image from "next/image";
import React from "react";

export default function Loader() {
	return (
		<main className="h-[calc(100vh-3.5rem)] flex items-center justify-center">
			<Image
				src="/loader.gif"
				alt="Loading animation"
				width={200}
				height={100}
				priority
			/>
		</main>
	);
}
