import React from "react";
import styled from "styled-components";


const PageMainDiv = styled.div`
  height : 646px;
  background-image : url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_bg.jpg);
  background-position : center;
  
`

const SloganImg = styled.img`
  position : absolute;
  top : 31.5%;
  left : 2.70%;
`

const MoreInfoDiv = styled.div`
  position : absolute;
  left : 2.70%;
  top : 60%;
  width : 317px;
  height : 38px;
  
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

function PageMain(){
    return (
        <PageMainDiv>
            <SloganImg src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Halloween_main_title.png" alt="Trick or Treat" />
            <MoreInfoDiv>
                <MoreInfoA href="/">자세히 보기</MoreInfoA>
            </MoreInfoDiv>
        </PageMainDiv>
    );
}

export default PageMain;