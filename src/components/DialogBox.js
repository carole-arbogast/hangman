import React from "react";
import "./DialogBox.css";

function DialogBox(props) {
	const {
		winner,
		playAgain,
		displayLevels,
		currentWord,
		dialogBox,
		hideBox
	} = props;
	const message = winner ? "Congratulations! " : "Game Over! ";
	return (
		<div
			className={`dialog-container ${
				dialogBox ? "visible-box" : "hidden"
			}`}
		>
			<div className="dialog-box">
				<i class="fas fa-times-circle" onClick={() => hideBox()} />
				<h1>{message}</h1>
				<h4>The word was: {currentWord}</h4>
				<button onClick={() => playAgain()}>Play Again</button>
				<button onClick={() => displayLevels()}>Change Level</button>
			</div>
		</div>
	);
}

export default DialogBox;
