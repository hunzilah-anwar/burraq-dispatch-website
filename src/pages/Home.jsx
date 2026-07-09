import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.jpg";
import TruckHaulingImg from "../assets/Truck-Hauling.webp";
import flatbedHeroImg from "../assets/flatbed-hero-scaled.jpg";

import {
  Truck,
  MapPin,
  Headphones,
  Users,
  UserCheck,
  CreditCard,
  Star,
  Shield,
  Award,
  Building2,
  Route,
  TrendingUp,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import Location from "../components/Location";

const Home = () => {
  const features = [
    {
      icon: Truck,
      text: "Over 150,000 Trucks Nationwide",
    },
    {
      icon: MapPin,
      text: "Multiple Locations Nationwide",
    },
    {
      icon: Headphones,
      text: "7-Day Customer Service Extended Hours",
    },
    {
      icon: Users,
      text: "30,000 Contracted Carriers",
    },
    {
      icon: UserCheck,
      text: "One-on-One Logistics Specialists",
    },
    {
      icon: CreditCard,
      text: "Flexible Payment Options",
    },
    {
      icon: Star,
      text: "5/5 Star Rated Business",
    },
    {
      icon: Shield,
      text: "Contingent Cargo Insurance",
    },
    {
      icon: Award,
      text: "Top 100 Freight Brokerage",
    },
    {
      icon: Building2,
      text: "A+ Rated - BBB Accredited",
    },
    {
      icon: Route,
      text: "Diversified Trucking Options",
    },
    {
      icon: TrendingUp,
      text: "Inc. 5000 Fastest Growing Company 3 Years In A Row",
    },
  ];

  return (
    <>
      <section
        className="bg-gray-100 py-20 pt-40"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h4 className="text-xl font-semibold text-white mb-2 font-roboto-condensed">
                Professional Transportation Service
              </h4>
              <h1 className="text-8xl font-bold mb-4 text-white">
                Welcome To Buraq{" "}
                <span className="text-stroke">Dispatch LLC</span>
              </h1>
              <p className="text-lg text-gray-200 font-roboto-condensed">
                We provide top-notch dispatch services for your business needs.
                Our team is dedicated to ensuring timely and efficient delivery
                of your goods.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-main transition font-roboto-condensed"
              >
                Get Started
              </Link>
            </div>
            <div className="flex items-center justify-end w-full translate-y-[20%]">
              <div className="md:w-1/2 w-full max-w-lg shadow-xl">
                <h2 className="text-3xl font-bold text-white py-8 px-8 bg-main">
                  Request a Quote
                </h2>
                <div className="bg-white px-8 py-8 shadow-xl">
                  <form className="space-y-8">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-main"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-main"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-main"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-main"
                      />
                    </div>

                    <div>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your requirements..."
                        className="w-full border-b border-gray-300 py-3 outline-none resize-none focus:border-main"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 font-semibold hover:bg-main cursor-pointer transition"
                    >
                      Get Free Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 font-roboto-condensed">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/5 backdrop-blur-sm border border-black/10 p-8 text-center hover:border-main transition duration-300">
              <h3 className="text-5xl font-bold text-main mb-3">500+</h3>
              <p className="text-black text-lg font-medium">
                Loads Booked Monthly
              </p>
            </div>

            <div className="bg-black/5 backdrop-blur-sm border border-black/10 p-8 text-center hover:border-main transition duration-300">
              <h3 className="text-5xl font-bold text-main mb-3">98%</h3>
              <p className="text-black text-lg font-medium">
                On-Time Coordination
              </p>
            </div>

            <div className="bg-black/5 backdrop-blur-sm border border-black/10 p-8 text-center hover:border-main transition duration-300">
              <h3 className="text-5xl font-bold text-main mb-3">24/7</h3>
              <p className="text-black text-lg font-medium">Dispatch Support</p>
            </div>

            <div className="bg-black/5 backdrop-blur-sm border border-black/10 p-8 text-center hover:border-main transition duration-300">
              <h3 className="text-5xl font-bold text-main mb-3">50+</h3>
              <p className="text-black text-lg font-medium">Trusted Carriers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:p-20 p-10 bg-[rgba(240,227,211,.5)] font-roboto-condensed">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full h-full">
            <img
              src={TruckHaulingImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1 text-main">
              Nationwide Transport Services
            </h2>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Buraq Dispatch LLC?
            </h2>
            <p className="text-lg mb-2 text-gray-600">
              Nationwide Transport Services is proud to serve you as a
              third-party trucking broker. We specialize in freight shipping,
              heavy hauling, and auto transportation solutions.
              <br />
              <br />
              Our logistics services have been at the top of the industry for
              over a decade. We're dedicated to building our reputation as the
              standard for trucking brokers and transportation solution
              providers. We know that few orders are the same, so we look at
              every request with an eye for detail and precision.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white font-roboto-condensed">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-main font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
              Trusted Freight & Dispatch Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-4 p-6 border border-gray-200 hover:border-main hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-main/10 text-main shrink-0 group-hover:bg-main group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>

                  <p className="font-semibold text-primary leading-relaxed text-center">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 font-roboto-condensed">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-main font-semibold uppercase tracking-widest">
              Our Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
              Transportation Solutions For Every Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group relative overflow-hidden shadow-lg h-112.5"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-200 mb-5">{service.description}</p>

                  <button className="inline-flex items-center gap-2 text-secondary font-semibold border-b-2 border-secondary pb-1 cursor-pointer hover:text-main hover:border-main transition">
                    Learn More →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-24 bg-cover bg-center relative font-roboto-condensed"
        style={{ backgroundImage: `url(${flatbedHeroImg})` }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-secondary font-bold uppercase tracking-widest">
              Customer Experience
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-8">
              Dedicated Support From Start To Finish
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Nationwide Transport Services assigns a dedicated representative
              to every order. Your specialist takes your order, dispatches the
              shipment, tracks the load, and verifies delivery. They ensure the
              transportation plan aligns with your requirements while helping
              resolve communication issues throughout the shipping process.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed mb-10">
              Rather than dealing with multiple departments, you'll work
              directly with a knowledgeable logistics professional who
              understands your shipment and remains your point of contact from
              pickup to delivery. Before transportation begins, we gather
              detailed shipment information to create a smooth and efficient
              delivery experience.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                What Sets Us Apart?
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Personalized shipping solutions",
                  "Dedicated load specialists",
                  "Responsive customer support",
                  "Professional finance department",
                  "Flexible payment options",
                  "Experienced drivers",
                  "Cost-effective transportation",
                  "Commitment to customer satisfaction",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Location />
    </>
  );
};

export default Home;
