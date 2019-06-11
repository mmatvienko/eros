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

    const tinted = tintedHex(r, g, b, 0.5);
    const hex = hexString(r, g, b);

    var title = {
      color: hex
    };

    var bg = {
      background: tinted,
      padding: "40px"
    };

    return (
      <div className="row">
        <div className="job col-md-9" style={bg}>
          <div className="row">
            <div className="col-md-6 left job-title" style={title}>
              {company}
            </div>
            <div className="col-md-6 right">{location}</div>
          </div>

          <div className="row italic">
            <div className="col-md-6 left">{position}</div>
            <div className="col-md-6 right">
              {dates[0]} - {dates[1]}
            </div>
          </div>

          <ul className="description">
            {description.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default Job;
