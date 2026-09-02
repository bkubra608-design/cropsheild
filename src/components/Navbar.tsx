import React, { useState } from 'react';
import { 
  Sprout, 
  Scan, 
  Pill, 
  Store, 
  Wheat, 
  Info, 
  PhoneCall, 
  Menu, 
  X, 
  History,
  ShieldCheck
} from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  scanCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  scanCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Sprout className="w-4 h-4" /> },
    { id: 'detect', label: 'Detect Disease', icon: <Scan className="w-4 h-4" /> },
    { id: 'treatments', label: 'Treatments', icon: <Pill className="w-4 h-4" /> },
    { id: 'suppliers', label: 'Suppliers', icon: <Store className="w-4 h-4" /> },
    { id: 'crops', label: 'Supported Crops', icon: <Wheat className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Advisory bar for farmers */}
      <div className="bg-emerald-800 text-emerald-50 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium hidden sm:inline">Crop Health Advisory:</span>
            <span className="text-emerald-100">Early Blight & Rust warnings active in humid regions.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-emerald-200">
              <i className="fa-brands fa-whatsapp text-emerald-300"></i>
              <span>Farmer Helpline:</span>
              <strong className="text-white">+92 300 1234567</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-stone-900 tracking-tight">CropShield</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-1.5 py-0.5 rounded-md tracking-wider"></span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium hidden sm:block">Crop Disease Detection & Suppliers</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/80'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dashboard / History button */}
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                currentPage === 'dashboard'
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-200'
              }`}
              title="View Scan History & Saved Diagnoses"
            >
              <History className="w-4 h-4 text-emerald-600" />
              <span>Dashboard</span>
              {scanCount > 0 && (
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {scanCount}
                </span>
              )}
            </button>

            {/* Primary CTA: Detect Disease */}
            <button
              onClick={() => handleNavClick('detect')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              <Scan className="w-4 h-4" />
              <span>Detect Disease</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('detect')}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-xs flex items-center gap-1"
            >
              <Scan className="w-3.5 h-3.5" />
              <span>Detect</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-1.5 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between text-left transition ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-emerald-600' : 'text-stone-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.id === 'detect' && (
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">
                    AI Scan
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('dashboard')}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-bold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <History className="w-4 h-4 text-emerald-600" />
                Farmer Dashboard & History
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                {scanCount} Scans
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
