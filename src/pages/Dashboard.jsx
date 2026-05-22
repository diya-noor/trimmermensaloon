import { useState } from 'react';
import { boss, employees } from '../data/employees';
import { services, deals, packages } from '../data/services';
import {
  Users,
  DollarSign,
  TrendingUp,
  Star,
  CheckCircle,
  XCircle,
  BarChart3
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for dashboard
  const stats = [
    {
      title: 'Total Revenue',
      value: 'Rs. 450,000',
      change: '+18%',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      title: 'Active Staff',
      value: '9/10',
      change: '90%',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Avg. Rating',
      value: '4.8',
      change: '+0.2',
      icon: <Star className="w-6 h-6" />,
      color: 'bg-primary-500'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'staff', name: 'Staff Management', icon: <Users className="w-4 h-4" /> },
    { id: 'services', name: 'Services', icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-black text-white py-16 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070')"}}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="heading-2 text-white mb-2">Dashboard</h1>
              <p className="text-gray-300">Welcome back, {boss.name}</p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-sm text-gray-400">Current Time</p>
                <p className="text-2xl font-bold text-primary-400">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-black/95 border-b-2 border-primary-500/50 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex space-x-2 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-black shadow-lg shadow-primary-500/50'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-primary-500/30'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="section-padding bg-black">
          <div className="container-custom">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="card">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${stat.color} text-white p-3 rounded-lg`}>
                        {stat.icon}
                      </div>
                      <span className="text-green-400 text-sm font-semibold">
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Staff Management Tab */}
      {activeTab === 'staff' && (
        <div className="section-padding bg-black">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white">Staff Overview</h2>
              <p className="text-gray-400">Manage your team and monitor their performance</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map((employee) => (
                <div key={employee.id} className="card">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-black text-xl font-bold">
                          {employee.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{employee.name}</h3>
                          <p className="text-sm text-gray-400">{employee.role}</p>
                        </div>
                      </div>
                      {employee.available ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <XCircle className="w-6 h-6 text-gray-500" />
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-400">Experience</p>
                        <p className="font-semibold text-white">{employee.experience}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Rating</p>
                        <p className="font-semibold flex items-center text-white">
                          <Star className="w-4 h-4 text-primary-500 fill-current mr-1" />
                          {employee.rating}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 mb-2">Status</p>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          employee.available
                            ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/40'
                        }`}
                      >
                        {employee.available ? 'Available' : 'Busy'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <div className="section-padding bg-black">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white">Services Overview</h2>
              <p className="text-gray-400">Manage and monitor your service offerings</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Services</span>
                      <span className="font-bold text-primary-400">
                        {Object.values(services).reduce((acc, cat) => acc + cat.length, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active Deals</span>
                      <span className="font-bold text-primary-400">{deals.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Packages</span>
                      <span className="font-bold text-primary-400">{packages.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Top Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-300">Janssen Facial</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-300">Haircut + Beard</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-300">Keratin Treatment</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Popular Packages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-300">4-Day Grooming</span>
                      <span className="text-primary-400 font-semibold">12 bookings</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-300">Nikkah Deal</span>
                      <span className="text-primary-400 font-semibold">8 bookings</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-300">3-Day Premium</span>
                      <span className="text-primary-400 font-semibold">6 bookings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
