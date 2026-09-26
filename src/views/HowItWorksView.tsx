import React, { useState } from 'react';
import { Target, Wrench, Sparkles, Rocket, ChevronDown, ChevronUp } from 'lucide-react';

interface HowItWorksViewProps {
  onStartNow: () => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onStartNow }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      step: 1,
      title: 'حدد هدفك بالدارجة وبلا تعقيد',
      desc: 'سواء بغيتي تصاوب فيديو إعلاني، تصايب موقع ويب، تبيع منتوج، أو دير أتمتة لخدمة الزبناء.. قولها ببساطة كيفما فبالك.',
      icon: Target,
      tag: 'الفكرة والهدف'
    },
    {
      step: 2,
      title: 'كنعطيوك الأداة الحقيقية المناسبة',
      desc: 'بلا ما تضيع وقت وفلوس فـ 100 أداة وهمية، كنختارو ليك الأداة رقم 1 عالمياً اللي كتقضي هاد الغرض بالتحديد وبأقل تكلفة.',
      icon: Wrench,
      tag: 'الأداة الفعالة'
    },
    {
      step: 3,
      title: 'كتاخد الخطوات والـ Prompts الجاهزة',
      desc: 'كنعطيوك وصفات دقيقة مجربة: شنو تكتب بالضبط (الـ Prompt)، إعدادات التوليد، وأهم النصائح باش تتفادى الأخطاء المتكررة.',
      icon: Sparkles,
      tag: 'الوصفة العملية'
    },
    {
      step: 4,
      title: 'كتطبق وكتخرج النتيجة على أرض الواقع',
      desc: 'من الفكرة حتى النشر والمبيعات. المنصة مصممة باش تمارس وتخرج نتائج ملموسة فالمغرب والعالم العربي، ماشي مجرد نظريات.',
      icon: Rocket,
      tag: 'النتيجة والأرباح'
    }
  ];

  const faqs = [
    {
      q: 'واش هاد الأدوات كتحتاج مني نكون مبرمج أو مصمم محترف؟',
      a: 'أبداً! جميع الأدوات والمسارات اللي كنقدموها فـ IA TBOURCHIM ACADEMY مصممة للمبتدئين ورواد الأعمال وصناع المحتوى. بفضل نماذج الذكاء الاصطناعي الحديثة، كتقدر تخرج نتائج استثنائية بمجرد نصوص بالدارجة أو الإنجليزية.'
    },
    {
      q: 'واش هاد الأدوات مجانية ولا مدفوعة؟',
      a: 'أغلب الأدوات اللي كنرشحوها كتوفر باقة مجانية حقيقية (بحال Claude, ChatGPT, v0, FLUX, CapCut). وللأدوات المدفوعة (بحال Midjourney)، كنعطيوك ديما بدائل مجانية قوية باش تبدا بلا رأس مال.'
    },
    {
      q: 'كيفاش نختار المسار المناسب ليا إلا كنت يلاه بادي؟',
      a: 'اضغط على مربع البحث في الصفحة الرئيسية أو اختر "شنو بغيتي تدير؟". المنصة غاتقترح عليك إما مهمة سريعة من 23 مهمة، أو مسار عمل متكامل (Workflow) بحال إعلان منتوج أو متجر إلكتروني.'
    },
    {
      q: 'واش الـ Prompts كيخدمو بالدارجة المغربية؟',
      a: 'نعم! نصوص التسويق والإعلانات والريلز مصممة ومختبرة خصيصاً بالدارجة المغربية المفهومة لتناسب الزبون المحلي وسوق التجارة الإلكترونية بالمغرب.'
    }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-right">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-200/80 shadow-xs mb-3">
          <span className="text-xs font-bold text-[#0284c7]">المنهجية المعتمدة</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] mb-4">
          كيفاش خدام IA TBOURCHIM ACADEMY؟
        </h1>
        <p className="text-base sm:text-lg font-semibold text-slate-500 leading-relaxed">
          الهدف ديالنا بسيط: نحيدو الفلسفة والنظريات المعقدة، ونعطيوك طريق مباشر ومختصر لتحويل أي فكرة فبالك لمشروع شغال.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {steps.map((st) => {
          const Icon = st.icon;
          return (
            <div
              key={st.step}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-pink-200/60 shadow-sm card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-xl bg-pink-50 text-[#f472b6]">
                    {st.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0f172a] text-white text-xs font-black flex items-center justify-center">
                    {st.step}
                  </span>
                  <h3 className="text-lg font-black text-[#0f172a]">{st.title}</h3>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive FAQ Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200/60 shadow-sm mb-12">
        <h2 className="text-2xl font-black text-[#0f172a] mb-6 text-center">
          الأسئلة الشائعة (FAQ)
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-right font-extrabold text-sm sm:text-base text-[#0f172a] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#0284c7] shrink-0 mr-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action CTA */}
      <div className="text-center">
        <button
          onClick={onStartNow}
          className="btn-gradient text-white px-8 py-4 rounded-2xl font-black text-base shadow-lg hover:shadow-xl transition-all cursor-pointer card-hover"
        >
          جرب دابا واختار مهمتك الأولى 🚀
        </button>
      </div>

    </div>
  );
};
