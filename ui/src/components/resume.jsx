import React, { Component } from "react";
import Education from "./education";
import Job from "./job";

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
        {this.state.resume &&
          this.state.resume.education.map(school => (
            <Education key={school.id} school={school} />
          ))}
        {this.state.resume &&
          this.state.resume.jobs.map(job => <Job key={job.id} job={job} />)}
      </React.Fragment>
    );
  }
}

export default Resume;
