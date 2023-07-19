import React from 'react'
import './style.css'
import Avatar from '../../assets/avatar.png'
import Particle from '../../components/Particle'

import In from '../../assets/in.png'
import Wpp from '../../assets/wpp.png'
import Git from '../../assets/git.png'

const Home = () => {
  return (
    <section id="home">
        <div id="home-text-container">
            <h1 className='homeText'>👋 Sou Antônio Fleck, Desenvolvedor Front-end</h1>
            <p className='homeText'>Desenvolvo a interface de sites e aplicações web com React!</p>
            <div id='homeBtnsContainer'>
            <button onClick={() => {
          window.open('https://www.canva.com/design/DAFZYSzEsqQ/bnZwcG7UKl3g8HpeN_PARg/view?utm_content=DAFZYSzEsqQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink')
        }}>Currículo</button>
            <button onClick={() => {
          window.open('https://wa.me/5548988340261')
        }}>Contato</button>
            </div>
        </div>
        <div id='avatarSocial'>
        <div id='avatarContainer'>
        <img src={Avatar} alt="avatar-img" id='avatar'/>
        <div id='particleContainer'>
        <Particle></Particle>
        </div>
        </div>
        <div id='social'>
        <img src={In} alt="Linkedin Icon" className="socialIcon" onClick={() => {
          window.open('https://www.linkedin.com/in/ant%C3%B4nio-fleck/')
        }}/>
        <img src={Wpp} alt="Whatsapp Icon" className="socialIcon" onClick={() => {
          window.open('https://wa.me/5548988340261')
        }}/>
        <img src={Git} alt="GitHub Icon" className="socialIcon" onClick={() => {
          window.open('https://github.com/AntonioFleck')
        }}/>
        </div>
        </div>
    </section>
  )
}

export default Home