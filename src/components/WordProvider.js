import React, { Component } from "react";
import has from "lodash/has";
import inRange from "lodash/inRange";

export class WordProvider extends Component {
	state = {
		words: []
	};

	componentDidMount() {
		fetch("data/wordsapi_sample.json")
			.then(res => res.json())
			.then(data =>
				Object.entries(data).map(([word, rest]) => {
					return { word, ...rest };
				})
			)
			.then(words => words.filter(word => has(word, "frequency")))
			.then(words =>
				words.filter(word => {
					const { letters, frequency: wordFrequency } = word;
					const { length, frequency } = this.props;
					return (
						inRange(
							wordFrequency.perMillion,
							frequency[0],
							frequency[1]
						) && inRange(letters, length[0], length[1])
					);
				})
			)
			.then(words => this.setState({ words: words }));
	}

	render() {
		return <div>{this.props.render(this.state.words)}</div>;
	}
}

export default WordProvider;
