import { Link } from 'react-router-dom';
import { Scissors, Award, Clock, Star, ArrowRight, Phone } from 'lucide-react';
import { services, deals } from '../data/services';
import { formatPrice } from '../lib/utils';

const Home = () => {
  const features = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Expert Hair Stylists',
      description: '10+ years experienced professional team specializing in modern haircuts and styling in Rawalpindi'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Grooming Services',
      description: 'Luxury facials, keratin treatments, and premium grooming packages for the modern gentleman'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Timing',
      description: 'Open 7 days a week from 9 AM to 12 AM in Satellite Town for your convenience'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Best Quality Products',
      description: 'Janssen, BE Cute, and premium international brands for superior grooming results'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - AutoGemz Style */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center justify-center">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
        </div>

        {/* Content Overlay */}
        <div className="container-custom relative z-10 py-32">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Best Men's Salon in Satellite Town
              <span className="block mt-2 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Trimmer Men's Saloon Rawalpindi
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto px-4">
              Premium men's grooming, haircuts, beard styling & grooming packages in Rawalpindi with 15+ years expertise
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a href="tel:0307-5552224" className="btn-primary flex items-center space-x-2 text-lg px-10 py-4">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <Link to="/services" className="btn-outline text-lg px-10 py-4">
                View Services
              </Link>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto mt-16">
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary-400 mb-2">15+</p>
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary-400 mb-2">10K+</p>
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary-400 mb-2">50+</p>
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section - Service Cards */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-white">Why Choose Trimmer Men's Saloon in Rawalpindi</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Satellite Town's most trusted men's saloon providing exceptional grooming experiences with attention to detail and 100% customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black border-2 border-primary-500 rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <Link to="/services" className="text-primary-500 font-semibold hover:text-primary-400 inline-flex items-center">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section-padding bg-black overflow-hidden">
        <div className="container-custom mb-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-white">Popular Men's Grooming Services in Rawalpindi</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Discover our most sought-after premium haircuts, facials, and styling services in Satellite Town
            </p>
          </div>
        </div>

        {/* Scrolling Services Container */}
        <div className="scroll-container">
          <div className="scroll-content">
            {/* Duplicate the services array for infinite scroll effect */}
            {[...services.cuttings.slice(0, 3), ...services.facials.slice(0, 3), ...services.cuttings.slice(0, 3), ...services.facials.slice(0, 3)].map((service, idx) => (
              <div key={idx} className="flex-shrink-0 w-[100px] sm:w-[280px] md:w-[320px] bg-black border-2 border-primary-500 rounded-[1rem] sm:rounded-[2rem] p-2 sm:p-4 md:p-6 hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-1 sm:mb-3 md:mb-4">
                  <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors flex-1 line-clamp-2">
                    {service.name}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-2 sm:mt-4 md:mt-6">
                  <span className="text-lg sm:text-3xl md:text-4xl font-bold text-primary-500">
                    {formatPrice(service.price)}
                  </span>
                  <Link
                    to="/services"
                    className="text-primary-500 font-semibold hover:text-primary-400 inline-flex items-center text-xs sm:text-sm md:text-base mt-1 sm:mt-0"
                  >
                    <span className="hidden sm:inline">Learn More</span> <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-block text-lg px-10 py-4">
            View All Services
          </Link>
        </div>
      </section>

      {/* Special Deals */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Special Deals</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get more value with our exclusive package deals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deals.map((deal, idx) => (
              <div
                key={deal.id}
                className={`bg-black border-2 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-2 transition-all duration-300 ${idx === 3 ? 'border-primary-500 ring-4 ring-primary-500/30' : 'border-primary-500'}`}
              >
                {idx === 3 && (
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-black text-center py-2 font-bold text-sm">
                    SPECIAL PACKAGE
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {deal.name}
                  </h3>
                  <p className="text-4xl font-bold mb-6 text-primary-500">{formatPrice(deal.price)}</p>
                  <ul className="space-y-3 mb-8">
                    {deal.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-500 mr-2 font-bold text-xl">✓</span>
                        <span className="text-gray-400">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:0307-5552224" className="btn-primary w-full text-center block">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmed Khan',
                location: 'Rawalpindi',
                rating: 5,
                text: 'Best saloon experience in town! The staff is professional and the ambiance is top-notch. Highly recommended for anyone looking for quality grooming services.',
              },
              {
                name: 'Usman Ali',
                location: 'Islamabad',
                rating: 5,
                text: 'I have been coming here for years and never disappointed. M. Ilyas and his team know exactly what they are doing. Premium service at its finest!',
              },
              {
                name: 'Hassan Raza',
                location: 'Rawalpindi',
                rating: 5,
                text: 'Excellent service! The bridal package was worth every penny. My grooming was perfect for my special day. Thank you Trimmer Men\'s Saloon!',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-black border-2 border-primary-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center bg-primary-500 text-black px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="font-bold">{testimonial.rating}</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Look Your Best?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90">
            Book your appointment today and experience the premium grooming service you deserve
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0307-5552224" className="bg-white text-black hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 text-lg">
              <Phone className="w-5 h-5" />
              <span>0307-5552224</span>
            </a>
            <a href="tel:0300-5049246" className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 text-lg">
              <Phone className="w-5 h-5" />
              <span>0300-5049246</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
