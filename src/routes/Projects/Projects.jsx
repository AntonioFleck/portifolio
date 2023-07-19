import React from 'react'
import './style.css'
import Project from './Project'
import GoDux from '../../assets/1.png'
import Capital from '../../assets/2.png'
import GPT from '../../assets/3.png'

const Projects = () => {
  return (
    <section id='projects'>
      <div id='projectsText'>
        <h1>Projetos</h1>
        <div className='migrateSmallLine'></div>
        <p>Aqui você encontrará mais informações sobre meus projetos realizados e quais tecnologias foram utilizadas.</p>
      </div>
      <div id='projectsContainer'>
      <Project
      img={GoDux}
      title='Site institucional Go Dux'
      desc='Neste projeto, desenvolvi um site institucional para a Go Dux, uma agência digital de performance. Utilizando a poderosa biblioteca React, criei uma experiência interativa e responsiva, fornecendo aos visitantes informações claras sobre os serviços oferecidos pela agência. O design moderno e a navegação intuitiva garantem uma experiência agradável ao explorar o site.'
      link='https://godux.com.br'
      />
            <Project
      img={Capital}
      title='Site institucional Capital Contabilidade'
      desc='Neste projeto, desenvolvi um site institucional para a Capital Contabilidade, um escritório de contabilidade renomado. Utilizando tecnologias como HTML, CSS e JavaScript, criei uma presença online sólida para a empresa. O design elegante, a disposição intuitiva das informações e os recursos interativos garantem que os visitantes encontrem facilmente as informações relevantes sobre os serviços contábeis oferecidos pela empresa.'
      link='https://capitalcnt.com'
      />
            <Project
      img={GPT}
      title='Extensão para Google Chrome: ChatGPT Pocket'
      desc='Neste projeto, criei uma extensão para o Google Chrome chamada ChatGPT Pocket. Essa extensão permite aos usuários acessarem uma versão minimizada do ChatGPT diretamente no navegador, facilitando o acesso rápido a um assistente virtual baseado em inteligência artificial. Com uma interface simplificada e intuitiva, os usuários podem aproveitar os recursos de conversação do ChatGPT de forma conveniente enquanto navegam na web.'
      link='https://github.com/AntonioFleck/ChatGPTPocket'
      />
      </div>
    </section>
  )
}

export default Projects