import React from "react";
import "./WelcomeBox.css";
import "./Buttons.css";
import Hangman from "../hangman.png";

function WelcomeBox(props) {
	return (
		<div className="welcome-box-wrapper">
			<div className="welcome-box">
				<img className="hangman-img" src={Hangman} alt="" />
				<div className="pick-level">
					<h3>Pick your level </h3>
					<div className="levels-list">
						<button
							className="blue-btn"
							onClick={() => props.pickLevel("easy")}
						>
							Easy
						</button>
						<button
							className="blue-btn"
							onClick={() => props.pickLevel("medium")}
						>
							Medium
						</button>
						<button
							className="blue-btn"
							onClick={() => props.pickLevel("hard")}
						>
							Hard
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeBox;
