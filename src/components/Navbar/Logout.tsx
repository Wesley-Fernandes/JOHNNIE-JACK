import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export function Logout() {
	return (
		<Button size="icon" variant="destructive" className="flex flex-1">
			<div className="flex items-center gap-2">
				<LogOut />
				<span>Sair</span>
			</div>
		</Button>
	);
}
