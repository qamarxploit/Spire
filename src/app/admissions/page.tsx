"use client";

import { useState } from "react";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    className: "Class 1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "923045060323";

    const textMessage = `*New Inquiry / Admission Request*%0A%0A` +
      `*Student Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone/WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Class Applying For:* ${encodeURIComponent(formData.className)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0a1f44]">
        Admissions Inquiry
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md border">
        <div>
          <label className="block text-sm font-medium mb-1">Student Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border rounded p-2 text-black"
            placeholder="Enter student name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone / WhatsApp *</label>
          <input
            type="text"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border rounded p-2 text-black"
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Class Applying For *</label>
          <select
            value={formData.className}
            onChange={(e) => setFormData({ ...formData, className: e.target.value })}
            className="w-full border rounded p-2 text-black"
          >
            <option>Playgroup / Nursery</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>1st Year</option>
            <option>2nd Year</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border rounded p-2 text-black"
            rows={4}
            placeholder="Write message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#0a1f44] hover:bg-[#c9a227] text-white font-bold py-3 rounded transition-colors"
        >
          Submit Inquiry (Send via WhatsApp)
        </button>
      </form>
    </div>
  );
}
