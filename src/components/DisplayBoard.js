import React from "react";
import { RenderedList, ListItem, Button } from "../styles/RenderedList";

export default function DisplayBoard({ items, setTodoItems }) {
	const handleDoneBtn = (item) => {
		setTodoItems(
			items.map((val) => {
				if (val.id === item.id) {
					return {
						...val,
						completed: !val.completed,
					};
				}
				return val;
			})
		);
	};

	const handleRemoveBtn = (item) => {
		// console.log(item);
		setTodoItems(items.filter((val) => val.id !== item.id));
	};

	return (
		<RenderedList>
			{items.map((item) => (
				<ListItem key={item.id} completed={item.completed ? true : false}>
					<Button done onClick={() => handleDoneBtn(item)}>
						{item.completed ? "↩" : "✔"}
					</Button>
					{item.todoItem}
					<Button remove onClick={() => handleRemoveBtn(item)}>
						x
					</Button>
				</ListItem>
			))}
		</RenderedList>
	);
}
