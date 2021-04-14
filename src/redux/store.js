import {createStore} from "redux";

function counterReducer(state = { value: 0 }, action) {
		switch (action.type) {
				case 'Прибавить':
						return { value: state.value + 1 }
				case 'Отнять':
						return { value: state.value - 1 }
				default:
						return state
		}
}

const store = createStore(counterReducer);

export default store;