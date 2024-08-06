import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [data, setData] = useState(null);
    console.log("data", data);

    useEffect(() => {
        setTimeout(() => {
            setData('Data fetched from API');
        }, 1000); 
    }, [data]); 

    return (
        <div>
            <h2>Example Component</h2>
            {data ? (
                <p>{data}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default UseEffect;
