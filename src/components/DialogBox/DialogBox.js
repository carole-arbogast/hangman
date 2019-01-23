import React from "react";
import "./DialogBox.css";
import "../Buttons.css";

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
				<i className="fas fa-times-circle" onClick={() => hideBox()} />
				<h1>{message}</h1>
				<h4>
					The word was: <span>{currentWord}</span>
				</h4>
				<div className="options">
					<button className="blue-btn" onClick={() => playAgain()}>
						Play Again
					</button>
					<button
						className="blue-btn"
						onClick={() => displayLevels()}
					>
						Change Level
					</button>
				</div>
			</div>
		</div>
	);
}

export default DialogBox;
