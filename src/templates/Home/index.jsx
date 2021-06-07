import React from "react";

import * as S from "./styles";
import Link from "next/link";

export function HomeTemplate(props) {
  return (
    <S.Wrapper>
      <S.Title>Welcome to Pizza Joint</S.Title>
      <Link href="/base">
        <S.HomeButton>Create Your Pizza</S.HomeButton>
      </Link>
    </S.Wrapper>
  );
}
