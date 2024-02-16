import React, { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          ...formData,
        },
        {
          withCredentials: true,
        }
      );

      const { token } = response.data;
      console.log("Token:", token);
      if (token) {
        localStorage.setItem("token", token);
        navigate("/facebook");
      } else {
        setErrorMessage("Invalid email or password");
        console.error("Token not found in response");
      }
    } catch (err) {
      console.error("Error logging in:", err);
    }

    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full h-[100vh] bg-[#1e4d91] flex justify-center items-center">
      <div className="h-3/4 w-[30%] p-2 px-8 bg-white rounded-lg flex-col justify-center">
        <div className="h-1/5 mt-4">
          <h2 className="text-center font-semibold">Login to your account</h2>
          <h2 className="text-center font-semibold text-xs mt-2 text-red-400">
            {errorMessage ? `${errorMessage}` : ``}
          </h2>
        </div>
        <div className="h-2/4">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
            {/* insert remember me checkbox here */}
            <input type="checkbox" name="rememberme" id="remember" />
            <label
              htmlFor="rememberme"
              className="text-sm font-light text-gray-900"
            >
              {" "}
              Remember Me
            </label>
            <button
              type="submit"
              className="bg-[#1e4d91] block w-full rounded-sm min-h-10 mt-8 text-white"
            >
              {" "}
              Log In
            </button>
          </form>
          <div className="flex items-center justify-center text-xs mt-2">
            New to MyApp? {"  "}
            <a href="/signup" className="text-blue-500">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
