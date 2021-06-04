import React, { useState } from 'react';

function Addition(){
    const [count, setCount] = useState(0);
    console.log("Addition");
    return(
        <>
        <h1>Calculate Addition.</h1>

        <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
        </>
    );

}

export default Addition;