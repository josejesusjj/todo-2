import React, {useEffect, useState} from "react";


const Home = () => {
	const [users, setUsers] =useState([])

	useEffect(() => {
		fetch("https:gorest.co.in/public/v2/users")
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
			setUsers(result);
		});
	}, []);

	return (
		<div>
			<h1>Usuarios:</h1>
			<ul>
				<li key={1}>{users[1]}</li>;
			</ul>
		</div>
	);
};

export default Home;
