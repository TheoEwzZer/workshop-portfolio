import React from "react";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-end mx-auto p-8">
        <div className="block w-auto">
          <ul className="font-medium flex rounded-lg flex-row space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  class="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
