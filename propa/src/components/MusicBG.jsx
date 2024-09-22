// import { useState, useEffect, useRef } from "react";
// import mp3 from "../assets/music/Rat.mp3";
// import "../assets/styles/MusicBG.scss"

// const MusicBG = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audio = useRef(null);

//   useEffect(() => {
//     audio.current = new Audio(mp3);
//     audio.current.loop = true;
//     return () => {
//       audio.current.pause();
//     };
//   }, []);

//   const handlePlay = () => {
//     audio.current.play();
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     audio.current.pause();
//     setIsPlaying(false);
//   };

//   return (
//     <div>
//       {!isPlaying ? (
//         <button onClick={handlePlay}>Play Music</button>
//       ) : (
//         <button onClick={handlePause}>Stop</button>
//       )}
//     </div>
//   );
// };

// export default MusicBG;

import { useState, useEffect, useRef } from "react";
import mp3_1 from "../assets/music/Rat.mp3";
import mp3_2 from "../assets/music/Come.mp3"; 
import mp3_3 from "../assets/music/Wine.mp3";
import mp3_4 from "../assets/music/Brixton.mp3"; 
import "../assets/styles/MusicBG.scss";

const MusicBG = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const songs = useRef([mp3_4, mp3_2, mp3_1, mp3_3]); 
  const audio = useRef(new Audio(songs.current[currentTrackIndex]));

  useEffect(() => {
    const audioElement = audio.current;

    const handleEnded = () => {
      let nextTrackIndex = currentTrackIndex + 1;
      if (nextTrackIndex >= songs.current.length) {
        nextTrackIndex = 0; 
      }
      setCurrentTrackIndex(nextTrackIndex);
    };
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("ended", handleEnded);
      audioElement.pause();
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    audio.current.src = songs.current[currentTrackIndex];
    if (isPlaying) {
      audio.current.play();
    }
  }, [currentTrackIndex]);

  const handlePlay = () => {
    audio.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audio.current.pause();
    setIsPlaying(false);
  };

  return (
    <div>
      {!isPlaying ? (
        <button onClick={handlePlay}>Play Music</button>
      ) : (
        <button onClick={handlePause}>Stop</button>
      )}
    </div>
  );
};

export default MusicBG;
