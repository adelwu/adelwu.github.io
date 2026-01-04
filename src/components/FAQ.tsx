"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What medium do you use?",
    answer:
      "My materials typically consist of heavy-weight 5x7\" cardstock or watercolor paper, as well as ink. I provide plastic sleeves for guests so they don't need to worry about their art getting ruined for the rest of the night!",
  },
  {
    question: "Do you travel for events?",
    answer:
      "I am based in the Bay Area, and charge a flat transportation/set-up fee to accomodate. I am open to travel, just submit an inquiry!",
  },
  {
    question: "How long can the event be?",
    answer:
      "I typically do 1-4 hour bookings. It's usually hard to take breaks if a line forms, so I tend to do 1 continuous sitting. If you would like a 4+ hour booking, please fill out the contact form!",
  },
  {
    question: "What does the process look like?",
    answer:
      "I typically arrive 30 minutes early to set-up my table. For 1 minute speed portraits, guests line up and I will draw on the spot. For longer watercolor portraits, I take a photo of the guest so they can pick-up their painting at the end of the event.",
  },
  {
    question: "What kind of payment do you accept?",
    answer:
      "I prefer Zelle, Venmo, or check/cash. I don't do credit card payments unless there is a special occasion!",
  },
  {
    question: "Can I add branding to the drawings?",
    answer:
      "I'm happy to accept stickers + other branded materials to make the drawings suit your event.",
  },
];

function AccordionItem({
  item,
  isLast,
}: {
  item: FAQItem;
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={!isLast ? "border-b border-border-default" : ""}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-bg-subtle transition-colors -mx-2 px-2 rounded"
      >
        <span className="text-text-primary font-medium">{item.question}</span>
        <svg
          className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-DEFAULT ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-DEFAULT ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-text-secondary">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isLast={index === faqData.length - 1}
        />
      ))}
    </div>
  );
}
