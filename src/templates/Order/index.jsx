import * as S from "./styles";

import Link from "next/link";

export function OrderTemplate({ pizza }) {
  return (
    <S.Wrapper>
      <h2>Thank you for your order :)</h2>
      <S.Paragraph>You ordered a {pizza.base} pizza with:</S.Paragraph>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </S.Wrapper>
  );
}
