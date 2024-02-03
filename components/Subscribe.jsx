import React, { useState } from "react";

const Subscribe = () => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col my-16 p-5">
      <div className="text-center p-5">
        <h1 className="uppercase text-xl font-bold text-blue-900">
          Sign up for emails
        </h1>
        <p className=" text-blue-900">
          Subscribe to our emailing list and receive the latest updates from us
        </p>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex items-center align-center justify-center flex-wrap">
          <div className="p-5">
            <input
              className="h-12 w-64 text-center text-blue-900 bg-white border border-blue-900 rounded-none"
              placeholder="Enter e-mail address here"
              type="text"
            />
          </div>
          <div className="p-5">
            <button className="btn   w-64 mx-auto block rounded-none focus:outline-blue-900 text-blue-900 border-blue-900 hover:text-white bg-white hover:bg-blue-800">
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
