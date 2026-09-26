export interface LatestUpdateItem {
  id: string;
  badge: string;
  timeframe: string;
  title: string;
  whatIsNewTitle: string;
  whatIsNewText: string;
  howToUseTitle: string;
  howToUseText: string;
  badgeColor: string;
  detailedGuide: {
    overview: string;
    practicalExamples: string[];
    recommendedPrompts: string[];
  };
}

export const LATEST_UPDATES_DATA: LatestUpdateItem[] = [
  {
    id: 'claude-37',
    badge: 'أداة جديدة',
    timeframe: 'اليوم',
    title: 'Claude 3.7 Sonnet مع Hybrid Thinking',
    whatIsNewTitle: 'شنو الجديد؟',
    whatIsNewText: 'قدرة على التفكير المعمق والبرمجة المعقدة مع خيارات سرعة فائقة تدمج الاستجابة اللحظية والتفكير التأملي.',
    howToUseTitle: 'كيفاش تستعملو؟',
    howToUseText: 'لحل مشاكل الكود وبناء أتمتة كاملة لمهامك الرقمية المعقدة وتطوير تطبيقات كاملة في جلسة واحدة.',
    badgeColor: 'bg-brand-bgLight text-sky-700',
    detailedGuide: {
      overview: 'كلود 3.7 يقدم وضعين في نموذج واحد: الوضع الفوري السريع للمحادثات العادية، ووضع التفكير الموسع (Extended Thinking) للمهام الهندسية والبرمجية المعقدة.',
      practicalExamples: [
        'تصحيح مشاريع الويب المعقدة عبر 10 ملفات برمجية دفعة واحدة.',
        'صياغة خطط تسويقية شاملة ودراسات جدوى مبنية على الرياضيات والمنطق.',
        'استيعاب ملفات PDF وكتب تقنية ضخمة مع استخراج دقيق بنسبة 99%.'
      ],
      recommendedPrompts: [
        'فعل وضع التفكير العميق وراجع معمارية الكود بحثاً عن أي ثغرات أمنية أو بطء في الأداء.',
        'قارن بين هذه الخيارات الثلاثة لنموذج العمل، وأظهر لي نقاط الضعف التي لم ينتبه لها أحد.'
      ]
    }
  },
  {
    id: 'sora-kling-2',
    badge: 'أداة جديدة',
    timeframe: 'هذا الأسبوع',
    title: 'Sora & Kling Video 2.0',
    whatIsNewTitle: 'شنو الجديد؟',
    whatIsNewText: 'فيزياء حركة طبيعية وجودة 4K تجعل مقاطع الـ B-roll واقعية 100% بدون تشوه الوجوه أو حركة المشي.',
    howToUseTitle: 'كيفاش تستعملو؟',
    howToUseText: 'لصنع إعلانات المنتجات بدون تصوير فيزيائي وبأقل تكلفة، وتحويل صور المنتجات إلى فيديوهات متحركة سينمائية.',
    badgeColor: 'bg-purple-50 text-purple-700',
    detailedGuide: {
      overview: 'الجيل الثاني من نماذج الفيديو أصبح يفهم تفاعل الضوء مع الأسطح وحركة الجاذبية الأرضية بدقة متناهية، مما يجعل اللقطات تبدو وكأنها مصورة بكاميرات Arri Alexa احترافية.',
      practicalExamples: [
        'تحويل صورة منتوج واحد على خلفية بيضاء إلى فيديو سينمائي يتحرك في متجر أو شارع.',
        'صناعة لقطات B-Roll مخصصة للأفلام الوثائقية والبودكاست بدون استئجار طاقم تصوير.',
        'إنشاء إعلانات تيك توك مخصصة للعملاء مع حركة منتج وانتقالات سلسة.'
      ],
      recommendedPrompts: [
        'Slow cinematic continuous zoom in on the product, natural soft light reflections, realistic fluid physics --ar 9:16',
        'Drone orbiting smoothly around a modern glass building at sunrise, 4k ultra-detailed commercial motion.'
      ]
    }
  },
  {
    id: 'deepseek-v3',
    badge: 'أداة جديدة',
    timeframe: 'هذا الأسبوع',
    title: 'DeepSeek V3 & R1 Local',
    whatIsNewTitle: 'شنو الجديد؟',
    whatIsNewText: 'نموذج استدلال مفتوح المصدر بتكلفة تقترب من الصفر وسرعة رهيبة يضاهي أداء النماذج الاحتكارية الأغلى عالمياً.',
    howToUseTitle: 'كيفاش تستعملو؟',
    howToUseText: 'لتحليل بيانات الزبائن ومطابقة ملفات الإكسل بدون إرسال البيانات لسيرفرات خارجية أو دفع اشتراكات مكلفة.',
    badgeColor: 'bg-pink-50 text-pink-700',
    detailedGuide: {
      overview: 'ديب سيك أحدث زلزالاً تقنياً عالمياً بتمكين الجميع من تشغيل نماذج تفكير فائقة مجاناً على أجهزتهم الخاصة أو عبر خوادم منخفضة التكلفة، مع احترام تام لخصوصية البيانات.',
      practicalExamples: [
        'تشغيل النموذج محلياً عبر Ollama لتحليل العقود السرية والبيانات المالية بدون إنترنت.',
        'بناء بوتات ذكية لخدمة العملاء بتكلفة API تقارب الصفر (أقل بـ 95% من النماذج الأخرى).',
        'مساعدة الطلاب والباحثين في حل المسائل الرياضية المعقدة مع إظهار خطوات التفكير كاملة.'
      ],
      recommendedPrompts: [
        'حلل هذه المعادلة المنطقية وأظهر لي سلسلة التفكير خطوة بخطوة قبل إعطاء الإجابة النهائية.',
        'قم بفرز وتنظيف هذا الجدول المالي واستخرج أي عمليات تكرار مشبوهة.'
      ]
    }
  }
];
