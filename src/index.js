import React from 'react';
import  ReactDOM  from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';


ReactDOM.render(
  <SpeechProvider  appId='8f6d2e74-94c6-4d82-8ebe-3e39096fd75e' language='en-US'>
    <Provider>
      <App/>
    </Provider>,
    </SpeechProvider>,
document.getElementById('root')
);