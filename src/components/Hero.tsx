import React from 'react';
import { Scan, Store, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MessageCircle, AlertTriangle, Leaf } from 'lucide-react';
import { PageType } from '../types';

interface HeroProps {
  onNavigate: (page: PageType) => void;
  onSelectSample: (sampleId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSelectSample }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>CropSheild & AI Agriculture Assistant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif">
              Protect Your Crops <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent">
                with Instant AI
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Identify foliar crop diseases in seconds. Upload a leaf photo to diagnose bacterial, fungal, or viral infections, get certified treatment guidance, and order remedies directly from local agricultural suppliers via <strong>WhatsApp</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('detect')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 active:scale-98 text-white font-bold rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer text-base sm:text-lg"
              >
                <Scan className="w-5 h-5" />
                <span>Detect Crop Disease</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('suppliers')}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 backdrop-blur-xs transition flex items-center justify-center gap-2.5 cursor-pointer text-base"
              >
                <Store className="w-5 h-5 text-emerald-300" />
                <span>Find Suppliers</span>
              </button>
            </div>

            {/* Feature Highlights List */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left border-t border-emerald-800/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-emerald-100 font-medium">10+ Crops Supported</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-emerald-100 font-medium">Safe Dosage Guidance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-emerald-100 font-medium">Direct WhatsApp Order</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Journey Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-stone-900/90 rounded-3xl p-5 sm:p-6 border border-emerald-700/50 shadow-2xl backdrop-blur-md">
              
              {/* Card Header badge */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Live AI Diagnostic Flow</span>
                </div>
                <span className="text-[11px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-700/60 font-mono">
                  CropSheild
                </span>
              </div>

              {/* Step 1 Preview */}
              <div className="mt-4 bg-stone-800/80 rounded-2xl p-3 border border-stone-700 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=200&q=80"
                  alt="Infected Tomato Leaf"
                  className="w-16 h-16 rounded-xl object-cover border border-stone-600 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-stone-400">1. Uploaded Leaf Photo</span>
                    <span className="text-[10px] text-emerald-400 font-mono">224x224 px</span>
                  </div>
                  <p className="text-sm font-semibold text-white truncate">Tomato Leaf with Brown Rings</p>
                  <p className="text-xs text-stone-400">Analyzed in 0.8s</p>
                </div>
              </div>

              {/* Step 2 AI Detection */}
              <div className="mt-3 bg-emerald-950/70 border border-emerald-600/60 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Detected: Early Blight
                  </span>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-stone-950">
                    94% Match
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-emerald-900/60 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full w-[94%] transition-all duration-1000"></div>
                </div>

                <p className="text-[11px] text-emerald-200/90 leading-tight">
                  Identified <em>Alternaria solani</em> concentric lesions on tomato leaf foliage.
                </p>
              </div>

              {/* Step 3 WhatsApp Supplier Shortcut */}
              <div className="mt-3 bg-stone-800/80 rounded-2xl p-3 border border-stone-700 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Green Agriculture Store</p>
                    <p className="text-[11px] text-stone-400">Stock Ready • Copper Hydroxide</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('suppliers')}
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  Contact
                </button>
              </div>

              {/* Quick sample prompt for user */}
              <div className="mt-4 pt-3 border-t border-emerald-800/40 text-center">
                <p className="text-xs text-stone-400 mb-2">Want to try scanning immediately?</p>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  <button
                    onClick={() => {
                      onSelectSample('sample-tomato-eb');
                      onNavigate('detect');
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 transition cursor-pointer"
                  >
                    🍅 Tomato Blight Sample
                  </button>
                  <button
                    onClick={() => {
                      onSelectSample('sample-potato-lb');
                      onNavigate('detect');
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 transition cursor-pointer"
                  >
                    🥔 Potato Blight Sample
                  </button>
                  <button
                    onClick={() => {
                      onSelectSample('sample-healthy-leaf');
                      onNavigate('detect');
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 transition cursor-pointer"
                  >
                    🌿 Healthy Leaf Sample
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
