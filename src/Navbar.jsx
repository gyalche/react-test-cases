import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './theme-context'

const Navbar = () => {
  const theme=useTheme();
  console.log("mytheme", theme)
  return (
    <>
    <nav className="nav">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </div>
      <div className="mode-switch">
        <label>
          <input type="checkbox" onChange={theme.toggleTheme} checked={theme.theme==='dark'} />
        <span className="slider"></span>

        </label>
      </div>
      /*getByTitle testing*/

    </nav>
    <button title="click me button">click</button>
    <br />
    <span title="myicons">icons</span>
    <span title="myicons1">icons2</span>
    <span title="myicons1">icons3</span>

    </>
  )
}

export default Navbar