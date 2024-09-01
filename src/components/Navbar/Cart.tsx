import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function Cart() {
	return (
		<Link
			href="/cart"
			className={buttonVariants({ variant: "outline", size: "icon" }).concat(
				" hover:text-red-500",
			)}
		>
			<ShoppingBag strokeWidth={1.2} />
		</Link>
	);
}
