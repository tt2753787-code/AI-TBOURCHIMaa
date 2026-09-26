import React from 'react';

interface FooterProps {
  onNavigate: (route: string) => void;
  onShowToast: (message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowToast }) => {
  return (
    <footer className="bg-white border-t border-pink-200/50 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-right">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Brand area */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-slate-100 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#38bdf8] to-[#f472b6] p-[2px]">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-[#0284c7]">
                  IA
                </div>
              </div>
              <span className="text-2xl font-black text-[#0f172a]">
                IA TBOURCHIM ACADEMY
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-500 mt-2">
              غانحوّل خيالك للحقيقية بالتطبيق
            </p>
          </div>
          <div className="text-xs font-bold text-slate-600 bg-sky-50 px-4 py-2 rounded-xl border border-sky-100">
            🇲🇦 منصة الذكاء الاصطناعي التطبيقي بالدارجة المغربية
          </div>
        </div>

        {/* 4 Columns Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          
          {/* Col 1: اكتشف */}
          <div>
            <h4 className="text-sm font-extrabold text-[#0f172a] uppercase tracking-wider mb-4">
              اكتشف
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/categories')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  المجالات
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tools')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  الأدوات
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/workflows')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  Workflows
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/prompts')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  Prompts
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: تعلم */}
          <div>
            <h4 className="text-sm font-extrabold text-[#0f172a] uppercase tracking-wider mb-4">
              تعلم
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('/how-it-works')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  كيفاش خدام؟
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('قسم الأسئلة الشائعة FAQ متوفر قريباً')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: الموقع */}
          <div>
            <h4 className="text-sm font-extrabold text-[#0f172a] uppercase tracking-wider mb-4">
              الموقع
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <button
                  onClick={() => onShowToast('أكاديمية مغربية لتحويل الذكاء الاصطناعي لتطبيقات عملية')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  من نحن
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('راسلنا عبر: contact@iatbourchim.com')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: قانوني */}
          <div>
            <h4 className="text-sm font-extrabold text-[#0f172a] uppercase tracking-wider mb-4">
              قانوني
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <button
                  onClick={() => onShowToast('سياسة الخصوصية وحماية بيانات المستخدمين')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('شروط الاستخدام للأكاديمية')}
                  className="hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  شروط الاستخدام
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-500 gap-4">
          <p>© 2026 IA TBOURCHIM ACADEMY. جميع الحقوق محفوظة.</p>
          <p>مصمم بأحدث معايير الويب والتجربة العربية الفاخرة.</p>
        </div>

      </div>
    </footer>
  );
};
