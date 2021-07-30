import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 32px;
  margin: 0 8px;

  align-items: center;

  border-radius: 5px;
  border: 2px solid white;
  & + div {
    margin-top: 8px;
  }

  > svg {
    margin-left: 14px;
  }
  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    font-weight: 500;
    margin-left: 8px;

    &::selection {
      background-color: red;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;
