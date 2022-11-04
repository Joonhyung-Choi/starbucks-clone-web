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
  display: flex;
  flex-direction: row;
  padding-left : 10%;
  
`
const SloganDiv = styled.div`
  width : 24%;
  height: 100%;

  /* left: 14.75%; */
  position: relative;
  min-width: 317px;
  display: flex;
  justify-content: flex-end;
  margin-right:4.5%;

`
const ProductImgDiv = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 70%;
  /* right: 23.3%; */
  justify-content: flex-end;
`

const MoreInfoDiv = styled.div`
  display: flex;
  position : absolute;
  top : 71.5%;
  width : 317px;
  height : 38px;
  
`

const SloganImg = styled.img`
  
  position : absolute;
  top : 30%;

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
  &:hover{
    background: white;
    color : #666;
    text-decoration: underline;
    transition: 0.5s;
  }
  
`



const ProductImg1 = styled.img`
  position: absolute;
  top : 16.35%;
  left : 0%;
`
const ProductImg2 = styled.img`
  position: absolute;
  top : 22%;
  left: 223px;
`
const ProductImg3 = styled.img`
  position: absolute;
  top : 18.1%;
  left: 540px;
`