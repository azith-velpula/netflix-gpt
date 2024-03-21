import React from "react";

const Login = () => {
  return (
    <div className="w-4/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70">
      <div className="p-10">
        <h1 className="text-white text-4xl mb-10 font-bold">Sign In</h1>
        <form action="" className="flex flex-col">
          <input
            type="text"
            className="bg-black bg-opacity-40 mb-5  text-white block py-4 border-white border-solid border pl-3 placeholder:text-lg"
            placeholder="Email or Phone Number"
          />
          <input
            type="password"
            className=" bg-opacity-40 bg-black block py-4 text-white mb-5 border-white border-solid border pl-3 placeholder:text-lg"
            placeholder="password"
          />
          <button className="bg-red-600 text-white p-2 rounded mb-4 text-xl font-bold">
            Sign in
          </button>
        </form>
        <p className="text-center text-white text-lg">Forget password?</p>
        <div className="flex items-center mt-10">
          <input id="remember" type="checkbox" className="size-5 mr-2" />
          <label htmlFor="remember" className="text-white text-lg">
            Remember me
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
