import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: #1976d2;
  padding: 5px 15px;
  justify-content: space-between;
  > button {
    margin: 0 10px;
  }
  a, button {
    color: #ffffff;
    text-decoration: none;
  }
`;