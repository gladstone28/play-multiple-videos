import React from 'react';
import VideoList from './components/VideoList';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Responsive YouTube Video Player</h1>
      <VideoList />
    </div>
  );
};

export default App;
