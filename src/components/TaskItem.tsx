/** @format */

import React, { useState } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { removeTodoItem } from "../services/todoService";

function TaskItem({
  item,
  //   removeLoadingIndex,
  //   setRemoveLoadingIndex,
  fetchData,
}) {
  const [removeLoadingIndex, setRemoveLoadingIndex] = useState<number>(null);

  const handleDelete = async (id: number) => {
    try {
      if (removeLoadingIndex) return;
      setRemoveLoadingIndex(id);
      await removeTodoItem(id);
      await fetchData();
      setRemoveLoadingIndex(null);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <View
      className={`flex flex-row justify-between bg-almost_white py-4 px-4
       my-2 rounded-md text-base items-center
    ${item.fade ? "opacity-50" : "opacity-100"}
    `}
    >
      <Text className="text-base">{item.title}</Text>
      {!item.fade && (
        <TouchableOpacity
          className="px-2 h-7"
          onPress={() => handleDelete(item.id)}
        >
          {removeLoadingIndex === item.id ? (
            <ActivityIndicator className="text-lg" color="#000" size={20} />
          ) : (
            <Text className="text-lg">X</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

export default TaskItem;
