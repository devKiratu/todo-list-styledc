import React, { useState } from "react";
import DisplayBoard from "./DisplayBoard";
import { Form, Label, Input, FormButton } from "../styles/Form";

export default function InputScreen() {
	const [todo, setTodo] = useState("");
	const [todoItems, setTodoItems] = useState([]);

	function handleSubmit(e) {
		console.log("I was clicked");
		e.preventDefault();
		if (todo === "") return;
		setTodoItems([
			...todoItems,
			{ todoItem: todo, id: Date.now(), completed: false },
		]);

		setTodo("");
	}

	// console.log(todoItems);

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="todo-item">Enter your todo items below</Label>
				<Input
					type="text"
					name="todo-item"
					id="todo-item"
					placeholder="What do you want to do?"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<FormButton type="submit">Add</FormButton>
			</Form>
			<DisplayBoard items={todoItems} setTodoItems={setTodoItems} />
		</div>
	);
}
