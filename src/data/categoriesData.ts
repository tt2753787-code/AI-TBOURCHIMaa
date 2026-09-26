export interface CategoryItem {
  id: string;
  name: string;
  arabicName: string;
  emoji: string;
  description: string;
  bgTint: string;
  textColor: string;
  accentBorder: string;
  toolCount: number;
  featuredTools: string[];
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'general-ai',
    name: 'General AI',
    arabicName: 'الذكاء الاصطناعي العام',
    emoji: '💬',
    description: 'المساعدات الذكية للكتابة والتفكير والعمل اليومي بكفاءة عالية.',
    bgTint: 'bg-sky-50',
    textColor: 'text-sky-700',
    accentBorder: 'border-sky-200',
    toolCount: 12,
    featuredTools: ['ChatGPT', 'Claude 3.7', 'DeepSeek', 'Gemini']
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    arabicName: 'الوكلاء الذاتيون',
    emoji: '🤖',
    description: 'خلي الـ AI ينفذ المهام المترابطة والبحث التلقائي بدل ما يعطيك جواب فقط.',
    bgTint: 'bg-purple-50',
    textColor: 'text-purple-700',
    accentBorder: 'border-purple-200',
    toolCount: 9,
    featuredTools: ['Make.com', 'n8n', 'Devin', 'OpenAI Swarm']
  },
  {
    id: 'research',
    name: 'Research',
    arabicName: 'البحث والتحليل',
    emoji: '🔍',
    description: 'البحث المعمق، التحليل الاستراتيجي، وجمع المصادر والبيانات الموثقة.',
    bgTint: 'bg-blue-50',
    textColor: 'text-blue-700',
    accentBorder: 'border-blue-200',
    toolCount: 8,
    featuredTools: ['Perplexity AI', 'Consensus', 'Genspark', 'NotebookLM']
  },
  {
    id: 'image',
    name: 'Image',
    arabicName: 'توليد وتصميم الصور',
    emoji: '🎨',
    description: 'صناعة وتعديل الصور، إزالة الخلفيات، وصنع تصاميم المنتجات بجودة 4K.',
    bgTint: 'bg-pink-50',
    textColor: 'text-pink-700',
    accentBorder: 'border-pink-200',
    toolCount: 14,
    featuredTools: ['Midjourney', 'FLUX.1', 'Ideogram', 'Recraft']
  },
  {
    id: 'video',
    name: 'Video',
    arabicName: 'إنتاج ومونتاج الفيديو',
    emoji: '🎬',
    description: 'صناعة الفيديو الترويجي، إعلانات المنتجات، ومقاطع الـ Reels في ثواني.',
    bgTint: 'bg-rose-50',
    textColor: 'text-rose-700',
    accentBorder: 'border-rose-200',
    toolCount: 11,
    featuredTools: ['Kling AI', 'Runway Gen-3', 'Luma Dream Machine', 'CapCut']
  },
  {
    id: 'marketing',
    name: 'Marketing',
    arabicName: 'التسويق والإعلانات',
    emoji: '📈',
    description: 'صياغة الإعلانات، تحسين السيو (SEO)، وإستراتيجيات النمو والمبيعات.',
    bgTint: 'bg-amber-50',
    textColor: 'text-amber-700',
    accentBorder: 'border-amber-200',
    toolCount: 15,
    featuredTools: ['Claude 3.7', 'Meta Ad Library', 'TikTok Creative Center', 'ManyChat']
  },
  {
    id: 'development',
    name: 'Coding & Web',
    arabicName: 'البرمجة والمواقع',
    emoji: '💻',
    description: 'بناء مواقع ويب، وتطبيقات ذكية، وكتابة الأكواد بـ Prompts بسيطة.',
    bgTint: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    accentBorder: 'border-emerald-200',
    toolCount: 10,
    featuredTools: ['Cursor', 'v0.dev', 'Lovable', 'Bolt.new']
  },
  {
    id: 'audio',
    name: 'Audio & Voice',
    arabicName: 'الصوتيات والموسيقى',
    emoji: '🎙️',
    description: 'الدوبلاج والتعليق الصوتي الواقعي بالدارجة وتوليد الموسيقى والأغاني.',
    bgTint: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    accentBorder: 'border-indigo-200',
    toolCount: 8,
    featuredTools: ['ElevenLabs', 'Suno AI', 'Udio', 'Adobe Podcast']
  },
  {
    id: 'automation',
    name: 'Automation & E-com',
    arabicName: 'الأتمتة والتجارة',
    emoji: '⚙️',
    description: 'ربط الأنظمة، إدارة المتاجر الإلكترونية، وأتمتة الطلبيات وخدمة الزبناء.',
    bgTint: 'bg-teal-50',
    textColor: 'text-teal-700',
    accentBorder: 'border-teal-200',
    toolCount: 9,
    featuredTools: ['Make.com', 'YouCan', 'Shopify', 'WhatsApp API']
  }
];
