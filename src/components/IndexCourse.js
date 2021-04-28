import React from "react";
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';

export default class IndexCourse extends React.Component {

    state = { Courses: [] }

    componentDidMount() {
        this.getCourses();
    }

    // get all Courses

    getCourses() {
        axios("http://localhost:8080/Course/getAll").then(res => { console.log(res); this.setState({ Courses: res.data }) });
    }



    // delete  Course
    deleteCourse = (id) => {
        axios("http://localhost:8080/Course/delete/" + id).then(res => {
            if (res.data == "course deleted") {
                this.componentDidMount();
            } else {
                alert("sorry this department has students")
            }
        })
    }
    render() {
        return (

            <div className="text-left p-2">
                { <Link className="btn " to={{ pathname: "/AddCourse" }} replace  >new </Link>}

                <table className="table">
                    <thead>
                        <tr className="row">
                            <th className="col text-center">#</th>
                            <th className="col text-center">Department Name</th>
                            <th className="col text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Courses.map((element, i) => {
                                return (
                                    <tr className="row">
                                        <td className="col text-center">{i + 1}</td>
                                        <td className="col text-center">{element.Name}</td>

                                        <td className="d-flex col text-center">
                                            {<Link className="btn" to={{ pathname: "/EditCourse/" + element._id }} replace >Edit</Link>}
                                            <button className="btn" onClick={() => this.deleteCourse(element._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

