import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const URL = "https://api.giphy.com/v1/gifs/search?api_key=owr0fGUQKHF9ZE8AC2WT293nXFFe1Qtg&q=hello&limit=25&offset=0&rating=g&lang=en";

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async() => {
    let res = await fetch(URL);
    res = await res.json() 
    // console.log(res.data);
    setData(res.data);
  }
  // console.log('data:', data)

  useEffect(() => {
    getData()
  }, [])
  


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
