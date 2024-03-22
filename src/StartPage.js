import React from "react";
import Login from "./Login";
const StartPage = () => {
  return (
    <div className="">
      <div className="relative border-2 border-black h-screen">
        <div className="">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="bg"
            className="brightness-50"
          />
        </div>
        <header className="absolute top-5 left-20">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
            className="w-44 brightness-100 saturate-200"
          />
        </header>
        <Login />
      </div>
    </div>
  );
};

export default StartPage;
