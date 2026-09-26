import React from 'react';
import { Rocket } from 'lucide-react';

interface BigCTAProps {
  onStart: () => void;
}

export const BigCTA: React.FC<BigCTAProps> = ({ onStart }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div
        className="rounded-[32px] p-8 sm:p-12 md:p-16 text-center text-white shadow-xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #38bdf8 0%, #f472b6 100%)',
        }}
      >
        {/* Subtle Pattern Decor */}
        <div
          className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -left-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
          عندك فكرة؟
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-medium text-white/95 max-w-xl mx-auto mb-8 leading-relaxed">
          ما تبقاش غير كتخيلها. قول لينا شنو بغيتي تدير.
        </p>

        <button
          onClick={onStart}
          className="bg-white text-[#0f172a] hover:text-[#0284c7] px-8 py-4 rounded-2xl font-black text-base md:text-lg shadow-lg hover:shadow-2xl transition-all duration-200 card-hover inline-flex items-center gap-3 cursor-pointer"
        >
          <span>بدا التطبيق</span>
          <Rocket className="w-5 h-5 text-[#f472b6]" />
        </button>
      </div>
    </section>
  );
};
