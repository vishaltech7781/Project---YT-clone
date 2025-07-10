import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoList_url);
      const data = await response.json();
      setData(data.items || []);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => (
        <Link to={`/video/${item.id}`} className="card" key={item.id}>
          <img src={item.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
          <h2>{item.snippet?.title}</h2>
          <h3>{item.snippet?.channelTitle}</h3>
          <p>
            {value_converter(item.statistics?.viewCount)} views &bull;{' '}
            {moment(item.snippet?.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
