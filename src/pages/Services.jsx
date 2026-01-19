import { useState } from 'react';
import { services } from '../data/services';
import { formatPrice } from '../lib/utils';
import { Scissors, Sparkles, Star, Phone } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('cuttings');

  const categories = [
    { id: 'cuttings', name: 'Cuttings & Styling', icon: <Scissors className="w-5 h-5" /> },
    { id: 'cleansing', name: 'Cleansing', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'facials', name: 'Facials', icon: <Star className="w-5 h-5" /> },
    { id: 'facilities', name: 'Premium Facilities', icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-black text-white py-16 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074')"}}></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-1 text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive range of premium grooming services
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 bg-black/95 backdrop-blur-md shadow-md z-40 border-b-2 border-primary-500/50">
        <div className="container-custom">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-black shadow-lg shadow-primary-500/50'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-primary-500/30'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services[activeCategory].map((service) => (
              <div
                key={service.id}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors flex-1">
                      {service.name}
                    </h3>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold text-primary-500">
                      {formatPrice(service.price)}
                    </span>
                    <a
                      href="tel:0307-5552224"
                      className="text-sm bg-primary-500 hover:bg-primary-600 text-black px-4 py-2 rounded-lg transition-colors flex items-center space-x-1 font-semibold"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Book</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {services[activeCategory].length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services available in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-black py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-black mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black/80">
            Call us now to schedule your grooming session
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

export default Services;
