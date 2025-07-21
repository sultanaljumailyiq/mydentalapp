import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Filter,
  Star,
  Users,
  Calendar,
  Building,
  Heart,
  Share2,
  MessageCircle,
  Plus,
  Bell,
  User,
  CheckCircle,
  ArrowRight,
  Award,
  TrendingUp,
  Eye,
  Bookmark,
  Send,
  Phone,
  Mail,
  Globe,
  Target,
  Brain,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

// Mock data for job listings - Arabic content
const jobListings = [
  {
    id: 1,
    title: "طبيب أسنان أول - عيادة معززة بالذكاء الاصطناعي",
    company: "مجموعة سمايل تك ا��طبية",
    location: "بغداد، العراق",
    type: "دوام كامل",
    experience: "5+ سنوات",
    salary: "5,000 - 7,000 د.ع",
    description:
      "انضم إلى عيادتنا المبتكرة التي تستخدم أحدث تقنيات الذكاء الاصطناعي للتشخيص وتخطيط العلاج. نبحث عن طبيب أسنان متمرس شغوف بالتكنولوجيا.",
    requirements: [
      "شهادة طب الأسنان",
      "خبرة سريرية 5+ سنوات",
      "خبرة في طب الأسنان الرقمي",
      "معرفة بأدوات التشخيص بالذكاء الاصطناعي مفضلة",
    ],
    benefits: [
      "راتب تنافسي + مكافآت",
      "معدات ذكاء اصطناعي متطورة",
      "دعم التعليم المستمر",
      "تأمين صحي",
    ],
    posted: "منذ يومين",
    applicants: 42,
    featured: true,
    remote: false,
    urgent: false,
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
    company_rating: 4.8,
    company_size: "50-100",
  },
  {
    id: 2,
    title: "طبيب أسنان أطفال",
    company: "عيادة الأطفال السعداء",
    location: "البصرة، العراق",
    type: "دوام جزئي",
    experience: "3+ سنوات",
    salary: "3,500 - 4,500 د.ع",
    description:
      "نبحث عن طبيب أسنان أطفال متفهم للانضمام إلى عيادتنا المخصصة للأطفال. مطلوب خبرة مع الأطفال القلقين والتقنيات الحديثة.",
    requirements: [
      "إقامة طب أسنان الأطفال",
      "خبرة 3+ سنوات مع الأطفال",
      "شهادة مجلس مفضلة",
      "مهارات تواصل ممتازة",
    ],
    benefits: [
      "جدول عمل مرن",
      "بيئة صديقة للأطفال",
      "تطوير مهني",
      "مشاركة في الأرباح",
    ],
    posted: "منذ أسبوع",
    applicants: 28,
    featured: false,
    remote: false,
    urgent: true,
    logo: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=100&h=100&fit=crop",
    company_rating: 4.6,
    company_size: "10-50",
  },
  {
    id: 3,
    title: "أخصائي تقويم أسنان - استشارات عن بُعد",
    company: "شركة التقويم الرقمي",
    location: "عن بُعد",
    type: "عقد مؤقت",
    experience: "7+ سنوات",
    salary: "50 - 75 د.ع/ساعة",
    description:
      "استشارات تقويم أسنان ثورية عن بُعد باستخدام تخطيط العلاج بالذكاء الاصطناعي. اعمل من أي مكان بينما تساعد المرضى في تحقيق ابتسامات مثالية.",
    requirements: [
      "شهادة تخصص تقويم الأسنان",
      "خبرة 7+ سنوات",
      "خبرة في سير العمل الرقمي",
      "خبرة في الطب عن بُعد مفضلة",
    ],
    benefits: [
      "عمل عن بُعد 100%",
      "ساعات مرنة",
      "تشخيص معزز بالذكاء الاصطناعي",
      "معدل بالساعة مرتفع",
    ],
    posted: "منذ 3 أيام",
    applicants: 67,
    featured: true,
    remote: true,
    urgent: false,
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop",
    company_rating: 4.9,
    company_size: "100-500",
  },
  {
    id: 4,
    title: "أخصائي صحة الأسنان",
    company: "منتجع الأسنان الحديث",
    location: "أربيل، العراق",
    type: "دوام كامل",
    experience: "2+ سنوات",
    salary: "2,200 - 2,800 د.ع",
    description:
      "انضم إلى منتجع الأسنان الفاخر لدينا الذي يقدم رعاية متميزة في بيئة مريحة. نستخدم أحدث التقنيات لراحة المرضى وكفاءة العلاج.",
    requirements: [
      "شهادة صحة الأسنان",
      "ترخيص الدولة",
      "خبرة 2+ سنوات",
      "مهارات رعاية المرضى الممتازة",
    ],
    benefits: [
      "بيئة عمل تشبه المنتجع",
      "أحدث التقنيات",
      "مكافآت الأداء",
      "مزايا العافية",
    ],
    posted: "منذ 5 أيام",
    applicants: 35,
    featured: false,
    remote: false,
    urgent: false,
    logo: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=100&h=100&fit=crop",
    company_rating: 4.7,
    company_size: "10-50",
  },
];

// Mock data for freelance opportunities - Arabic content
const freelanceOpportunities = [
  {
    id: 1,
    title: "مطلوب طبيب أسنان طوارئ نهاية الأسبوع",
    client: "شبكة طوارئ الأسنان",
    location: "بغداد، العراق",
    duration: "عطل الأسبوع المستمرة",
    rate: "40 د.ع/ساعة",
    description:
      "نبحث ع�� طبيب أسنان متمرس لتغطية طوارئ نهاية الأسبوع. التعامل مع الحالات العاجلة مع وحدتنا المتنقلة.",
    skills: ["رعاية الطوارئ", "طب الأسنان المتنقل", "إدارة الألم"],
    posted: "منذ يوم",
    proposals: 12,
    budget: "800-1,500 د.ع/شهر",
    urgent: true,
  },
  {
    id: 2,
    title: "تدريب نظام التشخيص بالذكاء الاصطناعي",
    client: "حلول تك دنتال",
    location: "عن بُعد",
    duration: "أسبوعان",
    rate: "60 د.ع/ساعة",
    description:
      "تدريب المتخصصين في طب الأسنان على برامج التشخيص الجديدة بالذكاء الاصطناعي. إنشاء مواد تدريبية وإجراء ندوات عبر الإنترنت.",
    skills: ["تقنية الذكاء الاصطناعي", "التدريب", "العرض التقديمي"],
    posted: "منذ 3 أيام",
    proposals: 8,
    budget: "2,400-3,600 د.ع",
    urgent: false,
  },
];

// Mock data for dental professionals - Arabic content
const professionals = [
  {
    id: 1,
    name: "د. سارة أحمد",
    title: "طبيب أسنان عام وأخصائي ذكاء ��صطناعي",
    location: "بغداد، العراق",
    experience: "8 سنوات",
    rating: 4.9,
    reviews: 156,
    specialties: [
      "طب الأسنان العام",
      "التشخيص بالذكاء الاصطناعي",
      "سير العمل الرقمي",
    ],
    hourlyRate: "40-55 د.ع",
    availability: "متاح",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    verified: true,
    response_time: "أقل من ساعتين",
    success_rate: "98%",
  },
  {
    id: 2,
    name: "د. محمد علي",
    title: "جراح فم وخبير تكنولوجيا",
    location: "أربيل، العراق",
    experience: "12 سنة",
    rating: 4.8,
    reviews: 203,
    specialties: ["جراحة الفم", "زراعة الأسنان", "التصوير ثلاثي الأبعاد"],
    hourlyRate: "60-80 د.ع",
    availability: "مشغول",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    verified: true,
    response_time: "أقل من 4 ساعات",
    success_rate: "96%",
  },
  {
    id: 3,
    name: "د. فاطمة حسن",
    title: "طبيب أسنان أطفال",
    location: "البصرة، العراق",
    experience: "6 سنوات",
    rating: 4.9,
    reviews: 98,
    specialties: ["رعاية الأطفال", "التخدير", "إدارة السلوك"],
    hourlyRate: "35-50 د.ع",
    availability: "متاح",
    avatar:
      "https://images.unsplash.com/photo-1594824475386-67eb4d8b5f59?w=100&h=100&fit=crop&crop=face",
    verified: true,
    response_time: "أقل من ساعة",
    success_rate: "99%",
  },
];

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: any;
}

function JobApplicationModal({
  isOpen,
  onClose,
  job,
}: JobApplicationModalProps) {
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    expectedSalary: "",
    availableStart: "",
    resume: null,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            تقديم طلب للوظيفة: {job?.title}
          </h2>
          <p className="text-gray-600">{job?.company}</p>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              خطاب الغلاف
            </label>
            <textarea
              value={applicationData.coverLetter}
              onChange={(e) =>
                setApplicationData({
                  ...applicationData,
                  coverLetter: e.target.value,
                })
              }
              placeholder="أخبرنا لماذا أنت مثالي لهذا المنصب..."
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الراتب المتوقع
              </label>
              <input
                type="text"
                value={applicationData.expectedSalary}
                onChange={(e) =>
                  setApplicationData({
                    ...applicationData,
                    expectedSalary: e.target.value,
                  })
                }
                placeholder="مثل: 4,000 د.ع"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تاريخ البدء المتاح
              </label>
              <input
                type="date"
                value={applicationData.availableStart}
                onChange={(e) =>
                  setApplicationData({
                    ...applicationData,
                    availableStart: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              السيرة الذاتية
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input type="file" className="hidden" id="resume-upload" />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <Plus className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  انقر لرفع سيرتك الذاتية أو اسحب وأفلت
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  PDF، DOC، أو DOCX (حد أقصى 10 ميجابايت)
                </p>
              </label>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-900">
                تحسين الطلب بالذكاء الاصطناعي
              </span>
            </div>
            <p className="text-sm text-purple-700 mb-3">
              دع ذكاءنا الاصطناعي يحسن طلبك لهذا المنصب المحدد ويزيد فرص نجاحك.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
              تحسي�� الطلب
            </button>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200"
            >
              إلغاء
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700">
              إرسال الطلب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Jobs() {
  const { language, t } = useI18n();
  const [activeTab, setActiveTab] = useState("browse");
  const [showJobApplication, setShowJobApplication] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");

  const handleApplyJob = (job: any) => {
    setSelectedJob(job);
    setShowJobApplication(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Link to="/landing" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  منصة الوظائف
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث عن الوظائف..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Bell className="w-5 h-5" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                نشر وظيفة
              </button>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-300"
              >
                لوحة الإدارة
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Navigation Tabs */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">منصة الوظائف</h3>
                </div>
                <nav className="p-2">
                  {[
                    { id: "browse", label: "تصفح الوظائف", icon: Search },
                    { id: "freelance", label: "العمل الحر", icon: Clock },
                    {
                      id: "professionals",
                      label: "البحث عن محترفين",
                      icon: Users,
                    },
                    {
                      id: "my-jobs",
                      label: "طلباتي",
                      icon: Briefcase,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-50",
                      )}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    التصفية
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الموقع
                    </label>
                    <input
                      type="text"
                      placeholder="المدينة، المحافظة"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نوع الوظيفة
                    </label>
                    <select
                      value={jobTypeFilter}
                      onChange={(e) => setJobTypeFilter(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">جميع الأنواع</option>
                      <option value="full-time">دوام كامل</option>
                      <option value="part-time">دوام جزئي</option>
                      <option value="contract">عقد مؤقت</option>
                      <option value="remote">عن بُعد</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      مستوى الخبرة
                    </label>
                    <div className="space-y-2">
                      {["مبتدئ", "متوسط", "خبير"].map((level) => (
                        <label key={level} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300"
                          />
                          <span className="text-sm text-gray-700">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-4">
                  إحصائيات المنصة
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      الوظائف النشطة
                    </span>
                    <span className="font-semibold text-blue-600">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">المتخصصون</span>
                    <span className="font-semibold text-green-600">5,678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">التوظيفات</span>
                    <span className="font-semibold text-purple-600">892</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "browse" && (
              <div className="space-y-6">
                {/* Featured Jobs Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
                  <h1 className="text-2xl font-bold mb-2">
                    اعثر على وظيفة الأسنان المثالية
                  </h1>
                  <p className="text-blue-100">
                    آلاف الفرص من أفضل عيادات الأسنان
                  </p>
                  <div className="mt-4 flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      وظائف مطابقة بالذكاء الاصطناعي
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      أصحاب عمل معتمدون
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      مناصب عالية الأجر
                    </div>
                  </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-4">
                  {jobListings.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                  {job.title}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <Building className="w-4 h-4" />
                                  <span>{job.company}</span>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm">
                                      {job.company_rating}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                  <Heart className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                                  <Share2 className="w-5 h-5" />
                                </button>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.posted}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                              {job.featured && (
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                  <Star className="w-3 h-3" />
                                  مميز
                                </span>
                              )}
                              {job.remote && (
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                  عن بُعد
                                </span>
                              )}
                              {job.urgent && (
                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                  عاج��
                                </span>
                              )}
                            </div>

                            <p className="text-gray-700 mb-4">
                              {job.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {job.applicants} متقدم
                                </div>
                                <div className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {job.company_size} موظف
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                  حفظ الوظيفة
                                </button>
                                <button
                                  onClick={() => handleApplyJob(job)}
                                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                  تقدم الآن
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "freelance" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    فرص العمل الحر
                  </h2>
                  <p className="text-gray-600">
                    اعثر على عمل حر مرن يناسب جدولك الزمني.
                  </p>
                </div>

                <div className="space-y-4">
                  {freelanceOpportunities.map((opportunity) => (
                    <div
                      key={opportunity.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {opportunity.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {opportunity.client}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {opportunity.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {opportunity.duration}
                            </div>
                          </div>
                        </div>
                        {opportunity.urgent && (
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                            عاجل
                          </span>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">
                        {opportunity.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {opportunity.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="font-semibold text-green-600">
                            {opportunity.rate}
                          </div>
                          <div className="text-gray-500">
                            الميزانية: {opportunity.budget}
                          </div>
                          <div className="text-gray-500">
                            {opportunity.proposals} اقتراح
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          إرسال اقتراح
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "professionals" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    البحث عن متخصصي الأسنان
                  </h2>
                  <p className="text-gray-600">
                    تواصل مع أطباء أسنان وأخصائيين مؤهلين لعيادتك.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {professionals.map((professional) => (
                    <div
                      key={professional.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={professional.avatar}
                          alt={professional.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {professional.name}
                            </h3>
                            {professional.verified && (
                              <CheckCircle className="w-5 h-5 text-blue-500" />
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">
                            {professional.title}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {professional.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              {professional.experience}
                            </div>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            professional.availability === "متاح"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700",
                          )}
                        >
                          {professional.availability}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">
                            {professional.rating}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({professional.reviews} تقييم)
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          الرد: {professional.response_time}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {professional.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold text-gray-900">
                          {professional.hourlyRate}/ساعة
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-400 hover:text-blue-500 border border-gray-300 rounded-lg">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            توظيف الآن
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "my-jobs" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    طلبات العمل الخاصة بي
                  </h2>
                  <p className="text-gray-600">
                    تتبع طلبات العمل وإدارة تقدم مسيرتك المهنية.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      12
                    </div>
                    <div className="text-blue-900 font-medium">تم التقديم</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      5
                    </div>
                    <div className="text-yellow-900 font-medium">
                      قيد المراجعة
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      2
                    </div>
                    <div className="text-green-900 font-medium">مقابلات</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    الطلبات الأخيرة
                  </h3>
                  <div className="space-y-4">
                    {jobListings.slice(0, 3).map((job, index) => (
                      <div
                        key={job.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {job.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {job.company}
                            </p>
                            <p className="text-xs text-gray-500">
                              تم التقديم {job.posted}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={cn(
                              "px-2 py-1 rounded-full text-xs font-medium mb-2",
                              index === 0
                                ? "bg-green-100 text-green-700"
                                : index === 1
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-blue-100 text-blue-700",
                            )}
                          >
                            {index === 0
                              ? "مقابلة مجدولة"
                              : index === 1
                                ? "قيد المراجعة"
                                : "تم إرسال الطلب"}
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 text-sm">
                            عر�� التفاصيل
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={showJobApplication}
        onClose={() => setShowJobApplication(false)}
        job={selectedJob}
      />
    </div>
  );
}
