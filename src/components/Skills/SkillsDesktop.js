import React from 'react'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
import mysql from '../../assets/mysql.png'
import react from '../../assets/atom.png'
import nodejs from '../../assets/nodejs.png'
import mongodb from '../../assets/mongodb_symbol.png'
import './Skills.css'
import { Colors } from '../../styles'

export default function SkillsDesktop() {

  return (
    <div>
        <h1 className='skills-heading' id='skills' style={{textDecorationColor:`${Colors.secondary}`}}>Skills</h1>
        <div className='main-img-container'>
          <div className='col'>
            <figure class="grid-item">
              <img src={java} alt="Java"/>
            </figure>
          </div>
          <div className='col'>
            <figure class="grid-item">
              <img src={python} alt="Python"/>
            </figure>
          </div>
          <div className='col'>
            <figure class="grid-item">
              <img src={mysql}  alt="MySQL"/>
            </figure>
          </div>
          <div className='col'>
            <figure class="grid-item">
              <img src={react} alt="React"/>
            </figure>
          </div>
          <div className='col'>
            <figure class="grid-item">
              <img src={nodejs} alt="NodeJS"/>
            </figure>
          </div>
          <div className='col'>
            <figure class="grid-item">
              <img src={mongodb}  alt="MongoDB"/>
            </figure>
          </div>
        </div>
      </div>
    
  )
}
