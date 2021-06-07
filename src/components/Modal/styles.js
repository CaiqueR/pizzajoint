import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "../Button";

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Modal = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  text-align: center;
`;

export const Paragraph = styled(motion.p)`
  color: #444;
  font-weight: bold;
`;

export const ModalButton = styled.button`
  color: white;
  padding: 10px 30px;
  font-size: 1em;
  background: transparent;
  border-radius: 50px;
  border: 1px solid white;
  margin: 40px auto 0;
  cursor: pointer;
  opacity: 0.7;
  color: #444;
  border-color: #444;
  font-weight: bold;
  margin-top: 20px;
`;
