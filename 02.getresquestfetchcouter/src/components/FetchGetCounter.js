import React from 'react';

const FetchGetCounter = (props) => {
  return (
      
      <div id={props.id}>
          {props.children}
      </div>
      );
}

export default FetchGetCounter;