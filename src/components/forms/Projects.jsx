import React, { useState } from "react";

const Projects = () => {
  const [projectData, setProjectData] = useState([
    {
      title: "",
      tech: "",
      description: '',
      from: "",
      to: "",

    },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...projectData];
    list[index][name] = value;
    setProjectData(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...projectData];
    list.splice(index, 1);
    setProjectData(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setProjectData([...projectData,
    {
      title: "",
      tech: "",
      description: '',
      from: "",
      to: "",

    },
    ]);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(projectData)
  }
  return (
    <div className="container">
      <div className="heading">
        <h6>What are your most relevant Projects?</h6>
      </div>
      <div className="form">
        {projectData.map((event, index) => {
          return (
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title of your project

                "
                    name='title'
                    value={event.title}
                    onChange={e => handleInputChange(e, index)}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="tech">Technologies:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Menstion the technologies use for your project

                "
                    name='tech'
                    value={event.tech}
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
                <div className="col">
                  <label> Description about the project </label>
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
                  {projectData.length !== 1 && <button
                    className="btn btn-outline-danger"
                    onClick={() => handleRemoveClick(index)}>Remove</button>}
                  {projectData.length - 1 === index && <button className="btn btn-outline-info" onClick={handleAddClick}>Add</button>}
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

export default Projects;
