import React from "react";
import "./Word.css";

function Word(props) {
	return (
		<div className="word">
			{props.word.map((letter, i) => (
				<div key={i} className="letter">
					{letter}
				</div>
			))}
		</div>
	);
}

export default Word;
