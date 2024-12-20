import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Helmet from 'react-helmet';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  const baseUrl = ""
  const currentUrl = baseUrl + window.location.pathname;


  return (
    <div>
      <div>
      <Analytics />
      <SpeedInsights />
        <Helmet>
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:title' content='アプリ開発サークル' />
        <meta property='og:type' content='site' />
        <meta property='og:url' content={currentUrl} />
        <meta property='og:image' content={process.env.REACT_APP_OGP_URL + '/OGP.jpg'} />
        <meta property='og:description' content='IPUTの公認サークルです' />
        </Helmet>
      </div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
