import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;

  background-color: orange;

  & > div {
    width: 100%;
    max-width: 1400px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    padding: 20px;
  }

  img {
    width: 400px;

    height: 400px;

    @media (max-width: 400px) {
      width: 100%;
      height: 200px;

      margin-top: 32px;
    }
  }

  div {
    display: flex;
    gap: 10px;
  }
`

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
`

export const ModalExplication = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 20px;

  padding: 30px 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;

  background-color: #b9b5fd;

  span {
    position: absolute;
    right: 8%;
    top: 8%;

    cursor: pointer;
  }

  h2 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    max-width: 400px;

    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    opacity: .9;
  }
`
