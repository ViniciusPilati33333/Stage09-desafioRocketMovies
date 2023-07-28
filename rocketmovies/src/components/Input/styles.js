import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 56px;
  
  color: ${({ theme }) => theme.COLORS.WORDS};
  margin-right: 64px;
  margin-bottom: 19px;
  
  > input {
    border-radius: 8px;
    border: none;
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WORDS};
    padding-left: 10px;
  }
`;