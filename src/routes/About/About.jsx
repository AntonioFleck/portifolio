import React from 'react'
import './style.css'

const About = () => {
  return (
    <section id='about'>
      <div id="aboutTitleContainer">
        <h1>Sobre mim</h1>
        <div className='migrateSmallLine'></div>
        <p>Aqui você encontrará mais informações sobre mim, o que eu faço e minhas habilidades atuais, principalmente em termos de programação e tecnologia.</p>
      </div>
      <div id='aboutSkillsContainer'>
        <div>
          <p className='skillsTitle'>Conheça mais sobre mim</p>
          <p>Meu nome é Antônio, um entusiasta da tecnologia de 23 anos, atualmente cursando o segundo semestre da faculdade de Ciências da Computação. Desde que descobri a programação, minha paixão tem sido o desenvolvimento front-end. Tenho dedicado meu tempo e energia para me aprimorar nessa área, adquirindo conhecimentos sólidos em JavaScript e me especializando na biblioteca React.</p>
          <br />
          <p>Com uma visão voltada para a criação de interfaces modernas e intuitivas, estou sempre em busca de soluções inovadoras. Tenho uma abordagem centrada no usuário, focando em oferecer a melhor experiência possível. Através do uso habilidoso de JavaScript, desenvolvo aplicações web interativas e responsivas, garantindo uma navegação suave e envolvente.</p>
          <br />
          <p>Além disso, minha experiência com a biblioteca React tem sido fundamental no meu percurso como desenvolvedor front-end. Tenho explorado seus recursos poderosos e flexíveis para criar componentes reutilizáveis e escaláveis. Combinando minha habilidade técnica com uma paixão pelo design, estou sempre empenhado em criar interfaces atraentes e funcionais que superem as expectativas dos usuários. Estou ansioso para enfrentar novos desafios e contribuir para projetos inovadores no mundo do desenvolvimento front-end.</p>
          <br />
          <button onClick={() => {
          window.open('https://wa.me/5548988340261')
        }}>Entre em contato!</button>
        </div>
        <div>
          <p className='skillsTitle'>Tecnologias</p>
          <div id='skillsContainer'>
            <span className='skill'>HTML</span>
            <span className='skill'>CSS</span>
            <span className='skill'>JavaScript</span>
            <span className='skill'>TypeScript</span>
            <span className='skill'>React</span>
            <span className='skill'>Sass</span>
            <span className='skill'>Bootstrap</span>
            <span className='skill'>Git</span>
            <span className='skill'>GitHub</span>
            <span className='skill'>GA4</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About