import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const lounas = () => {
    window.open('https://lounas.jp', '_blank')
  }
  return (
    <div>
      <h2 style={{textAlign: 'center' ,marginTop: '180px', fontSize: '60px' }}>Projects</h2>
      <div 
        className={`lounascard ${isHovered ? 'hovered' : ''}`}
        onClick={lounas} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={process.env.PUBLIC_URL + '/lounas_card.png'} width='240'  alt='lounas_card' className='lounas-card'/>
        <p style={{color: '#0066FF'}}  className='lounas_link'>Available now ➜</p>
      </div>

      <div 
        className='prinlup'>
        <img src={process.env.PUBLIC_URL + '/prinlup-card.png'} width='310'  alt='prinlup' className='prinlup-card'/>
        <p className='lounas_link'>In progress</p>
      </div>
    </div>
  )
};

export default Projects;