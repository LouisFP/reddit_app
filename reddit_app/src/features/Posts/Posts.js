import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostHasError,
  selectPostIsLoading,
  selectPosts,
} from "./postsSlice";
import { loadPosts } from "./postsSlice";
import { Link, useParams } from "react-router-dom";
import "./posts.css";

const Posts = () => {
  const posts = useSelector(selectPosts);
  const postIsLoading = useSelector(selectPostIsLoading);
  const postHasError = useSelector(selectPostHasError);
  const dispatch = useDispatch();
  const params = useParams();
  let subreddit = Object.values(params).toString();
  let icon = "http://getdrawings.com/free-icon/reddit-alien-icon-68.png";

  useEffect(() => {
    dispatch(loadPosts(subreddit));
  }, [dispatch, subreddit]);

  return (
    <section className="posts-section">
      {postIsLoading && <p>Loading...</p>}
      {postHasError && <p>Try again...</p>}
      <p className="clarification">Post results for {subreddit}</p>
      <ul className="posts-list">
        {Object.values(posts).map((post) => {
          return (
            <Link to={post.id} key={post.id}>
              <li key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>Author: {post.author}</p>
                <img
                  id="image"
                  src={post.thumbnail ? post.thumbnail : icon}
                  alt="Post-Icon"
                />
                <div className="scores">
                  <p>Upvotes: {post.score}</p>
                  <p>Number of comments: {post.numComments}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
