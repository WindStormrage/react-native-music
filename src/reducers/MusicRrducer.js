
export const initialState = {
	isplay: false
}

export reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PLAY' :
			let play = !state.isplay;
			return (
				isplay: play
			);
		default:
			return initialState;
	}
};
