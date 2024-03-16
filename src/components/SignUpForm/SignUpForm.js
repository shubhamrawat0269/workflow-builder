import React from "react";

const SignUpForm = () => {
  return (
    <div className="primary-bg w-screen h-screen flex justify-center items-center ">
      <div className="signup-container text-center">
        <figure className=" flex justify-center items-center">
          <img className="w-40" src="images/flow.png" alt="flow" />
        </figure>
        <h3>
          Sign in to <span className="block">FlowSandbox</span>
        </h3>
        <p className="text-white text-3xl">
          Login or register to start building your projects today.
        </p>
        <div className="flex flex-col gap-10">
          <button className="signup-btn mt-7 w-3/5 m-auto">
            Sign in with Github
          </button>
          <button className="btn">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
