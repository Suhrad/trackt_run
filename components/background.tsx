"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const getFileExtension = (url: string): string => {
  return url.split(".").pop()?.toLowerCase() || "";
};

const isVideo = (extension: string): boolean => {
  const videoExtensions = ["mp4", "webm", "ogg", "mov", "avi", "m4v"];
  return videoExtensions.includes(extension);
};

const VideoWithPlaceholder = ({
  src,
  className,
  placeholder,
}: {
  src: string;
  className?: string;
  placeholder?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && !placeholder) {
      console.warn("No placeholder provided for video");
    }
  }, [placeholder]);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("canplay", handleCanPlay);
      video.load();
      
      if (video.readyState >= 2) {
        setVideoLoaded(true);
      }
      
      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [src]);

  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch(console.error);
    }
  }, [videoLoaded]);

  return (
    <>
      {placeholder ? (
        <Image
          src={placeholder}
          loading="eager"
          priority
          sizes="100vw"
          alt="Background"
          className={cn(className, { invisible: videoLoaded })}
          quality={100}
          fill
        />
      ) : null}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        webkit-playsinline="true"
        loop
        controls={false}
        preload="metadata"
        autoPlay
        className={cn(className, { invisible: !videoLoaded })}
      />
    </>
  );
};

const VideoPlaylist = ({
  videos,
  className,
}: {
  videos: string[];
  className?: string;
}) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Start playing the first video automatically
  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.play().catch(console.error);
    }
  }, []);

  // Handle video transitions
  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    
    if (currentVideo) {
      const handleTimeUpdate = () => {
        const duration = currentVideo.duration;
        const currentTime = currentVideo.currentTime;
        
        // Start transition 0.5 seconds before the video ends
        if (duration && currentTime >= duration - 0.5 && !isTransitioning) {
          const nextIndex = (currentVideoIndex + 1) % videos.length;
          const nextVideo = videoRefs.current[nextIndex];
          
          if (nextVideo) {
            setIsTransitioning(true);
            
            // Start the next video
            nextVideo.currentTime = 0;
            nextVideo.play().catch(console.error);
            
            // Complete transition after a short delay
            setTimeout(() => {
              setCurrentVideoIndex(nextIndex);
              setIsTransitioning(false);
            }, 500);
          }
        }
      };

      currentVideo.addEventListener("timeupdate", handleTimeUpdate);
      
      return () => {
        currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentVideoIndex, isTransitioning, videos.length]);

  return (
    <>
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(el) => (videoRefs.current[index] = el)}
          src={src}
          muted
          playsInline
          webkit-playsinline="true"
          controls={false}
          preload="metadata"
          loop
          autoPlay
          className={cn(
            className,
            "transition-opacity duration-500 ease-in-out"
          )}
          style={{
            opacity: isTransitioning && index === (currentVideoIndex + 1) % videos.length ? 1 : 
                    isTransitioning && index === currentVideoIndex ? 0 :
                    index === currentVideoIndex ? 1 : 0,
          }}
        />
      ))}
    </>
  );
};

export const Background = ({
  src,
  videos,
  placeholder,
}: {
  src?: string;
  videos?: string[];
  placeholder?: string;
}) => {
  const classNames =
    "absolute bg-background left-0 top-0 w-full h-full object-cover rounded-[42px] md:rounded-[72px]";

  // If videos array is provided, use playlist mode
  if (videos && videos.length > 0) {
    return (
      <VideoPlaylist
        videos={videos}
        className={classNames}
      />
    );
  }

  // Single video or image mode
  if (src) {
    const extension = getFileExtension(src);
    const isVideoFile = isVideo(extension);

    if (isVideoFile) {
      return (
        <VideoWithPlaceholder
          src={src}
          className={classNames}
          placeholder={placeholder}
        />
      );
    }

    return (
      <Image
        priority
        loading="eager"
        src={src}
        alt="Background"
        className={classNames}
        sizes="100vw"
        fill
      />
    );
  }

  return null;
};
