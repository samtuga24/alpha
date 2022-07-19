import React, { useState } from 'react'
import { SuccessContainer, SuccessWrapper } from './SuccessStyle'

export const Success = () => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    overflow: "hidden",
    height: isOpen ? 50 : 0,
    transition: "0.5s"
  };

  return (
    <div className="App">

    <button onClick={() => setIsOpen(prev => !prev)}>Slide Toggle</button>
    <div style={style}>
      <p> Let me slide in and out!</p>
    </div>
  </div>

  )
}
