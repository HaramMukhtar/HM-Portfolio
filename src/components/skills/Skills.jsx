import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Tools1 from './Tools1';
import GD from './GD';


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <GD/> 
            <Tools1/> 
        </div>
    </section>
  );
}

export default Skills;