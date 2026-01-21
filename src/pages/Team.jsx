import { boss, employees } from '../data/employees';
import { Star, Briefcase, Phone, CheckCircle, XCircle } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-black text-white py-16 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070')"}}></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-1 text-white mb-4 text-3xl sm:text-4xl md:text-5xl">Meet Our Team</h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Expert professionals dedicated to your grooming needs
          </p>
        </div>
      </section>

      {/* Boss/Owner Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="card overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white text-center py-3 font-bold text-lg">
                OWNER & MASTER STYLIST
              </div>
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-xl shadow-primary-500/30">
                      <div className="w-full h-full rounded-full overflow-hidden bg-dark-900">
                        <img
                          src={boss.image}
                          alt={`${boss.name} - ${boss.role} at Trimmer Men's Saloon Rawalpindi`}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full rounded-full bg-dark-900 items-center justify-center text-white text-6xl font-bold hidden">
                          {boss.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h2 className="text-4xl font-display font-bold mb-2 text-white">
                      {boss.name}
                    </h2>
                    <p className="text-xl text-primary-500 font-semibold mb-4">
                      {boss.tagline}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {boss.bio}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5 text-primary-500" />
                        <div>
                          <p className="text-sm text-gray-400">Experience</p>
                          <p className="font-semibold text-white">{boss.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary-500" />
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <a href={`tel:${boss.phone}`} className="font-semibold text-white hover:text-primary-400">
                            {boss.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {boss.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employees Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 text-white">Our Professional Staff</h2>
            <p className="text-gray-300 text-lg">
              Skilled experts ready to serve you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {employees.map((employee) => (
              <div key={employee.id} className="card group">
                <div className="p-3 sm:p-6">
                  {/* Avatar */}
                  <div className="flex justify-center mb-2 sm:mb-4">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 group-hover:scale-105 transition-transform shadow-lg shadow-primary-500/20">
                      <div className="w-full h-full rounded-full overflow-hidden bg-dark-900">
                        <img
                          src={employee.image}
                          alt={`${employee.name} - ${employee.role} at Trimmer Men's Saloon Rawalpindi`}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: employee.imagePosition || 'center top' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full rounded-full bg-black items-center justify-center text-white text-2xl sm:text-4xl font-bold hidden">
                          {employee.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-sm sm:text-xl font-semibold mb-1 text-white group-hover:text-primary-400 transition-colors text-center sm:text-left">
                    {employee.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-2 text-xs sm:text-base text-center sm:text-left">{employee.role}</p>

                  <div className="flex items-center justify-between mb-3 flex-wrap gap-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 fill-current" />
                      <span className="text-xs sm:text-sm font-semibold text-white">{employee.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      <span className="text-xs sm:text-sm text-gray-300">{employee.experience}</span>
                    </div>
                  </div>

                  {/* Availability Badge */}
                  <div className="mb-2 sm:mb-4">
                    {employee.available ? (
                      <span className="flex items-center justify-center sm:justify-start text-green-400 text-xs sm:text-sm font-medium">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Available
                      </span>
                    ) : (
                      <span className="flex items-center justify-center sm:justify-start text-gray-400 text-xs sm:text-sm font-medium">
                        <XCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Busy
                      </span>
                    )}
                  </div>

                  {/* Specialties - hidden on mobile */}
                  <div className="hidden sm:block">
                    <p className="text-xs font-semibold text-gray-300 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {employee.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-primary-500/20 text-primary-400 border border-primary-500/40 px-2 py-1 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
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
            Book with Our Experts
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black/80">
            Schedule your appointment and experience professional grooming services
          </p>
          <a href="tel:0307-5552224" className="btn-secondary inline-flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Call Now: 0307-5552224</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
