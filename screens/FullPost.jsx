import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Button, View } from "react-native";
import axios from "axios";
import Loading from "../components/Loading";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  margin-bottom: 25px;
  border-radius: 10px;
`;

const ButtonChange = styled.Button`
  padding: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  color: #777777;
  margin: 10px;
`;
const PostContainer = styled.View`
  margin-top: 20px;
  padding: 20px;
`;
const PostTitle = styled.Text`
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
`;

const FullPost = () => {
  const [dataPost, setDataPost] = useState();
  const [dataImg, setDataImg] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [countText, setCountText] = useState(1);
  const [countImg, setCountImg] = useState(1);

  const onPressButton = () => {
    setCountText(countText + 1);
  };

  const onPressButtonImg = () => {
    setCountImg(countImg + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${countText}`)
      .then(({ data }) => setDataPost(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Помилка", "Не вдалось отримати статтю");
      }),
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${countImg}`)
        .then(({ data }) => setDataImg(data))
        .catch((err) => {
          console.log(err);
          Alert.alert("Помилка", "Не вдалось отримати фото");
        })
        .finally(() => {
          setIsLoading(false);
        });
  }, [countText, countImg]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View>
      <PostContainer>
        <PostImage
          source={{
            uri: dataImg.url,
          }}
        />
        <PostTitle>{dataPost.title}</PostTitle>
        <PostText>{dataPost.body}</PostText>
        <View >
          <ButtonChange title="Змінити картинку" onPress={onPressButtonImg} />
          <ButtonChange title="Змінити тект" onPress={onPressButton} />
        </View>
      </PostContainer>
    </View>
  );
};

export default FullPost;
