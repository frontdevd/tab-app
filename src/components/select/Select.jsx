import React, {useEffect} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import SelectColor from '@material-ui/core/Select'
import {useDispatch, useSelector} from 'react-redux'
import {activeColorApi, getColorsApi} from '../../redux/actions/colors'

const Select = () => {
  const dispatch = useDispatch()
  const colors = useSelector(state => state.colorTab.colors)
  const activeColor = useSelector(state => state.colorTab.activeColor)

  const handleChange = (e) => {
    const color = e.target.value
    dispatch(activeColorApi(color))
  }

  useEffect(() => {
    dispatch(getColorsApi())
  }, [])


  return (
    <div className='color-wrapper'>
      <FormControl>
        <SelectColor value={activeColor}
                     onChange={handleChange}
                     displayEmpty
                     inputProps={{'aria-label': 'Without label'}}>
          <MenuItem value='' disabled>Please select color</MenuItem>
          {colors.map(m => <MenuItem key={m.id} value={m.name}>{m.name}</MenuItem>)}
        </SelectColor>
      </FormControl>
    </div>
  )
}

export default Select