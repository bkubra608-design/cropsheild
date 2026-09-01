import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Clock,
  Sparkles
} from 'lucide-react';
import { PageType } from '../../types';

interface ContactViewProps {
  onNavigate: (page: PageType) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    cropInterest: 'Tomato',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setIsSubmitted(true);
  };

  const faqs = [
    {
      question: 'How accurate is the AI crop disease scanner?',
      answer: 'Our model is trained with thousands of validated plant pathology images and achieves over 90-95% classification accuracy on clear, well-lit photos. However, field conditions vary, so we provide confidence scores and always recommend consulting a local agricultural extension officer before applying chemicals.'
    },
    {
      question: 'What should I do if the result says "Uncertain Diagnosis"?',
      answer: 'Low confidence occurs when the leaf photo is blurry, taken in extreme shadows, or shows multiple overlapping disorders. Take a close-up photo of the affected leaf in bright natural daylight and scan again, or consult your local agriculture advisor.'
    },
    {
      question: 'How does WhatsApp supplier ordering work?',
      answer: 'When you click "Contact on WhatsApp", CropShield AI automatically formats your detected disease and crop name into a WhatsApp chat. You can chat directly with verified local agro-dealers to confirm prices and arrange pickup or village delivery.'
    },
    {
      question: 'Can I use my own Google Teachable Machine model URL?',
      answer: 'Yes! On the Detect Disease page, click the Settings (Sliders) icon. You can paste your own exported Google Teachable Machine model URL to use your customized dataset.'
    },
    {
      question: 'Is this platform free for farmers?',
      answer: 'Yes, CropShield AI is 100% free and open for farmers, agronomists, and researchers.'
    }
  ];

  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Farmer Support & Advisory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Contact Agronomy Helpdesk
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Have questions about a crop disease diagnosis, need help finding a supplier, or want to partner with us?
          </p>
        </div>

        {/* Main Grid: Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                Send an Agronomy Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Our plant health advisors respond within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-emerald-950">Thank You, {formData.name}!</h3>
                <p className="text-sm text-emerald-900">
                  Your inquiry regarding <strong>{formData.cropInterest}</strong> has been received. An agricultural specialist will contact you via WhatsApp or phone shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', location: '', cropInterest: 'Tomato', message: '' });
                  }}
                  className="mt-2 text-xs font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Farm Location / District
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Multan, Punjab"
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Primary Crop
                    </label>
                    <select
                      value={formData.cropInterest}
                      onChange={(e) => setFormData({ ...formData, cropInterest: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-hidden cursor-pointer"
                    >
                      <option value="Tomato">Tomato</option>
                      <option value="Potato">Potato</option>
                      <option value="Corn (Maize)">Corn (Maize)</option>
                      <option value="Wheat">Wheat</option>
                      <option value="Rice (Paddy)">Rice (Paddy)</option>
                      <option value="Cotton">Cotton</option>
                      <option value="Apple">Apple</option>
                      <option value="Bell Pepper">Bell Pepper / Chili</option>
                      <option value="Other">Other Crop</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="farmer@example.com"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Describe the Problem or Symptoms *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please explain the symptoms on your leaves (e.g. black spots, curling, yellow halo), field size, and current watering method..."
                    className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Agronomists</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Hotline & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Support Box */}
            <div className="bg-gradient-to-br from-emerald-700 to-green-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl text-white">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Farmer WhatsApp Hotline</h3>
                  <p className="text-xs text-emerald-200">Instant Advisory & Supply Support</p>
                </div>
              </div>

              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
                Connect directly with our central agricultural support desk for urgent crop infection advice or supplier guidance.
              </p>

              <a
                href="https://wa.me/923001234567?text=Hello%20CropShield%20AI%20Support,%20I%20need%20assistance%20with%20crop%20disease%20identification."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-white hover:bg-stone-100 text-emerald-950 font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-lg text-emerald-600"></i>
                <span>Chat on WhatsApp Hotline</span>
              </a>
            </div>

            {/* Direct Information List */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md space-y-4 text-sm text-stone-700">
              <h3 className="font-bold text-stone-900 text-base font-serif">
                Agricultural Center Info
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-800">Toll-Free Helpline:</span>
                    <a href="tel:+923001234567" className="text-emerald-700 font-bold hover:underline">
                      +92 300 1234567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-800">Advisory Email:</span>
                    <span className="text-stone-600">support@cropshield.agri.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-800">Regional Coordination Hub:</span>
                    <span className="text-stone-600">Agri-Research Tower, Multan Road, Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-800">Working Hours:</span>
                    <span className="text-stone-600">Mon - Sat: 7:00 AM - 7:00 PM (PKT)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg space-y-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2 font-serif">
              Common Questions from Farmers
            </h2>
          </div>

          <div className="divide-y divide-stone-200">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-stone-900 text-sm sm:text-base cursor-pointer group"
                  >
                    <span className="group-hover:text-emerald-700 transition">{faq.question}</span>
                    <span className="text-stone-400 group-hover:text-emerald-600 ml-3 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed animate-in fade-in">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
