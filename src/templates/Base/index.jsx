import * as S from "./styles";

import Link from "next/link";
import { Button } from "../../components/Button/styles";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import { buttonVariants } from "../Home";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.2, duration: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
};

export function BaseTemplate({ addBase, pizza }) {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  console.log("pizza.base :>> ", pizza.base);
  return (
    <S.Wrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <S.Title>Step 1: Choose Your Base</S.Title>
      <ul>
        <AnimateSharedLayout>
          {bases.map((base, index) => {
            return (
              <S.Item
                key={index}
                onClick={() => addBase(base)}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {pizza.base === base && (
                  <motion.span
                    layoutId="selector"
                    style={{ marginRight: "6px" }}
                  >
                    {">"}
                  </motion.span>
                )}

                <S.ItemDetail layout>{base}</S.ItemDetail>
              </S.Item>
            );
          })}
        </AnimateSharedLayout>
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link href="/toppings">
            <Button whileHover="hover" variants={buttonVariants}>
              Next
            </Button>
          </Link>
        </motion.div>
      )}
    </S.Wrapper>
  );
}
