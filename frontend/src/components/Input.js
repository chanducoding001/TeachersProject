import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Input = (props) => {
  return (
    <>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder={props.placeholder}
          aria-describedby="basic-addon2" style={{width:"15rem"}}
        />
        
      </InputGroup>
    </>
  )
}

export default Input