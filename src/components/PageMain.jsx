import React from "react";
import styled from "styled-components";

// 메인 페이지 컴포넌트
function PageMain() {
  // 슬로건 이미지 주소
  const SLOGAN_IMG_SRC =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_title.png";

  // 제품 이미지 주소1
  const PRODUCT_IMG_SRC1 =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_drink_02.png";
  // 제품 이미지 주소2
  const PRODUCT_IMG_SRC2 =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_drink_01.png";
  // 제품 이미지 주소3
  const PRODUCT_IMG_SRC3 =
    "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_drink_03.png";

  return (
    <PageMainDiv>
      <SloganDiv>
        <SloganImg src={SLOGAN_IMG_SRC} />
        <MoreInfoDiv>
          <MoreInfoA className="moreInfoA" href="/">
            자세히 보기
          </MoreInfoA>
        </MoreInfoDiv>
      </SloganDiv>
      <ProductImgDiv>
        <ProductImg1 src={PRODUCT_IMG_SRC1} />
        <ProductImg2 src={PRODUCT_IMG_SRC2} />
        <ProductImg3 src={PRODUCT_IMG_SRC3} />
      </ProductImgDiv>
    </PageMainDiv>
  );
}

export default PageMain;

const PageMainDiv = styled.div`
  height: 646px;
  background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_bg.jpg);
  background-position: center;
  display: flex;
  padding-left: 10%;
`;
const SloganDiv = styled.div`
  width: 24%;
  height: 100%;
  position: relative;
  display: flex;

  // 화면크기를 줄였을때 가운데에서 모이게 하도록 설정
  justify-content: right;
  margin-right: 4.5%;
`;
const ProductImgDiv = styled.div`
  position: relative;
  height: 100%;
  width: 70%;
  display: flex;
`;

const MoreInfoDiv = styled.div`
  display: flex;
  position: absolute;
  top: 71.5%;
  width: 317px;
  height: 38px;
`;

const SloganImg = styled.img`
  position: absolute;
  top: 30%;
`;

const MoreInfoA = styled.a`
  display: block;
  width: 129px;
  height: 100%;
  margin: 0 auto;
  border: white solid 2px;
  border-radius: 5px;
  color: white;
  text-align: center;
  line-height: 34px;
  font-size: 15px;
  box-sizing: border-box;
  &:hover {
    background: white;
    color: #666;
    text-decoration: underline;
    transition: 0.5s;
  }
`;

const ProductImg1 = styled.img`
  position: absolute;
  top: 16.35%;
  left: 0%;
`;
const ProductImg2 = styled.img`
  position: absolute;
  top: 22%;
  left: 223px;
`;
const ProductImg3 = styled.img`
  position: absolute;
  top: 18.1%;
  left: 540px;
`;
