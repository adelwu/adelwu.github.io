import Link from "next/link";
import Image from "next/image";
import Widget from "./Widget";

interface ProjectWidgetProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  href: string;
  className?: string;
}

export default function ProjectWidget({
  title,
  subtitle,
  imageSrc,
  href,
  className = "",
}: ProjectWidgetProps) {
  const isExternal = href.startsWith("http");
  const LinkComponent = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <Widget className={`group ${className}`}>
      <LinkComponent {...linkProps} className="block h-full">
        {/* Image area */}
        <div className="relative aspect-[4/3] bg-bg-subtle">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-text-muted">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-normal mb-1 group-hover:text-text-secondary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-text-secondary">{subtitle}</p>
          </div>
          <svg
            className="w-5 h-5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </div>
      </LinkComponent>
    </Widget>
  );
}
