import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...formData,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);
      navigate("/facebook");
    } catch (err) {
      console.log(err);
    }

    console.log("Form Data:", formData);
  };
  return (
    <div className="w-full h-[100vh] bg-[#1e4d91] flex justify-center items-center">
      <div className="h-4/5 w-[30%] py-4 px-8 bg-white rounded-lg flex-col justify-center">
        <div className="h-1/10 mt-4">
          <h2 className="text-center font-semibold">Create Account</h2>
        </div>
        <div className="h-4/5 mt-4">
          <form onSubmit={handleSubmit} method="post">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
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
            <button className="bg-[#1e4d91] block w-full rounded-md min-h-8 mt-2 text-white">
              {" "}
              Sign Up
            </button>
          </form>
          <div className="flex items-center justify-center text-xs mt-4">
            Already have an account? {"  "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
