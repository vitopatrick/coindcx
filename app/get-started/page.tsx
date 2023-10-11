"use client";

import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export default function GetStarted() {
  return (
    // page Wrapper
    <div>
      {/* form body wrapper,also the flex box container */}
      <section className="flex">
        <div className="bg-[#4159DF]  flex-1 hidden md:flex flex-col justify-center">
          {" "}
          <h4 className="font-body underline  capitalize text-4xl text-neutral-300 p-6">
            A True place for investors, Join and experience <br />
            another level of cryptomania
          </h4>
        </div>
        {/* form wrapper */}
        <div className="p-3 min-h-0 flex-1 overflow-auto">
          <RegisterForm />
        </div>
        {/* end of the form wrapper */}
      </section>
      {/* end of form body wrapper */}
      <ToastContainer className="toast" theme="colored" />
    </div>
  );
}
