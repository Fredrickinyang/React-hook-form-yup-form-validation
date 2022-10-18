import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Profile = {
  name: string;
  email: string;
  number: number;
  password: string;
  confirmPassword: string;
};

export const UsingHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit: SubmitHandler<Profile> = (data) => {
    alert(JSON.stringify(data));
    // console.log(watch("name"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-300 text-black my-7 p-4 max-w-[500px] mx-auto  ">
      <h1 className="text-2xl text-center font-semibold">
        Registration (Hook-Form)
      </h1>
      <div className="my-4">
        <label htmlFor="name">Name</label>
        <br />
        <input
          {...(register("name"), { required: true })}
          id="name"
          name="name"
          type="text"
          placeholder="Enter name"
          className="w-full p-2"
        />
        {errors.name && <div>Enter Name</div>}
      </div>

      <div className="my-4">
        <label>Email</label>
        <br />
        <input
          {...(register("email"), { required: true })}
          type="email"
          placeholder="Enter email"
          className="w-full p-2"
        />
        {errors.name && <div>Enter email</div>}
      </div>

      <div className="my-4">
        <label>Phone Number</label>
        <br />
        <input
          {...(register("number"), { required: true })}
          type="number"
          placeholder="Enter number"
          className="w-full p-2"
        />
        {errors.number && <div>Enter Name</div>}
      </div>

      <div className="my-4">
        <label>Password</label>
        <br />
        <input
          {...(register("password"), { required: true })}
          type="password"
          placeholder="Enter Password"
          className="w-full p-2"
        />
        {errors.password && <div>Enter password</div>}
      </div>

      <div className="my-4">
        <label>Confirm Password</label>
        <br />
        <input
          {...(register("confirmPassword"), { required: true })}
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2"
        />
        {errors.confirmPassword && <div>Enter password correctly</div>}
      </div>
      <input
        type="submit"
        value="Submit"
        className="my-4 bg-black text-white rounded-md w-full py-2"
      />
    </form>
  );
};
