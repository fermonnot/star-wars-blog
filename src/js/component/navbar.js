import React from "react";
import { Link } from "react-router-dom";
import starLogo from "../../img/star.png"
// import star.png from "../"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 p-2 picStar"><img src={starLogo}/></span>
			</Link>
			<div className="dropdown m-2">
			<button className="btn btn-secondary dropdown-toggle" 
				type="button" 
				data-bs-toggle="dropdown" 
				aria-expanded="false">

				Favourites
				
			</button>
			<ul className="dropdown-menu">
				<li><a className="dropdown-item" href="#">Action</a></li>
				<li><a className="dropdown-item" href="#">Another action</a></li>
				<li><a className="dropdown-item" href="#">Something else here</a></li>
			</ul>
			</div>
			{/* este es para el button de ir a mas */}
			{/* <div className="ml-auto"> 
				<Link to="/demo">
					<button className="btn btn-primary ">Favourites</button>
				</Link>
			</div> */}
		</nav>
	);
};
