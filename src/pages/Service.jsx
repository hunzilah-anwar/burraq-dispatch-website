import { useParams, Navigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Service = () => {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              {service.title}
            </h1>

            <p className="mt-4 text-xl max-w-2xl mx-auto">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                {service.heroTitle}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-112.5 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Service Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md border-l-4 border-main"
              >
                <h3 className="font-semibold text-lg">✓ {feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose This Service
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
                >
                  <span className="text-main text-2xl font-bold">✓</span>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {service.pricing && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Transparent Pricing</h2>

            <p className="text-5xl font-bold text-primary mb-4">
              {service.pricing.fee}
            </p>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {service.pricing.note}
            </p>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-white shadow-md rounded-lg border border-gray-100"
                >
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-4">
            Ready to Get {service.title}?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our dispatch experts today for a free consultation and
            quote.
          </p>

          <button className="bg-main px-8 py-3 text-white font-semibold">
            Get A Quote
          </button>
        </div>
      </section>
    </>
  );
};

export default Service;