import React from "react";
import styled from "styled-components";



function StarbucksRewards(){
    return (
        <StarbucksRewardsMain>
            <RewardsInnerDiv>
                <RewardsImg src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"></RewardsImg>
                <RewardsContentsDiv>
                    <RewardContent1Div>

                    </RewardContent1Div>
                    <RewardContent2Div>

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
    width: 1000px;
    background-color: blue;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;

    // 박스의 크기가 마진 영역을 제외하고 컨텐츠, 패딩, 보더 영역을 포함한 크기가 된다.
    // 즉, 보더 혹은 패딩의 크기가 변할때 전체 박스 크기는 변하지 않고 컨텐츠 영역의 크기가 변화한다.
    box-sizing: border-box;
`

const RewardsImg = styled.img`
    width: 176px;
`

const RewardsContentsDiv = styled.div`
    width : 78%;
    height: 100%;
    float: right;
    background-color: green;
`

const RewardContent1Div = styled.div`
    width: 100%;
    height: 60%;
    background-color: orange;
`

const RewardContent2Div = styled.div`
    width: 100%;
    height: 40%;
    background-color: yellow;
`



const RewardsH2 = styled.h2`
    
`