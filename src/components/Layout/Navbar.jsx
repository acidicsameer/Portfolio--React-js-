import React from "react";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const toggleMenu = () => {
      const mobileMenu = document.getElementById("mobileMenu");
      mobileMenu.classList.toggle("hidden");
    };

    const btn = document.getElementById("myBtn");
    btn.addEventListener("click", toggleMenu);

    return () => {
      btn.removeEventListener("click", toggleMenu);
      
    };
  }, []);

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav class="bg-gray-600 fixed top-0 left-0 w-full z-50">
        <div class="flex justify-between items-center h-16 md:h-18 lg:h-18 px-5 sm:px-10 lg:px-20 text-white">
          {/* <!-- Logo --> */}
          <a
            href="#"
            class="text-2xl lg:text-3xl flex items-center gap-2 font-serif"
          >
            <i class="fa-solid fa-shop text-green-700"></i>
            <img
              src="/public/images/myphoto.jpg"
              className=" w-10 h-10 rounded-full"
            />
          </a>

          {/* <!-- Navbar Links (Desktop) --> */}
          <ul class="hidden md:flex gap-8 text-lg">
            <li>
              <a href="/" class="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" class="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/about" class="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" class="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/skills" class="hover:underline">
                Skills
              </a>
            </li>
          </ul>

          {/* <!-- Actions --> */}
          <div class="flex items-center gap-5">
            {/* <!-- User Icon --> */}

            <i class="fa-solid fa-circle-user text-2xl lg:text-3xl hover:cursor-pointer"></i>

            <button class="md:hidden text-2xl" id="myBtn">
              <img src="/public/images/toggle.png" className=" w-6 h-6 " />
            </button>
          </div>
        </div>

        {/* <!-- Mobile Dropdown Menu --> */}
        <div
          id="mobileMenu"
          class="md:hidden bg-gray-800 text-white p-5 space-y-3"
        >
          <a href="/" class="block hover:bg-gray-700 py-2 px-4 rounded">
            Home
          </a>
          <a href="/Skills" class="block hover:bg-gray-700 py-2 px-4 rounded">
            Skills
          </a>
          <a href="/about" class="block hover:bg-gray-700 py-2 px-4 rounded">
            About
          </a>
          <a href="/contact" class="block hover:bg-gray-700 py-2 px-4 rounded">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
