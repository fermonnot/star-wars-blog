import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Detail from "../../img/Detail.jpg";




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
			<div className="imag d-flex shadow-lg" >
				<img src={Detail} alt="" />
				<div className="title">				
				<h2><b> {planet.properties?.name}</b></h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Voluptate saepe illum quidem porro recusandae deserunt omnis dolores corrupti architecto. Voluptas expedita, 
					eveniet perferendis reprehenderit asperiores quis ex numquam possimus laudantium animi voluptatibus autem. 
					Magni autem impedit velit voluptate sapiente dolorum incidunt fugit aliquam aliquid. Quaerat, corrupti dolorum 
					cum velit praesentium quidem quod quasi repellat magnam saepe, voluptate eligendi quibusdam rem tempora neque 
					rerum soluta architecto, expedita consequuntur! Doloribus, dolores maiores provident animi nobis, molestias 
					fugit repellendus molestiae error quas sint ipsa similique, doloremque quidem dolore repudiandae harum unde. 
					Sequi beatae odio optio amet ea minima laboriosam, facilis itaque dolorum unde..</p>
				</div>
			</div>
			<div className="description d-flex ">
				<div className="text 1">					
					<h5><b>Diameter:</b> {planet.properties?.diameter}</h5>					
				</div>
				<div className="text 2">
					<h5><b>Population:</b> {planet.properties?.population}</h5>
					<h5><b>Climate:</b> {planet.properties?.climate}</h5>
				</div>
				<div className="text 3">
					<h5><b>Terrain:</b> {planet.properties?.terrain}</h5>
					<h5><b>Gravity:</b> {planet.properties?.gravity}</h5>
				</div>
				<div className="text 4">
					<h5><b>Surface Water:</b> {planet.properties?.surface_water}</h5>					
				</div>
			</div>			
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
