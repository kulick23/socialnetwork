import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
return (
<div >
  <div className={s.item}> 
  <img src = {props.img}/>
  {props.name}
  </div>
  {props.message}
  <div>
{props.likes} Like 
</div>
  </div>  
)
}
export default Post


