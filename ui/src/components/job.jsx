import React, { Component } from "react";
import "./css/job.css";
import { tintedHex, hexString } from "./helper";

class Job extends Component {
  render() {
    const {
      company,
      position,
      location,
      dates,
      description,
      color
    } = this.props.job;

    const r = color[0];
    const g = color[1];
    const b = color[2];

    const tinted = tintedHex(r, g, b, 0.2);
    const hex = hexString(r, g, b);

    var title = {
      color: hex
    };

    var bg = {
      color: tinted
    };

    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="job col-md-6">
          <div className="row">
            <div className="col-md-8 left job-title" style={title}>
              {company}
            </div>
            <div className="col-md-4 right" style={bg}>
              {location}
            </div>
          </div>

          <div className="row ">
            <div className="col-md-8 left head" style={bg}>
              {position}
            </div>
            <div className="col-md-4 right italic" style={bg}>
              {dates[0]} - {dates[1]}
            </div>
          </div>

          <ul className="description row">
            {description.map(item => (
              <li className="col-md-9">{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default Job;
