import React, { useState } from 'react';
import { Menu, X, ArrowLeft, Bookmark } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  favoritesCount,
  onOpenFavorites
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', route: '/' },
    { label: 'المجالات', route: '/categories' },
    { label: 'الأدوات', route: '/tools' },
    { label: 'Workflows', route: '/workflows' },
    { label: 'Prompts', route: '/prompts' },
    { label: 'كيفاش خدام؟', route: '/how-it-works' },
  ];

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 border-b border-pink-200/50 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Slogan */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-3 group focus:outline-none text-right"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#38bdf8] to-[#f472b6] p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <span className="text-xl font-black bg-gradient-to-r from-[#38bdf8] to-[#f472b6] bg-clip-text text-transparent">
                IA
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              IA TBOURCHIM ACADEMY
            </span>
            <span className="text-[11px] font-semibold text-slate-500 tracking-normal">
              غانحوّل خيالك للحقيقية بالتطبيق
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleLinkClick(link.route)}
                className={`px-3.5 py-2 text-sm font-bold transition-all rounded-xl cursor-pointer ${
                  isActive
                    ? 'text-[#0284c7] bg-sky-50/80 shadow-xs'
                    : 'text-slate-700 hover:text-[#0284c7] hover:bg-sky-50/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Saved Bookmarks Button */}
          <button
            onClick={onOpenFavorites}
            className="p-2.5 rounded-2xl text-slate-700 hover:text-[#0284c7] hover:bg-sky-50 border border-slate-200/70 transition-all relative"
            title="العناصر المحفوظة"
          >
            <Bookmark className="w-4 h-4" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f472b6] text-white text-[10px] font-bold flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenSearch}
            className="btn-gradient text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>بدا التطبيق</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden gap-2">
          {favoritesCount > 0 && (
            <button
              onClick={onOpenFavorites}
              className="p-2 rounded-xl text-slate-700 bg-white border border-pink-200/60 relative"
            >
              <Bookmark className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#f472b6] text-white text-[9px] font-bold flex items-center justify-center">
                {favoritesCount}
              </span>
            </button>
          )}

          <button
            onClick={onOpenSearch}
            className="btn-gradient text-white px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-sm"
          >
            بدا
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-800 bg-white border border-pink-200/70 hover:bg-pink-50/50 focus:outline-none"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-out Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-50 bg-slate-900/30 backdrop-blur-xs transition-opacity">
          <div className="bg-white border-b border-pink-200/70 p-6 shadow-xl space-y-4 rounded-b-3xl max-w-md mx-auto animate-modal">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleLinkClick(link.route)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm text-right transition-colors ${
                      isActive
                        ? 'bg-sky-50 text-[#0284c7]'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#38bdf8] text-xs">←</span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full btn-gradient text-white py-3 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>بدا التطبيق دابا</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
