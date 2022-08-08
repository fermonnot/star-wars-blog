import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useSearchParams} from "react-router-dom";

import { Context } from "../store/appContext";



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
			<h1>Soy el Objeto {person.properties?.name}</h1>
		</div>
			
	);
};

