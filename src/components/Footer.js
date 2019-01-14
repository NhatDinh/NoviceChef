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
					tiresome process of finding the right ingredients, marking
					it out of {"\n"}
					shopping list, and still forgetting stuff. That's why I
					decided to {"\n"}
					build Novice Chef, a To-do/ Ingredients app.
				</p>
			</div>
			<div className="col-md tribute" style={divStyle} >
			<h5> Powered by <i className="fas fa-tape"> Food2Fork API </i></h5>
			<h5>Stack: <i className="fas fa-plug"> ReactJS,  ExpressJS,  MongoDB, NodeJS </i></h5>
			<h5> Animation by <i className="fab fa-dribbble-square"> Dribble </i></h5>
		
			</div>
			</div>
		</div>
);

export default Footer;