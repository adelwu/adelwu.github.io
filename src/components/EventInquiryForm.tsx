"use client";

import { useState, FormEvent, useEffect } from "react";
import confetti from "canvas-confetti";

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

const initialFormData: FormData = {
  fullName: "",
  email: "",
  message: "",
  referralSource: "",
  eventDate: "",
  guestCount: "",
  eventTime: "",
  location: "",
  budget: "",
};

const referralOptions = [
  "Google Search",
  "Social Media",
  "Friend/Family Referral",
  "Wedding Planner",
  "Event Venue",
  "Other",
];

export default function EventInquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/xzdzkadr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsSuccess(false);
    setErrorMessage(null);
  };

  useEffect(() => {
    if (isSuccess) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-medium mb-4">Thank you for your inquiry!</h3>
        <p className="text-text-secondary mb-8">
          Adel will get back to you in the next 24 hours!
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="inline-block px-6 py-3 bg-text-primary text-bg-page rounded-pill text-sm font-medium hover:bg-text-secondary transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {errorMessage}
        </div>
      )}

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
              disabled={isSubmitting}
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent disabled:opacity-50"
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
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent disabled:opacity-50"
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
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your event..."
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent resize-none placeholder:text-text-muted disabled:opacity-50"
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
              disabled={isSubmitting}
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent disabled:opacity-50"
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
              disabled={isSubmitting}
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent disabled:opacity-50"
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
              disabled={isSubmitting}
              value={formData.eventTime}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent disabled:opacity-50"
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
              disabled={isSubmitting}
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State or Venue Name"
              className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent placeholder:text-text-muted disabled:opacity-50"
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
                disabled={isSubmitting}
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="e.g., 100"
                className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent placeholder:text-text-muted disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm text-text-tertiary mb-2">
                Budget
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                disabled={isSubmitting}
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., $1k-2k"
                className="w-full px-0 py-3 border-0 border-b border-border-hover focus:border-border-strong focus:ring-0 outline-none transition-colors bg-transparent placeholder:text-text-muted disabled:opacity-50"
              />
            </div>
          </div>

          <div className="pt-4 mt-auto flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block px-6 py-3 bg-text-primary text-bg-page rounded-pill text-sm font-medium hover:bg-text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
