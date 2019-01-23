import React, { Component } from "react";
import Game from "../Game/Game";
import WordProvider from "../WordProvider";
import WelcomeBox from "../WelcomeBox/WelcomeBox";
import "./App.css";

class App extends Component {
	state = {
		level: "",
		welcomeBox: true
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

	handlePickLevel = level => {
		this.setState({
			level: level,
			welcomeBox: false
		});
	};

	handleDisplayLevels = () => {
		this.setState({
			welcomeBox: true
		});
	};
	render() {
		const { level, welcomeBox } = this.state;
		return (
			<div className="App">
				<h1>Hangman</h1>
				{(welcomeBox && (
					<WelcomeBox pickLevel={this.handlePickLevel} />
				)) || (
					<WordProvider
						frequency={this.ranges[level].frequency}
						length={this.ranges[level].length}
						render={words => (
							<Game
								words={words}
								handleDisplayLevels={this.handleDisplayLevels}
							/>
						)}
					/>
				)}
			</div>
		);
	}
}

export default App;
