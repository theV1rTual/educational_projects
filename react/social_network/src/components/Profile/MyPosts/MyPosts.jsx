import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: "Hi, how are you?", likesCount: "1"},
        {id: 2, message: "It's my way of ninja", likesCount: "23"},
    ]

    return (
    <div className={classes.postsBlock}>
        <h3>
            My posts
        </h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={classes.posts}>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        </div>
    </div>
    );
}

export default MyPosts;