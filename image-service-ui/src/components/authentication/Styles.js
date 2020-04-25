import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 5px;
  background: white;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  div {
    margin-bottom: 10px;
  }
  button {
    margin: 20px 0;
  }
`;