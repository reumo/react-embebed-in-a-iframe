import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	//Create States
	const [country, setCountry] = useState("EN");
	const [car, setCar] = useState("Ferrari");

  //Load queryParams values in the states
	useEffect(() => {

    //Intance inteface with Query Params
    const urlParams = new URLSearchParams(window.location.search);

    //Verify if exist country queryParam
		if (urlParams.has("country")) {
      //Set country in the state
			setCountry(urlParams.get("country"));
    }
    
    //Verify if exist car queryParam
		if (urlParams.has("car")) {
      //Set country in the state
			setCar(urlParams.get("car"));
    }
    
	}, []);

	return (
		<div className="App">
			<header className="App-header">
        <h2>Received Values:</h2>
				<h2>country: {country}</h2>
				<h2>car: {car}</h2>
			</header>
		</div>
	);
}

export default App;
