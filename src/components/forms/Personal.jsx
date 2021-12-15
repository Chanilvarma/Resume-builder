import React, { useState } from "react";

const Personal = () => {
  const [personalData, setPersonalData] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      email: "",
      mobile: "",
      profile: "",
      link: "",
      languages: [],
      city: "",
      state: "",
      country: "",
      pin: ""
    },
  ]);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]:value
    })
  };

const handleFormSubmit = (e) =>{
  e.preventDefault();
  console.log(personalData)
 setPersonalData('')
}
  return (
    <div className="container">
      <div className="heading">
        <h6>How can employers contact you?</h6>
      </div>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="first name">First name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name='firstName'
                value={personalData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="middle name">Middle name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Middle name"
                name='middleName'
                value={personalData.middleName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="last name">Last name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                value={personalData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="dob">DOB:</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                value={personalData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Mobile"
                name='mobile'
                value={personalData.mobile}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="Email">Email Id:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name='email'
                value={personalData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="img">Profile Image:</label>
              <input
                type="file"
                className="form-control"
                name='profile'
                value={personalData.profile}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="link">Website Link/LinkedIn Profile:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Profile link"
                name='link'
                value={personalData.link}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="language">Languages Known:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter any languages what your good at. "
                name='languages'
                value={personalData.languages}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name='city'
                value={personalData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                name='state'
                value={personalData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-lg-6">
                  {" "}
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name='country'
                    value={personalData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="pin">pin code:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Pin code"
                    name='pin'
                    value={personalData.pin}
                    onChange={handleInputChange}
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
