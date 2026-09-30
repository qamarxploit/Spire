import { MapPin, Phone, Mail, Clock, GraduationCap } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0a1f44] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-[#c9a227]">Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for admissions, inquiries, or any questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#c9a227]">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1f44] mb-2">Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Opposite Al-Faisal Mall, Near U-Bank, GT Road, Wah Cantt
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#c62828]">
                <div className="w-12 h-12 bg-[#c62828]/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone size={24} className="text-[#c62828]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1f44] mb-2">Phone / WhatsApp</h3>
                <p className="text-gray-600 text-sm">0304-5060323</p>
                <p className="text-gray-600 text-sm">0313-7722405</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#0a1f44]">
                <div className="w-12 h-12 bg-[#0a1f44]/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail size={24} className="text-[#0a1f44]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1f44] mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@spireacademy.edu.pk</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#c9a227]">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock size={24} className="text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1f44] mb-2">Programs</h3>
                <p className="text-gray-600 text-sm">Morning: Spire School & College</p>
                <p className="text-gray-600 text-sm">Evening: Spire Evening Couching Academy</p>
              </div>
            </div>

            {/* Map & Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap size={28} className="text-[#c9a227]" />
                  <h2 className="text-2xl font-bold text-[#0a1f44]">Visit Our Campus</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We welcome parents and students to visit our campus and experience the Spire School & College 
                  environment firsthand. Our staff will be happy to give you a tour, answer your questions,
                  and guide you through the admissions process.
                </p>

                {/* Embedded Map */}
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.9999999999995!2d72.75!3d33.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd0aaaaaaaa%3A0xaaaaaaaaaaaaaaaa!2sWah%20Cantt!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Spire School & College Location"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a1f44] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold text-[#c9a227] mb-4">Morning Campus</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Spire School & College operates in the morning with complete regular schooling from
                    Play Group to Intermediate (FSc), affiliated with the Federal Board.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <MapPin size={14} className="text-[#c9a227] shrink-0 mt-1" />
                      Wah Model Town Campus (Boys & Girls Separate)
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone size={14} className="text-[#c9a227] shrink-0 mt-1" />
                      0304-5060323
                    </li>
                  </ul>
                </div>

                <div className="bg-[#c62828] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold text-white mb-4">Evening Campus</h3>
                  <p className="text-gray-100 text-sm leading-relaxed mb-4">
                    Spire School & College provides academic coaching and digital skills training
                    in the evening hours for students seeking extra support and modern skill development.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li className="flex items-start gap-2">
                      <MapPin size={14} className="text-white shrink-0 mt-1" />
                      Wah Model Town Campus (Boys & Girls Separate)
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone size={14} className="text-white shrink-0 mt-1" />
                      0313-7722405
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
