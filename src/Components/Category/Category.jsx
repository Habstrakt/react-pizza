import React, {useState} from "react";

const Category = ({items}) => {

		const [activeItem, setActiveItem] = useState(null);

		const onSelectItem = (index) => {
				setActiveItem(index);
		}

		return (
				<div className="categories">
						<ul>
								<li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
								{
										items && items.map((name, index) =>
												<li onClick={() => onSelectItem(index)}
														key={`${name}_${index}`}
												className={activeItem === index ? 'active' : ''}
												>
														{name} {index}
												</li>)
								}
						</ul>
				</div>
		)
}

export default Category;