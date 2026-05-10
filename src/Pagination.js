import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

const Pagination = () => {
  const url = `https://dummyjson.com/products?limit=30`;
  const [products, setProducts] = useState([]);
  console.log(products);
  const [page, setPage] = useState(1);
  const perPage = 3;

  const totalPages = Math.floor(products.length / perPage);
  console.log(totalPages);

  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Res Status ${res.status}`);
      }

      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePagination = (val) => {
    setPage(val);
  };

  let lastPage = perPage * page;
  let firstPage = lastPage - perPage;

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    } else {
      setPage(1);
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    } else {
      setPage(totalPages);
    }
  };
  return (
    <div>
      <div
        style={{
          display: 'grid',
          width: '100%',
          gridTemplateColumns: 'repeat(3,1fr)',
        }}
      >
        {products &&
          products.slice(firstPage, lastPage).map((item, i) => {
            return (
              <div>
                <div>{item.title}</div>
                <img
                  src={item.thumbnail}
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
            );
          })}
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        {Array.from({ length: products.length / perPage }).map((btn, i) => {
          return (
            <button
              style={{ backgroundColor: page === i + 1 ? 'yellow' : 'grey' }}
              onClick={() => handlePagination(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
export default Pagination;
