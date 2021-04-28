import React from "react"
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';


export default class AddDepartment extends React.Component {


    constructor(props) {
      
        super(props)
    }
    // intialize data in state
    state = { DepartmentName:''}


    // add department
    addDepartment = () => {
        axios.post('http://localhost:8080/Departments/add', {
            Name: this.state.DepartmentName,
        }).then(function (response) { console.log(response) })
        this.props.history.push("/Departments")
    }


    render() {
        return (

            <div className="row justify-content-center ">
                <div className="p-5  w-50  ">
                    <input className="name form-control m-2" type="text" placeholder="Name" value={this.state.DepartmentName} onChange={(e) => this.setState({ DepartmentName: e.target.value })} />                   
                    <input className="btn btn-info  w-50 mt-2" type="button" value="Save" onClick={this.addDepartment} />
                </div>
            </div>

        )
    }
}

