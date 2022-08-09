import React, { Component } from "react";
import Fade from "react-reveal";
import profilepic from '../assets/images/mohamad.JPG'
import resume from '../assets/PDF/Mohamd_Mayia_Cv.pdf'
class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;

    const bio = this.props.data.bio;

    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Mohamad Mayia"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      Syrian nationality and residing in Iraq
                      <br />

                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span> +963 999 159 654</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resume} className="button" target="_blank" download>
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
