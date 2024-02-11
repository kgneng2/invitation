import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './styles.scss';
import Dday from '../component/Calendar/Dday';
import Map from '../component/Map';
import Intro from '../component/Intro';
import Contact from '../component/Contact';
import Calendar from '../component/Calendar';
import Photos from '../component/Photo';

const IndexPage: React.FC<PageProps> = () => (
  <>
    <div className='app'>
      <Intro />
      <Contact />
      <Calendar />
      <Photos />
      <Map />
    </div>
  </>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <title>강준영 ❤️ 최산하 우리 결혼합니다 </title>
);
