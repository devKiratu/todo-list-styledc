import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}


body {
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	background-color: oldlace;
	width: 60%;
	min-width: 70vw;
	text-align: center;
	margin: 0 auto;
	margin-top: 50px;
}

`;
