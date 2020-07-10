import React from "react";
import styled, { css } from "styled-components";

const MyBox = styled.div`
  background: red;
  height: 100px;
`;

const a = 10;

function Box(props) {
  console.log(props.username);
  console.log(props.password);
  return <MyBox>안녕</MyBox>;
}
export { a };
export default Box;
