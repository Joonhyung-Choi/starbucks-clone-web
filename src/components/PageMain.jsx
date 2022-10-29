import React from "react";
import styled from "styled-components";




function PageMain() {
  const sloganImgSrc = "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_title.png";
  const productImgSrc1 = "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_drink_02.png";
  const productImgSrc2 = "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_drink_01.png";
  const productImgSrc3 = "https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_drink_03.png";


  return (
    <PageMainDiv>
      <SloganDiv>
        <SloganImg src={sloganImgSrc} />
        <MoreInfoDiv>
          <MoreInfoA className="moreInfoA" href="/">자세히 보기</MoreInfoA>
        </MoreInfoDiv>
      </SloganDiv>
      <ProductImgDiv>
        <ProductImg1 src={productImgSrc1} />
        <ProductImg2 src={productImgSrc2}/>
        <ProductImg3 src={productImgSrc3}/>
      </ProductImgDiv>
    </PageMainDiv>
  );
}

export default PageMain;


const PageMainDiv = styled.div`
  height : 646px;
  background-image : url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_bg.jpg);
  background-position : center;
  
`
const SloganDiv = styled.div`
  width : 317px;
  height: 100%;
  left: 14.75%;
  position: absolute;
`


const MoreInfoDiv = styled.div`
  position : absolute;
  top : 48.72%;
  width : 317px;
  height : 38px;
  
`

const SloganImg = styled.img`
  position : absolute;
  top : 20%;

`

const MoreInfoA = styled.a`
  display : block;
  width : 129px;
  height : 100%;
  margin : 0 auto;
  border : white solid 2px;
  border-radius : 5px;
  color : white;
  text-align : center;
  line-height : 34px;
  font-size : 15px;
  box-sizing : border-box;
  font-family : 'nbg', '맑은 고딕', HelveticaNeue, DroidSans, Sans-serif, Helvetica;
  
`

const ProductImgDiv = styled.div`
  height: 646px;
  width: 800px;
  position: absolute;
  right: 23.3%;
`

const ProductImg1 = styled.img`
  position: absolute;
  top : 16.35%;
  left : 2%;
`
const ProductImg2 = styled.img`
  position: absolute;
  top : 22%;
  left: 30%;
`
const ProductImg3 = styled.img`
  position: absolute;
  top : 18.1%;
  left: 70.3%;
`