import React from 'react';
import Category from "../Components/Category/Category";
import SortPopup from "../Components/SortPopup/SortPopup";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";

const Home = ( {items}) => {
		return (
				<div className="container">
						<div className="content__top">
								<Category items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
								<SortPopup items={[{ name: 'популярности', type: 'popular'}, { name: 'цене', type: 'price'},
										{ name: 'алфавиту', type: 'alphabet'}]}
								/>
						</div>
						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
								{
										items.map(pizzaObj => <PizzaBlock key={pizzaObj.id} {...pizzaObj} />)
								}
						</div>
				</div>
		)
}

export default Home