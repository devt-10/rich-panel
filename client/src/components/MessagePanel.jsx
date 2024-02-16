import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const MessagePanel = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div
        className={
          props.messageVis && props.vis
            ? " bg-blue-50 h-[100vh] w-80 flex-col items-center justify-evenly border-l-[1px]"
            : "hidden"
        }
      >
        <div className="flex flex-1 bg-gray-50">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
            <div className="flex items-center justify-center flex-shrink-0 px-4">
              <div className="flex-col justify-center items-center cursor-pointer">
                <img
                  className="w-18 h-18"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                  alt=""
                />
                <h2 className="text-center"></h2>
                <h5 className="text-xs text-center">🔘 Offline</h5>
              </div>
            </div>
            <div className="flex p-4 justify-center items-center">
              <button className="bg-white border-2 m-2 rounded-md px-3 flex hover:bg-gray-100">
                {" "}
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1 mt-1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M30.053 6.236c0 0.033-0.003 0.060-0.007 0.082-0.817 0.563-5.389 3.582-6.243 4.13-0.090 0.002-0.318-0.028-0.644-0.2-0.348-0.182-1.361-0.751-2.777-1.559l-1.102-0.629-1.039 0.729c-0.773 0.544-2.452 1.838-5.009 4.394-2.568 2.567-3.858 4.241-4.399 5.011l-0.729 1.039 0.63 1.102c0.611 1.069 1.342 2.36 1.563 2.779 0.178 0.337 0.191 0.567 0.191 0.63 0 0.010 0 0.019-0.001 0.026-0.48 0.765-3.581 5.436-4.146 6.26-0.080 0.014-0.254 0.001-0.471-0.151-1.758-1.269-3.592-3.070-3.856-3.775 0.176-3.751 3.473-9.014 9.299-14.84s11.085-9.121 14.824-9.295c0.707 0.253 2.52 2.088 3.779 3.829 0.088 0.129 0.14 0.288 0.14 0.437zM31.991 6.236c0-0.529-0.16-1.091-0.499-1.578-0.033-0.047-3.383-4.753-5.323-4.691-5.451 0.173-11.857 5.471-16.272 9.883s-9.713 10.819-9.887 16.292v0.045c0 1.916 4.646 5.284 4.692 5.316 1.263 0.884 2.653 0.562 3.217-0.243 0.344-0.489 3.905-5.846 4.306-6.502 0.175-0.286 0.261-0.635 0.261-1.014 0-0.489-0.143-1.032-0.421-1.561-0.271-0.515-1.16-2.077-1.596-2.841 0.473-0.673 1.684-2.254 4.177-4.745 2.474-2.476 4.068-3.697 4.745-4.173 0.764 0.435 2.325 1.323 2.839 1.593 0.969 0.511 1.936 0.57 2.589 0.155 0.615-0.389 5.931-3.937 6.438-4.303 0.477-0.346 0.735-0.964 0.735-1.634z"></path>{" "}
                  </g>
                </svg>
                Call
              </button>
              <button className="bg-white border-2 m-2 rounded-md px-3 flex hover:bg-gray-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-1 mr-1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
                Profile
              </button>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-white w-full mt-4 rounded-lg h-36 flex-col justify-center items-center p-2">
            <h1 className="text-xl font-medium">Customer Details</h1>
            <div className="flex justify-between my-2">
              <div className="text-sm text-gray-600">Email</div>
              <div className="text-sm">{props.user.email}</div>
            </div>
            <div className="flex justify-between my-2">
              <div className="text-sm text-gray-600">First Name</div>
              <div className="text-sm">{props.user.username}</div>
            </div>
            <div className="flex justify-between my-2">
              <div className="text-sm text-gray-600">Last Name</div>
              <div className="text-sm">-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
