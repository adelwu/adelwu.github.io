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
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Required Fields */}
        <div className="space-y-8">
          <div>
            <label htmlFor="fullName" className="block text-sm text-text-tertiary mb-2">
              Full Name <span className="text-text-muted">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-text-tertiary mb-2">
              Email <span className="text-text-muted">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-text-tertiary mb-2">
              Message <span className="text-text-muted">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your event..."
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent resize-none placeholder:text-text-muted"
            />
          </div>

          <div>
            <label htmlFor="referralSource" className="block text-sm text-text-tertiary mb-2">
              How did you hear about me? <span className="text-text-muted">*</span>
            </label>
            <select
              id="referralSource"
              name="referralSource"
              required
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent"
            >
              <option value="">Select an option</option>
              {referralOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          </div>

        {/* Right Column - Optional Fields */}
        <div className="space-y-8 flex flex-col">
          <p className="text-sm text-text-tertiary uppercase tracking-widest">Optional details</p>

          <div>
            <label htmlFor="eventDate" className="block text-sm text-text-tertiary mb-2">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="eventTime" className="block text-sm text-text-tertiary mb-2">
              Event Time
            </label>
            <input
              type="time"
              id="eventTime"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm text-text-tertiary mb-2">
              Event Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State or Venue Name"
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent placeholder:text-text-muted"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="guestCount" className="block text-sm text-text-tertiary mb-2">
                Guest Count
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="e.g., 100"
                className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent placeholder:text-text-muted"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm text-text-tertiary mb-2 flex items-center gap-1.5">
                Budget
                <span className="relative group">
                  <svg
                    className="w-4 h-4 text-text-muted cursor-help"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-text-primary text-bg-page text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    Depending on the type of event, I can be flexible with budget. I also accept optional tips!
                  </span>
                </span>
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., $1k-2k"
                className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent placeholder:text-text-muted"
              />
            </div>
          </div>

          <div className="pt-4 mt-auto">
            <button
              type="submit"
              className="inline-block px-6 py-3 bg-text-primary text-bg-page rounded-pill text-sm font-medium hover:bg-text-secondary transition-colors"
            >
              Send Inquiry
            </button>

            <p className="text-xs text-text-tertiary mt-4">
              This will open your email client with the form details pre-filled.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
