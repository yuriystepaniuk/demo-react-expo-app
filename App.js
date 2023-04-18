import { StatusBar } from "expo-status-bar";
import {
  View,
  Alert,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "./components/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components/native";

export default function App() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const PreBlock = styled.View`
    margin-top: 40px;
  `;
  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=25")
      .then(({ data }) => setItems(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Помилка", "Помилка отримання статей");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(fetchPost, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <PreBlock></PreBlock> */}
        <ActivityIndicator size="large" />
        <Text style={{ paddingTop: 10 }}>Завантаження...</Text>
      </View>
    );
  }
  return (
    <View>
      <StatusBar />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post title={item.title} createdAt="20.03.2022" imgUrl={item.url} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
