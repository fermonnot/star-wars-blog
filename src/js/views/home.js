import React from "react";
import "../../styles/home.css";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



// my New components//


export const Home = () => {


	const { store, actions } = useContext(Context);
	// const {name, gender, hair_color, eye_color} = character.properties



	return (
		<>
			<div className="container m 3">
				<h2 className="my3">Characters</h2>
				<div className="row flex-row flex-nowrap cardScroller">
					{store.people.map((character, index) => {
						return (
							<div key={index} className="card people mx-2" >
								<img src="https://www.1999.co.jp/itbig46/10464740.jpg"
									className="card-img-top pic" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{character.properties.name}</h5>
									<p className="card-text"><b>Gender</b> {character.properties.gender}<br />
										<b>Hair color </b>{character.properties.hair_color}<br />
										<b>Eyes Color </b>{character.properties.eye_color}</p>									
									<div className="buttons">
										< Link to={"/demo"} className="btn btn-primary">Learn More!</Link>
										<button className="btn btn-primary like" type="button"><i className="far fa-heart"></i></button>
									</div>
								</div>
							</div>
						);
					})};
				</div>
				<h2>Planets</h2>
				<div className="row flex-row flex-nowrap cardScroller">
				{store.planets.map((planet, index) => {
						return (
							<div key={index} className="card planet" >
								<img src="https://www.1999.co.jp/itbig46/10464740.jpg"
									className="card-img-top pic" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{planet.properties.name}</h5>
									<p className="card-text"><b>Diameter</b> {planet.properties.diameter}<br />
										<b>Population</b> {planet.properties.population}</p>							
									<div className="buttons">
										<a href="#" className="btn btn-primary">Learn More!</a>
										<button className="btn btn-primary like" type="button"><i className="far fa-heart"></i></button>
									</div>
								</div>
							</div>
						);
					})};
				</div>
			</div>
		</>
	);
};
