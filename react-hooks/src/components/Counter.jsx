import React, { useState } from 'react';

const Counter = () => {

    const initialValue = 0;
    const [value, setValue] = useState(initialValue);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return (
        <div className='flex flex-col gap-2'>
            <p className="text-5xl font-bold tracking-wider">Count: {value}</p>
            <div className='flex gap-3'>
                <button className="btn" onClick={increment}>Increment</button>
                <button className='btn' onClick={decrement}>Decrement</button>
                <button className='btn' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
