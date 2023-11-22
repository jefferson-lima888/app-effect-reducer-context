import { useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
};

export const VideoPlayer = ({ src, isPlaying }: Props) => {
  const videoTag = useRef<HTMLVideoElement>(null);
  return <video ref={videoTag} src={src} loop playsInline></video>;
};
