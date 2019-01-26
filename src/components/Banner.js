import React from "react";
import "./custom-css/Banner.css";
import "bootstrap/dist/css/bootstrap.css";

const Banner = props => (
	<div className="banner-container">
		<h3>
			{"     "}
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
		</h3>
	</div>
);

export default Banner;