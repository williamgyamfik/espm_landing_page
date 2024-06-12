import React, { useState } from "react";
import { supabase } from "../Utils/supabaseClient";

const Contact = () => {
  const [userInquiry, setUserInquiry] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const inputhandler = (e) => {
    const { name, value } = e.target;
    setUserInquiry({ ...userInquiry, [name]: value });
  };

  const formDetailsHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await supabase
        .from("ClientInquiry")
        .insert([
          {
            first_name: userInquiry.first_name,
            last_name: userInquiry.last_name,
            email: userInquiry.email,
            message: userInquiry.message,
          },
        ])
        .select();

      userInquiry.first_name = "";
      userInquiry.last_name = "";
      userInquiry.email = "";
      userInquiry.message = "";
    } catch (error) {}
  };

  return (
    <div className=" px-2 sm:px-5 w-full p-10 text-white">
      <div className="flex justify-center ">
        <section className="flex flex-col md:flex-row justify-center mx-auto p-5">
          <div>
            <div className="px-5 mb-5">
              <h1 className="text-2xl  font-bold">You got questions?</h1>
            </div>
            <div className="px-5 mb-5">
              <p>
                Please fill out the form and we will get back to you as soon as
                possible
              </p>
            </div>
            {/* <div className="px-5 mb-5">
          <p>
            <span className="font-bold">Phone:</span> +1(347)702-0814{" "}
          </p>
        </div> */}
            <div className="px-5 mb-5">
              <p>
                <span className="font-bold">Email : </span>
                admin@euphoriasportsmgt.com
              </p>
            </div>
          </div>
          <div className="mb-16 ">
            <form action="w-full max-w-7xl " onSubmit={formDetailsHandler}>
              <div className="flex  flex-wrap mb-5 mx-5">
                <div className="w-full">
                  <label
                    className="font-bold uppercase text-xs"
                    htmlFor="first_name1"
                  >
                    First name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="mb-5 block w-full h-10 p-2 bg-white  text-black focus:bg-blue-400"
                    id="first_name1"
                    type="text"
                    name="first_name"
                    value={userInquiry?.first_name}
                    onChange={inputhandler}
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    className="font-bold uppercase text-xs"
                    htmlFor="surname_name1"
                  >
                    Surname<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full block h-10 p-2 bg-white  text-black  focus:bg-blue-400"
                    id="surname_name1"
                    type="text"
                    name="last_name"
                    value={userInquiry?.last_name}
                    onChange={inputhandler}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap mb-5 mx-5">
                <div className=" w-full">
                  <label
                    className="font-bold uppercase text-xs "
                    htmlFor="email1"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full h-10 p-2 bg-white  text-black  focus:bg-blue-400 block"
                    id="email1"
                    type="email"
                    name="email"
                    value={userInquiry?.email}
                    onChange={inputhandler}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap mb-5 mx-5 ">
                <div className="w-full">
                  <label
                    className="font-bold uppercase text-xs"
                    htmlFor="message1"
                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message1"
                    cols="50"
                    rows="5"
                    placeholder="send us a message"
                    className="w-full block p-2 bg-white h-25  text-black focus:bg-blue-400"
                    value={userInquiry?.message}
                    onChange={inputhandler}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full ">
                  <button
                    className="btn w-6/12 mx-auto block rounded-none text-blue-900 hover:text-white bg-white hover:bg-blue-800"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
