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
  height : 12px;
  width : 1100px;
  margin : 0 auto;
  position : relative;
`




function Header(){

    return(
        <HeaderBlock>
            <HeaderBlockInner>
                
            </HeaderBlockInner>
        </HeaderBlock>
    );
}

export default Header;