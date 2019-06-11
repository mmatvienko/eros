import React, { Component } from "react";
import "./css/education.css";
import { tintedHex, hexString } from "./helper";

class Education extends Component {
  render() {
    const {
      name,
      location,
      degree,
      gpa,
      dates,
      course_work,
      current_courses,
      color
    } = this.props.school;

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
      padding: "50px"
    };

    return (
      <div className="row">
        <div className="col-md-9 education" style={bg}>
          <div className="row">
            <div className="col-md-6 left title" style={title}>
              {name}
            </div>
            <div className="col-md-6 right">{location}</div>
          </div>

          <div className="row italic">
            <div className="col-md-6 left">
              {degree} (GPA: {gpa})
            </div>
            <div className="col-md-6 right">
              {dates[0]} - {dates[1]}
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <div className="course-work">Current Course Work:</div>
              <div>{course_work.join(", ")}</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <div className="course-work">Future/Ongoing Course Work:</div>
              <div>{current_courses.join(", ")}</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">About me and shit</div>
      </div>
    );
  }
}

export default Education;
