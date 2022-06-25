import "../../../App.css";
function AddPost() {
    return ( <div>
        <form onSubmit={()=>{console.log("adding")}}>
            <input className="addPostArea"type="textarea" placeholder="What is happening...?"></input>
            <button className="addPostBtn"type="submit">Submit</button>
        </form>
    </div> );
}

export default AddPost;