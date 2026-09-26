export interface AITool {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  pricing: 'مجاني' | 'فريميوم' | 'مدفوع';
  tagline: string;
  description: string;
  bestFor: string;
  websiteUrl: string;
  badge?: string;
  rating: number;
  samplePrompt?: string;
}

export const TOOLS_DATA: AITool[] = [
  {
    id: 'claude',
    name: 'Claude 3.7 Sonnet',
    category: 'General AI',
    categoryId: 'general-ai',
    pricing: 'فريميوم',
    tagline: 'أذكى نموذج للبرمجة والتفكير الهجين والكتابة البشرية الطبيعية',
    description: 'يتميز بأسلوب كتابة بشري راقي خالٍ من ركاكة الذكاء الاصطناعي، وقدرة استيعاب هائلة تصل إلى 200,000 كلمة في السياق الواحد.',
    bestFor: 'كتابة الإعلانات، المقالات، البرمجة المعقدة، والتحليل المنطقي العميق',
    websiteUrl: 'https://claude.ai',
    badge: 'الأفضل في 2026',
    rating: 4.9,
    samplePrompt: 'اكتب لي خطة إطلاق منتج جديد في المغرب بأسلوب تسويقي حديث موجه للشباب.'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT 4o',
    category: 'General AI',
    categoryId: 'general-ai',
    pricing: 'فريميوم',
    tagline: 'المساعد الشامل الأكثر شهرة مع الصوت التفاعلي المباشر',
    description: 'محرك متعدد الوسائط قادر على فهم الصور، تشغيل كود بايثون لتحليل ملفات الإكسل، وتوليد نصوص بأكثر من 50 لغة.',
    bestFor: 'العصف الذهني، تحليل البيانات، والترجمة الفورية',
    websiteUrl: 'https://chatgpt.com',
    rating: 4.8,
    samplePrompt: 'حلل هذا الجدول وقدم لي أهم 3 فرص نمو للربع القادم.'
  },
  {
    id: 'midjourney',
    name: 'Midjourney v6.1',
    category: 'Image',
    categoryId: 'image',
    pricing: 'مدفوع',
    tagline: 'الملك بلا منازع في الواقعية الفوتوغرافية والجماليات السينمائية',
    description: 'يولد صوراً سينمائية شديدة الواقعية مع معالجة استثنائية للإضاءة والانعكاسات، وميزة تثبيت ملامح الوجه والشخصيات.',
    bestFor: 'تصوير المنتجات التجارية، الإعلانات الفاخرة، والبوسترات الإبداعية',
    websiteUrl: 'https://midjourney.com',
    badge: 'واقعية سينمائية',
    rating: 4.9,
    samplePrompt: 'Commercial studio photo of a luxury perfume on wet basalt stone, golden hour rim lighting --ar 4:5 --v 6.1'
  },
  {
    id: 'flux',
    name: 'FLUX.1 Schnell / Dev',
    category: 'Image',
    categoryId: 'image',
    pricing: 'مجاني',
    tagline: 'النموذج المفتوح الأكثر دقة في رسم الأيدي والملامح البشرية',
    description: 'نموذج ثوري مفتوح المصدر يتفوق في فهم الأوصاف الدقيقة ورسم التفاصيل الصعبة كالأصابع والوجوه دون تشوهات.',
    bestFor: 'صور البشر الواقعية، الصور السريعة للمواقع، والاستخدام المجاني',
    websiteUrl: 'https://blackforestlabs.ai',
    rating: 4.8,
    samplePrompt: 'Close-up portrait of a young artisan working in a traditional workshop, natural skin texture, bokeh background.'
  },
  {
    id: 'ideogram',
    name: 'Ideogram 2.0',
    category: 'Image',
    categoryId: 'image',
    pricing: 'فريميوم',
    tagline: 'أفضل أداة في العالم لرسم النصوص والكلمات المطبوعة داخل الصور',
    description: 'ينهي مشكلة النصوص المشوهة داخل الصور، ويتيح كتابة شعارات وعناوين واضحة بدقة 100% باللغتين العربية والإنجليزية.',
    bestFor: 'تصميم التيشرتات، البوسترات الإعلانية، والشعارات التيبوغرافية',
    websiteUrl: 'https://ideogram.ai',
    rating: 4.7,
    samplePrompt: 'A trendy street style coffee cup with bold typography label "CASABLANCA VIBES", neon accents.'
  },
  {
    id: 'kling',
    name: 'Kling AI 2.0',
    category: 'Video',
    categoryId: 'video',
    pricing: 'فريميوم',
    tagline: 'أقوى نموذج صيني لتوليد مقاطع الفيديو بحركات فيزيائية واقعية جداً',
    description: 'يولد لقطات فيديو بطول 5 إلى 10 ثوانٍ مع محاكاة دقيقة للجاذبية وحركة الرياح والأقمشة والوجوه التعبيرية.',
    bestFor: 'إعلانات التيك توك والريلز، تحريك صور المنتجات، ومقاطع الـ B-Roll',
    websiteUrl: 'https://klingai.org',
    badge: 'تريند الفيديو',
    rating: 4.8,
    samplePrompt: 'Drone shot descending smoothly into a vibrant coastal city sunset, realistic water ripples, 4k 60fps.'
  },
  {
    id: 'runway',
    name: 'Runway Gen-3 Alpha',
    category: 'Video',
    categoryId: 'video',
    pricing: 'فريميوم',
    tagline: 'المنصة السينمائية الأولى للمخرجين وصناع الإعلانات التلفزيونية',
    description: 'تحكم احترافي تام بزوايا الكاميرا، وسرعة الحركة، وانتقالات المشاهد، مع إمكانية تحويل الفيديو إلى فيديو آخر.',
    bestFor: 'المؤثرات البصرية الفائقة، اللقطات الدرامية، والإعلانات الكبرى',
    websiteUrl: 'https://runwayml.com',
    rating: 4.7
  },
  {
    id: 'cursor',
    name: 'Cursor IDE',
    category: 'Coding & Web',
    categoryId: 'development',
    pricing: 'فريميوم',
    tagline: 'محرر البرمجة رقم 1 عالمياً المدعوم بالذكاء الاصطناعي من الجذور',
    description: 'مبني على VS Code ويتيح لك التعديل البرمجي عبر عدة ملفات في وقت واحد، وتصحيح الأخطاء بمجرد قراءة مخرجات الكونسول.',
    bestFor: 'تطوير المواقع والتطبيقات، حل المشاكل البرمجية، وتسريع العمل 5 أضعاف',
    websiteUrl: 'https://cursor.com',
    badge: 'اختيار المطورين',
    rating: 5.0
  },
  {
    id: 'v0',
    name: 'v0.dev by Vercel',
    category: 'Coding & Web',
    categoryId: 'development',
    pricing: 'فريميوم',
    tagline: 'تحويل الأفكار والـ Prompts إلى واجهات React و Tailwind نقية فوراً',
    description: 'تكتب ما تريد، فيقوم بتوليد شاشات وتطبيقات تفاعلية متجاوبة وجميلة وقابلة للنسخ المباشر إلى مشروعك.',
    bestFor: 'تصميم الواجهات الحديثة، صفحات الهبوط، ومكونات الـ Dashboard',
    websiteUrl: 'https://v0.dev',
    rating: 4.9
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'Audio & Voice',
    categoryId: 'audio',
    pricing: 'فريميوم',
    tagline: 'الصوت البشري الأكثر إقناعاً مع استنساخ النبرات والمشاعر',
    description: 'يحول أي نص إلى تعليق صوتي فخم لا يمكن تمييزه عن الصوت البشري، مع دعم ممتاز للهجات العربية واستنساخ صوتك الخاص.',
    bestFor: 'التعليق الصوتي للإعلانات، البودكاست، الدوبلاج، وتطبيقات الهاتف',
    websiteUrl: 'https://elevenlabs.io',
    badge: 'الأعلى نقاءً',
    rating: 4.9
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'Research',
    categoryId: 'research',
    pricing: 'مجاني',
    tagline: 'محرك البحث الأذكى الذي يغنيك عن جوجل مع مصادر موثوقة وروابط مباشرة',
    description: 'يقرأ مئات الصفحات ويمنحك إجابة مركزة ومفصلة مع أرقام وهوامش تؤدي للمصادر الأصلية المباشرة.',
    bestFor: 'أبحاث السوق، التحقق من المعلومات، والتقارير الأكاديمية والمهنية',
    websiteUrl: 'https://perplexity.ai',
    badge: 'بديل جوجل',
    rating: 4.9
  },
  {
    id: 'make',
    name: 'Make.com',
    category: 'Automation & E-com',
    categoryId: 'automation',
    pricing: 'فريميوم',
    tagline: 'الأتمتة البصرية لربط أكثر من 1500 تطبيق بدون كتابة كود',
    description: 'اربط متجرك مع Google Sheets، و WhatsApp، و Gmail، وأتمت مهامك اليومية كلياً لتوفير عشرات الساعات.',
    bestFor: 'أتمتة التجارة الإلكترونية، إرسال الإشعارات، وتزامن البيانات التلقائي',
    websiteUrl: 'https://make.com',
    rating: 4.8
  },
  {
    id: 'suno',
    name: 'Suno AI',
    category: 'Audio & Voice',
    categoryId: 'audio',
    pricing: 'فريميوم',
    tagline: 'توليد أغانٍ كاملة وموسيقى تصويرية من مجرد فكرة نصية',
    description: 'يولد مقطوعات وأغانٍ كاملة بكلمات وألحان وتوزيع موسيقي فخم في جميع الأنماط الموسيقية وبدون حقوق ملكية.',
    bestFor: 'الموسيقى التصويرية للفيديوهات، الفواصل الإعلانية، والإبداع الفني',
    websiteUrl: 'https://suno.com',
    rating: 4.8
  },
  {
    id: 'deepseek',
    name: 'DeepSeek V3 & R1',
    category: 'General AI',
    categoryId: 'general-ai',
    pricing: 'مجاني',
    tagline: 'ثورة النماذج الاستدلالية المفتوحة بتكلفة تشغيل تقترب من الصفر',
    description: 'نموذج تفكير واستدلال مكافئ لأقوى النماذج المدفوعة، متاح للتشغيل المحلي ومجاناً عبر الويب وبسرعة فائقة.',
    bestFor: 'الرياضيات، المنطق المعقد، التحليل الخوارزمي، والبرمجة',
    websiteUrl: 'https://chat.deepseek.com',
    badge: 'مفتوح المصدر',
    rating: 4.8
  },
  {
    id: 'capcut',
    name: 'CapCut AI',
    category: 'Video',
    categoryId: 'video',
    pricing: 'مجاني',
    tagline: 'تطبيق المونتاج الأكثر شعبية مع ميزات الذكاء الاصطناعي المجانية',
    description: 'إزالة الخلفيات بضغطة زر، ترجمة تلقائية للكلام بخطوط متحركة، وتعديل سرعة المشاهد التلقائي.',
    bestFor: 'صناع المحتوى على تيك توك، ريلز إنستغرام، وشورتس يوتيوب',
    websiteUrl: 'https://capcut.com',
    rating: 4.7
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    category: 'Video',
    categoryId: 'video',
    pricing: 'فريميوم',
    tagline: 'إنشاء مقدم محتوى افتراضي وشخصيات ناطقة واقعية بدقة 4K',
    description: 'يصنع شخصيات تتحدث بطبيعية تامة وتحرك شفتيها وتتفاعل بحركات الرأس واليدين دون الحاجة للظهور بنفسك.',
    bestFor: 'الفيديوهات التعليمية، العروض التقديمية للشركات، والإعلانات المقنعة',
    websiteUrl: 'https://heygen.com',
    rating: 4.8
  }
];
