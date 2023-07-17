'use client'
import { useEffect, useState } from "react";

const Stocks = () => {
    const [stockData, setStockData] = useState([])
    const [fetchLoading, setFetchLoading] = useState(true);


    const fetchStockItems = async () => {
        const response = await fetch(`api/stocks`,{cache:'no-store'});
        const data = await response.json();
        setStockData(data);
        setFetchLoading(false);
      };

    useEffect(() => {
        console.log('useEffect inside stock');//test
        fetchStockItems()
    }
        ,[])
    const stockTable = stockData?.map((stock,index) =>(
        <tr key={index}>
            <td className="table_cell">{stock.name}</td>
            <td className="table_cell">{stock.quantity}</td>
        </tr>
    ))

    if (fetchLoading) return <>Loading...</>
    return(
        <>
        <h2>Current Stock</h2>
        <table className="current ">
            <thead>
                <tr>
                    <th className="table_head">Item</th>
                    <th className="table_head">Quanity</th>
                </tr>
            </thead>
            <tbody>{stockTable}</tbody>
        </table>
        </>
    )
}

export default Stocks