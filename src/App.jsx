import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);


  return (
    <div className="App">
      <h1 className="heading">Gifs</h1>
      <div className='search'>
        <input type="text" placeholder="Search"  />
        <button>Search</button>
      </div>
      <div className='result'>
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      <img className='gifs' src="https://media0.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif" alt="gifs" />
      </div>



    </div>
  );
}

export default App;
