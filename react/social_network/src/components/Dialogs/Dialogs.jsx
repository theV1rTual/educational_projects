import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Arystan
                </div>
                <div className={classes.dialog}>
                    Diana
                </div>
                <div className={classes.dialog}>
                    Dias
                </div>
                <div className={classes.dialog}>
                    Aisulu 
                </div>
                <div className={classes.dialog}>
                    Danel
                </div>
                <div className={classes.dialog}>
                    Abl
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