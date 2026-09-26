export interface WorkflowStep {
  stepIndex: number;
  label: string;
  englishLabel: string;
  icon: string;
  recommendedTool: string;
  toolUrl?: string;
  description: string;
  readyPrompt: string;
  actionChecklist: string[];
}

export interface DetailedWorkflow {
  id: string;
  title: string;
  categoryTag: string;
  emoji: string;
  shortChain: string;
  description: string;
  outcome: string;
  duration: string;
  steps: WorkflowStep[];
}

export const WORKFLOWS_DATA: DetailedWorkflow[] = [
  {
    id: 'product-ad',
    title: 'إعلان منتوج',
    categoryTag: 'E-com / Ads',
    emoji: '📢',
    shortChain: 'Research → Copy → Image → Video → Ads',
    description: 'المسار الأكثر ربحية لتحويل أي منتوج عادي لحملة إعلانية فيديو تحقق مبيعات فورية بتكلفة إعلانية منخفضة.',
    outcome: 'إعلان فيديو احترافي جاهز للإطلاق على فيسبوك وتيك توك مع نصوص الهوك وصفحة الهبوط.',
    duration: '45 دقيقة',
    steps: [
      {
        stepIndex: 1,
        label: 'Research (البحث ودراسة الزبون)',
        englishLabel: 'Research',
        icon: '🔍',
        recommendedTool: 'Perplexity AI',
        description: 'اكتشاف زوايا الألم الحقيقية (Pain Points) والشكاوى المتكررة عند زبناء المنافسين.',
        readyPrompt: 'ما هي أكثر 5 مشاكل متكررة يشتكي منها زبناء [مجال المنتج] في المغرب وشمال إفريقيا؟ وما هي الكلمات الدقيقة التي يستعملونها في وصف معاناتهم؟',
        actionChecklist: [
          'حدد 3 زوايا ألم رئيسية (Pain Points)',
          'افتح Meta Ad Library وشوف إعلانات المنافسين الحالية',
          'استخرج أفضل ميزة تفاضلية في منتوجك'
        ]
      },
      {
        stepIndex: 2,
        label: 'Copy (كتابة السكريبت والهوك)',
        englishLabel: 'Copywriting',
        icon: '✍️',
        recommendedTool: 'Claude 3.7 Sonnet',
        description: 'صياغة 3 هوكات (Hooks) شادة وسيناريو إعلان 30 ثانية بالدارجة المغربية المفهومة.',
        readyPrompt: 'أنت كاتب إعلانات محترف في التجارة الإلكترونية. اكتب لي 3 هوكات قوية وسيناريو فيديو مدته 30 ثانية لمنتج [اسم المنتج] بالدارجة المغربية. الهيكل: 1. هوك صادم (0-3 ثوان) 2. تجسيد المشكل (3-12 ثانية) 3. المنتج كحل سحري (12-22 ثانية) 4. عرض التخفيض والدفع عند الاستلام والتوصيل بالمجان (22-30 ثانية).',
        actionChecklist: [
          'اختر الهوك الأكثر إثارة للفضول',
          'تأكد أن النص لا يتجاوز 75 كلمة ليتناسب مع 30 ثانية',
          'راجع الدارجة لتكون خفيفة ومحبوبة'
        ]
      },
      {
        stepIndex: 3,
        label: 'Image (صور المنتج الاستوديو)',
        englishLabel: 'Image Studio',
        icon: '🎨',
        recommendedTool: 'Midjourney v6 أو FLUX.1',
        description: 'إنشاء صور للمنتج في بيئة استوديو فخمة تناسب إعلانات المشهد الأول والأخير.',
        readyPrompt: 'Commercial studio product photography of [product description] centered on a polished white marble surface, warm soft ambient morning sunbeams, minimalist aesthetic, sharp focus, 8k resolution --ar 9:16 --v 6.1',
        actionChecklist: [
          'ولد 4 خيارات بأبعاد 9:16 (عمودية للريلز)',
          'اختر الصورة ذات الإضاءة الأنقى',
          'احفظها بدقة عالية'
        ]
      },
      {
        stepIndex: 4,
        label: 'Video (تحريك المشاهد والمونتاج)',
        englishLabel: 'Video Generation',
        icon: '🎬',
        recommendedTool: 'Kling AI + CapCut',
        description: 'تحويل الصورة للقطة فيديو سينمائية متحركة وإضافة التعليق الصوتي والترجمة.',
        readyPrompt: 'Slow dynamic zoom in with gentle camera push, showcasing realistic product details, soft lighting shifts, cinema 4k commercial motion.',
        actionChecklist: [
          'حرك صورة المنتج فـ Kling AI لمدة 5 ثوانٍ',
          'استخرج الصوت البشري بالدارجة من ElevenLabs',
          'ركب الصوت واللقطة فـ CapCut مع كابشنز باللون الأصفر والأبيض'
        ]
      },
      {
        stepIndex: 5,
        label: 'Ads (الإطلاق والمتابعة)',
        englishLabel: 'Ads Launch',
        icon: '📢',
        recommendedTool: 'Meta Ads Manager / TikTok Ads',
        description: 'رفع الفيديو كحملة Advantage+ أو حملة رسائل واتساب مع الميزانية المناسبة.',
        readyPrompt: 'حدد ميزانية اختبار 10 إلى 15 دولار لليوم، مع استهداف واسع (Broad) بدون تضييق، وخلي الفيديو هو الفلتر الطبيعي للزبناء المهتمين.',
        actionChecklist: [
          'انشر 3 نسخ بهوكات مختلفة (A/B Test)',
          'تابع تكلفة النقرة (CPC) وسعر الرسالة أو الطلب',
          'ضاعف الميزانية على النسخة الرابحة بعد 48 ساعة'
        ]
      }
    ]
  },
  {
    id: 'store-setup',
    title: 'متجر إلكتروني',
    categoryTag: 'Store Setup',
    emoji: '🛍️',
    shortChain: 'Product → Store → Content → Ads',
    description: 'بناء متجر إلكتروني احترافي متكامل يدعم الدفع عند الاستلام مع جميع الصفحات والصور في أقل من ساعتين.',
    outcome: 'متجر جاهز لاستقبال الزبناء المغاربة مع سلة شراء سريعة وصفحات هبوط مقنعة.',
    duration: 'ساعتان',
    steps: [
      {
        stepIndex: 1,
        label: 'Product (اختيار وتسعير المنتج)',
        englishLabel: 'Product Selection',
        icon: '📦',
        recommendedTool: 'TikTok Creative Center + ChatGPT',
        description: 'التحقق من توفر المنتج محلياً ووجود هامش ربح لا يقل عن 120 درهم بعد خصم الإعلانات والتوصيل.',
        readyPrompt: 'احسب لي تكاليف بيع منتج سعر شرائه [سعر الجملة]: إذا كانت تكلفة الشحن 35 درهم، ونسبة التوصيل 65%، وتكلفة الإعلان المتوقعة 45 درهم للطلب.. ما هو السعر المثالي للبيع لتحقيق صافي ربح 80 درهم لكل طلب؟',
        actionChecklist: [
          'تأكد من وجود مورد موثوق بالدار البيضاء أو درب عمر',
          'حدد سعر القطعة الواحدة وسعر الباقة (عرض القطعتين)'
        ]
      },
      {
        stepIndex: 2,
        label: 'Store (إنشاء المتجر وتثبيت القالب)',
        englishLabel: 'Store Creation',
        icon: '🌐',
        recommendedTool: 'YouCan / Shopify',
        description: 'إعداد المتجر، ضبط وسائل الدفع (COD)، ونموذج الشراء السريع بضغطة واحدة.',
        readyPrompt: 'قم بضبط إعدادات المتجر: تفعيل خيار الطلب بدون تسجيل حساب، وضع حقول (الاسم، الهاتف، المدينة، العنوان) فقط لتقليل الارتداد.',
        actionChecklist: [
          'فعل قالب خفيف وسريع على الهاتف',
          'ثبت بيكسل فيسبوك وتيك توك لتتبع المبيعات',
          'اختبر إرسال طلب تجريبي للتأكد من وصول الإشعار'
        ]
      },
      {
        stepIndex: 3,
        label: 'Content (صور ووصف صفحة الهبوط)',
        englishLabel: 'Content & Landing Page',
        icon: '📄',
        recommendedTool: 'Claude 3.7 + Photoroom',
        description: 'تصميم صور بيضاء نقية للمنتج وكتابة مراجعات الزبناء ومزايا الضمان.',
        readyPrompt: 'اكتب لي نصوص صفحة هبوط لمتجر إلكتروني لمنتج [الاسم] بالدارجة المغربية المهذبة، تشمل: العنوان الجذاب، 4 فوائد رئيسية مع أيقونات، جدول المقارنة، والأسئلة الشائعة حول التوصيل وسياسة الاستبدال.',
        actionChecklist: [
          'نظف خلفيات الصور بـ Photoroom',
          'أضف شارة "ضمان استرجاع لمدة 7 أيام"',
          'أضف فيديو قصير يوضح طريقة الاستخدام'
        ]
      },
      {
        stepIndex: 4,
        label: 'Ads (إطلاق حملة المبيعات الأولى)',
        englishLabel: 'Campaign Launch',
        icon: '🚀',
        recommendedTool: 'Meta Ads Manager',
        description: 'إطلاق حملة التحويلات الأولى ومتابعة تأكيد الطلبيات هاتفياً فور وصولها.',
        readyPrompt: 'أطلق الحملة الإعلانية بهدف Purchase أو Lead، وجه الزوار لصفحة المنتج مباشرة، واحرص على الاتصال بالزبون في أقل من 15 دقيقة لتأكيد الطلب.',
        actionChecklist: [
          'اتصل بكل طلبية في أقل من 15 دقيقة',
          'سجل الطلبيات المؤكدة في ملف Google Sheets تلقائياً عبر Make.com'
        ]
      }
    ]
  },
  {
    id: 'tiktok-viral',
    title: 'فيديو TikTok',
    categoryTag: 'Viral Reels',
    emoji: '📱',
    shortChain: 'Idea → Script → Image → Video → Voice',
    description: 'صناعة محتوى فيرال لمنصات الفيديو القصير يجذب آلاف المشاهدات والمتابعين بدون الظهور بوجهك.',
    outcome: 'فيديو ريلز أو تيك توك مدته 30 إلى 60 ثانية جاهز للنشر بأعلى جودة وصوت بشري فخم.',
    duration: '25 دقيقة',
    steps: [
      {
        stepIndex: 1,
        label: 'Idea (الفكرة والزاوية الفيرال)',
        englishLabel: 'Viral Hook Idea',
        icon: '💡',
        recommendedTool: 'ChatGPT 4o / Claude',
        description: 'البحث عن مواضيع تشعل الفضول أو تكشف سراً أو تصحح مفهوماً خاطئاً شائعاً.',
        readyPrompt: 'اقترح لي 5 أفكار فيديوهات ريلز مثيرة للجدل والفضول في مجال [المجال]، مع كتابة أول جملة (الهوك) لكل فكرة بحيث تجبر المشاهد على التوقف وعدم التمرير.',
        actionChecklist: [
          'اختر الفكرة الأكثر إثارة للتساؤل',
          'تأكد من سهولة فهمها في أول ثانيتين'
        ]
      },
      {
        stepIndex: 2,
        label: 'Script (السكريبت السريع)',
        englishLabel: 'Scriptwriting',
        icon: '✍️',
        recommendedTool: 'Claude 3.7',
        description: 'كتابة سكريبت سريع الإيقاع مقسم إلى جمل قصيرة تنتهي بسؤال تفاعلي.',
        readyPrompt: 'اكتب سكريبت ريلز مدته 45 ثانية بالدارجة المغربية السلسة حول [الموضوع]. كل سطر لا يتعدى 6 كلمات لسهولة القراءة والإيقاع السريع، واختم بسؤال يدفع المشاهدين للتعليق.',
        actionChecklist: [
          'احذف أي كلمة زائدة أو حشو',
          'اضبط التوقيت الإجمالي'
        ]
      },
      {
        stepIndex: 3,
        label: 'Image & Video (المرئيات المناسبة)',
        englishLabel: 'Visual Generation',
        icon: '🎨',
        recommendedTool: 'Midjourney / Kling AI',
        description: 'توليد 4 إلى 6 صور أو لقطات سينمائية تدعم كل فكرة مذكورة في السكريبت.',
        readyPrompt: 'Cinematic visual scene illustrating [scene description], dramatic contrasting lighting, 9:16 vertical ratio, 8k realistic documentary style',
        actionChecklist: [
          'ولد لقطة لكل 5 إلى 7 ثوانٍ في الفيديو',
          'استخدم ألواناً مشبعة تلفت الانتباه في الشاشات الصغيرة'
        ]
      },
      {
        stepIndex: 4,
        label: 'Voice (التعليق الصوتي الفخم)',
        englishLabel: 'Voice Synthesis',
        icon: '🎙️',
        recommendedTool: 'ElevenLabs',
        description: 'توليد الصوت بنبرة حماسية وسريعة قليلاً (1.05x) لجعل الفيديو مشدوداً.',
        readyPrompt: 'استخدم نموذج ElevenLabs Multilingual v2 مع رفع وضوح النبرة وتقليل الاستقرار (Stability: 40%) لإعطاء مشاعر حية.',
        actionChecklist: [
          'اختر صوتاً يناسب هوية المحتوى',
          'اسمع التسجيل وتأكد من مخارج الحروف'
        ]
      },
      {
        stepIndex: 5,
        label: 'Assembly (المونتاج والكابشنز)',
        englishLabel: 'Editing & Captions',
        icon: '✂️',
        recommendedTool: 'CapCut',
        description: 'دمج الصوت والصور وإضافة الانتقالات السريعة والموسيقى الخلفية الهادئة.',
        readyPrompt: 'فعل Auto-Captions في CapCut، اختر خطاً عريضاً، أضف مؤثرات صوتية (Whoosh, Pop) عند كل انتقال صورة.',
        actionChecklist: [
          'أضف مؤثر صوتي عند كل انتقال بين الصور',
          'اختر صوت تريند في تيك توك واجعله بنسبة 5% في الخلفية',
          'انشر في أوقات الذروة (بين 7 و 10 مساءً)'
        ]
      }
    ]
  },
  {
    id: 'website-launch',
    title: 'Website',
    categoryTag: 'Dev & Launch',
    emoji: '🌐',
    shortChain: 'Idea → Design → Build → Deploy',
    description: 'برمجة وتصميم موقع ويب تفاعلي حديث مع استضافة مجانية باسم نطاق خاص في جلسة واحدة.',
    outcome: 'موقع ويب حي يعمل على الإنترنت مع تجاوب تام على الهواتف وأداء فائق السرعة.',
    duration: '30 دقيقة',
    steps: [
      {
        stepIndex: 1,
        label: 'Idea (هيكل وأقسام الموقع)',
        englishLabel: 'Structure & Wireframe',
        icon: '💡',
        recommendedTool: 'ChatGPT / Claude',
        description: 'تحديد صفحات الموقع، الألوان الأساسية، وهيكل الملاحة.',
        readyPrompt: 'أريد موقعاً احترافياً لـ [نشاط الموقع]. حدد لي الأقسام الخمسة الضرورية في الصفحة الرئيسية ومحتوى كل قسم بالتفصيل.',
        actionChecklist: [
          'حدد الهدف الرئيسي: واش بيع، واش جمع إيميلات، واش عرض أعمال؟',
          'اختر باليت الألوان (مثلا: أزرق سماوي + وردي ناعم + كحلي داكن)'
        ]
      },
      {
        stepIndex: 2,
        label: 'Design (تصميم المكونات بـ v0)',
        englishLabel: 'Component Generation',
        icon: '🎨',
        recommendedTool: 'v0.dev by Vercel',
        description: 'توليد كود واجهة المستخدم بـ React و Tailwind CSS عبر الـ Prompts.',
        readyPrompt: 'Create a modern, clean, luxury SaaS landing page header and hero section with Tailwind CSS, RTL support for Arabic, subtle gradients, and rounded responsive cards.',
        actionChecklist: [
          'جرب المكونات في محرر v0 التفاعلي',
          'تأكد من التجاوب مع شاشات الموبايل (Mobile view)'
        ]
      },
      {
        stepIndex: 3,
        label: 'Build (التطوير والتجميع بـ Cursor)',
        englishLabel: 'Full-Stack Assembly',
        icon: '💻',
        recommendedTool: 'Cursor IDE',
        description: 'ربط المكونات معاً، إضافة المنطق التفاعلي، وحفظ البيانات إن وجدت.',
        readyPrompt: 'في محرر Cursor، استخدم Composer لربط الواجهة وإضافة التفاعلات وزر النسخ والفلترة وتخزين التفضيلات محلياً في localStorage.',
        actionChecklist: [
          'تأكد من عدم وجود أخطاء في الكونسول (Zero Console Errors)',
          'تحقق من وضوح التباين وسرعة الاستجابة'
        ]
      },
      {
        stepIndex: 4,
        label: 'Deploy (النشر الفوري على Vercel)',
        englishLabel: 'Instant Cloud Deploy',
        icon: '🚀',
        recommendedTool: 'Vercel / GitHub',
        description: 'رفع المشروع إلى GitHub والربط مع Vercel للحصول على استضافة سريعة مع شهادة SSL مجانية مدى الحياة.',
        readyPrompt: 'git push origin main، ثم اربط المستودع في Vercel، وستحصل على رابط حي في أقل من دقيقة.',
        actionChecklist: [
          'احصل على رابط المشروع الحي (URL)',
          'اربط اسم نطاق مخصص (.ma أو .com) إذا رغبت'
        ]
      }
    ]
  }
];
