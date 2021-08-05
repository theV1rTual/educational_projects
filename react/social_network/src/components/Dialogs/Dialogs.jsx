import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1">Arystan</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Diana</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Dias</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Aisulu</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Danel</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Abl</NavLink>
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi, my friend</div>
                <div className={classes.message}>Go footbal mb?</div>
                <div className={classes.message}>Bye</div>
            </div>
        </div>
    ) 
}

export default Dialogs;