import React, { useState } from "react";
import Link from "next/link";

const Subscribe = () => {
  const [input, setInput] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="flex flex-col my-16 p-5">
      <div className="text-center p-5">
        <p className=" text-blue-900">
          Subscribe to our emailing list and receive the latest updates from us
        </p>
      </div>

      <div className="flex items-center align-center justify-center flex-wrap">
        <div className="p-5">
          <input
            className="h-12 w-64 text-center text-blue-900 bg-white border border-blue-900"
            placeholder="Enter Email address here"
            type="text"
          />
        </div>
        <div className="p-5">
          <Link href="/signup">
            <button className="btn   w-64 mx-auto block rounded-none text-blue-900 border-blue-900 hover:text-white bg-white hover:bg-blue-800">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
