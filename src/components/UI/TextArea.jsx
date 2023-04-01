import React from 'react';

const TextArea = () => {
  return (
    <div class="relative">
      <label
        for="message"
        class="block mb-2 text-xl font-medium text-indigo-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-lg text-indigo-900 bg-white rounded-lg border-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="I have a great idea..."
      ></textarea>
    </div>
  );
};

export default TextArea;
