export interface PromptTemplate {
  id: string;
  title: string;
  category: 'تسويق' | 'تجارة إلكترونية' | 'صور وتصميم' | 'فيديو' | 'برمجة ومواقع' | 'سوشيال ميديا';
  toolTarget: string;
  template: string;
  variables: { name: string; label: string; defaultValue: string }[];
  description: string;
  copiedCount?: number;
}

export const PROMPTS_DATA: PromptTemplate[] = [
  {
    id: 'ecom-hook',
    title: '5 هوكات إعلانية نارية لمنتج تجارة إلكترونية بالدارجة',
    category: 'تسويق',
    toolTarget: 'Claude 3.7 / ChatGPT',
    description: 'يولد لك 5 هوكات قوية للمشهد الأول في إعلانات الريلز وتيك توك تمنع الزبون من التمرير وتدفعه للمشاهدة.',
    template: 'أنت خبير إعلانات رائد في التجارة الإلكترونية بالمغرب. لدي منتج اسمه [{product_name}] يحل مشكلة [{main_problem}] لدى فئة [{target_audience}]. اكتب لي 5 هوكات (أول 3 ثوانٍ) بالدارجة المغربية السلسة وغير المبتذلة: هوك مبني على الفضول، هوك مبني على صدمة إحصائية، هوك مبني على خطأ شائع، هوك مبني على مقارنة، وهوك مبني على قصة شخصية سريعة. كل هوك في سطر واحد مركز.',
    variables: [
      { name: 'product_name', label: 'اسم المنتج', defaultValue: 'وسادة طبية لتصحيح العمود الفقري' },
      { name: 'main_problem', label: 'المشكل الرئيسي', defaultValue: 'آلام الظهر والرقبة عند الجلوس لساعات طويلة' },
      { name: 'target_audience', label: 'الجمهور المستهدف', defaultValue: 'الموظفون وسائقو السيارات والطلبة' }
    ]
  },
  {
    id: 'studio-product-photo',
    title: 'صورة منتوج فاخرة لـ Midjourney و FLUX',
    category: 'صور وتصميم',
    toolTarget: 'Midjourney v6.1 / FLUX.1',
    description: 'برومبت فوتوغرافي عالي الدقة يولد لقطة استوديو تجارية تبهر الزبائن وتعطي انطباع البراند الفاخرة.',
    template: 'Commercial luxury studio product photography of [{product_desc}], placed on an organic [{surface_material}], surrounded by minimal [{decor_elements}], directional soft morning golden hour lighting creating delicate reflections, shallow depth of field, 8k resolution, editorial Vogue advertising standard, photorealistic --ar 4:5 --v 6.1',
    variables: [
      { name: 'product_desc', label: 'وصف المنتج الدقيق', defaultValue: 'an artisanal organic argan oil glass bottle with golden dropper' },
      { name: 'surface_material', label: 'السطح أو الخلفية', defaultValue: 'textured raw beige travertine stone with gentle natural water droplets' },
      { name: 'decor_elements', label: 'عناصر الديكور', defaultValue: 'subtle dry botanical wheat stalks and soft palm tree shadows' }
    ]
  },
  {
    id: 'landing-page-copy',
    title: 'نص صفحة هبوط كاملة (Landing Page) للدفع عند الاستلام',
    category: 'تجارة إلكترونية',
    toolTarget: 'Claude 3.7',
    description: 'هيكل متكامل لصفحة هبوط تركز على الإقناع ورفع معدل التحويل (Conversion Rate) مع حوافز الشراء.',
    template: 'اكتب لي محتوى صفحة هبوط مقنعة لمتجر إلكتروني يبيع منتج [{product_name}] بسعر [{price}] درهم مع الدفع عند الاستلام في المغرب. المحتوى يجب أن يتضمن: 1. عنوان رئيسي يخطف الانتباه 2. فقرة توضح المعاناة قبل المنتج والشعور بالراحة بعده 3. أربع مزايا عملية فريدة مع شروحات مقنعة 4. عرض تشجيعي: اشتري 2 واحصل على خصم وتوصيل مجاني 5. قسم الأسئلة الشائعة (مدة التوصيل، سياسة التبديل والضمان). النبرة: دارجة مغربية مهذبة وواضحة جداً.',
    variables: [
      { name: 'product_name', label: 'اسم المنتج', defaultValue: 'مفرمة خضار ذكية قابلة للشحن' },
      { name: 'price', label: 'سعر البيع المقترح', defaultValue: '199' }
    ]
  },
  {
    id: 'tiktok-reel-script',
    title: 'سكريبت ريلز تيك توك فيرال (30 ثانية)',
    category: 'فيديو',
    toolTarget: 'ChatGPT 4o / Claude',
    description: 'سيناريو مقسم إلى لقطات بصرية وتعليق صوتي مناسب للنشر على إنستغرام وتيك توك.',
    template: 'أريد سكريبت فيديو ريلز مدته 30 ثانية حول موضوع [{topic}]. قم بتقسيم السكريبت إلى جدول يحتوي على عمودين: العمود الأول (ماذا يظهر على الشاشة - لقطات الفيديو B-Roll) والعمود الثاني (التعليق الصوتي بالدارجة المغربية كلمة بكلمة). النبرة: سريعة ومشوقة بدون مقدمات طويلة.',
    variables: [
      { name: 'topic', label: 'موضوع الفيديو', defaultValue: '3 أدوات ذكاء اصطناعي كتعاونك تبدا بيع أونلاين بلا رأس مال' }
    ]
  },
  {
    id: 'v0-react-component',
    title: 'برومبت بناء واجهة مستخدم حديثة بـ v0.dev',
    category: 'برمجة ومواقع',
    toolTarget: 'v0.dev / Bolt.new',
    description: 'يولد لك كود مكون React متكامل مع Tailwind CSS يدعم الشاشات الصغيرة والكبيرة واتجاه اليمين لليسار RTL.',
    template: 'Build a production-ready, highly polished React TypeScript component for [{component_goal}]. Design requirements: Support dir="rtl" for Arabic, use Tailwind CSS with soft sky blue (#38bdf8) and rose pink (#f472b6) accents, dark navy (#0f172a) typography, smooth hover transitions (card-hover), accessible buttons with active states, clean unboxed metadata with dot separators, and zero unnecessary visual clutter.',
    variables: [
      { name: 'component_goal', label: 'هدف المكون', defaultValue: 'an interactive pricing calculator with slider and monthly/yearly discount toggle' }
    ]
  },
  {
    id: 'seo-article-rank1',
    title: 'مقال SEO متصدر متوافق مع خوارزميات Google',
    category: 'سوشيال ميديا',
    toolTarget: 'Claude 3.7',
    description: 'دليل شامل يغطي نية بحث المستخدم بنسبة 100% لتصدر الصفحة الأولى في جوجل.',
    template: 'أنا بصدد كتابة مقال تفصيلي لاستهداف الكلمة المفتاحية: [{keyword}] الموجهة لجمهور [{audience}]. اكتب لي المقال كاملاً مراعياً: 1. عنوان رئيسي جذاب H1 أقل من 60 حرفاً 2. فقرة افتتاحية تجيب على نية البحث مباشرة في أول 50 كلمة 3. عناوين فرعية H2 و H3 مقسمة منطقياً 4. نصائح عملية قابلة للتطبيق الفوري 5. خاتمة تلخص أهم خطوة يجب اتخاذها الآن. تجنب المصطلحات الخشبية الركيكة.',
    variables: [
      { name: 'keyword', label: 'الكلمة المفتاحية', defaultValue: 'أفضل أدوات الذكاء الاصطناعي للمبتدئين 2026' },
      { name: 'audience', label: 'الجمهور المستهدف', defaultValue: 'الشباب والمهتمين بالعمل الحر والربح من الإنترنت' }
    ]
  }
];
