import React from 'react'
import Link from 'next/link'

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 flex-shrink-0">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/influencers" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Influencers
            </Link>
          </li>
          <li>
            <Link href="/campaigns" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Campaigns
            </Link>
          </li>
          <li>
            <Link href="/analytics" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Analytics
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar