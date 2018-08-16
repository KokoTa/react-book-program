import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 450px;
  margin: 50px auto;
  background: #fff;
  padding: 50px 20px;
  text-align: center;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #ddd;
`;

export const Input = styled.input`
  display: block;
  font-size: 14px;
  padding: 8px 10px;
  width: 350px;
  border: 1px solid #ddd;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: block;
  font-size: 14px;
  width: 350px;
  margin: 0 auto;
  padding: 5px 0;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #fff;
  background: #3194d0;
  box-sizing: border-box;
  &:hover {
    background: #187cb7;
    cursor: pointer;
  }
`;