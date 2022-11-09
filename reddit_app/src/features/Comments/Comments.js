import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadComments,
  selectCommentHasError,
  selectCommentIsLoading,
  selectComments,
} from "./commentsSlice";
import { Link, useParams } from "react-router-dom";
import { clearSearchTerm } from "../SearchBar/searchBarSlice";

const Comments = () => {
  const comments = useSelector(selectComments);
  const commentIsLoading = useSelector(selectCommentIsLoading);
  const commentHasError = useSelector(selectCommentHasError);
  const dispatch = useDispatch();
  const params = useParams();
  const id = Object.values(params)[1].toString();

  useEffect(() => {
    dispatch(loadComments(id));
  }, [dispatch, id]);

  return (
    <section className="comments-section">
      <Link to="/" onClick={() => dispatch(clearSearchTerm())}>
        Click to go back to searching
      </Link>
      {commentIsLoading && <p>Loading...</p>}
      {commentHasError && <p>Try again...</p>}
      {comments.length === 0 && <p>There are no comments, sorry!</p>}
      <ul className="comments-list">
        {Object.values(comments).map((comment) => {
          return (
            <li key={comment.id} className="comment">
              <div className="comment-container">
                <h3>Author: {comment.author}</h3>
                <p>{comment.body}</p>
              </div>
              <ul className="replies">
                {comment.replies.map((reply) => {
                  if (reply.kind === "t1") {
                    return (
                      <li key={reply.data.id} className="comment-reply">
                        <h3>Author: {reply.data.author}</h3>
                        <p>{reply.data.body}</p>
                        <p>Upvotes: {reply.data.score}</p>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
