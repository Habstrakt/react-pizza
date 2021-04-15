import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";


import {setPizzas} from "./redux/actions/pizzas"


import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {

		const dispatch = useDispatch();


		useEffect(() => {
				axios.get('http://localhost:3001/pizzas').then(({data}) => {
						dispatch(setPizzas(data));
				});
		},[]);
		return (
				<div className="wrapper">
						<Header/>
						<div className="content">
								<Route path="/" component={Home} exact />
								<Route path='/cart' component={Cart} exact/>
						</div>
				</div>
		)
}

export default App;



// class App extends React.Component {
//
// 		componentDidMount() {
// 				axios.get('http://localhost:3000/db.json').then(({data}) => {
// 						this.props.setPizzas(data.pizzas);
// 				});
// 		}
//
// 		render() {
// 				return (
// 						<div className="wrapper">
// 								<Header/>
// 								<div className="content">
// 										<Route path="/" render={() => <Home items={this.props.items}/>} exact/>
// 										<Route path='/cart' component={Cart}/>
// 								</div>
// 						</div>
// 				)
// 		}
// }
//
// const mapStateToProps = (state) => {
// 		return {
// 				items: state.pizzas.items,
// 				filters: state.filters
// 		}
// }
//
// const mapDispatchToProps = dispatch => {
// 		return {
// 				setPizzas: (items) => dispatch(setPizzas(items)), // или просто setPizzas
// 		}
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps) (App);
