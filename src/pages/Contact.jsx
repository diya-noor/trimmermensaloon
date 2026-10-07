import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Compact */}
      <section className="relative bg-black text-white overflow-hidden py-12">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Book Your Appointment
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Call us now to schedule your premium grooming session
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:0307-5552224" className="btn-primary inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>0307-5552224</span>
              </a>
              <a href="tel:0300-5049246" className="btn-outline inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>0300-5049246</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="heading-3 mb-8 text-white">Get In Touch</h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-500 text-black p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">Our Location</h3>
                      <p className="text-gray-300">
                        B-991 Haideri Chowk, 4th Road<br />
                        B-block Satellite Town<br />
                        Commercial Market, Near Chicken Base<br />
                        Basement of Samba Bank, Rawalpindi
                      </p>
                      <a
                        href="https://maps.app.goo.gl/38Mm5zUtkBwuzCmBA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-400 font-semibold mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-500 text-black p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">Phone Numbers</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:0307-5552224"
                          className="text-gray-300 hover:text-primary-400 block"
                        >
                          0307-5552224
                        </a>
                        <a
                          href="tel:0300-5049246"
                          className="text-gray-300 hover:text-primary-400 block"
                        >
                          0300-5049246
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-500 text-black p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">Email</h3>
                      <a
                        href="mailto:trimmermenssaloon@gmail.com"
                        className="text-gray-300 hover:text-primary-400"
                      >
                        trimmermenssaloon@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-500 text-black p-3 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">Opening Hours</h3>
                      <div className="space-y-2 text-gray-300">
                        <p className="flex justify-between">
                          <span>Open 7 Days a Week</span>
                          <span className="font-semibold text-primary-500">9 AM - 12 AM</span>
                        </p>
                        <p className="text-sm text-gray-500 italic">
                          Monday - Sunday
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & QR Code */}
            <div>
              <h2 className="heading-3 mb-8 text-white">Find Us</h2>

              {/* Map */}
              <div className="card mb-6 overflow-hidden">
                <div className="aspect-video bg-gray-900">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.8789966802055!2d73.06142409839478!3d33.63751639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df955b2b2147d3%3A0xab164966f30824a8!2sTrimmer%20Mens%20Saloon!5e0!3m2!1sen!2s!4v1769023971286!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Trimmer Men's Saloon Location"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-black p-8 rounded-2xl border-2 border-primary-400">
                <div className="space-y-3">
                  <a
                    href="tel:0307-5552224"
                    className="btn-secondary w-full text-center block"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call: 0307-5552224
                  </a>
                  <a
                    href="https://wa.me/923075552224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl w-full text-center block"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
