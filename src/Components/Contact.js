import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">


        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">

              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}

                  <br />
                  <span> +963 999 159 654</span>
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">


              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Projects</h4>
                <ul id="twitter">
                  <li>
                    <span>IKONIKS Software <br></br>
                      <a href="http://software.test.ikoniks.de/" target='_blank' >http://software.test.ikoniks.de/</a>
                    </span>

                  </li>
                  <li>
                    <span>Wodex <br />
                      <a href="https://wodex.online/" target='_blank'>  https://wodex.online/ </a>
                    </span>

                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
