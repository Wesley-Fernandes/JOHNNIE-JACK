import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Cart } from "./Cart";
import { Configuration } from "./Configuration";
import { Logout } from "./Logout";
import type { User as USER } from "firebase/auth";

interface Props{
	data: USER
}
export function User({data}:Props) {
	return (
		<div className="flex flex-1 items-end">
			<div className="border w-full py-2 px-2 rounded-md flex flex-col shadow-md">
				<div className="pb-2 flex items-center gap-2">
					<Avatar>
						<AvatarImage src={data?.photoURL as string} alt="User picture"/>
						<AvatarFallback>{String(data?.displayName)[0]||"US"}</AvatarFallback>
					</Avatar>
					<h1 className="font-bold">{data?.displayName}</h1>
				</div>
				<div className=" border-t pt-3">
					<div className="flex items-center gap-2">
						<Configuration />
						<Cart />
						<Logout />
					</div>
				</div>
			</div>
		</div>
	);
}
