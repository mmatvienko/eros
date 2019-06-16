import React, { Component } from "react";
import { tintedHex, hexString } from "./helper";
import "./css/job.css";
class Academia extends Component {
  render() {
    const { position, field, dates, description, color } = this.props.academ;

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
              {position}
            </div>
            <div className="col-md-4 right" style={bg} />
          </div>

          <div className="row ">
            <div className="col-md-8 left head" style={bg}>
              {field}
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

export default Academia;
