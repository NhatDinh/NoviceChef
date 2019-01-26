import React from "react";
import "./custom-css/Banner.css";
import "bootstrap/dist/css/bootstrap.css";

const Banner = props => (
	<div className="banner-container">
			<h3>
				{"     "}
				Say <i className="fas fa-hand-peace" /> @ {"  "}
				<a href="https://github.com/NhatDinh">
					<i className="fab fa-github-square" /> Github
				</a>{"    "}
				{"     "}
				<a href="https://www.linkedin.com/in/nhat-dinh/">
					<i className="fab fa-linkedin"> </i> LinkedIn
				</a>
			</h3>
	</div>
);

export default Banner;