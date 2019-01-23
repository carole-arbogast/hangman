import React, { Component } from "react";
import DrawingArea from "../DrawingArea/DrawingArea";
import WordArea from "../WordArea/WordArea";
import DialogBox from "../DialogBox/DialogBox";
import "./Game.css";
import isEqual from "lodash/isEqual";

export class Game extends Component {
	state = {
		displayedWord: [],
		displayedDrawing: [],
		currentWord: "",
		endGame: false,
		winner: false,
		dialogBox: false,
		clickedLetters: [],
		loaded: false,
		guesses: 9
	};

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.handleNewGame();
		}
	}

	generateWord = () => {
		const { words } = this.props;
		const word = words[Math.floor(Math.random() * words.length)].word;
		return word;
	};

	handleNewGame = () => {
		const word = this.generateWord().split("");
		const display = Array(word.length).fill();
		this.setState({
			currentWord: word,
			displayedWord: display,
			displayedDrawing: [],
			clickedLetters: [],
			endGame: false,
			dialogBox: false,
			winner: false,
			guesses: 9,
			loaded: true
		});
	};

	handleCheckLetter = letter => {
		const guess = letter.toLowerCase();
		const { clickedLetters, endGame } = this.state;

		if (!clickedLetters.includes(guess) && !endGame) {
			const {
				displayedWord,
				displayedDrawing,
				currentWord,
				clickedLetters,
				guesses
			} = this.state;

			const newWord = currentWord.map((letter, i) =>
				letter === guess ? letter : displayedWord[i]
			);

			const newDrawing = isEqual(displayedWord, newWord)
				? [...displayedDrawing, "visible"]
				: [...displayedDrawing];

			const count = isEqual(displayedWord, newWord)
				? guesses - 1
				: guesses;

			this.setState(
				{
					displayedWord: newWord,
					displayedDrawing: newDrawing,
					clickedLetters: [...clickedLetters, guess],
					guesses: count
				},
				() => {
					this.handleCheckWinner();
				}
			);
		}
	};

	handleCheckWinner = () => {
		const { displayedWord, displayedDrawing, currentWord } = this.state;
		if (
			displayedDrawing.length === 9 &&
			!isEqual(displayedWord, currentWord)
		) {
			this.handleWin(false);
		} else if (isEqual(displayedWord, currentWord)) {
			this.handleWin(true);
		}
	};

	handleWin = result => {
		this.setState({
			endGame: true,
			dialogBox: true,
			winner: result
		});
	};

	handleHideDialogBox = () => {
		this.setState({
			dialogBox: false
		});
	};

	render() {
		const {
			displayedWord,
			displayedDrawing,
			winner,
			dialogBox,
			clickedLetters,
			currentWord,
			loaded,
			guesses
		} = this.state;
		const { handleDisplayLevels } = this.props;
		return (
			<div className="game-container">
				<div className="game">
					<DrawingArea
						guesses={guesses}
						displayedDrawing={displayedDrawing}
					/>

					<WordArea
						loaded={loaded}
						clickedLetters={clickedLetters}
						displayedWord={displayedWord}
						checkLetter={this.handleCheckLetter}
						newGame={this.handleNewGame}
						displayLevels={handleDisplayLevels}
					/>
				</div>
				<DialogBox
					winner={winner}
					playAgain={this.handleNewGame}
					displayLevels={handleDisplayLevels}
					hideBox={this.handleHideDialogBox}
					currentWord={currentWord}
					dialogBox={dialogBox}
				/>
			</div>
		);
	}
}

export default Game;
