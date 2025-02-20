import React, { useState, useEffect } from 'react';
import ReactGridLayout from 'react-grid-layout';

export default function Dashboard() {
  const defaultLayout = [
    { i: 'orderStatus', x: 0, y: 0, w: 3, h: 4 },
    { i: 'returnStatus', x: 3, y: 0, w: 3, h: 4 },
    { i: 'totalRevenue', x: 6, y: 0, w: 3, h: 4 },
    { i: 'recentOrders', x: 0, y: 4, w: 4, h: 4 },
    { i: 'trendingProducts', x: 4, y: 4, w: 3, h: 4 },
    { i: 'actionItems', x: 7, y: 4, w: 2, h: 4 },
    { i: 'inventoryAlerts', x: 9, y: 4, w: 3, h: 4 },
  ];

  const [layout, setLayout] = useState(defaultLayout);

  useEffect(() => {
    const savedLayout = localStorage.getItem('dashboardLayout');
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout)
    localStorage.setItem('dashboardLayout', JSON.stringify(newLayout))
  }

  return (
    <div className="text-white bg-gray-900 h-screen overflow-y-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-800 p-2 rounded">TOTM</div>
        </div>
      </div>

      <div className="bg-gray-800 p-2 rounded flex items-center mb-4">
        <input
          type="text"
          placeholder="Search with SKU, ASIN or Order No"
          className="flex-1 bg-transparent placeholder-gray-400 text-white focus:outline-none px-2"
        />
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">
          Search
        </button>
      </div>

      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={handleLayoutChange}
        draggableHandle=".drag-handle"
      >
        <div key="orderStatus" className="bg-gray-800 rounded p-4">
          <div className="drag-handle cursor-move mb-2 font-bold">Order Status</div>
          <ul className="space-y-1">
            <li className="flex justify-between"><span>Pending</span><span>64</span></li>
            <li className="flex justify-between"><span>RTD</span><span>64</span></li>
            <li className="flex justify-between text-yellow-400"><span>Breaching</span><span>64</span></li>
          </ul>
        </div>
        <div key="returnStatus" className="bg-gray-800 rounded p-4">
          <div className="drag-handle cursor-move mb-2 font-bold">Return Status</div>
          <ul className="space-y-1">
            <li className="flex justify-between"><span>Initiated</span><span>64</span></li>
            <li className="flex justify-between"><span>In Transit</span><span>80</span></li>
            <li className="flex justify-between"><span>RTO</span><span>14</span></li>
            <li className="flex justify-between text-red-400"><span>Rejected</span><span>8</span></li>
          </ul>
        </div>
        <div key="totalRevenue" className="bg-gray-800 rounded p-4">
          <div className="drag-handle cursor-move mb-2 font-bold">Total Revenue</div>
          <p className="text-xl">₹9,80,273.00</p>
          <div className="bg-gray-700 h-24 mt-2 flex items-center justify-center text-gray-300">Chart Placeholder</div>
        </div>
        <div key="recentOrders" className="bg-gray-800 rounded p-4">
          <div className="drag-handle cursor-move mb-2 font-bold">Recent Orders</div>
          <table className="w-full text-sm"><thead><tr><th className="text-left">SKU</th><th className="text-left">ASIN</th><th className="text-left">Buyer</th><th className="text-left">Status</th></tr></thead><tbody><tr><td>DB-JE200-4PC</td><td>BWKZWZR</td><td>John Doe</td><td>Pending</td></tr><tr><td>DB-JE200-4PC</td><td>BWKZWZR</td><td>Jane Smith</td><td>Shipped</td></tr></tbody></table>
        </div>
        <div key="trendingProducts" className="bg-gray-800 rounded p-4">
          <div className="drag-handle cursor-move mb-2 font-bold">Trending Products</div>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between"><span>DB-JE200-4PC</span><span>82%</span></li>
            <li className="flex justify-between"><span>DB-JE202-6PC</span><span>78%</span></li>
            <li className="flex justify-between"><span>DB-JE203-2PC</span><span>64%</span></li>
          </ul>
        </div>
        <div key="actionItems" className="bg-gray-800 rounded p-4">
          <div className="drag-handle cursor-move mb-2 font-bold">Action Items</div>
          <ul className="space-y-1 text-sm"><li>SKU: Brand Approval</li><li>SKU: Brand Approval</li><li>SKU: Brand Approval</li></ul>
        </div>
        <div key="inventoryAlerts" className="bg-gray-800 rounded p-4">
          <div className="drag-handle cursor-move mb-2 font-bold">Inventory Alerts</div>
          <p>Stock running low on these SKUs:</p>
          <ul className="space-y-1 text-sm mt-1"><li>DB-JE200-4PC: 12 left</li><li>DB-JE202-6PC: 5 left</li><li>DB-JE203-2PC: 0 left</li></ul>
        </div>
      </ReactGridLayout>
    </div>
  );
}
