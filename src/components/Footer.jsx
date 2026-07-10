import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ChevronUp,
} from "lucide-react";
import Logo from "../assets/logo.png";
import { servicesData } from "../data/servicesData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white font-roboto-condensed relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <img
              src={Logo}
              alt="Buraq Dispatch LLC"
              className="w-28 mb-1"
            />

            <p className="text-gray-300 leading-7">
              Professional truck dispatch services helping owner operators
              and trucking companies maximize profits through reliable load
              booking and dedicated support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-secondary">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-main transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-main transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-main transition">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-main transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-secondary">
              Services
            </h3>

            <ul className="space-y-3">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-main transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-secondary">
              Contact Info
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone className="text-main mt-1" size={18} />
                <span>_____________</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-main mt-1" size={18} />
                <span>info@buraqdispatchllc.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-main mt-1" size={18} />
                <span>_____________</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Buraq Dispatch LLC. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 cursor-pointer bg-main flex items-center justify-center hover:bg-secondary hover:text-primary transition"
          >
            <ChevronUp size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;