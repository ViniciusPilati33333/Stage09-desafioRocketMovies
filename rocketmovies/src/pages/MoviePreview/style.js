import styled from 'styled-components';

export const Container = styled.div`
  > main {
    width: 100%;
    height: 100vh;
    padding: 40px 120px;

    div {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    .title {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 19px;
    }
  }
`;