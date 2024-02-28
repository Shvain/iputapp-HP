import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { X, Instagram} from 'iconoir-react';

const Home = () => {
  return (
    <div>
      <Link to="https://twitter.com/lounas_app" target="_blank" className="twitter-link">
        <X color='black'  className='x-icon'/>
      </Link>
      <Link to="https://instagram.com/lounas_app" target="_blank" className="instagram-link">
        <Instagram color='black'  className='instagram-icon'/>
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