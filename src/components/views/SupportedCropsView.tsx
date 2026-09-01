import React from 'react';
import { 
  Wheat, 
  Scan, 
  Sprout, 
  Info, 
  Thermometer, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { PageType, Crop } from '../../types';
import { CROPS_DATA, DISEASES_DATABASE } from '../../data/cropsData';

interface SupportedCropsViewProps {
  onNavigate: (page: PageType) => void;
  onSelectCropForScan: (cropId: string) => void;
}

export const SupportedCropsView: React.FC<SupportedCropsViewProps> = ({
  onNavigate,
  onSelectCropForScan
}) => {
  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Trained Botanical Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Supported Crops
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Google Teachable Machine vision models trained on leaf pathology datasets across major staple and cash crops.
          </p>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CROPS_DATA.map((crop) => {
            // Find diseases associated with this crop in our database
            const specificDiseases = DISEASES_DATABASE.filter(d => d.cropId === crop.id);

            return (
              <div
                key={crop.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Banner */}
                  <div className="aspect-16/10 relative overflow-hidden bg-stone-100">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      {crop.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      AI Model Ready
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition font-serif">
                        {crop.name}
                      </h3>
                      <p className="text-xs text-stone-500 italic mt-0.5">
                        {crop.botanicalName}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {crop.description}
                    </p>

                    {/* Ideal Conditions */}
                    <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs text-stone-700 space-y-1">
                      <span className="font-bold text-stone-800 flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-emerald-600" />
                        Optimal Agro-Ecological Climate:
                      </span>
                      <p className="text-stone-600">{crop.idealConditions}</p>
                    </div>

                    {/* Trained Diseases in Model */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        Classifiable Diseases in Teachable Machine:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {crop.commonDiseases.map((dis, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 py-1 rounded-lg"
                          >
                            {dis}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      onSelectCropForScan(crop.id);
                      onNavigate('detect');
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-lg"
                  >
                    <Scan className="w-4 h-4" />
                    <span>Scan {crop.name} Leaves</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Model Expansion Notice */}
        <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-2.5 py-1 rounded-md">
              Continuous Model Training
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif">
              Need support for another regional crop?
            </h3>
            <p className="text-emerald-100 text-sm">
              Our agriculture model continuously integrates new crops such as Sugarcane, Mango, Citrus, and Pulses. You can connect your own custom Google Teachable Machine model URL in Settings anytime.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-white hover:bg-stone-100 text-emerald-950 font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer text-sm shrink-0 self-center sm:self-auto"
          >
            <span>Request Crop Model</span>
          </button>
        </div>

      </div>
    </div>
  );
};
