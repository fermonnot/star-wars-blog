import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			urlBase: "https://www.swapi.tech/api",
			secondPoint: ["people", "planets"],
			people: [],
			planets: [],
		},
		actions: {

			getCharacter: async () => {
				const store = getStore()
				try {
					store.secondPoint.forEach(async (element) => {
						let response = await fetch(`${store.urlBase}/${element}`)
						let data = await response.json();					
						data.results.forEach(async (item) => {
							let responseTwo = await fetch(`${store.urlBase}/${element}/${item.uid}`)
							let results = await responseTwo.json();
						
							setStore({...store, [element]:[...store[element], results.result]});
						});
					})

					// if (response.ok) {
					// 	setStore({...store,character: data.results});
					// };
				} catch (error) {
					console.log(error)
				};
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
