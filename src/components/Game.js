import React, { Component } from "react";
import Drawing from "./Drawing";
import Word from "./Word";
import Alphabet from "./Alphabet";
import DialogBox from "./DialogBox";
import Options from "./Options";
import "./Game.css";
import isEqual from "lodash/isEqual";
import has from "lodash/has";
import inRange from "lodash/inRange";

export class Game extends Component {
	state = {
		displayedWord: [],
		displayedDrawing: [],
		words: [],
		currentWord: "",
		endGame: false,
		winner: false,
		dialogBox: false,
		clickedLetters: [],
		loaded: false,
		guesses: 9
	};

	ranges = {
		easy: {
			frequency: [25, Infinity],
			length: [0, 6]
		},
		medium: {
			frequency: [6, 25],
			length: [5, 8]
		},
		hard: {
			frequency: [1, 6],
			length: [7, 12]
		}
	};

	componentDidMount() {
		fetch("data/wordsapi_sample.json")
			.then(res => res.json())
			.then(data =>
				Object.entries(data).map(([word, rest]) => {
					return {
						word,
						...rest
					};
				})
			)
			.then(data => data.filter(word => has(word, "frequency")))
			.then(data =>
				this.setState({
					words: data
				})
			)
			.then(() => this.handleNewGame())
			.then(() => this.setState({ loaded: true }))
			.catch(err => console.log(err));
	}

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
					const {
						displayedWord,
						displayedDrawing,
						currentWord
					} = this.state;
					if (
						displayedDrawing.length === 9 &&
						!isEqual(displayedWord, currentWord)
					) {
						this.handleLose();
					} else if (isEqual(displayedWord, currentWord)) {
						this.handleWin();
					}
				}
			);
		}
	};

	handleNewGame = () => {
		const { level } = this.props;
		const { words } = this.state;

		const wordList = words.filter(word => {
			const { letters, frequency: wordFrequency } = word;
			const { length, frequency } = this.ranges[level];
			return (
				inRange(wordFrequency.perMillion, frequency[0], frequency[1]) &&
				inRange(letters, length[0], length[1])
			);
		});
		const word = wordList[Math.floor(Math.random() * wordList.length)].word;
		const display = Array(word.length).fill();
		this.setState({
			currentWord: word.split(""),
			displayedWord: display,
			displayedDrawing: [],
			clickedLetters: [],
			endGame: false,
			dialogBox: false,
			winner: false,
			guesses: 9
		});
	};

	handleWin = () => {
		this.setState({
			endGame: true,
			dialogBox: true,
			winner: true
		});
	};

	handleLose = () => {
		this.setState({
			endGame: true,
			dialogBox: true
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
		const { displayLevels } = this.props;
		return (
			<div className="game-container">
				<div className="game">
					<div className="drawing-area">
						<p>
							Guesses remaining:{" "}
							<span className="counter">{guesses}</span>
						</p>
						<Drawing display={displayedDrawing} />
					</div>

					<div className="word-area">
						<Word word={displayedWord} />
						<Alphabet
							checkLetter={this.handleCheckLetter}
							clickedLetters={clickedLetters}
						/>

						{loaded ? (
							<Options
								newGame={this.handleNewGame}
								displayLevels={displayLevels}
							/>
						) : (
							<p>Loading</p>
						)}
					</div>
				</div>
				<DialogBox
					winner={winner}
					playAgain={this.handleNewGame}
					displayLevels={displayLevels}
					hideBox={this.handleHideDialogBox}
					currentWord={currentWord}
					dialogBox={dialogBox}
				/>
			</div>
		);
	}
}

export default Game;
