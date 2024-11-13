import React from "react";
import Navbar from "./navbar.jsx";
import Jumbo from "./jumbo.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbo/>
			<div className="container mt-4">
				<div className="row">
					<div className="col">
					<Card/>
					</div>
					<div className="col">
					<Card/>
					</div>
					<div className="col">
					<Card/>
					</div>
					<div className="col">
					<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
