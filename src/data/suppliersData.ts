import { Supplier } from '../types';

export const SUPPLIERS_DATA: Supplier[] = [
  {
    id: 'green-agri-store',
    name: 'Green Agriculture Store',
    rating: 4.9,
    reviewsCount: 142,
    verified: true,
    city: 'Lahore',
    state: 'Punjab',
    country: 'Pakistan',
    products: ['Certified Seeds', 'Copper Hydroxide', 'Bio-Fungicides', 'Knapsack Sprayers', 'Drip Systems'],
    cropSpecialties: ['Tomato', 'Potato', 'Rice', 'Wheat', 'Corn (Maize)', 'Pepper'],
    phoneNumber: '+92 300 1234567',
    whatsappNumber: '923001234567',
    address: 'Shop #14, Grain Market, Multan Road, Lahore',
    availabilityStatus: 'Open Now',
    deliveryAvailable: true,
    establishedYear: 2012,
    avatarUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'kisan-care-agro',
    name: 'Kisan Care Agrochemicals & Seeds',
    rating: 4.8,
    reviewsCount: 98,
    verified: true,
    city: 'Faisalabad',
    state: 'Punjab',
    country: 'Pakistan',
    products: ['Trichoderma Bio-agents', 'Mancozeb', 'Tricyclazole', 'Yellow Sticky Traps', 'Soil Nutrients'],
    cropSpecialties: ['Cotton', 'Rice (Paddy)', 'Wheat', 'Tomato'],
    phoneNumber: '+92 301 9876543',
    whatsappNumber: '923019876543',
    address: 'Opposite Agricultural University Gate 3, Jhang Road, Faisalabad',
    availabilityStatus: 'Stock Ready',
    deliveryAvailable: true,
    establishedYear: 2015,
    avatarUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'agribio-solutions',
    name: 'AgriBio Organic & Crop Health',
    rating: 5.0,
    reviewsCount: 76,
    verified: true,
    city: 'Multan',
    state: 'Punjab',
    country: 'Pakistan',
    products: ['Neem Oil 1500ppm', 'Pseudomonas Bio-Fungicides', 'Sulfur Dust', 'Compost Boosters', 'Safety PPE Kits'],
    cropSpecialties: ['Cotton', 'Apple', 'Grape', 'Tomato', 'Bell Pepper / Chili'],
    phoneNumber: '+92 302 5554321',
    whatsappNumber: '923025554321',
    address: 'Bosan Road Commercial Hub, Block B, Multan',
    availabilityStatus: 'Fast Delivery',
    deliveryAvailable: true,
    establishedYear: 2018,
    avatarUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'sunrise-agro-center',
    name: 'Sunrise Agro & Farm Supplies',
    rating: 4.7,
    reviewsCount: 115,
    verified: true,
    city: 'Hyderabad',
    state: 'Sindh',
    country: 'Pakistan',
    products: ['Anti-Blight Solutions', 'Copper Soap', 'Crop Protection Chemicals', 'Seed Dressing Agents', 'Sprayers'],
    cropSpecialties: ['Cotton', 'Tomato', 'Wheat', 'Rice'],
    phoneNumber: '+92 303 7778899',
    whatsappNumber: '923037778899',
    address: 'Station Road, Agri Market Complex, Hyderabad',
    availabilityStatus: 'Open Now',
    deliveryAvailable: true,
    establishedYear: 2010,
    avatarUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'farmguard-crop-care',
    name: 'FarmGuard Agronomy Hub',
    rating: 4.9,
    reviewsCount: 164,
    verified: true,
    city: 'Peshawar',
    state: 'KPK',
    country: 'Pakistan',
    products: ['Orchard Fungicides', 'Apple Scab Kits', 'Bacillus Bio-control', 'Pruning Shears', 'Motorized Sprayers'],
    cropSpecialties: ['Apple', 'Grape', 'Tomato', 'Potato', 'Corn (Maize)'],
    phoneNumber: '+92 304 4443322',
    whatsappNumber: '923044443322',
    address: 'Ring Road Agro Market, Near Charsadda Interchange, Peshawar',
    availabilityStatus: 'Stock Ready',
    deliveryAvailable: true,
    establishedYear: 2014,
    avatarUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'valley-agri-services',
    name: 'Valley Agro-Tech & Chemicals',
    rating: 4.8,
    reviewsCount: 88,
    verified: true,
    city: 'Rawalpindi',
    state: 'Punjab',
    country: 'Pakistan',
    products: ['Broad Spectrum Fungicides', 'Foliar Micronutrients', 'Drip Tubing & Emitters', 'Respirator Masks', 'Soil pH Testers'],
    cropSpecialties: ['Tomato', 'Potato', 'Wheat', 'Bell Pepper / Chili', 'Vegetables'],
    phoneNumber: '+92 305 1112233',
    whatsappNumber: '923051112233',
    address: 'I.J.P Road, Commercial Area, Rawalpindi / Islamabad',
    availabilityStatus: 'Fast Delivery',
    deliveryAvailable: true,
    establishedYear: 2017,
    avatarUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=200&q=80'
  }
];

export function buildWhatsAppUrl(params: {
  phone: string;
  cropName?: string;
  diseaseName?: string;
  supplierName?: string;
  farmerLocation?: string;
  customMessage?: string;
}): string {
  const cleanPhone = params.phone.replace(/[^0-9]/g, '');
  
  let text = '';
  if (params.customMessage) {
    text = params.customMessage;
  } else if (params.diseaseName && params.cropName) {
    text = `Hello ${params.supplierName ? params.supplierName : 'Supplier'},\n\nI detected *${params.diseaseName}* on my *${params.cropName}* crop using the CropShield AI Agriculture Platform.\n\nI would like information and pricing about the recommended treatments and products in stock.${params.farmerLocation ? `\n\n📍 My Farm Location: ${params.farmerLocation}` : ''}\n\nCan you please assist me? Thank you!`;
  } else {
    text = `Hello ${params.supplierName ? params.supplierName : 'Supplier'}, I am reaching out through the CropShield AI Agriculture Platform regarding agricultural supplies, crop protection treatments, and seeds. Could you please share your catalog and stock availability?`;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
