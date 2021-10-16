import React from 'react'

function Cancel() {
    const locateHome =(e)=>
    {       e.preventDefault(); 
            window.open('http://localhost:3000/', 'Home');
            window.close();
    }
    return (
        <div>
            <h1>Payment was Successful</h1>
                <button onClick = {locateHome}>Home</button>
        </div>
    )
}

export default Cancel
