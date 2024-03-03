import React, { lazy } from 'react'

const Button = ({className, type, children }) => {
  return (
    <button type={type}  className={`button ${className}`} >
          {children}
    </button>
  )
}

export default Button