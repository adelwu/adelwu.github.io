interface WidgetProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Widget({ children, className = "", title }: WidgetProps) {
  return (
    <div
      className={`border border-border-default rounded-card hover:border-border-hover transition-all duration-DEFAULT overflow-hidden ${className}`}
    >
      {title && (
        <div className="px-6 pt-6 pb-4">
          <p className="text-sm text-text-tertiary uppercase tracking-widest">
            {title}
          </p>
        </div>
      )}
      {children}
    </div>
  );
}
