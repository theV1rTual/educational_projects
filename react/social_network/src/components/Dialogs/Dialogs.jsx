import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Arystan" id="1"/>
                <DialogItem name="Diana" id="2"/> 
                <DialogItem name="Dias" id="3"/>
                <DialogItem name="Aisulu" id="4"/>
                <DialogItem name="Danel" id="5"/>
                <DialogItem name="Abl" id="6"/>
            </div>

            <div className={classes.messages}>
                <Message message="Hi, my friend" />
                <Message message="Go footbal mb?" />
                <Message message="Bye" />
            </div>
        </div>
    ) 
}

export default Dialogs;