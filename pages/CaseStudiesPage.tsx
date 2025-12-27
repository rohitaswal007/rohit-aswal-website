import React, { useState } from 'react';
import { ArrowUpRight, Rocket, TrendingUp, Coins } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { CaseStudyData } from '../types';
import CaseStudyModal from '../components/CaseStudyModal';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <div className="bg-brand-black min-h-screen pb-24">
      <CaseStudyModal 
        isOpen={!!selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        data={selectedCaseStudy} 
      />

      {/* Hero Section with Graphic Illustration */}
      <div className="bg-brand-dark py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
        {/* Faded Background Illustration */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          {/* Main Growth Symbol (Rocket-like shape/abstract growth) */}
          <div className="relative w-full h-full max-w-4xl opacity-[0.03] flex items-center justify-center">
            <div className="absolute transform -translate-y-12 animate-pulse transition-transform duration-[5000ms]">
               <Rocket size={480} strokeWidth={0.5} className="text-brand-yellow" />
            </div>
            <div className="absolute top-1/2 left-1/4 -translate-x-full">
              <Coins size={120} strokeWidth={1} className="text-white" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 translate-x-full">
              <TrendingUp size={180} strokeWidth={1} className="text-brand-yellow" />
            </div>
          </div>
          
          {/* Subtle Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-brand-yellow/5 to-transparent blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
            <TrendingUp size={12} /> Data-Driven Results
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Struggling Ads to <span className="text-brand-yellow">Profitable Scale</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real campaigns. Real revenue growth. See the exact strategies I used to solve
            profitability bottlenecks and unlock 2-5x ROAS for ecommerce brands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.id}
              onClick={() => setSelectedCaseStudy(study)}
              className="group relative bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-yellow/10 text-brand-yellow text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {study.platform}
                </span>
                <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  {study.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-brand-yellow transition-colors pr-8">
                {study.headline}
              </h2>

              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {study.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-yellow rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Ready to be the next case study?
          </h2>
          <p className="text-brand-black text-lg font-bold mb-8 max-w-xl mx-auto">
            I only take on brands where I see a clear path to adding value. Let's see if we are a match.
          </p>
          <Link to="/contact">
            {/* Using variant 'secondary' for Black bg/White text to ensure legibility on yellow */}
            <Button variant="secondary" className="px-12 py-4 text-lg border-none shadow-2xl">
              Let's talk
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;