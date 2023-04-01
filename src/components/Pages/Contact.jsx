import React from 'react';
import LargeTitle from '../Titles/LargeTitle';
import Button from '../UI/Button';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';

const Contact = () => {
  return (
    <div
      id="contact"
      className="section container xl  mx-auto min-h-screen text-indigo-950 flex items-center font-poppins flex-col w-full"
    >
      <div className="text-center my-20">
        <LargeTitle title="Lets talk about your ideas!" />
      </div>
      <div className="w-2/4">
        <form
          className="w-ful grid  grid-rows-1 gap-8 bg-white p-12 rounded-3xl shadow-xl text-slate-600"
          action=""
        >
          <Input placeholder={'Name'} />
          <Input placeholder={'E-mail'} />
          <TextArea />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Contact;
