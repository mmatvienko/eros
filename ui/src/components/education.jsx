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

        <div className="col-md-6 education">
          <div className="row">
            <div className="col-md-8 left title" style={title}>
              {name}
            </div>
            <div className="col-md-4 right" style={bg}>
              {location}
            </div>
          </div>

          <div className="row italic">
            <div className="col-md-8 left">
              {degree} (GPA: {gpa})
            </div>
            <div className="col-md-4 right" style={bg}>
              {dates[0]} - {dates[1]}
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className="course-work" style={bg}>
                Current Course Work:
              </div>
              <div>{course_work.join(", ")}</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className="course-work" style={bg}>
                Future/Ongoing Course Work:
              </div>
              <div>{current_courses.join(", ")}</div>
            </div>
          </div>
        </div>

        <div className="col-md-3" />
      </div>
    );
  }
}

export default Education;
