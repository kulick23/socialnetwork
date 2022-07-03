import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'

const Dialogs = (props) =>{
    let DialogsElements = props.state.dialogs.map (d => <DialogItem name = {d.name} id={d.id} />)
    let MessagesElements = props.state.messages.map (m => <Message message = {m.message} id={m.id} />) 

    return(
<div  className = {s.dialogs}> 

<div className =  {s.dialogsItems}>
{DialogsElements}
</div>

<div className =  {s.messages}>
    {MessagesElements}
</div>
</div>
    )
}
export default Dialogs