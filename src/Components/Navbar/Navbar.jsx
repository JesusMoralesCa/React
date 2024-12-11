import React, { useState } from 'react'
import './Navbar.css'
import logowhite from '../../assets/logoblack.png'
import logoblack from '../../assets/logowhite.png'
import night from '../../assets/day.png'
import day from '../../assets/night.png'
import search_w from '../../assets/search_w.png'
import search_b from '../../assets/search_b.png'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logowhite : logoblack} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>

        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={theme == 'light' ? search_w : search_b} alt=""/>
        </div>

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? day : night} alt="" className='toggle-icon'/>

    </div>
  )
}

export default Navbar
