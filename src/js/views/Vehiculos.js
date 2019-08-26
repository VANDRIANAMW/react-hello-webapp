import React from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export class Vehiculos extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Aqui van los vehiculos</h1>

				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
