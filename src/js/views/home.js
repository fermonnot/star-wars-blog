import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



// my New components//


export const Home = () => {


	const { store, actions,} = useContext(Context);
	// const {name, gender, hair_color, eye_color} = character.properties()

	return (
		<>
			<div className="container m 3">
				<h2 className="my3">Characters</h2>
				<div className="row flex-row flex-nowrap cardScroller">
					{store.people.map((character) => {
						return (
							<div key={character._id} className="card people mx-2" >
								<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
									className="card-img-top pic" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{character.properties.name}</h5>
									<p className="card-text"><b>Gender</b> {character.properties.gender}<br />
										<b>Hair color </b>{character.properties.hair_color}<br />
										<b>Eyes Color </b>{character.properties.eye_color}</p>									
									<div className="buttons">
										< Link to={`/character/${character.uid}`} className="btn btn-primary">Learn More!</Link>
										<button className="btn btn-primary like" 
											type="button"
											onClick={() => {actions.saveFavorite(character._id)}}>
											<i className="far fa-heart"></i>										
										</button>
									</div>
								</div>
							</div>
						);
					})};
				</div>
				<h2>Planets</h2>
				<div className="row flex-row flex-nowrap cardScroller">
				{store.planets.map((planet) => {
						return (
							<div key={planet._id} className="card planet" >
								{planet.uid==1?
								<img src={`https://starwars-visualguide.com/assets/img/planets/${Math.floor(Math.random()*10+2)}.jpg`}
								className="card-img-top pic" alt="..." />:
								<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
									className="card-img-top pic" alt="..." />
								
							
							}
								
								<div className="card-body">
									<h5 className="card-title">{planet.properties.name}</h5>
									<p className="card-text"><b>Diameter</b> {planet.properties.diameter}<br />
										<b>Population</b> {planet.properties.population}</p>							
									<div className="buttons">
										< Link to={`/planet/${planet.uid}`} className="btn btn-primary">Learn More!</Link>
										<button className="btn btn-primary like" 
											type="button"
											onClick={() => {actions.saveFavorite(planet._id)}}>
											<i className="far fa-heart"></i>
										</button>
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
