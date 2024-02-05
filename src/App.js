import React from 'react';
import './App.css'; // Import your app-specific CSS file

const App = () => {
  return (
    <div className="app">
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src="assets/LeBlancCafe.mp4" type="video/mp4" />
          {/* Add additional source tags for other video formats if desired */}
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Menu */}
      <div className="menu">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      {/* Add other components and content here */}
    </div>
  );
};

export default App;
