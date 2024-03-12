import React, { useReducer, useEffect } from "react";
import axions from "axios";
import axios from "axios";

//Declare initial state
const initialState = {
  loading: true,
  error: "",
  post: {},
};

//Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  //useReducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR"});
      });
  }, []);
  return <div>
    {state.loading ? 'Loading' : state.post.title}
    {state.error ? state.error: null} 
  </div>;
};

export default DataFetchingTwo;
