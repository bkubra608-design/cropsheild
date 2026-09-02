import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  Camera, 
  Image as ImageIcon, 
  Sparkles, 
  AlertCircle, 
  Settings, 
  HelpCircle,
  CheckCircle,
  RefreshCw,
  Sliders
} from 'lucide-react';
import { SAMPLE_SCAN_IMAGES, CROPS_DATA } from '../data/cropsData';
import { 
  getStoredTeachableMachineConfig, 
  saveTeachableMachineConfig 
} from '../services/teachableMachine';

interface UploadBoxProps {
  onImageSelected: (fileOrUrl: File | string, cropFilter?: string) => void;
  isLoading: boolean;
  selectedCropFilter: string;
  onCropFilterChange: (cropId: string) => void;
}

export const UploadBox: React.FC<UploadBoxProps> = ({
  onImageSelected,
  isLoading,
  selectedCropFilter,
  onCropFilterChange
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);
  
  // Teachable machine custom configuration state
  const [tmConfig, setTmConfig] = useState(getStoredTeachableMachineConfig());
  const [customModelInput, setCustomModelInput] = useState(tmConfig.modelUrl);
  const [confidenceThresholdInput, setConfidenceThresholdInput] = useState(tmConfig.confidenceThreshold * 100);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndUpload(file);
    }
  };

  const validateAndUpload = (file: File) => {
    setErrorMessage(null);
    const validFormats = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    
    if (!validFormats.includes(file.type)) {
      setErrorMessage('Unsupported file format. Please upload a clear JPG, JPEG, PNG, or WEBP photo.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setErrorMessage('Image file is too large (over 15MB). Please upload a smaller photo.');
      return;
    }

    onImageSelected(file, selectedCropFilter);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndUpload(file);
    }
  };

  const handleSaveConfig = () => {
    const newConfig = {
      modelUrl: customModelInput.trim(),
      isCustomUrl: customModelInput.trim() !== 'https://teachablemachine.withgoogle.com/models/agri-crop-disease-v1/',
      confidenceThreshold: confidenceThresholdInput / 100
    };
    setTmConfig(newConfig);
    saveTeachableMachineConfig(newConfig);
    setShowConfigModal(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg space-y-6">
      
      {/* Header with Crop Selector & Teachable Machine Settings */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif flex items-center gap-2">
            <span>Crop Disease Scanner</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full font-sans">
              AI Ready
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            Powered by CropSheild image classification
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Crop Selector Filter */}
          <div className="relative">
            <select
              value={selectedCropFilter}
              onChange={(e) => onCropFilterChange(e.target.value)}
              className="text-xs sm:text-sm bg-stone-50 hover:bg-stone-100 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden transition cursor-pointer"
            >
              <option value="all">🌱 All Supported Crops (Auto-Detect)</option>
              {CROPS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Model Config Button */}
          <button
            onClick={() => setShowConfigModal(true)}
            className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition cursor-pointer"
            title="Configure Teachable Machine Model URl"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Drag & Drop / Upload Target */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center transition-all duration-200 ${
          isDragging
            ? 'border-emerald-500 bg-emerald-50/60 scale-101'
            : 'border-stone-300 hover:border-emerald-500 bg-stone-50/60'
        }`}
      >
        {/* Hidden inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/jpg,image/webp"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload-input"
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="hidden"
          id="camera-upload-input"
        />

        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
            <UploadCloud className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900">
              Take a clear photo of the affected crop
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Upload close-up photos of leaves, stems, or fruit showing visible spots, discoloration, or lesions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => cameraInputRef.current?.click()}
              disabled={isLoading}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Camera className="w-4 h-4" />
              <span>Take Photo with Camera</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold text-sm shadow-xs transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <ImageIcon className="w-4 h-4 text-emerald-600" />
              <span>Browse Photos from Device</span>
            </button>
          </div>

          <p className="text-[11px] text-stone-400">
            Supported formats: <strong>JPG, JPEG, PNG, WEBP</strong> (Max 15MB)
          </p>
        </div>
      </div>

      {/* Error display if any */}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-2xl p-4 text-sm flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Notice:</span> {errorMessage}
          </div>
        </div>
      )}

      {/* Quick Test with Sample Crop Photos */}
      <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Or Try Quick Sample Crop Photos
          </span>
          <span className="text-[11px] text-stone-400 hidden sm:inline">Click any leaf to run instant AI detection</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {SAMPLE_SCAN_IMAGES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => onImageSelected(sample.imageUrl, selectedCropFilter)}
              disabled={isLoading}
              className="group text-left bg-white rounded-xl p-2 border border-stone-200 hover:border-emerald-500 hover:shadow-md transition cursor-pointer disabled:opacity-50"
            >
              <div className="aspect-4/3 rounded-lg overflow-hidden mb-1.5 relative bg-stone-100">
                <img
                  src={sample.imageUrl}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-xs font-bold text-stone-900 truncate">{sample.crop}</p>
              <p className="text-[11px] text-stone-500 truncate">{sample.diseaseName}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Teachable Machine Configuration Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-bold text-lg text-stone-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-600" />
                CropSheild Settings
              </h3>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-stone-400 hover:text-stone-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-stone-700">
              <div>
                <label className="block font-semibold mb-1 text-xs text-stone-800">
                 CropSheild URL:
                </label>
                <input
                  type="url"
                  value={customModelInput}
                  onChange={(e) => setCustomModelInput(e.target.value)}
                  placeholder="https://teachablemachine.withgoogle.com/models/YOUR_MODEL_ID/"
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-emerald-500 outline-hidden"
                />
                <p className="text-[11px] text-stone-500 mt-1">
                  You can deploy any CropSheild Image Model URL (containing model.json & metadata.json).
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-semibold text-xs text-stone-800">
                    Confidence Alert Threshold:
                  </label>
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    {confidenceThresholdInput}%
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="90"
                  value={confidenceThresholdInput}
                  onChange={(e) => setConfidenceThresholdInput(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <p className="text-[11px] text-stone-500">
                  Predictions with confidence below this threshold will display an "Uncertain Diagnosis" warning.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-200">
              <button
                onClick={() => {
                  setCustomModelInput('https://teachablemachine.withgoogle.com/models/agri-crop-disease-v1/');
                  setConfidenceThresholdInput(65);
                }}
                className="px-3 py-2 text-xs text-stone-600 hover:text-stone-900"
              >
                Reset Default
              </button>
              <button
                onClick={handleSaveConfig}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
