import { useState } from "react";
import locationImg from "../assets/location-Img.jpg";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    name: "Texas",
    map: "https://maps.google.com/maps?q=Texas&t=&z=5&ie=UTF8&iwloc=&output=embed",
  });
  const locations = [
    {
      name: "Texas",
      map: "https://maps.google.com/maps?q=Texas&t=&z=5&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "California",
      map: "https://maps.google.com/maps?q=California&t=&z=5&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Florida",
      map: "https://maps.google.com/maps?q=Florida&t=&z=5&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Georgia",
      map: "https://maps.google.com/maps?q=Georgia&t=&z=6&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "New York",
      map: "https://maps.google.com/maps?q=New+York&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Illinois",
      map: "https://maps.google.com/maps?q=Illinois&t=&z=6&ie=UTF8&iwloc=&output=embed",
    },
  ];
  return (
    <section className="py-20 bg-gray-50 font-roboto-condensed">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-main font-semibold uppercase tracking-widest">
            Our Coverage
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
            Nationwide Transportation Network
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            We provide reliable freight and dispatch services across major
            cities and transportation hubs throughout the United States.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Image */}
          <div className="overflow-hidden">
            <img
              src={locationImg}
              alt="Nationwide Coverage"
              className="w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Serving Major Freight Corridors
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {locations.map((location) => (
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location)}
                  className={`flex items-center gap-3 p-4 border transition-all duration-300 cursor-pointer ${
                    selectedLocation.name === location.name
                      ? "bg-gray-300 text-primary border-gray-300"
                      : "bg-white text-primary border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      selectedLocation.name === location.name
                        ? "bg-main"
                        : "bg-white"
                    }`}
                  ></span>

                  <span className="font-semibold">{location.name}</span>
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden shadow-lg border">
              <iframe
                title={selectedLocation.name}
                src={selectedLocation.map}
                className="w-full h-75"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
