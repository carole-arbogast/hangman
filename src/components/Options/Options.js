import React from "react";
import "../Buttons.css";
import "./Options.css";

function Options(props) {
	const { newGame, displayLevels } = props;
	return (
		<div className="options">
			<button className="blue-btn" onClick={() => newGame()}>
				New Word
			</button>
			<button className="blue-btn" onClick={() => displayLevels()}>
				Change Level
			</button>
		</div>
	);
}

export default Options;
