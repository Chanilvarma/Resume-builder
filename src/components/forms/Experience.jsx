import React, { useState,useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Experience = () => {
  const { addUserData } = useContext(GlobalContext);
  const [experienceData, setExperienceData] = useState([
    {
      role: "",
      company: "",
      from: "",
      to: "",
      city: "",
      state: "",
      country: "",
      pin: "",
      description: '',
    },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experienceData];
    list[index][name] = value;
    setExperienceData(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...experienceData];
    list.splice(index, 1);
    setExperienceData(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setExperienceData([...experienceData,
    {
      role: "",
      company: "",
      from: "",
      to: "",
      city: "",
      state: "",
      country: "",
      pin: "",
      description: '',
    },
    ]);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
    addUserData(experienceData)
}
  return (
    <div className="container">
      <div className="heading">
        <h6>What are your most relevant experiences?</h6>
      </div>
      <div className="form">
        {experienceData.map((event, index) => {
          return (
            <form onSubmit ={handleFormSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="first name">Role:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role or job title

                "
                    name='role'
                    value={event.role}
                    onChange={e => handleInputChange(e, index)}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="middle name">Company:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company, organization or volunteer group

                "
                    name='company'
                    value={event.company}
                    onChange={e => handleInputChange(e, index)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="from">start Date:</label>
                  <input
                    type="month"
                    className="form-control"
                    name='from'
                    value={event.from}
                    onChange={e => handleInputChange(e, index)}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="to">end Date:</label>
                  <input
                    type="month"
                    className="form-control"
                    name='to'
                    value={event.to}
                    onChange={e => handleInputChange(e, index)}
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
                    value={event.city}
                    onChange={e => handleInputChange(e, index)}
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label htmlFor="state">State:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    name='state'
                    value={event.state}
                    onChange={e => handleInputChange(e, index)}
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
                        value={event.country}
                        onChange={e => handleInputChange(e, index)}
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="pin">pin code:</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Pin code"
                        name='pin'
                        value={event.pin}
                        onChange={e => handleInputChange(e, index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>What were your responsibilities and accomplishments?</label>
                  <textarea
                    class="form-control"
                    placeholder="Describe how you added value using action verbs and numbers"
                    name='description'
                    value={event.description}
                    onChange={e => handleInputChange(e, index)}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  {experienceData.length !== 1 && <button
                    className="btn btn-outline-danger"
                    onClick={() => handleRemoveClick(index)}>Remove</button>}
                  {experienceData.length - 1 === index && <button className="btn btn-outline-info" onClick={handleAddClick}>Add</button>}
                </div>
              </div>
            </form>
          )
        })}
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-outline-success" onClick={handleFormSubmit} type="submit">Save</button>
      </div>
    </div>
  );
};

export default Experience;
