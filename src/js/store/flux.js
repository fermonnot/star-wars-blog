import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			secondPoint: ["people", "planets"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites:[],
			newFavorites:[],
			newFav:[],
		},
		actions: {

			getCharacter: async () => {
				const store = getStore()
				try {
					if(!store.people.length){

					store.secondPoint.forEach(async (element) => {
						let response = await fetch(`${store.urlBase}/${element}`)
						let data = await response.json();					
						data.results.forEach(async (item) => {
							let responseTwo = await fetch(`${store.urlBase}/${element}/${item.uid}`)
							let results = await responseTwo.json();
						
							setStore({...store, [element]:[...store[element], results.result]});
							localStorage.setItem([element],JSON.stringify(store[element]))
						});
						
					})}


					// if (response.ok) {
					// 	setStore({...store,character: data.results});
					// };
				} catch (error) {
					console.log(error)
				};
				
			},
			
			saveFavorite:(id) => {
	
				let store= getStore();
				let exist= store.favorites.find((item)=> item._id == id)
				if(!exist) {
					for (let secondPoint of store.secondPoint) {
						for(let endPoint of store[secondPoint]) {
							if(endPoint._id == id) {
								setStore({
									...store,
									favorites: [...store.favorites, endPoint]
								})
							}
						}
					}
				} else{
					let newFavorites= store.favorites.filter((item) => item._id != id)
					setStore({
						...store,
						favorites: newFavorites
					}); 
				} 

			},
			
			deleteFav: (id) =>{						
				let store= getStore()
				let newFav= store.favorites.filter((item) => item._id != id)
				setStore({
					...store,
					favorites: newFav
				}); 
			},

			

		

				
			
		}
	};
};

export default getState;
