import React from "react";
import "./custom-css/Footer.css";
import "bootstrap/dist/css/bootstrap.css";

//minimal styling for site description
const divStyle = {
	fontWeight: "8",
	fontFamily: "Arial",
	fontSize: "18px"
};

const Footer = props => (
	<div className="footer-container">
		<div className="row">
			<div className="col-xl">
				<h2>
					<strong>Novice Chef:</strong>
				</h2>
				<p style={divStyle}>
					Having to do grocery shopping before, I repeatedly went
					through the {"\n"}
					tiresome process of finding the right ingredients, making
					notes and marking it off of {"\n"}
					my notes, and still manage to forget stuff. That's why I
					decided to {"\n"}
					make Novice Chef.
				</p>
			</div>

			<div className="col tribute" style={divStyle}>
				<h5>
					{" "}
					Stack:{" "}
					<i className="fas fa-plug">
						{" "}
						ReactJS, NodeJS, a dash of Bootstrap and lots of CSS
						tricks.
					</i>
				</h5>
				<h5>
					Say <i className="fas fa-hand-peace" /> @ {"  "}
					<a href="https://twitter.com/nhat_ldinh">
						<i className="fab fa-twitter" />
					</a>
					{"    "} <i className="fas fa-arrows-alt-h" />
					{"     "}
					<a href="https://www.linkedin.com/in/nhat-dinh/">
						<i className="fab fa-linkedin-in" />
					</a>
					{"    "} <i className="fas fa-arrows-alt-h" />
					{"     "}
					<a href="https://github.com/NhatDinh">
						<i className="fab fa-github-alt" />
					</a>
				</h5>
			</div>
		</div>
	</div>
);

export default Footer;