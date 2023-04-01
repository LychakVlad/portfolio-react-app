import React from 'react';

const MediumTitle = (props) => {
  return (
    <h3 className="font-bold text-3xl leading-tight text-indigo-900 mb-6">
      {props.title}
    </h3>
  );
};

export default MediumTitle;
