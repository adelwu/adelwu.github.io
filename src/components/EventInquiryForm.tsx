"use client";

import { useState, FormEvent } from "react";

// Email is constructed at runtime to prevent bot scraping
const getRecipientEmail = () => {
  const user = "dlw8320";
  const domain = "gmail.com";
  return `${user}@${domain}`;
};

interface FormData {
  fullName: string;
  email: string;
  message: string;
  referralSource: string;
  eventDate: string;
  guestCount: string;
  eventTime: string;
  location: string;
  budget: string;
}

const referralOptions = [
  "Google Search",
  "Social Media",
  "Friend/Family Referral",
  "Wedding Planner",
  "Event Venue",
  "Other",
];

export default function EventInquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
    referralSource: "",
    eventDate: "",
    guestCount: "",
    eventTime: "",
    location: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Build email body
    const emailBody = `
Hi Adel,

I'd like to inquire about your live portrait services for my event.

Name: ${formData.fullName}
Email: ${formData.email}

Message:
${formData.message}

How I heard about you: ${formData.referralSource}

Event Details:
- Date: ${formData.eventDate || "Not specified"}
- Time: ${formData.eventTime || "Not specified"}
- Location: ${formData.location || "Not specified"}
- Guest Count: ${formData.guestCount || "Not specified"}
- Budget: ${formData.budget || "Not specified"}

Looking forward to hearing from you!
    `.trim();

    // Create mailto link with obfuscated email
    const subject = encodeURIComponent(`Event Inquiry from ${formData.fullName}`);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:${getRecipientEmail()}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      {/* Required Fields */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your event..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
        />
      </div>

      <div>
        <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
          How did you hear about me? <span className="text-red-500">*</span>
        </label>
        <select
          id="referralSource"
          name="referralSource"
          required
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition bg-white"
        >
          <option value="">Select an option</option>
          {referralOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Optional Fields */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Optional event details</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-1">
              Event Time
            </label>
            <input
              type="time"
              id="eventTime"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
              Estimated Guest Count
            </label>
            <input
              type="number"
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g., 100"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Budget Range
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., $500-$1000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Event Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, State or Venue Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
      >
        Send Inquiry
      </button>

      <p className="text-sm text-gray-500 text-center">
        This will open your email client with the form details pre-filled.
      </p>
    </form>
  );
}
