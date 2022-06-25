import "../../../App.css";
import AddPost from "../AddPost/AddPost";
export default function DisplayPosts(props) {
    return ( <div>
        <AddPost />
        {(props.posts.length > 0)?props.posts.map((post)=>{
            let{id, title,body}=post;
            return(
                <div className="post" key={id} onClick={()=>{console.log("div is clicked",id)}}>
                <h2>{title}</h2>
                <p>{body}</p>)
            </div>
            )}
        ):<div>No posts available</div>}
    </div> );
}

