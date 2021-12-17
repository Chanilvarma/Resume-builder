import React, { useState, useContext } from "react";
import TagsInput from "../TagsInput";
import { GlobalContext } from "../../context/GlobalState";

const Skills = () => {
  const { addUserData } = useContext(GlobalContext);
  const [skill, setSkill] = useState([]);

  const selectedTags = (tags) => {
    setSkill(tags);
  };

  const handleFormsubmit = (e) => {
    e.preventDefault();
    addUserData(skill)
  }
  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };
  return (
    <div className="container">
      <div className="heading">
        <h6>What are your stand-out skills?</h6>
      </div>
      <div className="form">
        <form onSubmit ={handleFormsubmit} onKeyDown={(e) => checkKeyDown(e)}>
          <div className="row">
            <label htmlFor="middle name">Add your skills:</label>
            <TagsInput
              placeholder="Press enter your skills"
              selectedTags={selectedTags}
              tags={[]}
            />
          </div>
          <br />
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              type="submit"
              className="btn btn-outline-success me-md-2"
              
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skills;
