import React, { useState } from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline, IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"; 




function Notice() {
  const [promotionButton, setPromotionButton] = useState(true);
  const [openCloseIcon, setOpenCloseIcon] = useState(<IoIosArrowDropdown/>)

  function promotionClicked(){
    if(promotionButton === true){
      setOpenCloseIcon(<IoIosArrowDropup className="OpenCloseButton"/>);
      setPromotionButton(false);
    } else {
      setOpenCloseIcon(<IoIosArrowDropdown className="OpenCloseButton"/>);
      setPromotionButton(true);
    }
  }


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
        <PromotionInnerA onClick = {promotionClicked}>
          <PromotionInnerP>
            스타벅스 프로모션
          </PromotionInnerP>
          <PromotionOpenCloseP>
            {openCloseIcon}
          </PromotionOpenCloseP>
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

const PromotionDiv = styled.div`
  position: relative;
  width: 45%;
  height: 62px;
  background-color: white;
  float: right;
`

const PromotionInnerA = styled.a`
  position: absolute;
  width: 100%;
  color : #666;
  font : bold 17px Avenir, Arial, georgia;
  line-height: 63px;
  cursor: pointer;
  
  
`

const PromotionInnerP = styled.p`
  display: block;
  position: absolute;
  right: 60%;
  
`
const PromotionOpenCloseP = styled.p`
  display: block;
  position: absolute;
  right : 49%;
  padding-top: 8px;
`
