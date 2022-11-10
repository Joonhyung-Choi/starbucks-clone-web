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

  const pageMainObserver = new IntersectionObserver(entry =>{
    entry.forEach(ObserverEntry => {

      if(ObserverEntry.isIntersecting){
        pageMainState = true;
        advertiseState1 = false;
        advertiseState2 = false;
        console.log(pageMainState, advertiseState1, advertiseState2, "1111");
      }
    })
  }, {threshold: 1})

  const advertiseObserver1 = new IntersectionObserver(entry => {
    entry.forEach(ObserverEntry => {
      if(ObserverEntry.isIntersecting){
        pageMainState = false;
        advertiseState1 = true;
        console.log(pageMainState, advertiseState1, advertiseState2, "2222");
      }
    })
  }, {threshold: 0.5})

  const advertiseObserver2 = new IntersectionObserver(entry => {
    entry.forEach(ObserverEntry => {
      if(ObserverEntry.isIntersecting){
        advertiseState2 = true;
        console.log(pageMainState, advertiseState1, advertiseState2, "3333");
      }
    })
  }, {threshold: 0.5})



  useEffect(() => {
    pageMainObserver.observe(document.querySelector(".pageMainSection"));
    advertiseObserver1.observe(document.querySelector(".advertiseSection1"));
    advertiseObserver2.observe(document.querySelector(".advertiseSection2"));
    if(pageMainState === true && advertiseState1 === false && advertiseState2 === false){
      advertiseObserver1.observe(document.querySelector(".advertiseSection1"));
      advertiseObserver2.observe(document.querySelector(".advertiseSection2"));
    }


    if(advertiseState1 === true){
      advertiseObserver1.unobserve(document.querySelector(".advertiseSection1"));
      console.log("unobserve1")
    }

    if(advertiseState2 === true){
      advertiseObserver2.unobserve(document.querySelector(".advertiseSection2"));
      console.log("unobserve2")
    }

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
      <ProductDiv1 className='advertiseSection1' advertiseState1={advertiseState1}>
        <ProductAdvertisement1 />
      </ProductDiv1>
      <ProductDiv2 className='advertiseSection2' advertiseState2={advertiseState2}>
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
