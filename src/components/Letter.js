import React from "react";
import "./Letter.css";

function Letter(props) {
	const { checkLetter, letter, clickedLetters } = props;
	const clicked = clickedLetters.includes(letter.toLowerCase());
	return (
		<div
			className={`letter-box ${clicked ? "disabled" : ""}`}
			onClick={() => checkLetter(letter)}
		>
			{letter}
		</div>
	);
}

export default Letter;
