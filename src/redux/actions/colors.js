import data from '../../data/colors.json'
import {setActiveColor, setColors} from "../reducers/colorReducer";

export const getColorsApi = () => {
  return async dispatch => {
    try {
      dispatch(setColors(data.colors))
    } catch (e) {
      console.log(`Error getColorsApi api ${e}`)
    }
  }
}

export const activeColorApi = color => {
  return async dispatch => {
    try {
      dispatch(setActiveColor(color))
    } catch (e) {
      console.log(`Error activeColorApi api ${e}`)
    }
  }
}