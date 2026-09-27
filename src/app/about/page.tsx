import Image from "next/image";
import { Award, Users, BookOpen, Target, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0a1f44] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#c9a227]">Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our vision, mission, and the dedicated team behind Spire Academy's commitment to excellence.
          </p>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/director.jpg"
                alt="Director of Spire Academy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[#c62828] font-semibold text-sm uppercase tracking-wider mb-3">
                <Target size={16} />
                Director's Message
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                A Vision for <span className="text-[#c9a227]">Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Spire Academy — a place where dreams take shape and futures are built. As the
                  Director, it is my profound belief that education is not merely about acquiring knowledge;
                  it is about shaping character, igniting curiosity, and empowering young minds to become
                  leaders of tomorrow.
                </p>
                <p>
                  At Spire, we are committed to providing a holistic learning environment that blends
                  academic rigor with moral integrity. Our goal is to ensure that every student who walks
                  through our doors leaves as a confident, capable, and compassionate individual ready to
                  make a positive impact on society.
                </p>
                <p>
                  We continuously strive to innovate our teaching methods, embrace modern technology, and
                  foster a culture of excellence. Together with our dedicated faculty and supportive parents,
                  we are building an institution that stands as a beacon of quality education in Wah Cantt.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-[#0a1f44] font-bold text-lg">Director, Spire Academy</p>
                <p className="text-gray-500 text-sm">Spire School & College | Spire Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#c62828] font-semibold text-sm uppercase tracking-wider mb-3">
              <Users size={16} />
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
              Highly Qualified & <span className="text-[#c9a227]">Experienced Faculty</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our teaching staff comprises dedicated professionals with advanced degrees and years of
              experience in their respective fields.
            </p>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/images/faculty.jpg"
              alt="Highly Qualified and Experienced Faculty"
              fill
              className="object-contain bg-[#0a1f44]"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award size={24} />,
                title: "PhD Holders",
                desc: "Multiple faculty members hold doctorate degrees in their fields.",
              },
              {
                icon: <BookOpen size={24} />,
                title: "Subject Specialists",
                desc: "Expert teachers for Mathematics, Sciences, English, and more.",
              },
              {
                icon: <Users size={24} />,
                title: "Years of Experience",
                desc: "Our faculty brings decades of combined teaching experience.",
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Continuous Training",
                desc: "Regular professional development and modern teaching workshops.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#c9a227]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0a1f44] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                Our Mission & <span className="text-[#c9a227]">Values</span>
              </h2>
              <div className="space-y-5">
                {[
                  "To provide quality education that nurtures intellectual growth and character development.",
                  "To create a safe, inclusive, and stimulating learning environment for all students.",
                  "To integrate modern technology and digital skills into traditional academic excellence.",
                  "To foster critical thinking, creativity, and leadership in every student.",
                  "To build strong partnerships with parents and the community for holistic development.",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#c9a227] shrink-0 mt-0.5" />
                    <p className="text-gray-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/classroom1.jpg"
                alt="Spire Academy Classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
