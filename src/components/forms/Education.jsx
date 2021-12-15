import React, { useState } from "react";

const Education = () => {
    const [inputList, setInputList] = useState([
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
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    return (
        <div className="container">
            <div className="heading">
                <h6>Where did you study?</h6>
            </div>
            <div className="form">
                {inputList.map((event, index) => {
                    return (
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="first name">Degree:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What did you study?
                "
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="middle name">School/College:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What school did you go to?
                "
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="first name">Percentage/CGPA:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What was your percentage?
                "
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor="from">Year of Study [From]:</label>
                                            <input type="month" className="form-control" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="to">Year of Study [To]:</label>
                                            <input type="month" className="form-control" />
                                        </div>
                                    </div>
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
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button className="btn btn-outline-success me-md-2">Save</button>
                                        {inputList.length !== 1 && <button
                                            className="btn btn-outline-danger"
                                            onClick={() => handleRemoveClick(index)}>Remove</button>}
                                        {inputList.length - 1 === index && <button className="btn btn-outline-info" onClick={handleAddClick}>Add</button>}
                                   
                                </div>

                            </div>
                        </form>
                    )
                })}


            </div>
        </div>
    );
};

export default Education;
