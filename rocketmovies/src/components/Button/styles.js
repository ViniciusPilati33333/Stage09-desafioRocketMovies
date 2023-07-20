import styled from "styled-components";

export const Container = styled.button`
    width: 100%; // 340px
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color:  ${({ theme }) => theme.COLORS.GRAY_300};

    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;//medium

    &:disabled {
        opacity: 0.5;
    }

`;