import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Ghibli from '../assets/ghibli.mp4';
import ColorThief from 'colorthief';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
let lanyardInterval: ReturnType<typeof setInterval> | null = null;
let lastFetchedTrackId: string | null = null;


interface SpotifyData {
  track_id: string;
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
  timestamps: {
    start: number;
    end: number;
  };
}

interface LanyardResponse {
  success: boolean;
  data: {
    listening_to_spotify: boolean;
    spotify: SpotifyData | null;
  };
}

interface SpotifyActivityProps {
  userId: string;
}

const SpotifyActivity: React.FC<SpotifyActivityProps> = ({ userId }) => {
  const [spotify, setSpotify] = useState<SpotifyData | null>(null);
  const [, setPrevTrackId] = useState<string | null>(null);
  const [fade, setFade] = useState(false);
  const [gradient, setGradient] = useState<string>('');
  const [, setTextColor] = useState<string>('black');
  const tiltRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile && tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }

    return () => {
      if (!isMobile && tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [isMobile]);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const json: LanyardResponse = await res.json();
        if (json.success && json.data.listening_to_spotify && json.data.spotify) {
          const newTrack = json.data.spotify;
          if (newTrack.track_id !== lastFetchedTrackId) {
            setFade(true);
            setTimeout(() => {
              setSpotify(newTrack);
              setPrevTrackId(newTrack.track_id);
              lastFetchedTrackId = newTrack.track_id;
              setFade(false);
            }, 300);
          }
        } else {
          setSpotify(null);
          setPrevTrackId(null);
          lastFetchedTrackId = null;
        }
      } catch (err) {
        console.error('Error fetching Lanyard data:', err);
        setSpotify(null);
        setPrevTrackId(null);
      }
    };
  
    // Fetch immediately on mount
    fetchSpotifyData();
  
    // Only set interval once
    if (!lanyardInterval) {
      lanyardInterval = setInterval(fetchSpotifyData, 15000);
    }
  
    // Optional: clear when window unloads (not unmount, since it's singleton)
    const unloadHandler = () => {
      if (lanyardInterval) {
        clearInterval(lanyardInterval);
        lanyardInterval = null;
      }
    };
  
    window.addEventListener('beforeunload', unloadHandler);
    return () => window.removeEventListener('beforeunload', unloadHandler);
  }, [userId]);
  

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdate = 0;

    const updateProgress = (timestamp: number) => {
      if (timestamp - lastUpdate > 1000) {
        if (spotify) {
          const now = Date.now();
          const total = spotify.timestamps.end - spotify.timestamps.start;
          const current = now - spotify.timestamps.start;
          const percent = Math.min((current / total) * 100, 100);
          setProgress(percent);
        } else {
          setProgress(0);
        }
        lastUpdate = timestamp;
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [spotify]);

  const getLuminance = (rgb: number[]): number => {
    const [r, g, b] = rgb.map((color) => color / 255);
    const a = [r, g, b].map((color) =>
      color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4)
    );
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  useEffect(() => {
    if (spotify && !isMobile) {
      const getGradientFromImage = () => {
        const img = imgRef.current;
        if (!img) return;

        const colorThief = new ColorThief();

        if (img.complete) {
          try {
            const rgb: number[] = colorThief.getColor(img);
            const luminance = getLuminance(rgb);
            const newTextColor = luminance > 0.5 ? 'black' : 'white';
            setTextColor(newTextColor);
            setGradient(`linear-gradient(135deg, rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}), #3E2B2B)`);
          } catch (error) {
            console.warn('ColorThief error:', error);
          }
        } else {
          img.addEventListener('load', () => {
            try {
              const rgb: number[] = colorThief.getColor(img);
              const luminance = getLuminance(rgb);
              const newTextColor = luminance > 0.5 ? 'black' : 'white';
              setTextColor(newTextColor);
              setGradient(`linear-gradient(135deg, rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}), #3E2B2B)`);
            } catch (error) {
              console.warn('ColorThief error:', error);
            }
          });
        }
      };

      getGradientFromImage();
    } else {
      setGradient('linear-gradient(135deg,rgb(64, 64, 85),rgb(231, 179, 134))');
      setTextColor('white');
    }
  }, [spotify, isMobile]);

  return (
    <div
      ref={!isMobile ? tiltRef : undefined}
      className="relative w-[37vw] sm:w-[22.23vw] max-w-[400px] aspect-[5.33/10] bg-black rounded-[4vw] sm:rounded-[2.8vw] border-[0.72vw] border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center sm:transform"
    >
      <div className="absolute top-0 w-[45%] max-w-[160px] h-[0.8rem] sm:h-[1.45rem] bg-black rounded-b-xl z-10 left-1/2 -translate-x-1/2" />

      <div
        className={`relative w-[94%] aspect-[5.1/10] rounded-xl bg-zinc-900 shadow-inner transform transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-0' : 'opacity-100'
        } overflow-hidden`}
        style={{ background: gradient }}
      >
        {spotify ? (
          <img
            ref={imgRef}
            crossOrigin="anonymous"
            src={spotify.album_art_url}
            alt={spotify.album}
            className="w-full h-[60%] object-cover"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[60%] object-cover"
          >
            <source src={Ghibli} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="absolute top-[2.2%] left-[4.5%] text-white text-[0.7vw] tracking-widest opacity-80 uppercase">
          {spotify ? 'Now Playing' : 'Spotify'}
        </div>

        <div className="p-[1.2vw] text-white flex flex-col items-center text-center h-[40%] justify-center">
          <h2 className="text-[1.1vw] font-interbold">
            {spotify ? spotify.song : 'O F F L I N E'}
          </h2>
          <p className="text-[0.85vw] mt-[0.2vh] text-zinc-300">{spotify?.artist}</p>
          <p className="text-[0.7vw] text-zinc-400 italic">{spotify?.album}</p>

          <div className="p-1vh] flex flex-col justify-center items-center h-[40%] text-white">
            <div className="w-[15.3vw] h-[0.5vh] bg-zinc-800 rounded-full overflow-hidden mb-[2vh]">
              <div
                className="h-full bg-white"
                style={{
                  width: `${progress}%`,
                  transition: 'width 0.2s ease-out',
                }}
              ></div>
            </div>

            <div className="flex gap-[1.8vw] items-center">
              <FontAwesomeIcon icon={faBackward} className="text-[1.3vw] hover:scale-110 transition-transform duration-200 cursor-pointer" />
              <FontAwesomeIcon icon={faPause} className="text-[1.8vw] hover:scale-125 transition-transform duration-200 cursor-pointer" />
              <FontAwesomeIcon icon={faForward} className="text-[1.3vw] hover:scale-110 transition-transform duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyActivity;
