import React from 'react'

export default function Inventory() {
  return (
    <div className="p-4 flex flex-col space-y-4 text-white">
      {/* Page Heading & Top Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4 md:mb-0">
          Inventory
        </h1>

        {/* Right-side buttons and TOTM */}
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
          {/* Filters Channel */}
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
            FILTERS CHANNEL
          </button>
          {/* Download */}
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
            DOWNLOAD ALL INVENTORY REPORTS
          </button>
          {/* Upload */}
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
            UPLOAD INVENTORY DETAILS
          </button>
          {/* TOTM (example placeholder) */}
          <div className="bg-gray-800 px-4 py-2 rounded flex items-center justify-center">
            TOTM
          </div>
        </div>
      </div>

      {/* Search Bar (Optional) */}
      <div className="flex items-center bg-gray-800 rounded p-2">
        <input
          type="text"
          placeholder="Search with SKU, ASIN or Order No"
          className="flex-1 bg-transparent placeholder-gray-400 text-white focus:outline-none px-2"
        />
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">
          Search
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-gray-800 rounded p-4 shadow flex-1">
        {/* 
          Make the table scrollable in both directions:
          - "overflow-auto" or "overflow-x-auto overflow-y-auto"
          - A fixed max-height or dynamic height ensures vertical scroll.
        */}
        <div className="overflow-auto max-h-[calc(100vh-300px)]">
          <table className="min-w-max w-full text-sm text-left text-gray-200">
            <thead className="bg-gray-700 text-gray-200 sticky top-0">
              <tr>
                <th className="px-4 py-2 whitespace-nowrap">SKU Number</th>
                <th className="px-4 py-2 whitespace-nowrap">Product Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Product Image</th>
                <th className="px-4 py-2 whitespace-nowrap">M.R.P</th>
                <th className="px-4 py-2 whitespace-nowrap">Base Stock</th>
                <th className="px-4 py-2 whitespace-nowrap">Amazon</th>
                <th className="px-4 py-2 whitespace-nowrap">Flipkart</th>
                <th className="px-4 py-2 whitespace-nowrap">Website</th>
                <th className="px-4 py-2 whitespace-nowrap">Last 60 Days Sales</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {/* SAMPLE ROWS */}
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">1234567890</td>
                <td className="px-4 py-2">Water Bottle</td>
                <td className="px-4 py-2">
                  {/* Example placeholder */}
                  <img
                    src="/placeholder.png"
                    alt="Product"
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">₹250</td>
                <td className="px-4 py-2">200</td>
                <td className="px-4 py-2">300</td>
                <td className="px-4 py-2">250</td>
                <td className="px-4 py-2">500</td>
                <td className="px-4 py-2">120</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">9876543210</td>
                <td className="px-4 py-2">Travel Mug</td>
                <td className="px-4 py-2">
                  <img
                    src="/placeholder.png"
                    alt="Product"
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">₹350</td>
                <td className="px-4 py-2">150</td>
                <td className="px-4 py-2">200</td>
                <td className="px-4 py-2">180</td>
                <td className="px-4 py-2">400</td>
                <td className="px-4 py-2">90</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
