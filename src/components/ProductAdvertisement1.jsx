import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

// 제품 광고 컴포넌트1
const ProductAdvertisement1 = (props) => {
  // 광고 이미지 주소
  const ADVERTISE_IMG_SRC =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_bean.png";
  // 제품 설명 이미지 주소
  const EXPLAIN_IMG_SRC =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_text.png";

  // 화면에 ProductAdvertisement1의 요소가 나타났는지를 확인하기 위한 state
  const [advertiseObserveState, setAdvertiseObserveState] = useState(false);

  // 인터섹션 옵저버 사용을 위한 옵저버 객체 생성
  const advertiseObserver1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 옵저버가 대상 요소를 관찰하면 advertiseObserveState를 true로 바꾸고 관찰을 중단함
        if (entry.isIntersecting) {
          setAdvertiseObserveState(true);
          console.log(advertiseObserveState, 1111);

          // 아래로 내렸다가 다시 올릴때 옵저버의 상태가 변하지 않도록 unobserve 해줌
          advertiseObserver1.unobserve(entry.target);
        }
        // 유저가 화면을 위로 올렸고 대상 요소가 관찰되지 않은 상태라면 advertiseObserveState를 false로 바꿈
        else if (props.pageMainState === true && !entry.isIntersecting) {
          setAdvertiseObserveState(false);
          console.log(advertiseObserveState, 1111);
        }
      });
    },
    // 화면에 대상 요소가 뷰포트에 30%드러나면 해당 요소 관찰
    { threshold: 0.3 }
  );

  // 처음 렌더링 시 요소가 렌더링 되지 않아 querySelector에 null 값이 들어가는 것을 방지하기 위한 useEffect
  useEffect(() => {
    advertiseObserver1.observe(document.querySelector(".advertisementDiv1"));

    // 컴포넌트 재렌더링 시 useEffect 내부의 옵저빙 명령이 중복으로 발생하는 것을 막기 위한 unobserve
    // 아래 코드는 컴포넌트가 렌더링 되기 전에 실행됨
    return () => {
      advertiseObserver1.unobserve(
        document.querySelector(".advertisementDiv1")
      );
    };
  });

  return (
    <ProductAdvertisementDiv1 className="advertisementDiv1">
      <BackgroundDiv1 />
      <BackgroundDiv2 />
      <AdvertiseProductDiv>
        {/* 조건부 스타일링으로 보이지 않던 요소들이 대상 컴포넌트가 관찰되었다면 보이도록 설정 */}
        <ProductImmageDiv
          style={{
            transform: advertiseObserveState ? "" : "translate(-150%,0)",
            opacity: advertiseObserveState ? "" : "0",
          }}
        >
          <ImmageDivInnerImg src={ADVERTISE_IMG_SRC} />
        </ProductImmageDiv>
        {/* 조건부 스타일링으로 보이지 않던 요소들이 대상 컴포넌트가 관찰되었다면 보이도록 설정 */}
        <ProductExplainDiv
          style={{
            transform: advertiseObserveState ? "" : "translate(200%,0)",
            opacity: advertiseObserveState ? "" : "0",
          }}
        >
          <ExplainInnerDiv>
            <ExplainInnerImg src={EXPLAIN_IMG_SRC}></ExplainInnerImg>
            <ExplainInnerButton href="/">자세히 보기</ExplainInnerButton>
          </ExplainInnerDiv>
        </ProductExplainDiv>
      </AdvertiseProductDiv>
    </ProductAdvertisementDiv1>
  );
};

export default ProductAdvertisement1;

const ProductAdvertisementDiv1 = styled.div`
  position: relative;
  width: 100%;
  height: 575px;
  background-color: #f0831e;
  box-sizing: border-box;

  // 좌우에서 들어오는 요소들 때문에 좌우 스크롤 생기는 것 방지를 위한 overflow : hidden;
  overflow: hidden;
`;
const BackgroundDiv1 = styled.div`
  background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_bg_left.png);
  // 배경 이미지를 div의 좌하단으로 이동
  background-position: left bottom;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  bottom: 0px;
  height: 100%;
  width: 390px;
  z-index: 1;
`;

const BackgroundDiv2 = styled.div`
  background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_bg_right.png);
  // 배경 이미지를 div의 우하단으로 이동
  background-position: right bottom;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: 0px;
  height: 100%;
  width: 457px;
  z-index: 1;
`;

const AdvertiseProductDiv = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1050px;
  height: 100%;
  z-index: 10;
`;

const ProductImmageDiv = styled.div`
  display: inline-block;
  width: 420px;
  height: 100%;
  box-sizing: border-box;
  padding: 83px 80px 70px 114px;
  transition: 2s;
`;

const ImmageDivInnerImg = styled.img``;

const ProductExplainDiv = styled.div`
  float: right;
  box-sizing: border-box;
  padding-left: 5px;
  width: 485px;
  height: 100%;
  transition: 2s;
`;

const ExplainInnerDiv = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 189px;
`;

const ExplainInnerImg = styled.img``;

const ExplainInnerButton = styled.a`
  display: block;
  width: 124px;
  height: 19%;
  border: #403225 solid 2px;
  border-radius: 5px;
  color: #403225;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 37px;
  transition: background-color 0.5s;
  &:hover {
    text-decoration: underline;
    background-color: white;
  }
`;
