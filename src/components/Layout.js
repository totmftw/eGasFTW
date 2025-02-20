import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
