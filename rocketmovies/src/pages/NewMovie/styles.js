import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  .tags {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.BLACK};
    margin-top: 24px;
    border-radius: 8px;
  }

  > main {
    width: 100%;
    padding: 60px;
    grid-area: content;
    overflow-y: auto;

    h1 {
      margin-bottom: 40px;
    }
  }

  .return {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 24px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`; 

export const Form = styled.form`
  grid-area: content;

  > div {
    display: flex;
    gap: 16px;
  }

  > .buttons {
    display: flex;
    align-items: center;
    gap: 20px;

    > button {
      width: 700px;
      height: 56px;

      border: 0;
      padding: 0 16px;
      margin-top: 16px;
      border-radius: 10px;
      font-weight: 500; //medium

      &:disabled {
        opacity: 0.5;
      }
    }

    > #one {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > #two {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

