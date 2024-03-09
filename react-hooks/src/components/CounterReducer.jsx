import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return ++state;
        case 'decrement':
            return --state;
        case 'reset':
            return initialState
        default:
            return state
    }
}
const CounterReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
      {count}
      <button className="" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button className="" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button className="" onClick={() => dispatch("reset")}>
        Reset
      </button>

      {count2}
      <button className="" onClick={() => dispatchTwo("increment")}>
        Increment
      </button>
      <button className="" onClick={() => dispatchTwo("decrement")}>
        Decrement
      </button>
      <button className="" onClick={() => dispatchTwo("reset")}>
        Reset
      </button>
    </div>
  );
}

export default CounterReducer
