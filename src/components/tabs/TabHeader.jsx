import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import {NavLink} from 'react-router-dom'
import Tab from '@material-ui/core/Tab'

const TabHeader = () => {
  return (
    <AppBar position='static'>
      <NavLink activeClassName='active' to='/messages'>
        <Tab label='Message Tab'/>
      </NavLink>
      <NavLink activeClassName='active' to='/colors'>
        <Tab label='Colors Tab'/>
      </NavLink>
    </AppBar>
  )
}

export default TabHeader