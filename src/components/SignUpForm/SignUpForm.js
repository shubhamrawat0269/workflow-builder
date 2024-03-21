/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import { useEffect, useRef } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const { user, signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log({ email, password });
    if (email && password) signInUser(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) forgotPassword(email).then(() => (emailRef.current.value = ""));
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
          Login to start building your projects today.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col gap-10">
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
            />
          </label>
          <button type="submit" className="signup-btn mt-7 w-3/5 m-auto">
            Sign in
          </button>
          <a onClick={forgotPasswordHandler} className="btn">
            Forgot Password
          </a>
          <Link to="/register" className="btn">
            New User? Click here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
