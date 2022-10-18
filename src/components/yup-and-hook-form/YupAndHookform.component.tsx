import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const YupAndHookform = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is missing").min(2),
    email: yup.string().email().required("email is missing"),
    phoneNumber: yup
      .number()
      .min(11)
      .positive()
      .required("Phone Number is missing"),
    password: yup
      .string()
      .min(4)
      .max(10)
      .required("Password is missing (minimum:4 maximum:10)"),
    confrirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  interface IProfile {
    name: string;
    email: string;
    number: number;
    password: string;
    confirmPassword: string;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IProfile>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: IProfile) => {
    alert(JSON.stringify(data));
    // console.log(watch("name"));
  };
  //   console.log(watch("name"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-300 text-black my-7 p-4 max-w-[500px] mx-auto  ">
      <h1 className="text-2xl text-center font-semibold">
        Registration (Yup and Hook-Form)
      </h1>
      <div className="my-4">
        <label>Name</label>
        <br />
        <input
          {...register("name")}
          type="text"
          placeholder="Enter name"
          className="w-full p-2"
        />
        {errors.name && (
          <div className="text-red-400 text-sm">{errors.name.message}</div>
        )}
      </div>

      <div className="my-4">
        <label>Email</label>
        <br />
        <input
          {...register("email")}
          //   type="email"
          placeholder="Enter email"
          className="w-full p-2"
        />
        {errors.email && (
          <div className="text-red-400 text-sm">{errors.email.message}</div>
        )}
      </div>

      <div className="my-4">
        <label>Phone Number</label>
        <br />
        <input
          {...register("number")}
          //   type="number"
          placeholder="Enter number"
          className="w-full p-2"
        />
        {errors.number && (
          <div className="text-red-400 text-sm">{errors.number.message}</div>
        )}
      </div>

      <div className="my-4">
        <label>Password</label>
        <br />
        <input
          {...register("password")}
          type="password"
          placeholder="Enter Password"
          className="w-full p-2"
        />
        {errors.password && (
          <div className="text-red-400 text-sm">{errors.password.message}</div>
        )}
      </div>

      <div className="my-4">
        <label>Confirm Password</label>
        <br />
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2"
        />
        {errors.confirmPassword && (
          <div className="text-red-400 text-sm">Password does not match</div>
        )}
      </div>
      <input
        type="submit"
        value="Submit"
        className="my-4 bg-black text-white rounded-md w-full py-2"
      />
    </form>
  );
};
