import React from "react";
import Letter from "./Letter";
import "./Alphabet.css";

const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z"
];

function Alphabet(props) {
	return (
		<div className="alphabet">
			{alphabet.map((letter, i) => (
				<Letter
					key={i}
					letter={letter}
					checkLetter={props.checkLetter}
					clickedLetters={props.clickedLetters}
				/>
			))}
		</div>
	);
}

export default Alphabet;
