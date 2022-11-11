import './App.css';
import Header from './components/Header';
import PageMain from './components/PageMain';
import styled from 'styled-components';
import Notice from './components/Notice';
import StarbucksRewards from './components/StarbucksRewards';
import ProductAdvertisement1 from './components/ProductAdvertisement1';
import ProductAdvertisement2 from './components/ProductAdvertisement2';
import ProductAdvertisement3 from './components/ProductAdvertisement3';
import { useEffect, useRef } from 'react';





function App() {
  let pageMainState = true;
  let advertiseState1 = false;
  let advertiseState2 = false;

  // 페이지 메인 컴포넌트를 관찰할 인터섹션 옵저버 객체
  const pageMainObserver = new IntersectionObserver(entries =>{
    entries.forEach(entry => {

      if(entry.isIntersecting){
        pageMainState = true;
        advertiseState1 = false;
        advertiseState2 = false;
        advertiseObserver1.observe(document.querySelector(".advertiseSection1"));
        advertiseObserver2.observe(document.querySelector(".advertiseSection2"));
        console.log(pageMainState, advertiseState1, advertiseState2, "1111");
      }
    })
  }, {threshold: 1})

  // 제품 광고 컴포넌트 1을 관찰할 인터섹션 옵저버 객체
  const advertiseObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        pageMainState = false;
        advertiseState1 = true;
        advertiseObserver1.unobserve(entry.target);
        console.log(pageMainState, advertiseState1, advertiseState2, "2222");
      }
    })
  }, {threshold: 0.5})

  // 제품 광고 컴포넌트 2를 관찰할 인터섹션 옵저버 객체
  const advertiseObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        advertiseState2 = true;
        advertiseObserver2.unobserve(entry.target);
        console.log(pageMainState, advertiseState1, advertiseState2, "3333");
      }
    })
  }, {threshold: 0.5})



  useEffect(() => {
    pageMainObserver.observe(document.querySelector(".pageMainSection"));
    advertiseObserver1.observe(document.querySelector(".advertiseSection1"));
    advertiseObserver2.observe(document.querySelector(".advertiseSection2"));
  })
  

  return (
    <div className="App">
      <Header />
      <HeaderBackDiv>
      </HeaderBackDiv>
      <PageMainDIv className='pageMainSection' >
        <PageMain />
      </PageMainDIv>

      <Notice />
      <StarbucksRewards />
      <ProductDiv1 className='advertiseSection1' >
        <ProductAdvertisement1 />
      </ProductDiv1>
      <ProductDiv2 className='advertiseSection2'>
        <ProductAdvertisement2 />
      </ProductDiv2>
      <ProductAdvertisement3 />


    </div>
  );
}



const HeaderBackDiv = styled.div`
  height : 120px;
  width : 100%;
`


const PageMainDIv = styled.div`
`

const ProductDiv1 = styled.div`
`

const ProductDiv2 = styled.div`
`

const ProductDiv3 = styled.div`
`

export default App;
