import React from 'react';
import { StoreProvider } from './context/useStore';
import HomePage from './components/HomePage';

const App: React.FC = () => (
  <div className="App">
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  </div>
);

export default App;
