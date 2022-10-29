import React from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline, IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"; 




function Notice() {



  return (
    <NoticeMainDiv>
      <NoticeDiv>
        <NoticeInnerP>공지사항</NoticeInnerP>
        <NoticeInnerA className="noticeInnerA" href="/">시스템 개선 및 점검 안내</NoticeInnerA>
        <NoticeInnerPlusIcon href="/">
          <IoIosAddCircleOutline className="plusIcon"></IoIosAddCircleOutline>
        </NoticeInnerPlusIcon>
      </NoticeDiv>
      <PromotionDiv>
        <PromotionInnerA href="/">
          <PromotionInnerP>
            스타벅스 프로모션
          </PromotionInnerP>
          

        </PromotionInnerA>
      </PromotionDiv>
    </NoticeMainDiv>
  );
}

export default Notice;


const NoticeMainDiv = styled.div`
    width: 100%;
    height: 62px;
    background-color: black;
`
const NoticeDiv = styled.div`
  width: 50%;
  height: 62px;
  float: left;

`

const PromotionDiv = styled.div`
  width: 45%;
  height: 62px;
  background-color: white;
  float: right;
`

const NoticeInnerP = styled.p`
  position: absolute;
  left : 20%;
  text-align: center;
  display: block;
  color: white;
  width: 100px;
  height: 62px;
  font : normal 17px Avenir, Arial, georgia;

  line-height: 57px;
`

const NoticeInnerA = styled.a`
  position: absolute;
  left: 24%;
  display: block;
  text-align: center;
  color: white;
  width: 200px;
  height: 62px;
  font : normal 14px Avenir, Arial, georgia;

  line-height: 60px;

`

const NoticeInnerPlusIcon = styled.a`
  padding-top: 7px;
  position: absolute;
  display: block;
  width: 43px;
  height: 62px;
  position: absolute;
  left: 51.5%;

`

const PromotionInnerA = styled.a`
  display: block;
  position: absolute;
  right: 28%;
  color : #666;
  font : bold 17px Avenir, Arial, georgia;
  line-height: 63px;
`

const PromotionInnerP = styled.p`
  
`

