import React from 'react';
import { X, Sparkles, Copy, Check, ArrowLeft } from 'lucide-react';
import { LatestUpdateItem } from '../data/latestUpdatesData';

interface UpdateDetailModalProps {
  update: LatestUpdateItem | null;
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const UpdateDetailModal: React.FC<UpdateDetailModalProps> = ({
  update,
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [copiedPromptIndex, setCopiedPromptIndex] = React.useState<number | null>(null);

  if (!isOpen || !update) return null;

  const handleCopyPrompt = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptIndex(idx);
    onShowToast('تم نسخ الـ Prompt بنجاح ✅');
    setTimeout(() => setCopiedPromptIndex(null), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border-2 border-pink-200/80 p-5 sm:p-8 md:p-9 my-6 animate-modal max-h-[92vh] flex flex-col overflow-hidden text-right"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-lg ${update.badgeColor}`}>
                {update.badge}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {update.timeframe}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0f172a]">
              {update.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-pink-100 text-slate-600 hover:text-[#f472b6] flex items-center justify-center font-bold text-lg transition-all focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar py-6 space-y-6 flex-grow">
          
          {/* Summary */}
          <div className="bg-sky-50/70 border border-sky-200/70 rounded-2xl p-4 sm:p-5">
            <h3 className="text-sm font-extrabold text-sky-950 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>نظرة عامة وشاملة</span>
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
              {update.detailedGuide.overview}
            </p>
          </div>

          {/* Practical Examples */}
          <div>
            <h3 className="text-sm sm:text-base font-black text-[#0f172a] mb-3">
              🎯 أمثلة وتطبيقات عملية تقدر تبدا بها دابا:
            </h3>
            <div className="space-y-2.5">
              {update.detailedGuide.practicalExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 flex items-start gap-2.5"
                >
                  <span className="w-6 h-6 rounded-lg bg-pink-100 text-pink-700 text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                    {ex}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Prompts */}
          <div>
            <h3 className="text-sm sm:text-base font-black text-[#0f172a] mb-3">
              💬 Prompts مقترحة لتجربة هذه الميزة:
            </h3>
            <div className="space-y-3">
              {update.detailedGuide.recommendedPrompts.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f172a] text-slate-200 rounded-2xl p-4 border border-slate-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-sky-400">
                      برومبت تجريبي #{idx + 1}
                    </span>
                    <button
                      onClick={() => handleCopyPrompt(p, idx)}
                      className="btn-gradient text-white text-[11px] font-bold px-3 py-1 rounded-lg inline-flex items-center gap-1 cursor-pointer"
                    >
                      {copiedPromptIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-300" />
                          <span>تم النسخ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>نسخ</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs font-mono text-slate-300 leading-relaxed dir-ltr text-left">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
