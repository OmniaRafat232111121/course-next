import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
    <ul>
    <li>
    <Link href="/">Home</Link>
    </li>
    <li>
    <Link>About</Link>
    </li>
    </ul>
      
    </nav>
  )
}

export default Nav
