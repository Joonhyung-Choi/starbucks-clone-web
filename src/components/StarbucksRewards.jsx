import React from "react";
import styled from "styled-components";



function StarbucksRewards(){
    const REWARDS_IMG_SRC = "https://image.istarbucks.co.kr/common/img/main/rewards-logo.png";

    return (
        <StarbucksRewardsMain>
            <RewardsInnerDiv>
                <RewardsImg src={REWARDS_IMG_SRC}></RewardsImg>
                <RewardsContentsDiv>
                    <RewardContent1Div>
                        <Content1InnerDiv>
                            <RewardsH2>스타벅스만의 특별한 혜택, <Bold>스타벅스 리워드</Bold></RewardsH2>
                        </Content1InnerDiv>
                        <ButtonSetDiv>
                            <LoginA href="/">로그인</LoginA>
                            <JoinMembershipA href="/">회원가입</JoinMembershipA>
                        </ButtonSetDiv>
                        
                        <RewardsP1><Bold>스타벅스 회원이세요?</Bold> 로그인을 통해 나만의 리워드를 확인해보세요.</RewardsP1>
                        <RewardsP2><Bold>스타벅스 회원이 아니세요?</Bold> 가입을 통해 리워드 혜택을 즐기세요.</RewardsP2>
                    </RewardContent1Div>
                    <RewardContent2Div>
                        <Content2InnerDiv>
                            <GiftA href="/">e-Gift Card 선물하기</GiftA>
                            <GiftP>회원 가입 후, 스타벅스 e-Gift Card를 <Bold>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</Bold></GiftP>
                            <GiftP>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</GiftP>
                        </Content2InnerDiv>
                    </RewardContent2Div>
                </RewardsContentsDiv>
            </RewardsInnerDiv>
        </StarbucksRewardsMain>
    );
}

export default StarbucksRewards;

const StarbucksRewardsMain = styled.div`
    position: relative;
    width: 100%;
    height: 240px;
    background-color: #1e3932;
`

const RewardsInnerDiv = styled.div`
    height: 100%;
    width: 1040px;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right:10px;

    // 박스의 크기가 마진 영역을 제외하고 컨텐츠, 패딩, 보더 영역을 포함한 크기가 된다.
    // 즉, 보더 혹은 패딩의 크기가 변할때 전체 박스 크기는 변하지 않고 컨텐츠 영역의 크기가 변화한다.
    box-sizing: border-box;
`

const RewardsImg = styled.img`
    width: 176px;
`

const RewardsContentsDiv = styled.div`
    width : 79%;
    height: 100%;
    float: right;
`

const RewardContent1Div = styled.div`
    width: 100%;
    height: 61%;
    box-sizing: border-box;
    border-bottom: 1px solid #4b615b;
    
`

const RewardContent2Div = styled.div`
    width: 100%;
    height: 21%;
    margin: 20px 0;

`

const Content1InnerDiv = styled.div`
    width: 100%;
    height: 45%;

`

const Content2InnerDiv = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

const RewardsH2 = styled.h2`
    font-size: 26px;
    color: white;
`

const RewardsP1 = styled.p`
    font-size: 17px;
    color: white;
    `
const RewardsP2 = styled.p`
    font-size: 17px;
    line-height: 25px;
    color: white;
`


const GiftP = styled.p`
    font-size: 13px;
    color: white;
    line-height: 20px;

`

const Bold = styled.b`
    font-weight: bold;
`

const ButtonSetDiv = styled.div`
    float: right;
    height : 35.5%;
`

const JoinMembershipA = styled.a`
  display : block;
  width : 93px;
  height : 100%;
  background-color:#00704A;
  border : #00704A solid 2px;
  border-radius : 5px;
  color : white;
  text-align : center;
  font-size : 14px;
  box-sizing : border-box;
  float: right;
  padding: 10px;
  margin-right : 10px;
  &:hover{
    text-decoration: underline;
  }
`

const LoginA = styled.a`
  display : block;
  width : 80px;
  height : 100%;
  border : white solid 2px;
  border-radius : 5px;
  color : white;
  text-align : center;
  font-size : 14px;
  box-sizing : border-box;
  float: right;
  padding: 10px;
  &:hover{
    text-decoration: underline;
  }
`

const GiftA = styled.a`
  display : block;
  width : 183px;
  height : 100%;
  border : white solid 2px;
  border-radius : 5px;
  color : white;
  text-align : center;
  font-size : 14px;
  box-sizing : border-box;
  float: right;
  padding: 10px;
  &:hover{
    text-decoration: underline;
  }
`

