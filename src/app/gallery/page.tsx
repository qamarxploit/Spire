"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryImages = [
  {
    src: "/images/faculty.jpg",
    title: "Highly Qualified Faculty",
    category: "Faculty",
  },
  {
    src: "/images/results.jpg",
    title: "SSC Results - Brilliant Students",
    category: "Achievements",
  },
  {
    src: "/images/milad.jpg",
    title: "Milad Celebration",
    category: "Events",
  },
  {
    src: "/images/assembly.jpg",
    title: "School Assembly & Events",
    category: "Events",
  },
  {
    src: "/images/classroom1.jpg",
    title: "Primary Classroom",
    category: "Classrooms",
  },
  {
    src: "/images/classroom2.jpg",
    title: "Students in Class",
    category: "Classrooms",
  },
];

const categories = ["All", "Classrooms", "Events", "Faculty", "Achievements"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0a1f44] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
            <Camera size={16} />
            Our Gallery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Campus <span className="text-[#c9a227]">Gallery</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our vibrant campus life, classrooms, events, and achievements through our photo gallery.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0a1f44] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-[#0a1f44] hover:text-white border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={image.src}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0a1f44]/0 group-hover:bg-[#0a1f44]/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <Camera size={24} className="text-[#0a1f44]" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-[#c9a227] uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0a1f44] mt-1">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#c9a227] transition-colors p-2"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#c9a227] transition-colors p-2 bg-black/30 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#c9a227] transition-colors p-2 bg-black/30 rounded-full"
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
