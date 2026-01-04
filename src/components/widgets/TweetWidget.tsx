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
        className="block p-6 group h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-4">
          <svg
            className="w-5 h-5 text-text-tertiary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
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
          <span className="absolute -top-4 -left-2 text-6xl text-border-default font-serif">
            &ldquo;
          </span>
          <p className="text-lg text-text-secondary leading-relaxed pl-4">
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
