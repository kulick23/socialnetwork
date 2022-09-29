import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components//Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Photo from './components/Photo/Photo';
import { Routes, Route } from 'react-router-dom';


const App = (props) =>{
  
  return (
   
    <div className = 'app-wrapper'>
<Header/>
<Navbar/>
 <div className = 'app-wrapper-content'>
 <Routes>
 <Route path ="/profile" element = {<Profile state = {props.state.ProfilePage} addPost = {props.addPost} updateNewPostText={props.updateNewPostText}/>} />
 <Route  path ="/dialogs" element = {<Dialogs state = {props.state.MessagePage}/>}/>
 <Route  path ="/photo" element = {<Photo state = {props.state.PhotosPage}/>}/>
 </Routes>
 </div>
    </div>
    
  );
}


export default App;
