import React from "react";

function WelcomeBox(props) {
	return (
		<div className="box-wrapper">
			<div className="welcome-box">
				<h1>Welcome! </h1>
				<h3>Choose your difficulty level: </h3>
				<ul>
					<li onClick={() => props.pickLevel("easy")}>Easy</li>
					<li onClick={() => props.pickLevel("medium")}>Medium</li>
					<li onClick={() => props.pickLevel("hard")}>Hard</li>
				</ul>
			</div>
		</div>
	);
}

export default WelcomeBox;
