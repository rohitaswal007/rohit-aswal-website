import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import CaseStudyModal from '../components/CaseStudyModal';
import CountUp from '../components/CountUp';
import PhoneShowcase from '../components/PhoneShowcase';
import { CASE_STUDIES, SERVICES, BRAND_LOGOS } from '../constants';
import { CaseStudyData } from '../types';

const Home = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <div className="flex flex-col gap-0">
      <CaseStudyModal 
        isOpen={!!selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        data={selectedCaseStudy} 
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Headline & CTA */}
              <div className="text-left animate-slide-up space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
                    Taking new clients for Q4
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  Ads that convert, <br />
                  <span className="text-brand-yellow">scale</span>, and compound.
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                  I build systems that scale brands profitably. Specialized performance marketing for founders who value growth owned—not just managed.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/contact">
                    <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base">
                      Book a Strategy Call
                    </Button>
                  </Link>
                  <Link to="/case-studies">
                    <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Phone Showcase Animation */}
              <div className="animate-fade-in delay-300 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Subtle Glow behind phone */}
                  <div className="absolute inset-0 bg-brand-yellow/5 blur-[80px] rounded-full scale-125 -z-10"></div>
                  <PhoneShowcase />
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto border-t border-white/5 mt-16 text-center lg:text-left">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  <CountUp end={120} prefix="$" suffix="k+" duration={2000} />
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider">Monthly Spend</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  <CountUp end={8.3} prefix="$" suffix="M+" duration={2000} decimals={1} />
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider">Total Revenue Generated</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  <CountUp end={15} suffix="+" duration={2000} />
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider">Brands Scaled</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  <CountUp end={28} prefix="~" suffix="%" duration={2000} />
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider">Avg. TACoS Reduction</p>
              </div>
            </div>
        </div>
      </section>

      {/* TRUST SECTION - LOGO GRID */}
      <section className="border-y border-white/5 bg-brand-black/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-12">
            Brands I've Helped Scale
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60">
             {BRAND_LOGOS.map((brand, i) => (
               <div key={i} className="h-8 md:h-12 w-auto flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 group">
                 <img 
                   src={brand.logoUrl} 
                   alt={brand.name} 
                   className="h-full w-auto object-contain max-w-[120px]"
                   title={brand.name}
                 />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ecommerce growth shouldn’t burn cash to scale.
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                If ads feel harder, costlier, and less predictable — you’re not alone.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Ad Costs Are Rising Faster Than Margins</h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      CPCs keep climbing across all major platforms. Without tight SKU-level control, scaling ads quietly erodes your bottom line.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Revenue Without Visibility Is Risky</h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      You see top-line sales, but you're missing the granular data: which keywords drive real profit and which SKUs are simply draining your budget.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">No Real Control Over Performance</h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      Most agencies report metrics but don't take ownership of results. We fix the accountability gap between spend and scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="bg-brand-black border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Here's how we fix that.
              </h3>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                A performance tracking system built to measure what matters, scale what works, and dominate search rankings with data.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  'SKU-level profit tracking',
                  'Weekly action-focused roadmaps',
                  'Full-funnel visibility and analytics',
                  'TACoS optimization systems',
                  'Strategic Page 1 search domination'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white">
                    <CheckCircle2 className="text-brand-yellow mr-4 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/about">
                <Button variant="outline" className="w-full py-4 font-bold border-white/20 text-white hover:bg-white hover:text-brand-black">
                  Learn Our Methodology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Systems</h2>
            <p className="text-gray-400">Outcome-focused strategies tailored for high-potential D2C brands.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white/5 border border-white/5 p-8 rounded-lg transition-all duration-300 hover:bg-white/10">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center text-brand-yellow mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Recent Successes</h2>
              <p className="text-gray-400">Verified results from real-world campaigns.</p>
            </div>
            <Link to="/case-studies" className="hidden md:flex text-brand-yellow items-center font-medium hover:underline">
              View all case studies <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div 
                key={study.id} 
                className="bg-brand-black border border-white/10 rounded-xl overflow-hidden hover:border-brand-yellow/50 transition-colors cursor-pointer group"
                onClick={() => setSelectedCaseStudy(study)}
              >
                <div className="p-6">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                    {study.platform}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-brand-yellow transition-colors">
                    {study.headline}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {study.stats.slice(0, 2).map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                         <span className="text-gray-400 text-sm">{stat.label}</span>
                         <span className="text-white font-mono font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-brand-yellow text-sm font-medium">
                    Read Case Study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-6 tracking-tight">
            Ready for your next <span className="underline decoration-brand-black/20">30% growth</span>?
          </h2>
          <p className="text-xl text-brand-black/70 mb-10 max-w-xl mx-auto font-medium">
            Stop guessing and start scaling with a partner who cares about your contribution margin as much as you do.
          </p>
          <Link to="/contact">
            {/* Using variant 'secondary' which is now Black bg/White text for maximum contrast on Yellow */}
            <Button variant="secondary" className="text-lg px-12 py-5 border-none shadow-2xl">
              Book a Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;