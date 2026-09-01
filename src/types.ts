export type PageType = 
  | 'home' 
  | 'detect' 
  | 'treatments' 
  | 'suppliers' 
  | 'crops' 
  | 'about' 
  | 'contact' 
  | 'dashboard';

export type DiseaseSeverity = 'mild' | 'moderate' | 'severe';

export interface TreatmentPlan {
  immediateSteps: string[];
  agriculturalPractices: string[];
  preventionMethods: string[];
  organicRemedies: string[];
  safeChemicalOptions: string[];
  dosageSafetyNotes: string;
  safetyPrecautions: string[];
  recommendedProductTypes: string[];
}

export interface CropDisease {
  id: string;
  name: string;
  scientificName: string;
  cropId: string;
  cropName: string;
  isHealthy?: boolean;
  severity: DiseaseSeverity;
  symptoms: string[];
  possibleCauses: string[];
  visualCharacteristics: string;
  treatment: TreatmentPlan;
  sampleImages: {
    url: string;
    caption: string;
  }[];
}

export interface Crop {
  id: string;
  name: string;
  botanicalName: string;
  category: 'Vegetable' | 'Cereal' | 'Cash Crop' | 'Fruit' | 'Legume';
  image: string;
  iconName: string;
  commonDiseases: string[];
  description: string;
  idealConditions: string;
}

export interface Supplier {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  city: string;
  state: string;
  country: string;
  products: string[];
  cropSpecialties: string[];
  phoneNumber: string;
  whatsappNumber: string;
  address: string;
  availabilityStatus: 'Open Now' | 'Stock Ready' | 'Fast Delivery';
  deliveryAvailable: boolean;
  establishedYear: number;
  avatarUrl: string;
}

export interface ScanResult {
  id: string;
  timestamp: number;
  diseaseId: string;
  diseaseName: string;
  cropName: string;
  confidence: number;
  severity: DiseaseSeverity;
  isHealthy: boolean;
  isUncertain: boolean;
  imageUrl: string;
  symptoms: string[];
  treatment: TreatmentPlan;
  topPredictions?: {
    className: string;
    probability: number;
  }[];
  modelSource?: string;
}

export interface ScanHistoryItem extends ScanResult {
  notes?: string;
  isFavorite?: boolean;
}

export interface TeachableMachineConfig {
  modelUrl: string;
  isCustomUrl: boolean;
  confidenceThreshold: number; // e.g. 0.65 for high confidence
}
