import React from 'react';
import './ColorDisplay.css';

import { useParams } from 'react-router-dom';

export default function ColorDisplay() {
  const { red, green, blue } = useParams();

  // background color takes on rgb value specified in params
  // text color takes on inverse of that
  return (
    <section
      className="color-display"
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
    >
      <h1 style={{ color: `rgb(${255 - red}, ${255 - green}, ${255 - blue})` }}>
        rgb({red}, {green}, {blue})
      </h1>
      <p style={{ color: `rgb(${255 - red}, ${255 - green}, ${255 - blue})` }}>
        (you can also set the color manually through the url)
      </p>
    </section>
  );
}
