import React from 'react';
import { Home, Search, Wrench, Layers, MoreHorizontal } from 'lucide-react';

interface MobileBottomNavProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
  onToggleMoreMenu: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onToggleMoreMenu,
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-pink-200/50 px-3 py-2 flex items-center justify-around shadow-lg">
      
      {/* Home */}
      <button
        onClick={() => onNavigate('/')}
        className={`flex flex-col items-center justify-center p-1 focus:outline-none transition-colors cursor-pointer ${
          currentRoute === '/' ? 'text-[#0284c7]' : 'text-slate-600 hover:text-[#0284c7]'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">الرئيسية</span>
      </button>

      {/* Search -> Triggers Task Modal */}
      <button
        onClick={onOpenSearch}
        className="flex flex-col items-center justify-center p-1 text-slate-600 hover:text-[#0284c7] focus:outline-none transition-colors cursor-pointer"
      >
        <Search className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">بحث</span>
      </button>

      {/* Tools */}
      <button
        onClick={() => onNavigate('/tools')}
        className={`flex flex-col items-center justify-center p-1 focus:outline-none transition-colors cursor-pointer ${
          currentRoute === '/tools' ? 'text-[#0284c7]' : 'text-slate-600 hover:text-[#0284c7]'
        }`}
      >
        <Wrench className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">الأدوات</span>
      </button>

      {/* Workflows */}
      <button
        onClick={() => onNavigate('/workflows')}
        className={`flex flex-col items-center justify-center p-1 focus:outline-none transition-colors cursor-pointer ${
          currentRoute === '/workflows' ? 'text-[#0284c7]' : 'text-slate-600 hover:text-[#0284c7]'
        }`}
      >
        <Layers className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">Workflows</span>
      </button>

      {/* More */}
      <button
        onClick={onToggleMoreMenu}
        className="flex flex-col items-center justify-center p-1 text-slate-600 hover:text-[#0284c7] focus:outline-none transition-colors cursor-pointer"
      >
        <MoreHorizontal className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">المزيد</span>
      </button>

    </nav>
  );
};
