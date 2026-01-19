import { packages, deals } from '../data/services';
import { formatPrice } from '../lib/utils';
import { Calendar, Star, Phone, Check } from 'lucide-react';

const Packages = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-black text-white py-16 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070')"}}></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-1 text-white mb-4">Grooming Packages</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete grooming solutions for special occasions
          </p>
        </div>
      </section>

      {/* Special Deals */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 text-white">Quick Deals</h2>
            <p className="text-gray-300 text-lg">Perfect for everyday grooming</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className={`card overflow-hidden ${
                  deal.id === 'nikkah-deal' ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {deal.id === 'nikkah-deal' && (
                  <div className="bg-primary-500 text-white text-center py-2 font-semibold">
                    SPECIAL PACKAGE
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-2 text-white">{deal.name}</h3>
                  <p className="text-4xl font-bold text-primary-400 mb-6">
                    {formatPrice(deal.price)}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {deal.services.map((service, index) => (
                      <li key={index} className="flex items-start text-white">
                        <Check className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:0307-5552224"
                    className="btn-primary w-full text-center block"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Day Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 text-white">Multi-Day Grooming Packages</h2>
            <p className="text-gray-300 text-lg">
              Complete bridal and special event grooming solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`card ${index === 0 ? 'ring-2 ring-primary-500' : ''}`}
              >
                {index === 0 && (
                  <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white text-center py-3 font-bold text-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2 text-white">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-primary-400">
                        {formatPrice(pkg.price)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {pkg.days.map((day) => (
                      <div key={day.day} className="bg-black/40 border border-primary-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-3 text-primary-400">
                          Day {day.day}
                        </h4>
                        <ul className="space-y-2">
                          {day.services.map((service, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-white"
                            >
                              <Star className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:0307-5552224"
                    className="btn-primary w-full text-center block mt-6"
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-black py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-black mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black/80">
            Contact us to create a personalized grooming package for your special event
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0307-5552224" className="btn-secondary flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>0307-5552224</span>
            </a>
            <a href="tel:0300-5049246" className="btn-secondary flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>0300-5049246</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
