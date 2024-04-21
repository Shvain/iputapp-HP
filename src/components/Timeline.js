import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div>
    <div className='timeline-all'>
      <div className="day-2024-3-1">
          <div className='timeline-item'>
              <div className='date-container'>
                <span className='date'></span>
                <p className='day'>2024/3/1</p>
              </div>
              <div className='content'>
                <h2>アプリ開発サークルの<br></br>ホームページを作成しました。</h2>
              </div>
            </div>
            <div className='image-timeline'>
              <img src={process.env.PUBLIC_URL + '/home-page.png'} width='400'  alt='home-page' className='app-home-page'/>
            </div>  
        </div>
        <div className='day-2024-1-4'>
          <div className='timeline-item'>
              <div className='date-container'>
                <span className='date'></span>
                <p className='day'>2024/1/4</p>
              </div>
              <div className='content'>
                <h2>Project αを発足しました。</h2>
              </div>
            </div>
            <div className='image-timeline'>
              <img src={process.env.PUBLIC_URL + '/project_a.png'} width='400'  alt='prinlup' className='app-home-page'/>
            </div>
          </div>
        <div className='day-2023-10-16'>
          <div className='timeline-item'>
              <div className='date-container'>
                <span className='date'></span>
                <p className='day'>2023/10/16</p>
              </div>
              <div className='content'>
                <h2>lounasのβ版の提供を開始しました。</h2>
              </div>
            </div>
            <div className='image-timeline'>
              <img src={process.env.PUBLIC_URL + '/lounas_card.png'} width='250'  alt='prinlup' className='lounas-card'/>
            </div>
          </div>
        <div className='day-2023-9-30'>
          <div className='timeline-item'>
              <div className='date-container'>
                <span className='date'></span>
                <p className='day'>2023/9/30</p>
              </div>
              <div className='content'>
                <h2>IPUT FESTA2023にてlounasを発表しました。</h2>
              </div>
            </div>
            <div className='image-timeline'>
              <img src={process.env.PUBLIC_URL + '/Release-teaser.png'} width='500'  alt='prinlup' className='lounas-presents'/>
            </div>
          </div>
        <div className='day-2023-7-1'>
          <div className='timeline-item'>
              <div className='date-container'>
                <span className='date'></span>
                <p className='day'>2023/7/1</p>
              </div>
              <div className='content'>
                <h2>アプリ開発サークルを設立しました。</h2>
              </div>
            </div>
            <div className='image-timeline'>
              <img src={process.env.PUBLIC_URL + '/app_dev_logo.png'} width='250'  alt='prinlup' className='app-dev'/>
            </div>
          </div>
      </div>
  </div>
  );
};

export default Timeline;