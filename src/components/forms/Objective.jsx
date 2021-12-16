import React, { useState, useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';

const Objective = () => {
  const { addUserData } = useContext(GlobalContext);
  const [objective, SetObjective] = useState([{objective: ' '}]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addUserData(objective)
    SetObjective(' ')
  }

  const hnadleReset = () => {
    SetObjective(' ');
  }
  return (
    <div className="container">
      <div className="heading">
        <h6>How can you describe yourself?</h6>
      </div>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col">
              <textarea
                class="form-control"
                placeholder="Enter a brief description of your professional background. You can choose to highlight specific skills, knowledge or industry experience."
                value={objective.objective}
                onChange={e => SetObjective({objective: e.target.value})}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-outline-success me-md-2" type="submit">
                Save
              </button>
              <button className="btn btn-outline-danger" onClick={hnadleReset} type="reset">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Objective;
