import React from 'react'
import Messages from '../messages/Messages'
import {useSelector} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import TabHeader from './TabHeader'
import Select from '../select/Select'

const Tabs = () => {
  const color = useSelector(state => state.colorTab.activeColor)

  return (
    <div className={color}>
      <TabHeader/>
      <Switch>
        <Route exact path='/messages'>
          <Messages/>
        </Route>
        <Route exact path='/colors'>
          <Select/>
        </Route>
        <Redirect to='/messages' />
      </Switch>
    </div>
  )
}

export default Tabs
