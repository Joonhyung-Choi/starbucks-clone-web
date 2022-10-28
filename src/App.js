import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PageMain from './components/PageMain';
import styled from 'styled-components';
import Notice from './components/Notice';

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
    </div>
  );
}

export default App;
