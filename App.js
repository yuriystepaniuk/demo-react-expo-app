import { View, StatusBar } from "react-native";
import { Home } from "./screens/Home";
import FullPost from "./screens/FullPost";


export default function App() {
  
  return (
    <View>
      <FullPost/>
      {/* <Home/> */}
      <StatusBar theme="auto"/>
    </View>
  );
}
