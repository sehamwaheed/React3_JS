import React from "react";
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';

export default class IndexDepartment extends React.Component {

  

  state = { Departments: [] }

  componentDidMount() {
    this.getDepartments();
  }

  // get all Departments

  getDepartments() {
    axios("http://localhost:8080/Departments/list").then(res => { console.log(res); this.setState({ Departments: res.data }) });
  }



  // delete  Department
  deleteDepartment = (id) => {
    debugger
    axios("http://localhost:8080/Departments/delete/" + id).then(res => {
      if(res.data=="this department has students"){
        alert("sorry this department has students") 
      }else{
        this.setState({ Departments: res.data })
      }
    }).catch(r => { alert("error") });
  }

  render() {
    return (

      <div className="text-left p-2">
        { <Link className="btn " to={{ pathname: "/AddDepartment" }} replace  >new </Link>}

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
              this.state.Departments.map((element, i) => {
                return (
                  <tr className="row">
                    <td className="col text-center">{i + 1}</td>
                    <td className="col text-center">{element.Name}</td>

                    <td className="d-flex col text-center">
                      {<Link className="btn " to={{ pathname: "/EditDepartment/" + element._id }} replace >Edit</Link>}
                      <button className="btn" onClick={() => this.deleteDepartment(element._id)}>Delete</button>
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

