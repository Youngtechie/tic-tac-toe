import React from 'react'

function Squares({value, No}) {
  return (
    <section className='squares' id={No}>
        {value}
    </section>
  )
}

export default Squares