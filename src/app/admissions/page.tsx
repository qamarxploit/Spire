"use client";

import { useState } from "react";
import { Send, CheckCircle, Phone, MapPin, Mail, GraduationCap } from "lucide-react";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    phone: "",
    classApplying: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const phoneNumber = "923045060323";

    const textMessage =
      `*New Inquiry / Admission Request*%0A%0A` +
      `*Student Name:* ${encodeURIComponent(formData.studentName)}%0A` +
      `*Phone/WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Class Applying For:* ${encodeURIComponent(formData.classApplying)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || "N/A")}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");

    setStatus("success");
    setFormData({ studentName: "", phone: "", classApplying: "", message: "" });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0a1f44] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Admissions <span className="text-[#c9a227]">2026</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Take the first step towards a brighter future. Fill out the inquiry form below and our team will contact you shortly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-[#0a1f44] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#c9a227]" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-gray-300 text-sm">
                        Opposite Al-Faisal Mall, Near U-Bank, GT Road, Wah Cantt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-[#c9a227]" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone / WhatsApp</p>
                      <p className="text-gray-300 text-sm">0304-5060323</p>
                      <p className="text-gray-300 text-sm">0313-7722405</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-[#c9a227]" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-gray-300 text-sm">info@spireacademy.edu.pk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center shrink-0">
                      <GraduationCap size={20} className="text-[#c9a227]" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Programs</p>
                      <p className="text-gray-300 text-sm">Morning School & College</p>
                      <p className="text-gray-300 text-sm">Evening Coaching & Skills</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#c9a227]">
                <h4 className="text-lg font-bold text-[#0a1f44] mb-3">Why Choose Spire?</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] shrink-0 mt-0.5" />
                    Highly Qualified Faculty
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] shrink-0 mt-0.5" />
                    Air-Conditioned Classrooms
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] shrink-0 mt-0.5" />
                    Digital Skills Training
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] shrink-0 mt-0.5" />
                    Separate Boys & Girls Campuses
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] shrink-0 mt-0.5" />
                    Load-Shedding Free Campus
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-2">
                  Online Admission <span className="text-[#c9a227]">Inquiry</span>
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and our admissions team will contact you within 24 hours.
                </p>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Inquiry Submitted!</h3>
                    <p className="text-green-700 mb-6">
                      Thank you for your interest in Spire Academy. Your details have been redirected to WhatsApp!
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="bg-[#0a1f44] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#1a3a6e] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="studentName" className="block text-sm font-semibold text-[#0a1f44] mb-2">
                          Student Name <span className="text-[#c62828]">*</span>
                        </label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          required
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="Enter full name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#0a1f44] mb-2">
                          Phone / WhatsApp <span className="text-[#c62828]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 0304-5060323"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="classApplying" className="block text-sm font-semibold text-[#0a1f44] mb-2">
                        Class Applying For <span className="text-[#c62828]">*</span>
                      </label>
                      <select
                        id="classApplying"
                        name="classApplying"
                        required
                        value={formData.classApplying}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a class</option>
                        <option value="Play Group">Play Group</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Prep">Prep</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10 (Matric)</option>
                        <option value="FSc Part 1">FSc Part 1</option>
                        <option value="FSc Part 2">FSc Part 2</option>
                        <option value="Evening Coaching">Evening Coaching</option>
                        <option value="Digital Skills">Digital Skills Program</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#0a1f44] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any additional information or questions..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#c62828] hover:bg-[#a02020] text-white px-8 py-3.5 rounded-md font-bold text-base transition-all shadow-lg"
                    >
                      Submit Inquiry
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
