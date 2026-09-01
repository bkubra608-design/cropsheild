import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Loader2, 
  Sparkles, 
  AlertCircle, 
  RefreshCw, 
  Pill, 
  Store, 
  ShieldCheck, 
  Sliders 
} from 'lucide-react';
import { PageType, ScanResult, CropDisease } from '../../types';
import { UploadBox } from '../UploadBox';
import { DetectionResult } from '../DetectionResult';
import { TreatmentCard } from '../TreatmentCard';
import { detectCropDisease } from '../../services/teachableMachine';
import { DISEASES_DATABASE, SAMPLE_SCAN_IMAGES } from '../../data/cropsData';
import confetti from 'canvas-confetti';

interface DetectViewProps {
  onNavigate: (page: PageType) => void;
  onSaveScanToHistory: (result: ScanResult) => void;
  savedScanIds: string[];
  initialCropFilter?: string;
  initialSampleId?: string | null;
  onClearInitialSample?: () => void;
  onSelectSupplierForWhatsApp: (cropName: string, diseaseName: string) => void;
}

export const DetectView: React.FC<DetectViewProps> = ({
  onNavigate,
  onSaveScanToHistory,
  savedScanIds,
  initialCropFilter = 'all',
  initialSampleId = null,
  onClearInitialSample,
  onSelectSupplierForWhatsApp
}) => {
  const [selectedCropFilter, setSelectedCropFilter] = useState(initialCropFilter);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [showFullTreatment, setShowFullTreatment] = useState(false);
  const [analyzingStep, setAnalyzingStep] = useState('Preprocessing leaf pixels...');

  // Auto trigger sample if initialSampleId passed
  useEffect(() => {
    if (initialSampleId) {
      const foundSample = SAMPLE_SCAN_IMAGES.find(s => s.id === initialSampleId);
      if (foundSample) {
        handleImageSelected(foundSample.imageUrl, selectedCropFilter);
      }
      onClearInitialSample?.();
    }
  }, [initialSampleId]);

  const handleImageSelected = async (fileOrUrl: File | string, cropFilter?: string) => {
    setIsLoading(true);
    setError(null);
    setScanResult(null);
    setShowFullTreatment(false);

    // Simulated progress steps for clear visual feedback
    setAnalyzingStep('Loading Teachable Machine model tensor...');
    const t1 = setTimeout(() => setAnalyzingStep('Extracting foliar necrosis & chlorosis patterns...'), 350);
    const t2 = setTimeout(() => setAnalyzingStep('Calculating disease confidence score...'), 700);

    try {
      const result = await detectCropDisease(fileOrUrl, cropFilter || selectedCropFilter);
      clearTimeout(t1);
      clearTimeout(t2);
      setScanResult(result);
      
      // Auto save to history
      onSaveScanToHistory(result);

      if (result.isHealthy) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    } catch (err: any) {
      clearTimeout(t1);
      clearTimeout(t2);
      setError(err.message || 'Could not analyze crop photo. Please upload a clear leaf image.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetake = () => {
    setScanResult(null);
    setShowFullTreatment(false);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Matched disease database entry for full treatment view
  const currentDiseaseDbEntry: CropDisease | undefined = scanResult
    ? DISEASES_DATABASE.find(d => d.id === scanResult.diseaseId) || {
        id: scanResult.diseaseId,
        name: scanResult.diseaseName,
        scientificName: 'Pathogen detected',
        cropId: 'crop',
        cropName: scanResult.cropName,
        severity: scanResult.severity,
        symptoms: scanResult.symptoms,
        possibleCauses: ['High humidity', 'Foliar moisture'],
        visualCharacteristics: 'Lesions on leaf surface',
        treatment: scanResult.treatment,
        sampleImages: []
      }
    : undefined;

  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-[85vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            AI Crop Pathology
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Crop Disease Detection
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Upload a photo of your crop to instantly identify diseases and receive trusted agricultural treatment guidelines.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-900 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-xs">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm">Detection Failed</h4>
              <p className="text-xs sm:text-sm text-red-800">{error}</p>
              <button
                onClick={handleRetake}
                className="mt-2 text-xs font-bold text-red-700 underline hover:text-red-900"
              >
                Try uploading again
              </button>
            </div>
          </div>
        )}

        {/* Loading State with animated scanner effect */}
        {isLoading && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl text-center space-y-6 animate-in fade-in">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-200 animate-ping opacity-30"></div>
              <div className="w-24 h-24 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner relative overflow-hidden">
                <Scan className="w-12 h-12 animate-pulse" />
                <div className="absolute inset-x-0 h-1 bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-[bounce_1.5s_infinite]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-stone-900">
                AI is Analyzing Your Crop Photo...
              </h3>
              <p className="text-sm font-medium text-emerald-700 font-mono">
                {analyzingStep}
              </p>
              <p className="text-xs text-stone-400">
                Running Google Teachable Machine neural vision classifier
              </p>
            </div>
          </div>
        )}

        {/* If no result yet and not loading: Display Upload Box */}
        {!isLoading && !scanResult && (
          <UploadBox
            isLoading={isLoading}
            onImageSelected={handleImageSelected}
            selectedCropFilter={selectedCropFilter}
            onCropFilterChange={(id) => setSelectedCropFilter(id)}
          />
        )}

        {/* If scan completed: Display Detection Result */}
        {!isLoading && scanResult && (
          <div className="space-y-8">
            <DetectionResult
              result={scanResult}
              isSaved={savedScanIds.includes(scanResult.id)}
              onSaveScan={onSaveScanToHistory}
              onRetake={handleRetake}
              onFindSuppliers={() => {
                onSelectSupplierForWhatsApp(scanResult.cropName, scanResult.diseaseName);
                onNavigate('suppliers');
              }}
              onViewTreatment={() => {
                setShowFullTreatment(true);
                setTimeout(() => {
                  document.getElementById('treatment-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            />

            {/* In-page Full Treatment Card if requested */}
            {showFullTreatment && currentDiseaseDbEntry && (
              <div id="treatment-section" className="pt-4">
                <TreatmentCard
                  disease={currentDiseaseDbEntry}
                  onFindSuppliers={() => {
                    onSelectSupplierForWhatsApp(scanResult.cropName, scanResult.diseaseName);
                    onNavigate('suppliers');
                  }}
                  onOpenWhatsAppSupplier={() => {
                    onSelectSupplierForWhatsApp(scanResult.cropName, scanResult.diseaseName);
                    onNavigate('suppliers');
                  }}
                />
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
