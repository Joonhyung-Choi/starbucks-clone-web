import React from "react";
import styled from "styled-components";
import { useState } from "react";

const HeaderBlock = styled.div`
  background : #f6f5ef;
  border-bottom : 1px solid #e5e5e5;
  border-top : 2px solid #000;
  position : fixed;
  left : 0;
  top : 0;
  width: 100%;
  height : 120px;
  z-index : 99;
`

const HeaderBlockInner = styled.div`
  height : 100%;
  width : 1100px;
  margin : 0 auto;
  position : relative;
`
const HeaderBlockInnerLogo = styled.a`
  position : absolute;
  top : 20%;
`

const HeaderTopNav = styled.nav`
  background: url(https://www.starbucks.co.kr/common/img/common/sdown_util_sep.png) no-repeat;
  position : absolute;
  right : 93px;
  top : 18px;
  height : 20px;
  width 464px;
  transition : all 0.75s;
`
const TopNavUl = styled.ul`
  list-style : none;
`


const TopNavLi = styled.li`
  text-align : center;
  float : left;
  height : 20px;
  color : #555;
  display : block;
  // font ????? Avenir, Arial, gerogia?? ????? ???????? ??
  // ????? ???? ????? ????? ?? ???. ?? ?? ?? ???? ????? ?��???? ???????? ???? ????? ??????? ?????? ?????? ???? ??? ???
  font : normal 13px Avenir, Arial, georgia;
`

const SerchArea = styled.p`
  position : absolute;
  display : block;
  right : 54px;
  top : 9px;
  width : 34px;
  height : 34px;
  border : 1px #ccc solid;
  border-radius : 5px;
  transition : all 0.75s;
  background : 255 255 255;
`

const InputSerch = styled.input`
  position : absolute;
  width : 0px;
  height : 22px;
  padding : 0 10px;
  left : 0;
  top : 5px;
  border : none;
  background : none;
  transition : all 0.75s;
  font : normal 13px Avenir, Arial, georgia;
`
const SerchButton = styled.a`
  position : absolute;
  top : 0;
  right 0;
  display : block;
  width : 34px;
  height : 34px;
  cursor : pointer;
  margin : 0;
  padding : 0;
`
const SerchButtonImg = styled.img`
  position : absolute;
  top : 6px;
  right : 7px;
`

const HeaderBottomNav = styled.nav`
  height : 66px;
  width : 100%;
  position : absolute;
`




function Header(){

  const[isClicked, setIsClicked] = useState(false);
  function onClickSerchButton(){
    if(isClicked === false){
      setIsClicked(true)
    } else {
      
    }
}



    return(
        <HeaderBlock>
            <HeaderBlockInner>
                <HeaderBlockInnerLogo href="/">
                  <img src="https://www.starbucks.co.kr/common/img/common/logo.png" alt="" />
                </HeaderBlockInnerLogo>
                <HeaderTopNav className={isClicked ? 'searchButtonClicked' : ''}>
                  <TopNavUl>
                    <TopNavLi className="topNav1"><a href="/">Sign in</a></TopNavLi>
                    <TopNavLi className="topNav2"><a href="/">My Starbucks</a></TopNavLi>
                    <TopNavLi className="topNav3"><a href="/">Customer Service & Ideas</a></TopNavLi>
                    <TopNavLi className="topNav4"><a href="/">Find a Store</a></TopNavLi>
                  </TopNavUl>
                </HeaderTopNav>
                <SerchArea className={isClicked ? 'searchButtonClicked' : ''}>
                  <InputSerch className={isClicked ? 'searchButtonClicked' : ''} type='text' placeholder="통합검색">
                  </InputSerch>
                  <SerchButton onClick={onClickSerchButton}>
                    <SerchButtonImg src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"></SerchButtonImg>
                  </SerchButton>
                </SerchArea>

            </HeaderBlockInner>
        </HeaderBlock>
    );
}

export default Header;