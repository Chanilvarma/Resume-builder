import React, { useState } from "react";

const Education = () => {
    const [educationData, setEducationData] = useState([
        {
            degree: "",
            institute: "",
            percent: "",
            from: "",
            to: "",
            city: "",
            state: "",
            country: "",
            pin: "",
        },
    ]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...educationData];
        list[index][name] = value;
        setEducationData(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...educationData];
        list.splice(index, 1);
        setEducationData(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setEducationData([...educationData,
        {
            degree: "",
            institute: "",
            percent: "",
            from: "",
            to: "",
            city: "",
            state: "",
            country: "",
            pin: "",
        },
        ]);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(educationData)
    }
    return (
        <div className="container">
            <div className="heading">
                <h6>Where did you study?</h6>
            </div>
            <div className="form">
                {educationData.map((event, index) => {
                    return (
                        <form >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="degree">Degree:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What did you study?
                "
                                        name='degree'
                                        value={event.degree}
                                        onChange={e => handleInputChange(e, index)}

                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="institute">School/College:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What school did you go to?
                "
                                        name='institute'
                                        value={event.institute}
                                        onChange={e => handleInputChange(e, index)}

                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="percent">Percentage/CGPA:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What was your percentage?
                "
                                        name='percent'
                                        value={event.percent}
                                        onChange={e => handleInputChange(e, index)}

                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor="from">Start Date:</label>
                                            <input
                                                type="month"
                                                className="form-control"
                                                name='from'
                                                value={event.from}
                                                onChange={e => handleInputChange(e, index)}

                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="to">End Date:</label>
                                            <input
                                                type="month"
                                                className="form-control"
                                                name='to'
                                                value={event.to}
                                                onChange={e => handleInputChange(e, index)}

                                            />
                                        </div>
                                    </div>
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
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                                    {educationData.length !== 1 && <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleRemoveClick(index)}>Remove</button>}
                                    {educationData.length - 1 === index && <button className="btn btn-outline-info" onClick={handleAddClick}>Add</button>}

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

export default Education;
