import React from 'react';
import { Sprout, Phone, Mail, MapPin, Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      
      {/* Top Banner: WhatsApp Direct Hotline */}
      <div className="bg-emerald-900/90 text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-lg">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <p className="font-bold text-sm">Need immediate assistance with an infected crop?</p>
              <p className="text-xs text-emerald-200">Connect with our agricultural specialists on WhatsApp 24/7</p>
            </div>
          </div>
          <a
            href="https://wa.me/923001234567?text=Hello%20CropShield%20AI,%20I%20need%20urgent%20agricultural%20guidance%20for%20my%20crops."
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-white hover:bg-stone-100 text-emerald-950 font-bold rounded-xl text-xs transition flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-emerald-600 text-sm"></i>
            <span>Open WhatsApp Hotline</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">CropShield AI</span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Empowering farmers with Google Teachable Machine vision intelligence to detect foliar crop diseases, receive reliable treatment guides, and connect directly with local agro suppliers via WhatsApp.
            </p>

            <div className="pt-2 flex items-center gap-3 text-stone-400">
              <span className="text-xs font-semibold">Agronomy Network:</span>
              <span className="text-xs bg-stone-800 text-emerald-400 px-2 py-1 rounded-md border border-stone-700 font-mono">
                Teachable Machine v2
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition cursor-pointer">
                  Home Landing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('detect')} className="hover:text-emerald-400 transition cursor-pointer">
                  Detect Crop Disease
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-400 transition cursor-pointer">
                  Treatments Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('suppliers')} className="hover:text-emerald-400 transition cursor-pointer">
                  Agro Suppliers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('crops')} className="hover:text-emerald-400 transition cursor-pointer">
                  Supported Crops
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-emerald-400 transition cursor-pointer">
                  Farmer Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Supported Crops */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Supported Crops
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>🍅 Tomato (Early & Late Blight)</li>
              <li>🥔 Potato (Late Blight)</li>
              <li>🌽 Corn (Common Rust)</li>
              <li>🌾 Rice (Rice Blast)</li>
              <li>🌱 Cotton (Leaf Curl Virus)</li>
              <li>🍎 Apple (Apple Scab)</li>
              <li>🫑 Bell Pepper (Bacterial Spot)</li>
              <li>🌾 Wheat (Rust & Mildew)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Agronomy Support
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+92 300 1234567</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>support@cropshield.agri.org</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Multan Road, Lahore, Pakistan</span>
              </p>
            </div>
          </div>

        </div>

        {/* Safety Disclaimer Notice */}
        <div className="mt-12 pt-6 border-t border-stone-800 text-[11px] text-stone-500 leading-relaxed space-y-2">
          <p className="font-semibold text-stone-400">⚠️ Agricultural Safety & AI Disclaimer:</p>
          <p>
            CropShield AI predictions and remedies are advisory guidelines based on computational image analysis. AI outputs are not guaranteed diagnostic certificates. Farmers must always consult qualified local agricultural officers or certified agronomists before purchasing or applying pesticides, follow registered product chemical container labels, and adhere strictly to regional environmental and worker safety standards.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-4 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <p>© {new Date().getFullYear()} CropShield AI — Empowering Farmers with Accessible AI. All rights reserved.</p>
          <p className="text-[11px] text-stone-400">Powered by Google Teachable Machine & React</p>
        </div>

      </div>
    </footer>
  );
};
