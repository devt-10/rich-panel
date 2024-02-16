import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Conversations from "./Conversations";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AgentPage() {
  const [vis, setVis] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to get users:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  function handleInboxClick() {
    setVis(!vis);
  }
  return (
    <div className="w-full flex justify-start flex-1 bg-gray-100">
      <div className="hidden md:flex md:w-[6%] h-[100vh] md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-[#004e96]">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-12 w-auto mb-1" src={logo} alt="" />
          </div>

          <div className="flex flex-col flex-1 justify-between px-3 mt-6">
            <div className="space-y-4">
              <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  onClick={handleInboxClick}
                  title=""
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg text-white hover:bg-gray-800 group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-transparent bg-clip-text bg-white group-hover:text-[#004e96]"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3 12V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V12M3 12H6.67452C7.16369 12 7.40829 12 7.63846 12.0553C7.84254 12.1043 8.03763 12.1851 8.21657 12.2947C8.4184 12.4184 8.59136 12.5914 8.93726 12.9373L9.06274 13.0627C9.40865 13.4086 9.5816 13.5816 9.78343 13.7053C9.96237 13.8149 10.1575 13.8957 10.3615 13.9447C10.5917 14 10.8363 14 11.3255 14H12.6745C13.1637 14 13.4083 14 13.6385 13.9447C13.8425 13.8957 14.0376 13.8149 14.2166 13.7053C14.4184 13.5816 14.5914 13.4086 14.9373 13.0627L15.0627 12.9373C15.4086 12.5914 15.5816 12.4184 15.7834 12.2947C15.9624 12.1851 16.1575 12.1043 16.3615 12.0553C16.5917 12 16.8363 12 17.3255 12H21M3 12L5.32639 6.83025C5.78752 5.8055 6.0181 5.29312 6.38026 4.91755C6.70041 4.58556 7.09278 4.33186 7.52691 4.17615C8.01802 4 8.57988 4 9.70361 4H14.2964C15.4201 4 15.982 4 16.4731 4.17615C16.9072 4.33186 17.2996 4.58556 17.6197 4.91755C17.9819 5.29312 18.2125 5.8055 18.6736 6.83025L21 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-[#1e4d91] rounded-lg hover:bg-gray-800 group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect width="24" height="24" fill=""></rect>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                        fill="white"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-[#004e96] rounded-lg hover:bg-gray-800 group"
                >
                  <svg
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M495.304,478.609H33.391V16.696C33.391,7.475,25.916,0,16.696,0S0,7.475,0,16.696v478.609C0,504.525,7.475,512,16.696,512 h478.609c9.22,0,16.696-7.475,16.696-16.696S504.525,478.609,495.304,478.609z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M461.913,144.696c-27.618,0-50.087,22.469-50.087,50.087c0,7.723,1.76,15.043,4.895,21.582l-66.793,66.792 c-6.539-3.135-13.857-4.895-21.581-4.895c-7.722,0-15.042,1.76-21.581,4.894l-33.401-33.4c3.135-6.539,4.895-13.857,4.895-21.581 c0-27.618-22.469-50.087-50.087-50.087c-27.618,0-50.087,22.469-50.087,50.087c0,7.723,1.76,15.042,4.895,21.581l-44.532,44.531 c-6.539-3.134-13.859-4.894-21.581-4.894c-27.618,0-50.087,22.469-50.087,50.087s22.469,50.087,50.087,50.087 c27.618,0,50.087-22.469,50.087-50.087c0-7.723-1.76-15.042-4.895-21.581l44.532-44.531c6.539,3.134,13.858,4.894,21.581,4.894 c7.723,0,15.042-1.76,21.581-4.894l33.401,33.4c-3.135,6.539-4.895,13.857-4.895,21.581c0,27.618,22.469,50.087,50.087,50.087 s50.087-22.469,50.087-50.087c0-7.723-1.76-15.043-4.895-21.582l66.793-66.792c6.539,3.135,13.857,4.895,21.581,4.895 c27.618,0,50.087-22.469,50.087-50.087C512,167.165,489.531,144.696,461.913,144.696z M116.87,356.174 c-9.206,0-16.696-7.49-16.696-16.696s7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696S126.076,356.174,116.87,356.174z M228.174,244.87c-9.206,0-16.696-7.49-16.696-16.696c0-9.206,7.49-16.696,16.696-16.696c9.206,0,16.696,7.49,16.696,16.696 C244.87,237.38,237.38,244.87,228.174,244.87z M328.348,345.043c-9.206,0-16.696-7.49-16.696-16.696s7.49-16.696,16.696-16.696 s16.696,7.49,16.696,16.696S337.554,345.043,328.348,345.043z M461.913,211.478c-9.206,0-16.696-7.49-16.696-16.696 c0-9.206,7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696C478.609,203.989,471.119,211.478,461.913,211.478z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>
              </nav>
            </div>

            <div className="pb-4 mt-20">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-800"
              >
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                  alt=""
                />
                <svg
                  className="w-5 h-5 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Conversations vis={vis} users={users} />
    </div>
  );
}

export default AgentPage;
