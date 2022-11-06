import React from "react";
import styled from "styled-components";

function ProductAdvertisement2(){
    return (
        <ProductAdvertisementDiv2>
            <BackgroundDivLeft/>
            <BackgroundDivRight/>
            <ProductLogoDiv>
            </ProductLogoDiv>
        </ProductAdvertisementDiv2>
    );
}

export default ProductAdvertisement2;

const ProductAdvertisementDiv2 = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_with_cup.jpg);
    background-position: 22% 20%;
    position: absolute;

    /* 스타벅스에서는 배경의 좌우 이미지 설정을 이렇게 했었음 혹시 필요하면 사용하기*/  
    /* &::before{
        content: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_left.png);
        position: absolute;
        left:0;
    }

    &::after{
        position: absolute;
        right:0;
        content: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_right.png);
    } */
    
`

const BackgroundDivLeft = styled.div`
    background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_left.png);
    background-repeat: no-repeat;
    width : 300px;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0px;

`

const BackgroundDivRight = styled.div`
    background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_right.png);
    background-repeat: no-repeat;
    background-position: right bottom;
    width : 300px;
    height: 100%;
    position: absolute;
    right : 0;
    bottom: 0;


`

const ProductLogoDiv = styled.div`
    height: 75%;
    width: 100%;
    background-color: #3e8842;
`