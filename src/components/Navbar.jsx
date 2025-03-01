// import { useState, useEffect, useRef } from "react";
// import { Menu, X, Search, ShoppingCart, User, Sun, Moon } from "lucide-react";
// // import Logo from "../assets/fawohodie-logo1.png";
// import { Link, useLocation } from "react-router-dom";
// import LogoDark from "../assets/fawohodie-logo1.png"; // Original dark logo
// import LogoWhite from "../assets/fawohodie-logo-white.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation();
//   const mobileMenuRef = useRef(null);
//   const menuButtonRef = useRef(null);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle click outside to close mobile menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isOpen &&
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target) &&
//         !menuButtonRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   // Navbar menu items with section links
//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about-innovator" },
//     { name: "Products", link: "/products" },
//     { name: "Features", link: "/about-us" },
//     { name: "Contact", link: "/contact" },
//   ];

//   // Check if link is active
//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav
//       className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-amber-300 shadow-lg"
//           : "bg-amber-300 bg-opacity-90 backdrop-blur-sm"
//       } ${darkMode ? "bg-gray-900 text-white" : ""}`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo with Link */}
//         <Link to="/" className="flex items-center space-x-6">
//           <img
//             src={darkMode ? LogoWhite : LogoDark}
//             alt="Fowohodie Logo"
//             className="w-40 h-10"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {navLinks.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.link}
//                 className={`transition-colors relative ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 } ${
//                   isActive(item.link)
//                     ? "font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-amber-600"
//                     : "hover:text-amber-600"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Action Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <button
//             className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//             aria-label="Search"
//           >
//             <Search
//               size={20}
//               className={darkMode ? "text-white" : "text-gray-800"}
//             />
//           </button>
//           <button
//             className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
//             aria-label="Cart"
//           >
//             <ShoppingCart
//               size={20}
//               className={darkMode ? "text-white" : "text-gray-800"}
//             />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               3
//             </span>
//           </button>
//           <button
//             className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//             aria-label="Account"
//           >
//             <User
//               size={20}
//               className={darkMode ? "text-white" : "text-gray-800"}
//             />
//           </button>
//           <button
//             className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//             onClick={toggleDarkMode}
//             aria-label={
//               darkMode ? "Switch to light mode" : "Switch to dark mode"
//             }
//           >
//             {darkMode ? (
//               <Sun size={20} className="text-white" />
//             ) : (
//               <Moon size={20} className="text-gray-800" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           ref={menuButtonRef}
//           className={`md:hidden p-2 rounded-lg ${
//             darkMode ? "bg-amber-500 text-gray-900" : "bg-gray-800 text-white"
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           ref={mobileMenuRef}
//           className={`absolute top-16 left-0 w-full ${
//             darkMode ? "bg-gray-800" : "bg-amber-300"
//           } p-4 shadow-lg md:hidden`}
//         >
//           <ul className="flex flex-col space-y-4 font-medium">
//             {navLinks.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.link}
//                   className={`block transition-colors relative ${
//                     darkMode ? "text-white" : "text-gray-900"
//                   } ${
//                     isActive(item.link)
//                       ? "font-semibold text-amber-600"
//                       : "hover:text-amber-600"
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-700">
//             <button
//               className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//               aria-label="Search"
//             >
//               <Search
//                 size={20}
//                 className={darkMode ? "text-white" : "text-gray-800"}
//               />
//             </button>
//             <button
//               className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
//               aria-label="Cart"
//             >
//               <ShoppingCart
//                 size={20}
//                 className={darkMode ? "text-white" : "text-gray-800"}
//               />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <button
//               className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//               aria-label="Account"
//             >
//               <User
//                 size={20}
//                 className={darkMode ? "text-white" : "text-gray-800"}
//               />
//             </button>
//             <button
//               className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//               onClick={toggleDarkMode}
//               aria-label={
//                 darkMode ? "Switch to light mode" : "Switch to dark mode"
//               }
//             >
//               {darkMode ? (
//                 <Sun size={20} className="text-white" />
//               ) : (
//                 <Moon size={20} className="text-gray-800" />
//               )}
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../assets/fawohodie-logo-white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu
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

  // Navbar menu items with section links
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-innovator" },
    { name: "Products", link: "/products" },
    { name: "Features", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-lg"
          : "bg-gray-900 bg-opacity-90 backdrop-blur-sm"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Link */}
        <Link to="/" className="flex items-center">
          <img src={LogoWhite} alt="Fowohodie Logo" className="w-40 h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className={`transition-colors relative text-white text-base ${
                  isActive(item.link)
                    ? "font-semibold text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-1 after:bg-amber-400 after:rounded-full"
                    : "hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

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
          <ul className="flex flex-col space-y-4 font-medium">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
