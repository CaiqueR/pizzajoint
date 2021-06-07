import { AnimatePresence } from "framer-motion";
import * as S from "./styles";

import { Button } from "../Button";
import Link from "next/link";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};

export function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <S.Backdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <S.Modal variants={modal}>
            <S.Paragraph>Want to make another pizza?</S.Paragraph>

            <Link href="/">
              <S.ModalButton>Start Again</S.ModalButton>
            </Link>
          </S.Modal>
        </S.Backdrop>
      )}
    </AnimatePresence>
  );
}
