import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo';

const Profile = (props) => {
 
return (
    <div >
      <Profileinfo/>
    
    <MyPosts posts = {props.state.posts} addPost = {props.addPost}/>
    </div>
)
}
export default Profile