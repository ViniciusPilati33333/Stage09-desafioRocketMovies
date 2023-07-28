import styled from "styled-components";

export const Container = styled.div`
    width: 100%:
    height: 100vh;
    display: grid;
    
  
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
      grid-area: "content";
      overflow-y: auto;
    }
`;

export const PhraseSection = styled.section`
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 100px;
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
`;

export const NewMovie = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  height: 56px;
  border-radius: 10px;
  width: 200px;
  margin-right: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > svg {
    width: 20px;
    height: 20px;
  }
`;
export const Movies = styled.div`
  width: 85%;
  height: 220px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.CARD};
  margin: 24px 130px 24px 100px;
  padding: 32px 32px;


  > span {
    color: ${({ theme }) => theme.COLORS.DESC};
    background: none;
    font-weight: 500;
    
  }
`;

 

