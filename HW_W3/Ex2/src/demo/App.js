import React from 'react';
import InteractivePiano from './components/InteractivePiano';
import MadeWithLoveTag from './components/MadeWithLoveTag';
import './App.css';

const App = () => (
  <div className={'app__fullscreen-container'}>
    <div className={'app__body'}>
      <InteractivePiano />
    </div>
  </div>
);

export default App;
