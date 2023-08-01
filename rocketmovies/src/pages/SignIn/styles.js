import styled from 'styled-components';
import  backgroundImg  from "../../assets/imageSign.png";


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;

  > h1 {
    font-size: 60px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.PFORM};
  }

  > h2 {
    padding: 44px 44px 44px 0;
    display: flex;
  }

  >.btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    gap: 42px;
  }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;