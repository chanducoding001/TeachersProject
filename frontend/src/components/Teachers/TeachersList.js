import React from 'react'
import { useEffect,useState } from 'react';
import { createThunk } from '../../redux/dbSlicer';
import { useDispatch,useSelector } from 'react-redux';
const TeachersList = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(createThunk());
  },[])
  const teachersListFromDb=useSelector(state=>state.teacherSlicerReducer.teachersList);
  console.log(teachersListFromDb);
  return (
    <>
    <h1 style={{textAlign:"center"}}>Teachers List</h1>
    <table style={{margin:"auto",width:"80vw"}}>
      <tr>
      <th>S.NO</th>
      <th>Name of the Teacher</th>
      <th>Gender</th>
      <th>Qualification</th>
      <th>Subjects</th>
      <th>Classes</th>
      <th>Section</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Edit</th>
      </tr>
      {
        teachersListFromDb.map((each,index)=>{
        return(
          <tr key={index}>
      <td>{each.id}</td>
      <td>{each.firstName+" "+each.lastName}</td>
      <td>{each.gender}</td>
      <td>{each.qualification}</td>
      <td>{each.subjects}</td>
      <td>{each.classes}</td>
      <td>{each.section}</td>
      <td>{each.phone}</td>
      <td>{each.address}</td>
      <td><button>Edit</button></td>
      </tr>
        )
        })
      }
    </table>
    </>
  )
}

export default TeachersList