import React from 'react';
import "./Button.css";

const Button = ({text, onClick}) => {
  return (
    <button type="button" className='convert-btn btn btn-light' onClick={() => onClick()}>{text}</button>
  )
}

export default Button