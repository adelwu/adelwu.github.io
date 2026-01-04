import Widget from "./Widget";

interface MapWidgetProps {
  query?: string;
  className?: string;
}

const DEFAULT_QUERY = "San Francisco";

export default function MapWidget({
  query = DEFAULT_QUERY,
  className = "",
}: MapWidgetProps) {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <Widget className={className}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Widget>
  );
}
