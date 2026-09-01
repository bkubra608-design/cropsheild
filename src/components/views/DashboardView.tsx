import React from 'react';
import { 
  Scan, 
  History, 
  Pill, 
  Store, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  Bookmark, 
  Plus, 
  ShieldCheck,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { PageType, ScanResult } from '../../types';

interface DashboardViewProps {
  scanHistory: ScanResult[];
  onNavigate: (page: PageType) => void;
  onClearHistory: () => void;
  onDeleteScanItem: (id: string) => void;
  onSelectScanForTreatment: (result: ScanResult) => void;
  onSelectSupplierForWhatsApp: (cropName: string, diseaseName: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  scanHistory,
  onNavigate,
  onClearHistory,
  onDeleteScanItem,
  onSelectScanForTreatment,
  onSelectSupplierForWhatsApp
}) => {
  const totalScans = scanHistory.length;
  const healthyCount = scanHistory.filter(s => s.isHealthy).length;
  const infectedCount = totalScans - healthyCount;

  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/60">
              Farmer Agronomy Center
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif">
              Welcome to Your Crop Health Dashboard
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl">
              Track past disease diagnostics, revisit treatment recommendations, and contact suppliers for repeat supplies.
            </p>
          </div>

          <button
            onClick={() => onNavigate('detect')}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-stone-950 font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm shrink-0 self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Crop Scan</span>
          </button>
        </div>

        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Total Scans Run</span>
              <p className="text-3xl font-extrabold text-stone-900 font-mono mt-1">{totalScans}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Scan className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Infections Identified</span>
              <p className="text-3xl font-extrabold text-amber-700 font-mono mt-1">{infectedCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Healthy Crop Scans</span>
              <p className="text-3xl font-extrabold text-emerald-700 font-mono mt-1">{healthyCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Scan History Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-stone-900 font-serif flex items-center gap-2">
              <History className="w-5 h-5 text-emerald-600" />
              <span>Recent Diagnoses & History</span>
            </h2>

            {totalScans > 0 && (
              <button
                onClick={onClearHistory}
                className="text-xs font-semibold text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All History</span>
              </button>
            )}
          </div>

          {totalScans === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-xs space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                📷
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-900">No scans recorded yet</h3>
                <p className="text-sm text-stone-500 max-w-sm mx-auto">
                  Take a photo of any crop leaf or try one of our sample images to see your diagnosis log here.
                </p>
              </div>
              <button
                onClick={() => onNavigate('detect')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition cursor-pointer"
              >
                Start First Crop Scan
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {scanHistory.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start gap-3.5">
                    <img
                      src={item.imageUrl}
                      alt={item.diseaseName}
                      className="w-20 h-20 rounded-xl object-cover border border-stone-200 shrink-0 bg-stone-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-stone-500">{item.cropName}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.isHealthy
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.severity === 'severe'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.confidence}% Match
                        </span>
                      </div>

                      <h4 className="font-bold text-base text-stone-900 truncate mt-0.5">
                        {item.diseaseName}
                      </h4>

                      <p className="text-xs text-stone-400 flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onDeleteScanItem(item.id)}
                      className="p-2 text-stone-400 hover:text-red-600 rounded-lg transition"
                      title="Delete this scan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          onSelectSupplierForWhatsApp(item.cropName, item.diseaseName);
                          onNavigate('suppliers');
                        }}
                        className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg flex items-center gap-1 transition"
                      >
                        <Store className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Supplier</span>
                      </button>

                      <button
                        onClick={() => onSelectScanForTreatment(item)}
                        className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-xs transition"
                      >
                        <Pill className="w-3.5 h-3.5" />
                        <span>View Treatment</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
