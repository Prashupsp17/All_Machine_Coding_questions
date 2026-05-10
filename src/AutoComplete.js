import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(true);
  const [cache, setCache] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);
  console.log(cache);
  console.log(searchResult);
  console.log(search);

  const url = `https://dummyjson.com/recipes/search?q=${search}`;

  // const fetchData = async () => {
  //   if (isLoading) return;
  //   setIsLoading(true);
  //   try {
  //     if (cache[search]) {
  //       console.log('CACHE returned', search);
  //       setSearchResult(cache[search]);
  //     } else {
  //       const res = await fetch(url);

  //       if (!res.ok) {
  //         throw new Error(`res status ${res.status}`);
  //       }

  //       const data = await res.json();
  //       setIsLoading(false);
  //       // cache[search] = data?.recipes;
  //       setSearchResult(data?.recipes);
  //       setCache((prev) => ({
  //         ...prev,
  //         [search]: data?.recipes,
  //       }));
  //       setIsResultVisible(true);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setIsLoading(false);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const fetchData = async () => {
    if (cache[search]) {
      console.log('CACHE HIT 🔥', search);
      setSearchResult(cache[search]);
      setIsResultVisible(true);
      return;
    }

    if (isLoading) return;

    try {
      setIsLoading(true);
      console.log('API CALL 🚀', search);

      const res = await fetch(url);
      const data = await res.json();

      setSearchResult(data.recipes);

      setCache((prev) => ({
        ...prev,
        [search]: data.recipes,
      }));

      setIsResultVisible(true);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!search.trim()) {
      setSearchResult([]);
      return;
    }
    let timeout = null;

    timeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const handleKeyDown = (e) => {
    if (!searchResult.length) return;

    if (e.key === 'ArrowDown') {
      setActiveIndex((prev) => {
        if (prev < searchResult.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return searchResult.length - 1;
        }
      });
    }
  };
  return (
    <div>
      <h6>Autocomplete Typehead</h6>
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          style={{ width: '90%' }}
          value={search}
          // ref={}
          onKeyDown={(e) => handleKeyDown(e)}
          onFocus={() => setIsResultVisible(true)}
          onBlur={() => setIsResultVisible(false)}
          onChange={(e) => setSearch(e.target.value)}
          // onMouseDown={(e) => e.preventDefault()}
        />
        <div
          style={{
            position: 'absolute',
            zIndex: '99',
            backgroundColor: 'grey',
            height: 'auto',
            maxHeight: '100px',
            border: '1px solid black',
            width: '91%',
            overflowY: 'scroll',
            // overflow: 'hidden',
          }}
        >
          {isLoading && <h5>...loading</h5>}
          {searchResult.length > 0 && isResultVisible && (
            <ul
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '10px',
                listStyle: 'none',
              }}
            >
              {searchResult &&
                searchResult.map((item, index) => {
                  return (
                    <li
                      // ref={}
                      // onKeyDown={(e) => handleKeyDown(e, index)}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setSearch(item.name);
                        setIsResultVisible(false);
                      }}
                      className="list-item"
                      style={{
                        cursor: 'pointer',
                        backgroundColor:
                          activeIndex === index ? 'black' : 'transparent',
                        color: activeIndex === index ? 'white' : 'inherit',
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default AutoComplete;
