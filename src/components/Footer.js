import PropTypes from "prop-types";
import React from 'react';
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import microsoftIcon from "../images/socials/microsoft.svg";


const Footer = (props) => {
    const {
      microsoft,
      gitHub,
      instagram,
      linkedIn,
      name,
      primaryColor,
    } = props;
  
    return (
      <div
        id="footer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
          padding: "5rem 0 3rem",
          backgroundColor: primaryColor,
          width: "100vw"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {microsoft && (
            <a href={`https://account.microsoft.com/${microsoft}`}
            target="_blank"
            rel="princi sharma">
              <img src={microsoftIcon} alt="GitHub" className="socialIcon" />
            </a>
          )}
          
          {gitHub && (
            <a href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="Princi sharma">
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          )}
          {instagram && (
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="princi_sh1787"
            >
              <img src={instagramIcon} alt="Instagram" className="socialIcon" />
            </a>
          )}
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
            </a>
          )}
        </div>
        <p className="small" style={{ marginTop: 0, color: "white" }}>
          Created by {name}
        </p>
      </div>
    );
  };
  
  Footer.defaultProps = {
    name: "",
  };
  
  Footer.propTypes = {
    
    gitHub: PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
    microsoft: PropTypes.string,
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string,
   
  
  };
  
  export default Footer;
