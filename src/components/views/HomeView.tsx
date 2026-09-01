import React from 'react';
import { 
  Scan, 
  Store, 
  Pill, 
  Wheat, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Quote, 
  Sparkles,
  Zap,
  Users,
  Award
} from 'lucide-react';
import { PageType } from '../../types';
import { Hero } from '../Hero';
import { HowItWorks } from '../HowItWorks';
import { CROPS_DATA } from '../../data/cropsData';

interface HomeViewProps {
  onNavigate: (page: PageType) => void;
  onSelectCropForScan: (cropId: string) => void;
  onSelectSampleForScan: (sampleId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectCropForScan,
  onSelectSampleForScan
}) => {
  const testimonials = [
    {
      name: 'Muhammad Asif',
      role: 'Tomato & Potato Grower',
      location: 'Multan District',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment: 'Last season my tomato crop showed dark target spots. CropShield AI detected Early Blight in 2 seconds and guided me to remove lower foliage and spray copper soap before it ruined the entire acre.',
      rating: 5,
      crop: 'Tomato'
    },
    {
      name: 'Haji Abdul Rehman',
      role: 'Paddy Rice Farmer',
      location: 'Gujranwala Belt',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      comment: 'The WhatsApp supplier feature is a blessing. As soon as Rice Blast was detected, I tapped Contact on WhatsApp and the local store in Lahore delivered Tricyclazole to our village depot within 24 hours.',
      rating: 5,
      crop: 'Rice'
    },
    {
      name: 'Chaudhry Tariq',
      role: 'Cotton & Wheat Producer',
      location: 'Bahawalpur',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      comment: 'The simple language and large buttons make this so easy to use right on the field with my phone. Highly recommend to every farmer in our cooperative.',
      rating: 5,
      crop: 'Cotton'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero 
        onNavigate={onNavigate} 
        onSelectSample={onSelectSampleForScan} 
      />

      {/* 2. How It Works 4-Step Process */}
      <HowItWorks onNavigate={onNavigate} />

      {/* 3. Supported Crops Showcase */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                AI Vision Library
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2 font-serif">
                Supported Crops for AI Diagnosis
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-1">
                Trained on thousands of certified plant pathology images
              </p>
            </div>

            <button
              onClick={() => onNavigate('crops')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition cursor-pointer self-start sm:self-auto"
            >
              <span>View All 10+ Crops & Diseases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Crops Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {CROPS_DATA.slice(0, 8).map((crop) => (
              <div
                key={crop.id}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-4/3 relative overflow-hidden bg-stone-100">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
                      {crop.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-700 transition">
                      {crop.name}
                    </h3>
                    <p className="text-xs text-stone-500 italic">
                      {crop.botanicalName}
                    </p>

                    <div className="pt-2 border-t border-stone-100">
                      <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                        Known Diseases:
                      </span>
                      <p className="text-xs text-stone-700 font-medium truncate">
                        {crop.commonDiseases.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => {
                      onSelectCropForScan(crop.id);
                      onNavigate('detect');
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Scan className="w-3.5 h-3.5" />
                    <span>Detect {crop.name} Disease</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Platform Benefits
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 font-serif">
              Built Specifically for Real Farm Realities
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Empowering farmers with immediate diagnostic clarity without requiring expensive laboratory waiting times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-stone-900">Instant AI Diagnosis</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Receive disease classification in under 1 second. No waiting days for crop pathologists when urgent action is needed.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                🌿
              </div>
              <h3 className="text-lg font-bold text-stone-900">Eco-Friendly & Safe First</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Prioritizes cultural interventions and biological controls before chemical treatments, avoiding excessive pesticide use and preserving soil health.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                💬
              </div>
              <h3 className="text-lg font-bold text-stone-900">Direct WhatsApp Ordering</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                No complicated ecommerce checkouts. Connect directly on WhatsApp with local seed and agrochemical dealers who understand your dialect and area.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Farmer Testimonials */}
      <section className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/60">
              Farmer Stories
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 font-serif">
              Trusted by Farmers Across Agricultural Regions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-stone-800/90 rounded-2xl p-6 border border-stone-700 flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-stone-700">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-emerald-500"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-emerald-400">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full">
            Protect Your Harvest Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif leading-tight">
            Ready to scan your crop leaves with AI?
          </h2>
          <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto">
            Take a quick photo on your mobile phone right now to identify diseases, get actionable treatments, and contact suppliers on WhatsApp.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('detect')}
              className="w-full sm:w-auto px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-2xl shadow-xl transition flex items-center justify-center gap-2.5 cursor-pointer text-base"
            >
              <Scan className="w-5 h-5 text-emerald-400" />
              <span>Launch AI Crop Scanner</span>
            </button>
            <button
              onClick={() => onNavigate('suppliers')}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-stone-100 text-emerald-950 font-bold rounded-2xl shadow-md transition flex items-center justify-center gap-2.5 cursor-pointer text-base"
            >
              <Store className="w-5 h-5 text-emerald-600" />
              <span>Browse Agro Suppliers</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
