import React, { useState } from 'react';
import { Search, ExternalLink, Copy, Check, Star, Filter } from 'lucide-react';
import { TOOLS_DATA, AITool } from '../data/toolsData';
import { CATEGORIES_DATA } from '../data/categoriesData';

interface ToolsViewProps {
  initialCategoryId?: string;
  onShowToast: (message: string) => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ initialCategoryId, onShowToast }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId || 'all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const filteredTools = TOOLS_DATA.filter((tool) => {
    // Category filter
    if (selectedCategory !== 'all' && tool.categoryId !== selectedCategory) {
      return false;
    }
    // Pricing filter
    if (selectedPricing !== 'all' && tool.pricing !== selectedPricing) {
      return false;
    }
    // Search query
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.tagline.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.bestFor.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCopyPrompt = (toolId: string, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptId(toolId);
    onShowToast('تم نسخ برومبت الأداة بنجاح ✨');
    setTimeout(() => setCopiedPromptId(null), 2500);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
      
      {/* Page Title & Intro */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-200/80 shadow-xs mb-4">
          <span className="text-xs font-bold text-[#0284c7]">دليل الأدوات المعتمد</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-3">
          أفضل أدوات الذكاء الاصطناعي للتطبيق العملي
        </h1>
        <p className="text-sm sm:text-base font-semibold text-slate-500">
          دليل منتقى بعناية: كل أداة مشروحة بالدارجة مع نقط القوة والبرومبت التجريبي والأسعار.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-3xl p-5 border border-pink-200/60 shadow-sm mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن أداة بالاسم أو الاستخدام (مثال: فيديو، مونتاج، Midjourney، كود)..."
            className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:bg-white transition-all text-right"
          />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap cursor-pointer transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#0f172a] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            جميع المجالات ({TOOLS_DATA.length})
          </button>
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'btn-gradient text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Pricing Filter Buttons */}
        <div className="flex items-center gap-2 pt-1 border-t border-slate-100 text-xs font-bold text-slate-500">
          <span className="flex items-center gap-1 ml-2 text-slate-400">
            <Filter className="w-3.5 h-3.5" />
            <span>السعر:</span>
          </span>
          {['all', 'مجاني', 'فريميوم', 'مدفوع'].map((price) => (
            <button
              key={price}
              onClick={() => setSelectedPricing(price)}
              className={`px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                selectedPricing === price
                  ? 'bg-sky-100 text-sky-800'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              {price === 'all' ? 'الكل' : price}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-3xl p-6 border border-pink-200/50 shadow-sm hover:shadow-md card-hover flex flex-col justify-between"
          >
            <div>
              {/* Header row */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-black text-[#0f172a]">
                      {tool.name}
                    </h3>
                    {tool.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-pink-50 text-[#f472b6] border border-pink-200">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md inline-block">
                    {tool.category}
                  </span>
                </div>

                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-xl border ${
                    tool.pricing === 'مجاني'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : tool.pricing === 'فريميوم'
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}
                >
                  {tool.pricing}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs font-bold text-slate-800 mb-2 leading-relaxed">
                {tool.tagline}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
                {tool.description}
              </p>

              {/* Best for */}
              <div className="bg-[#f8fafc] rounded-xl p-3 border border-slate-100 text-xs mb-4">
                <span className="font-extrabold text-slate-700 block mb-0.5">
                  🎯 الاستخدام الأنسب:
                </span>
                <span className="text-slate-500 font-semibold leading-relaxed">
                  {tool.bestFor}
                </span>
              </div>

              {/* Sample Prompt */}
              {tool.samplePrompt && (
                <div className="bg-[#0f172a] text-slate-200 rounded-xl p-3 border border-slate-800 mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-sky-400">برومبت تجريبي</span>
                    <button
                      onClick={() => handleCopyPrompt(tool.id, tool.samplePrompt!)}
                      className="text-[10px] text-white hover:text-sky-300 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedPromptId === tool.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
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
                  <p className="text-[11px] font-mono text-slate-300 truncate dir-ltr text-left">
                    {tool.samplePrompt}
                  </p>
                </div>
              )}
            </div>

            {/* Link button */}
            <div className="pt-3 border-t border-slate-100">
              <a
                href={tool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-50 text-[#0284c7] font-bold text-xs hover:bg-[#38bdf8] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>زيارة الموقع الرسمي</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          <p className="text-base font-bold text-slate-600 mb-1">لا توجد أدوات مطابقة لمعايير البحث</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedPricing('all');
            }}
            className="text-xs font-bold text-[#0284c7] hover:underline mt-2 cursor-pointer"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      )}

    </div>
  );
};
