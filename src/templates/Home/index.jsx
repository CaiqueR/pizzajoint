import React from "react";

import * as S from "./styles";
import Link from "next/link";

export const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.6 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
export function HomeTemplate() {
  return (
    <S.Wrapper
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <S.Title>Welcome to Pizza Joint</S.Title>
      <Link href="/base">
        <S.HomeButton whileHover="hover" variants={buttonVariants}>
          Create Your Pizza
        </S.HomeButton>
      </Link>
    </S.Wrapper>
  );
}
