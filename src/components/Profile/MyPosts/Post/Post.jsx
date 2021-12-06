import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
return (
<div className={s.item}>
  <img src = {props.img}/>
  {props.message}
  <div>
<span> {props.likes} Like </span>
  </div>
  </div>  
)
}
export default Post


