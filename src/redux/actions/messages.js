import {setMessages, setMessagesBySearch} from '../reducers/messageReducer'
import data from '../../data/messages.json'

export const getMessagesApi = () => {
  return async dispatch => {
    setTimeout(() => {
      try {
        dispatch(setMessages(data.messagess))
      } catch (e) {
        console.log(`Error getMessages api ${e}`)
      }
    }, 1500)
  }
}

export const filterMessagesApi = search => {
  return async dispatch => {
    try {
      dispatch(setMessagesBySearch(search))
    } catch (e) {
      console.log(`Error filterMessages api ${e}`)
    }
  }
}
