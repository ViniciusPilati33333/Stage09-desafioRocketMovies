import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

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
        color: ${({theme}) => theme.COLORS.PINK};
    }
  }
`; 

export const Form = styled.form`
  grid-area: content;

  > div {
    display: flex;
  }

`;

export const Section2 = styled.div`
  grid-area: content;
  width: 100%;
  height: 88px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;