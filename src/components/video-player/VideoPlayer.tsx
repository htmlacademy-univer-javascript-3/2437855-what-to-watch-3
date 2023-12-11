import { useState, useEffect, useRef } from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  poster: string;
};

const VIDEO_TIMEOUT = 1000;

function VideoPlayer({
  isPlaying,
  src,
  poster,
}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const interval = setInterval(() => {
      setIsLoaded(true);
    }, VIDEO_TIMEOUT);

    return () => {
      clearInterval(interval);
      setIsLoaded(false);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      if (isLoaded) {
        videoRef.current?.play();
      } else {
        videoRef.current?.load();
      }
    }
  }, [isLoaded]);

  return (
    <video
      width="280px"
      height="175px"
      muted
      ref={videoRef}
      src={src}
      poster={poster}
    />
  );
}

export default VideoPlayer;
