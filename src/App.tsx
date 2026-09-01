/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType, ScanResult } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { DetectView } from './components/views/DetectView';
import { TreatmentsView } from './components/views/TreatmentsView';
import { SuppliersView } from './components/views/SuppliersView';
import { SupportedCropsView } from './components/views/SupportedCropsView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { DashboardView } from './components/views/DashboardView';
import { DISEASES_DATABASE } from './data/cropsData';

const HISTORY_STORAGE_KEY = 'cropshield_scan_history';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [scanHistory, setScanHistory] = useState<ScanResult[]>([]);
  const [activeCropDiagnosis, setActiveCropDiagnosis] = useState<{
    cropName: string;
    diseaseName: string;
  } | null>(null);

  const [selectedCropForScan, setSelectedCropForScan] = useState<string>('all');
  const [selectedSampleForScan, setSelectedSampleForScan] = useState<string | null>(null);

  // Load scan history from localStorage on startup
  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (stored) {
        setScanHistory(JSON.parse(stored));
      } else {
        // Seed with a default example scan if history is empty
        const initialScan: ScanResult = {
          id: 'seed-scan-1',
          timestamp: Date.now() - 3600 * 1000 * 4,
          diseaseId: 'tomato-early-blight',
          diseaseName: 'Tomato Early Blight',
          cropName: 'Tomato',
          confidence: 94,
          severity: 'moderate',
          isHealthy: false,
          isUncertain: false,
          imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80',
          symptoms: [
            'Dark brown to black spots with concentric target-like rings on older lower leaves',
            'Yellow halo surrounding necrotic brown leaf lesions'
          ],
          treatment: DISEASES_DATABASE[0].treatment,
          modelSource: 'Google Teachable Machine (Agri-Vision v2.4)'
        };
        setScanHistory([initialScan]);
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify([initialScan]));
      }
    } catch (e) {
      console.error('Failed to load history', e);
    }
  }, []);

  const handleSaveScanToHistory = (result: ScanResult) => {
    setScanHistory((prev) => {
      // Check if already in history
      const existingIdx = prev.findIndex(item => item.id === result.id);
      let updated: ScanResult[];
      if (existingIdx >= 0) {
        updated = [...prev];
        updated[existingIdx] = result;
      } else {
        updated = [result, ...prev];
      }
      try {
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save history', e);
      }
      return updated;
    });
  };

  const handleClearHistory = () => {
    setScanHistory([]);
    try {
      localStorage.removeItem(HISTORY_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear history', e);
    }
  };

  const handleDeleteScanItem = (id: string) => {
    setScanHistory((prev) => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to update history', e);
      }
      return updated;
    });
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCropForScan = (cropId: string) => {
    setSelectedCropForScan(cropId);
    handleNavigate('detect');
  };

  const handleSelectSampleForScan = (sampleId: string) => {
    setSelectedSampleForScan(sampleId);
    handleNavigate('detect');
  };

  const handleSelectSupplierForWhatsApp = (cropName: string, diseaseName: string) => {
    setActiveCropDiagnosis({ cropName, diseaseName });
  };

  const handleSelectScanForTreatment = (scan: ScanResult) => {
    setActiveCropDiagnosis({ cropName: scan.cropName, diseaseName: scan.diseaseName });
    handleNavigate('treatments');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        scanCount={scanHistory.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectCropForScan={handleSelectCropForScan}
            onSelectSampleForScan={handleSelectSampleForScan}
          />
        )}

        {currentPage === 'detect' && (
          <DetectView
            onNavigate={handleNavigate}
            onSaveScanToHistory={handleSaveScanToHistory}
            savedScanIds={scanHistory.map(s => s.id)}
            initialCropFilter={selectedCropForScan}
            initialSampleId={selectedSampleForScan}
            onClearInitialSample={() => setSelectedSampleForScan(null)}
            onSelectSupplierForWhatsApp={handleSelectSupplierForWhatsApp}
          />
        )}

        {currentPage === 'treatments' && (
          <TreatmentsView
            onNavigate={handleNavigate}
            onSelectSupplierForWhatsApp={handleSelectSupplierForWhatsApp}
          />
        )}

        {currentPage === 'suppliers' && (
          <SuppliersView
            onNavigate={handleNavigate}
            activeCropDiagnosis={activeCropDiagnosis}
            onClearDiagnosisContext={() => setActiveCropDiagnosis(null)}
          />
        )}

        {currentPage === 'crops' && (
          <SupportedCropsView
            onNavigate={handleNavigate}
            onSelectCropForScan={handleSelectCropForScan}
          />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactView onNavigate={handleNavigate} />
        )}

        {currentPage === 'dashboard' && (
          <DashboardView
            scanHistory={scanHistory}
            onNavigate={handleNavigate}
            onClearHistory={handleClearHistory}
            onDeleteScanItem={handleDeleteScanItem}
            onSelectScanForTreatment={handleSelectScanForTreatment}
            onSelectSupplierForWhatsApp={handleSelectSupplierForWhatsApp}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
