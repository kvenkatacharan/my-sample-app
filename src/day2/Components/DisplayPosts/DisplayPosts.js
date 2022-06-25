import { useEffect, useState } from "react";
import "../../../App.css";
import AddPost from "../AddPost/AddPost";
export default function DisplayPosts(props) {
  const [ctr, addCtr] = useState(5);
  const [posts, setPosts] = useState(props.posts?.slice(0, ctr));
  useEffect(() => {
    setPosts(props.posts?.slice(0, ctr));
  }, [ctr]);
  const loadMore = () => {
    var remainingTransactions = props.posts.length - ctr;
    if (remainingTransactions >= 5) {
      addCtr(ctr + 5);
    } else if (remainingTransactions > 0 && remainingTransactions < 5) {
      addCtr(ctr + remainingTransactions);
    }
  };
  return (
    <div>
      <AddPost />
      {props.posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            let { id, title, body } = post;
            return (
              <div
                className="post"
                key={id}
                onClick={() => {
                  props.setPostId(id);
                }}
              >
                <h2>{title}</h2>
                <p>{body}</p>)
              </div>
            );
          })}
          <button onClick={() => loadMore()}>Load More</button>
        </div>
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
}
