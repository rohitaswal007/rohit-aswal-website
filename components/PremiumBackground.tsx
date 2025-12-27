import React from 'react';

const PremiumBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-brand-black">
      {/* The Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Radial Mask for Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/0 via-brand-black/50 to-brand-black"></div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-yellow/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-red/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
      
      {/* Floating Sparkles (SVG based for sharp high quality) */}
      <div className="absolute top-20 right-[15%] w-32 h-32 opacity-20 animate-bounce [animation-duration:8s]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 27.6142 72.3858 50 100 50C72.3858 50 50 72.3858 50 100C50 72.3858 27.6142 50 0 50C27.6142 50 50 27.6142 50 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-[10%] w-16 h-16 opacity-10 animate-bounce [animation-duration:12s] [animation-delay:1s]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 27.6142 72.3858 50 100 50C72.3858 50 50 72.3858 50 100C50 72.3858 27.6142 50 0 50C27.6142 50 50 27.6142 50 0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default PremiumBackground;