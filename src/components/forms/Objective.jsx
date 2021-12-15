import React from "react";

const Objective = () => {
  return (
    <div className="container">
      <div className="heading">
        <h6>How can you describe yourself?</h6>
      </div>
      <div className="form">
        <form>
          <div className="row">
            <div className="col">
              <textarea
                class="form-control"
                placeholder="Enter a brief description of your professional background. You can choose to highlight specific skills, knowledge or industry experience."
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-outline-success me-md-2" type="submit">
                Save
              </button>
              <button className="btn btn-outline-danger" type="reset">
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
