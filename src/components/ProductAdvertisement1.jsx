import React from "react";
import styled from "styled-components";

function ProductAdvertisement1(){
    return (
        <ProductAdvertisementMain>
            <BackgroundDiv1/>
            <BackgroundDiv2/>
            
        </ProductAdvertisementMain>
    );
}

export default ProductAdvertisement1;

const ProductAdvertisementMain = styled.div`
    width: 100%;
    height: 575px;
    background-color: #f0831e;
`
const BackgroundDiv1 = styled.div`
    background-image : url(https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Autumn_bean_bg_left.png);
    position: absolute;
    left: 0;
    bottom: 0;
    height: 480px;
    width: 390px;
`

const BackgroundDiv2 = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
`