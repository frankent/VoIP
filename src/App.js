import React from 'react';
import AgoraRTC from 'agora-rtc-sdk';
import logo from './logo.svg';
import './App.css';

function App() {
  AgoraRTC.getDevices(devices => {
    console.log('All Devices - AGORA', devices);
  });

  navigator.mediaDevices.enumerateDevices().then(devices => {
    console.log('All Native Devices - AGORA', devices);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
