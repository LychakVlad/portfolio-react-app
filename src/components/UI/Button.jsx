import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button {...props}> {props.title}</button>
    </div>
  );
};

export default Button;
