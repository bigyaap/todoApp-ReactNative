/** @format */

// src/hooks/useTodoList.js

import { useEffect, useState } from "react";
import { fetchTodoList } from "../services/todoService";

export function useTodoList() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const allList = await fetchTodoList();
      if (allList) {
        setList(allList);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { list, isLoading, fetchData, setList };
}
