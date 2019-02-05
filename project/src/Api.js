import axios from "axios";

const BASE_URL = "https://mc-news.herokuapp.com/api";

export const getTopics = async () => {
    const { data } = await axios.get(`${BASE_URL}/topics`);
    return data.topics;
  };

  export const getUsers = async () => {
    const { data } = await axios.get(`${BASE_URL}/users`);
    return data.users;
  };

  export const getUser = async username => {
    const { data } = await axios.get(`${BASE_URL}/users/${username}`);
    return data.user;
  };
  