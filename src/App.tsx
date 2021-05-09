import React from 'react';

import IMAGE from './react.png';
import LOGO from './logo.svg';

import './style.css';

export const App: React.FC = () => (
  <div>
    <h1>React Typescript Webpack Starter Template 📦🐱‍👤</h1>
    <img src={IMAGE} alt="" width="100" />
    <img src={LOGO} alt="" width="100" />
  </div>
);
