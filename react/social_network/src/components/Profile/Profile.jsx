import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
    return (
    <div>
        <div>
            <img className={classes.img} src="https://img.freepik.com/free-vector/abstract-black-splat-grunge-background_1035-19430.jpg?size=626&ext=jpg&ga=GA1.2.2045703221.1627862400" alt="logo" />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
    );
}

export default Profile;