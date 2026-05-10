import React from 'react';
import { useState, useEffect } from 'react';
import useFetchHook from './useFetchHook';

const ImplementationOfUseFetchHook = () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const { isLoading, error, data } = useFetchHook(url);
  console.log(isLoading);
  console.log(data);

  if (isLoading) return <h1>....Loading</h1>;

  return <div>UseFetch Hook</div>;
};
export default ImplementationOfUseFetchHook;
