import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";

const ContainerBox = styled.div`
  display: grid;
  width: 900px;
  border: 1px solid blue;
  text-align: center;
  margin: 10px auto;
`;
//API 호출 함수
function getPosts() {
  let posts = [];
  for (let i = 1; i < 6; i++) {
    posts[i] = {
      id: i,
      title: `제목 ${i}`,
      content: `내용 ${i}`,
    };
  }
  return posts;
}

class App extends Component {
  render() {
    return (
      <ContainerBox>
        {getPosts().map((post) => (
          <Post id={post.id} title={post.title} content={post.content} />
        ))}
      </ContainerBox>
    );
  }
}

export default App;
