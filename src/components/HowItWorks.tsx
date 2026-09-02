import React from 'react';
import { Camera, Cpu, Pill, MessageSquare, ArrowRight, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';
import { PageType } from '../types';

interface HowItWorksProps {
  onNavigate: (page: PageType) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: '1',
      icon: <Camera className="w-6 h-6 text-emerald-600" />,
      title: 'Upload Crop Photo',
      description: 'Take a clear, well-lit photo of the affected leaf, stem, or fruit with your smartphone or upload an image file.',
      badge: 'Step 1'
    },
    {
      step: '2',
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      title: 'AI Detects Disease',
      description: 'CropSheild scans leaf spots, pustules, and chlorosis patterns to identify the disease with a confidence score.',
      badge: 'Step 2'
    },
    {
      step: '3',
      icon: <Pill className="w-6 h-6 text-emerald-600" />,
      title: 'Get Safe Treatment',
      description: 'Review practical cultural practices, organic biological options, safe fungicide recommendations, and safety cautions.',
      badge: 'Step 3'
    },
    {
      step: '4',
      icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
      title: 'Contact on WhatsApp',
      description: 'Instantly connect with verified agricultural suppliers in your region on WhatsApp with a pre-filled treatment inquiry.',
      badge: 'Step 4'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 font-serif">
            How CropShield Works for Farmers
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Designed specifically for farmers and agriculturalists with an ultra-simple interface. No complicated technical jargon — just fast, reliable answers.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="group relative bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-stone-200 group-hover:border-emerald-300 flex items-center justify-center transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-stone-200 group-hover:bg-emerald-200 group-hover:text-emerald-900 text-stone-700 transition-colors">
                  {item.badge}
                </span>
              </div>

              {/* Title & description */}
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-950 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Step bottom accent */}
              <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Benefits banner */}
        <div className="mt-14 bg-gradient-to-br from-emerald-800 to-green-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-2.5 py-1 rounded-md">
                Why Early Crop Detection Matters
              </span>
              <h3 className="text-xl sm:text-3xl font-bold font-serif">
                Prevent up to 40% harvest loss with timely action
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Fungal and bacterial blights spread rapidly across fields. Identifying symptoms within the first 48 hours allows targeted cultural pruning and safe biological remedies before needing heavy chemical intervention.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onNavigate('detect')}
                className="w-full py-3.5 px-6 bg-white hover:bg-stone-100 text-emerald-900 font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Start Free Crop Scan</span>
              </button>
              <button
                onClick={() => onNavigate('treatments')}
                className="w-full py-3.5 px-6 bg-emerald-900/60 hover:bg-emerald-900 text-emerald-100 border border-emerald-600/50 font-semibold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Browse All Treatments</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
