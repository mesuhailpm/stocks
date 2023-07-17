"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Stocks from '@components/Stocks';

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [fetchLoading, setFetchLoading] = useState();
  const [stockData, setStockData] = useState([])

  // const fetchStockItems = async () => {
  //   const response = await fetch(`api/stock`,{cache:'no-store'});
  //   const data = await response.json();
  //   setStockData(data);
  // };
  const fetchStockItemsBySearch = async (keyword) => {
    setFetchLoading(true);
    const response = await fetch(`api/stock?query=${keyword}`,{cache:'no-store'});
    const data = await response.json();
    setStockData(data);
    setFetchLoading(false);
  };

  const handleTypeSearch = (e) => {
    setSearchValue(e.target.value);
    fetchStockItemsBySearch(e.target.value);
  };

  // useEffect(() => { 
  //   console.log('useEffect');//test
  //   fetchStockItems()
  // },[])

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="search-container w-4/6">
          <input
            type="text"
            placeholder="Search through items..."
            value={searchValue}
            onChange={handleTypeSearch}
            className="w-full border border-purple-500 rounded-sm px-2 bg-gray-300 text-sm text-black capitalize shadow-lg"
            />
              {stockData &&
              <div className='dropdown-list flex flex-col'>
                {stockData.map((item, index) =>(
                  <div key={index} className="flex justify-between">
                    <p>{item.name}</p>
                    <div className="flex">
                      <p>-</p>
                      <p>{item.quantity}</p>
                      <p>+</p>
                    </div>


                  </div>
                ))}
              

            </div>}
        </section>
          
      </main>
      <Stocks 
        />
    </>
  );
}
