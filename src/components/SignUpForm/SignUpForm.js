import React from "react";
import { app } from "../../Firebase";
import { getDatabase, ref, set } from "firebase/database";

const SignUpForm = () => {
  const signInData = (id, name, phone, address) => {
    // console.log({ id, name, phone, address });
    const db = getDatabase(app);
    set(ref(db, "user/" + id), {
      username: name,
      phone: phone,
      address: address,
    });
  };
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
          <button
            className="signup-btn mt-7 w-3/5 m-auto"
            onClick={() =>
              signInData("2", "Aditi", "8375099660", "Shyam Vihar")
            }
          >
            Sign in with Github
          </button>
          <button className="btn">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
