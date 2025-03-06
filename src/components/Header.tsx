import React from 'react'
import ThemeToggle from './ThemeToggle'
import ViewToggle from './ViewToggle'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Influencer Marketplace</h1>
      <div className="flex items-center space-x-4">
        <ViewToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header