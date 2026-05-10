import React from 'react';
import { useState, useEffect, useRef } from 'react';

const InfiniteScrolling = () => {
  const url = `https://meme-api.com/gimme/21`;
  const loadingRef = useRef(false);
  // window.scrollY
  // window.innerHeight
  // document.body.scrollHeight;

  const [memes, setMemes] = useState([]);
  console.log(memes);
  console.log(memes.length);
  const [loading, setLoading] = useState(false);

  const fetchMemes = async () => {
    if (loadingRef.current) return;
    try {
      loadingRef.current = true;
      // setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`res status ${res.status}`);
      }

      const data = await res.json();
      setLoading(false);
      loadingRef.current = false;
      setMemes((prevMemes) => [...prevMemes, ...data.memes]);
    } catch (err) {
      console.log(err);
    } finally {
      loadingRef.current = false;
      // setLoading(false);
    }
  };

  const windowScroll = () => {
    if (loading) return;
    let timeout = null;

    timeout = setTimeout(function () {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchMemes();
        console.log(true);
      } else {
        console.log(false);
      }
    }, 10000);
  };
  useEffect(() => {
    fetchMemes();

    window.addEventListener('scroll', windowScroll);

    return () => {
      window.removeEventListener('scroll', windowScroll);
      clearInterval(timeout);
    };
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'grid',
          width: '100%',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '20px',
        }}
      >
        {memes &&
          memes.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.url} width="50" height="50" loading="lazy" />
                <div style={{ fontSize: '10px' }}>{item.author}</div>
              </div>
            );
          })}
      </div>
      {loading.current && <div>...loa ding</div>}
    </div>
  );
};
export default InfiniteScrolling;
