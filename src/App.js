import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import Routes from './Routes';

// Store Configuration
import createStore from './store';

const STORE = createStore();

const App = () => {
  return (
    <Provider store={STORE}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
