import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, ChevronDown, Download, Info } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { CaseStudyData } from '../types';
import Button from './Button';
import { Link } from 'react-router-dom';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CaseStudyData | null;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-xl rounded-md text-[11px] text-gray-800">
        <p className="font-bold mb-2 border-b border-gray-50 pb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4 mb-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
              <span className="text-gray-500">{entry.name}:</span>
            </div>
            <span className="font-bold">
              {(entry.name === 'Sales' || entry.name === 'Spend' || entry.name.includes('USD')) ? `$${entry.value.toLocaleString()}` : entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, data }) => {
  const [activeTab, setActiveTab] = useState('Performance Dashboard');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const isBlinkit = data.platform === 'Quick Commerce';
  const isAmazon = data.platform === 'Amazon';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-6xl bg-brand-dark border border-white/10 rounded-lg shadow-2xl max-h-[95vh] overflow-y-auto animate-slide-up flex flex-col">
        
        <div className="sticky top-0 z-10 bg-brand-dark/95 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-brand-yellow text-xs font-bold tracking-wider uppercase mb-1 block">
              {data.platform} • {data.category}
            </span>
            <h3 className="text-xl font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {data.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 sm:p-10 space-y-12">
          {/* Main Headline */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {data.headline}
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-2">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-yellow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Dashboard Embed */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-200 p-1 sm:p-4">
            {isAmazon ? (
              /* Amazon Ads UI Recreation */
              <div className="bg-white flex flex-col">
                {/* Metric Boxes */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-gray-200 border border-gray-200">
                  {data.performanceSnapshots?.map((snap, idx) => (
                    <div key={idx} className="bg-white p-4 relative group">
                      <div className={`absolute top-0 left-0 right-0 h-1 ${snap.label === 'Spend' ? 'bg-[#2563eb]' : snap.label === 'Sales' ? 'bg-[#f97316]' : 'bg-transparent'}`}></div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-bold text-gray-600 flex items-center gap-1">
                          {snap.label} <Info size={12} className="text-gray-400 cursor-help" />
                        </span>
                        <X size={12} className="text-gray-300 opacity-0 group-hover:opacity-100 cursor-pointer" />
                      </div>
                      <div className="text-lg font-bold text-gray-900 tracking-tight">
                        {snap.value}
                      </div>
                      <div className="text-[9px] text-gray-400 uppercase font-bold mt-1">
                        {snap.label.includes('CTR') || snap.label.includes('ROAS') ? 'Average' : 'Total'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Amazon Chart Area */}
                <div className="p-6 relative">
                  <div className="h-[380px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data.chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                         <XAxis 
                           dataKey="name" 
                           stroke="#cbd5e1" 
                           tick={{fontSize: 10, fontWeight: 500, fill: '#64748b'}} 
                           axisLine={{stroke: '#e2e8f0'}} 
                           tickLine={false}
                           dy={10}
                         />
                         {/* Spend Axis (Left) */}
                         <YAxis 
                           yAxisId="left"
                           stroke="#cbd5e1" 
                           tick={{fontSize: 10, fontWeight: 500, fill: '#64748b'}} 
                           axisLine={false} 
                           tickLine={false}
                           tickFormatter={(value) => `$${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`}
                           domain={[0, 'auto']}
                         />
                         {/* Sales Axis (Right) */}
                         <YAxis 
                           yAxisId="right"
                           orientation="right"
                           stroke="#cbd5e1" 
                           tick={{fontSize: 10, fontWeight: 500, fill: '#64748b'}} 
                           axisLine={false} 
                           tickLine={false}
                           tickFormatter={(value) => `$${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`}
                           domain={[0, 'auto']}
                         />
                         <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#f1f5f9', strokeWidth: 2 }} />
                         <Line 
                           yAxisId="left"
                           type="monotone" 
                           dataKey="spend" 
                           stroke="#2563eb" 
                           strokeWidth={2} 
                           dot={false} 
                           activeDot={{ r: 5, fill: '#2563eb', strokeWidth: 0 }} 
                           name="Spend" 
                         />
                         <Line 
                           yAxisId="right"
                           type="monotone" 
                           dataKey="sales" 
                           stroke="#f97316" 
                           strokeWidth={2} 
                           dot={false} 
                           activeDot={{ r: 5, fill: '#f97316', strokeWidth: 0 }} 
                           name="Sales" 
                         />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            ) : isBlinkit ? (
              /* Blinkit Dashboard UI */
              <div className="bg-[#fcfcfd]">
                 <div className="flex items-center gap-8 px-8 pt-6 border-b border-gray-100 bg-white">
                   {['Sales Performance', 'Product Expansion'].map(tab => (
                     <button 
                       key={tab}
                       onClick={() => setActiveTab(tab)}
                       className={`pb-4 text-xs font-bold uppercase tracking-wide transition-all border-b-2 ${activeTab === tab ? 'text-[#3e8e41] border-[#3e8e41]' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
                     >
                       {tab}
                     </button>
                   ))}
                 </div>
                 <div className="bg-white px-8 py-3 flex flex-wrap items-center gap-4 border-b border-gray-50">
                   <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] font-bold text-gray-600 cursor-pointer">
                     November 2025 <ChevronDown size={12} />
                   </div>
                   <button className="ml-auto flex items-center gap-2 px-4 py-1.5 bg-[#e9f5ea] text-[#3e8e41] rounded-md text-[10px] font-bold hover:bg-[#d8edd9] transition-colors border border-[#cbe4cc]">
                     <Download size={14} /> Download report
                   </button>
                 </div>
                 <div className="p-8 bg-white">
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-3 space-y-4">
                        <div className="bg-[#f7f4ff] p-6 rounded-lg border border-[#ece7ff]">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-[#6d28d9] mb-3 uppercase tracking-wider">
                            <div className="w-5 h-5 bg-white rounded flex items-center justify-center shadow-sm">$</div>
                            Total Sales (USD)
                          </div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">$115,460</div>
                        </div>
                        <div className="bg-[#f0fff4] p-6 rounded-lg border border-[#e2f9e6]">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-[#166534] mb-3 uppercase tracking-wider">
                            <div className="w-5 h-5 bg-white rounded flex items-center justify-center shadow-sm">📦</div>
                            Total Sales (Units)
                          </div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">44,024</div>
                        </div>
                      </div>
                      <div className="lg:col-span-9">
                        <div className="h-[320px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data.chartData}>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                               <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 8, fontWeight: 600}} axisLine={false} tickLine={false} dy={10} interval={6} />
                               <YAxis stroke="#94a3b8" tick={{fontSize: 8, fontWeight: 600}} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`} />
                               <Tooltip content={<CustomTooltip />} />
                               <Line type="monotone" dataKey="sales" stroke="#7c3aed" strokeWidth={2} dot={false} activeDot={{ r: 4 }} name="Sales (USD)" />
                               <Line type="monotone" dataKey="units" stroke="#10b981" strokeWidth={2} dot={false} activeDot={{ r: 4 }} name="Sales (Units)" />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            ) : (
              /* Default Generic Performance View */
              <div className="p-8 bg-white min-h-[300px] flex items-center justify-center">
                 <p className="text-gray-400 italic">Platform Performance Snapshot Pending</p>
              </div>
            )}
            
            <div className="bg-gray-50 py-3 flex justify-between text-[9px] text-gray-400 px-8 border-t border-gray-100 italic">
               <span>Data source: Platform Analytics Connector</span>
               <span className="font-bold text-gray-300">Verified Analytics Snapshot</span>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-1.5 h-6 bg-brand-red mr-3 block"></span>
                  The Problem
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {data.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-1.5 h-6 bg-brand-yellow mr-3 block"></span>
                  The Strategy
                </h4>
                <div className="text-gray-400 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                  {data.strategy}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-5 flex items-center">
                   Execution Highlights
                </h4>
                <ul className="space-y-4">
                  {data.execution.map((step, i) => (
                    <li key={i} className="flex items-start text-gray-400 text-sm sm:text-base">
                      <ArrowUpRight className="text-brand-yellow mr-3 mt-1 flex-shrink-0" size={16} />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-yellow/10 p-6 rounded-lg border border-brand-yellow/20">
                <h4 className="text-sm font-bold text-brand-yellow mb-2 uppercase tracking-widest">Final Result</h4>
                <p className="text-white text-sm leading-relaxed">
                  {data.result}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-brand-black/50 border-t border-white/10 flex justify-between items-center sticky bottom-0 backdrop-blur">
            <span className="text-gray-400 text-sm hidden sm:block font-medium">
              Want similar results for your brand?
            </span>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto uppercase tracking-tighter" onClick={onClose}>
                Book a Strategy Call
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
