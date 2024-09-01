import React from "react";
import { Container } from "./Container";
import Menu from "./Menu";
import { Title } from "./Title";

export default function Navbar() {
	return (
		<Container>
			<Title />
			<Menu />
		</Container>
	);
}
