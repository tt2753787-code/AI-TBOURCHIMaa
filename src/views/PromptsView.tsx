import React, { useState } from 'react';
import { PROMPTS_DATA, PromptTemplate } from '../data/promptsData';
import { Copy, Check, Sparkles, SlidersHorizontal, BookOpen } from 'lucide-react';

interface PromptsViewProps {
  onShowToast: (message: string) => void;
}

export const PromptsView: React.FC<PromptsViewProps> = ({ onShowToast }) => {
  const [selectedPrompt, setSelectedPrompt] = useState<PromptTemplate>(PROMPTS_DATA[0]);
  const [variableValues, setVariableValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    PROMPTS_DATA[0].variables.forEach((v) => {
      initial[v.name] = v.defaultValue;
    });
    return initial;
  });
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  const categories = ['الكل', 'تسويق', 'تجارة إلكترونية', 'صور وتصميم', 'فيديو', 'برمجة ومواقع'];

  const filteredPrompts = PROMPTS_DATA.filter((p) => {
    if (activeCategory !== 'الكل' && p.category !== activeCategory) return false;
    return true;
  });

  const handleSelectPrompt = (p: PromptTemplate) => {
    setSelectedPrompt(p);
    const newVars: Record<string, string> = {};
    p.variables.forEach((v) => {
      newVars[v.name] = v.defaultValue;
    });
    setVariableValues(newVars);
  };

  const handleVariableChange = (name: string, value: string) => {
    setVariableValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generate resolved prompt text
  let resolvedPromptText = selectedPrompt.template;
  selectedPrompt.variables.forEach((v) => {
    const val = variableValues[v.name] || v.defaultValue;
    resolvedPromptText = resolvedPromptText.split(`[{${v.name}}]`).join(val);
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(resolvedPromptText);
    setCopied(true);
    onShowToast('تم نسخ الـ Prompt المخصص بنجاح! جاهز للتطبيق ✨');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 shadow-xs mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#f472b6]" />
          <span className="text-xs font-bold text-[#f472b6]">مكتبة الـ Prompts العملية</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-3">
          برومبتات مجربة وقابلة للتخصيص فوراً
        </h1>
        <p className="text-sm sm:text-base font-semibold text-slate-500">
          ما تبداش من الصفر. عمر المتغيرات البسيطة ديالك وانسخ الـ Prompt المثالي لأي أداة ذكاء اصطناعي.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap cursor-pointer transition-all ${
              activeCategory === cat
                ? 'btn-gradient text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Prompts list on right (RTL), Customizer on left */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left/Main Column: Interactive Customizer */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-pink-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md mb-1 inline-block">
                  الأداة المستهدفة: {selectedPrompt.toolTarget}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  {selectedPrompt.title}
                </h2>
              </div>
              <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-xl">
                {selectedPrompt.category}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-6">
              {selectedPrompt.description}
            </p>

            {/* Variables input fields */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-6 space-y-4">
              <h3 className="text-xs sm:text-sm font-black text-[#0f172a] flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                <span>عمر المتغيرات الخاصة بيك (Custom Variables):</span>
              </h3>

              {selectedPrompt.variables.map((v) => (
                <div key={v.name} className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    {v.label}:
                  </label>
                  <input
                    type="text"
                    value={variableValues[v.name] || ''}
                    onChange={(e) => handleVariableChange(v.name, e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-right"
                  />
                </div>
              ))}
            </div>

            {/* Live Prompt Preview */}
            <div className="bg-[#0f172a] text-slate-100 rounded-2xl p-5 border border-slate-800 relative">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-sky-400">
                  النتيجة النهائية الجاهزة للنسخ
                </span>
                <button
                  onClick={handleCopy}
                  className="btn-gradient text-white text-xs font-bold px-4 py-1.5 rounded-xl flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-all shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الـ Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed dir-ltr text-left selection:bg-pink-500 max-h-60 overflow-y-auto no-scrollbar">
                {resolvedPromptText}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Prompts List Selection */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-base font-black text-[#0f172a] mb-2">
            اختار نموذج برومبت:
          </h3>
          {filteredPrompts.map((p) => {
            const isSelected = p.id === selectedPrompt.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPrompt(p)}
                className={`w-full p-4 rounded-2xl border text-right transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#38bdf8] shadow-md ring-2 ring-sky-200'
                    : 'bg-white/80 border-slate-200 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700">
                    {p.toolTarget}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {p.category}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0f172a] leading-snug">
                  {p.title}
                </h4>
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
};
