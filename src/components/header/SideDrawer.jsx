import React from 'react'


import './sideDrawer.css'
const SideDrawer = props => {
  return (
    <div className='side-drawer' onClick={props.onClick}> {props.children}</div>
  )
}

export default SideDrawer