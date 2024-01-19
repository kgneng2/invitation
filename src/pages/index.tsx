import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './styles.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className='app'>
      <div className='mcard-view'>
        <div className='inner'>
          <div></div>
        </div>
        <div>
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
                <div className='divider'></div>
                <div className='bride'>최산하</div>
              </div>
              <div className='datetime'>
                " 2024년 8월 25일 일요일 "<span>오후 12시 30분</span>
                <br></br>
                <div>양재 AT포레 웨딩홀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>강준영 ❤️ 최산하 우리 결혼합니다 </title>
);
