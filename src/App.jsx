import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/video/video';
import Search from './pages/search/Search';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:videoId' element={<Video />} />
        <Route path='/search/:query' element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
