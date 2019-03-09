import React from 'react';
import ReactDOM from 'react-dom';
import './file.css';
import App from './App';

let song_id = window.location.pathname.slice(1) || 1;
ReactDOM.render(<App song_id={song_id}/>, document.getElementById('description'));
