import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  height: 220px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.CARD};
  margin: 24px 130px 24px 100px;
  padding: 32px 32px;

  > h1 {
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.DESC};
    background: none;
    font-weight: 500;
    margin-bottom: 25px;

    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }
`;