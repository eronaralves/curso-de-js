import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Black = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px 0px;

  ${(props) => {
    if (props.estado) {
      return `
        color: #fff;
      `;
    } else {
      return `
        color: yellow;
      `;
    }
  }}

  h1 {
    font-size: 32px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    bottom: 20px;
    right: 10px;

    font-size: 10px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
`;

export const BoxStart = styled.div`
  max-width: 1200px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 20px 0px;
  }
`;

export const BoxContador = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 0px 20px;
`;

export const BoxTips = styled.div`
  margin: 20px 20px 20px 0px;

  h3 {
    font-size: 30px;
  }

  ul {
    list-style: none;

    li {
      font-size: 16px;
      margin: 10px 0px;
    }
  }
`;

export const BoxInput = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 70px;

  input {
    padding: 10px;
    border-radius: 5px;
    margin-right: 20px;
  }

  p {
    color: red;
    font-weight: 600;
    margin-top: 6px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    height: 36px;
    padding: 0px 30px;
  }
`;

export const BoxButtonPlayAgain = styled.div`
  text-align: center;
  margin: 50px 0px;
`;
