import React, { useEffect, useState } from 'react';
import './Search.css';
import { useParams, Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';

const Search = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  const fetchSearchResults = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=20&type=video&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    setVideos(data.items || []);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      {videos.map((video) => (
        <Link
          to={`/video/${video.id.videoId}`}
          className="search-card"
          key={video.id.videoId}
        >
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
          <div className="search-info">
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.channelTitle}</p>
            <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Search;
