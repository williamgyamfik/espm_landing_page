// "use client";
import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

const SignUphtmlForm = () => {
  return (
    <div className=" flex flex-col flex-1 pt-4 sm:px-0 min-h-0 ">
      <div className="flex flex-1 flex-col p-2 shadow-xl">
        <div className="flex align-center justify-center mt-10 ">
          <form className="mx-2  w-full  text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label
                    className="text-black"
                    htmlFor="firstName1"
                    value="First Name"
                  />
                </div>
                <TextInput
                  className=""
                  id="firstName1"
                  type="text"
                  name="first_name"
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap">
                <div className="mb-2 block">
                  <Label htmlFor="lastName1" value="Surname" />
                </div>
                <TextInput
                  id="lastName1"
                  type="text"
                  name="last_name"
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput id="email1" type="email" name="email" />
              </div>

              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="age1" value="Age" />
                </div>
                <TextInput id="age1" type="text" name="age" required />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="gender1" value="Gender" />
                </div>
                <TextInput id="gender1" type="text" name="gender" required />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="Phone1" value="Phone" />
                </div>
                <TextInput id="Phone1" type="number" name="phone" required />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="sports_type1" value="Sports type" />
                </div>
                <TextInput
                  id="sports_type1"
                  type="text"
                  name="sports_type"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 mt-10 justify-center center-align">
              <Button type="submit" className="w-96 bg-emerald-500">
                SAVE
              </Button>
              <Button className="w-96 btn bg-red-500" color="failure">
                CLOSE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUphtmlForm;
