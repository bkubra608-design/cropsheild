import React, { useState } from 'react';
import { 
  Search, 
  Pill, 
  Store, 
  Filter, 
  Sprout, 
  ShieldCheck, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp,
  MessageSquare
} from 'lucide-react';
import { PageType, CropDisease } from '../../types';
import { DISEASES_DATABASE, CROPS_DATA } from '../../data/cropsData';
import { TreatmentCard } from '../TreatmentCard';

interface TreatmentsViewProps {
  onNavigate: (page: PageType) => void;
  onSelectSupplierForWhatsApp: (cropName: string, diseaseName: string) => void;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({
  onNavigate,
  onSelectSupplierForWhatsApp
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [expandedDiseaseId, setExpandedDiseaseId] = useState<string | null>(DISEASES_DATABASE[0]?.id || null);

  const filteredDiseases = DISEASES_DATABASE.filter((disease) => {
    // Filter by crop
    if (selectedCrop !== 'all' && disease.cropId !== selectedCrop && disease.cropId !== 'all') {
      return false;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = disease.name.toLowerCase().includes(q);
      const matchCrop = disease.cropName.toLowerCase().includes(q);
      const matchSymptoms = disease.symptoms.some(s => s.toLowerCase().includes(q));
      const matchTreatments = disease.treatment.immediateSteps.some(t => t.toLowerCase().includes(q)) ||
                              disease.treatment.organicRemedies.some(o => o.toLowerCase().includes(q)) ||
                              disease.treatment.safeChemicalOptions.some(c => c.toLowerCase().includes(q));
      return matchName || matchCrop || matchSymptoms || matchTreatments;
    }

    return true;
  });

  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Treatment & Recovery Knowledgebase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Crop Disease Treatments
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Search verified agricultural remedies, organic botanical solutions, and safe chemical practices for all major crops.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-md space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="sm:col-span-8 relative">
              <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by crop, disease (e.g. Early Blight), symptoms, or medicine..."
                className="w-full pl-11 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Crop Filter Dropdown */}
            <div className="sm:col-span-4">
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full py-2.5 px-3 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 outline-hidden cursor-pointer"
              >
                <option value="all">🌱 All Crops ({DISEASES_DATABASE.length} Diseases)</option>
                {CROPS_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Tag Pills */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs pt-1 border-t border-stone-100">
            <span className="text-stone-400 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Quick Filter:
            </span>
            <button
              onClick={() => setSelectedCrop('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                selectedCrop === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              All Crops
            </button>
            {['tomato', 'potato', 'corn', 'rice', 'cotton', 'apple'].map((cropId) => (
              <button
                key={cropId}
                onClick={() => setSelectedCrop(cropId)}
                className={`px-2.5 py-1 rounded-lg capitalize font-medium transition cursor-pointer ${
                  selectedCrop === cropId
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {cropId}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 px-1">
          <span>Found <strong>{filteredDiseases.length}</strong> treatment protocols</span>
          <span>Click any card to expand full dosage & prevention plan</span>
        </div>

        {/* Disease Treatment Accordion / List */}
        <div className="space-y-6">
          {filteredDiseases.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-3">
              <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto text-2xl">
                🔍
              </div>
              <h3 className="text-lg font-bold text-stone-800">No treatments found</h3>
              <p className="text-sm text-stone-500 max-w-sm mx-auto">
                No disease or remedy matches "{searchQuery}". Try clearing search filters or search for another crop.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCrop('all');
                }}
                className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredDiseases.map((disease) => {
              const isExpanded = expandedDiseaseId === disease.id;
              return (
                <div
                  key={disease.id}
                  className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden transition-all duration-200"
                >
                  {/* Summary Bar / Header */}
                  <div
                    onClick={() => setExpandedDiseaseId(isExpanded ? null : disease.id)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/80 transition select-none"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg shrink-0">
                        <Pill className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
                            {disease.name}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-700">
                            {disease.cropName}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                            disease.severity === 'severe'
                              ? 'bg-red-100 text-red-800'
                              : disease.severity === 'moderate'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {disease.severity.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 italic mt-0.5">
                          {disease.scientificName} • {disease.visualCharacteristics}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectSupplierForWhatsApp(disease.cropName, disease.name);
                          onNavigate('suppliers');
                        }}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Store className="w-3.5 h-3.5" />
                        <span>Find Suppliers</span>
                      </button>

                      <button className="p-2 rounded-xl bg-stone-100 text-stone-600">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Full Treatment Details */}
                  {isExpanded && (
                    <div className="border-t border-stone-200 p-5 sm:p-8 bg-stone-50/50">
                      <TreatmentCard
                        disease={disease}
                        onFindSuppliers={() => {
                          onSelectSupplierForWhatsApp(disease.cropName, disease.name);
                          onNavigate('suppliers');
                        }}
                        onOpenWhatsAppSupplier={() => {
                          onSelectSupplierForWhatsApp(disease.cropName, disease.name);
                          onNavigate('suppliers');
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Global Agricultural Safety Disclaimer */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 text-xs text-amber-900 leading-relaxed shadow-xs">
          <p className="font-bold text-amber-950 mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            Mandatory Agricultural Pesticide & Fungicide Disclaimer:
          </p>
          <p>
            The disease management recommendations presented on CropShield AI are compiled from certified agricultural extension literature for educational and advisory reference only. Because environmental factors, crop varieties, and regional pathogen strains vary, farmers should verify all treatment actions with local government agriculture extension officers or certified agronomists prior to chemical application. Always observe official safety labels, PPE requirements, and statutory pre-harvest intervals (PHI).
          </p>
        </div>

      </div>
    </div>
  );
};
