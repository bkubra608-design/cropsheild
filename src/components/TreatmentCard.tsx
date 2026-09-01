import React from 'react';
import { 
  Pill, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  Store, 
  Scissors, 
  Droplets, 
  Wind, 
  Sprout, 
  HelpCircle,
  FileText,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { CropDisease, TreatmentPlan } from '../types';

interface TreatmentCardProps {
  disease: CropDisease;
  onFindSuppliers: () => void;
  onOpenWhatsAppSupplier?: () => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  disease,
  onFindSuppliers,
  onOpenWhatsAppSupplier
}) => {
  const { treatment } = disease;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/80 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Pill className="w-3.5 h-3.5" />
            Treatment & Recovery Protocol
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif">
            {disease.name}
          </h2>
          <p className="text-emerald-100 text-sm">
            Target Crop: <strong>{disease.cropName}</strong> • Scientific: <em className="text-emerald-200">{disease.scientificName}</em>
          </p>
        </div>

        <button
          onClick={onFindSuppliers}
          className="px-6 py-3.5 bg-white hover:bg-stone-100 text-emerald-950 font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2.5 cursor-pointer text-sm shrink-0"
        >
          <Store className="w-4 h-4 text-emerald-600" />
          <span>Find Treatment Suppliers</span>
        </button>
      </div>

      {/* 1. Immediate Cultural Actions (What you should do first) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-stone-200 pb-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              Immediate Cultural Steps (Do This First)
            </h3>
            <p className="text-xs text-stone-500">Fast interventions to halt disease propagation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {treatment.immediateSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-start gap-3 hover:border-emerald-300 transition"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-sm text-stone-800 font-medium leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Recommended Agricultural Practices & Prevention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Good Agronomic Practices */}
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
          <h4 className="font-bold text-sm text-stone-900 uppercase tracking-wider flex items-center gap-2">
            <Sprout className="w-4 h-4 text-emerald-600" />
            Good Agricultural Practices:
          </h4>
          <ul className="space-y-2 text-sm text-stone-700">
            {treatment.agriculturalPractices.map((practice, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prevention Methods */}
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
          <h4 className="font-bold text-sm text-stone-900 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Long-Term Prevention Methods:
          </h4>
          <ul className="space-y-2 text-sm text-stone-700">
            {treatment.preventionMethods.map((prev, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                <span>{prev}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 3. Certified Organic & Safe Chemical Options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Organic Remedies */}
        <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-emerald-900 uppercase tracking-wider flex items-center gap-2">
              <span className="text-lg">🌿</span>
              Organic & Botanical Remedies
            </h4>
            <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded-full">
              Eco-Friendly
            </span>
          </div>
          <ul className="space-y-2 text-sm text-emerald-950">
            {treatment.organicRemedies.map((remedy, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0"></span>
                <span>{remedy}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Registered Chemical Options */}
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-stone-900 uppercase tracking-wider flex items-center gap-2">
              <span className="text-lg">🧪</span>
              Safe Registered Crop Treatments
            </h4>
            <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full">
              Follow Label
            </span>
          </div>
          <ul className="space-y-2 text-sm text-stone-700">
            {treatment.safeChemicalOptions.map((opt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-2 shrink-0"></span>
                <span>{opt}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 4. Dosage & Safety Instructions */}
      <div className="bg-amber-50/80 border border-amber-300 rounded-2xl p-5 sm:p-6 space-y-3">
        <h4 className="font-bold text-sm text-amber-950 uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          Dosage & Spray Application Safety
        </h4>
        <p className="text-sm text-amber-900 font-medium leading-relaxed">
          {treatment.dosageSafetyNotes}
        </p>

        <div className="pt-2 border-t border-amber-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-800">
          {treatment.safetyPrecautions.map((precaution, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>{precaution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Recommended Agricultural Supplies Checklist */}
      <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
            Supplies Required for this Treatment:
          </span>
          <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
            {treatment.recommendedProductTypes.map((prod, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold bg-white border border-stone-300 px-2.5 py-1 rounded-lg text-stone-800"
              >
                {prod}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onFindSuppliers}
          className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer text-sm shrink-0"
        >
          <Store className="w-4 h-4" />
          <span>Find Suppliers for These Items</span>
        </button>
      </div>

      {/* Official Disclaimer */}
      <div className="bg-stone-100 rounded-2xl p-4 text-xs text-stone-600 leading-relaxed border border-stone-200">
        <p className="font-semibold text-stone-800 mb-0.5">⚠️ Important Agricultural Safety Notice:</p>
        <p>
          AI predictions and treatment recommendations provided on this platform are general advisory guidance. AI diagnoses are not guaranteed laboratory analyses. Before applying any chemical pesticides, fungicides, or fertilizers, always consult certified local agricultural extension officers or qualified agronomists and adhere strictly to product container label instructions and local statutory regulations.
        </p>
      </div>

    </div>
  );
};
