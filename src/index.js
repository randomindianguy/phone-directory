import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddSubscriber from './AddSubscriber';
import './common/common.css';

ReactDOM.render(<AddSubscriber />, document.getElementById('root'));
registerServiceWorker();