interface MusicWidgetProps {
  spotifyUri?: string;
  className?: string;
}

const DEFAULT_SPOTIFY_URI = "playlist/37i9dQZF1DXcBWIGoYBM5M";

export default function MusicWidget({
  spotifyUri = DEFAULT_SPOTIFY_URI,
  className = "",
}: MusicWidgetProps) {
  return (
    <div className={`rounded-card overflow-hidden relative ${className}`}>
      <iframe
        src={`https://open.spotify.com/embed/${spotifyUri}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ minHeight: "100%", minWidth: "100%" }}
      />
    </div>
  );
}
