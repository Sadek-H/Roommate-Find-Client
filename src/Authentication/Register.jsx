import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Firebase/Authcontext";
import Swal from "sweetalert2";

const Register = () => {
  let { createUser, updateUser, setUser, googlesignin } = use(AuthContext);
  let navigate = useNavigate();
  let [error,setError] = useState(null);
  let handlesubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formdata = new FormData(form);
    let { email, password, photo, name } = Object.fromEntries(formdata.entries());
     let passtest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
     if(passtest.test(password)===false){
      setError("Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, Length must be 6 characters")
      return;
     }
    createUser(email, password).then(async(res) => {
      let user = res.user;
      setUser(user);
    await  Swal.fire({
        title: "Successfully Registered",
        icon: "success",
        draggable: true,
      });
      updateUser({
        displayName: name,
        photoURL: photo,
      }).then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
      });
      navigate('/');
    });
  };

  // googleSignIn
  let handlegooglesignIn = (e) => {
    e.preventDefault();
    googlesignin()
      .then(async() => {
      
      await  Swal.fire({
          title: "Successfully Registered",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Google Sign In Failed",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
        <h2 className="font-semibold text-2xl text-center poppins">
          Register your account
        </h2>
        <form onSubmit={handlesubmit} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* Photo URL  */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
  {/* error */}
  {
    error && <span className="text-red-500 font-medium poppins">{error}</span>
  }
            <button type="submit" className="btn btn-neutral mt-4 poppins">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-secondary" to="/login">
                Login
              </Link>
            </p>
            <div className="divider font-bold">OR</div>
            <button
              onClick={handlegooglesignIn}
              className="btn bg-white text-black border-[#e5e5e5] hover:text-blue-500 hover:bg-amber-100"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;