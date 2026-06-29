import React from 'react';
import { useState, useEffect } from 'react';

const Retry = () => {
  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const retryApiCall = async (retries = 4) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/invalid-endpoint`
      );

      if (!res.ok) {
        throw new Error(`res status ${res.status}`);
      }
    } catch (err) {
      console.log('err');
      if (retries > 0) {
        console.log(`No of retires : ${retries}`);
        await delay(5000);
        return retryApiCall(retries - 1);
      }
    }
  };

  useEffect(() => {
    retryApiCall();
  }, []);
  return <div>Retry</div>;
};
export default Retry;
