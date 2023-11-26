import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from './modal.js';
import React, { useState, useEffect } from 'react';

function Kakao(){
    const [contestData, setContestData] = useState([]);

  useEffect(() => {
    // API 요청을 보내는 함수
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/api/contest/info');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContestData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData 함수를 호출하여 API 데이터를 가져옵니다.
    fetchData();
  }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            {contestData.map((contest, index) => (     
                <div className="grid-container">
                    <div key={index} className="box-container" onClick={() => window.location.href = contest.url}>
                        <img src={contest.imgUrl} alt={contest.name}/>
                        <div className='box-text'>{contest.name}
                            <div className='box-text-s'>기간 : ~ {contest.endDate}
                        </div>
                    </div>
                </div>
                {/* <Modal isOpen={isModalOpen} onClose={closeModal}></Modal> */}
            </div>
          ))}
        </>
      )
}

export default Kakao;

// return(
//     <>
//         <div className="grid-container" onClick={openModal}>
//             <div className="box-container">
//                 <img src={Image} alt="image"/>
//                 <div className='box-text'>{contest.name}
//                 <div className='box-text-s'>기간 : ~ 23.11.30 15:00</div></div>
//             </div>
//             <Modal isOpen={isModalOpen} onClose={closeModal}>
//             </Modal>
//         </div>
//     </>
// )

// {
//     "id": 1,
//     "name": "Nisi 대회",
//     "category": "해커톤",
//     "endDate": "1955-09-14T00:00:00",
//     "url": "https://www.yuhanhoesa.com/"
// }
// localhost
// ip: http://127.0.0.1:8080/api/auth/ 