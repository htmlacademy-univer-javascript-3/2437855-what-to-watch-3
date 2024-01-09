import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  isMuting: boolean;
  src: string;
  poster: string;
};

function VideoPlayer({
  isPlaying,
  isMuting,
  src,
  poster,
}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();
  }, [isPlaying, isLoaded]);

  return (
    <video
      className="video"
      muted={isMuting}
      ref={videoRef}
      src={src}
      poster={poster}
    />
  );
}

export default VideoPlayer;
