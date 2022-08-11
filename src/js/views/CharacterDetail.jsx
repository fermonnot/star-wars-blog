import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useSearchParams} from "react-router-dom";

import { Context } from "../store/appContext";
import Detail from "../../img/Detail.jpg";
import  "../../styles/characterD.css";


export const CharacterDetail = () => {
	const { store, actions } = useContext(Context);
	let params= useParams()
	const {character_uid,character_name} = params;
	
	const[person, setPerson]=useState({})

	
	const getDetail= () =>{
		let result = store.people.find((item)=> item.uid == character_uid)
		if(result!= undefined){setPerson(result)}

	}
	useEffect(()=>{
		getDetail()
	},[store.people])

	return (
		<div className="container">
			<div className="imag d-flex shadow-lg" >
				<img src={Detail} alt="" />
				<div className="title">				
				<h2><b> {person.properties?.name}</b></h2>
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
					<h4><b>Hair Color:</b> {person.properties?.hair_color}</h4>					
				</div>
				<div className="text 2">
					<h4><b>Gender:</b> {person.properties?.gender}</h4>
					<h4><b>Eyes Color:</b> {person.properties?.eye_color}</h4>
				</div>
				<div className="text 3">
					<h4><b>Birth year:</b> {person.properties?.birth_year}</h4>
					<h4><b>Height:</b> {person.properties?.height}</h4>
				</div>
				<div className="text 4">
					<h4><b>Mass:</b> {person.properties?.mass}</h4>
				</div>
			</div>			
		</div>			
	);
};

