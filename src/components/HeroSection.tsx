import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuestionsModal: () => void;
  selectedTaskText?: string;
  onSelectQuickTag?: (taskId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuestionsModal,
  selectedTaskText,
  onSelectQuickTag,
}) => {
  const quickTags = [
    { id: 'video', label: 'نصايب فيديو', emoji: '🎬' },
    { id: 'image', label: 'نصايب صورة', emoji: '🎨' },
    { id: 'ad', label: 'نصايب إعلان', emoji: '📢' },
    { id: 'website', label: 'نصايب موقع', emoji: '🌐' },
    { id: 'sell', label: 'نبيع منتوج', emoji: '🛍️' },
  ];

  return (
    <section className="relative pt-10 pb-12 md:pt-18 md:pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
      
      {/* Ambient Glow Behind Hero */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[620px] h-60 md:h-[360px] bg-gradient-to-r from-sky-300/25 via-pink-300/25 to-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      {/* Trust / Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-200/80 shadow-xs mb-6">
        <span className="w-2 h-2 rounded-full bg-[#f472b6] animate-pulse" />
        <span className="text-xs md:text-sm font-bold text-[#0f172a]">AI عملي بلا تعقيد</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.28] md:leading-[1.2] mb-6">
        غانحوّل خيالك للحقيقية{' '}
        <span className="bg-gradient-to-r from-[#38bdf8] to-[#f472b6] bg-clip-text text-transparent">
          بالتطبيق
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-9">
        قول لينا شنو بغيتي تدير، وحنا نوريك الطريق، الأداة، الخطوات والـPrompt المناسب.
      </p>

      {/* 10. ELEMENT PRINCIPAL: Main Project Box */}
      <div id="main-project-container" className="w-full max-w-3xl mx-auto">
        <div
          id="main-project-box"
          onClick={onOpenQuestionsModal}
          tabIndex={0}
          role="button"
          aria-label="شنو بغيتي تصاوب أو تدير بالذكاء الاصطناعي؟"
          className="group w-full min-h-[76px] md:h-[84px] bg-white border-2 border-pink-300/80 rounded-[24px] shadow-lg hover:shadow-xl transition-all duration-300 px-5 md:px-7 py-3 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-4 focus:ring-sky-300/40 focus:border-[#38bdf8]"
        >
          <div className="flex items-center gap-4 w-full text-right overflow-hidden">
            {/* Search Icon / Sparkles Container */}
            <div className="w-11 h-11 shrink-0 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center group-hover:scale-105 group-hover:bg-pink-50 group-hover:text-[#f472b6] transition-all">
              <Search className="w-5 h-5" />
            </div>

            {/* Read-only interactive input presentation */}
            <input
              id="main-search-input"
              type="text"
              readOnly
              value={selectedTaskText || ''}
              placeholder="شنو بغيتي تصاوب أو تدير بالذكاء الاصطناعي؟"
              className="w-full bg-transparent text-sm sm:text-base md:text-lg font-bold text-[#0f172a] placeholder:text-slate-400 placeholder:font-medium focus:outline-none cursor-pointer truncate text-right"
            />
          </div>

          {/* Action Button inside Box */}
          <div className="shrink-0 mr-2">
            <span className="btn-gradient text-white text-xs md:text-sm font-bold px-4 md:px-6 py-2.5 rounded-xl shadow-xs inline-flex items-center gap-1.5 group-hover:shadow-md transition-all">
              <span>اختار</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Hint text */}
        <p className="text-xs font-semibold text-slate-500 mt-3 flex items-center justify-center gap-1.5">
          <span>💡</span> اضغط على المربع لاختيار المهمة أو السؤال من القائمة الجاهزة
        </p>

        {/* Quick Suggestion Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-medium">اقتراحات شائعة:</span>
          {quickTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => onSelectQuickTag?.(tag.id)}
              className="text-xs font-bold px-3 py-1 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 hover:border-pink-200 hover:text-[#0284c7] transition-all cursor-pointer shadow-2xs"
            >
              <span className="ml-1">{tag.emoji}</span>
              <span>{tag.label}</span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};
