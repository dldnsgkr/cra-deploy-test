import React from 'react';
import AIPage from './AIPage';
import SelfIntroductionPage from './SelfIntroductionPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AIPage />
        <SelfIntroductionPage />
      </header>
    </div>
  );
}

export default App;
