import React, { useState } from "react";
import MessagePanel from "./MessagePanel";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Conversations = (props) => {
  const [messageVis, setMessageVis] = useState(false);
  const [clickedUser, setClickedUser] = useState({});
  const categories = ["Facebook Post", "Facebook Message", "Facebook Comment"];
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  function handleMessageClick() {
    setMessageVis(true);
  }
  const handleRefresh = async () => {
    <Link to="/messages" refresh="">
      <span>Reload</span>
    </Link>;
  };
  return (
    <>
      <div
        className={
          props.vis !== true ? "hidden" : " w-full flex justify-between "
        }
      >
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r-[1px]">
            <div className="flex items-center flex-shrink-0 px-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H9C9.41421 16.25 9.75 16.5858 9.75 17C9.75 17.4142 9.41421 17.75 9 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
              <h1 className="font-semibold text-xl mr-10">Conversations</h1>
              <button
                className="p-1 rounded-md hover:bg-slate-100"
                onClick={handleRefresh}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14"
                      stroke="rgb(31 44 55)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <hr className="border-gray-200" />
            </div>

            <div className="flex flex-col flex-1">
              <div className="space-y-4">
                <nav className="flex-1 space-y-2 border-b-[1px]">
                  {props.users.map((user) => {
                    return (
                      <div
                        key={user._id}
                        className="flex-col border-b-gray-100 rounded-sm py-4 px-2 w-full hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          handleMessageClick();
                          setClickedUser(user);
                        }}
                      >
                        <div className="flex justify-between">
                          <div className="flex w-4/5">
                            <input className="m-2" type="checkbox" />
                            <div className="flex-col">
                              <div className="m-0 text-sm font-semibold">
                                {user.username}
                              </div>
                              <div className="m-0 text-xs font-medium text-gray-800 ">
                                {categories[Math.floor(Math.random() * 2)]}
                              </div>
                            </div>
                          </div>
                          <div className="1/5 text-xs text-gray-600">10m</div>
                        </div>
                        <div className="m-2">
                          <p className="text-xs font-semibold">
                            lorem ipsum dolor sit amet
                          </p>
                          <p className="text-xs text-gray-600">
                            lorem ipsum dolor sit amet lorem...
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MessagePanel
        vis={props.vis}
        messageVis={messageVis}
        user={clickedUser}
      />
    </>
  );
};
export default Conversations;
