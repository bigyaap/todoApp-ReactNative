/** @format */

import axios from "axios";
const baseUrl = "https://todo-app-backend-git-main-bigyaap.vercel.app";
// const baseUrl = "http://192.168.10.2:8080";

// Passing configuration object to axios
export const fetchUser = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseUrl}/todo`,
  };
  try {
    const response = await axios(configurationObject);
    return response;
  } catch (error) {
    // Handle the error here
    console.error("Error:", error);
  }
};

export const createTodo = async (title: string) => {
  try {
    const response = await axios.post(`${baseUrl}/todo`, {
      title,
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteTodo = async (id: number) => {
  const data = {
    id,
  };

  try {
    const response = await axios.delete(`${baseUrl}/todo`, {
      data,
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};
