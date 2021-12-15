import React from "react";

const Personal = () => {
  return (
    <div className="container">
      <div className="heading">
        <h6>How can employers contact you?</h6>
      </div>
      <div className="form">
        <form>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="first name">First name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="middle name">Middle name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Middle name"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="last name">Last name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="dob">DOB:</label>
              <input
                type="date"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Mobile"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="Email">Email Id:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="img">Profile Image:</label>
              <input type="file" className="form-control" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="link">Website Link/LinkedIn Profile:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Profile link"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="language">Languages Known:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter any languages what your good at. "
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="first name">City:</label>
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="middle name">State:</label>
              <input type="text" className="form-control" placeholder="State" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-lg-6">
                  {" "}
                  <label htmlFor="last name">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="last name">pin code:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Pin code"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <button type='submit' className="btn btn-outline-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal;
