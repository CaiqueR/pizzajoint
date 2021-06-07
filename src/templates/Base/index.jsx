import * as S from "./styles";

import Link from "next/link";
import { Button } from "../../components/Button/styles";

export function BaseTemplate({ addBase, pizza }) {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  return (
    <S.Wrapper>
      <S.Title>Step 1: Choose Your Base</S.Title>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <S.Item key={base} onClick={() => addBase(base)}>
              <S.ItemDetail active={pizza.base === base}>{base}</S.ItemDetail>
            </S.Item>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link href="/toppings">
            <Button>Next</Button>
          </Link>
        </div>
      )}
    </S.Wrapper>
  );
}
