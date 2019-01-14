import React from "react";
import "./custom-css/Banner.css";
import "bootstrap/dist/css/bootstrap.css";

const Banner = props => (
	<div className="banner-container">
		<div className="row">
			<div className="col-xl">
				 Made by Nhat <i className="fas fa-code" /> 
			</div>
			<div className="col-xl" />
			<div className="col-sm">
			</div>
			<div className="col-sm">
				<i className="fab fa-github-square"> Github</i>
			</div>
			<div className="col-sm">
				<i className="fab fa-linkedin"> LinkedIn</i>
			</div>
			<div className="col-sm">
				<i className="fab fa-twitter-square"> Twitter</i>
			</div>
		</div>
	</div>
);

export default Banner;