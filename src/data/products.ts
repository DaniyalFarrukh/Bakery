export type Unit = {
  label: string;
  price: number; // in PKR
};

export type Product = {
  slug: string;
  nameEn: string;
  nameUr: string;
  category: "milk-based" | "dry sweets" | "halwa" | "fried";
  shortDesc: string;
  longDesc: string;
  shortDescUr: string;
  longDescUr: string;
  ingredients: string[];
  shelfLife: string;
  servingTip: string;
  badge?: "Bestseller" | "Seasonal";
  units: Unit[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "gulab-jamun",
    nameEn: "Gulab Jamun",
    nameUr: "گلاب جامن",
    category: "milk-based",
    shortDesc: "Warm, syrupy, and deeply satisfying milk solids fried to perfection.",
    longDesc: "Our classic Gulab Jamuns are made fresh daily from pure khoya, fried to a deep golden brown, and soaked in a fragrant cardamom and rose syrup. They offer a rich, doughy texture that is incredibly satisfying in every bite.",
    shortDescUr: "گرم، شیرے سے بھرے اور انتہائی مزیدار گلاب جامن۔",
    longDescUr: "ہمارے کلاسک گلاب جامن روزانہ تازہ کھوئے سے بنائے جاتے ہیں، سنہری بھورے ہونے تک تلے جاتے ہیں اور الائچی اور عرق گلاب کے شیرے میں بھگوئے جاتے ہیں۔",
    ingredients: ["Khoya (milk solids)", "Sugar", "Desi ghee", "Cardamom", "Rose water"],
    shelfLife: "3 days at room temperature, 1 week refrigerated.",
    servingTip: "Serve slightly warm. Perfect alongside a hot cup of tea or with a scoop of vanilla ice cream.",
    badge: "Bestseller",
    units: [
      { label: "500 g", price: 800 }, // TODO: replace with real price
      { label: "1 kg", price: 1500 }
    ],
    image: "/images/products/gulab-jamun.webp",
  },
  {
    slug: "rasmalai",
    nameEn: "Rasmalai",
    nameUr: "رس ملائی",
    category: "milk-based",
    shortDesc: "Soft cottage cheese dumplings soaked in chilled, saffron-infused creamy milk.",
    longDesc: "Delicate and airy discs of fresh chhena (cottage cheese) cooked in light syrup, then immersed in thickened, sweetened milk flavored with saffron and crushed pistachios. A refreshing and light end to any heavy meal.",
    shortDescUr: "زعفران والے ٹھنڈے اور کریمی دودھ میں ڈوبی ہوئی نرم پنیر کی ٹکیاں۔",
    longDescUr: "تازہ چھینا (پنیر) سے بنی نرم ٹکیاں جنہیں گاڑھے اور میٹھے دودھ میں زعفران اور پستے کے ساتھ پیش کیا جاتا ہے۔",
    ingredients: ["Milk", "Sugar", "Saffron", "Pistachios", "Almonds"],
    shelfLife: "2 days refrigerated.",
    servingTip: "Must be served thoroughly chilled. Garnish with extra silver leaf if desired.",
    badge: "Bestseller",
    units: [
      { label: "6 pcs", price: 1200 }, // TODO: replace with real price
      { label: "12 pcs", price: 2300 }
    ],
    image: "/images/products/rasmalai.webp",
  },
  {
    slug: "motichoor-laddu",
    nameEn: "Motichoor Laddu",
    nameUr: "موتی چور لڈو",
    category: "dry sweets",
    shortDesc: "Fine, roasted gram flour pearls bound in syrup and shaped into tender rounds.",
    longDesc: "These are crafted from tiny droplets of besan batter fried in pure desi ghee, then mixed with a rich saffron syrup and melon seeds. The texture is delicately crumbly yet moist enough to hold together perfectly.",
    shortDescUr: "بیسن کے باریک دانے جو شیرے اور گھی میں تیار کر کے گول شکل دیے جاتے ہیں۔",
    longDescUr: "خالص دیسی گھی میں تلے ہوئے بیسن کے باریک قطروں کو زعفران کے شیرے اور خربوزے کے بیجوں کے ساتھ ملا کر یہ مزیدار موتی چور لڈو تیار کیے جاتے ہیں۔",
    ingredients: ["Gram flour (Besan)", "Sugar", "Desi ghee", "Melon seeds", "Saffron"],
    shelfLife: "5 days at room temperature.",
    servingTip: "Serve at room temperature. A staple for wedding boxes and festive announcements.",
    units: [
      { label: "500 g", price: 750 }, // TODO: replace with real price
      { label: "1 kg", price: 1400 }
    ],
    image: "/images/products/motichoor-laddu.webp",
  },
  {
    slug: "kaju-katli",
    nameEn: "Kaju Katli",
    nameUr: "کاجو کتلی",
    category: "dry sweets",
    shortDesc: "Premium cashew fudge slices, famously decorated with edible silver leaf.",
    longDesc: "Made with the finest ground cashews and minimal sugar to let the nutty profile shine. This elegant, diamond-shaped mithai has a smooth, firm texture and is a premium choice for gifting.",
    shortDescUr: "کاجو سے بنی پریمیم مٹھائی جسے چاندی کے ورق سے سجایا جاتا ہے۔",
    longDescUr: "بہترین پسے ہوئے کاجو اور ہلکی چینی کے ساتھ تیار کردہ یہ خوبصورت مٹھائی تحائف دینے کے لیے ایک پریمیم انتخاب ہے۔",
    ingredients: ["Premium cashews", "Sugar", "Silver leaf (Varq)"],
    shelfLife: "10 days at room temperature.",
    servingTip: "Serve directly from the box. Keep away from direct sunlight to preserve the silver leaf.",
    units: [
      { label: "250 g", price: 1000 }, // TODO: replace with real price
      { label: "500 g", price: 1900 }
    ],
    image: "/images/products/kaju-katli.webp",
  },
  {
    slug: "sohan-halwa",
    nameEn: "Sohan Halwa",
    nameUr: "سوہن حلوہ",
    category: "halwa",
    shortDesc: "A dense, chewy, and deeply caramelized traditional sweet packed with nuts.",
    longDesc: "An iconic, rich confection made by boiling sugar, milk, and wheat flour until it achieves a chewy, toffee-like consistency. Generously studded with almonds, pistachios, and walnuts, offering a complex roasted flavor.",
    shortDescUr: "گری دار میوؤں سے بھرپور، ایک روایتی، گاڑھا اور چبا کر کھایا جانے والا میٹھا۔",
    longDescUr: "چینی، دودھ اور گندم کے آٹے کو اس وقت تک پکا کر تیار کیا جاتا ہے جب تک کہ یہ ٹافی کی طرح گاڑھا نہ ہو جائے، پھر اس میں بادام اور پستے شامل کیے جاتے ہیں۔",
    ingredients: ["Wheat flour", "Milk", "Sugar", "Desi ghee", "Mixed nuts"],
    shelfLife: "3 weeks in a cool, dry place.",
    servingTip: "Serve in small wedges. Pairs excellently with strong black tea or qahwa.",
    units: [
      { label: "500 g", price: 900 }, // TODO: replace with real price
      { label: "1 kg", price: 1700 }
    ],
    image: "/images/products/sohan-halwa.webp",
  },
  {
    slug: "jalebi",
    nameEn: "Jalebi",
    nameUr: "جلیبی",
    category: "fried",
    shortDesc: "Crispy, fermented batter spirals piped directly into hot oil and coated in syrup.",
    longDesc: "Our jalebis have the perfect balance of a crunchy, golden exterior and a juicy, syrup-filled interior. Made with a slightly fermented batter that gives it a subtle tangy undertone against the rich sweetness.",
    shortDescUr: "خستہ اور شیرے میں ڈوبی ہوئی گرما گرم گول جلیبیاں۔",
    longDescUr: "ہماری جلیبیاں باہر سے خستہ اور اندر سے شیرے سے بھری ہوتی ہیں۔ تھوڑے خمیر والے آمیزے سے بنی یہ جلیبیاں میٹھے کے ساتھ ہلکا سا کھٹا ذائقہ بھی دیتی ہیں۔",
    ingredients: ["All-purpose flour", "Yogurt", "Sugar", "Saffron", "Desi ghee"],
    shelfLife: "1 day at room temperature for maximum crispness.",
    servingTip: "Best eaten hot and fresh. Try dipping it in warm milk or pairing with rabri for a decadent breakfast.",
    units: [
      { label: "500 g", price: 500 }, // TODO: replace with real price
      { label: "1 kg", price: 900 }
    ],
    image: "/images/products/jalebi.webp",
  },
  {
    slug: "balushahi",
    nameEn: "Balushahi",
    nameUr: "بالو شاہی",
    category: "fried",
    shortDesc: "Flaky, rich pastry discs soaked lightly in sugar syrup.",
    longDesc: "Often compared to a glazed doughnut but entirely distinct in its flaky, layered texture. Made with a rich dough of flour and ghee, deep-fried on low heat until cooked through, then glazed to seal the layers.",
    shortDescUr: "پرت دار، دیسی گھی میں تیار اور شیرے میں ہلکی سی ڈوبی ہوئی مٹھائی۔",
    longDescUr: "میدے اور گھی کے آمیزے سے بنی، ہلکی آنچ پر تلی ہوئی اور شیرے کی تہہ والی ایک روایتی پرت دار مٹھائی۔",
    ingredients: ["All-purpose flour", "Desi ghee", "Sugar", "Yogurt", "Cardamom"],
    shelfLife: "1 week at room temperature.",
    servingTip: "Serve alongside evening tea. Does not require refrigeration.",
    units: [
      { label: "6 pcs", price: 400 }, // TODO: replace with real price
      { label: "12 pcs", price: 750 }
    ],
    image: "/images/products/balushahi.webp",
  },
  {
    slug: "gajar-halwa",
    nameEn: "Gajar ka Halwa",
    nameUr: "گاجر کا حلوہ",
    category: "halwa",
    shortDesc: "Slow-cooked winter carrot pudding with khoya, nuts, and cardamom.",
    longDesc: "A beloved seasonal classic. Freshly grated winter carrots simmered gently in full-fat milk and pure desi ghee until caramelized, then finished with rich khoya and a generous topping of toasted nuts.",
    shortDescUr: "سردیوں کی سوغات: گاجر، کھوئے، اور میوہ جات سے تیار کردہ حلوہ۔",
    longDescUr: "تازہ گاجروں کو دودھ اور دیسی گھی میں پکا کر، کھوئے اور بادام سے سجا ہوا یہ موسمی کلاسک حلوہ ایک بہترین سوغات ہے۔",
    ingredients: ["Carrots", "Milk", "Khoya", "Desi ghee", "Sugar", "Almonds"],
    shelfLife: "3 days refrigerated.",
    servingTip: "Always serve hot. Can be garnished with a little extra fresh khoya or slivered almonds before serving.",
    badge: "Seasonal",
    units: [
      { label: "500 g", price: 850 }, // TODO: replace with real price
      { label: "1 kg", price: 1600 }
    ],
    image: "/images/products/gajar-halwa.webp",
  },
  {
    slug: "soan-papdi",
    nameEn: "Soan Papdi",
    nameUr: "سوہن پاپڑی",
    category: "dry sweets",
    shortDesc: "Flaky, spun-sugar sweet that dissolves instantly on the palate.",
    longDesc: "A delicate, airy confection requiring immense skill to make. Roasted besan and flour are folded into pulled sugar syrup repeatedly to create thousands of crisp, thread-like layers that melt upon eating.",
    shortDescUr: "دھاگے جیسی تہوں والی یہ مٹھائی منہ میں جاتے ہی گھل جاتی ہے۔",
    longDescUr: "یہ ایک انتہائی نازک مٹھائی ہے جسے بیسن، میدے اور شیرے کی تہوں کو بار بار کھینچ کر تیار کیا جاتا ہے تاکہ منہ میں گھل جانے والی ہزاروں تہیں بن سکیں۔",
    ingredients: ["Sugar", "Gram flour", "All-purpose flour", "Desi ghee", "Cardamom"],
    shelfLife: "2 weeks in an airtight container.",
    servingTip: "Handle gently as it crumbles easily. Perfect for long-distance gifting due to its stable shelf life.",
    units: [
      { label: "250 g", price: 450 }, // TODO: replace with real price
      { label: "500 g", price: 800 }
    ],
    image: "/images/products/soan-papdi.webp",
  },
  {
    slug: "pista-barfi",
    nameEn: "Pista Barfi",
    nameUr: "پستہ برفی",
    category: "dry sweets",
    shortDesc: "A rich, vibrantly green fudge made entirely of ground pistachios and milk solids.",
    longDesc: "A luxurious sweet where the distinct, earthy flavor of premium pistachios takes center stage. Blended with fresh khoya and set into neat squares, offering a rich, dense bite with a beautiful natural green hue.",
    shortDescUr: "پستے اور کھوئے سے بنی ایک انتہائی لذیذ اور بھرپور مٹھائی۔",
    longDescUr: "یہ ایک پریمیم مٹھائی ہے جس میں خالص پستے کے ذائقے کو تازہ کھوئے کے ساتھ ملا کر تیار کیا جاتا ہے، جو اسے ایک قدرتی سبز رنگ اور زبردست ذائقہ دیتا ہے۔",
    ingredients: ["Pistachios", "Khoya", "Sugar", "Cardamom", "Silver leaf (Varq)"],
    shelfLife: "1 week refrigerated.",
    servingTip: "Serve at room temperature so the fats soften slightly, releasing the full pistachio aroma.",
    units: [
      { label: "500 g", price: 1200 }, // TODO: replace with real price
      { label: "1 kg", price: 2300 }
    ],
    image: "/images/products/pista-barfi.webp",
  }
];
