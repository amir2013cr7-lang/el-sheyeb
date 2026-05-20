/* ============================================
   EL-SHAYEB · Front-end behaviors
   ============================================ */

// ---------- TRANSLATIONS ----------
const I18N = {
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.offers': 'Offers',
    'nav.location': 'Find Us',
    'nav.reserve': 'Reserve',
    'hero.eyebrow': 'Charcoal · Lebanese · Since 1987',
    'hero.tagline.lead': 'Grilled to perfection.',
    'hero.tagline.body': 'Served with soul. A Lebanese chicken house with a fire that never sleeps — open late, slow-marinated, fast-fired.',
    'hero.cta.order': 'Order Now',
    'hero.cta.reserve': 'Reserve a Table',
    'hero.meta.open': 'Open Now · Until 02:00',
    'hero.meta.tonight': 'Tonight · Beirut',
    'hero.meta.dish': 'Featured · Shish Tawook',
    'scroll': 'Scroll to feast',
    'values.eyebrow': 'Why El-Shayeb',
    'values.title': 'Four reasons the line forms before sunset.',
    'values.1.t': 'Charcoal Grilled', 'values.1.ar': 'مشوي على الفحم', 'values.1.d': 'Real wood embers. Nothing else. The smoke is the seasoning.',
    'values.2.t': 'Family Recipes', 'values.2.ar': 'وصفات العائلة', 'values.2.d': 'Three generations of marinades, salt, and a little secret.',
    'values.3.t': 'Fresh Daily',    'values.3.ar': 'طازج يوميًا',     'values.3.d': 'Chicken in by sunrise. Anything not sold by close, never sold.',
    'values.4.t': 'Lebanese Heart', 'values.4.ar': 'قلب لبناني',     'values.4.d': 'Loud, generous, late-night. The way Beirut eats best.',
    'featured.eyebrow': 'Signature Menu',
    'featured.title': 'Six plates that built the line.',
    'featured.cta': 'See full menu',
    'offer.eyebrow': 'Limited · Ends in',
    'offer.title': 'Family Feast — 4 plates, one fire.',
    'offer.desc': 'Two whole farrouj, four sides, garlic toum, fresh bread, two Pepsi. Feeds a real Beirut family of four. (Or two hungry ones.)',
    'offer.cta.order': 'Order the feast',
    'offer.cta.terms': 'Terms',
    'story.eyebrow': 'Our Story',
    'story.pull': 'We don\'t just grill chicken — we keep a fire lit for the neighborhood.',
    'story.pull.ar': 'ما منشوي دجاج وبس — منولّع نار للحي.',
    'story.body1': 'El-Shayeb started as a single charcoal grill in Ras El Nabeh, Beirut in 1987, run by a quiet old man (the "Shayeb" himself) who refused to use gas. Three generations later, the grill is bigger — but the rule is the same.',
    'story.body2': 'No shortcuts. No microwaves. No apologies for the smoke.',
    'story.cta': 'Read our story',
    'story.sig.who': 'Jad El-Shayeb',
    'story.sig.role': 'Third generation · Head of fire',
    'reviews.eyebrow': 'They Came Back',
    'reviews.title': 'Six honest reviews. No filter.',
    'location.eyebrow': 'Find the fire',
    'location.title': 'In the heart of Ras El Nabeh.',
    'location.address.label': 'Address', 'location.address.value': 'Ras El Nabeh, Beirut, Lebanon',
    'location.hours.label': 'Hours',     'location.hours.value': 'Daily · 12:00 — 02:00',
    'location.phone.label': 'Call',      'location.phone.value': '+961 78 705 450',
    'location.action': 'Get directions',
    'location.pin.title': 'El-Shayeb · Ras El Nabeh',
    'location.pin.sub': 'Open · Walk-in',
    'newsletter.discount': '10% OFF',
    'newsletter.title': 'Your first order, on the house (almost).',
    'newsletter.desc': 'Drop your email and we\'ll send a code for 10% off your first order — plus the occasional late-night deal.',
    'newsletter.placeholder': 'your@email.com',
    'newsletter.cta': 'Claim it',
    'footer.tagline': 'A Lebanese chicken house with a fire that never sleeps. Ras El Nabeh, Beirut since 1987.',
    'footer.col1': 'Explore', 'footer.col2': 'Visit', 'footer.col3': 'Follow',
    'footer.rights': '© 2026 EL-SHAYEB · ALL FIRES RESERVED',
    'menu.title': 'The Menu',
    'menu.title.ar': 'القائمة',
    'menu.intro': 'Typography-first. Photos lie. Read it, then taste it — fifty plates across eight categories, hand-marinated, charcoal-fired, hot in 11 minutes flat.',
    'menu.search': 'Search the menu…',
    'menu.filter': 'Filter',
    'menu.filter.all': 'All', 'menu.filter.spicy': 'Spicy', 'menu.filter.veg': 'Vegetarian', 'menu.filter.popular': 'Most Popular', 'menu.filter.new': 'New',
    'cart.title': 'Your Order',
    'cart.empty.title': 'Empty plate.',
    'cart.empty.body': 'Browse the menu and start the fire.',
    'cart.empty.cta': 'Browse menu',
    'cart.subtotal': 'Subtotal', 'cart.delivery': 'Delivery', 'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'order.items': 'items', 'order.view': 'View order'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.menu': 'القائمة',
    'nav.about': 'قصتنا',
    'nav.offers': 'العروض',
    'nav.location': 'تجدنا هنا',
    'nav.reserve': 'احجز طاولة',
    'hero.eyebrow': 'فحم · لبناني · منذ ١٩٨٧',
    'hero.tagline.lead': 'مشوي بإتقان.',
    'hero.tagline.body': 'يُقدَّم بروح لبنانية. بيت دجاج لبناني بنار ما بتنام — مفتوح حتى الفجر، متبّل ببطء، مشوي بسرعة.',
    'hero.cta.order': 'اطلب الآن',
    'hero.cta.reserve': 'احجز طاولة',
    'hero.meta.open': 'مفتوح · حتى ٠٢:٠٠',
    'hero.meta.tonight': 'الليلة · بيروت',
    'hero.meta.dish': 'الطبق المميز · شيش طاووق',
    'scroll': 'انزل للوليمة',
    'values.eyebrow': 'لماذا الشايب',
    'values.title': 'أربعة أسباب يصطف فيها الناس قبل الغروب.',
    'values.1.t': 'مشوي على الفحم', 'values.1.ar': 'CHARCOAL GRILLED', 'values.1.d': 'فحم خشب حقيقي. لا غاز. الدخان هو التتبيلة.',
    'values.2.t': 'وصفات العائلة', 'values.2.ar': 'FAMILY RECIPES', 'values.2.d': 'ثلاثة أجيال من التوابل، الملح، وسر صغير.',
    'values.3.t': 'طازج يوميًا',   'values.3.ar': 'FRESH DAILY',     'values.3.d': 'الدجاج يصل عند الفجر. ما يبقى عند الإغلاق، لا يُباع.',
    'values.4.t': 'قلب لبناني',    'values.4.ar': 'LEBANESE HEART',  'values.4.d': 'صاخب، كريم، حتى آخر الليل. بيروت بتاكل هيك أحسن.',
    'featured.eyebrow': 'الأطباق المميزة',
    'featured.title': 'ستة أطباق صنعت الطابور.',
    'featured.cta': 'كل القائمة',
    'offer.eyebrow': 'محدود · ينتهي خلال',
    'offer.title': 'وليمة العائلة — ٤ أطباق، نار واحدة.',
    'offer.desc': 'فرّوجين كاملين، أربعة مقبلات، توم، خبز طازج، بيبسي. يكفي عائلة بيروتية حقيقية من أربعة. (أو اثنين جوعى.)',
    'offer.cta.order': 'اطلب الوليمة',
    'offer.cta.terms': 'الشروط',
    'story.eyebrow': 'قصتنا',
    'story.pull': 'ما منشوي دجاج وبس — منولّع نار للحي.',
    'story.pull.ar': 'We don\'t just grill chicken — we keep a fire lit for the neighborhood.',
    'story.body1': 'بدأ الشايب كمشواة فحم واحدة في رأس النبع، بيروت عام ١٩٨٧، يُديرها عجوز هادئ ("الشايب" نفسه) رفض استخدام الغاز. بعد ثلاثة أجيال، صارت المشواة أكبر — والقاعدة لم تتغيّر.',
    'story.body2': 'لا اختصارات. لا ميكروويف. ولا اعتذار عن الدخان.',
    'story.cta': 'اقرأ القصة',
    'story.sig.who': 'جاد الشايب',
    'story.sig.role': 'الجيل الثالث · مسؤول النار',
    'reviews.eyebrow': 'رجعوا',
    'reviews.title': 'ست مراجعات صادقة. بدون فلاتر.',
    'location.eyebrow': 'تجد النار',
    'location.title': 'في قلب رأس النبع.',
    'location.address.label': 'العنوان', 'location.address.value': 'رأس النبع، بيروت، لبنان',
    'location.hours.label': 'الساعات',   'location.hours.value': 'يوميًا · ١٢:٠٠ — ٠٢:٠٠',
    'location.phone.label': 'اتصل',     'location.phone.value': '+٩٦١ ٧٨ ٧٠٥ ٤٥٠',
    'location.action': 'احصل على الاتجاهات',
    'location.pin.title': 'الشايب · رأس النبع',
    'location.pin.sub': 'مفتوح · ادخل',
    'newsletter.discount': 'خصم ١٠٪',
    'newsletter.title': 'أول طلبك، على حساب البيت (تقريبًا).',
    'newsletter.desc': 'اترك بريدك وسنرسل لك كود خصم ١٠٪ على أول طلب — مع عروض آخر الليل من حين لآخر.',
    'newsletter.placeholder': 'بريدك@الإلكتروني.com',
    'newsletter.cta': 'استلم',
    'footer.tagline': 'بيت دجاج لبناني بنار ما بتنام. رأس النبع، بيروت منذ ١٩٨٧.',
    'footer.col1': 'استكشف', 'footer.col2': 'زورنا', 'footer.col3': 'تابعنا',
    'footer.rights': '© ٢٠٢٦ الشايب · جميع النيران محفوظة',
    'menu.title': 'القائمة',
    'menu.title.ar': 'THE MENU',
    'menu.intro': 'الخط أولًا. الصور تكذب. اقرأ ثم تذوّق — خمسون طبقًا عبر ثماني فئات، متبّلة باليد، مشوية بالفحم، ساخنة خلال ١١ دقيقة.',
    'menu.search': 'ابحث في القائمة…',
    'menu.filter': 'تصفية',
    'menu.filter.all': 'الكل', 'menu.filter.spicy': 'حار', 'menu.filter.veg': 'نباتي', 'menu.filter.popular': 'الأشهر', 'menu.filter.new': 'جديد',
    'cart.title': 'طلبك',
    'cart.empty.title': 'طبق فارغ.',
    'cart.empty.body': 'تصفّح القائمة وأشعل النار.',
    'cart.empty.cta': 'القائمة',
    'cart.subtotal': 'المجموع', 'cart.delivery': 'التوصيل', 'cart.total': 'الإجمالي',
    'cart.checkout': 'إتمام الطلب',
    'order.items': 'أطباق', 'order.view': 'عرض الطلب'
  }
};

// Category labels
const CAT_LABEL = {
  offers:     { en: 'Offers & Deals',      ar: 'العروض',   sub: '01' },
  grilled:    { en: 'Grilled Chicken',     ar: 'مشاوي', sub: '02' },
  broasted:   { en: 'Broasted',            ar: 'بروستد', sub: '03' },
  sandwiches: { en: 'Sandwiches',          ar: 'سندويشات', sub: '04' },
  plates:     { en: 'Plates',              ar: 'وجبات', sub: '05' },
  sides:      { en: 'Sides & Appetizers',  ar: 'مقبلات', sub: '06' },
  salads:     { en: 'Salads',              ar: 'سلطات', sub: '07' },
  drinks:     { en: 'Drinks',              ar: 'مشروبات', sub: '08' },
  desserts:   { en: 'Desserts',            ar: 'حلويات', sub: '09' }
};

// Sample menu data (typed structure mirrors /data/menu.ts)
const MENU = [
  // Offers
  { id:'o1', category:'offers', name:{en:'Family Feast',           ar:'وليمة العائلة'},     desc:{en:'Two whole farrouj, four sides, garlic toum, fresh bread, two Pepsi. Feeds four hungry Beirutis.',                              ar:'فرّوجين كاملين، أربعة مقبلات، توم، خبز طازج، بيبسي.'}, lbp:1750000, usd:19.50, tags:['popular','deal'], original:{lbp:2400000, usd:26.80} },
  { id:'o2', category:'offers', name:{en:'Lunch Combo',             ar:'كومبو الغداء'},      desc:{en:'Any saj wrap + hand-cut fries + soft drink. Weekday lunch only, 12pm–4pm.',                                                   ar:'أي لفة صاج + بطاطا + مشروب. أيام الأسبوع، ١٢ - ٤.'}, lbp:320000, usd:3.60, tags:['new','deal'], original:{lbp:395000, usd:4.45} },
  { id:'o3', category:'offers', name:{en:'Mixed Grill for Two',     ar:'مشاوي لشخصين'},     desc:{en:'Tawook + kafta + farrouj, rice, fattoush, toum, two drinks. Date-night fire.',                                              ar:'طاووق + كفتة + فرّوج، رز، فتوش، توم، مشروبين.'}, lbp:980000, usd:11.00, tags:['deal'], original:{lbp:1250000, usd:14.00} },
  { id:'o4', category:'offers', name:{en:'Student Quarter',         ar:'عرض الطلاب'},         desc:{en:'Broasted quarter + fries + Pepsi. Show your student ID at pickup.',                                                          ar:'ربع بروستد + بطاطا + بيبسي. اظهر بطاقة الطالب.'}, lbp:280000, usd:3.10, tags:['popular','deal'], original:{lbp:350000, usd:3.95} },
  // Grilled
  { id:'g1', category:'grilled',    name:{en:'Shish Tawook',          ar:'شيش طاووق'},     desc:{en:'Charcoal-grilled chicken breast cubes, garlic-yogurt marinated 24h, served with toum and warm bread.',  ar:'قطع صدر دجاج مشوية على الفحم، متبّلة بالثوم واللبن ٢٤ ساعة، مع توم وخبز ساخن.'}, lbp:295000, usd:3.30, tags:['popular'] },
  { id:'g2', category:'grilled',    name:{en:'Farrouj Meshwi',         ar:'فرّوج مشوي'},     desc:{en:'Half chicken, slow-marinated, hot off the embers. The original. The whole reason.', ar:'نصف دجاجة، متبّلة ببطء، ساخنة من الجمر. الأصل. السبب.'}, lbp:520000, usd:5.80, tags:['popular'] },
  { id:'g3', category:'grilled',    name:{en:'Shish Kafta',            ar:'شيش كفتة'},       desc:{en:'Hand-minced chicken kafta with parsley, onion, seven-spice. Skewered, fired, never overdone.', ar:'كفتة دجاج مفرومة باليد مع بقدونس، بصل، سبع بهارات. مشوية بإتقان.'}, lbp:340000, usd:3.80, tags:[] },
  { id:'g4', category:'grilled',    name:{en:'Spicy Tawook',           ar:'طاووق حار'},      desc:{en:'Shish Tawook with our house chili oil and red-pepper rub. Sweat optional.', ar:'شيش طاووق مع زيت الفلفل البيتي وفرك الفلفل الأحمر.'}, lbp:310000, usd:3.50, tags:['spicy'] },
  // Broasted
  { id:'b1', category:'broasted',   name:{en:'Broasted Quarter',       ar:'ربع بروستد'},     desc:{en:'Pressure-fried, herb-brined chicken quarter. Crackling skin. No survivors.', ar:'ربع دجاج مقلي تحت الضغط، منقوع بالأعشاب. قشرة مقرمشة.'}, lbp:260000, usd:2.90, tags:['popular'] },
  { id:'b2', category:'broasted',   name:{en:'Broasted Half',          ar:'نص بروستد'},      desc:{en:'Half a bird, full commitment. Comes with garlic toum and a wedge of lemon you\'ll need.', ar:'نصف دجاجة، التزام كامل. مع توم وقطعة ليمون.'}, lbp:460000, usd:5.20, tags:[] },
  { id:'b3', category:'broasted',   name:{en:'Broasted Wings (8)',     ar:'أجنحة بروستد ٨'}, desc:{en:'Eight pieces. Either you share or you don\'t. Choose: classic, BBQ, or fire.', ar:'ثماني قطع. تشارك أو لا. اختر: كلاسيك، باربكيو، أو نار.'}, lbp:280000, usd:3.15, tags:['new'] },
  // Sandwiches
  { id:'s1', category:'sandwiches', name:{en:'Tawook Saj Wrap',        ar:'شيش طاووق صاج'},   desc:{en:'Hand-rolled saj bread, tawook, toum, pickles, fries inside. The classic. Eaten standing up.', ar:'خبز صاج باليد، طاووق، توم، مخلل، بطاطا داخل اللفة. كلاسيك.'}, lbp:180000, usd:2.00, tags:['popular'] },
  { id:'s2', category:'sandwiches', name:{en:'Farrouj Shawarma',       ar:'شاورما فرّوج'},    desc:{en:'Marinated chicken stack, shaved fresh, tucked in pita with garlic, tomato, pickle, fries.', ar:'دجاج متبّل، مقطع طازج، في خبز مع ثوم، بندورة، مخلل، بطاطا.'}, lbp:195000, usd:2.20, tags:[] },
  { id:'s3', category:'sandwiches', name:{en:'Spicy Crunch Wrap',      ar:'لفة حارة مقرمشة'},  desc:{en:'Broasted strips, chili mayo, crispy cabbage, pickled chili. Loud.', ar:'شرائح بروستد، مايو حار، ملفوف مقرمش، فلفل مخلل.'}, lbp:210000, usd:2.35, tags:['spicy','new'] },
  { id:'s4', category:'sandwiches', name:{en:'Veggie Mushroom Saj',    ar:'لفة فطر نباتية'},   desc:{en:'Grilled mushroom, halloumi, toum, rocket, sumac onion. For the herbivores.', ar:'فطر مشوي، حلوم، توم، جرجير، بصل بالسماق. للنباتيين.'}, lbp:165000, usd:1.85, tags:['veg'] },
  // Plates
  { id:'p1', category:'plates',     name:{en:'Mixed Grill Plate',      ar:'مشاوي مشكّلة'},   desc:{en:'Tawook + kafta + farrouj + rice + grilled tomato + toum. The full table on one plate.', ar:'طاووق + كفتة + فرّوج + رز + بندورة مشوية + توم.'}, lbp:680000, usd:7.60, tags:['popular'] },
  { id:'p2', category:'plates',     name:{en:'Tawook over Saffron Rice', ar:'طاووق على رز زعفران'}, desc:{en:'Six skewers of tawook, basmati with saffron, almonds, parsley.', ar:'ست أسياخ طاووق، بسمتي بالزعفران، لوز، بقدونس.'}, lbp:440000, usd:4.95, tags:[] },
  { id:'p3', category:'plates',     name:{en:'Farrouj & Fries',        ar:'فرّوج وبطاطا'},    desc:{en:'Whole grilled farrouj, hand-cut fries, toum, pickles. The everyday hero.', ar:'فرّوج مشوي كامل، بطاطا مقطعة باليد، توم، مخلل.'}, lbp:560000, usd:6.25, tags:[] },
  // Sides
  { id:'sd1', category:'sides',     name:{en:'Garlic Toum',            ar:'توم'},           desc:{en:'The reason. White, fluffy, dangerously addictive Lebanese garlic emulsion.', ar:'السبب. أبيض، خفيف، توم لبناني إدماني.'}, lbp:35000, usd:0.40, tags:['veg','popular'] },
  { id:'sd2', category:'sides',     name:{en:'Hand-Cut Fries',         ar:'بطاطا مقلية'},    desc:{en:'Cut every morning. Fried twice. Salt. That\'s it.', ar:'مقطعة كل صباح. مقلية مرتين. ملح. وبس.'}, lbp:95000, usd:1.05, tags:['veg'] },
  { id:'sd3', category:'sides',     name:{en:'Hummus',                 ar:'حمص'},           desc:{en:'Smooth chickpea, tahini, lemon, drizzled oil, warm bread.', ar:'حمص ناعم، طحينة، ليمون، زيت، خبز ساخن.'}, lbp:110000, usd:1.25, tags:['veg'] },
  { id:'sd4', category:'sides',     name:{en:'Spicy Batata Harra',     ar:'بطاطا حرّة'},     desc:{en:'Crispy potato cubes, garlic, coriander, chili. The angry cousin of fries.', ar:'مكعبات بطاطا مقرمشة، ثوم، كزبرة، فلفل حار.'}, lbp:120000, usd:1.35, tags:['veg','spicy'] },
  // Salads
  { id:'sl1', category:'salads',    name:{en:'Fattoush',               ar:'فتوش'},          desc:{en:'Crisp greens, sumac, pomegranate molasses, crunchy bread chips.', ar:'خضار مقرمشة، سماق، دبس رمان، رقائق خبز.'}, lbp:140000, usd:1.55, tags:['veg','popular'] },
  { id:'sl2', category:'salads',    name:{en:'Tabbouleh',              ar:'تبولة'},         desc:{en:'Parsley-first, bulgur-second. The way it should be.', ar:'بقدونس أولًا، برغل ثانيًا. كما يجب.'}, lbp:135000, usd:1.50, tags:['veg'] },
  { id:'sl3', category:'salads',    name:{en:'Grilled Chicken Salad',  ar:'سلطة دجاج مشوي'}, desc:{en:'Mixed leaves, tawook strips, sumac onion, lemon-mustard dressing.', ar:'خضار مشكلة، شرائح طاووق، بصل بالسماق، صلصة ليمون-خردل.'}, lbp:260000, usd:2.90, tags:[] },
  // Drinks
  { id:'dr1', category:'drinks',    name:{en:'Fresh Lemonade w/ Mint', ar:'ليموناضة بالنعنع'}, desc:{en:'Squeezed in-house. Mint from the back garden. Crushed ice.', ar:'معصورة بالبيت. نعنع من الحديقة. ثلج مجروش.'}, lbp:85000, usd:0.95, tags:['veg'] },
  { id:'dr2', category:'drinks',    name:{en:'Ayran',                  ar:'عيران'},          desc:{en:'Salted yogurt drink. The cold-down after the heat.', ar:'لبن مملّح. التهدئة بعد النار.'}, lbp:60000, usd:0.65, tags:['veg'] },
  { id:'dr3', category:'drinks',    name:{en:'Almaza Beer',            ar:'بيرة الماظة'},    desc:{en:'Lebanon\'s own. Cold, simple, perfect with broasted.', ar:'بيرة لبنانية. باردة، بسيطة، مثالية مع البروستد.'}, lbp:140000, usd:1.55, tags:[] },
  { id:'dr4', category:'drinks',    name:{en:'Pepsi',                  ar:'بيبسي'},          desc:{en:'Glass bottle. Ice cold. The Lebanese way.', ar:'قنينة زجاج. باردة. الطريقة اللبنانية.'}, lbp:55000, usd:0.60, tags:[] },
  // Desserts
  { id:'ds1', category:'desserts',  name:{en:'Knafeh w/ Cheese',       ar:'كنافة بالجبنة'},  desc:{en:'Stretchy melted cheese, orange-blossom syrup, crispy noodle top. Hot.', ar:'جبنة ذائبة، قطر ماء زهر، شعيرية مقرمشة. ساخنة.'}, lbp:220000, usd:2.45, tags:['popular'] },
  { id:'ds2', category:'desserts',  name:{en:'Mhalabieh',              ar:'مهلبية'},         desc:{en:'Rose-milk pudding, pistachios. Cold finish.', ar:'مهلبية الورد، فستق حلبي. ختام بارد.'}, lbp:130000, usd:1.45, tags:['veg'] }
];

// Reviews
const REVIEWS = [
  { name: { en: 'Layla A.', ar: 'ليلى أ.' }, date: 'Apr 2026', stars: 5, text: { en: 'The Shish Tawook ruined every other tawook in Beirut for me. The toum alone is worth the trip.', ar: 'الشيش طاووق خرّب كل طاووق ثاني في بيروت بالنسبة لي. التوم لحاله يستاهل الزيارة.' } },
  { name: { en: 'Karim H.', ar: 'كريم ح.' }, date: 'Mar 2026', stars: 5, text: { en: 'Best broasted I\'ve had outside my grandmother\'s kitchen. The wings are dangerous.', ar: 'أحسن بروستد جربته خارج مطبخ تيتي. الأجنحة خطيرة.' } },
  { name: { en: 'Nour S.',  ar: 'نور س.' },  date: 'Mar 2026', stars: 5, text: { en: 'Came at 1AM after a long night out. Hot, fast, and exactly what we needed. The fire really doesn\'t sleep.', ar: 'جينا الساعة الواحدة الصبح بعد سهرة طويلة. ساخن، سريع، وبالضبط شو كنا نحتاج.' } },
  { name: { en: 'Tarek M.', ar: 'طارق م.' }, date: 'Feb 2026', stars: 4, text: { en: 'Family Feast is genuinely enough for four. We took leftovers home. The kafta is the surprise winner.', ar: 'وليمة العائلة فعليًا تكفي أربعة. أخذنا الباقي للبيت. الكفتة فاجأتنا.' } },
  { name: { en: 'Rana K.',  ar: 'رنا ك.' },  date: 'Feb 2026', stars: 5, text: { en: 'Vegetarian here — the mushroom saj is so good I forgot I was being good. Order it.', ar: 'نباتية هون — لفة الفطر طيبة كتير لدرجة نسيت إني نباتية.' } },
  { name: { en: 'Omar D.',  ar: 'عمر د.' },  date: 'Jan 2026', stars: 5, text: { en: 'Third generation, same fire. You can taste the consistency. Don\'t change anything.', ar: 'الجيل الثالث، نفس النار. الاتساق بيبيّن بالطعم. لا تغيروا شي.' } }
];

// ---------- LANGUAGE ----------
function currentLang() { return localStorage.getItem('elshayeb.lang') || 'en'; }
function setLang(lang) {
  localStorage.setItem('elshayeb.lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyI18n();
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}
function applyI18n() {
  const lang = currentLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const v = I18N[lang]?.[key];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const v = I18N[lang]?.[key];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const v = I18N[lang]?.[key];
    if (v !== undefined) el.placeholder = v;
  });
  // Reflow reveals
  document.querySelectorAll('.reveal-words').forEach(splitWords);
  // Re-render dynamic content
  if (window.renderDynamicForLang) window.renderDynamicForLang(lang);
}

// ---------- WORD SPLIT ----------
function splitWords(el) {
  if (!el.dataset.original) el.dataset.original = el.textContent;
  const text = el.dataset.original;
  // For dynamic i18n: regenerate text from current
  el.innerHTML = text.split(' ').map(w => `<span class="word"><span>${w}</span></span>`).join(' ');
}

// ---------- INTERSECTION REVEALS ----------
function setupReveals() {
  // Mark that JS is alive — only now do we apply the hidden-until-revealed state.
  document.documentElement.classList.add('js-reveals');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal-words, .fade-up').forEach(el => io.observe(el));
  // Safety net: force-reveal anything still hidden after 2.5s (e.g. element is already in viewport at load)
  setTimeout(() => {
    document.querySelectorAll('.fade-up:not(.in-view), .reveal-words:not(.in-view)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in-view');
    });
  }, 2500);
}

// ---------- NAV SCROLL ----------
function setupNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------- MOBILE NAV ----------
function setupMobileNav() {
  const btn = document.querySelector('.nav__menu-btn');
  const nav = document.querySelector('.mobile-nav');
  const close = document.querySelector('.mobile-nav__close');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.add('open'));
  close?.addEventListener('click', () => nav.classList.remove('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// ---------- CUSTOM CURSOR ----------
function setupCursor() {
  if (matchMedia('(pointer: coarse)').matches) return;
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 3-7 .5 1.5 1 2.5 2 3 0-2 0-4 0-6z"/></svg>`;
  document.body.appendChild(cursor);
  document.documentElement.classList.add('has-cursor');

  let tx = 0, ty = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  const loop = () => {
    cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener('mouseover', (e) => {
    const t = e.target.closest('a, button, .featured-card, .menu-item, .review, input, .menu-tab, .menu-chip');
    cursor.classList.toggle('hover', !!t);
  });
}

// ---------- MAGNETIC BUTTONS ----------
function setupMagnetic() {
  if (matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    const strength = 0.25;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

// ---------- COUNTDOWN ----------
function setupCountdown() {
  const el = document.querySelector('.countdown');
  if (!el) return;
  // Set a far-future-ish but plausible end (next Sunday midnight from now)
  const now = new Date();
  const end = new Date(now);
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
  end.setDate(now.getDate() + daysUntilSunday);
  end.setHours(0,0,0,0);

  function tick() {
    let diff = Math.max(0, end - new Date());
    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000);  diff -= h * 3600000;
    const m = Math.floor(diff / 60000);    diff -= m * 60000;
    const s = Math.floor(diff / 1000);
    el.querySelector('[data-cd="d"]').textContent = String(d).padStart(2,'0');
    el.querySelector('[data-cd="h"]').textContent = String(h).padStart(2,'0');
    el.querySelector('[data-cd="m"]').textContent = String(m).padStart(2,'0');
    el.querySelector('[data-cd="s"]').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}

// ---------- CART STATE ----------
const cart = (() => {
  let items = [];
  try { items = JSON.parse(localStorage.getItem('elshayeb.cart') || '[]'); } catch(e) {}
  const subs = new Set();
  const save = () => localStorage.setItem('elshayeb.cart', JSON.stringify(items));
  const notify = () => subs.forEach(fn => fn(items));
  return {
    items: () => items,
    count: () => items.reduce((a,b) => a + b.qty, 0),
    totalLBP: () => items.reduce((a,b) => a + b.qty * b.lbp, 0),
    totalUSD: () => items.reduce((a,b) => a + b.qty * b.usd, 0),
    add: (item) => {
      const ex = items.find(i => i.id === item.id);
      if (ex) ex.qty += 1;
      else items.push({ id: item.id, name: item.name, lbp: item.lbp, usd: item.usd, qty: 1 });
      save(); notify();
    },
    setQty: (id, qty) => {
      const ex = items.find(i => i.id === id);
      if (!ex) return;
      ex.qty = qty;
      if (ex.qty <= 0) items = items.filter(i => i.id !== id);
      save(); notify();
    },
    remove: (id) => { items = items.filter(i => i.id !== id); save(); notify(); },
    clear: () => { items = []; save(); notify(); },
    on: (fn) => { subs.add(fn); fn(items); return () => subs.delete(fn); }
  };
})();

// ---------- CART UI ----------
function updateCartBadge() {
  document.querySelectorAll('.cart-btn__badge').forEach(b => {
    const c = cart.count();
    b.textContent = c;
    b.style.display = c > 0 ? '' : 'none';
  });
}
function setupCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  const scrim  = document.querySelector('.cart-drawer__scrim');
  if (!drawer) return;
  const open  = () => { drawer.classList.add('open'); scrim.classList.add('open'); };
  const close = () => { drawer.classList.remove('open'); scrim.classList.remove('open'); };
  document.querySelectorAll('[data-open-cart]').forEach(b => b.addEventListener('click', open));
  drawer.querySelector('.cart-drawer__close')?.addEventListener('click', close);
  scrim?.addEventListener('click', close);

  function fmtLBP(n) { return n.toLocaleString('en-US') + ' L.L'; }
  function fmtUSD(n) { return '$' + n.toFixed(2); }

  function render() {
    const lang = currentLang();
    const items = cart.items();
    const list = drawer.querySelector('.cart-drawer__items');
    const empty = drawer.querySelector('.cart-drawer__empty');
    const foot = drawer.querySelector('.cart-drawer__foot');
    list.innerHTML = '';
    if (items.length === 0) {
      empty.style.display = 'flex';
      list.style.display = 'none';
      foot.style.display = 'none';
    } else {
      empty.style.display = 'none';
      list.style.display = 'block';
      foot.style.display = 'flex';
      items.forEach(it => {
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
          <div>
            <div class="cart-item__name">${it.name[lang] || it.name.en}</div>
            <div class="cart-item__name-ar">${lang === 'en' ? it.name.ar : it.name.en}</div>
            <div class="cart-item__meta">
              <div class="qty-stepper">
                <button data-q="-" aria-label="decrease">−</button>
                <span>${it.qty}</span>
                <button data-q="+" aria-label="increase">+</button>
              </div>
              <button class="cart-item__remove" data-remove>${lang === 'ar' ? 'إزالة' : 'Remove'}</button>
            </div>
          </div>
          <div class="cart-item__price">
            <strong>${fmtLBP(it.qty * it.lbp)}</strong>
            <span>${fmtUSD(it.qty * it.usd)}</span>
          </div>`;
        row.querySelector('[data-q="+"]').addEventListener('click', () => cart.setQty(it.id, it.qty + 1));
        row.querySelector('[data-q="-"]').addEventListener('click', () => cart.setQty(it.id, it.qty - 1));
        row.querySelector('[data-remove]').addEventListener('click', () => cart.remove(it.id));
        list.appendChild(row);
      });
      foot.querySelector('[data-sub-lbp]').textContent = fmtLBP(cart.totalLBP());
      foot.querySelector('[data-sub-usd]').textContent = fmtUSD(cart.totalUSD());
      foot.querySelector('[data-total-lbp]').textContent = fmtLBP(cart.totalLBP() + 50000);
      foot.querySelector('[data-total-usd]').textContent = fmtUSD(cart.totalUSD() + 0.55);
    }
    updateCartBadge();
    updateOrderChip();
  }
  cart.on(render);
  window.renderCart = render;
}

function updateOrderChip() {
  const chip = document.querySelector('.order-chip');
  if (!chip) return;
  const c = cart.count();
  chip.classList.toggle('visible', c > 0);
  const countEl = chip.querySelector('[data-chip-count]');
  if (countEl) countEl.textContent = c;
  const totalEl = chip.querySelector('[data-chip-total]');
  if (totalEl) totalEl.textContent = '$' + cart.totalUSD().toFixed(2);
}

// ---------- INIT ----------
function setupLanguage() {
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  setLang(currentLang());
}

document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  setupNavScroll();
  setupMobileNav();
  setupReveals();
  setupMagnetic();
  setupCountdown();
  // setupCursor();  // custom cursor disabled — restores native mouse pointer
  setupCartDrawer();
  if (window.afterInit) window.afterInit();
});
