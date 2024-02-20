import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { PageDown } from 'iconoir-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div>
      <div className='about'>
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
        <div className='scroll-page'>
          <div className='scroll-page-card'>
            <h2 className='sub-title'>より実践的に、より専門的に。</h2>
            <h1 className='main-title'>アプリ開発とは総合芸術の結晶です。</h1>
            <p className='sub-title-text'>アプリ開発は多くのスキルによって構成されます。<br></br>
            エンジニア・デザイナー・プロジェクトマネージャー・企画・マーケティング・プロモーションなど、<br></br>
            アプリ開発サークルではそれらのスキルを持つメンバーが集い、活動を行います。<br></br>
            </p>
            <img src={process.env.PUBLIC_URL + '/Technology_asets.png'} width={700} alt='asetes' className='asetes-image'/>
            </div>
          <div className='join-us'>
            <h1 className='join-us-text'>JOIN US!</h1>
            <div className='join-us-sub'>
              <h2 style={{fontSize: 25}}>私達は東京国際工科専門職大学の公認サークルです。</h2>
              <Link to="/contact" className='link-contact'>
                <button className='contact-button'>
                  お問い合わせ
              </button>
            </Link>
            </div>
            </div>
        </div>
    </div>
  );
};

export default About;