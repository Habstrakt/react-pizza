

const cart = (state, action) => {
		switch (action.type) {
				case 'ADD_PIZZA': {
						return {
								...state,
								addPizza: action.payload
						}
				}
		}
		return state;
}