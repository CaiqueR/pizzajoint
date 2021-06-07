import * as S from "./styles";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  },
};
export function Loader() {
  return (
    <>
      <S.Wrapper variants={loaderVariants} animate="animationOne"></S.Wrapper>
    </>
  );
}
