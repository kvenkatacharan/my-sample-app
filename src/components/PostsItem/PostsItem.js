import "./PostsItem.css" 
const PostsItem = (props) => {
    const {id, title, body} = props.postsObject;
    
    return(
    <div className="card">
        <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{body}</li>
        </ul>
    </div>
)}

export default PostsItem;