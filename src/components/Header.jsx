import React from "react";
import styled from "styled-components";
import { useState } from "react";

// 헤더 컴포넌트
function Header() {
  // 로고 이미지 주소
  const LOGO_IMG_SRC = "https://www.starbucks.co.kr/common/img/common/logo.png";

  // 검색 버튼 이미지 주소
  const SEARCH_BUTTON_IMG_SRC =
    "https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png";

  // 검색 버튼의 상태 state
  const [isClicked, setIsClicked] = useState(false);
  function onClickSerchButton() {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
    }
  }

  return (
    <HeaderBlock>
      <HeaderBlockInner>
        <HeaderBlockInnerLogo href="/">
          <LogoImg src={LOGO_IMG_SRC} alt="" />
        </HeaderBlockInnerLogo>
        <HeaderTopNav className={isClicked ? "searchButtonClicked" : ""}>
          <TopNavUl>
            <TopNavLi className="topNav1">
              <a className="topNavA" href="/">
                Sign in
              </a>
            </TopNavLi>
            <TopNavLi className="topNav2">
              <a className="topNavA" href="/">
                My Starbucks
              </a>
            </TopNavLi>
            <TopNavLi className="topNav3">
              <a className="topNavA" href="/">
                Customer Service & Ideas
              </a>
            </TopNavLi>
            <TopNavLi className="topNav4">
              <a className="topNavA" href="/">
                Find a Store
              </a>
            </TopNavLi>
          </TopNavUl>
        </HeaderTopNav>
        <SerchArea className={isClicked ? "searchButtonClicked" : ""}>
          <InputSerch
            className={isClicked ? "searchButtonClicked" : ""}
            type="text"
            placeholder="통합검색"
          ></InputSerch>
          <SerchButton onClick={onClickSerchButton}>
            <SerchButtonImg src={SEARCH_BUTTON_IMG_SRC}></SerchButtonImg>
          </SerchButton>
        </SerchArea>
        <HeaderBottomNav>
          <BottomNavUl>
            <BottomNavLi className="bottomNav1">
              <a className="bottomNavA" href="/">
                COFFEE
              </a>
            </BottomNavLi>
            <BottomNavLi className="bottomNav2">
              <a className="bottomNavA" href="/">
                MENU
              </a>
            </BottomNavLi>
            <BottomNavLi className="bottomNav3">
              <a className="bottomNavA" href="/">
                STORE
              </a>
            </BottomNavLi>
            <BottomNavLi className="bottomNav4">
              <a className="bottomNavA" href="/">
                RESPONSIBILITY
              </a>
            </BottomNavLi>
            <BottomNavLi className="bottomNav5">
              <a className="bottomNavA" href="/">
                STARBUCKS REWARDS
              </a>
            </BottomNavLi>
            <BottomNavLi className="bottomNav6">
              <a className="bottomNavA" href="/">
                WHAT'S NEW
              </a>
            </BottomNavLi>
          </BottomNavUl>
        </HeaderBottomNav>
      </HeaderBlockInner>
    </HeaderBlock>
  );
}

export default Header;

const HeaderBlock = styled.div`
  background: #f6f5ef;
  border-bottom: 1px solid #e5e5e5;
  border-top: 2px solid #000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 120px;
  z-index: 99;
`;

const HeaderBlockInner = styled.div`
  height: 100%;
  width: 1100px;
  margin: 0 auto;
  position: relative;
`;
const HeaderBlockInnerLogo = styled.a`
  position: absolute;
  left: 0;
  top: 22px;
`;

const LogoImg = styled.img``;

const HeaderTopNav = styled.nav`
  background: url(https://www.starbucks.co.kr/common/img/common/sdown_util_sep.png)
    no-repeat;
  position: absolute;
  right: 93px;
  top: 18px;
  height: 20px;
  width: 464px;
  transition: all 0.75s;
`;
const TopNavUl = styled.ul`
  list-style: none;
`;

const TopNavLi = styled.li`
  text-align: center;
  float: left;
  height: 20px;
  color: #555;

  font: normal 13px Avenir, Arial, georgia;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #555;
  }
`;

const SerchArea = styled.p`
  position: absolute;
  display: block;
  right: 54px;
  top: 9px;
  width: 34px;
  height: 34px;
  border: 1px #ccc solid;
  border-radius: 5px;
  transition: all 0.75s;
  background: 255 255 255;
`;

const InputSerch = styled.input`
  position: absolute;
  width: 0px;
  height: 22px;
  padding: 0 10px;
  left: 0;
  top: 5px;
  border: none;
  background: none;
  transition: all 0.75s;
  font: normal 13px Avenir, Arial, georgia;
`;
const SerchButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 34px;
  height: 34px;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;
const SerchButtonImg = styled.img`
  position: absolute;
  top: 6px;
  right: 7px;
`;

const HeaderBottomNav = styled.nav`
  height: 66px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const BottomNavUl = styled.ul`
  list-style: none;
  position: absolute;
  right: 0;
  height: 100%;
`;

const BottomNavLi = styled.li`
  font: normal 13px Avenir, Arial, georgia;
  text-align: center;
  display: block;
  float: left;
  height: 100%;
`;
