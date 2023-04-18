import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <>
    <View style={{marginTop:350}}>
      <ActivityIndicator size="large" />
      <Text style={{textAlign: 'center'}}>
        Завантаження...
      </Text>
    </View>
    </>
  );
};
export default Loading;
