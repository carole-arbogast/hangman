import React from "react";
import Drawing from "../Drawing/Drawing";
import "./DrawingArea.css";

function DrawingArea(props) {
	const { displayedDrawing, guesses } = props;
	return (
		<div className="drawing-area">
			<p>
				Guesses remaining: <span className="counter">{guesses}</span>
			</p>
			<Drawing display={displayedDrawing} />
		</div>
	);
}

export default DrawingArea;
