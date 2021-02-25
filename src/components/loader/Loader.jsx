import React from 'react'
import Spinner from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loader-wrapper'>
      <Spinner
        type='TailSpin'
        color='#3f51b5'
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  )
}

export default Loader
