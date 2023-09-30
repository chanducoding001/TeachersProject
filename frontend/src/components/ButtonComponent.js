import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonComponent = (props) => {
  return (
   <>
    <Button variant={props.variant} width={props.width} height={props.height}>{props.text}</Button>
   </>
  )
}

export default ButtonComponent