import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { X } from 'iconoir-react';

const Home = () => {
  return (
    <div>
      <Link to="https://twitter.com/iputapp" target="_blank" className="twitter-link">
        <X color='black'  className='x-icon'/>
      </Link>
      <Link to="https://zenn.dev/p/iput_app" target="_blank" className="zenn-link">
        <img src={process.env.PUBLIC_URL + '/logo-only-white.svg'} alt='zennlogo'  className='zenn-icon'/>
      </Link>
      <div className='home-container'>
        <video autoPlay loop muted playsInline webkit-playsInline className='background-video'> 
        <source src={process.env.PUBLIC_URL + '/lounas_PV.mp4'} />
        Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;