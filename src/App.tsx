import React, { useState } from "react";
import "./App.css";
import { UsingHookForm } from "./components/hook-form-only/UsingHookForm.component";
import { Navigator } from "./components/navigator/Navigator.component";
import { YupOnly } from "./components/yup-only/YupOnly.component";
import { YupAndHookform } from "./components/yup-and-hook-form/YupAndHookform.component";

function App() {
  const [activeClass, setActiveClass] = useState("hookForm");

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <h1 className="text-3xl text-center font-semibold pb-8">
        Form Validation Using React-Hook-Form and Yup
      </h1>
      <Navigator activeClass={activeClass} setActiveClass={setActiveClass} />
      {activeClass === "hookForm" ? <UsingHookForm /> : ""}
      {activeClass === "yup" ? <YupOnly /> : ""}
      {activeClass === "yupAndHookform" ? <YupAndHookform /> : ""}
    </div>
  );
}

export default App;
