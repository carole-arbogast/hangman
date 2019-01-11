import React, { Component } from "react";
import "./Drawing.css";

export class Drawing extends Component {
	render() {
		const { display } = this.props;
		return (
			<div className="drawing">
				<div id="guess-3" className={`drawing-line ${display[2]}`} />
				<div className="vertical">
					<div
						id="guess-2"
						className={`drawing-line ${display[1]}`}
					/>

					<div className="hanging">
						<div
							id="guess-4"
							className={`drawing-line ${display[3]}`}
						/>
						<div className="person">
							<div
								id="guess-5"
								className={
									display[4] === "visible" ? "head" : ""
								}
							/>
							<div
								id="guess-6"
								className={`drawing-line ${display[5]}`}
							/>
							<div
								id="guess-9"
								className={`drawing-line ${display[8]}`}
							/>
							<div className="legs">
								<div
									id="guess-7"
									className={`drawing-line ${display[6]}`}
								/>
								<div
									id="guess-8"
									className={`drawing-line ${display[7]}`}
								/>
							</div>
						</div>
					</div>
				</div>
				<div id="guess-1" className={`drawing-line ${display[0]}`} />
			</div>
		);
	}
}

export default Drawing;
