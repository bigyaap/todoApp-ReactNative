/** @format */

import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LoadingProgress from "../components/ProgressLoading";
import TaskItem from "../components/TaskItem";
import { useTodoList } from "../hooks/useTodoLists";
import { addTodoItem } from "../services/todoService";

function HomeScreen() {
  const { list, isLoading, fetchData, setList } = useTodoList();
  const [title, onChangeTitle] = useState("");

  const handleAdd = async () => {
    try {
      if (title.length === 0) return;
      onChangeTitle("");
      setList([{ id: Math.random(), title, fade: true }, ...list]);
      await addTodoItem(title);
      await fetchData();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <View className="flex flex-col flex-1">
      <StatusBar />
      <View className="flex flex-col gap-2">
        {/* input task */}
        <View className="flex flex-row gap-3 p-4">
          <TextInput
            className="flex-1 border border-solid border-almost_white h-14 py-2 px-3"
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Enter task"
          />
          <TouchableOpacity
            className="flex justify-center items-center bg-almost_white 
        font-semibold rounded-lg w-14 h-14"
            onPress={handleAdd}
          >
            <Text className="text-lg font-semibold">+</Text>
          </TouchableOpacity>
        </View>
        {/* list of tasks */}
        {isLoading ? (
          <LoadingProgress />
        ) : (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            className="flex flex-col gap-2 px-4 mb-10"
          >
            {list?.map((item) => (
              <TaskItem key={item.id} item={item} fetchData={fetchData} />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

export default HomeScreen;
