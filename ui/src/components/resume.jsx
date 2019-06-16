import React, { Component } from "react";
import Education from "./education";
import Job from "./job";
import Academia from "./academia";
import Project from "./project";
import "./css/resume.css";

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      resume: null,
      loaded: false,
      error: null
    };
    console.log("Resume - Constructor");
  }

  drawLine() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <hr />
        </div>
        <div className="col-md-3" />
      </div>
    );
  }

  componentDidMount() {
    console.log("Resume - Mounted");
    fetch("http://localhost:8063/resume")
      .then(resume => resume.json())
      .then(
        result => {
          this.setState({
            resume: result,
            loaded: true
          });
        },
        // handle errors
        error => {
          this.setState({
            loaded: false,
            error: error
          });
        }
      );
  }

  render() {
    console.log("Resume - Rendered");
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="title-name">Marc Matvienko</div>
            <div className="subtitle-name">
              Life is either a daring adventure or nothing at all.
            </div>
          </div>
          <div className="col-md-3" />
        </div>

        {this.drawLine()}

        {this.state.resume &&
          this.state.resume.education.map(school => (
            <Education key={school.id} school={school} />
          ))}

        {this.drawLine()}

        {this.state.resume &&
          this.state.resume.jobs.map(job => <Job key={job.id} job={job} />)}

        {this.drawLine()}

        {this.state.resume &&
          this.state.resume.academia.map(academ => (
            <Academia key={academ.id} academ={academ} />
          ))}

        {this.drawLine()}

        {this.state.resume &&
          this.state.resume.projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
      </React.Fragment>
    );
  }
}

export default Resume;
