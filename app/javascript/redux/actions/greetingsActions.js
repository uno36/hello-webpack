export const fetchRandomGreeting = () => {
  return (dispatch) => {
    return fetch("/api/random_greeting")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "SET_RANDOM_GREETING", payload: data.greeting })
      );
  };
};
