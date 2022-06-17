export default function DisplayPosts(props) {
    console.log("called",props.posts.length)
    
    return ( <div>
        display post list
        {(props.posts.length > 0)?props.posts.map((post)=>{
            let{id, title,body}=post;
            return(
                <div key={id} onClick={()=>{console.log("div is clicked",id)}}>
                <h2>{title}</h2>
                <p>{body}</p>)
            </div>
            )}
        ):<div>No posts available</div>}
    </div> );
}

