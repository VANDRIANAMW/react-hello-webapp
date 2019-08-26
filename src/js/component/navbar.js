import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/Personajes">
					<button className="btn btn-primary">Personajes</button>
				</Link>

				<Link to="/Peliculas">
					<button className="btn btn-primary">Peliculas</button>
				</Link>
				<Link to="/Planetas">
					<button className="btn btn-primary">Planetas</button>
				</Link>
				<Link to="/Vehiculos">
					<button className="btn btn-primary">Vehiculos</button>
				</Link>
				<div className="ml-auto" />
			</nav>
		);
	}
}
