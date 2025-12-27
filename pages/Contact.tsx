import React, { useState } from 'react';
import { Mail, Linkedin, Calendar } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    website: '',
    revenue: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! I'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-brand-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Context */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's scale your brand.
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                This isn't a sales call. It's a clarity call. <br/>
                We'll look at your current numbers, identify bottlenecks, and see if I can actually help you.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email Me</p>
                  <a href="mailto:rohit.growthai@gmail.com" className="text-lg font-medium hover:text-white transition-colors">rohit.growthai@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mr-4">
                  <Linkedin className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Connect</p>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-white transition-colors">LinkedIn Profile</a>
                </div>
              </div>

              <div className="bg-brand-yellow/10 border border-brand-yellow/20 p-6 rounded-xl mt-8">
                 <h4 className="text-brand-yellow font-bold flex items-center mb-2">
                   <Calendar className="mr-2" size={20} /> Booking Notice
                 </h4>
                 <p className="text-sm text-gray-400">
                   I am currently accepting 2 new clients for the upcoming month. Priority is given to D2C brands doing $12k+ monthly revenue.
                 </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                    placeholder="john@brand.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-gray-400">Website / Amazon Link</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                  placeholder="www.yourbrand.com"
                  value={formState.website}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="revenue" className="text-sm font-medium text-gray-400">Monthly Revenue (Approx)</label>
                <select
                  id="revenue"
                  name="revenue"
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                  value={formState.revenue}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a range</option>
                  <option value="<5k">Less than $5k</option>
                  <option value="5k-20k">$5k - $20k</option>
                  <option value="20k-50k">$20k - $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Biggest Challenge?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                  placeholder="e.g., TACoS is too high, Struggling with ads scale..."
                  value={formState.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Book Strategy Call
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
