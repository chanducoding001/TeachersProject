import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './teachersList.css';
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../../redux/slicer';
function AddTeacher() {
  const [formValues, getFormValues] = useState({
    firstName: "",
    lastName: '',
    email: "",
    qualification: '',
    subjects: '',
    classes: '',
    section: '',
    phone: null,
    secondPhone: null,
    gender: '',
    address: ''
  });
  const dispatch=useDispatch();
  const teacherValues=useSelector((state)=>state.registerReducer.Postform)
  const sendDataToBackend = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(register(formValues));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    };
    fetch("http://localhost:4500/teacher", requestOptions)
      .then((res) => res.json())
      .then(data => console.log(data))
    console.log(teacherValues);
  }
  return (
    <>
      <h2 className='heading'>Teacher Details</h2>
      <Card bg='light' text="light"
        style={{ width: '55rem', margin: "auto", height: '90vh', borderRadius: "20px" }}
        className="mb-2"
      >
        <Card.Body style={{ height: '40rem', display: "flex", flexDirection: "column" }}>
          <Form onSubmit={sendDataToBackend}>
            <Form.Group className="mb-3 formField" controlId="formBasicEmail" >
              <Form.Control type="text" placeholder="Enter Your First Name" value={formValues.firstName}
                onChange={(e) => getFormValues({ ...formValues, firstName: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3 formField" controlId="formBasicEmail"  >
              <Form.Control type="text" placeholder="Enter your Last Name" value={formValues.lastName}
                onChange={(e) => getFormValues({ ...formValues, lastName: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3 formField" controlId="formBasicEmail"  >
              <Form.Control type="email" placeholder="Enter Your Email" value={formValues.email}
                onChange={(e) => getFormValues({ ...formValues, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3 formField" controlId="formBasicEmail"  >
              <Form.Control type="number" placeholder="Enter your Phone Number" value={formValues.phone}
                onChange={(e) => getFormValues({ ...formValues, phone: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3 formField"  >
              <Form.Control type="number" placeholder="Enter your Alternate Number" value={formValues.secondPhone}
                onChange={(e) => getFormValues({ ...formValues, secondPhone: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-3 formField'>
              <Form.Select
                onChange={(e) => getFormValues({ ...formValues, qualification: e.target.value })}>
                <option>Select Your Qualification</option>
                <option>Btech</option>
                <option>Degree</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 formField'>
              <Form.Select
                onChange={(e) => getFormValues({ ...formValues, subjects: e.target.value })}>
                <option>Select Your Subjects</option>
                <option>Maths</option>
                <option>Physics</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 formField'>
              <Form.Select
                onChange={(e) => getFormValues({ ...formValues, classes: e.target.value })}>
                <option>Select Your Classes</option>
                <option>I</option>
                <option>II</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 formField'>
              <Form.Select
                onChange={(e) => getFormValues({ ...formValues, section: e.target.value })}>
                <option>Select Your Section</option>
                <option>A</option>
                <option>B</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 formField'>
              <Form.Select
                onChange={(e) => getFormValues({ ...formValues, gender: e.target.value })}>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Control className='address'
              as="textarea"
              placeholder="Enter your Address" value={formValues.address}
              onChange={(e) => getFormValues({ ...formValues, address: e.target.value })}
              style={{ height: '100px' }}
            />
            <Button variant="primary" type="submit" className='btn'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddTeacher;