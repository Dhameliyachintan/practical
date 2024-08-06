import React from 'react';

export default function Closure() {
    const outerFunction = () => {
        let outerVar = 'I am from outerFunction';

        function innerFunction() {
            return outerVar;
        }

        return innerFunction;
    };

    const myFunction = outerFunction()(); 

    return (
        <div>
            <p>Result of calling the closure function: {myFunction}</p>
        </div>
    );
}
    