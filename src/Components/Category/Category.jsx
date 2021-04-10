import React from "react";

const Category = ({items}) => {
		return (
				<div className="categories">
						<ul>
								<li className="active">Все</li>
								{
									items.map((name, index) => <li key={`${name}_${index}`}>{name} {index}</li>)
								}
						</ul>
				</div>
		)
}

export default Category;