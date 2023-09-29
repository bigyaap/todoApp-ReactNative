/** @format */

import { View, ActivityIndicator } from "react-native";
function LoadingProgress() {
  return (
    <View className="flex flex-col">
      <ActivityIndicator size="large" color="#e8e8e8" />
    </View>
  );
}

export default LoadingProgress;
