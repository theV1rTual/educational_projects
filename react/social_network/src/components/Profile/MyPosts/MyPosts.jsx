import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let posts= [
        {id: 1, message: "Hi, how are you?", likesCount: "1"},
        {id: 2, message: "It's my way of ninja", likesCount: "23"},
    ]

    let postsElements = 
        posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

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
            {postsElements}
        </div>
    </div>
    );
}

export default MyPosts;