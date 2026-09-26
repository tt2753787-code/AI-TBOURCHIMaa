import React from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { LATEST_UPDATES_DATA, LatestUpdateItem } from '../data/latestUpdatesData';

interface LatestSectionProps {
  onSelectUpdate: (update: LatestUpdateItem) => void;
}

export const LatestSection: React.FC<LatestSectionProps> = ({
  onSelectUpdate,
}) => {
  return (
    <section id="latest-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
          الجديد دابا 🔥
        </h2>
        <p className="text-sm sm:text-base font-medium text-slate-500">
          تحديثات أدوات AI ولكن بطريقة عملية.
        </p>
      </div>

      {/* 3 Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LATEST_UPDATES_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 border border-pink-200/50 shadow-sm hover:shadow-md card-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{item.timeframe}</span>
              </div>

              <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                {item.title}
              </h3>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-bold text-sky-700 mb-0.5">{item.whatIsNewTitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.whatIsNewText}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#f472b6] mb-0.5">{item.howToUseTitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.howToUseText}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onSelectUpdate(item)}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-50 text-[#0284c7] font-bold text-xs hover:bg-[#38bdf8] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>شوف التطبيق بالتفصيل</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
