import React, { useEffect, useState } from 'react';
import Tilt from 'react-vanilla-tilt';

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
  const [prevTrackId, setPrevTrackId] = useState<string | null>(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const json: LanyardResponse = await res.json();
        if (json.success && json.data.listening_to_spotify && json.data.spotify) {
          const newTrack = json.data.spotify;
          if (newTrack.track_id !== prevTrackId) {
            setFade(true);
            setTimeout(() => {
              setSpotify(newTrack);
              setPrevTrackId(newTrack.track_id);
              setFade(false);
            }, 300); // duration of fade-out
          }
        } else {
          setSpotify(null);
          setPrevTrackId(null);
        }
      } catch (err) {
        console.error('Error fetching Lanyard data:', err);
        setSpotify(null);
        setPrevTrackId(null);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 15000);
    return () => clearInterval(interval);
  }, [userId, prevTrackId]);

  // Placeholder image when not listening to Spotify
  const placeholderImage = 'https://via.placeholder.com/300x300.png?text=No+Spotify+Activity';

  return (
    <Tilt options={{ scale: 1.05, max: 15, speed: 400 }} className="inline-block">
      <div
        className={`p-4 rounded-xl shadow-md bg-orange-50 max-w-md transform transition-all duration-500 ease-in-out ${
          fade ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <img
          src={spotify ? spotify.album_art_url : placeholderImage}
          alt={spotify ? spotify.album : 'Not listening to Spotify'}
          className="rounded-lg w-full mb-4 transition-all duration-500"
        />
        <h2 className="!text-black text-lg font-bold">{spotify ? spotify.song : 'Not listening to Spotify'}</h2>
        <p className="!text-black">{spotify ? spotify.artist : 'N/A'}</p>
        <p className="!text-black text-sm italic">{spotify ? spotify.album : 'N/A'}</p>
      </div>
    </Tilt>
  );
};

export default SpotifyActivity;
