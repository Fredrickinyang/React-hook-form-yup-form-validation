import React from "react";
import { formSchema } from "./Validations";

export const YupOnly = () => {
  const submitData = async (e: any) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phoneNumber: e.target[2].value,
      password: e.target[3].value,
      confrirmPassword: e.target[4].value,
    };
    const isReady = await formSchema.isValid(formData);
    // console.log(isReady);
  };

  return (
    <form
      onSubmit={submitData}
      className="bg-gray-300 text-black my-7 p-4 max-w-[500px] mx-auto  ">
      <h1 className="text-2xl text-center font-semibold">Registration (Yup)</h1>
      <div className="my-4">
        <label>Name</label>
        <br />
        <input type="text" placeholder="Enter name" className="w-full p-2" />
      </div>

      <div className="my-4">
        <label>Email</label>
        <br />
        <input type="email" placeholder="Enter email" className="w-full p-2" />
      </div>

      <div className="my-4">
        <label>Phone Number</label>
        <br />
        <input
          type="number"
          placeholder="Enter number"
          className="w-full p-2"
        />
      </div>

      <div className="my-4">
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2"
        />
      </div>

      <div className="my-4">
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="my-4 bg-black text-white rounded-md w-full py-2"
      />
    </form>
  );
};
