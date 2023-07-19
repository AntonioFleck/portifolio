import React from 'react'

const Project = ({ img, title, desc, link }) => {
  return (
    <div className='project' onClick={() => {
        window.open(`${link}`)
    }}>
        <div>
        <img src={img} alt="project-image" className='projectImg'/>
        </div>
        <div className='projectTextContainer'>
        <p className='projectTitle'>{title}</p>
        <p className='projectDesc'>{desc}</p>
        <p className='seeDemo'>Clique e o projeto no ar!</p>
        </div>
    </div>
  )
}

export default Project