import React from 'react';
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';

export default  class DetailsStudent extends React.Component {

    constructor(props) {
        super(props);
    }


    state = {
        Name: '',
        Age: '',
        Email: '',
        Department: '',
        Courses: []
    }

    componentDidMount() {
        this.getStudent();
    }

    // get student details
    getStudent() {

        axios("http://localhost:8080/Students/details/" + this.props.match.params.id).then(res => {
            console.log(res); this.setState({

                Name: res.data.Name,
                Age: res.data.Age,
                Email: res.data.Email,
                Department: res.data.Department.Name,
                Courses: res.data.Courses

            })
        });
    }

    render() {

        return (
            <div className="container bg-light w-25 mt-5 p-5">

                <div className="d-flex justify-content-between  mb-2">
                    <h6>student name</h6>
                    <p>{this.state.Name}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                    <h6>Age</h6>
                    <p>{this.state.Age}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between  mb-2">
                    <h6>Email</h6>
                    <p>{this.state.Email}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between  mb-2 ">
                    <h6>Department</h6>
                    <p>{this.state.Department}</p>
                </div>

                <hr />
                <div className="d-flex justify-content-between  mb-2 ">
                    <h6>Courses</h6>
                    {

                        this.state.Courses.map((c, i) => {

                            return (
                                <p> {i + 1}-{c.Name}</p>
                            )
                        })
                    }
                </div>

                <Link className="btn btn-info" to={{ pathname: "/Students" }} replace >Back To List</Link>

            </div>

        )
    }

}

