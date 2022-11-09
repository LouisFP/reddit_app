import { v4 } from "uuid";
let accessToken;
const clientID = "Z6cGciWCCUoWAEiXg72-fw";
const redirect_uri = "http://localhost:3000/";

const Reddit = {
  async getFilteredSubreddits(term) {
    const newAccessToken = Reddit.getAccessToken();
    const urlToFetch = `https://oauth.reddit.com/api/subreddit_autocomplete?query=${term}&include_profiles=false`;
    const response = await fetch(urlToFetch, {
      headers: { Authorization: `bearer ${newAccessToken}` },
    });
    const json = await response.json();
    if (json.subreddits.length === 0) {
      return;
    }
    let subreddits = json.subreddits.map((subreddit) => {
      let obj = {
        id: subreddit.id,
        name: subreddit.name,
        icon: subreddit.icon,
        numSubscribers: subreddit.numSubscribers,
      };
      return obj;
    });
    return subreddits;
  },

  async getPosts(subreddit) {
    const newAccessToken = Reddit.getAccessToken();
    let urlToFetch = `https://oauth.reddit.com/r/${subreddit}?limit=30`;
    const response = await fetch(urlToFetch, {
      headers: { Authorization: `bearer ${newAccessToken}` },
    });
    const json = await response.json();
    let posts = json.data.children.map((post) => {
      let obj = {
        id: post.data.id,
        subreddit: post.data.subreddit,
        title: post.data.title,
        thumbnail: post.data.thumbnail,
        selftext: post.data.selftext,
        author: post.data.author,
        numComments: post.data.num_comments,
      };
      return obj;
    });
    return posts;
  },

  async getComments(id) {
    const newAccessToken = Reddit.getAccessToken();
    const urlToFetch = `https://oauth.reddit.com/comments/${id}?limit=50`;
    const response = await fetch(urlToFetch, {
      headers: { Authorization: `bearer ${newAccessToken}` },
    });
    const json = await response.json();
    let comments = json[1].data.children.map((comment) => {
      let obj = {
        id: comment.data.id,
        author: comment.data.author,
        body: comment.data.body,
        score: comment.data.score,
        replies: comment.data.replies ? comment.data.replies.data.children : [],
      };
      return obj;
    });
    return comments;
  },

  getAccessToken() {
    const state = v4();
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      window.location.href = `https://www.reddit.com/api/v1/authorize?client_id=${clientID}&response_type=token&state=${state}&redirect_uri=${redirect_uri}&scope=read&`;
    }
  },
};

export default Reddit;
