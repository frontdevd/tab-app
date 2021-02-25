import React, {useEffect, useState} from 'react'
import {filterMessagesApi, getMessagesApi} from '../../redux/actions/messages'
import {useDispatch, useSelector} from 'react-redux'
import Message from './Message'
import Search from '../search/Search'
import Loader from '../loader/Loader'

const mapping = (messages) => {
  return <div className='card-wrapper'>
    {messages.map(m => <Message key={m.id} name={m.name} date={m.date} body={m.body}/>)}
  </div>
}

const Messages = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messageTab.messages)
  const loader = useSelector(state => state.messageTab.loader)
  const searchMessages = useSelector(state => state.messageTab.searchMessages)
  const [notMatchSearch, setNotMatchSearch] = useState(false)

  useEffect(() => {
    dispatch(getMessagesApi())
  }, [])

  const handleSearch = (e) => {
    const filtered = searchMessages.filter((m) => m.body
      .toLowerCase()
      .includes(e.target.value.toLowerCase()))
    dispatch(filterMessagesApi(filtered))

    if (filtered.length === 0)  {
      setNotMatchSearch(true)
    } else {
      setNotMatchSearch(false)
    }
  }

  return (
    <div className='message-wrapper'>
      {loader && <Loader/>}
      {!loader && <Search handleSearch={handleSearch}/>}
      {!loader && mapping(messages)}
      {notMatchSearch && <p>Your search did not match any word!</p>}
    </div>
  )
}


export default Messages
