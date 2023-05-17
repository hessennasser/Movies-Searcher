import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [results, setResults] = useState();
  return (
    <div className="App">
      <Header />
      <Search setResults={setResults} />
      {
        results ? <Results results={results} /> :
          <h1 className='empty'>Please Enter Search Word</h1>
      }
    </div>
  );
}

export default App;
