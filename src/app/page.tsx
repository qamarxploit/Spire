"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wind,
  ShieldCheck,
  Sun,
  GraduationCap,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Spire Academy Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0a1f44]/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 border border-[#c9a227]/40 text-[#c9a227] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <GraduationCap size={16} />
              Admissions Open for 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Inspiring Excellence
              <br />
              <span className="text-[#c9a227]">Where Excellence Meets Success!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Spire Academy is a premier educational institution dedicated to nurturing young minds
              with quality education, modern skills, and strong moral values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-[#c62828] hover:bg-[#a02020] text-white px-8 py-3.5 rounded-md font-bold text-base transition-all shadow-lg hover:shadow-xl"
              >
                Apply Online
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-md font-bold text-base transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                Welcome to <span className="text-[#c9a227]">Spire Academy</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our institute operates under two distinguished names to serve students throughout the day:
                  <strong className="text-[#0a1f44]"> Spire School & College</strong> in the morning,
                  providing comprehensive regular schooling, and{" "}
                  <strong className="text-[#0a1f44]">Spire Academy / Evening Coaching</strong> in the
                  evening, offering specialized coaching and skill development programs.
                </p>
                <p>
                  We proudly maintain <strong className="text-[#0a1f44]">separate campuses for boys and girls</strong> at our
                  Wah Model Town Campus, ensuring a focused and comfortable learning environment for all
                  students.
                </p>
                <p>
                  Affiliated with the Federal Board, we are committed to delivering excellence in education
                  from early years through college level, preparing students for both academic success and
                  real-world challenges.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#0a1f44] font-semibold">
                  <Users size={20} className="text-[#c9a227]" />
                  <span>Separate Campuses</span>
                </div>
                <div className="flex items-center gap-2 text-[#0a1f44] font-semibold">
                  <BookOpen size={20} className="text-[#c9a227]" />
                  <span>Federal Board Affiliated</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/classroom2.jpg"
                alt="Students at Spire Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Facilities */}
      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
              Our Core <span className="text-[#c9a227]">Facilities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a modern, safe, and comfortable learning environment equipped with the latest
              amenities to ensure the best educational experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Facility 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#c9a227]">
              <div className="w-14 h-14 bg-[#0a1f44]/10 rounded-lg flex items-center justify-center mb-5">
                <Wind size={28} className="text-[#0a1f44]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Air-Conditioned Classrooms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All our classrooms are fully air-conditioned to provide a comfortable learning atmosphere
                throughout the year, ensuring students can focus on their studies without discomfort.
              </p>
            </div>
            {/* Facility 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#c62828]">
              <div className="w-14 h-14 bg-[#c62828]/10 rounded-lg flex items-center justify-center mb-5">
                <ShieldCheck size={28} className="text-[#c62828]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                24/7 CCTV Monitoring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The safety of our students is our top priority. Our campus is under constant CCTV
                surveillance, ensuring a secure environment for learning and peace of mind for parents.
              </p>
            </div>
            {/* Facility 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#c9a227]">
              <div className="w-14 h-14 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-5">
                <Sun size={28} className="text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Load-Shedding Free Building
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our building is equipped with solar panels, making it completely load-shedding free.
                Uninterrupted power supply ensures smooth academic activities at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a1f44]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join <span className="text-[#c9a227]">Spire Academy?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards a brighter future. Admissions are now open for the new academic
            session.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e8c84a] text-[#0a1f44] px-8 py-3.5 rounded-md font-bold text-base transition-all shadow-lg"
          >
            Apply Online Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
