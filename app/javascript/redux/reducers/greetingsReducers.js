const initialState = {
  randomGreeting: "",
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RANDOM_GREETING":
      return { ...state, randomGreeting: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
