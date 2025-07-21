import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Shield,
  MapPin,
  Phone,
  Mail,
  Globe,
  Package,
  Users,
  Clock,
  Award,
} from "lucide-react";
import ModernSidebar from "@/components/ModernSidebar";
import ModernProductCards from "@/components/ModernProductCards";

interface Brand {
  id: number;
  name: string;
  arabicName: string;
  logo: string;
  description: string;
  rating: number;
  products: number;
  verified: boolean;
  established: string;
  color: string;
  country: string;
  website: string;
  email: string;
  phone: string;
  specialties: string[];
  certifications: string[];
  coverImage: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "DentalTech Solutions",
    arabicName: "حلول دنتال تك",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F38bc499df3b84d0eb31a6baa33de2495%2Fec535ce8f44045d7a1b786f24b8d5a77?format=webp&width=800",
    description:
      "نحن شركة رائدة في تصنيع معدات طب الأسنان المتقدمة، نقدم حلولاً مبتكرة للعيادات والمستشفيات.",
    rating: 4.9,
    products: 120,
    verified: true,
    established: "2010",
    color: "from-blue-500 to-blue-700",
    country: "ألمانيا",
    website: "www.dentaltech-solutions.com",
    email: "info@dentaltech-solutions.com",
    phone: "+49 123 456 789",
    specialties: ["أجهزة الأشعة", "كراسي الأسنان", "أدوات التعقيم"],
    certifications: ["ISO 9001", "CE Mark", "FDA Approved"],
    coverImage:
      "https://cdn.builder.io/api/v1/image/assets%2F38bc499df3b84d0eb31a6baa33de2495%2F2cf3a5b0a7724e2e9e44b29ebac18a9d?format=webp&width=800",
  },
  {
    id: 2,
    name: "MediCare Pro",
    arabicName: "ميدي كير برو",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F38bc499df3b84d0eb31a6baa33de2495%2F5263123d5b07448fbd373c656ed85dca?format=webp&width=800",
    description:
      "متخصصون في توفير أحدث التقنيات الطبية والمستلزمات عالية الجودة لعيادات الأسنان.",
    rating: 4.7,
    products: 95,
    verified: true,
    established: "2008",
    color: "from-green-500 to-green-700",
    country: "الولايات المتحدة",
    website: "www.medicare-pro.com",
    email: "support@medicare-pro.com",
    phone: "+1 555 123 4567",
    specialties: ["مواد الحشو", "أدوات جراحية", "أنظمة الإضاءة"],
    certifications: ["ISO 13485", "FDA Approved", "CE Mark"],
    coverImage:
      "https://cdn.builder.io/api/v1/image/assets%2F38bc499df3b84d0eb31a6baa33de2495%2F26736f83032d44dcb5d6d0722b59bb13?format=webp&width=800",
  },
  {
    id: 3,
    name: "Advanced Dental Systems",
    arabicName: "أنظمة الأسنان المتقدمة",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F38bc499df3b84d0eb31a6baa33de2495%2Fcc312065940448069c48f06ada270e02?format=webp&width=800",
    description:
      "شركة متخصصة في تطوير وتصنيع أنظمة طب الأسنان الرقمية والمعدات التشخيصية المتطورة.",
    rating: 4.8,
    products: 78,
    verified: false,
    established: "2015",
    color: "from-purple-500 to-purple-700",
    country: "اليابان",
    website: "www.ads-dental.com",
    email: "contact@ads-dental.com",
    phone: "+81 3 1234 5678",
    specialties: ["أنظمة رقمية", "معدات تشخيص", "برمجيات طبية"],
    certifications: ["ISO 9001", "JIS Standard"],
    coverImage:
      "https://cdn.builder.io/api/v1/image/assets%2F38bc499df3b84d0eb31a6baa33de2495%2Fe36bf54502904f3d97e9a48f51a4f55e?format=webp&width=800",
  },
];

export default function BrandDetail() {
  const { id } = useParams();
  const brandId = parseInt(id || "1");
  const brand = brands.find((b) => b.id === brandId) || brands[0];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ModernSidebar />

      <div className="flex-1 lg:ml-72">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/dental-supply"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              العودة إلى قسم الخدمات
            </Link>
          </div>

          {/* Brand Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Cover Image */}
            <div
              className={`h-64 bg-gradient-to-r ${brand.color} relative`}
              style={{
                backgroundImage: `url(${brand.coverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{brand.arabicName}</h1>
                <p className="text-lg opacity-90">{brand.name}</p>
              </div>
            </div>

            {/* Brand Info */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Logo and Basic Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={brand.logo}
                      alt={brand.arabicName}
                      className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl font-bold text-gray-900">
                          {brand.arabicName}
                        </h2>
                        {brand.verified && (
                          <div className="bg-green-100 text-green-600 p-1 rounded-full">
                            <Shield className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{brand.name}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-900">
                          {brand.rating}
                        </span>
                        <span className="text-gray-600 text-sm">
                          (245 تقييم)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{brand.country}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{brand.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{brand.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">{brand.website}</span>
                    </div>
                  </div>
                </div>

                {/* Description and Stats */}
                <div className="lg:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <Package className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">
                        {brand.products}
                      </div>
                      <div className="text-sm text-gray-600">منتج</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">
                        1.2K
                      </div>
                      <div className="text-sm text-gray-600">عميل</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">
                        {brand.established}
                      </div>
                      <div className="text-sm text-gray-600">سنة التأسيس</div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-4 text-center">
                      <Award className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-yellow-600">
                        15
                      </div>
                      <div className="text-sm text-gray-600">جائزة</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      التخصصات
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {brand.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      الشهادات والاعتمادات
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {brand.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                        >
                          <Shield className="h-3 w-3" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                منتجات {brand.arabicName}
              </h2>
              <Link
                to={`/brand/${brand.id}/products`}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                عرض جميع المنتجات
              </Link>
            </div>
            <ModernProductCards />
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              هل تريد معرفة المزيد عن منتجاتنا أو تحتاج إلى استشارة تقنية؟
              فريقنا المتخصص مستعد لمساعدتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                طلب عرض سعر
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                تحديد موعد
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
