import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    ) 
}

export default Dialogs;