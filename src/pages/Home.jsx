import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.jpg";
import TruckHaulingImg from "../assets/Truck-Hauling.webp";
import flatbedHeroImg from "../assets/flatbed-hero-scaled.jpg";

import {
  Circle,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import Location from "../components/Location";
import Testimonial from "../components/Testimonial";

const Home = () => {
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
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 md:mb-0">
              <h4 className="text-xl font-semibold text-white mb-2 font-roboto-condensed">
                Professional Transportation Service
              </h4>
              <h1 className="md:text-8xl text-6xl font-bold mb-4 text-white">
                Welcome To Buraq{" "}
                <span className="text-stroke">Dispatch LLC</span>
              </h1>
              <p className="text-lg text-gray-100 font-roboto-condensed">
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
              <div className="lg:w-1/2 w-full max-w-lg shadow-xl">
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
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="w-full h-full">
            <img
              src={TruckHaulingImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h2 className="text-lg font-bold mb-1 text-main">
              Nationwide Transport Services
            </h2>
            <h2 className="text-2xl font-bold mb-4">
              What Are They? A Brief Handbook for American Truck Drivers
            </h2>
            <p className="text-lg mb-2 text-gray-600">
              In the United States, truckers frequently deal with empty miles
              and copious paperwork. Dispatch services intervene to rectify
              that. They negotiate rates, look for high-paying loads, and deal
              with bureaucratic red tape. They keep your rig moving while you
              concentrate on the road. Imagine rolling out with a good haul by
              morning, rather than waiting days for a job.
            </p>
            <h2 className="text-lg font-bold mb-1 text-main">
              That’s exactly why we started Buraq Dispatch LLC
            </h2>
            <p className="text-lg mb-2 text-gray-600">
              We wanted to give owner operators and small fleets truck dispatching services that actually make sense, no headaches, no games.
            </p>
            <ul>
              <li className="flex items-center gap-2">
                <Circle className="text-main" size={16} />
                Steady freight paying
              </li>
              <li className="flex items-center gap-2">
                <Circle className="text-main" size={16} />
                Loads ready 24/7
              </li>
              <li className="flex items-center gap-2">
                <Circle className="text-main" size={16} />
                No forced dispatch
              </li>
              <li className="flex items-center gap-2">
                <Circle className="text-main" size={16} />
                Fixed Percentage fee (nothing hidden)
              </li>
              <li className="flex items-center gap-2">
                <Circle className="text-main" size={16} />
                No long contracts
              </li>
              <li className="flex items-center gap-2">
                <Circle className="text-main" size={16} />
                All paperwork, invoicing, and detention pay are handled for you
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Service Details */}
      <section className="py-24 bg-white">
        <div className="text-center max-w-5xl mx-auto px-6 mb-20">
          <h1 className="font-black text-4xl mb-4">
            Truck Dispatching Service for Owner Operator
          </h1>
          <p className="text-gray-500">
            One size never fits all in freight. We tailor dispatch to your
            trailer and cargo dry vans to heavies. Nationwide brokers mean
            steady access to lanes like I-80 corridors or Gulf Coast runs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          {servicesData.map((service) => (
            <div key={service.id} className="grid lg:grid-cols-5 gap-15 mb-6 bg-gray-100 p-8 rounded-[40px_0px_40px_0px] border border-gray-300">
              {/* Left Content */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl lg:text-3xl text-center bg-white py-4 rounded-[40px_0_40px_0] font-black text-primary leading-tight border border-main/50 shadow-[inset_0_0_60px_-15px_rgba(255,5,5,0.52)]">
                  {service.title}
                </h2>

                <p className="mt-6 text-[16px] text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right Gallery */}
              <div
                className={`col-span-2 overflow-hidden rounded-[40px_0px_40px_0px] h-70`}
              >
                <img
                  src={service.gallery[0]}
                  alt={`${service.title}`}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            </div>
          ))}
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
                  src={service.gallery[0]}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-200 mb-5">
                    {service.shortDescription}
                  </p>

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
      <Testimonial />
    </>
  );
};

export default Home;
