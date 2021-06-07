import Router from "next/router";
import React from "react";
import { motion } from "framer-motion";

import * as S from "./styles";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const Header = () => {
  const handleClickLogo = () => {
    Router.push("/");
  };
  return (
    <S.Wrapper>
      <motion.div
        onClick={handleClickLogo}
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      >
        <S.Logo
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </S.Logo>
      </motion.div>
      <S.TitteWrapper
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2 }}
      >
        <S.Title>Pizza Joint</S.Title>
      </S.TitteWrapper>
    </S.Wrapper>
  );
};
