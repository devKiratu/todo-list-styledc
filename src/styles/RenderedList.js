import styled, { css } from "styled-components";

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
	${(props) =>
		props.completed &&
		css`
			text-decoration: line-through;
			font-style: italic;
			color: #999;
			opacity: 0.5;
		`};
`;

export const Button = styled.button`
	padding: 1px;
	width: 25px;
	height: 25px;
	outline: none;
	${(props) =>
		props.done &&
		css`
			margin-right: 10px;
		`}
	${(props) =>
		props.remove &&
		css`
			float: right;
			font-size: medium;
		`}
`;
