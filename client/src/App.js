import { useEffect, useState, useCallback } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState({ todo: "" });
	const [loading, setloading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		setloading(true);
		try {
			const res = await fetch("/todos");
			const result = await res.json();
			setloading(false);
			setError(false);
			setTodos(result.data);
			console.log(result);
		} catch (error) {
			console.log(error);
			setError(true);
			setloading(false);
		}
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInput({ [name]: value });
	};

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			const data = await fetch("/todos", {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(input),
			});

			const result = await data.json();
			setInput({ todo: "" });
			return result;
		},
		[input]
	);

	return (
		<div className="container">
			<form className="form-body" onSubmit={handleSubmit}>
				<div className="form-item">
					<input
						type="text"
						onChange={handleChange}
						value={input.todo}
						className="form-input"
						name="todo"
					/>
					<input type="submit" value="Add" className="btn" />
				</div>
			</form>

			{todos &&
				todos.map((todo) => {
					return (
						<div key={todo._id}>
							<h1>{todo.todo}</h1>
						</div>
					);
				})}
			{loading && "loading..."}
		</div>
	);
}

export default App;
