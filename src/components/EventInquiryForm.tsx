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
    <form onSubmit={handleSubmit} className="space-y-8 max-w-form">
      {/* Required Fields */}
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

      {/* Optional Fields */}
      <div className="pt-8 border-t border-border-default">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-8">Optional details</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <label htmlFor="guestCount" className="block text-sm text-text-tertiary mb-2">
              Estimated Guest Count
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
            <label htmlFor="budget" className="block text-sm text-text-tertiary mb-2">
              Budget Range
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., $500-$1000"
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent placeholder:text-text-muted"
            />
          </div>
        </div>

        <div className="mt-8">
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
      </div>

      <button
        type="submit"
        className="inline-block text-sm tracking-wide border-b border-border-strong pb-1 hover:border-border-active hover:text-text-secondary transition-all duration-DEFAULT mt-8"
      >
        Send Inquiry
      </button>

      <p className="text-xs text-text-tertiary">
        This will open your email client with the form details pre-filled.
      </p>
    </form>
  );
}
