import React from "react"
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';


export default class AddCourse extends React.Component {


    constructor(props) {
        super(props)
    }
    // intialize data in state
    state = { CourseName:''}


    // add course
    addCourse = () => {
        axios.post('http://localhost:8080/Course/add', {
            Name: this.state.CourseName,
        }).then(function (response) { console.log(response) })
        this.props.history.push("/Courses")
    }


    render() {
        return (

            <div className="row justify-content-center ">
                <div className="p-5  w-50  ">
                    <input className="name form-control m-2" type="text" placeholder="Name" value={this.state.CourseName} onChange={(e) => this.setState({ CourseName: e.target.value })} />                   
                    <input className="btn btn-info  w-50 mt-2" type="button" value="Save" onClick={this.addCourse} />
                </div>
            </div>

        )
    }
}

