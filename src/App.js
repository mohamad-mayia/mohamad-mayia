import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import resumeData from './resumeData.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  // getResumeData() {
  //   $.ajax({
  //     url: "./resumeData.json",
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ resumeData: data });
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.getResumeData();
  // }

  render() {
    return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
