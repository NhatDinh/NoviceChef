import React from "react";
import { Link } from "react-router-dom";

import "./custom-css/Header.css";

const Header = props => (
	<div className="App">
		<span>
			<Link to="/">
				<header className="App-header">
					<h1 className="App-title">
						{" "}
						Novice Chef <i className="fas fa-fire" />
					</h1>
				</header>
			</Link>
		</span>
	</div>
);

export default Header;