import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../assets/techworks.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-innovator" },
    { name: "Products", link: "/products" },
    { name: "Features", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2c3e50] shadow-lg"
          : "bg-gray-900 bg-opacity-90 backdrop-blur-sm"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={LogoWhite} alt="Fowohodie Logo" className="w-30 h-10" />
        </Link>

        {/* Centered Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className={`relative text-white text-base transition-colors ${
                    isActive(item.link)
                      ? "font-semibold text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-1 after:bg-[#0A5EB0] after:rounded-full"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop Now Button with Paystack Storefront */}
        <a
          href="https://paystack.shop/techworks-gh"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-[#0A5EB0] hover:bg-blue-800 text-white font-medium px-5 py-2.5 rounded-lg items-center gap-2 transition-all duration-300 hover:shadow-md"
        >
          <ShoppingCart size={18} />
          Shop Now
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 rounded-lg bg-[#0A5EB0] text-gray-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-16 left-0 w-full bg-gray-800 p-4 shadow-lg md:hidden"
        >
          <ul className="flex flex-col space-y-4 font-medium items-start">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className={`block transition-colors relative text-white py-2 ${
                    isActive(item.link)
                      ? "font-semibold text-blue-400 border-l-4 border-blue-400 pl-3"
                      : "hover:text-blue-400 pl-3"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Shop Now Button (Mobile) */}
          <a
            href="https://paystack.shop/techworks-gh"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-[#0A5EB0] hover:bg-[#0A5EB0] text-white font-medium px-5 py-3 rounded-lg flex justify-center items-center gap-2 transition-all duration-300 hover:shadow-md"
          >
            <ShoppingCart size={20} />
            Shop Now
          </a>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
