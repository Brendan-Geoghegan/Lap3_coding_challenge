import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserResult } from "../../actions";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
	const [formData, setFormData] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getUserResult(formData));
		navigate("/user");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">Enter username:</label>
			<br />
			<input
				type="text"
				placeholder="GitHub Username"
				id="username"
				onChange={(e) => setFormData(e.target.value)}
			/>
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
};

export default UserForm;
