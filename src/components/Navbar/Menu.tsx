import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Links } from "./Links";
import { User } from "./User";
export default function Menu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="outline">
					<AlignJustify />
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-1 flex-col">
				<SheetHeader>
					<SheetTitle>MENU</SheetTitle>
				</SheetHeader>
				<Links />
				<User />
			</SheetContent>
		</Sheet>
	);
}
