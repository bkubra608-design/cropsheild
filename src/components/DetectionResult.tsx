import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  Pill, 
  Store, 
  RefreshCw, 
  Bookmark, 
  Share2, 
  Info, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { ScanResult, DiseaseSeverity } from '../types';

interface DetectionResultProps {
  result: ScanResult;
  onViewTreatment: () => void;
  onFindSuppliers: () => void;
  onRetake: () => void;
  onSaveScan: (result: ScanResult) => void;
  isSaved?: boolean;
}

export const DetectionResult: React.FC<DetectionResultProps> = ({
  result,
  onViewTreatment,
  onFindSuppliers,
  onRetake,
  onSaveScan,
  isSaved = false
}) => {
  const getSeverityBadge = (severity: DiseaseSeverity) => {
    switch (severity) {
      case 'severe':
        return (
          <span className="px-3 py-1 bg-red-100 text-red-800 border border-red-200 text-xs font-extrabold rounded-full flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            High Severity — Urgent Action
          </span>
        );
      case 'moderate':
        return (
          <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200 text-xs font-extrabold rounded-full flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            Moderate Severity — Monitor Closely
          </span>
        );
      case 'mild':
      default:
        return (
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-extrabold rounded-full flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Mild / Healthy Condition
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
            AI Classification Result
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-serif">
            {result.diseaseName}
          </h2>
          <p className="text-stone-500 text-sm">
            Affected Crop: <strong className="text-stone-800">{result.cropName}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          {getSeverityBadge(result.severity)}
        </div>
      </div>

      {/* Uncertainty Notice if confidence is low */}
      {result.isUncertain && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm sm:text-base">The result is uncertain.</h4>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              The model confidence ({result.confidence}%) is below recommended certainty. Please upload a clearer, well-lit photo focusing closely on leaf symptoms or consult a local certified agriculture extension officer.
            </p>
          </div>
        </div>
      )}

      {/* Main Grid: Visuals & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Scanned Image Preview */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 border border-stone-300 shadow-inner group">
            <img
              src={result.imageUrl}
              alt={result.diseaseName}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-stone-900/80 text-white text-[11px] font-mono px-2 py-1 rounded-lg backdrop-blur-xs">
              Analyzed Leaf Sample
            </div>
            {result.isHealthy && (
              <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                No Pathogen Detected
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 px-1">
            <span>Model: {result.modelSource || 'Google Teachable Machine'}</span>
            <span>Date: {new Date(result.timestamp).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Diagnosis details & Confidence */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Confidence Meter Card */}
          <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Model Confidence Score
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700 font-mono">
                {result.confidence}%
              </span>
            </div>

            {/* Visual Bar */}
            <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  result.confidence >= 85
                    ? 'bg-emerald-600'
                    : result.confidence >= 65
                    ? 'bg-amber-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>

            {/* Top ranked classes */}
            {result.topPredictions && result.topPredictions.length > 0 && (
              <div className="pt-2 border-t border-stone-200 space-y-1.5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                  Class Probabilities Breakdown:
                </span>
                <div className="space-y-1 text-xs">
                  {result.topPredictions.map((pred, idx) => (
                    <div key={idx} className="flex items-center justify-between text-stone-700">
                      <span className="truncate pr-2">{pred.className}</span>
                      <span className="font-mono font-semibold text-stone-900">
                        {Math.round(pred.probability * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key Symptoms & Causes */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-stone-900 uppercase tracking-wider flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-600" />
              Observed Foliar Symptoms:
            </h4>
            <ul className="space-y-2 text-sm text-stone-700">
              {result.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-stone-50/80 p-2.5 rounded-xl border border-stone-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Action Bar */}
      <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onRetake}
            className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Scan Another</span>
          </button>
          
          <button
            onClick={() => onSaveScan(result)}
            className={`w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition cursor-pointer ${
              isSaved
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-300'
            }`}
          >
            <Bookmark className="w-4 h-4 text-emerald-600" />
            <span>{isSaved ? 'Saved to History' : 'Save Diagnosis'}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onFindSuppliers}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
          >
            <Store className="w-4 h-4 text-emerald-400" />
            <span>Find Suppliers</span>
          </button>

          <button
            onClick={onViewTreatment}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg cursor-pointer"
          >
            <Pill className="w-4 h-4" />
            <span>View Treatment Guide</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

    </div>
  );
};
