import React from "react";
import { StyledApp } from "../styles/StyledApp";
import InputScreen from "./InputScreen";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function App() {
	return (
		<StyledApp>
			<GlobalStyles />
			<InputScreen />
		</StyledApp>
	);
}
