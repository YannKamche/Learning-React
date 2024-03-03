import React, { useState } from 'react';

const Array = () => {
    const listOfCountries = [];

    const [list, setList] = useState(listOfCountries);
    const [input, setInput] = useState('');

    const handleChange = e => setInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        // Update List
        setList(prevList => [
            ...prevList,
            {
                id: prevList.length,
                name: input
            }
        ]);
        // Clear input field after submitting
        setInput('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className='input'
                    type="text" 
                    name='country' 
                    value={input}
                    placeholder='Country' 
                    onChange={handleChange}
                />
                <button 
                    className='bg-black text-white ml-4 p-3 rounded-md'
                    type="submit"
                >
                    Add country
                </button>
            </form>
            <div>
                <ul>
                    {list.map(country => (
                        <li key={country.id}>{country.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Array;
