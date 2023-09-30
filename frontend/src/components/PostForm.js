import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../redux/slicer';
const PostForm = () => {
    const [formData,getFormData]=useState({
        firstName:"",
        lastName:"",
        mobile:"",
        email:""
    });
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.registerReducer.Postform);

    const postFormDataToBackend=(e)=>{
        e.preventDefault();
        dispatch(register(formData));
        axios.post("http://localhost:4500/teacher",{
            firstName:formData.firstName,
            lastName:formData.lastName,
            mobile:+formData.mobile,
            email:formData.email
        })
        .then((res)=>console.log(res))
    }

    console.log(data);
  return (
    <div>
        <h1>PostForm</h1>
        <div>
            <form onSubmit={postFormDataToBackend}>
            <div>
            <label htmlFor='firstName'>Enter First Name</label>
            <input value={formData.firstName} onChange={(e)=>getFormData({...formData,firstName:e.target.value})} id='firstName' name='firstName'/>
            </div>
            <div>
            <label htmlFor='lastName'>Enter last name Name</label>
            <input value={formData.lastName} onChange={(e)=>getFormData({...formData,lastName:e.target.value})} id='lastName' name='lastName'/>
            </div>
            <div>
            <label htmlFor='mobile'>Enter Mobile</label>
            <input value={formData.mobile} onChange={(e)=>getFormData({...formData,mobile:e.target.value})} id='mobile' name='mobile'/>
            </div>
            <div>
            <label htmlFor='email'>Enter email</label>
            <input value={formData.email} onChange={(e)=>getFormData({...formData,email:e.target.value})} id='email' name='email'/>
            </div>
                    <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default PostForm
