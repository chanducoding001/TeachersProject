import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import PostForm from './components/PostForm';
import RegisterForm from './components/RegisterForm';
import Teachers from './components/Teachers';
import AddTeacher from './components/Teachers/AddTeacher';
import TeachersList from './components/Teachers/TeachersList';
// import TeachersList from './components/TeachersList';

function App() {
  return (
    // <div className="App">
     <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddTeacher/>}/>
      <Route path="/list" element={<TeachersList/>}/>
     </Routes>
     </BrowserRouter>
     </>
  );
     {/* <PostForm/> */}
     {/* <RegisterForm/> */}
     {/* <Teachers/> */}
     {/* <TeachersList/> */}
     {/* <AddTeacher/> */}
    // </div>
  
}

export default App;
