import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import aboutImg from "../assets/Fleet-owner-1.jpg";
import { servicesData } from "../data/servicesData";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: servicesData[0]?.slug || "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiUrl}/contact.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "", email: "", phone: "", companyName: "", service: servicesData[0]?.slug || "", message: ""
        });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-primary font-roboto-condensed"
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-secondary uppercase tracking-[5px] font-semibold">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
            Get In Touch
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Have questions about our dispatch services? Contact our team today
            and let us help keep your trucks moving and profitable.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <span className="text-main uppercase tracking-widest font-semibold">
                Contact Information
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
                Let's Talk About Your Transportation Needs
              </h2>

              <p className="text-gray-600 leading-8 mb-10">
                Whether you're an owner operator, fleet owner, or shipper, our
                dispatch specialists are ready to provide professional support
                and customized transportation solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 bg-gray-100 border border-gray-300">
                  <Phone className="text-main mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl text-primary">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">(713)309-6773</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-gray-100 border border-gray-300">
                  <Mail className="text-main mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl text-primary">
                      Email Address
                    </h3>
                    <p className="text-gray-600">info@buraqdispatchllc.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-gray-100 border border-gray-300">
                  <MapPin className="text-main mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl text-primary">
                      Office Location
                    </h3>
                    <p className="text-gray-600">_____________</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-gray-100 border border-gray-300">
                  <Clock className="text-main mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl text-primary">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">24/7 Dispatch Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="bg-white shadow-xl p-8 lg:p-10 border border-gray-300">
              <h3 className="text-3xl font-bold text-primary mb-8">
                Request A Free Quote
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-main"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-main"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-main"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-main"
                  />
                </div>

                <div>
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-main bg-white"
                  >
                    {servicesData.map((service) => (
                      <option key={service.id} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your transportation requirements..."
                    className="w-full border border-gray-300 px-5 py-4 outline-none resize-none focus:border-main"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-main text-white py-4 font-bold flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-hidden shadow-xl">
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=Houston%20Texas&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="w-full h-125"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
