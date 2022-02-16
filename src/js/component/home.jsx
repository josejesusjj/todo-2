import React, {useEffect, useState} from "react";


const Home = () => {
	const [users, setUsers] =useState([])

	useEffect(() => {
		fetch("https:gorest.co.in/public/v2/users")
		.then((response) => response.json())
		.then((result) => {

		})
	})
	return (
		<div>
			<h1>Usuarios</h1>
		</div>
	);
};

export default Home;
