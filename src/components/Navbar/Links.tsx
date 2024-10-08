import { CupSoda, LayoutDashboard, Sandwich } from "lucide-react";
import React from "react";
import { Jumper } from "./Jumper";

export function Links() {
	return (
		<ul className="flex flex-col gap-2 pt-4">
			<Jumper href="/">
				<div className="flex items-center gap-2">
					<LayoutDashboard strokeWidth={1.2} />
					<span>Inicio</span>
				</div>
			</Jumper>
			<Jumper href="/foods?type=Lanches">
				<div className="flex items-center gap-2">
					<Sandwich strokeWidth={1.2} />
					<span>Lanches</span>
				</div>
			</Jumper>
			<Jumper href="/foods?type=Bebidas">
				<div className="flex items-center gap-2">
					<CupSoda strokeWidth={1.2} />
					<span>Bebidas</span>
				</div>
			</Jumper>
		</ul>
	);
}
