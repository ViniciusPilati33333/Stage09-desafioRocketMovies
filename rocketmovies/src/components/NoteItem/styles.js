import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.WORDS : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.WORDS}` : "none"};

  margin: 16px 24px 16px 16px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-del,
  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }

  > input {
    height: 56px;
    width: ${({ isNew }) => (isNew ? "150px" : "80px")};  
    padding: 16px;
   

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: none;
    border: none;

    &::placeholder {
         ${({ theme }) => theme.COLORS.WORDS};
  }
`;