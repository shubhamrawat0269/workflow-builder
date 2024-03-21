/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { user, loading, signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

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
    if (!email) {
      toast.error("Please Enter Your Email in Email Field first!");
    } else {
      toast.error("Please Check Your Mail Inbox to reset your password");
      forgotPassword(email).then(() => (emailRef.current.value = ""));
    }
  };

  return (
    <div className="primary-bg w-screen h-screen flex justify-center items-center">
      <div className="signup-container text-center">
        <figure className=" flex justify-center items-center">
          <img className="w-40" src="images/flow.png" alt="flow" />
        </figure>
        <h3 className="leading-11">
          Sign in to <span className="block">FlowSandbox</span>
        </h3>
        <p className="text-white text-2xl">
          Login to start building your projects today.
        </p>
        <form onSubmit={onSubmit} className="form-ctrl flex flex-col gap-10">
          <label htmlFor="email" className="mt-5">
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
              ref={passwordRef}
              placeholder="Password"
              autoComplete="off"
            />
          </label>
          <button type="submit" className="signup-btn w-2/5 m-auto">
            {loading ? "Loading...." : "Sign in"}
          </button>
          <div className="flex justify-center items-center gap-10">
            <a onClick={forgotPasswordHandler} className="btn">
              Forgot Password
            </a>
            <Link to="/register" className="btn">
              New User? Click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
