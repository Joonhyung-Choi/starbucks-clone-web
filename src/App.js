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
import { useState } from 'react';





function App() {
  // let pageMainState = true;
  // let advertiseState1 = false;
  // let advertiseState2 = false;

  // const pageMainObserver = new IntersectionObserver(entries =>{
  //   entries.forEach(entry=> {
  //     if(entry.isIntersecting){
  //       pageMainState = true;
  //       advertiseState1 = false;
  //       advertiseState2 = false;
  //       advertiseObserver1.observe(document.querySelector(".advertiseSection1"));
  //       advertiseObserver2.observe(document.querySelector(".advertiseSection2"));
  //       console.log(pageMainState, advertiseState1, advertiseState2, "1111");
  //     }
  //   })
  // }, {threshold: 1})

  // const advertiseObserver1 = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if(entry.isIntersecting){
  //       pageMainState = false;
  //       advertiseState1 = true;
  //       advertiseObserver1.unobserve(entry.target);
  //       console.log(pageMainState, advertiseState1, advertiseState2, "2222");
  //     }
  //   })
  // }, {threshold: 0.5})

  // const advertiseObserver2 = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if(entry.isIntersecting){
  //       advertiseState2 = true;
  //       advertiseObserver2.unobserve(entry.target);
  //       console.log(pageMainState, advertiseState1, advertiseState2, "3333");
  //     }
  //   })
  // }, {threshold: 0.5})



  // useEffect(() => {
  //   pageMainObserver.observe(document.querySelector(".pageMainSection"));
  //   return(() => {
  //     console.log("렌더 전")
  //   })
  // },[])
  
  // 사용자가 스크롤을 위로 올렸는지 확인하기 위한 pageMain컴포넌트의 state
  const [pageMainState, setPageMainState] = useState(true);

  // 인터섹션 옵저버 객체 선언 
  const pageMainObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //옵저버가 pageMain의 요소를 관찰하게 되면 pageMainState를 true로, 그렇지 않으면 false로 변환
      if(entry.isIntersecting){
        setPageMainState(true);
      } else {
        setPageMainState(false)
      }

    })
    // 옵저버의 옵션 설정 : 옵저버 대상 요소가 뷰포트에 100% 드러나면 옵저버가 해당 요소를 관찰
  }, {threshold:1})


  // 처음 렌더링 시 요소가 렌더링 되지 않아 querySelector에 null 값이 들어가는 것을 방지하기 위한 useEffect
  useEffect(() => {
    pageMainObserver.observe(document.querySelector(".pageMainSection"));
  }, [])


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
      {/* pageMainState 값을 props로 전달 */}
      <ProductAdvertisement1 pageMainState={pageMainState} />
      {/* pageMainState 값을 props로 전달 */}
      <ProductAdvertisement2 pageMainState={pageMainState} />
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


export default App;
