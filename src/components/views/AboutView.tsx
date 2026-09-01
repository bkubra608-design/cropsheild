import React from 'react';
import { 
  Sprout, 
  Target, 
  Eye, 
  Cpu, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Leaf, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { PageType } from '../../types';

interface AboutViewProps {
  onNavigate: (page: PageType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-[85vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Our Mission & Agricultural Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif">
            Empowering Farmers with Accessible AI
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Bridging the gap between cutting-edge computer vision research and smallholder farmers in the field.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Mission */}
          <div className="bg-gradient-to-br from-emerald-800 to-green-950 text-white rounded-3xl p-8 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Our Core Mission</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif leading-snug">
              "To make crop disease identification and agricultural guidance accessible to every farmer through simple AI-powered technology."
            </h2>
            <p className="text-emerald-100 text-sm leading-relaxed">
              We believe no farmer should lose their harvest due to lack of diagnostic expertise or inability to find safe, effective remedies in their native community.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Our Future Vision</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                Sustainable, High-Yield Agriculture for All Communities
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                By enabling proactive foliar disease detection on mobile phones, we eliminate blind pesticide dumping, preserve groundwater quality, protect pollinator populations, and secure rural household incomes.
              </p>
            </div>
          </div>

        </div>

        {/* The Agricultural Problem vs AI Solution */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-lg space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              The Real-World Agricultural Problem
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Why traditional crop scouting fails smallholder farming communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50/70 border border-red-200 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-base text-red-950 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                The Challenge Faced by Farmers:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-red-900 leading-relaxed">
                <li>• <strong>Visual Confusion:</strong> Many fungal blights, viral mottling, and nutrient deficiencies appear identical in early stages to the untrained eye.</li>
                <li>• <strong>Inappropriate Chemical Overuse:</strong> Spraying broad-spectrum chemicals for viral or bacterial problems wastes money and damages soil ecology.</li>
                <li>• <strong>Delayed Action:</strong> Waiting for visits from regional extension specialists often takes weeks, while late blight can ruin a potato crop in 72 hours.</li>
                <li>• <strong>Supply Disconnect:</strong> Even when a farmer knows the treatment, finding trusted local stock is a hassle.</li>
              </ul>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-base text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                How CropShield AI Solves It:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                <li>• <strong>Sub-Second Neural Vision:</strong> Google Teachable Machine classifies visual necrosis, target rings, and pustules instantly from a phone photo.</li>
                <li>• <strong>Simple Step-by-Step Guidance:</strong> Farmers receive clear, non-technical cultural actions (e.g. prune lower leaves, stop sprinkler watering).</li>
                <li>• <strong>Integrated WhatsApp Supply Link:</strong> Direct one-tap WhatsApp contact with local certified agro-dealers for immediate delivery.</li>
                <li>• <strong>100% Free & Mobile-First:</strong> Works smoothly on standard smartphones and mobile browsers without requiring app store installations.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Teachable Machine & AI Works */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-stone-950 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif">
                How Google Teachable Machine Powers the Detection
              </h2>
              <p className="text-xs text-emerald-300">TensorFlow.js edge intelligence</p>
            </div>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Google Teachable Machine enables training deep Convolutional Neural Networks on image datasets of diseased and healthy plant foliage. The model analyzes leaf geometry, color distributions (chlorosis yellows, necrotic browns, pustule oranges), and texture boundaries. When a farmer uploads an image, the model computes confidence probabilities across multiple disease classes in real time without sending private user data to third parties.
          </p>

          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              Configurable model endpoints supported. You can customize the Teachable Machine URL in the Scanner settings.
            </div>
            <button
              onClick={() => onNavigate('detect')}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-xl transition text-sm flex items-center justify-center gap-2"
            >
              <span>Test the AI Scanner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
