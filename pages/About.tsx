
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Search, Users } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="bg-brand-black min-h-screen relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-full h-[600px] opacity-[0.05] pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
          alt="Mountain Texture" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-fade-in">
            <div className="w-full aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                 alt="Rohit Aswal Professional Portrait" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
              Growth Strategist
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Hi, I'm Rohit Aswal. <br />
              <span className="text-brand-yellow">I build scalable growth engines.</span>
            </h1>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                I’ve spent the last 4.5+ years in the trenches of ecommerce, managing over <span className="text-white">$120k/month</span> in ad spend across Amazon, Flipkart, and Quick Commerce platforms like Blinkit, Zepto, and Swiggy Instamart.
              </p>
              <p>
                I realized early on that most founders are underserved by traditional agencies. Agencies care about "spend" and "retainers". <span className="text-brand-yellow">Founders care about "profit" and "longevity".</span>
              </p>
              <p>
                I transitioned to independent consulting to bridge that gap. I work with a limited number of high-potential brands to implement the same systems that scaled my previous portfolio to category leadership and top BSR rankings.
              </p>
            </div>
            <div className="pt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="primary" className="px-8 py-4">Work with me</Button>
              </Link>
              <div className="flex items-center gap-4 px-6 py-2 border border-white/10 rounded-sm bg-white/5">
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Experience</p>
                  <p className="text-white font-bold">4.5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">How I drive impact.</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-brand-dark p-10 rounded-xl border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 relative overflow-hidden">
              <Target className="text-brand-yellow mb-8 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Hands-on Accountability</h3>
              <p className="text-gray-400 leading-relaxed">
                I don't outsource to juniors. When you hire me, you get my eyes on your account, every single week. Real ownership, no agency layers.
              </p>
            </div>
            
            <div className="group bg-brand-dark p-10 rounded-xl border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 relative overflow-hidden">
              <Search className="text-brand-yellow mb-8 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Profit &gt; Revenue</h3>
              <p className="text-gray-400 leading-relaxed">
                Scaling revenue is easy if you burn cash. Scaling profit requires precision. I focus on <span className="text-white">TACoS</span> and <span className="text-white">Contribution Margin</span> above all else.
              </p>
            </div>

            <div className="group bg-brand-dark p-10 rounded-xl border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 relative overflow-hidden">
              <Users className="text-brand-yellow mb-8 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Few Clients, Deep Focus</h3>
              <p className="text-gray-400 leading-relaxed">
                I cap my client roster to 7-8 brands at a time. This ensures I have the bandwidth to treat your business like my own.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="relative group bg-brand-dark border border-white/10 rounded-2xl p-10 md:p-20 text-center max-w-5xl mx-auto overflow-hidden">
           {/* Subtle texture */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
             <img 
               src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2070&auto=format&fit=crop" 
               alt="Cliff" 
               className="w-full h-full object-cover"
             />
           </div>
           
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10 tracking-tight">The Growth Roadmap</h2>
           <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed">
             My goal isn't to stay a freelancer forever. I am building a <span className="text-white">boutique performance agency</span> model for the future. By working with me now, you get agency-level systems with founder-level attention and accountability.
           </p>
           <div className="flex justify-center relative z-10">
             <Link to="/contact">
               <Button variant="primary" className="text-lg px-12 py-5 uppercase tracking-widest">Let's Connect</Button>
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
