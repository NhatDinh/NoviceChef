import React from "react";
import "./custom-css/Form.css";

const Form = props => (
	<div className="form-container">
	<form className="form-section" onSubmit={props.getRecipe} >
		<input className="custom-input" type="text" name="recipeName" placeholder="Search By Ingredients or Name"/>
		<button className="btn-hover color-1">Search</button>
	</form>
	</div>
);

export default Form;