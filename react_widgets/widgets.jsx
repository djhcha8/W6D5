import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/app';

const tabsInfo = [{header: "one", content: "content1"},
  {header: "two", content: "content2"},
  {header: "three", content: "content3"}];
  

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App tabsInfo = {tabsInfo} />, root);
});