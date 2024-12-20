import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [isHovered, setIsHovered] = useState(false);

  const lounas = () => {
    window.open('https://lounas.jp', '_blank')
  }
  return (
    <div className='project-card'>
      <h2 className='project-title'>Projects</h2>
      <div 
        className={`lounascard ${isHovered ? 'hovered' : ''}`}
        onClick={lounas} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={process.env.PUBLIC_URL + '/lounas_card.png'} width='180'  alt='lounas_card' className='projects-lounas-card'/>
        <p style={{color: '#0066FF'}}  className='lounas_link'>Available now ➜</p>
      </div>

      <div 
        className='prinlup'>
        <img src={process.env.PUBLIC_URL + '/prinlup-card.png'} width='250'  alt='prinlup' className='projects-prinlup-card'/>
        <p className='lounas_link'>In progress</p>
      </div>
    </div>
  )
};

export default Projects;