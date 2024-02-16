import React from "react";

function Navbar() {
  return (
    <div>
      <body
        className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
      >
        <header>
          <nav
            className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
          >
            <div>
              <a href="#"></a>
            </div>

            <div
              className="hidden w-full md:flex md:items-center md:w-auto"
              id="menu"
            >
              <ul
                className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              >
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                    href="#"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </body>
      ;
    </div>
  );
}

export default Navbar;
