import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostHasError,
  selectPostIsLoading,
  selectPosts,
} from "./postsSlice";
import { loadPosts } from "./postsSlice";
import { Link, useParams } from "react-router-dom";
import { clearSearchTerm } from "../SearchBar/searchBarSlice";

const Posts = () => {
  const posts = useSelector(selectPosts);
  const postIsLoading = useSelector(selectPostIsLoading);
  const postHasError = useSelector(selectPostHasError);
  const dispatch = useDispatch();
  const params = useParams();
  let subreddit = Object.values(params).toString();

  useEffect(() => {
    dispatch(loadPosts(subreddit));
  }, [dispatch, subreddit]);

  return (
    <section className="posts-section">
      {postIsLoading && <p>Loading...</p>}
      {postHasError && <p>Try again...</p>}
      <ul className="posts-list">
        <Link
          to="/"
          onClick={() => {
            dispatch(clearSearchTerm());
          }}
        >
          Click to go back to searching
        </Link>
        {Object.values(posts).map((post) => {
          return (
            <Link to={post.id} key={post.id}>
              <li key={post.id} className="post">
                <div>
                  <h3>{post.title}</h3>
                  <p>Author: {post.author}</p>
                  <img src={post.thumbnail} alt="Post-Icon" />
                  <div className="scores">
                    <p>Upvotes: {post.score}</p>
                    <p>Number of comments: {post.numComments}</p>
                  </div>
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
