import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

// 제품 광고 컴포넌트2
function ProductAdvertisement2(props) {
  // 제품광고 컴포넌트 배경 이미지 주소
  const BACKGROUND_IMG_SRC =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_with_cup.jpg";
  // 제품 로고 이미지 주소
  const PRODUCT_LOGO_IMG_SRC =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_title.png";

  // 화면에 ProductAdvertisement2의 요소가 나타났는지를 확인하기 위한 state
  const [advertiseObserveState, setAdvertiseObserveState] = useState(false);

  // 인터섹션 옵저버 사용을 위한 옵저버 객체 생성
  const advertiseObserver2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 옵저버가 대상 요소를 관찰하면 advertiseState를 true로 바꾸고 관찰을 중단함
        if (entry.isIntersecting) {
          setAdvertiseObserveState(true);
          console.log(advertiseObserveState, 2222);

          // 아래로 내렸다가 다시 올릴때 옵저버의 상태가 변하지 않도록 unobserve 해줌
          advertiseObserver2.unobserve(entry.target);
        }
        // 유저가 화면을 위로 올렸고 대상 요소가 관찰되지 않은 상태라면 advertiseObserveState를 false로 바꿈
        else if (props.pageMainState === true && !entry.isIntersecting) {
          setAdvertiseObserveState(false);
          console.log(advertiseObserveState, 2222);
        }
      });
    },
    // 화면에 대상 요소가 뷰포트에 30%드러나면 해당 요소 관찰
    { threshold: 0.3 }
  );

  useEffect(() => {
    advertiseObserver2.observe(document.querySelector(".advertisementDiv2"));
    return () => {
      advertiseObserver2.unobserve(
        document.querySelector(".advertisementDiv2")
      );
    };
  });

  return (
    <ProductAdvertisementDiv2 className="advertisementDiv2">
      <BackgroundImg
        src={BACKGROUND_IMG_SRC}
        // 조건부 스타일링을 이용해 컴포넌트가 화면에 나타나면 투명도를 기본값 1로 변경
        style={{ opacity: advertiseObserveState ? "" : "0" }}
      />
      <BackgroundDivLeft
        // 조건부 스타일링을 이용해 컴포넌트가 화면에 나타나면 투명도를 기본값 1로 변경
        style={{ opacity: advertiseObserveState ? "" : "0" }}
      />
      <BackgroundDivRight
        // 조건부 스타일링을 이용해 컴포넌트가 화면에 나타나면 투명도를 기본값 1로 변경
        style={{ opacity: advertiseObserveState ? "" : "0" }}
      />
      <ProductLogoDiv>
        <ProductLogoImg src={PRODUCT_LOGO_IMG_SRC} />
      </ProductLogoDiv>
      <InfoButtonDiv>
        <InformationButton href="/">자세히 보기</InformationButton>
      </InfoButtonDiv>
    </ProductAdvertisementDiv2>
  );
}

export default ProductAdvertisement2;

const ProductAdvertisementDiv2 = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

const BackgroundImg = styled.img`
  position: absolute;
  transition: 2s;
`;

const BackgroundDivLeft = styled.div`
  background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_left.png);
  background-repeat: no-repeat;
  width: 300px;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0px;
  transition: 2s;
`;

const BackgroundDivRight = styled.div`
  background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_right.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 300px;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  transition: 2s;
`;

const ProductLogoDiv = styled.div`
  position: relative;
  height: 57%;
  width: 100%;
  padding: 115px 0 0 400px;
  box-sizing: border-box;
`;

const ProductLogoImg = styled.img``;

const InfoButtonDiv = styled.div`
  position: relative;
  height: 18.5%;
  width: 100%;
  padding: 35px 0 0 660px;
  box-sizing: border-box;
`;

const InformationButton = styled.a`
  display: block;
  width: 129px;
  height: 100%;
  border: #b9813e solid 2px;
  border-radius: 5px;
  color: #b9813e;
  text-align: center;
  line-height: 34px;
  font-size: 15px;
  box-sizing: border-box;
  &:hover {
    background: #b9813e;
    color: white;
    text-decoration: underline;
    transition: 0.5s;
  }
`;
