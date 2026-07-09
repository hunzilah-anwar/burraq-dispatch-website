import { useParams, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { servicesData } from "../data/servicesData";

const Service = () => {
  const { slug } = useParams();

  // Find target service safely
  const service = useMemo(() => {
    return servicesData?.find((item) => item.slug === slug) || null;
  }, [slug]);

  // State tracker for active open FAQ item (null means all closed)
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Early exit redirection if the record is missing
  if (!service) {
    return <Navigate to="/" replace />;
  }

  // Construct images array reliably. If no gallery is present, fallback to main hero image.
  const sourceImages =
    Array.isArray(service.gallery) && service.gallery.length > 0
      ? service.gallery
      : [service.image].filter(Boolean);

  // Triple the array to create a seamless seamless infinite loop layout visually
  const infiniteLoopTrack = [...sourceImages, ...sourceImages, ...sourceImages];

  const handleFaqToggle = (index) => {
    setExpandedFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full min-h-screen antialiased font-roboto-condensed">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            {service.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 2. Core Narrative / Feature Introduction */}
      <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-28 h-1 bg-main rounded-full" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {service.heroTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {service.description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-white border border-slate-200/60 rounded-2xl shadow-xl shadow-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Non-Stop Smooth Infinite Image Carousel */}
      {sourceImages.length > 0 && (
        <section className="overflow-hidden">
          <div className="relative w-full flex overflow-x-hidden group">
            {/* Inject native keyframes internally to bypass static build dependencies */}
            <style>{`
              @keyframes continuousMarquee {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-33.3333%, 0, 0); }
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: continuousMarquee 35s linear infinite;
              }
            `}</style>

            <div className="marquee-track px-3 group-hover:[animation-play-state:paused]">
              {infiniteLoopTrack.map((img, index) => (
                <div
                  key={`marquee-${index}`}
                  className="w-70 sm:w-95 h-60 shrink-0 overflow-hidden border border-slate-200/80 bg-slate-50"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Detailed Explanatory Cards */}
      {service.whatIsSection && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {service.whatIsSection.title}
              </h2>
              {service.whatIsSection.intro && (
                <p className="mt-4 text-slate-500 font-light leading-relaxed">
                  {service.whatIsSection.intro}
                </p>
              )}
            </div>

            {Array.isArray(service.whatIsSection.items) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="grid grid-cols-1 gap-6">
                  {service.whatIsSection.items.map((item, index) => (
                    <div
                      key={`whatis-${index}`}
                      className="p-8 bg-white border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-bold text-lg text-slate-900  mb-2">
                        {item.heading}
                      </h4>
                      <p className="text-slate-500 text-[16px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-full h-80 sm:h-96 overflow-hidden border border-slate-200/80 bg-slate-50 shadow-lg">
                  <img
                    src={service.gallery[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Matrix Comparisons / Pricing Matrix */}
      {service.comparisonTable && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-extrabold tracking-tight text-center mb-10">
              {service.comparisonTable.title}
            </h3>
            <div className="overflow-x-auto border border-slate-200 bg-white">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-main text-white">
                    {service.comparisonTable.columns.map((col, idx) => (
                      <th
                        key={`col-${idx}`}
                        className="p-4 font-semibold tracking-wider text-xs uppercase"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {service.comparisonTable.rows.map((row, rowIndex) => (
                    <tr
                      key={`row-${rowIndex}`}
                      className="hover:bg-slate-50/60 transition-colors"
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={`cell-${cellIndex}`} className="p-4">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 6. Capability Features & Benefits Checklist */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold text-main uppercase tracking-widest">
              Specifications
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2">
              What you receive as baseline standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features?.map((feature, index) => (
              <div
                key={`feat-${index}`}
                className="p-5 bg-gray-100 border border-gray-200 flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-md bg-secondary text-white flex items-center justify-center font-mono text-xs shrink-0">
                  ✓
                </div>
                <span className="text-sm text-primary font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {service.benefits && service.benefits.length > 0 && (
            <div className="mt-10 pt-10 border-t border-gray-200">
              <h4 className="text-lg font-bold mb-8 tracking-wider uppercase text-center md:text-left">
                Long-Term Value Delivery
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={`ben-${index}`}
                    className="flex gap-4 p-5 bg-gray-100 border border-gray-200 rounded-lg items-start transition hover:bg-slate-900/50"
                  >
                    <span className="text-emerald-400 font-mono text-sm select-none">
                      //
                    </span>
                    <p className="text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Roadmap */}
      {service.process && service.process.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
                Action Process Roadmap
              </h2>

              <p className="mt-5 text-lg text-slate-500">
                A proven step-by-step workflow designed to keep your trucks
                moving, maximize profits, and eliminate operational headaches.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2" />

              {service.process.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-6 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Circle */}
                  <div className="absolute left-6 md:left-1/2 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl md:-translate-x-1/2 z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-24 md:ml-0 bg-white border border-slate-200 p-8 transition-all duration-300 max-w-md ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-12"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {item.step}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Pristine Dynamic Accordion FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-slate-50 border-t border-slate-200/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Clear insights into operational workflows and service terms
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, index) => {
                const isCurrentOpen = expandedFaq === index;
                return (
                  <div
                    key={`faq-${index}`}
                    className="bg-white border-b border-slate-200/70 overflow-hidden hover:border-slate-300/80 transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => handleFaqToggle(index)}
                      aria-expanded={isCurrentOpen}
                      className="w-full cursor-pointer flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-main transition-colors focus:outline-none"
                    >
                      <span className="text-2xl pr-4">{faq.question}</span>
                      <span
                        className={`text-lg font-mono leading-none transition-transform duration-300 shrink-0 ${isCurrentOpen ? "rotate-45 text-main" : "text-slate-300"}`}
                      >
                        ＋
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isCurrentOpen
                          ? "max-h-200 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 text-slate-500 text-xs md:text-sm leading-relaxed bg-slate-200/50">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Service;
