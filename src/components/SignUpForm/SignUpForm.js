import React from "react";
import { app } from "../../Firebase";
import { v4 as uuidv4 } from "uuid";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  // How to send data in backend Firebase
  const signInData = (name, phone, address) => {
    const db = getDatabase(app);
    set(ref(db, "user/" + uuidv4()), {
      username: name,
      phone: phone,
      address: address,
    })
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
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
            onClick={() => signInData("Shubham", "9711071504", "Shyam Vihar")}
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
