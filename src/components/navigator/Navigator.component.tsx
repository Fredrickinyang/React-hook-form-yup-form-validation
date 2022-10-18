import React from "react";

interface INavigatorProps {
  activeClass: string;
  setActiveClass: React.Dispatch<React.SetStateAction<string>>;
}

export const Navigator = ({ activeClass, setActiveClass }: INavigatorProps) => {
  return (
    <div className="flex gap-1 item-center w-full">
      <div
        onClick={() => {
          setActiveClass("hookForm");
        }}
        className={`${
          activeClass === "hookForm" ? "bg-blue-200" : "bg-blue-300"
        }  text-black font-medium py-4 text-center w-full cursor-pointer hover:bg-blue-200`}>
        Using only hook-form
      </div>
      <div
        onClick={() => {
          setActiveClass("yup");
        }}
        className={`${
          activeClass === "yup" ? "bg-blue-200" : "bg-blue-300"
        }  text-black font-medium py-4 text-center w-full cursor-pointer hover:bg-blue-200`}>
        Using only yup
      </div>
      <div
        onClick={() => {
          setActiveClass("yupAndHookform");
        }}
        className={`${
          activeClass === "yupAndHookform" ? "bg-blue-200" : "bg-blue-300"
        }  text-black font-medium py-4 text-center w-full cursor-pointer hover:bg-blue-200`}>
        Using yup and hook-form
      </div>
    </div>
  );
};
