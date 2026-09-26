import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES_DATA, CategoryItem } from '../data/categoriesData';

interface CategoriesSectionProps {
  onSelectCategory: (category: CategoryItem) => void;
  onViewAllCategories: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onViewAllCategories,
}) => {
  // Show first 6 cards on home, matching the screenshot
  const displayCategories = CATEGORIES_DATA.slice(0, 6);

  return (
    <section id="categories-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
          اختار المجال ديالك
        </h2>
        <p className="text-sm sm:text-base font-medium text-slate-500">
          من الصور والفيديو حتى البرمجة والأتمتة.
        </p>
      </div>

      {/* Grid of 6 Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className="card-hover bg-white rounded-3xl p-6 border border-pink-200/50 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div
                className={`w-12 h-12 rounded-2xl ${category.bgTint} ${category.textColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform`}
              >
                {category.emoji}
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {category.description}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284c7]">
              <span>تصفح الأدوات ({category.toolCount})</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Categories CTA Link */}
      <div className="text-center mt-10">
        <button
          onClick={onViewAllCategories}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0284c7] hover:text-[#f472b6] bg-white px-6 py-3 rounded-2xl border border-pink-200/60 shadow-xs card-hover cursor-pointer"
        >
          <span>شوف جميع المجالات</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
