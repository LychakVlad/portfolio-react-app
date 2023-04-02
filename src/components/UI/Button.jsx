import React from 'react';

const Button = () => {
  return (
    <div>
      <button
        type="submit"
        value="Send"
        className="border-0 text-white bg-indigo-500 p-4 rounded-lg w-full hover:bg-indigo-400 transition-color duration-300 focus:bg-indigo-600"
      >
        {' '}
        Contact me
      </button>
    </div>
  );
};

export default Button;
