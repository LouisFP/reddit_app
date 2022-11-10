import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPosts } from "./postsSlice";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearchTerm } from "../SearchBar/searchBarSlice";
import "./posts.css";

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const posts = useSelector(selectPosts);
  const filterPost = posts.filter((po) => {
    return po.id === params.id;
  });
  const post = filterPost[0];
  console.log(post);
  return (
    <div>
      <Link
        to="/"
        onClick={() => {
          dispatch(clearSearchTerm());
        }}
      >
        Click to go back to searching
      </Link>
      <div className="post-container">
        <h2 className="title">{post.title}</h2>
        <p>{post.selftext}</p>
        <p className="upvotes">Upvotes: {post.score}</p>
        <h3>Comments:</h3>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
