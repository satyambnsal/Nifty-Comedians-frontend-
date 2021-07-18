import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initContract } from './common/utils/near_contract';

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(<App />, document.querySelector('#root'));
  })
  .catch(console.error);
