import React, { useState } from 'react';
import { 
  Store, 
  Search, 
  MapPin, 
  Phone, 
  Filter, 
  Truck, 
  CheckCircle, 
  Sparkles,
  Info
} from 'lucide-react';
import { PageType, Supplier } from '../../types';
import { SUPPLIERS_DATA } from '../../data/suppliersData';
import { SupplierCard } from '../SupplierCard';
import { WhatsAppModal } from '../WhatsAppModal';

interface SuppliersViewProps {
  onNavigate: (page: PageType) => void;
  activeCropDiagnosis?: {
    cropName: string;
    diseaseName: string;
  } | null;
  onClearDiagnosisContext?: () => void;
}

export const SuppliersView: React.FC<SuppliersViewProps> = ({
  onNavigate,
  activeCropDiagnosis,
  onClearDiagnosisContext
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('all');
  
  // WhatsApp modal state
  const [activeModalSupplier, setActiveModalSupplier] = useState<Supplier | null>(null);

  // Unique cities list
  const cities = Array.from(new Set(SUPPLIERS_DATA.map(s => s.city)));

  const productCategories = [
    'Bio-Fungicides',
    'Copper Hydroxide',
    'Certified Seeds',
    'Knapsack Sprayers',
    'Neem Oil 1500ppm',
    'Crop Protection Chemicals'
  ];

  const filteredSuppliers = SUPPLIERS_DATA.filter((supplier) => {
    // Filter by city
    if (selectedCity !== 'all' && supplier.city !== selectedCity) {
      return false;
    }

    // Filter by product tag
    if (selectedProduct !== 'all') {
      const hasProduct = supplier.products.some(p => p.toLowerCase().includes(selectedProduct.toLowerCase()));
      if (!hasProduct) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = supplier.name.toLowerCase().includes(q);
      const matchCity = supplier.city.toLowerCase().includes(q) || supplier.state.toLowerCase().includes(q);
      const matchAddress = supplier.address.toLowerCase().includes(q);
      const matchProducts = supplier.products.some(p => p.toLowerCase().includes(q));
      const matchCrops = supplier.cropSpecialties.some(c => c.toLowerCase().includes(q));
      return matchName || matchCity || matchAddress || matchProducts || matchCrops;
    }

    return true;
  });

  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Agricultural Supplies & Medicines
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Verified Agro Suppliers Directory
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Find certified seed stores, fungicide distributors, and equipment dealers. Contact suppliers directly via <strong>WhatsApp</strong> for stock and prices.
          </p>
        </div>

        {/* Active Disease Diagnosis Banner if navigated from scan */}
        {activeCropDiagnosis && (
          <div className="bg-emerald-800 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md animate-in fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                💊
              </div>
              <div>
                <p className="text-xs text-emerald-200 uppercase font-bold tracking-wider">Active Diagnosis Context</p>
                <h3 className="font-bold text-base sm:text-lg">
                  {activeCropDiagnosis.cropName} — {activeCropDiagnosis.diseaseName}
                </h3>
                <p className="text-xs text-emerald-100">
                  When you click WhatsApp, your diagnosis will be pre-filled so suppliers can immediately recommend stock.
                </p>
              </div>
            </div>

            {onClearDiagnosisContext && (
              <button
                onClick={onClearDiagnosisContext}
                className="px-3 py-1.5 bg-emerald-950/60 hover:bg-emerald-950 text-emerald-200 text-xs font-semibold rounded-lg self-start sm:self-auto"
              >
                Clear Context
              </button>
            )}
          </div>
        )}

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-md space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search store name, city, or product (e.g. Copper Hydroxide)..."
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

            {/* City Selector */}
            <div className="sm:col-span-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full py-2.5 px-3 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 outline-hidden cursor-pointer"
              >
                <option value="all">📍 All Locations ({cities.length} Cities)</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Category Selector */}
            <div className="sm:col-span-3">
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full py-2.5 px-3 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 outline-hidden cursor-pointer"
              >
                <option value="all">📦 All Product Types</option>
                {productCategories.map((prod) => (
                  <option key={prod} value={prod}>
                    {prod}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick City Filters */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs pt-1 border-t border-stone-100">
            <span className="text-stone-400 font-semibold mr-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Major Hubs:
            </span>
            <button
              onClick={() => setSelectedCity('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                selectedCity === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              All Regions
            </button>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                  selectedCity === city
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Suppliers List Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-stone-500 px-1">
            <span>Showing <strong>{filteredSuppliers.length}</strong> verified agricultural dealers</span>
            <span>All dealers support direct WhatsApp and Phone ordering</span>
          </div>

          {filteredSuppliers.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-3 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto text-2xl">
                🏪
              </div>
              <h3 className="text-lg font-bold text-stone-800">No suppliers found in this filter</h3>
              <p className="text-sm text-stone-500 max-w-sm mx-auto">
                Try clearing the city or product filters to see suppliers who offer regional courier delivery.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCity('all');
                  setSelectedProduct('all');
                }}
                className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSuppliers.map((supplier) => (
                <SupplierCard
                  key={supplier.id}
                  supplier={supplier}
                  onOpenWhatsApp={(s) => setActiveModalSupplier(s)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Information box for farmers */}
        <div className="bg-stone-100 rounded-2xl p-5 border border-stone-200 text-xs text-stone-700 space-y-1.5">
          <h4 className="font-bold text-stone-900 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Supplier Verification Standards:
          </h4>
          <p>
            All listed suppliers are vetted agricultural vendors carrying genuine registered pesticides, certified seeds, bio-fungicides, and PPE safety gear. When placing orders via WhatsApp, request batch numbers, expiry dates, and official purchase receipts.
          </p>
        </div>

      </div>

      {/* WhatsApp Click-to-Chat Modal */}
      <WhatsAppModal
        isOpen={Boolean(activeModalSupplier)}
        onClose={() => setActiveModalSupplier(null)}
        supplier={activeModalSupplier}
        cropName={activeCropDiagnosis?.cropName}
        diseaseName={activeCropDiagnosis?.diseaseName}
      />
    </div>
  );
};
