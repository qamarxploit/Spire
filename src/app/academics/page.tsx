import Image from "next/image";
import {
  BookOpen,
  Monitor,
  ShoppingCart,
  Globe,
  Cpu,
  Briefcase,
  CalendarDays,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0a1f44] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academics & <span className="text-[#c9a227]">Skills</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive curriculum designed to prepare students for academic success and the modern digital era.
          </p>
        </div>
      </section>

      {/* Regular Schooling */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/classroom2.jpg"
                alt="Regular Schooling at Spire School & College"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 text-[#c62828] font-semibold text-sm uppercase tracking-wider mb-3">
                <GraduationCap size={16} />
                Regular Schooling
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                Quality Education <span className="text-[#c9a227]">From Foundation to College</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Spire School & College offers a structured and comprehensive academic program from early
                  childhood through intermediate level. Our curriculum is carefully designed to meet Federal
                  Board standards while encouraging critical thinking and creativity.
                </p>
                <p>
                  We emphasize a balanced approach to education that includes strong foundations in
                  Mathematics, Sciences, English, Urdu, Islamic Studies, and Social Sciences. Our small
                  class sizes ensure personalized attention for every student.
                </p>
              </div>
              <div className="mt-6 bg-[#f8f9fc] rounded-xl p-6 border-l-4 border-[#c9a227]">
                <div className="flex items-start gap-3">
                  <CalendarDays size={22} className="text-[#c9a227] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#0a1f44] mb-1">Monthly Parents-Teachers Meeting (PTM)</h4>
                    <p className="text-gray-600 text-sm">
                      We conduct monthly PTMs to keep parents informed about their child's progress,
                      address concerns, and collaborate on strategies for academic improvement and
                      personal growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Skills & AI Training */}
      <section className="py-16 md:py-24 bg-[#0a1f44]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              <Monitor size={16} />
              Future-Ready Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Skills & <span className="text-[#c9a227]">AI Training</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We don't just teach; we prepare students for the modern digital era. Our specialized training
              programs equip students with in-demand skills for the global marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShoppingCart size={28} />,
                title: "E-Commerce",
                desc: "Learn how to build and manage online stores, understand digital marketplaces, and master the art of selling products and services online.",
              },
              {
                icon: <Briefcase size={28} />,
                title: "Freelancing",
                desc: "Get trained on top platforms like Fiverr, Upwork, Guru, and Toptal. Learn how to create winning profiles, bid on projects, and build a successful freelance career.",
              },
              {
                icon: <Globe size={28} />,
                title: "Digital Marketing",
                desc: "Master social media marketing, SEO, content creation, and online advertising strategies to grow businesses in the digital world.",
              },
              {
                icon: <Cpu size={28} />,
                title: "AI & Emerging Tech",
                desc: "Explore artificial intelligence, machine learning basics, prompt engineering, and how to leverage AI tools for productivity and innovation.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-[#c9a227]/20 rounded-lg flex items-center justify-center mb-5 text-[#c9a227]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl px-8 py-6">
              <p className="text-[#c9a227] text-xl md:text-2xl font-bold italic">
                "We don't just teach; we prepare students for the modern digital era."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
              Our <span className="text-[#c9a227]">Programs</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From morning schooling to evening coaching, we offer programs tailored to every student's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#0a1f44]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#0a1f44]/10 rounded-lg flex items-center justify-center">
                  <BookOpen size={24} className="text-[#0a1f44]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a1f44]">Morning Program</h3>
                  <p className="text-sm text-gray-500">Spire School & College</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Play Group to Class 10 (Matric)",
                  "FSc Pre-Medical & Pre-Engineering",
                  "Federal Board Affiliated Curriculum",
                  "Regular Assessments & Exams",
                  "Co-curricular Activities & Events",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <ArrowRight size={16} className="text-[#c9a227] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#c62828]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#c62828]/10 rounded-lg flex items-center justify-center">
                  <Monitor size={24} className="text-[#c62828]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a1f44]">Evening Program</h3>
                  <p className="text-sm text-gray-500">Spire School & College </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Academic Coaching for All Classes",
                  "Digital Skills & Computer Training",
                  "E-Commerce & Freelancing Workshops",
                  "AI Tools & Emerging Technology",
                  "Personalized Career Guidance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <ArrowRight size={16} className="text-[#c9a227] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#c62828] hover:bg-[#a02020] text-white px-8 py-3.5 rounded-md font-bold text-base transition-all shadow-lg"
            >
              Enroll Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
