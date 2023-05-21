import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter any color:</label>
      <input
        type='text'
        required
        placeholder='Enter any color'
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  )
}

export default Input