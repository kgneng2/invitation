import React from 'react';
import './styles.scss';
import { StaticImage } from 'gatsby-plugin-image';

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
              <StaticImage
                src='../../images/main.jpg'
                alt=''
                width={627}
                height={853}
                className='intro-blend-image img-blur'
              ></StaticImage>
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
