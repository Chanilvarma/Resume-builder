import React, { useState } from "react";
import TagsInput from "../TagsInput";

const Skills = () => {
  const [skill, setSkill] = useState([]);

  const selectedTags = (tags) => {
    setSkill(tags);
  };

  return (
    <div className="container">
      <div className="heading">
        <h6>What are your stand-out skills?</h6>
      </div>
      <div className="form">
        <div className="row">
          <div className="col">
            <label htmlFor="middle name">Add your skills:</label>
          </div>
        </div>
        <TagsInput
          placeholder="Press enter your skills"
          selectedTags={selectedTags}
          tags={["nodejs","reactjs"]}
        />
        <br />
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={(e) => {
              console.log(...skill);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
