import PropTypes from "prop-types";
import React from 'react';
import arrowSvg from "../images/down-arrow.svg";
import image from "../images/profile-image.jpg";


const imageAltText = "Adult female is sitting in office and doing her work";
const Home = ({ name, title }) => {
    return (
      <section id="home" className="min-height">
        <img className="background" src={image} alt="" />
        <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </div>
      </section>
    );
  };
  
  Home.defaultProps = {
    name: "",
    title: "",
  };
  
  Home.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  
  export default Home;