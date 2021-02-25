const SET_COLORS = "SET_COLORS"
const SET_ACTIVE_COLOR = "SET_ACTIVE_COLOR"

const initializeState = {
  colors: [],
  activeColor: '',
}

export default function colorReducer(state = initializeState, action) {
  switch (action.type) {
    case SET_COLORS:
      return {
        ...state,
        colors: action.payload,
      }
    case SET_ACTIVE_COLOR:
      return {
        ...state,
        activeColor: action.payload,
      }
    default:
      return state
  }
}


export const setColors = colors => ({type: SET_COLORS, payload: colors})
export const setActiveColor = color => ({type: SET_ACTIVE_COLOR, payload: color})