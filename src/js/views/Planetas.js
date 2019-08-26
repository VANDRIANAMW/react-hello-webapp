import React from "react";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

//import React from "react";
//import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Planetas extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Aqui van los planetas</h1>

				{/*<button className="btn btn-success" onClick={() => actions.changeColor(index, "blue")}>
					Change Color
				 </button> */}

				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
