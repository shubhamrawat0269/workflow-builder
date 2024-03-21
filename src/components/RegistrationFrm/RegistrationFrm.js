/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";

const RegistrationFrm = () => {
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");

    // console.log({ email, name, password });
    if (email && name && password) registerUser(email, name, password);
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
          Register to start building your projects today.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col gap-10">
          {/* <button
            className="signup-btn mt-7 w-3/5 m-auto"
            onClick={() => signInData("Shubham", "9711071504", "Shyam Vihar")}
          >
            Sign in with Github
          </button> */}
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
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
          <button type="submit" className="signup-btn mt-7 w-3/5 m-auto">Register</button>
          <Link to="/signup" className="btn">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFrm;
