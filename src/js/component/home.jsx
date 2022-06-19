import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from './navbar.jsx';
import Jumbo from './jumbotron.jsx';
import Card from './card.jsx';
import PiePagina from './piepagina.jsx';

//create your first component
const Home = () => {
	// return (
	// 	<div className="text-center">
	// 		<h1 className="text-center mt-5">Hello Rigo!</h1>
	// 		<p>
	// 			<img src={rigoImage} />
	// 		</p>
	// 		<a href="#" className="btn btn-success">
	// 			If you see this green button... bootstrap is working...
	// 		</a>
	// 		<p>
	// 			Made by{" "}
	// 			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
	// 			love!
	// 		</p>
	// 	</div>
	// )
	return (
		<div className="container-fluid p-0 m-0">
			<NavBar />
			<div className="">
				<Jumbo />
			</div>
			<div className="row">
				<div className="col">
				<Card />
				</div>
				<div className="col">
				<Card />
				</div>
				<div className="col">
				<Card />
				</div>
				<div className="col">
				<Card />
				</div>
			</div>
			<div className="">
				<PiePagina />
			</div>
	   </div>
	   );
};

export default Home;
