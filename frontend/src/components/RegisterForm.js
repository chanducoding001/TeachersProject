import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import './register.css';
    const initalValues={
        firstName:"",
        lastName:"",
        mobile:'',
        email:''
    }
    const validationSchema=Yup.object({
        firstName:Yup.string().required("Required!"),
        lastName:Yup.string().required("Required!"),
        mobile:Yup.string().required("Required!"),
        email:Yup.string().email('/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/').required('Required!')
    })
    const sendDataToBackend=(values)=>{
        console.log(values);
        axios.post("http://localhost:4500/teacher",values)
        .then((res)=>console.log(res));
    }
const RegisterForm = () => {
  return (
    <div>
          <h1>Registration Form for Teachers</h1>
    <div>

    {/* <Formik initialValues={initalValues} validationSchema={validationSchema} onSubmit={sendDataToBackend}>
        <Form>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <Field id="firstName" name="firstName" />
                <ErrorMessage name='firstName'/>
            </div>
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <Field id='lastName' name='lastName' />
                <ErrorMessage name='lastName'/>
            </div>
            <div>
                <label htmlFor='mobile'>Mobile</label>
                <Field id='mobile' name='mobile' />
                <ErrorMessage name='mobile'/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <Field id='email' name='email' />
                <ErrorMessage name='email'/>
            </div>
            <button type='submit'>Submit</button>
        </Form>
    </Formik> */}

<Formik initialValues={initalValues} validationSchema={validationSchema} onSubmit={sendDataToBackend}>
<Form>
  <div class="mb-3">
    <label for="firstName" class="form-label">First Name</label>
    <Field type="text" class="form-control" id="firstName" aria-describedby="emailHelp" name='firstName'/>
    <ErrorMessage  name='firstName'/>
  </div>
  <div class="mb-3">
    <label for="lastName" class="form-label">Last Name</label>
    <Field type="text" class="form-control" id="lastName" name='lastName'/>
    <ErrorMessage name='lastName'/>
  </div>
  <div class="mb-3">
    <label for="mobile" class="form-label">Mobile</label>
    <Field type="number" class="form-control" id="mobile" name='mobile'/>
    <ErrorMessage name='mobile'/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <Field type="email" class="form-control" id="email" name='email'/>
    <ErrorMessage name='email'/>
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">Address</label>
    <Field type="string" class="form-control" id="address" name='address'/>
    <ErrorMessage name='address'/>
  </div>
  <div class="mb-3">
    <p>Gender</p>
    <Field type="checkbox" /><button disabled="true">M</button>
    <Field type="checkbox" class="form-check-input"/><button disabled="true">F</button>
  </div>

  <div class="mb-3 form-check">
    <button>Subjects</button>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</Form>
</Formik>

    </div>
    </div>
  )
}

export default RegisterForm