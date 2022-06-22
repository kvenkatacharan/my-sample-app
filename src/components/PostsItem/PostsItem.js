import "./PostsItem.css" 
const PostsItem = (props) => {
    const {id, title, body} = props.postsObject;
    const url = "/posts/" + id
    return(
    <div className="card" onClick={event=>window.location.href = url}>
        <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{body}</li>
        </ul>
    </div>
)}

export default PostsItem;