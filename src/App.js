import React, { Component } from "react";

class App extends Component {
  //키워드
  state = {
    name: "홍길동",
    nickName: "야식왕",
  };

  //그림을 그려주는 함수

  render() {
    const btnClick = () => {
      //this.state.nickName = "홈런왕";
      this.setState({
        nickName: "홈런왕",
      });
      console.log(this.state.nickName);
    };

    return (
      <div>
        <div> 나의 이름은 {this.state.name}입니다.</div>
        <div> 나의 별명은 {this.state.nickName}.</div>
        <button onClick={btnClick}>닉네임변경</button>
      </div>
    );
  }
}

export default App;
