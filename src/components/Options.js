import React from "react";
import "./Options.css";

function Options(props) {
	const { newGame, displayLevels } = props;
	return (
		<div className="options">
			<button onClick={() => newGame()}>New Word</button>
			<button onClick={() => displayLevels()}>Change Level</button>
		</div>
	);
}

export default Options;
