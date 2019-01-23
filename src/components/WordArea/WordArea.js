import React from "react";
import Word from "../Word/Word";
import Alphabet from "../Alphabet/Alphabet";
import Options from "../Options/Options";

function WordArea(props) {
	const {
		displayedWord,
		clickedLetters,
		loaded,
		checkLetter,
		newGame,
		displayLevels
	} = props;
	return (
		<div className="word-area">
			<Word word={displayedWord} />
			<Alphabet
				checkLetter={checkLetter}
				clickedLetters={clickedLetters}
			/>

			{loaded ? (
				<Options newGame={newGame} displayLevels={displayLevels} />
			) : (
				<p>Loading</p>
			)}
		</div>
	);
}

export default WordArea;
