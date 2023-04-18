import { StatusBar } from "expo-status-bar";
import { View, Alert, FlatList } from "react-native";
import { Post } from "./components/Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const fetchPost = () => {
    setIsLoading(true)
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=15")
        .then(({ data }) => setItems(data))
        .catch((err) => {
          console.log(err);
          Alert.alert("Помилка", "Помилка отримання статей");
        }).finally(()=> {setIsLoading(false)})
    
  }
  useEffect(fetchPost, []);
  return (
    <View>
      <StatusBar />
      <FlatList data={items}
      renderItem={({item}) => <Post  title={item.title}
      createdAt="20.03.2022"
      imgUrl={item.url}
    />} 
    />
    </View>
  );
}
