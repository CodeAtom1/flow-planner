import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import UserList from './components/UserList';
import { useState, useRef } from 'react';
import Tooltip from './components/Tooltip';

function App() {
  const buttonRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchForm />
        <UserList />
      </header>

      {/* <button ref={buttonRef}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        style={{padding: '10px 20px', fontSize: '16px'}}>
          Hover over me
        </button>
      {isTooltipVisible && (
        <Tooltip targetRef={buttonRef}>
          This is a tooltip using portals!
        </Tooltip>
      )} */}
    </div>
  );
}

export default App;
