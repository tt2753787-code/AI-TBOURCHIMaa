export interface TaskStep {
  stepNumber: number;
  title: string;
  description: string;
  tool: string;
  actionTip: string;
}

export interface ReadyPrompt {
  title: string;
  tool: string;
  promptText: string;
  category?: string;
}

export interface TaskDetail {
  id: string;
  title: string;
  emoji: string;
  category: string;
  tagline: string;
  summary: string;
  difficulty: 'مبتدئ' | 'متوسط' | 'متقدم';
  duration: string;
  cost: string;
  recommendedTools: {
    name: string;
    role: string;
    freePlan: boolean;
    url?: string;
  }[];
  steps: TaskStep[];
  readyPrompts: ReadyPrompt[];
  proTips: string[];
  relatedWorkflowId?: string;
}

export const TASKS_DATA: TaskDetail[] = [
  {
    id: 'image',
    title: 'نصايب صورة',
    emoji: '🎨',
    category: 'Image',
    tagline: 'صناعة وتعديل صور احترافية للمنتجات والسوشيال ميديا',
    summary: 'تعلم كيفاش تحول فكرة فبالك لصورة واقعية بجودة 4K باستعمال أفضل نماذج توليد الصور بحال Midjourney و FLUX و Ideogram.',
    difficulty: 'مبتدئ',
    duration: '5 - 10 دقائق',
    cost: 'كاين فابور و فريميوم',
    recommendedTools: [
      { name: 'Midjourney v6', role: 'أعلى واقعية سينمائية', freePlan: false },
      { name: 'FLUX.1', role: 'واقعية الأيدي والوجوه بدون تشوه (فابور)', freePlan: true },
      { name: 'Ideogram 2.0', role: 'كتابة نصوص واضحة داخل الصورة', freePlan: true },
      { name: 'Leonardo.ai', role: 'توليد يومي مجاني وسهل', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'حدد الوصف والتفاصيل الدقيقة',
        description: 'ما تكتبش مجرد كلمة وحدة. حدد نوع الإضاءة، زاوية الكاميرا، ونوع العدسة.',
        tool: 'ChatGPT / Claude',
        actionTip: 'استعمل ChatGPT باش يترجم ليك الفكرة من الدارجة للإنجليزية الوصفية الدقيقة.'
      },
      {
        stepNumber: 2,
        title: 'اختر النموذج المناسب لهدفك',
        description: 'إلا بغيتي كتابة على الصورة استعمل Ideogram. إلا بغيتي واقعية بدون عيوب استعمل FLUX.1.',
        tool: 'Ideogram أو FLUX',
        actionTip: 'حدد دائما نسبة الأبعاد --ar 16:9 لليوتيوب أو --ar 9:16 للريلز وستوريات.'
      },
      {
        stepNumber: 3,
        title: 'تنقية الصورة وتحسين الجودة (Upscale)',
        description: 'ارفع جودة الصورة لـ 4K وحذف الخلفية إلا كنتي باغي تستعملها فمتجر.',
        tool: 'Krea.ai / Photoroom',
        actionTip: 'حفظ الصورة بصيغة WebP أو PNG عالية الدقة لتفادي فقدان الجودة.'
      }
    ],
    readyPrompts: [
      {
        title: 'صورة منتوج تجاري فاخر للمتجر',
        tool: 'Midjourney / FLUX',
        promptText: 'Professional studio product photography of a [luxury perfume bottle / skin care cream] placed on smooth organic beige travertine stone, soft morning directional sunlight, elegant water ripples, shallow depth of field, high-end commercial advertising shot, 8k resolution, photorealistic --ar 4:5 --v 6.1'
      },
      {
        title: 'بوستر إعلاني مع كتابة عربية/إنجليزية واضحة',
        tool: 'Ideogram',
        promptText: 'A modern minimalist promotional banner for a trendy coffee brand, typography text clearly reading "MORNING BOOST" in bold gold letters, dramatic dark espresso background, floating coffee beans, photorealistic 8k --ar 1:1'
      }
    ],
    proTips: [
      'ما تحطش كلمات سلبية بحال (no blur, no ugly) فالوصف الأساسي، استعمل خاصية negative prompt.',
      'الإضاءة هي السر: كتب ديما (diffused soft studio lighting) للصور التجارية.',
      'باش تحافظ على نفس الوجه فبزاف د الصور، استعمل Face Reference (--cref فـ Midjourney).'
    ],
    relatedWorkflowId: 'product-ad'
  },
  {
    id: 'video',
    title: 'نصايب فيديو',
    emoji: '🎬',
    category: 'Video',
    tagline: 'توليد مقاطع فيديو متحركة وسينمائية بالذكاء الاصطناعي',
    summary: 'من صورة وحدة أو من نص، تقدر تولد مقاطع فيديو احترافية صالحة لإعلانات تيك توك، ريلز، أو فيديوهات اليوتيوب.',
    difficulty: 'متوسط',
    duration: '15 - 20 دقيقة',
    cost: 'فريميوم مع تجربة مجانية',
    recommendedTools: [
      { name: 'Kling AI', role: 'أفضل فيزياء حركة وحركات طبيعية', freePlan: true },
      { name: 'Runway Gen-3 Alpha', role: 'جودة سينمائية هوليوودية', freePlan: true },
      { name: 'Luma Dream Machine', role: 'سرعة توليد عالية مع لقطات كاميرا ممتازة', freePlan: true },
      { name: 'CapCut AI', role: 'مونتاج وإضافة الترجمة التلقائية', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تجهيز الصورة الابتدائية (Image-to-Video)',
        description: 'البدء بصورة أولى كيعطي نتيجة أضمن بـ 10 أضعاف مقارنة بكتابة النص فقط.',
        tool: 'Midjourney أو FLUX',
        actionTip: 'صايب أولا لقطة البداية تكون واضحة ومقادة بنسبة 9:16 أو 16:9.'
      },
      {
        stepNumber: 2,
        title: 'كتابة حركة الكاميرا والعناصر (Prompt)',
        description: 'وصف الحركة بدقة: واش الكاميرا كتقرب (Slow zoom in) ولا كدور (Orbital pan).',
        tool: 'Kling AI / Runway',
        actionTip: 'ركز على حركة واحدة فقط فكل 5 ثواني لتفادي التشوه.'
      },
      {
        stepNumber: 3,
        title: 'المونتاج وإضافة الصوت والموسيقى',
        description: 'جمع اللقطات، حيد التشوهات، وزيد صوت بالدارجة أو موسيقى بدون حقوق.',
        tool: 'CapCut / ElevenLabs',
        actionTip: 'ركز على أول 2 ثواني فالفيديو (Hook) باش تشد انتباه المشاهد.'
      }
    ],
    readyPrompts: [
      {
        title: 'حركة كاميرا سينمائية لمنتوج',
        tool: 'Kling / Runway',
        promptText: 'Slow cinematic continuous zoom in on the product, gentle organic rotating motion, warm atmospheric light flares, realistic physics, 4k ultra-detailed commercial'
      },
      {
        title: 'شخص كيهضر أو تفاعل طبيعي',
        tool: 'Kling AI',
        promptText: 'Medium close-up shot of a young confident professional smiling and talking, natural eye blinks and subtle head movement, shallow depth of field, natural office background'
      }
    ],
    proTips: [
      'Image-to-Video ديما كيعطيك تحكم أفضل بكتير من Text-to-Video.',
      'ما تطلبش حركات معقدة بزايد فلقطة وحدة (مثلا: كيجري ويقفز ويهز تيليفون). قسمها للقطات صغار.'
    ],
    relatedWorkflowId: 'tiktok-viral'
  },
  {
    id: 'ad',
    title: 'نصايب إعلان',
    emoji: '📢',
    category: 'Marketing',
    tagline: 'حملة إعلانية مربحة من الفكرة حتى الـ Copy والفيديو',
    summary: 'كيفاش تقاد زاوية تسويقية (Angle) تخترق السوق، مع سكريبت إعلاني مقنع، صور، وفيديو يجيب مبيعات.',
    difficulty: 'متوسط',
    duration: '30 دقيقة',
    cost: 'فابور للسكريبت + أدوات إضافية',
    recommendedTools: [
      { name: 'Claude 3.7', role: 'صياغة نصوص إعلانية بالدارجة مقنعة ومؤثرة', freePlan: true },
      { name: 'Perplexity AI', role: 'دراسة المنافسين واكتشاف المشاكل الحقيقية للزبناء', freePlan: true },
      { name: 'Kling / Midjourney', role: 'إنتاج المرئيات الجذابة', freePlan: true },
      { name: 'Meta Ad Library', role: 'التجسس على أفضل الإعلانات الرابحة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'بحث وتحليل نقطة الألم (Pain Point)',
        description: 'اكتشف علاش الناس ما كيشريوش من عند المنافسين وشنو المشكل اللي كيعانيو منو.',
        tool: 'Perplexity AI',
        actionTip: 'اسأل: "شنو أكبر 5 شكاوى كيكتبوها الزبناء فتعليقات منتوجات [المجال] بالمغرب؟"'
      },
      {
        stepNumber: 2,
        title: 'كتابة 3 زوايا إعلانية مع الهوك (Hooks)',
        description: 'صياغة هوك شاد، القصة، المشكل، الحل، ثم نداء للعمل واضح (CTA).',
        tool: 'Claude 3.7',
        actionTip: 'اطلب من النموذج نبرة طبيعية بالدارجة المغربية المفهومة للجميع بلا لغة خشب.'
      },
      {
        stepNumber: 3,
        title: 'إنتاج الفيديو الإعلاني الترويجي',
        description: 'تركيب الصوت على الفيديو مع إبراز النتيجة قبل وبعد.',
        tool: 'CapCut + ElevenLabs',
        actionTip: 'دير أول 3 ثواني فيها سؤال يثير الفضول أو صدمة بصرية.'
      }
    ],
    readyPrompts: [
      {
        title: 'سكريبت إعلان فيديو تيك توك / فيسبوك بالدارجة',
        tool: 'Claude / ChatGPT',
        promptText: 'أنت خبير تسويق مغربي في التجارة الإلكترونية. اكتب لي سكريبت إعلان فيديو مدته 30 ثانية لمنتج [اسم المنتج] الذي يحل مشكل [المشكل]. السكريبت بالدارجة المغربية الحديثة، مقسم إلى: 1. هوك قوي أول 3 ثواني 2. عرض المشكل 3. كيفاش المنتج كيهنيك 4. عرض حصري مع الدفع عند الاستلام والتوصيل بالمجان. اجعل النبرة ودودة ومقنعة بدون مبالغة كاذبة.'
      }
    ],
    proTips: [
      'الهوك (أول 3 ثواني) كيمثل 80% من نجاح الإعلان. تيستي ديما 3 هوكات مختلفة لنفس الفيديو.',
      'الدارجة المغربية المكتوبة بالأحرف العربية كتجيب تفاعل أكبر وتكلفة نقرة أرخص.'
    ],
    relatedWorkflowId: 'product-ad'
  },
  {
    id: 'sell',
    title: 'نبيع منتوج',
    emoji: '🛍️',
    category: 'E-Commerce',
    tagline: 'إطلاق وبيع المنتجات عبر التجارة الإلكترونية و COD',
    summary: 'خطة متكاملة لاختيار منتوج رابح، كتابة صفحة هبوط (Landing Page) تقنع الزبون، وإنشاء العرض المقاوم للرفض.',
    difficulty: 'متوسط',
    duration: '45 دقيقة',
    cost: 'أدوات مجانية ومدفوعة',
    recommendedTools: [
      { name: 'ChatGPT Plus / Claude', role: 'كتابة صفحات الهبوط والعروض', freePlan: true },
      { name: 'YouCan / Shopify', role: 'منصة المتجر والدفع عند الاستلام', freePlan: false },
      { name: 'TikTok Creative Center', role: 'معرفة المنتجات الرائجة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'التحقق من جاذبية المنتوج وربحيته',
        description: 'حساب هامش الربح، تكلفة الشحن، ونسبة التوصيل المتوقعة.',
        tool: 'ChatGPT',
        actionTip: 'خاص هامش الربح يكون على الأقل 120 درهم لتغطية تكاليف الإشهار والتوصيل.'
      },
      {
        stepNumber: 2,
        title: 'كتابة صفحة الهبوط المقنعة (Landing Page)',
        description: 'بناء صفحة تركز على الفوائد، شهادات الزبناء، والضمان.',
        tool: 'Claude 3.7',
        actionTip: 'استعمل بنية: العنوان الجذاب -> المشكل -> الحل بالصور -> العرض الخاص -> فورم الطلب.'
      },
      {
        stepNumber: 3,
        title: 'إطلاق الإعلانات ومتابعة التأكيد والتوصيل',
        description: 'إطلاق حملات رسائل واتساب أو تحويل مباشر لصفحة الهبوط.',
        tool: 'Meta Ads Manager',
        actionTip: 'تأكيد الطلبيات بسرعة عبر مكالمة هاتفية أو بوت واتساب لرفع نسبة الاستلام.'
      }
    ],
    readyPrompts: [
      {
        title: 'كتابة صفحة هبوط كاملة لمنتوج COD بالمغرب',
        tool: 'Claude / ChatGPT',
        promptText: 'اكتب لي محتوى صفحة هبوط متكاملة لمنتج [اسم المنتج] موجهة للسوق المغربي (الدفع عند الاستلام). المحتوى يشمل: عنوان رئيسي صادم، 4 فوائد رئيسية مع أمثلة واقعية، مقارنة "قبل الاستعمال وبعد الاستعمال"، أسئلة شائعة (FAQ) حول التوصيل والضمان، وعرض التخفيض للشراء المزدوج (اشتر 2 واحصل على خصم 20%).'
      }
    ],
    proTips: [
      'ركز على الفوائد (شنو غايستافد الزبون) ماشي غير الخصائص التقنية.',
      'زيد ديما ضمان استرجاع حقيقي وفيديو كيوضح طريقة الاستعمال لرفع الثقة.'
    ],
    relatedWorkflowId: 'store-setup'
  },
  {
    id: 'website',
    title: 'نصايب موقع',
    emoji: '🌐',
    category: 'Development',
    tagline: 'بناء مواقع ويب عصرية وسريعة في دقائق بالذكاء الاصطناعي',
    summary: 'ما بقيتيش محتاج شهور ديال البرمجة. دابا بـ Prompts كتقدر تخرج موقع كامل متجاوب، أنيق، وسريع مع النشر فابور.',
    difficulty: 'مبتدئ',
    duration: '15 - 30 دقيقة',
    cost: 'فابور بالكامل',
    recommendedTools: [
      { name: 'v0.dev', role: 'تصميم واجهات وتطبيقات تفاعلية بريفكت', freePlan: true },
      { name: 'Bolt.new / Lovable', role: 'بناء تطبيقات ومواقع Full-stack كاملة فالمتصفح', freePlan: true },
      { name: 'Cursor IDE', role: 'محرر البرمجة الذكي بالذكاء الاصطناعي', freePlan: true },
      { name: 'Vercel / Netlify', role: 'استضافة ونشر الموقع بضغطة زر فابور', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد هيكل الموقع وأقسامه',
        description: 'رسم المخطط: الهيدر، الهيرو، الخدمات، الأسعار، الفوتر.',
        tool: 'ChatGPT',
        actionTip: 'اكتب وصف دقيق لكل سكشن ونوع الألوان والستايل المطلوب.'
      },
      {
        stepNumber: 2,
        title: 'توليد الكود والواجهة بـ v0 أو Lovable',
        description: 'كتابة Prompt تفصيلي باش يبني الواجهة بـ React و Tailwind CSS.',
        tool: 'v0.dev أو Lovable',
        actionTip: 'اطلب من النموذج يكون متجاوب مع الهواتف الذكية (Mobile-first).'
      },
      {
        stepNumber: 3,
        title: 'النشر الفوري على الإنترنت بنطاق مجاني أو خاص',
        description: 'ربط المشروع بـ Vercel أو Netlify والحصول على رابط مباشر.',
        tool: 'Vercel',
        actionTip: 'تقدر تربط اسم نطاق .ma أو .com فدقائق.'
      }
    ],
    readyPrompts: [
      {
        title: 'Prompt بناء موقع شركة خدمات حديث بـ v0',
        tool: 'v0.dev / Bolt.new',
        promptText: 'Build a modern, high-converting landing page for a [marketing agency / local business]. Requirements: Clean navigation bar with logo and CTA, impressive hero section with gradient badges and social proof, 3-column features grid with hover animations, interactive testimonials slider, transparent pricing table with monthly/annual toggle, FAQ accordion, and dark navy footer with newsletter signup. Use Tailwind CSS with sky blue and soft pink accents. Fully responsive and accessible.'
      }
    ],
    proTips: [
      'ما تطلبش كلشي فـ Prompt واحد ضخم. بدا بالهيرو والملاحة، ومن بعد ضيف الأقسام قسم بقسم.',
      'استعمل v0 للـ UI Components واستعمل Lovable للتطبيقات اللي فيها قاعدة بيانات.'
    ],
    relatedWorkflowId: 'website-launch'
  },
  {
    id: 'app',
    title: 'نصايب تطبيق',
    emoji: '📱',
    category: 'Development',
    tagline: 'تطوير تطبيقات هواتف ذكية وويب تفاعلية من الصفر',
    summary: 'صنع تطبيقات ويب وتطبيقات هواتف (PWA أو React Native) كتقضي غرض حقيقي وكتعاون الناس، بلا ما تكون مبرمج محترف.',
    difficulty: 'متوسط',
    duration: '45 دقيقة',
    cost: 'فابور للبدء',
    recommendedTools: [
      { name: 'Cursor', role: 'كتابة وتعديل كود التطبيق الذكي', freePlan: true },
      { name: 'Lovable.dev', role: 'صنع تطبيقات مع قاعدة بيانات وتوثيق', freePlan: true },
      { name: 'Supabase', role: 'قاعدة بيانات سحابية وتوثيق الدخول فابور', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد منطق العمل (User Flow)',
        description: 'شنو المشكل اللي كيحلو التطبيق؟ شنو الشاشات الرئيسية؟',
        tool: 'Claude 3.7',
        actionTip: 'رسم الشاشات الثلاث الأساسية: التسجيل، الشاشة الرئيسية، شاشة النتيجة.'
      },
      {
        stepNumber: 2,
        title: 'بناء وتجربة النموذج الأولي (Prototype)',
        description: 'بناء واجهات التفاعل وتجربة الأزرار وحفظ البيانات.',
        tool: 'Lovable / Cursor',
        actionTip: 'تيستي التطبيق فالموبايل من اليوم الأول.'
      },
      {
        stepNumber: 3,
        title: 'الربط بقاعدة البيانات وتفعيل الحسابات',
        description: 'حفظ مستخدمي التطبيق وإرسال التنبيهات.',
        tool: 'Supabase',
        actionTip: 'استعمل التوثيق بـ Google Sign-In لتسهيل دخول المستخدمين.'
      }
    ],
    readyPrompts: [
      {
        title: 'Prompt تخطيط هيكل تطبيق كامل',
        tool: 'Claude 3.7',
        promptText: 'أريد بناء تطبيق [فكرة التطبيق] يخدم المستخدمين في المغرب. ساعدني في تحديد: 1. مخطط قاعدة البيانات (Database Schema) 2. الشاشات الرئيسية ومسار المستخدم 3. أفضل مكتبات React/TypeScript لتنفيذ الميزات الأساسية 4. خطة عمل من 5 مراحل لتطويره بسرعة.'
      }
    ],
    proTips: [
      'ركز على ميزة أساسية واحدة (Core Feature) تكون متقونة مزيان قبل ما تزيد 20 ميزة ثانوية.'
    ]
  },
  {
    id: 'agent',
    title: 'نصايب Agent',
    emoji: '🤖',
    category: 'AI Agents',
    tagline: 'وكلاء ذكاء اصطناعي كينفذو المهام أوتوماتيكياً',
    summary: 'الـ AI Agent ماشي مجرد شات بوت كيهضر، بل كود ذكي كيتصل بالإنترنت، كيدير أبحاث، وكينفذ أوامر معقدة بوحدو.',
    difficulty: 'متقدم',
    duration: '30 - 60 دقيقة',
    cost: 'فابور / اشتراك منخفض',
    recommendedTools: [
      { name: 'Make.com', role: 'ربط التطبيقات بالأدوات الذكية بلا كود', freePlan: true },
      { name: 'n8n', role: 'منصة أتمتة مفتوحة المصدر وقوية جداً', freePlan: true },
      { name: 'OpenAI Swarm / LangChain', role: 'بناء وكلاء مخصصين بالكود', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد الهدف الصريح والصلاحيات',
        description: 'شنو الصلاحيات ديال الـ Agent؟ شنو البيانات اللي كيقرا وشنو النتيجة؟',
        tool: 'Claude 3.7',
        actionTip: 'حصر مهمة الوكيل فمهمة محددة جدا بحال: قراءة الإيميلات الواردة وتلخيصها وتصنيفها.'
      },
      {
        stepNumber: 2,
        title: 'ربط الوكيل بمصادر البيانات (APIs)',
        description: 'ربطه مع Google Sheets, WhatsApp, Gmail, أو الويب.',
        tool: 'Make.com أو n8n',
        actionTip: 'استعمل أدوات التنبيه فحال وقع خطأ فالتنفيذ.'
      },
      {
        stepNumber: 3,
        title: 'التجربة ووضع خطة أمان وتحقق',
        description: 'التأكد أن الـ Agent ما كيصيفطش رسائل خاطئة بدون موافقة إلا كان الأمر حساس.',
        tool: 'Make.com Test Runner',
        actionTip: 'زيد ميزة Human-in-the-loop للمهام اللي فيها معاملات مالية.'
      }
    ],
    readyPrompts: [
      {
        title: 'تحديد System Prompt لوكيل خدمة الزبناء بواتساب',
        tool: 'ChatGPT / Claude',
        promptText: 'أنت وكيل ذكي رسمي لخدمة الزبناء في متجر إلكتروني مغربي اسمه [اسم المتجر]. مهمتك: الإجابة على استفسارات الزبناء بالدارجة المغربية المهذبة، التحقق من حالة الطلبية، واقتراح مقاسات مناسبة. إذا طلب الزبون إلغاء طلب أو واجه مشكل في التوصيل، قم بجمع معلوماته وتحويل المحادثة للمشرف البشري. لا تخترع معلومات غير موجودة في كتالوج المنتجات.'
      }
    ],
    proTips: [
      'الأمان أولا: ما تعطيش للـ Agent صلاحية الحذف أو السحب المالي المباشر بلا تأكيد بشري.'
    ]
  },
  {
    id: 'research',
    title: 'ندير بحث',
    emoji: '🔎',
    category: 'Research',
    tagline: 'البحث الأكاديمي، تحليل الأسواق، وجمع المصادر الموثوقة',
    summary: 'بحث معمق فآلاف المقالات والأوراق العلمية والمواقع مع روابط مباشرة ومصادر موثقة فثواني معدودة.',
    difficulty: 'مبتدئ',
    duration: '5 - 15 دقيقة',
    cost: 'فابور',
    recommendedTools: [
      { name: 'Perplexity AI', role: 'أفضل محرك بحث مدعوم بالذكاء الاصطناعي مع المصادر', freePlan: true },
      { name: 'Genspark', role: 'توليد صفحات بحث شاملة وخرائط ذهنية', freePlan: true },
      { name: 'Consensus', role: 'بحث في الأوراق العلمية المحكمة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'صياغة السؤال بدقة وسياق واضح',
        description: 'اسأل عن موضوع محدد مع طلب مصادر من سنتي 2024 - 2026.',
        tool: 'Perplexity Pro',
        actionTip: 'استعمل وضع Pro Search باش يطرح عليك أسئلة توضيحية قبل الجواب.'
      },
      {
        stepNumber: 2,
        title: 'التحقق من المصادر الأصلية',
        description: 'الضغط على الأرقام والمراجع للتأكد من سياق الدراسة.',
        tool: 'Perplexity Citations',
        actionTip: 'تأكد من عدم الاعتماد على مقالات رأي غير علمية.'
      },
      {
        stepNumber: 3,
        title: 'استخراج ملخص تنفيذي أو جدول مقارنة',
        description: 'تنظيم المعطيات فجدول فيه الإيجابيات، السلبيات، والنتائج.',
        tool: 'Claude 3.7',
        actionTip: 'اطلب من النموذج إبراز التناقضات بين المصادر المختلفة إن وجدت.'
      }
    ],
    readyPrompts: [
      {
        title: 'بحث مقارن ودراسة جدوى لسوق معين',
        tool: 'Perplexity AI',
        promptText: 'قم ببحث شامل وموثق بالمصادر حول: [موضوع البحث] في السوق المغربي وشمال إفريقيا لعام 2025/2026. ركز على: 1. حجم السوق والنمو المتوقع 2. أكبر 3 منافسين وحصصهم 3. سلوك المستهلك وتفضيلاته 4. الفرص غير المستغلة. أرفق كل معلومة برابط المصدر المباشر.'
      }
    ],
    proTips: [
      'فـ Perplexity اختار الفلتر المناسب: Academic للأبحاث، أو Web للأخبار والأسواق.'
    ]
  },
  {
    id: 'analytics',
    title: 'نحلل البيانات',
    emoji: '📊',
    category: 'General AI',
    tagline: 'تحليل ملفات Excel واستخراج الرسوم البيانية والرؤى',
    summary: 'ارمي ملف إكسل أو CSV وخلي الذكاء الاصطناعي يحلل المبيعات، يكشف الأنماط، ويصايب مبيانات احترافية.',
    difficulty: 'مبتدئ',
    duration: '10 دقائق',
    cost: 'فابور / مدفوع',
    recommendedTools: [
      { name: 'ChatGPT Advanced Data Analysis', role: 'تشغيل كود بايثون وتحليل الجداول', freePlan: true },
      { name: 'Claude 3.7', role: 'تحليل النصوص المعقدة ومطابقة الأرقام', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تنظيف وتجهيز الملف',
        description: 'التأكد من أسماء الأعمدة وحذف الأسطر الفارغة.',
        tool: 'Excel / Sheets',
        actionTip: 'سمي الأعمدة بأسماء واضحة بحال Date, Revenue, City.'
      },
      {
        stepNumber: 2,
        title: 'طرح الأسئلة التحليلية الذكية',
        description: 'طلب معرفة أفضل 20% من المنتجات اللي كتجيب 80% من المداخيل.',
        tool: 'ChatGPT',
        actionTip: 'اطلب مبدأ باريتو (Pareto Analysis) لمعرفة المنتجات الأكثر ربحية.'
      },
      {
        stepNumber: 3,
        title: 'توليد الرسوم البيانية والتوصيات',
        description: 'تحميل الرسوم البيانية وملخص التوصيات العملية.',
        tool: 'ChatGPT Python Runtime',
        actionTip: 'حفظ الرسوم البيانية بدقة عالية لاستعمالها فالعروض.'
      }
    ],
    readyPrompts: [
      {
        title: 'تحليل كامل لملف مبيعات',
        tool: 'ChatGPT Data Analysis',
        promptText: 'أرفقت لك ملف مبيعات المتجر لآخر 6 أشهر. قم بالآتي: 1. تنظيف البيانات والتحقق من وجود أي شذوذ أو قيم مفقودة 2. حساب إجمالي الإيرادات، متوسط قيمة الطلب (AOV)، ومعدل تكرار الشراء 3. تحديد أفضل 5 منتجات مبيعاً وأكثر المدن طلباً 4. رسم بياني واضح لنمو المبيعات شهرياً 5. استخراج 3 توصيات عملية لزيادة الأرباح الشهر القادم.'
      }
    ],
    proTips: [
      'ما تحطش معلومات بنكية أو بيانات زبناء حساسة فالشات العام. امسح أرقام التيليفون والبطاقات قبل الرفع.'
    ]
  },
  {
    id: 'voice',
    title: 'نصايب صوت',
    emoji: '🎙️',
    category: 'Audio & Voice',
    tagline: 'تسجيل تعليق صوتي فخم ودبلجة بلهجات مختلفة',
    summary: 'تحويل أي نص لصوت بشري طبيعي 100% بنبرة إعلانية أو تعليمية أو درامية، مع استنساخ صوتك الخاص.',
    difficulty: 'مبتدئ',
    duration: '5 دقائق',
    cost: 'فابور / فريميوم',
    recommendedTools: [
      { name: 'ElevenLabs', role: 'أقوى أداة صوت في العالم بتفوق ساحق', freePlan: true },
      { name: 'Cartesia', role: 'توليد صوت فائق السرعة بزمن استجابة منخفض', freePlan: true },
      { name: 'Fish Audio', role: 'أداة مفتوحة المصدر وجودة ممتازة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تجهيز النص مع التشكيل والوقفات',
        description: 'كتابة النص مع علامات الترقيم (الفواصل ونقط النهاية) للتحكم فالنبرة.',
        tool: 'ChatGPT',
        actionTip: 'زيد (...) فالأماكن اللي باغي فيها وقفة تشويقية.'
      },
      {
        stepNumber: 2,
        title: 'اختيار الصوت والنبرة المناسبة للمحتوى',
        description: 'صوت شبابي للإعلانات، صوت رزين للوثائقيات.',
        tool: 'ElevenLabs Voice Library',
        actionTip: 'جرب سرعة 1.05 أو 1.1 لتبدو المحادثة حماسية أكثر فالسوشيال ميديا.'
      },
      {
        stepNumber: 3,
        title: 'تنزيل الصوت بصيغة MP3 نقية بدون تشويش',
        description: 'تصدير الملف ودمجه فالمونتاج.',
        tool: 'ElevenLabs',
        actionTip: 'استعمل ميزة Voice Isolator إلا سجلتي صوتك وكان فيه صدا.'
      }
    ],
    readyPrompts: [
      {
        title: 'سكريبت صوتي إعلاني بالدارجة المغربية المشكلة',
        tool: 'ElevenLabs Multilingual v2',
        promptText: 'واش عييتي من المنتوجات اللي كتوعدك وما كتدير والو؟ جبنا ليك الحل النهائي اللي غادي يغير روتينك اليومي بالكامل... جرب دابا وشوف الفرق من أول استعمال!'
      }
    ],
    proTips: [
      'فـ ElevenLabs اختار موديل Multilingual v2 باش يدعم العربية واللهجة المغربية بنطق سليم.'
    ]
  },
  {
    id: 'avatar',
    title: 'نصايب Avatar',
    emoji: '👤',
    category: 'Video',
    tagline: 'مقدم محتوى افتراضي كيهضر بلا ما تبان بوجهك',
    summary: 'صنع شخصية رقمية واقعية كتهضر بحركات فم متناسقة للتعليم أو التسويق أو اليوتيوب.',
    difficulty: 'متوسط',
    duration: '15 دقيقة',
    cost: 'فريميوم',
    recommendedTools: [
      { name: 'HeyGen', role: 'أفضل جودة أفاتار وتحريك شفتين فالعالم', freePlan: true },
      { name: 'Hedra.com', role: 'تحريك أي شخصية كرتونية أو واقعية من صورة فقط', freePlan: true },
      { name: 'D-ID', role: 'توليد شخصيات ناطقة سريعة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'توليد أو رفع صورة الشخصية',
        description: 'صورة بجودة عالية، الشخص كيشوف مباشرة فالكاميرا.',
        tool: 'Midjourney أو الكاميرا',
        actionTip: 'تأكد من وضوح الفم والإضاءة المتساوية على الوجهين.'
      },
      {
        stepNumber: 2,
        title: 'إدخال السكريبت الصوتي المفرغ',
        description: 'رفع تسجيل صوتي أو كتابة النص واختيار الصوت.',
        tool: 'HeyGen / Hedra',
        actionTip: 'رفع تسجيل صوتي حقيقي كيعطي نتائج أكثر واقعية من النص المكتوب.'
      },
      {
        stepNumber: 3,
        title: 'إضافة الإيماءات وتصدير الفيديو',
        description: 'إضافة حركة اليدين وتناسق حركة الرأس.',
        tool: 'HeyGen',
        actionTip: 'دمج الأفاتار مع لقطات توضيحية B-Roll لتفادي الملل.'
      }
    ],
    readyPrompts: [
      {
        title: 'صورة أفاتار احترافي لـ Midjourney',
        tool: 'Midjourney',
        promptText: 'Portrait of a charismatic friendly presenter in modern casual blazer, looking directly into camera with confident warm smile, crisp clean studio lighting, soft neutral background, 8k resolution, photorealistic commercial headshot --ar 9:16 --v 6.1'
      }
    ],
    proTips: [
      'ما تخليش الأفاتار كيهضر 60 ثانية متواصلة بلا لقطات شاشة أو رسوم توضيحية جانبية.'
    ]
  },
  {
    id: 'content',
    title: 'نكتب محتوى',
    emoji: '✍️',
    category: 'General AI',
    tagline: 'كتابة مقالات، منشورات لينكدإن، وخيوط تويتر فيرال',
    summary: 'صياغة أفكار عميقة ومقالات ممتعة بدون الجمل المبتذلة للذكاء الاصطناعي (Anti-AI Slop).',
    difficulty: 'مبتدئ',
    duration: '10 دقائق',
    cost: 'فابور',
    recommendedTools: [
      { name: 'Claude 3.7 Sonnet', role: 'أفضل كاتب نصوص ذكي بأسلوب بشري راقي', freePlan: true },
      { name: 'ChatGPT 4o', role: 'توليد أفكار وهياكل سريعة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد زاوية فريدة (Unique Angle)',
        description: 'ما تطلبش مقال عام. اطلب قصة شخصية أو تجربة حقيقية.',
        tool: 'Claude 3.7',
        actionTip: 'عطيه أمثلة من كتابتك القديمة باش يقلد أسلوبك بالضبط.'
      },
      {
        stepNumber: 2,
        title: 'حذف العبارات المبتذلة للـ AI',
        description: 'حذف كلمات بحال: "في عصرنا الحالي"، "علاوة على ذلك"، "تجدر الإشارة".',
        tool: 'التعديل البشري',
        actionTip: 'استعمل جمل قصيرة ومباشرة كتضرب فالصميم.'
      },
      {
        stepNumber: 3,
        title: 'إضافة الخطاف والخاتمة التفاعلية',
        description: 'سؤال فآخر المنشور يدفع المتابعين للتعليق.',
        tool: 'Claude 3.7',
        actionTip: 'السطر الأول كيحسم واش القارئ غايكمل القراءة ولا غايدوز.'
      }
    ],
    readyPrompts: [
      {
        title: 'منشور LinkedIn فيرال بأسلوب بشري أصيل',
        tool: 'Claude 3.7',
        promptText: 'اكتب لي منشور لينكد إن قوي حول موضوع: [الموضوع]. الشروط الصارمة: 1. ابدأ بقصة أو حقيقة صادمة في السطر الأول بدون أي مقدمات تافهة 2. استخدم أسطر قصيرة ومسافات مريحة للعين 3. تجنب تماما الكلمات الخشبية المبتذلة (مثل: في عالم اليوم المتسارع، ثورة الذكاء، تجدر الإشارة) 4. اذكر درساً عملياً مستفاداً يمكن تطبيقه اليوم 5. اختم بسؤال مفتوح للنقاش.'
      }
    ],
    proTips: [
      'أفضل محتوى هو اللي فيه تجربة حقيقية أو أرقام من الواقع ديالك.'
    ]
  },
  {
    id: 'seo',
    title: 'نخدم SEO',
    emoji: '🚀',
    category: 'Marketing',
    tagline: 'تصدر نتائج محرك بحث Google وجلب زيارات مجانية',
    summary: 'بحث الكلمات المفتاحية، بناء المحتوى المتوافق مع خوارزميات جوجل، وبناء الروابط الداخلية.',
    difficulty: 'متوسط',
    duration: '25 دقيقة',
    cost: 'فابور / فريميوم',
    recommendedTools: [
      { name: 'Perplexity AI', role: 'كشف نية بحث الزائر (Search Intent)', freePlan: true },
      { name: 'Claude 3.7', role: 'كتابة مقالات شمولية تجيب على أسئلة الزوار', freePlan: true },
      { name: 'Google Search Console', role: 'متابعة ترتيب الكلمات والزيارات', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد الكلمات المفتاحية ذات المنافسة السهلة',
        description: 'البحث عن كلمات طويلة (Long-tail keywords) كيبحثو عليها الناس ومكاينش عليها محتوى قوي.',
        tool: 'Perplexity + Ahrefs Free',
        actionTip: 'ركز على أسئلة: "كيفاش..."، "أفضل طريقة لـ..."، "مقارنة بين...".'
      },
      {
        stepNumber: 2,
        title: 'كتابة مقال يجيب على كل جوانب الموضوع',
        description: 'بناء العناوين H1, H2, H3 وإضافة جداول وإجابات سريعة.',
        tool: 'Claude 3.7',
        actionTip: 'حط الجواب المباشر فأول فقرة باش تطلع فـ Featured Snippet.'
      },
      {
        stepNumber: 3,
        title: 'تحسين العناوين وسرعة التحميل',
        description: 'عنوان جذاب يرفع نسبة النقر CTR ووصف ميتا مشوق.',
        tool: 'Yoast / RankMath',
        actionTip: 'تأكد من أن الصور مضغوطة بحجم أقل من 100KB وبصيغة WebP.'
      }
    ],
    readyPrompts: [
      {
        title: 'هيكل مقال SEO متصدر ومكتمل الأركان',
        tool: 'Claude 3.7',
        promptText: 'أريد تصدر الكلمة المفتاحية: [الكلمة المفتاحية]. صمم لي هيكلاً تفصيلياً للمقال يغطي نية البحث بنسبة 100%: 1. عنوان SEO جذاب أقل من 60 حرفاً مع الكلمة المفتاحية 2. وصف Meta مقنع مع دعوة للنقر 3. عناوين H2 و H3 تغطي جميع الأسئلة ذات الصلة 4. اقتراح جدول مقارنة أو قائمة نصائح سريعة 5. فقرة FAQ للإجابة عن الأسئلة الشائعة.'
      }
    ],
    proTips: [
      'جوجل كتعاقب المحتوى المولد عشوائياً بدون قيمة مضافة. زيد ديما لمستك الشخصية وأمثلة واقعية.'
    ]
  },
  {
    id: 'automation',
    title: 'ندير Automation',
    emoji: '⚙️',
    category: 'Automation & Business',
    tagline: 'ربط الأدوات والتطبيقات وتوفير ساعات من العمل اليدوي',
    summary: 'خلي الحواسيب تدير الخدمة المملة: نقل البيانات من فورم لإكسل، إرسال إيميلات تلقائية، ونشر المحتوى.',
    difficulty: 'متوسط',
    duration: '30 دقيقة',
    cost: 'فابور (حتى 1000 عملية شهرياً)',
    recommendedTools: [
      { name: 'Make.com', role: 'المنصة الأسهل والأجمل للأتمتة البصرية', freePlan: true },
      { name: 'n8n', role: 'أتمتة متقدمة مفتوحة المصدر بدون قيود', freePlan: true },
      { name: 'Zapier', role: 'أكبر عدد من الروابط الجاهزة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد المحفز (Trigger) والإجراء (Action)',
        description: 'مثال: "عندما يسجل زبون في الفورم (Trigger) -> أرسل له واتساب وأضفه للإكسل (Actions)".',
        tool: 'ورقة وقلم / Make.com',
        actionTip: 'بسط السيناريو لـ 3 خطوات فقط فالبداية.'
      },
      {
        stepNumber: 2,
        title: 'بناء السيناريو فـ Make.com',
        description: 'سحب وإفلات الأدوات وتوصيل المفاتيح والـ Webhooks.',
        tool: 'Make.com',
        actionTip: 'استعمل أدوات الفلترة لتفادي إرسال بيانات غير مكتملة.'
      },
      {
        stepNumber: 3,
        title: 'التشغيل والمراقبة وتفادي الأخطاء',
        description: 'تجربة السيناريو ببيانات وهمية والتأكد من نجاح كل خطوة.',
        tool: 'Make.com History',
        actionTip: 'فعل خيار إرسال إشعار فالتلغرام إلا وقف السيناريو بسبب خطأ.'
      }
    ],
    readyPrompts: [
      {
        title: 'تصميم سيناريو أتمتة لمتجر تجارة إلكترونية',
        tool: 'ChatGPT / Claude',
        promptText: 'أريد بناء سيناريو أتمتة على Make.com لمتجري الإلكتروني. اشرح لي الخطوات بالتفصيل: كيف أربط طلبيات المتجر الواردة بـ Google Sheets، ثم إرسال رسالة شكر وتأكيد عبر WhatsApp Business API، مع إشعار فريق التوصيل على قناة Telegram خاصة.'
      }
    ],
    proTips: [
      'فـ Make.com استعمل ميزة Router باش تفرق الطلبيات حسب المدينة أو المبلغ.'
    ]
  },
  {
    id: 'education',
    title: 'نستعمل AI فالتعليم',
    emoji: '🎓',
    category: 'General AI',
    tagline: 'تلخيص الدروس، إعداد الامتحانات، ومساعد دراسي خاص 24/7',
    summary: 'كيفاش تقرا أسرع بـ 5 أضعاف، تفهم المواد المعقدة، وتراجع للامتحانات بتمارين تفاعلية مشروحة.',
    difficulty: 'مبتدئ',
    duration: '10 دقائق',
    cost: 'فابور',
    recommendedTools: [
      { name: 'NotebookLM (Google)', role: 'أفضل أداة لتحويل المقررات والـ PDF لدروس وبودكاست صوتي', freePlan: true },
      { name: 'Claude 3.7', role: 'شرح المفاهيم المعقدة بمبدأ فاينمان (Feynman)', freePlan: true },
      { name: 'ChatGPT', role: 'إنشاء كويزات وتمارين تدريبية مع الحلول', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'رفع الكتب والمذكرات (PDF)',
        description: 'جمع مقرراتك فـ NotebookLM باش يسولك غير من داخل الكتب ديالك.',
        tool: 'Google NotebookLM',
        actionTip: 'الأداة ما كتخترعش معلومات من برا، كتركز فقط على الملفات المرفوعة.'
      },
      {
        stepNumber: 2,
        title: 'طلب شرح المفهوم الصعب كأنك طفل 12 سنة',
        description: 'تبسيط المعادلات والنظريات باستعمال أمثلة من الحياة اليومية.',
        tool: 'Claude 3.7',
        actionTip: 'اطلب من النموذج يشرح ليك بالدارجة مع تشبيهات ملموسة.'
      },
      {
        stepNumber: 3,
        title: 'اختبار نفسك بأسئلة الامتحان السابقة',
        description: 'إنشاء امتحان تجريبي وتصحيحه مع توضيح نقط الضعف.',
        tool: 'ChatGPT',
        actionTip: 'لا تنظر للحل حتى تحاول الإجابة بنفسك أولا.'
      }
    ],
    readyPrompts: [
      {
        title: 'استعمال تقنية فاينمان لشرح درس معقد',
        tool: 'Claude / NotebookLM',
        promptText: 'أنا أستعد لامتحان في مادة [اسم المادة] وموضوع [المفهوم/الدرس]. اشرح لي هذا المفهوم باستخدام تقنية فاينمان: 1. شرح بسيط ومباشر كأنني أسمعه لأول مرة 2. تشبيه ملموس من الحياة اليومية 3. أهم 3 أسئلة قد يطرحها الأستاذ في الامتحان وكيف أجيب عنها بنموذجية 4. كويز من 5 أسئلة لاختبار فهمي الآن.'
      }
    ],
    proTips: [
      'NotebookLM فيه ميزة Audio Overview اللي كتحول المقرر لحوار صوتي ممتع بحال البودكاست تقدر تسمعو فطريقك للمدرسة.'
    ]
  },
  {
    id: 'affiliate',
    title: 'نخدم Affiliate',
    emoji: '💰',
    category: 'Marketing',
    tagline: 'تسويق العروض والخدمات بالعمولة وجلب عمولات دورية',
    summary: 'اختيار برامج الأفلييت المربحة (خصوصا برامج الـ SaaS والاشتراكات الشهرية المتكررة) وصناعة محتوى كيجيب مبيعات.',
    difficulty: 'متوسط',
    duration: '30 دقيقة',
    cost: 'فابور للبدء',
    recommendedTools: [
      { name: 'Perplexity AI', role: 'اكتشاف أفضل برامج الأفلييت ذات العمولات المرتفعة', freePlan: true },
      { name: 'Claude 3.7', role: 'كتابة مقالات مقارنة ومراجعات شفافة', freePlan: true },
      { name: 'Canva AI', role: 'تصميم بنرات وإعلانات المقارنة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'اختيار أدوات برمجية باشتراك شهري (Recurring)',
        description: 'التركيز على أدوات بحال أدوات الاستضافة، الذكاء الاصطناعي، أو الـ CRM اللي كتعطي عمولة كل شهر.',
        tool: 'Rewardful / FirstPromoter',
        actionTip: 'ابحث عن عمولة بنسبة 20% إلى 40% مدى الحياة.'
      },
      {
        stepNumber: 2,
        title: 'صناعة محتوى يحل مشكل حقيقي بالأداة',
        description: 'فيديو أو مقال بعنوان "كيفاش تصاوب [هدف] باستعمال [اسم الأداة]".',
        tool: 'Claude + CapCut',
        actionTip: 'ما تبيعش مباشرة، علم الناس الطريقة وحط الرابط فصندوق الوصف.'
      },
      {
        stepNumber: 3,
        title: 'بناء صفحة هبوط لجمع الإيميلات',
        description: 'إعطاء كتاب إلكتروني أو كورس مجاني مقابل إيميل المتابع لترويج عروض أخرى مستقبلاً.',
        tool: 'ConvertKit / Beehiiv',
        actionTip: 'القائمة البريدية هي الكنز الحقيقي لمسوق الأفلييت.'
      }
    ],
    readyPrompts: [
      {
        title: 'كتابة مراجعة مقارنة محايدة بين أداتين لترويج الأفلييت',
        tool: 'Claude 3.7',
        promptText: 'اكتب لي مقالة مقارنة مفصلة وشفافة بين [الأداة A] و [الأداة B] لجمهور من رواد الأعمال والمبتدئين. المقال يحتوي على: مقارنة الميزات، سهولة الاستخدام، خطط الأسعار والقيمة مقابل السعر، لمن تناسب كل أداة، والخلاصة بتوصية واضحة مع حث القارئ على تجربة النسخة المجانية عبر الرابط.'
      }
    ],
    proTips: [
      'الشفافية هي سر المبيعات: قول للناس بصراحة أن هذا رابط أفلييت وأنك كتربح عمولة بدون تكلفة إضافية عليهم.'
    ]
  },
  {
    id: 'dropshipping',
    title: 'ندير Dropshipping',
    emoji: '📦',
    category: 'E-Commerce',
    tagline: 'التجارة الإلكترونية بدون تخزين مسبق ورأس مال كبير',
    summary: 'إيجاد منتوجات ذات طلب مرتفع فـ TikTok و AliExpress، بناء متجر سريع، وتشغيل إعلانات مربحة.',
    difficulty: 'متوسط',
    duration: '40 دقيقة',
    cost: 'متوسط (تكلفة الإعلانات)',
    recommendedTools: [
      { name: 'TikTok Creative Center', role: 'كشف فيديوهات المنتجات الأكثر تفاعلاً فالعالم', freePlan: true },
      { name: 'AutoDS / CJ Dropshipping', role: 'ربط وشحن المنتجات للزبناء مباشرة', freePlan: true },
      { name: 'ChatGPT 4o', role: 'ترجمة وكتابة نصوص المنتجات بلغات متعددة', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'اختيار منتج فيه خاصية الـ Wow Factor',
        description: 'منتج يحل مشكلة واضحة وغير متوفر فالمحلات العادية المجاورة.',
        tool: 'TikTok Ads Search',
        actionTip: 'ابحث عن هاشتاغ #TikTokMadeMeBuyIt وفرز الفيديوهات لآخر 30 يوم.'
      },
      {
        stepNumber: 2,
        title: 'صناعة إعلانات UGC جذابة بالذكاء الاصطناعي',
        description: 'استعمال أدوات الفيديو لإنشاء مقاطع إعلانية بأسلوب مستخدم حقيقي.',
        tool: 'Kling / CapCut',
        actionTip: 'ما تستعملش فيديوهات المورد القديمة اللي فيها لوجو صيني، صايب إعلانات خاصة بيك.'
      },
      {
        stepNumber: 3,
        title: 'تحديد سعر البيع وهامش الربح',
        description: 'بيع المنتج بسعر 2.5 إلى 3 أضعاف سعر الشراء لتغطية الإعلانات.',
        tool: 'حاسبة الدروبشيبينغ',
        actionTip: 'قدم باقات تخفيض: 1 قطعة بسعر، و 2 قطع مع خصم 30% وشحن مجاني.'
      }
    ],
    readyPrompts: [
      {
        title: 'تحليل منتج دروبشيبينغ واستخراج 5 زوايا بيع فريدة',
        tool: 'ChatGPT / Claude',
        promptText: 'أريد بيع هذا المنتج: [وصف ورابط المنتج]. قم بتحليله واستخرج: 1. الفئة المستهدفة الأكثر شراءً (العمر، الاهتمامات) 2. أكبر مشكل يواجههم ويحله هذا المنتج 3. خمس زوايا تسويقية إبداعية لإعلانات تيك توك 4. السعر المقترح للبيع لتحقيق أرباح ممتازة.'
      }
    ],
    proTips: [
      'سرعة الشحن هي مفتاح تكرار الشراء وتفادي غلق بوابات الدفع (Stripe/PayPal).'
    ]
  },
  {
    id: 'code',
    title: 'نبرمج',
    emoji: '💻',
    category: 'Development',
    tagline: 'كتابة وتصحيح وشرح الكود البرمجي بسرعة مضاعفة',
    summary: 'استعمال مساعدي البرمجة الذكية لبناء وظائف معقدة، حل الـ Bugs، وتطوير برمجيات كاملة بلغة TypeScript، Python، وغيرها.',
    difficulty: 'متوسط',
    duration: '15 دقيقة',
    cost: 'فابور للبدء',
    recommendedTools: [
      { name: 'Cursor IDE', role: 'المحرر رقم 1 فالعالم للمبرمجين المدعوم بالذكاء الاصطناعي', freePlan: true },
      { name: 'Claude 3.7 Sonnet', role: 'أقوى نموذج لكتابة الكود والمنطق المعقد', freePlan: true },
      { name: 'GitHub Copilot', role: 'إكمال الكود التلقائي داخل بيئة العمل', freePlan: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تثبيت Cursor واستعمال Command + K',
        description: 'توجيه الذكاء الاصطناعي لكتابة وتعديل الدوال والملفات مباشرة.',
        tool: 'Cursor IDE',
        actionTip: 'استعمل @ للوصول لملفات المشروع وتوثيق المكتبات (@Docs).'
      },
      {
        stepNumber: 2,
        title: 'تضمين قواعد المشروع فملف .cursorrules',
        description: 'تعليم النموذج معايير كودك، مكتباتك المفضلة (Tailwind, React 19).',
        tool: '.cursorrules',
        actionTip: 'حدد له عدم استعمال أي مكتبات غير مطلوبة وعدم حذف التعليقات المهمة.'
      },
      {
        stepNumber: 3,
        title: 'البحث عن الأخطاء وتصحيحها بـ Composer',
        description: 'إعطاء رسالة الخطأ (Stack Trace) للنموذج ليصلحه فثواني.',
        tool: 'Cursor Composer (Ctrl+I)',
        actionTip: 'انسخ رسالة الخطأ كاملة من الكونسول بدون نقصان.'
      }
    ],
    readyPrompts: [
      {
        title: 'كتابة مكون React كامل مع معالجة الحالات',
        tool: 'Claude 3.7 / Cursor',
        promptText: 'Write a production-ready, accessible React TypeScript component for [Component Name]. Requirements: 1. Clean Tailwind CSS styling matching modern aesthetic 2. Robust error handling and loading skeletons 3. Responsive on mobile and desktop 4. Types defined explicitly with interface 5. Accessible with proper ARIA attributes.'
      }
    ],
    proTips: [
      'فـ Cursor، استعمل وضع Agent Mode ليقوم بالتعديلات عبر ملفات متعددة فمرة واحدة.'
    ]
  },
  {
    id: 'pdf',
    title: 'نخدم PDF',
    emoji: '📄',
    category: 'General AI',
    tagline: 'تلخيص، استخراج جداول، والدردشة مع المستندات الطويلة',
    summary: 'فهم العقود، الكتب، التقارير المالية، والفواتير بضغطة زر مع الحفاظ على سرية البيانات.',
    difficulty: 'مبتدئ',
    duration: '5 دقائق',
    cost: 'فابور',
    recommendedTools: [
      { name: 'Google NotebookLM', role: 'أقوى أداة لفهم مستندات PDF الضخمة والمراجع', freePlan: true },
      { name: 'Claude 3.7 (200k Context)', role: 'استيعاب كتب كاملة وتحليل بنود العقود بدقة متناهية', freePlan: true },
      { name: 'ChatPDF', role: 'دردشة سريعة مع أي ملف PDF', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'رفع الملف والتأكد من وضوح النص',
        description: 'التأكد من أن الـ PDF ليس مجرد صور ممسوحة بالسكانير بدون خاصية OCR.',
        tool: 'NotebookLM / Claude',
        actionTip: 'إلا كان مسكانير، استعمل Google Drive لفتحه كـ Google Docs وتطبيق OCR فابور.'
      },
      {
        stepNumber: 2,
        title: 'طلب تلخيص تنفيذي أو استخراج الشروط',
        description: 'اسأل عن البنود الحساسة، التواريخ، والالتزامات المالية.',
        tool: 'Claude 3.7',
        actionTip: 'اطلب إجابة مدعومة برقم الصفحة للتأكد بنفسك.'
      },
      {
        stepNumber: 3,
        title: 'تحويل الجداول لملف Excel جاهز',
        description: 'استخراج الأرقام من جداول الـ PDF لجداول منظمة قابلة للنسخ.',
        tool: 'ChatGPT',
        actionTip: 'اطلب التصدير بصيغة CSV لتفتحها مباشرة فـ Excel.'
      }
    ],
    readyPrompts: [
      {
        title: 'تحليل عقد قانوني أو اتفاقية تجارية واستخراج المخاطر',
        tool: 'Claude 3.7',
        promptText: 'أرفقت لك ملف العقد المرفق. قم بالآتي: 1. لخص موضوع العقد والأطراف الموقعة والتاريخ 2. استخرج جميع الالتزامات المالية ومواعيد الدفع 3. نبهني لأي شروط جزائية أو بنود قد تشكل خطورة أو التزاماً غير متكافئ 4. قدم لي قائمة بـ 5 أسئلة يجب أن أطرحها على الطرف الآخر قبل التوقيع.'
      }
    ],
    proTips: [
      'دائما تأكد من رقم الصفحة في الوثيقة الرسمية ولا تعتمد 100% على الـ AI في القرارات القانونية الحساسة.'
    ]
  },
  {
    id: 'social',
    title: 'نخدم Social Media',
    emoji: '📱',
    category: 'Marketing',
    tagline: 'خطة نشر شهرية، أفكار فيرال، وتفاعل ذكي مع المتابعين',
    summary: 'إدارة حسابات إنستغرام، تيك توك، ولينكد إن بأقل جهد: كتدير خطة شهر كامل فـ ساعتين فقط.',
    difficulty: 'مبتدئ',
    duration: '20 دقيقة',
    cost: 'فابور',
    recommendedTools: [
      { name: 'Claude 3.7', role: 'كتابة تقويم محتوى 30 يوم متكامل', freePlan: true },
      { name: 'CapCut AI', role: 'تصميم ومونتاج مقاطع الريلز وتيك توك', freePlan: true },
      { name: 'ManyChat', role: 'الرد التلقائي فـ DM على الكلمات الدلالية', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد أعمدة المحتوى (Content Pillars)',
        description: 'تقسيم المحتوى: 40% تعليمي، 30% قصصي وبناء ثقة، 30% ترويجي مباشر.',
        tool: 'Claude 3.7',
        actionTip: 'التنوع كيخلي المتابع متشوق وما كيحسش بأنك غير كتروج ليه ليل نهار.'
      },
      {
        stepNumber: 2,
        title: 'توليد 30 فكرة ريلز مع الهوك والسكريبت',
        description: 'جلسة توليد أفكار مبنية على المشاكل الحقيقية للجمهور.',
        tool: 'ChatGPT / Claude',
        actionTip: 'اكتب هوكات تبدأ بأرقام أو أسرار أو مواقف محرجة.'
      },
      {
        stepNumber: 3,
        title: 'أتمتة الردود على التعليقات بـ ManyChat',
        description: 'قول للمتابعين: "كتب [كلمة] فالتعليقات وغيوصلك الرابط فـ DM فالحين".',
        tool: 'ManyChat',
        actionTip: 'هاد الطريقة كترفع تفاعل المنشور بنسبة 300% وتجلب زبناء مستعدين للشراء.'
      }
    ],
    readyPrompts: [
      {
        title: 'تقويم محتوى متكامل لمدة أسبوعين للسوشيال ميديا',
        tool: 'Claude 3.7',
        promptText: 'أنا أقدم محتوى في مجال [المجال] لجمهور مغربي وعربي. صمم لي جدول نشر لـ 14 يوماً يحتوي على: 1. نوع المحتوى (Reel، Carousel، منشور نصي) 2. الهوك (أول 3 ثواني) 3. ملخص الفكرة والقيمة المقدمة 4. نداء العمل (CTA) المقترح. اجعل الأفكار عملية وقابلة للتطبيق السريع.'
      }
    ],
    proTips: [
      'الاستمرارية أهم من المثالية. فيديو عادي كيتنشر كل نهار أحسن من فيديو أسطوري كيتنشر مرة فـ 3 شهور.'
    ]
  },
  {
    id: 'design',
    title: 'ندير Design',
    emoji: '✨',
    category: 'Image',
    tagline: 'تصميم هويات بصرية، لوجوهات، وبوسترات احترافية',
    summary: 'صنع تصاميم إبداعية باستعمال أدوات توليد الفيكتورات وتناسق الألوان والخطوط العصرية.',
    difficulty: 'مبتدئ',
    duration: '15 دقيقة',
    cost: 'فابور / فريميوم',
    recommendedTools: [
      { name: 'Canva Magic Studio', role: 'المنصة الأسهل لإنشاء تصاميم جاهزة للمبتدئين', freePlan: true },
      { name: 'Midjourney v6', role: 'توليد أفكار لوجوهات وخلفيات إبداعية', freePlan: false },
      { name: 'Recraft.ai', role: 'توليد فيكتورات SVG وأيقونات قابلة للتعديل', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد المزاج البصري (Moodboard)',
        description: 'اختيار باليت الألوان، والخطوط، ونوع الستايل (Minimalist, Cyberpunk, Luxury).',
        tool: 'Coolors + Pinterest',
        actionTip: 'ما تستعملش أكثر من 3 ألوان رئيسية وخطين فقط.'
      },
      {
        stepNumber: 2,
        title: 'توليد الأيقونات والفيكتورات بـ Recraft',
        description: 'الحصول على ملفات SVG بدون بيكسلات قابلة للتكبير لأي حجم.',
        tool: 'Recraft.ai',
        actionTip: 'اختار ستايل Vector art أو 3D icon لتناسق جميع عناصر التصميم.'
      },
      {
        stepNumber: 3,
        title: 'تركيب التصميم النهائي وإضافة النصوص',
        description: 'ضبط التباعد والـ Alignment وتصدير الملف بجودة عالية.',
        tool: 'Canva أو Figma',
        actionTip: 'احرص على ترك مساحة فارغة (White space) لراحة العين.'
      }
    ],
    readyPrompts: [
      {
        title: 'توليد شعار Minimalist عصري لبراند جديدة',
        tool: 'Midjourney / Recraft',
        promptText: 'Minimalist elegant modern vector logo for a [type of brand], geometric clean lines, negative space concept, single flat solid color on pure white background, flat design, vector graphics --no realistic photo, shading --v 6.1'
      }
    ],
    proTips: [
      'فـ Recraft تقدر تختار نوع الستايل الدقيق (مثلا: Line Art, Plastic 3D, Hand Drawn) باش تحافظ على هوية واحدة.'
    ]
  },
  {
    id: 'edit-video',
    title: 'نعدل فيديو',
    emoji: '✂️',
    category: 'Video',
    tagline: 'حذف الصمت، إضافة الكابشنز، والمؤثرات بضغطة زر',
    summary: 'مونتاج سريع وسلس: قص اللقطات الميتة تلقائيا، تحسين الصوت، وإضافة الترجمة المتحركة التفاعلية.',
    difficulty: 'مبتدئ',
    duration: '10 دقائق',
    cost: 'فابور',
    recommendedTools: [
      { name: 'CapCut Desktop / Mobile', role: 'أقوى أداة مونتاج مجانية مع ميزات AI مدمجة', freePlan: true },
      { name: 'Submagic', role: 'إضافة كابشنز ديناميكية بإيموجيات وتأثيرات تيك توك', freePlan: true },
      { name: 'Adobe Podcast AI', role: 'تنقية الصوت وإزالة الصدا وتشويش الشارع فابور', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تنقية الصوت فـ Adobe Podcast أولاً',
        description: 'رفع ملف الصوت المسجل بالميكروفون لتنقيته ليصبح كأنه مسجل فـ استوديو احترافي.',
        tool: 'Adobe Podcast Enhance Speech',
        actionTip: 'هاد الخطوة كترفع جودة الفيديو بنسبة 70% فـ دقيقة واحدة فابور.'
      },
      {
        stepNumber: 2,
        title: 'استعمال ميزة Auto-Cut لحذف الصمت',
        description: 'الذكاء الاصطناعي كيقص تلقائياً كل ثانية فيها سكوت أو تنحنح.',
        tool: 'CapCut / Descript',
        actionTip: 'هذا كيجعل ريتم الفيديو سريع ومشدود للمشاهد.'
      },
      {
        stepNumber: 3,
        title: 'إضافة الكابشنز التلقائية بألوان بارزة',
        description: 'إظهار الكلمات كلمة بكلمة مع ألوان صفراء وخضراء ورموز تعبيرية.',
        tool: 'CapCut Auto-Captions',
        actionTip: 'راجع الكلمات للتأكد من صحة إملاء الكلمات بالدارجة أو العربية.'
      }
    ],
    readyPrompts: [
      {
        title: 'إعدادات تنقية الصوت والمونتاج السريع',
        tool: 'CapCut & Adobe Podcast',
        promptText: '1. استورد الفيديو إلى CapCut 2. اضغط على Audio ثم Enhance Voice 3. استخدم Auto Captions بلغة الفيديو 4. اختر ستايل الخط الكلاسيكي العريض مع تظليل خفيف لضمان قراءة واضحة على كل الهواتف.'
      }
    ],
    proTips: [
      '80% من الناس كيتفرجو فالفيديوهات بدون صوت فالأماكن العامة؛ الكابشنز شرط أساسي للنجاح!'
    ]
  },
  {
    id: 'music',
    title: 'نصايب Music',
    emoji: '🎵',
    category: 'Audio & Voice',
    tagline: 'توليد موسيقى تصويرية، أغاني، وألحان بدون حقوق ملكية',
    summary: 'صنع مقاطع موسيقية فريدة للإعلانات، ألعاب الفيديو، والبودكاست بأي نوع (Lofi, Cinematic, Moroccan Beats).',
    difficulty: 'مبتدئ',
    duration: '5 دقائق',
    cost: 'فابور يومياً',
    recommendedTools: [
      { name: 'Suno AI v3.5', role: 'أقوى أداة لتوليد أغاني كاملة بكلمات وألحان وصوت', freePlan: true },
      { name: 'Udio', role: 'جودة نقاء موسيقي سينمائي وتفاصيل صوتية مذهلة', freePlan: true },
      { name: 'Soundraw', role: 'توليد وتعديل موسيقى خلفية مخصصة للفيديوهات', freePlan: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'تحديد النمط الموسيقي والمزاج (Vibe)',
        description: 'واش باغي موسيقى هادئة (Ambient lofi) ولا إيقاع حماسي تجاري (Energetic upbeat).',
        tool: 'Suno / Udio',
        actionTip: 'حدد الآلات الموسيقية: [Acoustic guitar, warm piano, soft percussion].'
      },
      {
        stepNumber: 2,
        title: 'كتابة الكلمات أو اختيار وضع Instrumental',
        description: 'إلا كنتي باغيها خلفية فيديو، فعل خيار Instrumental بدون غناء.',
        tool: 'Suno AI',
        actionTip: 'تقدر تطلب ألحان مستوحاة من التراث المغربي الأندلسي أو الكناوي.'
      },
      {
        stepNumber: 3,
        title: 'التمديد والتصدير (Extend & Export)',
        description: 'تمديد المقطع ليصل لدقيقة أو دقيقتين ثم التنزيل بصيغة MP3 أو WAV.',
        tool: 'Suno AI',
        actionTip: 'تأكد من عدم وجود أي كلمات مسيئة وتأكد من الترخيص التجاري فحال الحساب المدفوع.'
      }
    ],
    readyPrompts: [
      {
        title: 'موسيقى خلفية هادئة ملهمة لإعلان منتوج فاخر',
        tool: 'Suno AI / Udio',
        promptText: 'Instrumental elegant ambient corporate music, inspiring warm acoustic piano and soft string quartet, subtle rhythmic modern beats, uplifting and luxurious feel, studio mastered 44khz'
      }
    ],
    proTips: [
      'فـ Suno استعمل علامات [Verse] و [Chorus] و [Outro] باش تتحكم فترتيب بنية الأغنية بدقة.'
    ]
  }
];
