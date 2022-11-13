import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

function ProductAdvertisement2(props){

    const [advertiseState, setAcvertiseState] = useState(false);
    const advertiseObserver2 = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                setAcvertiseState(true);
                console.log(advertiseState, 2222)
                advertiseObserver2.unobserve(entry.target);
            }
            else if(props.pageMainState === true && !entry.isIntersecting){
                setAcvertiseState(false);
                console.log(advertiseState, 2222)
            }
        })
    }, {threshold:0.3})
      
    useEffect(() =>{
        advertiseObserver2.observe(document.querySelector(".advertisementDiv2"))
        return(() =>{
            advertiseObserver2.unobserve(document.querySelector(".advertisementDiv2"));
        })
    })

    return (
        <ProductAdvertisementDiv2 className="advertisementDiv2">
            <BackgroundImg 
                src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_with_cup.jpg" 
                style={{opacity : advertiseState ? "" : "0"}}    
            />
            <BackgroundDivLeft style={{opacity : advertiseState ? "" : "0"}}/>
            <BackgroundDivRight style={{opacity : advertiseState ? "" : "0"}}/>
            <ProductLogoDiv>
                <ProductLogoImg src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_title.png"/>
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
    
`

const BackgroundImg = styled.img`
    position: absolute;
    transition: 2s;
`


const BackgroundDivLeft = styled.div`
    background-image: url(https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_rwanda_sholi_bg_left.png);
    background-repeat: no-repeat;
    width : 300px;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0px;
    transition: 2s;
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
    transition: 2s;
`

const ProductLogoDiv = styled.div`
    position: relative;
    height: 57%;
    width: 100%;
    padding: 115px 0 0 400px;
    box-sizing: border-box;

`

const ProductLogoImg = styled.img`

`

const InfoButtonDiv = styled.div`
    position: relative;
    height: 18.5%;
    width: 100%;
    padding: 35px 0 0 660px;
    box-sizing: border-box;

`

const InformationButton = styled.a`
  display : block;
  width : 129px;
  height : 100%;
  border : #b9813e solid 2px;
  border-radius : 5px;
  color : #b9813e;
  text-align : center;
  line-height : 34px;
  font-size : 15px;
  box-sizing : border-box;
  &:hover{
    background: #b9813e;
    color : white;
    text-decoration: underline;
    transition: 0.5s;
  }
  
`