import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 15px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  border-radius: 40px;
  margin-right: 10px;                
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  column-rule-color: black;
  margin-top: 2px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

export const Post = ({title,createdAt, imgUrl}) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imgUrl,
        }}
      />
      {console.log(imgUrl)}
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
