import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchForm />
        <UserList />
      </header>
    </div>
  );
}

export default App;
