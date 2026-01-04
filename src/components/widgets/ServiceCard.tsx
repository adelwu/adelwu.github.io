interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  duration,
}: ServiceCardProps) {
  return (
    <div className="border border-border-default rounded-card hover:border-border-hover transition-all duration-DEFAULT overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-text-secondary">{icon}</span>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="inline-flex items-center gap-1.5 text-sm text-text-tertiary">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
