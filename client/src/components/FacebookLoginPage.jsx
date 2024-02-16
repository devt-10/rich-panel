import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FacebookLoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pageName, setPageName] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    FacebookLoginClient.logout(() => {
      console.log("logout completed!");
    });
    setIsLoggedIn(false);
    setPageName("");
    navigate("/");
  };
  return (
    <div className="w-full h-[100vh] bg-[#1e4d91] flex justify-center items-center">
      <div className=" min-w-min p-8 bg-white rounded-lg flex-col justify-center">
        <h1 className="text-xl font-medium mb-4">Facebook Page Integration</h1>
        <h4 className={pageName ? "text-sm font-medium mb-4" : "hidden"}>
          Integrated Page: {pageName}{" "}
        </h4>
        <div className={isLoggedIn ? "hidden" : ""}>
          <FacebookLogin
            className="bg-[#1e4d91] rounded-sm p-4 w-full text-white"
            appId="928720398977220"
            onFail={(error) => {
              console.log("Login Failed!", error);
            }}
            onProfileSuccess={(response) => {
              console.log("Get Profile Success!", response);
              setIsLoggedIn(true);
              setPageName(response.name);
            }}
          />
        </div>
        <button
          onClick={handleLogout}
          className={
            isLoggedIn
              ? "bg-[#e35042] block text-white text-sm font-medium p-2 rounded-sm m-2 w-full "
              : "hidden"
          }
        >
          Delete Integration
        </button>
        <Link to="/messages">
          <button
            className={
              isLoggedIn
                ? "bg-[#1e4d91] block text-white text-sm font-medium p-2 rounded-sm m-2 w-full "
                : "hidden"
            }
          >
            Reply to messages
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FacebookLoginPage;
