import React from "react";
import "./custom-css/Footer.css";
import "bootstrap/dist/css/bootstrap.css";

//minimal styling for site description
const divStyle = {
	fontWeight:"8",
	fontFamily: "Arial",
	fontSize:"18px"
};

const Footer = props => (
	<div className="footer-container">
	<div className="row">
		<div className="col-xl">
				<h2><strong>Novice Chef:</strong></h2>
				<p style={divStyle}>
					Having to do grocery shopping before, I repeatedly went through
					the {"\n"}
					tiresome process of finding the right ingredients, making notes and marking
					it off of {"\n"}
					my notes, and still manage to forget stuff. That's why I
					decided to {"\n"}
					build Novice Chef, an Ingredients Search and Checklist app.
				</p>
			</div>
			<div className="col tribute" style={divStyle} >
			<h5> Powered by <i className="fas fa-tape"> Food2Fork API and Edamam API </i></h5>
			<h5> Stack: <i className="fas fa-plug"> ReactJS, NodeJS, a dash of Bootstrap and lots of CSS tricks </i></h5>
			</div>
			</div>
		</div>
);

export default Footer;