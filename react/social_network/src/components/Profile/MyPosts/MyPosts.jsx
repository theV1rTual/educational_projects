import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = 
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

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