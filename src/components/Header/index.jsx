import React from "react";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </S.Logo>
      </div>
      <S.TitteWrapper>
        <S.Title>Pizza Joint</S.Title>
      </S.TitteWrapper>
    </S.Wrapper>
  );
};