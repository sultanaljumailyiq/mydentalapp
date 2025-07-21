import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Star,
  User,
  Menu,
  X,
  Brain,
  Stethoscope,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Heart,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import ClinicFinderCard from "@/components/ClinicFinderCard";

// Mock data for clinics in Iraq
const nearbyClinicas = [
  {
    id: 1,
    name: "مركز بغداد لطب الأسنان",
    nameEn: "Baghdad Dental Center",
    address: "شارع الكرادة، بغداد، العراق",
    addressEn: "Al-Karrada Street, Baghdad, Iraq",
    rating: 4.8,
    reviews: 156,
    distance: "0.8 كم",
    distanceEn: "0.5 mi",
    specialties: ["طب الأسنان العام", "تقويم الأسنان"],
    specialtiesEn: ["General Dentistry", "Orthodontics"],
    phone: "+964 770 123 4567",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "عيادة الابتسامة المثالية",
    nameEn: "Perfect Smile Clinic",
    address: "شارع المنصور، بغداد، العراق",
    addressEn: "Al-Mansour Street, Baghdad, Iraq",
    rating: 4.9,
    reviews: 203,
    distance: "1.9 كم",
    distanceEn: "1.2 mi",
    specialties: ["طب الأسنان التجميلي", "زراعة الأسنان"],
    specialtiesEn: ["Cosmetic Dentistry", "Implants"],
    phone: "+964 750 987 6543",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "عيادة الأسرة لطب الأسنان",
    nameEn: "Family Dental Care",
    address: "شارع الأعظمية، بغداد، العراق",
    addressEn: "Al-Adhamiya Street, Baghdad, Iraq",
    rating: 4.7,
    reviews: 98,
    distance: "3.4 كم",
    distanceEn: "2.1 mi",
    specialties: ["طب أسنان الأطفال", "الرعاية العامة"],
    specialtiesEn: ["Pediatric Dentistry", "General Care"],
    phone: "+964 780 456 7890",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
  },
];

// Mock articles in Arabic
const articles = [
  {
    id: 1,
    title: "الدليل الشامل لزراعة الأسنان: كل ما تحتاج لمعرفته",
    titleEn: "The Complete Guide to Dental Implants: What You Need to Know",
    excerpt:
      "كل شيء عن زراعة الأسنان، من الإجراء إلى التعافي والعناية طويلة المدى.",
    excerptEn:
      "Everything about dental implants, from procedure to recovery and long-term care.",
    author: "د. سارة أحمد",
    authorEn: "Dr. Sarah Ahmed",
    date: "15 ديسمبر 2024",
    dateEn: "Dec 15, 2024",
    readTime: "8 دقائق قراءة",
    readTimeEn: "8 min read",
    category: "العلاج",
    categoryEn: "Treatment",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title:
      "الذكاء الاصطناعي في طب الأسنان: كيف تُحدث التكنولوجيا ثورة في صحة الفم",
    titleEn: "AI in Dentistry: How Technology is Revolutionizing Oral Health",
    excerpt: "اكتشف كيف يُحول الذكاء الاصطناعي تشخيص الأسنان وتخطيط العلاج.",
    excerptEn:
      "Discover how artificial intelligence is transforming dental diagnosis and treatment planning.",
    author: "د. محمد علي",
    authorEn: "Dr. Mohammed Ali",
    date: "12 ديسمبر 2024",
    dateEn: "Dec 12, 2024",
    readTime: "6 دقائق قراءة",
    readTimeEn: "6 min read",
    category: "التكنولوجيا",
    categoryEn: "Technology",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "الرعاية الوقائية: مفتاحك لصحة الفم مدى الحياة",
    titleEn: "Preventive Care: Your Key to Lifelong Oral Health",
    excerpt: "عادات يو��ية بسيطة يمكنها منع معظم مشاكل الأسنان وتوفير المال.",
    excerptEn:
      "Simple daily habits that can prevent most dental problems and save you money.",
    author: "د. فاطمة حسن",
    authorEn: "Dr. Fatima Hassan",
    date: "10 ديسمبر 2024",
    dateEn: "Dec 10, 2024",
    readTime: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    category: "الوقاية",
    categoryEn: "Prevention",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop",
  },
];

interface AISymptomCheckerProps {
  isOpen: boolean;
  onClose: () => void;
}

function AISymptomChecker({ isOpen, onClose }: AISymptomCheckerProps) {
  const [symptoms, setSymptoms] = useState("");
  const [severity, setSeverity] = useState("mild");
  const [diagnosis, setDiagnosis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDiagnosis = async () => {
    setLoading(true);

    // Simulate AI diagnosis
    setTimeout(() => {
      setDiagnosis({
        condition: "التهاب اللثة المحتمل",
        confidence: 78,
        recommendations: [
          "احجز موعداً لتنظيف الأسنان خلال أسبوعين",
          "استخدم غسول الفم المضاد للبكتيريا مرتين يومياً",
          "حسّن تقنية التفريش باستخدام فرشاة ناعمة",
          "فكر في علاج الفلورايد المهني",
        ],
        urgency: "moderate",
        nearbySpecialists: nearbyClinicas.slice(0, 2),
      });
      setLoading(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            التشخيص بالذكاء الاصطناعي
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!diagnosis ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  صف أعراضك
                </label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="مثل: نزيف اللثة، ألم الأسنان، الحساسية..."
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  شدة الألم
                </label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="mild">خفيف (1-3)</option>
                  <option value="moderate">متوسط (4-6)</option>
                  <option value="severe">شديد (7-10)</option>
                </select>
              </div>

              <button
                onClick={handleDiagnosis}
                disabled={!symptoms.trim() || loading}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    جاري التحليل...
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    احصل على التشخيص بالذكاء الاصطناعي
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  التشخيص الأولي
                </h3>
                <p className="text-purple-800 text-lg font-medium">
                  {diagnosis.condition}
                </p>
                <p className="text-sm text-purple-600 mt-1">
                  درجة الثقة: {diagnosis.confidence}%
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  الإجراءات الموصى بها:
                </h4>
                <ul className="space-y-2">
                  {diagnosis.recommendations.map(
                    (rec: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  الأخصائيون الموصى بهم:
                </h4>
                <div className="space-y-3">
                  {diagnosis.nearbySpecialists.map((clinic: any) => (
                    <div key={clinic.id} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium text-gray-900">
                            {clinic.name}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {clinic.address}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-700">
                              {clinic.rating}
                            </span>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                          احجز الآن
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>إخلاء مسؤولية:</strong> هذا التشخيص بالذكاء الاصطناعي
                  أولي ولا ينبغي أن يحل محل الاستشارة الطبية المهنية. يرجى
                  استشارة طبيب أسنان مؤهل للفحص والعلاج ال��ناسبين.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const { language, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAIDiagnosis, setShowAIDiagnosis] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {t("app.name")}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">
                الخدمات
              </a>
              <Link
                to="/marketplace"
                className="text-gray-700 hover:text-blue-600"
              >
                متجر المرضى
              </Link>
              <Link
                to="/dental-supply"
                className="text-gray-700 hover:text-blue-600"
              >
                قسم الخدمات
              </Link>
              <Link
                to="/community"
                className="text-gray-700 hover:text-blue-600"
              >
                المجتمع
              </Link>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
                الوظائف
              </Link>
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                تسجيل الدخول
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <a
                href="#services"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                الخدمات
              </a>
              <Link
                to="/marketplace"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                متجر المرضى
              </Link>
              <Link
                to="/dental-supply"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                قسم الخدمات
              </Link>
              <Link
                to="/community"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                المجتمع
              </Link>
              <Link
                to="/jobs"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                الوظائف
              </Link>
              <Link
                to="/auth"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-center mt-4"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                أفضل صديق لابتسامتك مع{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  الرعاية المدعومة بالذكاء الاصطناعي
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                احصل على تشخيص أسنان فوري بالذكاء الاصطناعي، ابحث عن أفضل
                العيادات بالقرب منك، واحجز المواعيد أونلاين. انضم للآلاف الذين
                يثقون بزيندنتا لصحة أفواههم.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowAIDiagnosis(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  جرب التشخيص بالذكاء الاصطناعي
                </button>
                <a
                  href="#clinics"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  البحث عن عيادات
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"
                alt="Modern dental clinic"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">50,000+</p>
                    <p className="text-sm text-gray-600">مريض سعيد</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              رعاية الأسنان المدعومة بالذكاء الاصطناعي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختبر مستقبل طب الأسنان مع أدوات التشخيص المتقدمة بالذكاء
              الاصطناعي وتوصيات العلاج المخصصة.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                فاحص الأعراض بالذكاء الاصطناعي
              </h3>
              <p className="text-gray-600 mb-6">
                صف أعراضك واحصل على تشخيص أولي فوري بالذكاء الاصطناعي مع توصيات
                العلاج.
              </p>
              <button
                onClick={() => setShowAIDiagnosis(true)}
                className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                جرب الآن <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                مكتشف العيادات الذكي
              </h3>
              <p className="text-gray-600 mb-6">
                مطابقة مدعومة بالذكاء الاصطناعي للعثور على العيادة المثالية
                بناءً على موقعك واحتياجاتك وتفضيلاتك.
              </p>
              <a
                href="#clinics"
                className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                ��ستكشف <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                الجدولة الذكية
              </h3>
              <p className="text-gray-600 mb-6">
                جدولة المواعيد محسّنة بالذكاء الاصطناعي تجد أفضل الأوقات المتاحة
                بناءً على الإلحاح والتوفر.
              </p>
              <a
                href="#clinics"
                className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                احجز الآن <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Finder Section */}
      <section id="clinics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              اعثر على عيادة الأسنان المثالية بالقرب منك
            </h2>
            <p className="text-xl text-gray-600">
              ابحث من خلال آلاف عيادات الأسنان المعتمدة مع تقييمات وتقيمات
              حقيقية.
            </p>
          </div>

          {/* Interactive Clinic Finder with Map */}
          <ClinicFinderCard />
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              معرفة الأسنان الخبيرة
            </h2>
            <p className="text-xl text-gray-600">
              ابق مطلعاً على أحدث مقالات صحة الأسنان من المتخصصين الموثوقين.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {article.author}
                        </p>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                      اقرأ المزيد <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              عرض جميع المقالات
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">مريض سعيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-100">عيادة شريكة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">دقة الذكاء الاصطناعي</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">دعم ذكي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">زيندنتا</span>
              </div>
              <p className="text-gray-400 mb-4">
                مستقبل رعاية الأسنان، مدعوم بالذكاء الاصطناعي ومدفوع بالرحمة.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">الخدمات</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    التشخيص بالذكاء الاصطناعي
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    مكتشف العيادات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    الحجز أونلاين
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    مقالات الأسنان
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">المجتمع</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/community" className="hover:text-white">
                    مجتمع الأسنان
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    مقالات الخبراء
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    المنتديات
                  </a>
                </li>
                <li>
                  <Link to="/jobs" className="hover:text-white">
                    منصة الوظائف
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">الدعم</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    مركز المساعدة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    شروط الخدمة
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 زيندنتا. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* AI Diagnosis Modal */}
      <AISymptomChecker
        isOpen={showAIDiagnosis}
        onClose={() => setShowAIDiagnosis(false)}
      />
    </div>
  );
}
