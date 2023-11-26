import React from 'react';
import './App.css';
import Kakao from './images/kakao_login.png';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="cancle-login">
            <span className='modal-cancle' onClick={onClose}>Cancle</span>
            <span className='modal-login'>Login</span>
            <span className='modal-no'></span>
        </div>
        <div className='modal-text'>서비스를 이용하기 위해서는<br></br>회원 정보 등록을 위해<br></br>회원가입 / 로그인이 필요합니다.</div>
        <div className='modal-grid'>
            <div className='modal-kakao'>
                <img src={Kakao} alt="image"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;