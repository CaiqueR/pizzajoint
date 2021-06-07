import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import * as S from "./styles";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.2,
      // duration: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export function OrderTemplate({ pizza, setShowModal }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.Wrapper
      variants={containerVariants}
      initial="hidden"
      exit="exit"
      animate="visible"
    >
      <motion.h2 exit={{ scale: 0 }}>Thank you for your order :)</motion.h2>
      <S.Paragraph variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </S.Paragraph>

      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </S.Wrapper>
  );
}
