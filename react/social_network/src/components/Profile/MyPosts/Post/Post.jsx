import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://3dnews.ru/assets/external/illustrations/2012/02/06/624112/5_10.jpg" alt="avatar" />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;