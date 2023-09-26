import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRandomGreeting } from "../redux/actions/greetingsActions";

const Greeting = ({ randomGreeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h2>Random Greeting:</h2>
      <p>{randomGreeting}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  randomGreeting: state.greeting.randomGreeting,
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
