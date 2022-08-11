import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starLogo from "../../img/star.png"
import { Context } from "../store/appContext";
import "../../styles/nav.css";


export const Navbar = () => {
	const{store, actions} = useContext(Context)
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 p-2 picStar"><img src={starLogo}/></span>
			</Link>
			<div className="dropdown mx-5">
				<button className="btn btn-secondary dropdown-toggle" 
				type="button" 
				data-bs-toggle="dropdown" 
				aria-expanded="false">

				Favourites {store.favorites.length}
				
				</button>
				<ul className="dropdown-menu mt-1">
				{store.favorites.length > 0 ?
				(store.favorites.map((item) => {
					return (
						<div className="favList d-flex justify-content-around align-items-center">
							<li key={item._id}><b>{item.properties.name}</b>
														
							
							
							</li>
							<i className="fas fa-trash close"
								type="button"
								onClick={()=> actions.deleteFav(item._id)}
							></i>
						</div>
						
					)
				}))
				: "Empty"}
				
			
			</ul>
			</div>
			
		</nav>
	);
};
