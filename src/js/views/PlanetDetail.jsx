import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
	let params= useParams()
	const {planet_uid,planet_name} = params;
	
	const[planet, setPlanet]=useState({})

	
	const getDetail= () =>{
		let result = store.planets.find((item)=> item.uid == planet_uid)
		if(result){setPlanet(result)}

	}
	useEffect(()=>{
		getDetail()
	},[store.planet])

	return (
		<div className="container">
			<h1>Soy el Objeto {planet.properties?.name}</h1>
		</div>
			
	);
};







// props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// PlanetDetail.propTypes = {
// 	match: PropTypes.object
// };
