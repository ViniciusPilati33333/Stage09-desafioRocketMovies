import styled from "styled-components";

export const Container = styled.span`
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 5px;
  }
`;
