import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  ArrowDownIcon,
  Menu,
  X,
} from "lucide-react";
import { servicesData } from "../data/servicesData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();
  const isServicesActive = location.pathname.startsWith("/services");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 bg-white shadow-lg animate-slideDown border-b-[5px] border-secondary"
            : "absolute top-0 left-0 bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-2">
          {/* Logo */}
          <Link to="/" className="w-18 h-18">
            <img
              src={Logo}
              alt="Buraq Dispatch LLC"
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
            {navLinks.map((link) => (
              <li className="relative group text-[16px]" key={link.path}>
                <NavLink to={link.path}>
                  {({ isActive }) => (
                    <>
                      <span
                        className={`transition-colors duration-300 ${
                          isSticky ? "text-primary" : "text-white"
                        }`}
                      >
                        {link.name}
                      </span>

                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-main transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            <li
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`font-semibold cursor-pointer transition-colors duration-300 ${
                  isSticky ? "text-primary" : "text-white"
                }`}
              >
                Services
              </button>

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-main transition-all duration-300 ${
                  isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />

              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-4 w-72 z-50">
                  <div className="bg-white shadow-xl border border-gray-200 font-roboto-condensed">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block px-5 py-4 text-primary hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="flex items-center">
            <Link
              to="/contact"
              className="hidden group md:block px-8 font-mono font-bold py-2.5 bg-main text-white hover:scale-102 transition relative overflow-hidden"
            >
              Call Now
              <span className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-full group-hover:translate-y-0 ease-in-out duration-300 w-[80%] mx-auto h-1.5 rounded-t-2xl bg-green-600"></span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`hover:text-main md:hidden cursor-pointer transition ease-in-out duration-300 hover:scale-110 ${
                isSticky ? "text-primary" : "text-white"
              } `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="hover:text-main cursor-pointer transition ease-in-out duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-4 text-lg font-semibold overflow-auto">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-main" : "text-primary"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className={`flex items-center justify-between w-full ${
                isServicesActive ? "text-main" : "text-primary"
              }`}
            >
              Services
              <span
                className={`transition-transform duration-300 ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                <ArrowDownIcon size={20} />
              </span>
            </button>

            {isMobileServicesOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-3">
                {servicesData.map((service) => (
                  <NavLink
                    key={service.id}
                    to={`/services/${service.slug}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      isActive ? "text-main font-semibold" : "text-gray-600"
                    }
                  >
                    {service.title}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 text-center px-5 py-3 bg-main text-white rounded-lg transition relative ease-in-out duration-300 hover:scale-102 overflow-hidden group"
          >
            Call Now
            <span className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-full group-hover:translate-y-0 ease-in-out duration-300 w-[80%] mx-auto h-1.5 rounded-t-2xl bg-green-600"></span>
          </Link>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
