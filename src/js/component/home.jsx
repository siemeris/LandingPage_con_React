import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from './navbar.jsx';
import Jumbo from './jumbotron.jsx';
import Card from './card.jsx';
import PiePagina from './piepagina.jsx';

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<div><NavBar /></div>
			<div className="row mx-5 mt-4 mb-4 p-0">
				<Jumbo />
			</div>
			<div className="mx-5 mb-4 d-flex justify-content-between">
				
				<Card title="Card1" description="Nulla facilisi. Integer porta venenatis eros porttitor consectetur. Aliquam erat volutpat. In pretium urna dolor, sed interdum ligula suscipit non." buttonLabel="Find Out More!" />
				
				<Card title="Card2" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." buttonLabel="Find Out More!" />
				
				<Card title="Card3" description="Vivamus quis porttitor massa. Ut in metus eu purus gravida facilisis et in ligula. Proin dapibus, nunc at scelerisque hendrerit." buttonLabel="Find Out More!"/>
				
				<Card title="Card4" description="Integer convallis sollicitudin pretium. Donec tincidunt mi sed quam sodales, sit amet pretium massa convallis. Praesent placerat molestie odio eget." buttonLabel="Find Out More!"/>
				
			</div>
			<div className="">
				<PiePagina />
			</div>
	   </div>
	   );
};

export default Home;
