import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import Directlogin from "./Directlogin";
import { AuthContext } from "../Firebase/Authcontext";
import Swal from "sweetalert2";

const Login = () => {
  let { SignInuser, setUser } = use(AuthContext);
  let [error, setError] = useState();
  let navigate = useNavigate();
  let handlesignin = (e) => {
    e.preventDefault();
    let form = e.target;
    let formdata = new FormData(form);
    let { email, password } = Object.fromEntries(formdata.entries());
    let passtest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (passtest.test(password) === false) {
      setError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, Length must be 6 characters"
      );
      return;
    }
    SignInuser(email, password)
      .then(async (res) => {
        let user = res.user;

        await Swal.fire({
          title: "Successfully Login",
          icon: "success",
          draggable: true,
        });
        setUser(user);
        navigate("/");
        setError("");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect,Please try again",
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
        <h2 className="font-semibold text-2xl text-center poppins">
          Login your account
        </h2>
        <form onSubmit={handlesignin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            {/* error */}
            {error && (
              <span className="text-red-500 font-medium poppins">{error}</span>
            )}

            {/* forgot password  */}
            <Link
              to="/auth/forgotpassword"
              className="flex justify-between link link-hover poppins "
            >
              Forgot password?
            </Link>

            <button type="submit" className="btn btn-neutral mt-4 poppins">
              Login
            </button>
            <p className="font-semibold text-center pt-5 poppins">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
        <div className="divider">OR</div>
        {/* Google and Github login */}
        <Directlogin></Directlogin>
      </div>
    </div>
  );
};

export default Login;
