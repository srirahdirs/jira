import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'YZT';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <p>Welcome to Jira! alias Track! </p>
      <i>created  </i>By<b>{name}</b>
      </header>
      
    </div>
  );
}

export default App;
