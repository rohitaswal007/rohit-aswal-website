import React, { useState, useEffect } from 'react';
/* Added missing 'Package' import */
import { Search, ShoppingCart, Star, ArrowLeft, Menu, Package } from 'lucide-react';

const PhoneShowcase: React.FC = () => {
  const [step, setStep] = useState(0); // 0: Splash, 1: Home, 2: Searching, 3: Results
  const [searchText, setSearchText] = useState('');
  const targetSearch = "shampoo for man";

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 2) {
      let i = 0;
      setSearchText('');
      const typing = setInterval(() => {
        setSearchText(targetSearch.slice(0, i));
        i++;
        if (i > targetSearch.length) clearInterval(typing);
      }, 100);
      return () => clearInterval(typing);
    }
  }, [step]);

  return (
    <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden scale-90 md:scale-100 group">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-30"></div>
      
      {/* Content Area */}
      <div className="relative h-full w-full bg-white overflow-hidden text-black font-sans">
        
        {/* Step 0: Splash (Amazon Theme) */}
        <div className={`absolute inset-0 bg-[#232f3e] flex items-center justify-center transition-transform duration-700 z-20 ${step === 0 ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="text-white flex flex-col items-center">
            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mb-4 animate-pulse">
              <ShoppingCart size={40} className="text-brand-black" />
            </div>
            <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-brand-yellow animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Header Bar (Steps 1, 2, 3) */}
        <div className="h-24 bg-[#232f3e] p-4 pt-10 flex flex-col justify-end gap-2">
          <div className="flex items-center gap-2">
            <Menu size={18} className="text-white" />
            <div className="flex-1 h-9 bg-white rounded-md flex items-center px-3 gap-2">
              <Search size={14} className="text-gray-400" />
              <span className={`text-xs ${step >= 2 ? 'text-black font-medium' : 'text-gray-500'} overflow-hidden whitespace-nowrap`}>
                {step >= 2 ? searchText : 'Search platforms...'}
                {step === 2 && <span className="animate-pulse ml-0.5 font-light">|</span>}
              </span>
            </div>
          </div>
        </div>

        {/* Step 1: Home Interaction */}
        <div className={`p-4 space-y-4 transition-opacity duration-500 ${step === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-32 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">Featured Deals</div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-24 bg-gray-50 rounded border border-gray-100 p-2">
                <div className="w-full h-12 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-2 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Results (The Domination) */}
        <div className={`absolute inset-0 top-24 bg-white p-4 transition-all duration-700 ${step === 3 ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto no-scrollbar`}>
           <div className="flex items-center justify-between mb-4 border-b pb-2">
             <span className="text-[10px] font-bold text-gray-400">Showing results for "{targetSearch}"</span>
             <div className="flex gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow/30"></div>
             </div>
           </div>

           {/* Result Card 1: The Winning Brand */}
           <div className="bg-white border border-brand-yellow/30 rounded-lg p-3 shadow-md mb-4 animate-slide-up relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-brand-yellow text-[8px] font-black px-2 py-0.5 rounded-bl-lg">#1 BEST SELLER</div>
             <div className="flex gap-3">
               <div className="w-16 h-16 bg-zinc-100 rounded flex items-center justify-center">
                 <Package size={24} className="text-zinc-400" />
               </div>
               <div className="flex-1 space-y-1">
                 <div className="h-3 w-3/4 bg-zinc-800 rounded"></div>
                 <div className="flex items-center gap-0.5">
                   {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} fill="#fbbf24" className="text-brand-yellow" />)}
                   <span className="text-[8px] text-gray-400 ml-1">12,402 reviews</span>
                 </div>
                 <div className="text-xs font-bold text-black mt-1">$49.99</div>
                 <div className="text-[8px] text-green-600 font-bold">Fastest Delivery Tomorrow</div>
               </div>
             </div>
           </div>

           {/* Result Card 2: Competitor (Blurred/Ghosted) */}
           <div className="opacity-40 grayscale blur-[0.5px] bg-white border border-gray-100 rounded-lg p-3 mb-4">
             <div className="flex gap-3">
               <div className="w-16 h-16 bg-zinc-50 rounded"></div>
               <div className="flex-1 space-y-1">
                 <div className="h-3 w-1/2 bg-zinc-200 rounded"></div>
                 <div className="h-2 w-1/4 bg-zinc-100 rounded"></div>
               </div>
             </div>
           </div>

           {/* Result Card 3: Another Competitor */}
           <div className="opacity-40 grayscale blur-[0.5px] bg-white border border-gray-100 rounded-lg p-3 mb-4">
             <div className="flex gap-3">
               <div className="w-16 h-16 bg-zinc-50 rounded"></div>
               <div className="flex-1 space-y-1">
                 <div className="h-3 w-2/3 bg-zinc-200 rounded"></div>
                 <div className="h-2 w-1/3 bg-zinc-100 rounded"></div>
               </div>
             </div>
           </div>

           {/* Result Card 4: Last Competitor */}
           <div className="opacity-40 grayscale blur-[0.5px] bg-white border border-gray-100 rounded-lg p-3 mb-4">
             <div className="flex gap-3">
               <div className="w-16 h-16 bg-zinc-50 rounded"></div>
               <div className="flex-1 space-y-1">
                 <div className="h-3 w-1/2 bg-zinc-200 rounded"></div>
                 <div className="h-2 w-1/5 bg-zinc-100 rounded"></div>
               </div>
             </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PhoneShowcase;