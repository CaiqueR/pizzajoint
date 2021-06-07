import * as S from "./styles";

import Link from "next/link";
import { Button } from "../../components/Button/styles";
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

export function ToppingsTeamplate({ addTopping, pizza }) {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <S.Wrapper
      variants={containerVariants}
      initial="hidden"
      exit="exit"
      animate="visible"
    >
      <S.Title>Step 2: Choose Toppings</S.Title>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <S.Item
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <S.ItemDetail active={pizza.toppings.includes(topping)}>
                {topping}
              </S.ItemDetail>
            </S.Item>
          );
        })}
      </ul>

      <Link href="/order">
        <Button whileHover="hover" variants={buttonVariants}>
          Order
        </Button>
      </Link>
    </S.Wrapper>
  );
}
