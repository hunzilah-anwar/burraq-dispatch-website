import { Link } from "react-router-dom";
import {
  Truck,
  Clock3,
  ShieldCheck,
  Headset,
  Target,
  Eye,
} from "lucide-react";
import Testimonial from "../components/Testimonial";
import aboutImg from "../assets/flatbed-hero-scaled.jpg";

const About = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "Reliable Dispatching",
      desc: "We connect carriers with profitable loads while minimizing downtime and maximizing revenue.",
    },
    {
      icon: <Clock3 size={32} />,
      title: "24/7 Support",
      desc: "Our dispatch team remains available around the clock to assist drivers and carriers.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Trusted Operations",
      desc: "Transparent communication, accurate paperwork, and dependable load management.",
    },
    {
      icon: <Headset size={32} />,
      title: "Dedicated Assistance",
      desc: "Every client receives personalized support from experienced logistics specialists.",
    },
  ];

  const stats = [
    { number: "4000+", title: "Loads Booked Monthly" },
    { number: "98%", title: "On-Time Coordination" },
    { number: "70+", title: "Trusted Carriers" },
    { number: "24/7", title: "Dispatch Support" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src={aboutImg}
          alt="About Buraq Dispatch"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white mt-4">
            Buraq Dispatch LLC
          </h1>

          <p className="text-gray-200 text-lg max-w-3xl mx-auto mt-6">
            Delivering professional dispatch solutions, maximizing carrier
            profits, and helping trucking businesses grow across the United
            States.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <span className="text-main uppercase font-semibold tracking-wider">
                Who We Are
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
                Professional Truck Dispatch Solutions
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                Buraq Dispatch LLC is committed to helping owner-operators,
                fleets, and trucking companies operate more efficiently. Our
                experienced dispatchers handle load booking, route planning,
                broker communication, paperwork, and real-time support so
                drivers can focus on the road.
              </p>

              <p className="text-gray-600 leading-8">
                We understand the challenges faced by transportation
                businesses. That's why we provide personalized dispatch
                services designed to reduce downtime, increase earnings, and
                create long-term growth opportunities for our clients.
              </p>
            </div>

            <div>
              <img
                src={aboutImg}
                alt="About"
                className="w-full h-110 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center"
              >
                <h3 className="text-5xl font-bold text-main mb-3">
                  {item.number}
                </h3>

                <p className="font-semibold text-primary">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-main uppercase tracking-widest font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
              Driving Success For Carriers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-md border-t-4 border-main"
              >
                <div className="text-main mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-primary p-10 text-white">
              <Target size={45} className="text-secondary mb-5" />

              <h3 className="text-3xl font-bold mb-5">
                Our Mission
              </h3>

              <p className="leading-8 text-gray-300">
                To provide dependable dispatch services that maximize carrier
                profitability while maintaining exceptional communication,
                efficiency, and customer satisfaction.
              </p>
            </div>

            <div className="bg-main p-10 text-white">
              <Eye size={45} className="text-secondary mb-5" />

              <h3 className="text-3xl font-bold mb-5">
                Our Vision
              </h3>

              <p className="leading-8 text-gray-100">
                To become one of the most trusted trucking dispatch companies
                in North America by delivering innovative logistics solutions
                and long-term value to carriers and fleet owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">
            Ready To Grow Your Trucking Business?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let our experienced dispatch team help you find better loads,
            increase profits, and keep your trucks moving.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-main px-10 py-4 text-white font-bold hover:bg-secondary transition"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;