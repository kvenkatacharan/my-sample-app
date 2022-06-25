import { useEffect, useState } from "react";
import "../../../App.css";
import AddPost from "../AddPost/AddPost";
export default function DisplayPosts(props) {
  return (
    <div>
      <AddPost />
      {props.posts.length > 0 ? (
        <div>
          {props.posts.map((post) => {
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
          <button onClick={() => props.loadMore()}>Load More</button>
        </div>
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
}
