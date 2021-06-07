import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "../../components/Button";

export const Wrapper = styled(motion.div)`
  margin: 100px auto 40px;
  text-align: center;
  max-width: 800px;
`;

export const Title = styled(motion.h2)`
  font-size: 2em;
  margin-bottom: 30px;
`;

export const HomeButton = styled(motion.button)`
  color: white;
  padding: 10px 30px;
  font-size: 1em;
  background: transparent;
  border-radius: 50px;
  border: 1px solid white;
  margin: 40px auto 0;
  cursor: pointer;
  opacity: 0.7;
  color: white;
  padding: 15px 30px;
  font-size: 1.6em;
  border: 3px solid white;
  margin: 30px 20px;
`;
