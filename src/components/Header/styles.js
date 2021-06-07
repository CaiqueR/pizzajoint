import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  padding: 40px;
  align-items: center;
`;

export const Logo = styled.svg`
  cursor: pointer;
  width: 80px;
  overflow: visible;
  stroke: #fff;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

export const TitteWrapper = styled(motion.div)`
  flex-grow: 1;
  margin-left: 20px;
  font-size: 0.6em;
`;

export const Title = styled.h1`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
`;
