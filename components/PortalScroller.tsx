import React from 'react';
import { ShoppingBag, Zap, ShoppingCart, Package, Truck, Store } from 'lucide-react';

interface PortalScrollerProps {
  portals: { name: string; icon: React.ReactNode; color: string }[];
}

const PortalScroller: React.FC<PortalScrollerProps> = ({ portals }) => {
  // Triple the portals to ensure a seamless infinite loop
  const displayPortals = [...portals, ...portals, ...portals];

  return (
    <div className="relative h-72 md:h-80 overflow-hidden flex items-center">
      {/* Indicator Arrow - Clean & Simple */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center text-brand-yellow">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="animate-pulse"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>

      {/* Scroller Container */}
      <div className="w-full flex flex-col items-center pl-16">
        <div className="animate-vertical-marquee space-y-10 flex flex-col items-start w-full max-w-[280px]">
          {displayPortals.map((portal, index) => (
            <div
              key={`${portal.name}-${index}`}
              className="flex items-center gap-5 transition-all duration-700 select-none group"
            >
              {/* Logo Placeholder - Simple & Minimal */}
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 group-hover:text-white transition-colors"
                style={{ '--logo-hover-color': portal.color } as React.CSSProperties}
              >
                {portal.icon}
              </div>
              
              {/* Text - Title Case, Clean Weight */}
              <span className="text-3xl md:text-4xl font-semibold tracking-tight text-white/90">
                {portal.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Masking Gradients for Professional Blur Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Fade & Blur */}
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-brand-black via-brand-black/90 to-transparent z-10 backdrop-blur-[1.5px]"></div>
        {/* Bottom Fade & Blur */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent z-10 backdrop-blur-[1.5px]"></div>
      </div>
      
      <style>{`
        @keyframes verticalMarquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        .animate-vertical-marquee {
          animation: verticalMarquee 12s linear infinite;
        }
        .animate-vertical-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PortalScroller;