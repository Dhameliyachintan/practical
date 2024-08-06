import React, { useState } from 'react';

function ToggleMessage() {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div>
            <button onClick={toggleMessage}>
                {showMessage ? 'Hide Message' : 'Show Message'}
            </button>
            {showMessage && <p>This is a toggle message.</p>}
        </div>
    );
}

export default ToggleMessage;

