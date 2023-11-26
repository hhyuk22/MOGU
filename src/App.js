import MyImage from './images/image8.jpg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Kakao from './kakao.js';

function App() {
  return (
    <>
      <div className="bar"><Link to="/" className="link-class">mogu</Link></div>
      <Routes>
        <Route path="/" element={ 
          <div className="App">
            <div className="image-container">
              <img src={MyImage} alt="image" />
            </div>
            <div className="text">
              <span>인하대학교 IVC 소속 스타트엄 팀 <b>모구</b>입니다</span>
              <p>프로젝트를 함께 진행할 <span className="highlight-yellow">개발자</span> / <span className="highlight-red">디자이너</span>를
              <br></br><b>모구</b>와 함께 모집하고 구해보세요!</p>
              <Link to="/kakao" className="link-class"><span><b>시작하기 {'>'}</b></span></Link>
              <div class="fixed-footer">
                <div>참여 정보는 저희 프로젝트를 발전시키기 위한 자료로<br></br>쓰일 수 있음을 알려드립니다.</div>
              </div>
            </div>
          </div> 
        } /> 
        <Route path="/kakao" element={<Kakao />} />
      </Routes>
    </>
  );
}

export default App;
