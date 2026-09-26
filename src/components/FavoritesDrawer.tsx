import React from 'react';
import { X, Bookmark, Trash2, ArrowLeft } from 'lucide-react';
import { TASKS_DATA, TaskDetail } from '../data/tasksData';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteTaskIds: string[];
  onSelectTask: (task: TaskDetail) => void;
  onRemoveFavorite: (taskId: string) => void;
  onClearAll: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favoriteTaskIds,
  onSelectTask,
  onRemoveFavorite,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const favoriteTasks = TASKS_DATA.filter((t) => favoriteTaskIds.includes(t.id));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border-2 border-pink-200/80 p-6 sm:p-8 my-6 animate-modal max-h-[90vh] flex flex-col overflow-hidden text-right"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#f472b6] flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#0f172a]">
                العناصر والمهام المحفوظة
              </h2>
              <span className="text-xs font-semibold text-slate-400">
                {favoriteTasks.length} مسار محفوظ
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-pink-100 text-slate-600 hover:text-pink-600 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto no-scrollbar py-4 space-y-3 flex-grow">
          {favoriteTasks.length > 0 ? (
            favoriteTasks.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 border border-slate-200/70 hover:border-pink-200 rounded-2xl p-4 flex items-center justify-between gap-3 transition-all"
              >
                <button
                  onClick={() => {
                    onClose();
                    onSelectTask(t);
                  }}
                  className="flex items-center gap-3 flex-grow text-right cursor-pointer"
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0f172a] hover:text-[#0284c7]">
                      {t.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {t.category} · {t.duration}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => onRemoveFavorite(t.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                  title="حذف من المفضلة"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400">
              <Bookmark className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-bold text-slate-600">ما كاين حتى مسار محفوظ دابا</p>
              <p className="text-xs mt-1">اضغط على علامة الحفظ في أي مهمة باش ترجع ليها بسرعة.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {favoriteTasks.length > 0 && (
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
            <button
              onClick={onClearAll}
              className="text-rose-600 hover:underline font-bold cursor-pointer"
            >
              مسح الكل
            </button>
            <button
              onClick={onClose}
              className="btn-gradient text-white px-4 py-2 rounded-xl font-bold cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
