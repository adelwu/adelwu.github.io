"use client";

import { useRef, useState } from "react";

interface VideoCardProps {
  videoSrc: string;
  thumbnail?: string;
  className?: string;
}

export default function VideoCard({
  videoSrc,
  thumbnail,
  className = "",
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const handleMouseEnter = () => {
    playVideo();
  };

  const handleMouseLeave = () => {
    pauseVideo();
  };

  return (
    <div
      className={`group relative aspect-[4/5] bg-bg-subtle rounded-card overflow-hidden cursor-pointer ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={thumbnail}
        preload="metadata"
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Play icon overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-DEFAULT ${isPlaying ? "opacity-0" : "opacity-100"}`}>
        <svg
          className="w-12 h-12 text-white drop-shadow-lg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
