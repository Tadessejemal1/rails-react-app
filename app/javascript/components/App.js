import React from 'react'
import Greeting from './Greeting';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App