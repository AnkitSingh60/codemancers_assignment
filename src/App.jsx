import { useEffect, useState } from "react";
import "./App.css";

const URL =
  "https://api.giphy.com/v1/gifs/search?api_key=owr0fGUQKHF9ZE8AC2WT293nXFFe1Qtg&q=random&limit=25&offset=0&rating=g&lang=en";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    let res = await fetch(URL);
    res = await res.json();
    // console.log(res.data);
    setData(
      res.data.map((item) => {
        return item.images.fixed_height.url;
      })
    );
  };
  console.log("data:", data);

  const searchGif = async () => {
    if (search.length > 0) {
      let res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=owr0fGUQKHF9ZE8AC2WT293nXFFe1Qtg&q=${search}&limit=25&offset=0&rating=g&lang=en`
      );
      res = await res.json();
      setData(
        res.data.map((item) => {
          return item.images.fixed_height.url;
        })
      );
      setSearch("");
    }
  };

  useEffect(() => {
    getData();
    searchGif();
  }, []);

  return (
    <div className="App">
      <h4 className="heading">CODEMANCERS GIFS SHOP</h4>
      <div className="input-group">
        <div className="form-outline search">
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            id="form1"
            className="form-control"
          />
          <button
            type="button"
            className="btn btn-primary "
            onClick={searchGif}
          >
            Search
          </button>
        </div>
      </div>
      <div className="result">
        {data.map((item) => {
          return <img className="gifs" src={item} alt="gifs" />;
        })}
      </div>
    </div>
  );
}

export default App;
