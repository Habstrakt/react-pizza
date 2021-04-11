import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import axios from "axios";

const App = () => {

		const [pizzas, setPizzas] = useState([]);

		useEffect(() => {
				axios.get('http://localhost:3000/db.json').then(({data}) => {
						setPizzas(data.pizzas);
				});
		}, []);

		return (
				<div className="wrapper">
						<Header/>
						<div className="content">
								<Route path="/" render={() => <Home items={pizzas}  />} exact/>
								<Route path='/cart' component={Cart} />
						</div>
				</div>
		)
}

export default App;
