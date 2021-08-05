import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
    <div>
        My posts
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
        </div>
        <div className={classes.posts}>
            <Post message="Hi, how are you?" likesCount="1"/>
            <Post message="It's my way of ninja" likesCount="23"/>
        </div>
    </div>
    );
}

export default MyPosts;