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

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const json: LanyardResponse = await res.json();
        if (json.success && json.data.listening_to_spotify && json.data.spotify) {
          setSpotify(json.data.spotify);
        } else {
          setSpotify(null);
        }
      } catch (err) {
        console.error('Error fetching Lanyard data:', err);
        setSpotify(null);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 15000);
    return () => clearInterval(interval);
  }, [userId]);

  if (!spotify) {
    return <div>Not listening to Spotify right now.</div>;
  }

  return (
    <Tilt options={{ scale: 1.05, max: 15, speed: 400 }} className="inline-block">
      <div className="p-4 rounded-xl shadow-md bg-green-50 max-w-md">
        <img src={spotify.album_art_url} alt={spotify.album} className="rounded-lg w-full mb-4" />
        <h2 className="!text-black text-lg font-bold">{spotify.song}</h2>
        <p className="!text-black">{spotify.artist}</p>
        <p className="!text-black text-sm italic">{spotify.album}</p>
      </div>
    </Tilt>
  );
};

export default SpotifyActivity;