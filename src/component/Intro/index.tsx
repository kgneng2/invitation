import React from 'react';
import './styles.scss';

const Intro = () => {
  return (
    <div className='mcard-view'>
      <div className='mcard-intro'>
        <div className='title'>
          <div className='dates'>
            <span>2024</span>
            <span>08</span>
            <span>25</span>
          </div>
          <div className='wod'>Sunday</div>
        </div>
        <div>
          <div className='photo-wrap simple'>
            <div className='intro-blend-wrap photo gradient-none'>
              <img
                src='https://github.com/kgneng2/invitation/blob/main/src/images/main.jpg?raw=true'
                width='627'
                height='853'
                className='intro-blend-image img-blur'
              ></img>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='name'>
            <div className='groom'>강준영</div>
            <span> ❤️ </span> {/* <div className='divider'></div> */}
            <div className='bride'>최산하</div>
          </div>
          <div className='datetime'>
            2024.08.25 SUN
            <span> 오후 12시 30분 </span>
          </div>
          <div>양재 AT 포레 웨딩홀</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;