import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  TrendingUp,
  Clock,
  Award,
  Users,
  Brain,
  Filter,
  Star,
  ThumbsUp,
  Eye,
  User,
  Calendar,
  ArrowRight,
  Bell,
  Settings,
  BookOpen,
  Video,
  FileText,
  Image as ImageIcon,
  CheckCircle,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

// Mock data for community posts - Arabic content
const posts = [
  {
    id: 1,
    type: "article",
    title: "نهج ثوري لعلاج جذور الأسنان بدون ألم",
    excerpt:
      "اكتشف أحدث التقنيات التي تجعل إجراءات قناة الجذر خالية من الألم تقريباً وتقلل وقت التعافي بنسبة 50%.",
    author: {
      name: "د. سارة أحمد",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      title: "أخصائي علاج العصب",
      verified: true,
      followers: 15420,
    },
    stats: {
      likes: 324,
      comments: 42,
      shares: 18,
      views: 2340,
    },
    tags: ["علاج العصب", "تقنيات حديثة", "تسكين الألم"],
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=300&fit=crop",
    posted: "منذ 3 ساعات",
    featured: true,
  },
  {
    id: 2,
    type: "discussion",
    title: "ما هي أفضل طريقة للتعامل مع قلق الأطفال من طبيب الأسنان؟",
    content:
      "أعمل كطبيب أسنان أطفال منذ 5 سنوات وما زلت أواجه تحديات مع الأطفال القلقين. هل لديكم تقنيات مجربة؟",
    author: {
      name: "د. أحمد محمد",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      title: "طبيب أسنان أطفال",
      verified: true,
      followers: 8945,
    },
    stats: {
      likes: 156,
      comments: 89,
      shares: 12,
      views: 1567,
    },
    tags: ["طب أسنان الأطفال", "علم النفس", "إدارة القلق"],
    posted: "منذ 6 ساعات",
    featured: false,
  },
  {
    id: 3,
    type: "case_study",
    title: "حالة معقدة: زراعة أسنان متعددة مع ترقيع عظمي",
    excerpt:
      "مريض 45 عاماً فقد 6 أسنان أمامية في حادث. شاهد كيف استطعنا استعادة ابتسامته باستخدام تقنيات متقدمة.",
    author: {
      name: "د. فاطمة حسن",
      avatar:
        "https://images.unsplash.com/photo-1594824475386-67eb4d8b5f59?w=100&h=100&fit=crop&crop=face",
      title: "جراح فم وفكين",
      verified: true,
      followers: 12340,
    },
    stats: {
      likes: 445,
      comments: 67,
      shares: 34,
      views: 3456,
    },
    tags: ["زراعة الأسنان", "ترقيع العظام", "حالة معقدة"],
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=300&fit=crop",
    posted: "منذ يوم",
    featured: true,
  },
  {
    id: 4,
    type: "ai_insight",
    title: "الذكاء الاصطناعي يتنبأ بتسوس الأسنان قبل حدوثه بـ 6 أشهر",
    excerpt:
      "دراسة جديدة تظهر كيف يمكن للذكاء الاصطناعي تحليل الأشعة السينية وتحديد المناطق المعرضة للتسوس.",
    author: {
      name: "د. محمد علي",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      title: "باحث في تقنيات الأسنان",
      verified: true,
      followers: 18567,
    },
    stats: {
      likes: 678,
      comments: 123,
      shares: 89,
      views: 5234,
    },
    tags: ["ذكاء اصطناعي", "تشخيص مبكر", "تقنية"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop",
    posted: "منذ يومين",
    featured: true,
  },
];

// Mock data for trending topics
const trendingTopics = [
  { name: "الذكاء الاصطناعي في طب الأسنان", posts: 234, trend: "+12%" },
  { name: "زراعة الأسنان الفورية", posts: 189, trend: "+8%" },
  { name: "تقويم ��لأسنان الشفاف", posts: 156, trend: "+15%" },
  { name: "طب الأسنان الرقمي", posts: 143, trend: "+6%" },
  { name: "الطب الوقائي للأسنان", posts: 98, trend: "+4%" },
];

// Mock data for community experts
const experts = [
  {
    id: 1,
    name: "د. سارة أحمد",
    title: "أخصائي علاج العصب",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    followers: 15420,
    posts: 87,
    verified: true,
    specialties: ["علاج العصب", "الطب الوقائي"],
  },
  {
    id: 2,
    name: "د. محمد علي",
    title: "باحث في تقنيات الأسنان",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    followers: 18567,
    posts: 134,
    verified: true,
    specialties: ["ذكاء اصطناعي", "تقنيات حديثة"],
  },
  {
    id: 3,
    name: "د. فاطمة حسن",
    title: "جراح فم وفكين",
    avatar:
      "https://images.unsplash.com/photo-1594824475386-67eb4d8b5f59?w=100&h=100&fit=crop&crop=face",
    followers: 12340,
    posts: 76,
    verified: true,
    specialties: ["جراحة الفم", "زراعة الأسنان"],
  },
];

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "ورشة عمل: الذكاء الاصطناعي في التشخيص",
    date: "2024-12-25",
    time: "14:00",
    type: "ورشة عمل",
    attendees: 156,
    online: true,
  },
  {
    id: 2,
    title: "مؤتمر طب الأسنان الرقمي 2024",
    date: "2024-12-28",
    time: "09:00",
    type: "مؤتمر",
    attendees: 2340,
    online: false,
  },
  {
    id: 3,
    title: "ندوة: آخر التطورات في زراعة الأسنان",
    date: "2024-12-30",
    time: "16:00",
    type: "ندوة",
    attendees: 567,
    online: true,
  },
];

export default function Community() {
  const { language, t } = useI18n();
  const [activeTab, setActiveTab] = useState("feed");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <BookOpen className="w-4 h-4" />;
      case "discussion":
        return <MessageCircle className="w-4 h-4" />;
      case "case_study":
        return <FileText className="w-4 h-4" />;
      case "ai_insight":
        return <Brain className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case "article":
        return "مقال";
      case "discussion":
        return "نقاش";
      case "case_study":
        return "دراسة حالة";
      case "ai_insight":
        return "رؤية ذكية";
      default:
        return "منشور";
    }
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
                  مجتمع الأسنان
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث في المجتمع..."
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
                منشور جديد
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
              {/* User Profile Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
                    alt="د. أحمد العراقي"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      د. أحمد العراقي
                    </h3>
                    <p className="text-sm text-gray-600">طبيب أسنان عام</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-gray-900">45</div>
                    <div className="text-xs text-gray-500">منشور</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">1.2k</div>
                    <div className="text-xs text-gray-500">متابع</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">856</div>
                    <div className="text-xs text-gray-500">متابَع</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">التصفح</h3>
                </div>
                <nav className="p-2">
                  {[
                    { id: "feed", label: "التغذية الرئيسية", icon: TrendingUp },
                    { id: "trending", label: "الموضوعات الشائعة", icon: Star },
                    { id: "experts", label: "الخبراء", icon: Award },
                    { id: "events", label: "الفعاليات", icon: Calendar },
                    { id: "my-posts", label: "منشوراتي", icon: User },
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

              {/* Community Stats */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-4">
                  إحصائيات المجتمع
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">الأعضاء</span>
                    <span className="font-semibold text-blue-600">12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">المنشورات</span>
                    <span className="font-semibold text-green-600">3,567</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">المناقشات</span>
                    <span className="font-semibold text-purple-600">8,901</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">الخبراء</span>
                    <span className="font-semibold text-orange-600">245</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "feed" && (
              <div className="space-y-6">
                {/* Create Post */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
                      alt="د. أحمد العراقي"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <input
                      type="text"
                      placeholder="ما الذي تريد مشاركته مع المجتمع؟"
                      className="flex-1 p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                        <ImageIcon className="w-4 h-4" />
                        صورة
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-green-600">
                        <Video className="w-4 h-4" />
                        فيديو
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600">
                        <FileText className="w-4 h-4" />
                        مقال
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      نشر
                    </button>
                  </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-4">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select
                      value={filterBy}
                      onChange={(e) => setFilterBy(e.target.value)}
                      className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">جميع المنشورات</option>
                      <option value="article">المقالات</option>
                      <option value="discussion">المناقشات</option>
                      <option value="case_study">دراسات الحالة</option>
                      <option value="ai_insight">الرؤى الذكية</option>
                    </select>
                    <div className="flex gap-2 ml-auto">
                      <button className="text-sm text-gray-600 hover:text-blue-600">
                        الأحدث
                      </button>
                      <button className="text-sm text-gray-600 hover:text-blue-600">
                        الأكثر شعبية
                      </button>
                      <button className="text-sm text-gray-600 hover:text-blue-600">
                        الأكثر تفاعلاً
                      </button>
                    </div>
                  </div>
                </div>

                {/* Posts */}
                <div className="space-y-6">
                  {posts
                    .filter(
                      (post) => filterBy === "all" || post.type === filterBy,
                    )
                    .map((post) => (
                      <article
                        key={post.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        {/* Post Header */}
                        <div className="p-6 pb-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-semibold text-gray-900">
                                    {post.author.name}
                                  </h3>
                                  {post.author.verified && (
                                    <CheckCircle className="w-4 h-4 text-blue-500" />
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <span>{post.author.title}</span>
                                  <span>•</span>
                                  <span>{post.posted}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {getPostTypeIcon(post.type)}
                                {getPostTypeLabel(post.type)}
                              </div>
                              {post.featured && (
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                                  مميز
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Post Content */}
                          <h2 className="text-xl font-semibold text-gray-900 mb-3">
                            {post.title}
                          </h2>
                          {post.excerpt && (
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                          )}
                          {post.content && (
                            <p className="text-gray-700 mb-4">{post.content}</p>
                          )}

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Post Image */}
                        {post.image && (
                          <div className="px-6 mb-4">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                        )}

                        {/* Post Actions */}
                        <div className="px-6 py-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                              <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm">
                                  {post.stats.likes}
                                </span>
                              </button>
                              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                <span className="text-sm">
                                  {post.stats.comments}
                                </span>
                              </button>
                              <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                                <Share2 className="w-5 h-5" />
                                <span className="text-sm">
                                  {post.stats.shares}
                                </span>
                              </button>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Eye className="w-4 h-4" />
                                {post.stats.views}
                              </div>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Bookmark className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            )}

            {activeTab === "trending" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    الموضوعات الشائعة
                  </h2>
                  <p className="text-gray-600">
                    الموضوعات الأكثر نقاشاً في مجتمع طب الأسنان.
                  </p>
                </div>

                <div className="space-y-4">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            #{topic.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {topic.posts} منشور
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <TrendingUp className="w-4 h-4" />
                            {topic.trend}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            الأسبوع الماضي
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "experts" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    خبراء المجتمع
                  </h2>
                  <p className="text-gray-600">
                    تواصل مع أبرز الخبراء والمتخصصين في مجال طب الأسنان.
                  </p>
                </div>

                <div className="grid gap-6">
                  {experts.map((expert) => (
                    <div
                      key={expert.id}
                      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={expert.avatar}
                          alt={expert.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {expert.name}
                            </h3>
                            {expert.verified && (
                              <CheckCircle className="w-5 h-5 text-blue-500" />
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{expert.title}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {expert.followers} متابع
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              {expert.posts} منشور
                            </div>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          متابعة
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {expert.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    الفعاليات القادمة
                  </h2>
                  <p className="text-gray-600">
                    ورش العمل والمؤتمرات والفعاليات التعليمية في مجال طب
                    الأسنان.
                  </p>
                </div>

                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {event.attendees} مشارك
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={cn(
                              "px-2 py-1 rounded-full text-xs font-medium mb-2",
                              event.online
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700",
                            )}
                          >
                            {event.online ? "أونلاين" : "حضوري"}
                          </div>
                          <div className="text-xs text-gray-500">
                            {event.type}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          التسجيل
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          التفاصيل
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "my-posts" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    منشوراتي
                  </h2>
                  <p className="text-gray-600">
                    إدارة منشوراتك ومتابعة إحصائيات التفاعل.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      45
                    </div>
                    <div className="text-blue-900 font-medium">منشور</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      2.4k
                    </div>
                    <div className="text-green-900 font-medium">إعجاب</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      567
                    </div>
                    <div className="text-purple-900 font-medium">تعليق</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    المنشورات الأخيرة
                  </h3>
                  <div className="space-y-4">
                    {posts.slice(0, 3).map((post, index) => (
                      <div
                        key={post.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{post.posted}</span>
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4" />
                              {post.stats.likes}
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4" />
                              {post.stats.comments}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm">
                            تعديل
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm">
                            حذف
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Trending Now */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  الشائع الآن
                </h3>
                <div className="space-y-3">
                  {trendingTopics.slice(0, 5).map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
                    >
                      <span className="text-gray-700">#{topic.name}</span>
                      <span className="text-green-600 font-medium">
                        {topic.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Experts */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  خبراء مقترحون
                </h3>
                <div className="space-y-4">
                  {experts.slice(0, 3).map((expert) => (
                    <div key={expert.id} className="flex items-center gap-3">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {expert.name}
                        </h4>
                        <p className="text-xs text-gray-600">{expert.title}</p>
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-700">
                        متابعة
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  النشاط الأخير
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">
                      د. سارة أحمد نشرت مقالاً جديداً
                    </span>
                    <span className="text-gray-500">منذ 2س</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      د. محم�� علي بدأ نقاشاً جديداً
                    </span>
                    <span className="text-gray-500">منذ 4س</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">
                      ورشة عمل جديدة تم إضافتها
                    </span>
                    <span className="text-gray-500">منذ 6س</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
