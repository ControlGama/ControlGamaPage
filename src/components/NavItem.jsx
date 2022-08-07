import React from 'react'
import '@styles/NavItem.scss'

const NavItem = ({itemMenu}) => {
  return (
    <li className='navItem'>
      <itemMenu.icon className='navItemIcon' />
      {itemMenu.name}
    </li>
  )
}

export default NavItem