import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.webp";
import { navItems } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">FlowPilot</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4  hover:bg-gradient-to-r from-pink-400 to-pink-700 hover:text-white border border-pink-500 text-pink-500 rounded-md"
            >
              Log In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-pink-400 to-pink-700 py-2 px-4 rounded-md"
            >
              Register
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleToggle}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <a
                href="#"
                className="py-2 px-4  hover:bg-gradient-to-r from-pink-400 to-pink-700 hover:text-white border border-pink-500 text-pink-500 rounded-md"
              >
                Log In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-pink-400 to-pink-700 py-2 px-4 rounded-md"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
