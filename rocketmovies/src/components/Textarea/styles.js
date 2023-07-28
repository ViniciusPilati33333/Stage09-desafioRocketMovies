import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.COLORS.WORDS};
  padding: 10px;
  resize: none;
`;