const SET_MESSAGES = 'SET_MESSAGES'
const SET_MESSAGES_BY_SEARCH = 'SET_MESSAGES_BY_SEARCH'

const initializeState = {
  messages: [],
  searchMessages: [],
  loader: true
}

export default function messageReducer(state = initializeState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        searchMessages: action.payload,
        loader: false
      }
    case SET_MESSAGES_BY_SEARCH:
      return {
        ...state,
        messages: action.payload,
      }
    default:
      return state
  }
}


export const setMessages = messagess => ({type: SET_MESSAGES, payload: messagess})
export const setMessagesBySearch = search => ({type: SET_MESSAGES_BY_SEARCH, payload: search})
