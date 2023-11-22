import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";

export const PlayerUseEffect = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <div className="border border-blue-500 p-3 mb-4 mt-9 w-full text-center">
        <p className="text-2xl text-blue-400 mb-3">
          {playing ? "Rodando" : "Pausado"}
        </p>
        <button
          className="bg-blue-400 rounded-md p-3"
          onClick={() => setPlaying(!playing)}
        >
          Play/Pause
        </button>
      </div>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </div>
  );
};
