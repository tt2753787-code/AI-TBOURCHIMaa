import React, { useState } from 'react';
import { X, Search, Sparkles } from 'lucide-react';
import { TASKS_DATA, TaskDetail } from '../data/tasksData';

interface QuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTask: (task: TaskDetail) => void;
}

export const QuestionsModal: React.FC<QuestionsModalProps> = ({
  isOpen,
  onClose,
  onSelectTask,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredTasks = TASKS_DATA.filter((task) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      task.title.toLowerCase().includes(term) ||
      task.tagline.toLowerCase().includes(term) ||
      task.category.toLowerCase().includes(term)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Card Container */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border-2 border-pink-200/80 p-5 sm:p-8 md:p-9 my-6 animate-modal max-h-[92vh] flex flex-col overflow-hidden text-right"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0284c7] text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مسار البدء السريع</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
              شنو بغيتي تدير؟
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              اختار المهمة اللي قريبة للفكرة ديالك (23 مسار عملي جاهز).
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-pink-100 text-slate-600 hover:text-[#f472b6] flex items-center justify-center font-bold text-lg transition-all duration-150 focus:outline-none cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search within 23 tasks */}
        <div className="pt-4 pb-2 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث في المهام (مثال: فيديو، متجر، برمجة، صورة)..."
              className="w-full pr-10 pl-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:bg-white transition-all text-right"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                مسح
              </button>
            )}
          </div>
        </div>

        {/* Modal Tasks Grid (The 23 Cards) */}
        <div className="overflow-y-auto no-scrollbar py-4 pr-1 pl-1 flex-grow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3.5">
            {filteredTasks.map((task) => (
              <button
                key={task.id}
                onClick={() => {
                  onSelectTask(task);
                }}
                className="card-hover p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-pink-50/60 border border-pink-200/50 hover:border-pink-300 text-right flex items-center gap-2.5 sm:gap-3 transition-all focus:outline-none group cursor-pointer"
              >
                <span className="text-xl sm:text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  {task.emoji}
                </span>
                <div className="overflow-hidden">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a] block truncate">
                    {task.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block truncate">
                    {task.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredTasks.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <p className="text-base font-bold text-slate-600 mb-1">ما لقينا حتى مهمة بهذا الاسم</p>
              <p className="text-xs">جرب كلمة أخرى بحال: فيديو، برمجة، تصميم، متجر</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span className="font-semibold">
            {filteredTasks.length} مهمة متوفرة حالياً
          </span>
          <button
            onClick={onClose}
            className="text-[#f472b6] font-bold hover:underline cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
