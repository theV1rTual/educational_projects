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
    return (<div className={classes.dialog}>{props.message}</div>);
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Arystan'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Dias'},
        {id: 4, name: 'Aisulu'},
        {id: 5, name: 'Danel'},
        {id: 6, name: 'Abl'}
    ]

    let messages = [
        {id: 1, message: "Hi, my friend"},
        {id: 2, message: "Go footbal mb?"},
        {id: 3, message: "Bye"}, 
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} key={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} key={m.id}/>)

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