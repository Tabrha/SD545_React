

import AudioPlayer from "react-h5-audio-player";
import { useCallback, useEffect, useState } from "react";
import Song from "../types/song.type";
import "react-h5-audio-player/lib/styles.css";


interface MusicPlayerProps {
  song: Song | null;
  playlist: Song[];
}

export default function MusicPlayer(props: MusicPlayerProps) {
  const { song, playlist } = props;

  const [loop, setLoop] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(song);
  
  useEffect(() => {
    setCurrentSong(song);
  }, [song]);

  const playingIndex = Math.max( 0, playlist.findIndex((s) => s.id === currentSong?.id)  
  );

  const playNext = useCallback(() => {
    if (loop) {
      setCurrentSong(playlist[playingIndex]);
    } else {
      const index = (playingIndex + 1) % playlist.length;
      setCurrentSong(playlist[index]);
    }
  }, [playingIndex, playlist, loop]);

  const playPrevious = () => {
    if (loop) {
      setCurrentSong(playlist[playingIndex]);
    } else {
      const index = playingIndex === 0 ? playlist.length - 1 : playingIndex - 1;
      setCurrentSong(playlist[index]);
    }
  };

  return (
    <div className="fixed-bottom">
      <AudioPlayer
        src={
          "http://localhost:9000/" +
         
          `${currentSong?.urlPath}?version=${Date.now()}`
        }

      
        onClickPrevious={playPrevious}
        onClickNext={playNext}
        onEnded={playNext}
        autoPlayAfterSrcChange
        showSkipControls
        showJumpControls={false}
        customAdditionalControls={[
         
          <button key="loop" onClick={() => setLoop(!loop)} className="btn">
            {loop ? (
              <i className="bi bi-arrow-repeat"></i>
            ) : (
              <i className="bi bi-shuffle"></i>
            )}
          </button>,
        ]}
      />
    </div>
  );
}




































































































































































































































































