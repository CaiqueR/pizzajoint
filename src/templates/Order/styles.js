import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 100px auto 40px;
  text-align: center;
  max-width: 800px;
`;

export const Paragraph = styled.p`
  margin: 20px auto;
`;

export const Title = styled.h3`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Item = styled.li`
  padding: 10px;
  cursor: pointer;
`;

export const ItemDetail = styled.span`
  ${({ active }) => css`
    ${active &&
    css`
      &::before {
        content: ">";
        position: relative;
        top: -2px;
        margin-right: 6px;
        transform: scale(0.8, 1);
        display: inline-block;
      }
    `}
  `}
`;
