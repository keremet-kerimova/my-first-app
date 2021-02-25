
// import React from 'react';

function Random(props) {
  return <h1>
{Math.floor(Math.random(props.max) * Math.floor(props.min))
}
  </h1>
  
}

export default Random;