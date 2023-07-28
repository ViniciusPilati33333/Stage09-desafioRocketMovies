import styled from 'styled-components';

export const Container = styled.section`
  margin: 56px 0 28px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.DESC};
    font-size: 20px;
    font-weight: 500px;
  }

  
`;