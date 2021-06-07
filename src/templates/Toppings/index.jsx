import * as S from "./styles";

import Link from "next/link";
import { Button } from "../../components/Button/styles";

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
    <S.Wrapper>
      <S.Title>Step 2: Choose Toppings</S.Title>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <S.Item key={topping} onClick={() => addTopping(topping)}>
              <S.ItemDetail active={pizza.toppings.includes(topping)}>
                {topping}
              </S.ItemDetail>
            </S.Item>
          );
        })}
      </ul>

      <Link href="/order">
        <Button>Order</Button>
      </Link>
    </S.Wrapper>
  );
}
