import React from 'react';
import { HiOutlineCode, HiOutlineEye } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <div className="project__img-container">
        <img className="project__img" src={item.image} alt="" />
        <div className="project__overlay">
          <a href={item.code} className="project__icon" target="_blank" rel="noopener noreferrer">
            <HiOutlineCode />
          </a>
          <a href={item.demo} className="project__icon" target="_blank" rel="noopener noreferrer">
            <HiOutlineEye />
          </a>
        </div>
      </div>
      <h3 className="project__title">{item.title}</h3>
    </div>
  );
}

export default ProjectItems;