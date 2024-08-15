import React, { useState } from 'react';

const backgrounds = [
  { name: 'Apple theme', url: '/2.jpg' },
  { name: 'Black&Gray', url: '/4.jpg' },
  { name: 'Red&Blue', url: '/5.jpg' },
  { name: 'Black&White', url: '/6.jpg' },
  { name: 'Black&White1', url: '/7.jpg' },
  { name: 'Black', url: '/8.jpg' },
  { name: 'Cartoon', url: '/doodle1.jpg' },
];

const BackgroundSelector = () => {
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0].url);

  const handleChange = (event) => {
    setSelectedBackground(event.target.value);
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${event.target.value})`;
  };

  return (
    <select value={selectedBackground} onChange={handleChange}>
      {backgrounds.map((bg) => (
        <option key={bg.url} value={bg.url}>
          {bg.name}
        </option>
      ))}
    </select>
  );
};

export default BackgroundSelector;