'use client';
import React from "react";
import PropTypes from "prop-types";
import Image from 'next/image';

const ProjectDetails = ({ project, isOpen, onClose }) => {
  if (!project) {
    return null;
  }

  const { title, startDate, description, images, url, technologies } = project;

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h2 className="title is-3">{title}</h2>
          <p className="subtitle is-6">{startDate}</p>
          <hr />
          <p>{description}</p>
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="columns is-multiline">
                {images.map((image, index) => (
                  <div key={index} className="column is-one-third">
                    <Image src={image} width={240} height={300}alt={`Screenshot ${index}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="column">
              <a href={url} className="button is-primary">
                Visit Project Site
              </a>
              <hr />
              <h4 className="subtitle is-5">Technologies Used:</h4>
              <ul>
                {technologies.map(({ class: className, name }, index) => (
                  <li key={index}>
                    <i className={className}></i> {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    url: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        class: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetails;
