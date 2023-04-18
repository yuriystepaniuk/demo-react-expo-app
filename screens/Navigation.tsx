import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import FullPost  from "./FullPost";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  //Stack.Navigator as Router in React.js
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Новини" }}
        />
        <Stack.Screen
          name="Posts"
          component={FullPost}
          options={{ title: "Пости" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
