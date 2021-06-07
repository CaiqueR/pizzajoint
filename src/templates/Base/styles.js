import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Wrapper = styled(motion.div)`
  max-width: 300px;
  margin: 100px auto 40px;
`;

export const Title = styled.h3`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Item = styled(motion.li)`
  padding: 10px;
  cursor: pointer;
  display: flex;
`;

export const ItemDetail = styled(motion.span)`
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
