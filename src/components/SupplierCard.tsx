import React from 'react';
import { 
  Store, 
  MapPin, 
  Phone, 
  CheckCircle, 
  Star, 
  Package, 
  Truck, 
  Shield, 
  ExternalLink 
} from 'lucide-react';
import { Supplier } from '../types';

interface SupplierCardProps {
  supplier: Supplier;
  onOpenWhatsApp: (supplier: Supplier) => void;
}

export const SupplierCard: React.FC<SupplierCardProps> = ({
  supplier,
  onOpenWhatsApp
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between space-y-4 group">
      
      {/* Top Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg shrink-0 overflow-hidden border border-emerald-200">
              <img
                src={supplier.avatarUrl}
                alt={supplier.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-stone-900 leading-tight group-hover:text-emerald-900 transition-colors flex items-center gap-1.5">
                <span>{supplier.name}</span>
                {supplier.verified && (
                  <span title="Verified Agricultural Dealer" className="text-emerald-600">
                    <CheckCircle className="w-4 h-4 inline" />
                  </span>
                )}
              </h3>
              <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>{supplier.city}, {supplier.state} ({supplier.country})</span>
              </p>
            </div>
          </div>

          <span className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${
            supplier.availabilityStatus === 'Open Now'
              ? 'bg-emerald-100 text-emerald-800'
              : supplier.availabilityStatus === 'Stock Ready'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-teal-100 text-teal-800'
          }`}>
            {supplier.availabilityStatus}
          </span>
        </div>

        {/* Rating & Details */}
        <div className="flex items-center gap-3 text-xs text-stone-600">
          <div className="flex items-center gap-1 text-amber-600 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{supplier.rating.toFixed(1)}</span>
            <span className="text-stone-400 font-normal">({supplier.reviewsCount} reviews)</span>
          </div>
          <span className="text-stone-300">•</span>
          <span className="text-stone-500">Est. {supplier.establishedYear}</span>
          {supplier.deliveryAvailable && (
            <>
              <span className="text-stone-300">•</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <Truck className="w-3 h-3" /> Village Delivery
              </span>
            </>
          )}
        </div>

        {/* Address */}
        <p className="text-xs text-stone-600 bg-stone-50 p-2 rounded-lg border border-stone-100">
          📍 {supplier.address}
        </p>

        {/* Products Tags */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Available Supplies & Chemicals:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {supplier.products.map((prod, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium bg-emerald-50 text-emerald-900 border border-emerald-200/70 px-2 py-0.5 rounded-md"
              >
                {prod}
              </span>
            ))}
          </div>
        </div>

        {/* Crop Specialties */}
        <div className="text-xs text-stone-500 pt-1">
          <span className="font-semibold text-stone-700">Specialized Crops: </span>
          <span>{supplier.cropSpecialties.join(', ')}</span>
        </div>
      </div>

      {/* Action Buttons: Call & WhatsApp */}
      <div className="pt-3 border-t border-stone-200 grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${supplier.phoneNumber}`}
          className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-stone-600" />
          <span>Call Supplier</span>
        </a>

        <button
          onClick={() => onOpenWhatsApp(supplier)}
          className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition cursor-pointer"
        >
          <i className="fa-brands fa-whatsapp text-base"></i>
          <span>WhatsApp</span>
        </button>
      </div>

    </div>
  );
};
