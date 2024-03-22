import React from "react";
import { useState } from "react";
const Login = () => {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => {
    setStatus(!status);
  };
  return (
    <div className="w-4/12 absolute top-96 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70">
      <div className="px-16 py-10">
        <h1 className="text-white text-4xl mb-10 font-bold">
          {status ? "Sign In" : "Sign Up"}
        </h1>
        <form action="" className="flex flex-col">
          {!status && (
            <>
              <input
                type="text"
                className="bg-black bg-opacity-40 mb-5  text-white block py-4 border-white border-solid border pl-3 text-lg"
                placeholder="Name"
              />
              <input
                type="text"
                className="bg-black bg-opacity-40 mb-5  text-white block py-4 border-white border-solid border pl-3 text-lg"
                placeholder="Phone Number"
              />
            </>
          )}
          <input
            type="text"
            className="bg-black bg-opacity-40 mb-5  text-white block py-4 border-white border-solid border pl-3 text-lg"
            placeholder="Email or Phone Number"
          />
          <input
            type="password"
            className=" bg-opacity-40 bg-black block py-4 text-white mb-5 border-white border-solid border pl-3 text-lg"
            placeholder="password"
          />
          <button className="bg-red-600 text-white p-2 rounded mb-4 text-xl font-bold">
            Sign in
          </button>
        </form>
        <div className="flex items-center mt-2 justify-between">
          <div className="flex justify-center items-center">
            <input id="remember" type="checkbox" className="size-5 mr-2" />
            <label htmlFor="remember" className="text-white text-lg">
              Remember me
            </label>
          </div>
          <p className="text-center text-white text-sm">Forget password?</p>
        </div>
        {status ? (
          <p className="text-lg mt-5">
            New to netfix?{" "}
            <span onClick={toggleStatus} className="font-bold cursor-pointer">
              {" "}
              Sign up now
            </span>{" "}
          </p>
        ) : (
          <p className="text-lg mt-5">
            Already Registered?{" "}
            <span onClick={toggleStatus} className="font-bold cursor-pointer">
              Sign in
            </span>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
