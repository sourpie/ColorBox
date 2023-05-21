import React from 'react'

const Square = ({ colorValue }) => {
  return (
    <section
      style={{ backgroundColor: colorValue }}
      className='square'>
      <p>{colorValue ? colorValue : "No Color"}</p>
    </section>
  )
}

Square.defaultProps = {
  colorValue: "No Color"
}

export default Square