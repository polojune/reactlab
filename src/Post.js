import React from "react";
import styled, { css } from "styled-components";

const PostBox = styled.div`
  border: 1px solid black;
  background: red;
  height: 80px;
  text-align: center;
`;

function Post(props) {
  const { id, title, content } = props; // 구조 분할 할당
  return (
    <PostBox>
      <div>번호 : {id} </div>
      <div>제목 : {title} </div>
      <div>내용 : {content} </div>
    </PostBox>
  );
}
export default Post;
