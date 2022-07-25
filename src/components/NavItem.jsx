import React from 'react'
import '@styles/NavItem.scss'

const NavItem = ({itemMenu}) => {
  return (
    <li>
      <a href={itemMenu.link}>{itemMenu.name}</a>
    </li>
  )
}

export default NavItem