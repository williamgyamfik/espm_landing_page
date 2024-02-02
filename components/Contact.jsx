import React from "react";

const Contact = () => {
  return (
    <div className=" px-2 sm:px-5 w-full p-10 text-white">
      <div className="flex justify-center ">
        <section className="flex flex-col md:flex-row justify-center mx-auto p-5">
          <div>
            <div className="px-5 mb-5">
              <h1 className="text-4xl  font-bold">You got questions?</h1>
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
                <span className="font-bold">Email:</span> euphoriaspm@gmail.com
              </p>
            </div>
          </div>
          <div className="mb-16 ">
            <form action="w-full max-w-7xl ">
              <div className="flex  flex-wrap mb-5 mx-5">
                <div className="w-full">
                  <label className="font-bold uppercase text-xs" htmlFor="name">
                    First name*{" "}
                  </label>
                  <input
                    className="mb-5 block w-full h-10  bg-white   focus:bg-white"
                    type="text"
                    name="first_name"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="font-bold uppercase text-xs" htmlFor="name">
                    Surname*{" "}
                  </label>
                  <input
                    className="w-full block h-10  bg-white   focus:bg-white"
                    type="text"
                    name="last_name"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap mb-5 mx-5">
                <div className=" w-full">
                  <label
                    className="font-bold uppercase text-xs "
                    htmlFor="name"
                  >
                    Email*{" "}
                  </label>
                  <input
                    className="w-full h-10  bg-white   focus:bg-white block"
                    type="email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap mb-5 mx-5 ">
                <div className="w-full">
                  <label className="font-bold uppercase text-xs" htmlFor="name">
                    Message*{" "}
                  </label>
                  <textarea
                    name="message"
                    id=""
                    cols="50"
                    rows="5"
                    placeholder="send us a message"
                    className="w-full block  bg-white h-25  focus:bg-white"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full ">
                  <button className="btn w-6/12 mx-auto block  bg-white hover:bg-green-600">
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
