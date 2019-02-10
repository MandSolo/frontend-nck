import axios from "axios";

const BASE_URL = "https://mc-news.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticlesByTopic = async topic => {
  const { data } = await axios.get(`${BASE_URL}/topics/${topic}/articles`);
  return data.articles;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data.users;
};

export const getUserByUsername = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article[0];
};

export const getArticleComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const addArticle = async (title, body, username, slug) => {
  const { data } = await axios.post(`${BASE_URL}/topics/${slug}/articles`, {
    title: title,
    body: body,
    username: username
  });
  return data;
};

export const addComment = async (article_id, username, body) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    {
      username: username,
      body: body
    }
  );
  return data.comment;
};

export const vote = async (article_id, inc_votes) => {
  const { data } = await axios.patch(`${BASE_URL}/articles/${article_id}`, {
    inc_votes: inc_votes
  });
  return data.votes;
};

export const addTopic = async (slug, description) => {
  const { data } = await axios.post(`${BASE_URL}/topics`, {
    slug: slug,
    description: description
  });
  return data.topic[0];
};

export const deleteComment = async (article_id, comment_id) => {
  const { data } = await axios.delete(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
  );
  return data.comment;
};

export const changeArticlePage = async (page, TOPIC) => {
  const URL = TOPIC
    ? `${BASE_URL}/topics/${TOPIC}/articles?p=${page}`
    : `${BASE_URL}/articles?p=${page}`;
  const { data } = await axios.get(URL);
  return data.articles;
};
