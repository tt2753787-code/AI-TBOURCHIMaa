import React, { useState } from 'react';
import { X, Copy, Check, Bookmark, ArrowLeft, ExternalLink, Lightbulb, Clock, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { TaskDetail } from '../data/tasksData';

interface TaskRoadmapModalProps {
  task: TaskDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToWorkflow?: (workflowId: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (taskId: string) => void;
  onShowToast: (message: string) => void;
}

export const TaskRoadmapModal: React.FC<TaskRoadmapModalProps> = ({
  task,
  isOpen,
  onClose,
  onNavigateToWorkflow,
  isFavorite,
  onToggleFavorite,
  onShowToast
}) => {
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);

  if (!isOpen || !task) return null;

  const handleCopyPrompt = (promptText: string, index: number) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptIndex(index);
    onShowToast('تم نسخ الـ Prompt بنجاح! جاهز للتطبيق ✨');
    setTimeout(() => {
      setCopiedPromptIndex(null);
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border-2 border-pink-200/80 p-5 sm:p-8 md:p-10 my-6 animate-modal max-h-[92vh] flex flex-col overflow-hidden text-right"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center text-3xl shrink-0">
              {task.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#0284c7] bg-sky-50 px-2.5 py-0.5 rounded-lg">
                  {task.category}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  خريطة طريق عملية
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
                {task.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(task.id)}
              className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
                isFavorite
                  ? 'bg-pink-50 border-pink-300 text-[#f472b6]'
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-pink-500'
              }`}
              title={isFavorite ? 'محفوظ في المفضلة' : 'حفظ في المفضلة'}
            >
              <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-pink-100 text-slate-600 hover:text-[#f472b6] flex items-center justify-center font-bold text-lg transition-all duration-150 focus:outline-none cursor-pointer"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar py-6 space-y-6 flex-grow">
          
          {/* Summary Banner */}
          <div className="bg-gradient-to-r from-sky-50 via-white to-pink-50 rounded-2xl p-4 sm:p-5 border border-pink-200/60">
            <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed mb-3">
              {task.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-600">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-sky-500" />
                <span>المدة المتوقعة: {task.duration}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>المستوى: {task.difficulty}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>التكلفة: {task.cost}</span>
              </span>
            </div>
          </div>

          {/* Recommended AI Tools */}
          <div>
            <h3 className="text-base sm:text-lg font-black text-[#0f172a] mb-3 flex items-center gap-2">
              <span>🛠️</span>
              <span>الأدوات المنصوح بها لهاد المهمة</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {task.recommendedTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-extrabold text-[#0f172a]">
                        {tool.name}
                      </span>
                      {tool.freePlan ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                          كاين فابور
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700">
                          مدفوع
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-slate-500">
                      {tool.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Step-by-Step Action Plan */}
          <div>
            <h3 className="text-base sm:text-lg font-black text-[#0f172a] mb-3 flex items-center gap-2">
              <span>📋</span>
              <span>الخطوات العملية بالتطبيق (Step by Step)</span>
            </h3>
            <div className="space-y-3">
              {task.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-white border-2 border-slate-100 hover:border-pink-200 rounded-2xl p-4 sm:p-5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#38bdf8] to-[#f472b6] text-white font-black text-sm flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <div className="space-y-1.5 flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-sm sm:text-base font-extrabold text-[#0f172a]">
                          {step.title}
                        </h4>
                        <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-lg self-start">
                          الأداة: {step.tool}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="pt-1.5 flex items-start gap-1.5 text-xs font-bold text-pink-700">
                        <span className="shrink-0">⚡ نصيحة تطبيقية:</span>
                        <span>{step.actionTip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ready to Copy Prompts */}
          {task.readyPrompts.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#0f172a] mb-3 flex items-center gap-2">
                <span>💬</span>
                <span>الـ Prompts الجاهزة (انسخ وطبق فوراً)</span>
              </h3>
              <div className="space-y-3">
                {task.readyPrompts.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0f172a] text-slate-100 rounded-2xl p-4 sm:p-5 relative group border border-slate-800"
                  >
                    <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sky-400">
                          {p.tool}
                        </span>
                        <span className="text-slate-500">·</span>
                        <span className="text-xs font-extrabold text-white">
                          {p.title}
                        </span>
                      </div>

                      <button
                        onClick={() => handleCopyPrompt(p.promptText, idx)}
                        className="btn-gradient text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs inline-flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-all"
                      >
                        {copiedPromptIndex === idx ? (
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

                    <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed dir-ltr text-left selection:bg-pink-500 selection:text-white">
                      {p.promptText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pro Tips in Darija */}
          {task.proTips.length > 0 && (
            <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4 sm:p-5">
              <h4 className="text-sm font-extrabold text-amber-900 mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>نصائح ذهبية لتفادي الأخطاء</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm font-semibold text-amber-800/90 list-disc list-inside">
                {task.proTips.map((tip, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          {task.relatedWorkflowId && onNavigateToWorkflow ? (
            <button
              onClick={() => {
                onClose();
                onNavigateToWorkflow(task.relatedWorkflowId!);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 px-5 py-2.5 rounded-xl border border-sky-200 transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>فتح مسار العمل الكامل المترابط (Workflow)</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span className="text-xs font-semibold text-slate-400">
              طبق هاد الخطوات بالترتيب للوصول لأفضل نتيجة
            </span>
          )}

          <button
            onClick={onClose}
            className="w-full sm:w-auto btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-xs cursor-pointer"
          >
            فهمت، نبدأ دابا! 🚀
          </button>
        </div>

      </div>
    </div>
  );
};
