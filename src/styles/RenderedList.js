import styled from "styled-components";

export const RenderedList = styled.ul`
	list-style: none;
	text-align: left;
	display: block;
	width: 80%;
	margin: 0 auto;
	padding-bottom: 40px;
`;

export const ListItem = styled.li`
	border-bottom: 0.5px dashed #999;
	padding: 5px 0;
	text-decoration: ${(props) => (props.status ? "line-through" : "")};
	font-style: ${(props) => (props.status ? "italic" : "")};
	color: ${(props) => (props.status ? "#999" : "")};
	opacity: ${(props) => (props.status ? "0.5" : "")};
`;

export const Button = styled.button`
	padding: 1px;
	width: 25px;
	height: 25px;
	outline: none;
	margin-right: ${(props) => (props.duty === "done" ? "10px" : "")};
	float: ${(props) => (props.duty === "remove" ? "right" : "")};
	font-size: ${(props) => (props.duty === "remove" ? "medium" : "")};
`;
