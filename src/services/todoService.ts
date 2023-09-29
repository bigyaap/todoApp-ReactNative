/** @format */

// src/services/todoService.js

import { createTodo, deleteTodo, fetchUser } from "../api/home";

export async function fetchTodoList() {
  try {
    const allList = await fetchUser();
    if (allList) {
      return allList.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function addTodoItem(title: string) {
  try {
    const response = await createTodo(title);
    return response && response.data !== null;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
}

export async function removeTodoItem(id: number) {
  try {
    const response = await deleteTodo(id);
    return response && response.data !== null;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}
