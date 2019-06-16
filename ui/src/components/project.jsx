import React, { Component } from "react";
import { tintedHex, hexString } from "./helper";
import "./css/job.css";

class Project extends Component {
  render() {
    const { name, links, description, color } = this.props.project;

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
        <div className="col-md-6 job">
          <div className="row">
            <div className="col-md-5 job-title" style={title}>
              {name}
            </div>
            <div className="col-md-7 description">{description}</div>
          </div>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default Project;
