import React, { useEffect } from "react";
import styled from "styled-components";

function ProductAdvertisement1(props){

    
      
    
    

    return (
        <ProductAdvertisementDiv1>
            <BackgroundDiv1/>
            <BackgroundDiv2/>
            <AdvertiseProductDiv>
                <ProductImmageDiv>
                    <ImmageDivInnerImg src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_bean.png"/>
                </ProductImmageDiv>
                <ProductExplainDiv>
                    <ExplainInnerDiv>
                        <ExplainInnerImg src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_text.png"></ExplainInnerImg>
                        <ExplainInnerButton href="/">자세히 보기</ExplainInnerButton>
                    </ExplainInnerDiv>
                </ProductExplainDiv>
            </AdvertiseProductDiv>
        </ProductAdvertisementDiv1>
    );
}

export default ProductAdvertisement1;

const ProductAdvertisementDiv1 = styled.div`
    position: relative;
    width: 100%;
    height: 575px;
    background-color: #f0831e;
    box-sizing: border-box;
`
const BackgroundDiv1 = styled.div`
    background-image : url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_bg_left.png);
    // 배경 이미지를 div의 좌하단으로 이동
    background-position: left bottom;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    bottom: 0px;
    height: 100%;
    width: 390px;
    z-index: 1;

`

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
`

const AdvertiseProductDiv = styled.div`
    position: relative;
    margin: 0 auto;
    width: 1050px;
    height: 100%;
    z-index: 10;
`

const ProductImmageDiv = styled.div`
    display: inline-block;
    width: 420px;
    height: 100%;
    box-sizing: border-box;
    padding: 83px 80px 70px 114px;


`

const ImmageDivInnerImg = styled.img`

`


const ProductExplainDiv = styled.div`
    float: right;
    box-sizing: border-box;
    padding-left: 5px;
    width: 485px;
    height: 100%;
`




const ExplainInnerDiv = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 189px;
`

const ExplainInnerImg = styled.img`
    
`

const ExplainInnerButton = styled.a`
  display : block;
  width : 124px;
  height : 19%;
  border : #403225 solid 2px;
  border-radius : 5px;
  color : #403225;
  text-align : center;
  font-size : 14px;
  box-sizing : border-box;
  padding: 10px;
  margin-top: 37px;
  transition: background-color 0.5s;
  &:hover{
    text-decoration: underline;
    background-color: white;
  }
`

