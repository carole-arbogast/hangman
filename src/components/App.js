import React, { Component } from "react";
import Game from "./Game";
import WelcomeBox from "./WelcomeBox";
import "./App.css";

class App extends Component {
	state = {
		level: "",
		welcomeBox: true
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
				{(welcomeBox && (
					<WelcomeBox pickLevel={this.handlePickLevel} />
				)) || (
					<Game
						level={level}
						displayLevels={this.handleDisplayLevels}
					/>
				)}
			</div>
		);
	}
}

export default App;
