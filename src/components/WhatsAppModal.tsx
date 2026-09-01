import React, { useState } from 'react';
import { MessageSquare, X, Send, MapPin, Store, CheckCircle, ExternalLink } from 'lucide-react';
import { Supplier } from '../types';
import { buildWhatsAppUrl } from '../data/suppliersData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplier: Supplier | null;
  cropName?: string;
  diseaseName?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  supplier,
  cropName,
  diseaseName
}) => {
  const [farmerLocation, setFarmerLocation] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [includeLocation, setIncludeLocation] = useState(true);

  if (!isOpen || !supplier) return null;

  const handleSendWhatsApp = () => {
    let finalMessage = '';
    if (diseaseName && cropName) {
      finalMessage = `Hello ${supplier.name},\n\nI detected *${diseaseName}* on my *${cropName}* crop using CropShield AI Agriculture Platform.\n\nI would like information regarding the recommended treatment products and current stock availability.${includeLocation && farmerLocation.trim() ? `\n\n📍 My Farm Location: ${farmerLocation.trim()}` : ''}${customNote.trim() ? `\n\nAdditional Note: ${customNote.trim()}` : ''}\n\nCan you please advise on prices and delivery? Thank you!`;
    } else {
      finalMessage = `Hello ${supplier.name},\n\nI am contacting you via CropShield AI Platform regarding agricultural supplies, crop treatments, and fertilizers.${includeLocation && farmerLocation.trim() ? `\n\n📍 My Location: ${farmerLocation.trim()}` : ''}${customNote.trim() ? `\n\nInquiry: ${customNote.trim()}` : ''}\n\nPlease share your product catalog and availability. Thank you!`;
    }

    const url = buildWhatsAppUrl({
      phone: supplier.whatsappNumber,
      supplierName: supplier.name,
      cropName,
      diseaseName,
      customMessage: finalMessage
    });

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white text-xl">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Chat with Supplier on WhatsApp</h3>
              <p className="text-emerald-100 text-xs mt-0.5">Instant direct communication for crop medicines</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Supplier summary card */}
          <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900 text-sm flex items-center gap-1.5">
                  {supplier.name}
                  {supplier.verified && (
                    <span className="text-emerald-600 text-xs" title="Verified Agricultural Dealer">
                      <CheckCircle className="w-3.5 h-3.5 inline" />
                    </span>
                  )}
                </h4>
                <p className="text-stone-500 text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  {supplier.city}, {supplier.state} • WhatsApp: {supplier.phoneNumber}
                </p>
              </div>
            </div>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
              {supplier.availabilityStatus}
            </span>
          </div>

          {/* Disease Context Pill */}
          {diseaseName && cropName && (
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
              <span className="font-bold text-amber-800 shrink-0 mt-0.5">Crop Diagnosis:</span>
              <div>
                <span className="font-semibold">{cropName}</span> — <span className="font-bold text-amber-900">{diseaseName}</span>
                <p className="text-amber-700 text-[11px] mt-0.5">This diagnostic context will be pre-filled into your WhatsApp chat.</p>
              </div>
            </div>
          )}

          {/* Location input */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center justify-between">
              <span>Your Farm / Village Location (Optional)</span>
              <span className="text-[11px] text-stone-400">Helps supplier verify delivery</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={farmerLocation}
                onChange={(e) => setFarmerLocation(e.target.value)}
                placeholder="e.g. Village Chak 45, Near Multan Road"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden transition"
              />
            </div>
          </div>

          {/* Custom message note */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Specific Questions or Required Quantity (Optional)
            </label>
            <textarea
              rows={2}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="e.g. Do you have 1kg Copper Hydroxide and 16L knapsack sprayers available?"
              className="w-full p-2.5 text-sm bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-hidden transition resize-none"
            />
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Open WhatsApp & Send Inquiry</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </button>
            <p className="text-center text-[11px] text-stone-400 mt-2">
              Opens WhatsApp directly with your formatted message. No phone number saved on third-party servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
