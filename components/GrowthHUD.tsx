import React from 'react';

const GrowthHUD: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center pointer-events-none select-none opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
      {/* Central Radar/Circle Dials */}
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Ring */}
        <div className="absolute w-80 h-80 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-brand-yellow/30"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-brand-yellow/30"></div>
        </div>
        
        {/* Middle Dashed Ring */}
        <div className="absolute w-64 h-64 rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
        
        {/* Inner Scanning Ring */}
        <div className="absolute w-48 h-48 rounded-full border-[0.5px] border-white/20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-brand-yellow/5 to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>

        {/* HUD Data Points */}
        <div className="absolute -top-10 -right-10 w-32 h-20 bg-white/5 border border-white/10 backdrop-blur-sm p-3 rounded flex flex-col justify-between animate-slide-up">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">ROAS Target</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xl font-mono font-bold text-white/80">4.82x</div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-brand-yellow/40"></div>
          </div>
        </div>

        <div className="absolute -bottom-12 -left-8 w-40 h-24 bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded animate-slide-up delay-300">
          <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter mb-2 block">Velocity Trend</span>
          <div className="flex items-end gap-1 h-8">
            <div className="w-2 bg-brand-yellow/20 h-[30%] animate-[grow_2s_ease-in-out_infinite]"></div>
            <div className="w-2 bg-brand-yellow/20 h-[50%] animate-[grow_2s_ease-in-out_infinite_0.2s]"></div>
            <div className="w-2 bg-brand-yellow/20 h-[80%] animate-[grow_2s_ease-in-out_infinite_0.4s]"></div>
            <div className="w-2 bg-brand-yellow/40 h-[100%] animate-[grow_2s_ease-in-out_infinite_0.6s]"></div>
            <div className="w-2 bg-brand-yellow/20 h-[70%] animate-[grow_2s_ease-in-out_infinite_0.8s]"></div>
          </div>
          <div className="mt-2 text-[10px] font-mono text-brand-yellow/60">+28.4% WoW</div>
        </div>

        {/* Circular Scanning Line */}
        <div className="absolute w-[400px] h-[400px] border-[0.5px] border-white/5 rounded-full">
           <div className="absolute top-1/2 left-1/2 w-1/2 h-[0.5px] bg-gradient-to-r from-brand-yellow/20 to-transparent origin-left animate-[spin_4s_linear_infinite]"></div>
        </div>

        {/* Corner Brackets */}
        <div className="absolute -inset-20 flex flex-col justify-between p-4 opacity-20">
          <div className="flex justify-between">
            <div className="w-4 h-4 border-t border-l border-white/40"></div>
            <div className="w-4 h-4 border-t border-r border-white/40"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-4 h-4 border-b border-l border-white/40"></div>
            <div className="w-4 h-4 border-b border-r border-white/40"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grow {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
};

export default GrowthHUD;