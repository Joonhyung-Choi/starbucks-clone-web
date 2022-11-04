import './App.css';
import Header from './components/Header';
import PageMain from './components/PageMain';
import styled from 'styled-components';
import Notice from './components/Notice';
import StarbucksRewards from './components/StarbucksRewards';
import ProductAdvertisement1 from './components/ProductAdvertisement1';
import ProductAdvertisement2 from './components/ProductAdvertisement2';



const HeaderBackDiv = styled.div`
  height : 120px;
  width : 100%;
`



function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderBackDiv>
      </HeaderBackDiv>
      <PageMain/>
      <Notice/>
      <StarbucksRewards/>
      <ProductAdvertisement1/>
      <ProductAdvertisement2/>

    </div>
  );
}

export default App;
