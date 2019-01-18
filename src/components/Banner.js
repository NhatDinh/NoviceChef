import React from "react";
import "./custom-css/Banner.css";
import "bootstrap/dist/css/bootstrap.css";


const Banner = props => (
	<div className="banner-container">
		<div className="row">
			<div className="col-xl">
				<h2> <i className="fas fa-code" /> by Nhat  </h2>
			</div>
			<div className="col-xl" />
			<div className="col-sm">
			</div>
			<div className="col-sm" >
				 <h3><a href="https://github.com/NhatDinh"><i className="fab fa-github-square"></i> Github</a></h3>
			</div>
			<div className="col-sm">
				<h3><a href="https://www.linkedin.com/in/nhat-dinh/"><i className="fab fa-linkedin"> </i> LinkedIn</a></h3>
			</div>
		</div>
	</div>
);

export default Banner;