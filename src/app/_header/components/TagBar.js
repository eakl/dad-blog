'use strcit'

import React from 'react'
import { Link } from 'react-router'

import './TagBar.css'

const TagBar = () => {
  return (
    <nav className='bloggy__tagbar'>
      <ul>
        <li><Link to='/latest'>LATEST</Link></li>
        <li><Link to='/popular'>POPULAR</Link></li>
        <li><Link to='/love'>LOVE</Link></li>
        <li><Link to='/journey'>JOURNEY</Link></li>
        <li><Link to='/feeling'>FEELING</Link></li>
        <li><Link to='/happiness'>HAPPINESS</Link></li>
      </ul>
    </nav>
  )
}

export default TagBar
