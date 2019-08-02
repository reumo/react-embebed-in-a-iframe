import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [country, setCountry] = useState("EN");
	const [car, setCar] = useState("Ferrari");

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("country")) {
			setCountry(urlParams.get("country"));
		}
		if (urlParams.has("car")) {
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
