import styled from "styled-components"

export const Container = styled.header`
    grid-area: header;

    height: 110px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.LINE};

    display: flex;
    padding: 0 80px;

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 64px;
  }

  > input {
    width: 630px;
    height: 56px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WORDS};
    margin-right: 64px;
    border: none;
    padding-left: 19px;
    
  }

  > img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    padding: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WORDS};
      display: flex;
      justify-content: flex-end;
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;