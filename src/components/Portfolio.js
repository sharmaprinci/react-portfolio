import React from 'react';

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
    {
      title: "Pokemon App",
      description:
        "A React app that fetches Pokémon data from the PokeAPI. Users can search and explore Pokémon displayed in interactive cards with images. The app features smooth hover transitions, displays key details (height/weight), and offers a responsive design for both desktop and mobile devices.",
      url: "https://pokemon-app-one-gamma.vercel.app/",
    },
    {
      title: "User Management CRUD",
      description:
       "The User Management Application is a web-based platform built with React, Vite, and the JSONPlaceholder API. This application allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. It features a responsive design, intuitive user interface, and seamless interaction for managing user information.",
      url: "https://user-management-henna.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      description:
        "Built a fully functional e-commerce platform using react.js and redux. Implementing features including product listings, cart management, and checkout process with state management for a seamless user experience. ",
      url: "https://e-commerce-react-js-project.netlify.app/",
    },
    {
      title: "GitHub Codespaces and github.dev",
      description:
        "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
      url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
    },
  ];



  const Portfolio = () => {
    return (
      <section className="padding" id="portfolio">
        <h2 style={{ textAlign: "center" }}>Portfolio</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
          <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            <img
              src={image}
              style={{ height: "90%", width: "100%", objectFit: "cover" }}
              alt={imageAltText}
            />
          </div>
          <div className="container">
            {projectList.map((project) => (
              <div className="box" key={project.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;