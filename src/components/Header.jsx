import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  background : #f6f5ef;
  border-bottom : 1px solid #e5e5e5;
  border-top : 2px solid #000;
  left : 0;
  position : fixed;
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

const HeaderBlockInnerTopNav = styled.nav`
  background: url(https://www.starbucks.co.kr/common/img/common/sdown_util_sep.png) no-repeat;
  position : absolute;
  right : 93px;
  top : 15px;
  height : 20px;
  width 464px;
  
`
const TopNavUl = styled.ul`
  list-style : none;
`


const TopNavLi = styled.li`
  text-align : center;
  float : left;
  height : 20px;
  color : #555;
  // �� display : block�� ����ϴ� �����غ���
  display : block;
  // font �Ӽ��� Avenir, Arial, gerogia�� �۲��� �������� ��
  // ��ǥ�� ���� �۲��� ����� �� �ִ�. �� �� �� ���� �۲��� �켱���� �����Ű�� ���� �۲��� ������� ��ǻ�Ϳ� ������ ���� �۲� ���
  font : normal 13px Avenir, Arial, georgia;
`


function Header(){

    return(
        <HeaderBlock>
            <HeaderBlockInner>
                <HeaderBlockInnerLogo href="/">
                  <img src="https://www.starbucks.co.kr/common/img/common/logo.png" alt="" />
                </HeaderBlockInnerLogo>
                <HeaderBlockInnerTopNav>
                  <TopNavUl>
                    <TopNavLi className="topNav1"><a href="/">Sign in</a></TopNavLi>
                    <TopNavLi className="topNav2"><a href="/">My Starbucks</a></TopNavLi>
                    <TopNavLi className="topNav3"><a href="/">Customer Service & Ideas</a></TopNavLi>
                    <TopNavLi className="topNav4"><a href="/">Find a Store</a></TopNavLi>
                  </TopNavUl>
                </HeaderBlockInnerTopNav>
            </HeaderBlockInner>
        </HeaderBlock>
    );
}

export default Header;