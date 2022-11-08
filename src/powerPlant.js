export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

export const storeState = (initialState) => {
	let currentState = initialState;
	return (stateChangeFunction) => {
		const newState = stateChangeFunction(currentState);
		currentState = {...newState};
		return newState;
	}
}

export const stateControl = storeState();

export const feed = changeState("soil")(2);
export const megaFeed = changeState("soil")(5);
export const megaHydrate = changeState("water")(10);
export const imbuePsychic = changeState("psychicAbility");
