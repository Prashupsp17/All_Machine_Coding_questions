import React from 'react';
import { useState, useEffect } from 'react';

const useFetchHook = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async (signal) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, { signal });
      if (!res.ok) {
        throw new Error(`Res status ${res.status}`);
      }
      const resData = await res.json();
      setIsLoading(false);
      setData(resData);
    } catch (err) {
      console.log(err);
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
      setIsLoading(false);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetchData(signal);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
export default useFetchHook;
