import Image from "next/image";
import Widget from "./Widget";

interface TweetWidgetProps {
  quote: string;
  date?: string;
  twitterHandle?: string;
  tweetUrl?: string;
  profileImage?: string;
  className?: string;
}

export default function TweetWidget({
  quote,
  date,
  twitterHandle = "adelwu_",
  tweetUrl,
  profileImage,
  className = "",
}: TweetWidgetProps) {
  const linkUrl = tweetUrl || `https://x.com/${twitterHandle}`;

  return (
    <Widget className={className}>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 group h-full flex flex-col relative"
      >
        {/* App icon overlay */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/images/icons/twitter.svg"
            alt="Twitter"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-end mb-4">
          <svg
            className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-colors"
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

        <div className="relative flex-1">
          <p className="text-lg text-text-secondary leading-relaxed">
            {quote}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          {profileImage && (
            <Image
              src={profileImage}
              alt={`@${twitterHandle}`}
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          <p className="text-sm text-text-tertiary">
            @{twitterHandle}
            {date && <span> &bull; {date}</span>}
          </p>
        </div>
      </a>
    </Widget>
  );
}
