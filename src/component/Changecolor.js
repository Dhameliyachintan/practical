import React, { useState } from 'react';

function Changecolor() {
    const [bgColor, setBgColor] = useState('red');
    console.log("bgColor", bgColor);

    const changeColor = () => {
        const newColor = bgColor === 'green' ? 'blue' : 'green';
        console.log("newColor", newColor);
        setBgColor(newColor);
    };

    return (
        <div style={{ backgroundColor: bgColor, height: '100vh', textAlign: 'center', paddingTop: '20%' }}>
            <h1>Click the button to change background color</h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Changecolor;
