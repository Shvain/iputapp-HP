import React from 'react';
import './About.css';
import { PageDown } from 'iconoir-react';

const About = () => {
  return(
    <div>
      <div className='top'>
        <div className='front-page'>
         <h2 className='topmessage'> 挑戦し、創造し、成長し、未来を創る。<br></br>
          私たちは志を持つ様々なクリエイターが集い、<br></br>
          革新的なアプリケーションを生み出す場です。
          </h2>
          <div className='page-down-container'>
            <PageDown color='black' height={40} width={40} className='page-down'/>
            <span className='page-down-text'>Scroll for more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;